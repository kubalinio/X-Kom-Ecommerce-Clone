import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

interface MutationProps {
  productId: string
}

// api/v1/xkom/purchaseLists/8peewrxhz/items?productId=1154532&modificationToken=a4f0218e2f50d9ee456dd4cfd827dbb0
export const useRemoveItemFavList = ({ productId }: MutationProps) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (listId: string) => {
      const { data } = await axios.delete(`/api/purchaseLists/${listId}/items?productId=${productId}`)
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
