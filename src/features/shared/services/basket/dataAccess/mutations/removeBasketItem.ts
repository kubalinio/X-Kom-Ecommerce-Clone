import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface MutationProps {
  basketToken: string
  productId: string
}

export const useRemoveBasketItem = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: async ({ basketToken, productId }: MutationProps) => {
      const { data } = await axios.delete(`/api/baskets/${basketToken}/items/${productId}`)
      return data
    },
    onMutate: () => {
      queryClient.invalidateQueries(['basketProducts'])
    },
    onSuccess: () => {
      router.refresh()
    },
  })
}
