import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"

export const useRemoveAllBasketItems = (basketToken: string) => {
    const queryClient = useQueryClient()
    const router = useRouter()

    return useMutation({
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
}