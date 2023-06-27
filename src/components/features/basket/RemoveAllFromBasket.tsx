'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'

import { useLoadingContext } from './BasketPageFeed'

interface RemoveAllFromBasketProp {
  basketToken: string
}

// @TODO Show Modal to approve deleting all products from basket

const RemoveAllFromBasket: FC<RemoveAllFromBasketProp> = ({ basketToken }) => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const { setIsLoading } = useLoadingContext()

  const { mutate: deleteAllItems, isLoading } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.put(`/api/baskets/${basketToken}`)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['basketPageData'])
      queryClient.invalidateQueries(['basketProducts'])
      router.refresh()
    },
  })
  setIsLoading(isLoading)

  return (
    <button
      onClick={() => deleteAllItems()}
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
