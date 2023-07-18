import { Basket } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { getCookie } from 'cookies-next'

import { ExtendedBasketItem } from '@/types/db'

type BasketData = Basket & { Items: ExtendedBasketItem[] }

export const useGetBasketProducts = (initialBasketData: BasketData) => {
  const currentBasketToken = getCookie('basketToken')

  return useQuery({
    queryKey: ['basketProducts'],
    queryFn: async () => {
      const { data } = await axios.get<BasketData>(`/api/baskets/${currentBasketToken}/basicData`)
      return data
    },
    refetchOnWindowFocus: false,
    initialData: initialBasketData,
  })
}
