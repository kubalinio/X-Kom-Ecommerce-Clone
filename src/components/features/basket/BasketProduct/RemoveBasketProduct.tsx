/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'

// import { getTotals, removeItem } from '@/store/basketSlice'
import { useLoadingContext } from '../BasketPageFeed'

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

export const RemoveBasketProduct = ({ id, basketToken }: { id: string; basketToken: string | null }) => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const { setIsLoading } = useLoadingContext()

  const { mutate: removeItemFromBasket, isLoading } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.delete(`/api/baskets/${basketToken}/items/${id}`)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['basketPageData'])
      queryClient.invalidateQueries(['basketProducts'])
      router.refresh()
    },
  })

  useEffect(() => {
    setIsLoading(isLoading)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  return (
    <>
      <button
        onClick={() => removeItemFromBasket()}
        className="ml-1 hidden h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full border-none bg-transparent transition-colors duration-200 hover:bg-[#ddd] md:inline-flex"
      >
        <span className="inline-block h-5 w-5">
          <HiOutlineTrash className="h-full w-full text-xl" />
        </span>
      </button>

      {isLoading ? (
        <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-slate-300 opacity-30">
          <Loader2 className="h-[200px] w-[200px] animate-spin" />
        </div>
      ) : null}
    </>
  )
}
