import { useRouter } from 'next/navigation'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { useDispatch } from 'react-redux'

import { addToBasket, getTotals } from '@/store/basketSlice'
import { PurchaseListProduct } from '@/types/typings'

type Props = {
  products?: PurchaseListProduct[]
}

const AddAllAccessibleBtn = ({ products }: Props) => {
  // const [showModal, setShowModal] = useState(false)
  // console.log(product)
  // const { _id, slug, special, mainImage, title, price } = product

  const dispatch = useDispatch()
  const router = useRouter()

  // const currentSlug = slug.current

  const addItemsToBasket = () => {
    const productsBasket = products?.map((product) => {
      const { Id: _id, Name: title, Price: price, MainPhoto: mainImage, ProductCount: quantity, WebUrl: slug } = product

      return { _id, title, price, mainImage, quantity, slug }
    })

    productsBasket?.map((product) => dispatch(addToBasket(product)))
    dispatch(getTotals())
    router.push('/koszyk')
  }

  return (
    <button
      onClick={addItemsToBasket}
      title="Dodaj dostępne"
      className="ocus:bg-[#1f8014] flex h-[36px] w-full items-center justify-center rounded-full bg-[#119e00] px-2 py-3 text-white transition-colors duration-300 hover:bg-[#1f8014] "
    >
      <span className="flex items-center justify-center text-white">
        <span className="inline-block h-[24px] w-[24px]">
          <MdOutlineAddShoppingCart className="h-full w-full stroke-[0px]" />
        </span>

        <span className="flex flex-col">
          <span className="whitespace-nowrap">Dodaj dostępne</span>
        </span>
      </span>
    </button>
  )
}

export default AddAllAccessibleBtn
