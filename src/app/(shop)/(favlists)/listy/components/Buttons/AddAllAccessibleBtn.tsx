/* eslint-disable @typescript-eslint/no-unused-vars */
import { ListItem } from '@prisma/client'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

type Props = {
  products: ListItem[]
}

export const AddAllAccessibleBtn = ({ products }: Props) => {
  // const [showModal, setShowModal] = useState(false)
  // const { _id, slug, special, mainImage, title, price } = product

  // const currentSlug = slug.current

  return (
    <button
      // onClick={}
      disabled={true}
      title="Dodaj dostępne"
      className="flex h-[36px] w-full items-center justify-center rounded-full bg-[#119e00] px-2 py-3 text-white transition-colors duration-300 hover:bg-[#1f8014] focus:bg-[#1f8014] disabled:cursor-not-allowed disabled:opacity-70"
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
