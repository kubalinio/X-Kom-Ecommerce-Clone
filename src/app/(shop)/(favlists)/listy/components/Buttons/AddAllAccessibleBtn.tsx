/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductItem } from '@prisma/client'

type Props = {
  products: ProductItem[]
}

export const AddAllAccessibleBtn = ({ products }: Props) => {
  // const [showModal, setShowModal] = useState(false)
  // console.log(product)
  // const { _id, slug, special, mainImage, title, price } = product

  // const currentSlug = slug.current

  return (
    // <AddToBasket />
    <div>Dodaj dostępne</div>

    // <button
    //   onClick={addItemsToBasket}
    //   title="Dodaj dostępne"
    //   className="ocus:bg-[#1f8014] flex h-[36px] w-full items-center justify-center rounded-full bg-[#119e00] px-2 py-3 text-white transition-colors duration-300 hover:bg-[#1f8014] "
    // >
    //   <span className="flex items-center justify-center text-white">
    //     <span className="inline-block h-[24px] w-[24px]">
    //       <MdOutlineAddShoppingCart className="h-full w-full stroke-[0px]" />
    //     </span>

    //     <span className="flex flex-col">
    //       <span className="whitespace-nowrap">Dodaj dostępne</span>
    //     </span>
    //   </span>
    // </button>
  )
}
