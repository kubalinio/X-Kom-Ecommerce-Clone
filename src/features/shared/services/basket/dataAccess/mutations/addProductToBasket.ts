import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

import { basketProductRequest } from '@/lib/validators/basketProduct'
import { useBasketToken } from '@/store/basketToken'

interface MutationProps {
  productId: string
  count: number
}

export const useAddProductToBasket = () => {
  const queryClient = useQueryClient()
  const updateBasketToken = useBasketToken((state) => state.setBasketToken)

  return useMutation({
    mutationFn: async ({ productId, count }: MutationProps) => {
      const payload: basketProductRequest = {
        productId,
        count,
      }
      const { data } = await axios.post(`/api/baskets`, payload)
      return data
    },
    onError: (err) => {
      console.log(err)
    },
    onSuccess: ({ basketToken }) => {
      updateBasketToken(basketToken)
      queryClient.invalidateQueries(['basketProducts'])
    },
  })
}
