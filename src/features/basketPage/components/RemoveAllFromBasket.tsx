'use client'

import { FC, useEffect } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'

import { useRemoveAllBasketItems } from '@/features/shared/services/basket/dataAccess/mutations/removeAllBasketItems'
import { useLoadingState } from '@/store/LoadingState'

interface RemoveAllFromBasketProp {
  basketToken: string
}

// @TODO Show Modal to approve deleting all products from basket
export const RemoveAllFromBasket: FC<RemoveAllFromBasketProp> = ({ basketToken }) => {
  const { setIsLoading } = useLoadingState()
  const { mutate: deleteAllItems, isLoading } = useRemoveAllBasketItems(basketToken)

  useEffect(() => {
    setIsLoading(isLoading)
  }, [isLoading, setIsLoading])

  return (
    <button
      onClick={() => deleteAllItems()}
      title="Wyczysc koszyk"
      className="inline-flex h-10 w-full cursor-pointer items-center justify-start rounded-full border-none bg-transparent px-3 py-2 text-[#4d4d4d] transition-colors duration-200 hover:bg-gray-100"
    >
      <span className="inline-block w-6 h-6 mr-1">
        <HiOutlineTrash className="w-full h-full text-2xl" />
      </span>

      <span className="flex flex-col">
        <span className="py-3 whitespace-nowrap">Wyczyść koszyk</span>
      </span>
    </button>
  )
}
