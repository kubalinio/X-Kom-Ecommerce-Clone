import { useRouter } from 'next/navigation'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { useDispatch } from 'react-redux'

import { addToBasket, getTotals } from '@/store/basketSlice'
import { PurchaseListProduct } from '@/types/typings'

type Props = {
  product: PurchaseListProduct
}

const AddToBasketBtn = ({ product }: Props) => {
  const dispatch = useDispatch()
  const router = useRouter()

  // const currentSlug = slug.current

  const addItemToBasket = () => {
    const { Id: _id, Name: title, Price: price, MainPhoto: mainImage, ProductCount: quantity, WebUrl: slug } = product

    const basketProduct = { _id, title, price, mainImage, quantity, slug }

    dispatch(addToBasket(basketProduct))
    dispatch(getTotals())
    router.push('/koszyk')
  }

  return (
    <button
      onClick={addItemToBasket}
      title="Usuń z listy"
      className="inline-flex h-[48px] w-full items-center justify-start whitespace-nowrap rounded-none bg-transparent px-4 py-3 text-[#119e00] transition-colors duration-200 hover:bg-[#ddd]"
    >
      <span className="mr-3 inline-block h-6 w-6 overflow-hidden">
        <MdOutlineAddShoppingCart className="h-full w-full text-xl" />
      </span>

      <span className="flex flex-col items-center whitespace-nowrap text-center">
        <span className="mt-[2px] inline-block text-center">Dodaj do koszyka</span>
      </span>
    </button>
  )
}

export default AddToBasketBtn
