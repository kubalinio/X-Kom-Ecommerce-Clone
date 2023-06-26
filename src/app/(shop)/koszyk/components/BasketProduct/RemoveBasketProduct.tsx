import { HiOutlineTrash } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'

import { getTotals, removeItem } from '@/store/basketSlice'

export const RemoveBasketProductExpand = ({ id, closeExpand }: { id: string; closeExpand: () => void }) => {
  const dispatch = useDispatch()

  const removeItemFromBasket = () => {
    dispatch(removeItem(id))
    dispatch(getTotals())
    closeExpand()
  }

  return (
    <button
      onClick={removeItemFromBasket}
      title="Usuń z koszyka"
      className="inline-flex h-[48px] w-full cursor-pointer items-center justify-start border-none bg-transparent px-5 py-2 text-[#4d4d4d] hover:bg-[#ddd]"
    >
      <span className="mr-1 inline-block h-6 w-6">
        <HiOutlineTrash className="h-full w-full text-2xl" />
      </span>

      <span className="flex flex-col">
        <span className="whitespace-nowrap py-3">Usuń z koszyka</span>
      </span>
    </button>
  )
}

export const RemoveBasketProduct = ({ id }: { id: string }) => {
  const dispatch = useDispatch()

  const removeItemFromBasket = () => {
    dispatch(removeItem(id))
    dispatch(getTotals())
  }

  return (
    <button
      onClick={removeItemFromBasket}
      className="ml-1 hidden h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full border-none bg-transparent transition-colors duration-200 hover:bg-[#ddd] md:inline-flex"
    >
      <span className="inline-block h-5 w-5">
        <HiOutlineTrash className="h-full w-full text-xl" />
      </span>
    </button>
  )
}
