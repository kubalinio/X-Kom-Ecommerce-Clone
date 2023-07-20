'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

import { changeQuantityBasketItemRequest } from '@/lib/validators/basketProduct'

interface MutationProps {
  basketToken: string
  productId: string
  count: number
}

export const useChangeBasketItemQuantity = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ basketToken, productId, count }: MutationProps) => {
      const payload: changeQuantityBasketItemRequest = {
        basketToken,
        productId,
        count,
      }
      const { data } = await axios.put(`/api/baskets/${basketToken}/items/${productId}`, payload)
      return data
    },
    onError: (error) => {
      console.log(error)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['basketProducts'])
    },
  })
}
