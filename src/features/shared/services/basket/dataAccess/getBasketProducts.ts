'use client'

import { Basket } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { useBasketToken } from '@/store/basketToken'
import { ExtendedBasketItem } from '@/types/db'

type BasketData = {
  initialBasketData?: Basket & { Items: ExtendedBasketItem[] }
  basketToken?: string | undefined
}

export const useGetBasketProducts = ({ initialBasketData, basketToken }: BasketData) => {
  const { basketToken: basketTokenStore } = useBasketToken()

  return useQuery({
    queryKey: ['basketProducts'],
    queryFn: async () => {
      const { data } = await axios.get<BasketData>(`/api/baskets/${basketToken || basketTokenStore}/basicData`)
      return data
    },
    refetchOnWindowFocus: false,
    initialData: initialBasketData,
    enabled: basketToken || basketTokenStore ? true : false,
  })
}
