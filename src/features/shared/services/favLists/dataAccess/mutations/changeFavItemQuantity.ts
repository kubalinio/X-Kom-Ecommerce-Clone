import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

import { changeQuantityFavListRequest } from '@/lib/validators/purchaseList'

interface MutationProps {
  listId: string
  productId: string
  count: number
}

export const useChangeFavItemQuantity = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ listId, productId, count }: MutationProps) => {
      const payload: changeQuantityFavListRequest = {
        listId,
        productId,
        count,
      }
      const { data } = await axios.put(`/api/purchaseLists`, payload)
      return data
    },
    onError: (error) => {
      console.log(error)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['products-in-fav-list'])
    },
  })
}
