import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { DataStoradgeResponse } from '@/app/api/purchaseLists/route'
import { purchaseListRequest } from '@/lib/validators/purchaseList'

interface MutationProps {
  productId: string
}

export const useCreateNewFavList = ({ productId }: MutationProps) => {
  return useMutation({
    mutationFn: async ({ listName }: { listName: string }) => {
      const payload: purchaseListRequest = {
        name: listName,
        items: [
          {
            productId: productId,
            count: 1,
          },
        ],
      }
      const { data } = await axios.post('/api/purchaseLists', payload)
      return data
    },
    onSuccess: ({ listId, listName }: DataStoradgeResponse) => [listId, listName],
  })
}
