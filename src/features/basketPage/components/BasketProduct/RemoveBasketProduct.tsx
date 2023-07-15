/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useEffect } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'

import { DeleteBasketBtn } from '@/features/shared/services/basket/components/DeleteBasketBtn'
import { useRemoveBasketItem } from '@/features/shared/services/basket/dataAccess/mutations/removeBasketItem'
import { useLoadingState } from '@/store/LoadingState'

// import { getTotals, removeItem } from '@/store/basketSlice'

export const RemoveBasketProductExpand = ({ id, closeExpand }: { id: string; closeExpand: () => void }) => {
  // const dispatch = useDispatch()

  const removeItemFromBasket = () => {
    // dispatch(removeItem(id))
    // dispatch(getTotals())
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

export const RemoveBasketProduct = ({ id, basketToken }: { id: string; basketToken: string }) => {
  const { setIsLoading } = useLoadingState()
  const { mutate, isLoading } = useRemoveBasketItem()

  const handleClick = () => {
    const productId = id
    mutate({ basketToken, productId })
  }

  useEffect(() => {
    isLoading ? setIsLoading(true) : setIsLoading(false)
  }, [isLoading])

  return <DeleteBasketBtn onClick={() => handleClick()} variant={'sm'} isLoading={isLoading} />
}
