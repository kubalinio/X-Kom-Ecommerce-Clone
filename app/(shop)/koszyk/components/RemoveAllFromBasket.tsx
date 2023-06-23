import { HiOutlineTrash } from 'react-icons/hi2'

const RemoveAllFromBasket = () => {
  return (
    <button
      title="Wyczysc koszyk"
      className="inline-flex h-10 w-full cursor-pointer items-center justify-start rounded-full border-none bg-transparent px-3 py-2 text-[#4d4d4d] transition-colors duration-200 hover:bg-gray-100"
    >
      <span className="mr-1 inline-block h-6 w-6">
        <HiOutlineTrash className="h-full w-full text-2xl" />
      </span>

      <span className="flex flex-col">
        <span className="whitespace-nowrap py-3">Wyczyść koszyk</span>
      </span>
    </button>
  )
}

export default RemoveAllFromBasket
