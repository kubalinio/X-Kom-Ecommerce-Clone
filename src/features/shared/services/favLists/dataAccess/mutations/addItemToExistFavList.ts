import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

import { addItemToListRequest } from '@/lib/validators/purchaseList'

interface MutationProps {
  productId: string
}

export const useAddItemToExistFavList = ({ productId }: MutationProps) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (listId: string[]) => {
      const lastList = listId[listId.length - 1]
      const payload: addItemToListRequest = {
        productId,
        count: 1,
      }
      const { data } = await axios.post(`/api/purchaseLists/${lastList}/items`, payload)
      return data
    },
    onError: (error: AxiosError) => {
      console.log(error)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['products-in-fav-list'])
    },
  })
}
