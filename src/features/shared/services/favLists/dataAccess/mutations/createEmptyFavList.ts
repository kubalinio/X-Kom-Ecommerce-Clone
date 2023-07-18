import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'

import { DataStoradgeResponse } from '@/app/api/purchaseLists/route'
import { purchaseListRequest } from '@/lib/validators/purchaseList'

export const useCreateEmptyFav = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (listName: string) => {
      const payload: purchaseListRequest = {
        name: listName,
        items: [],
      }
      const { data } = await axios.post('/api/purchaseLists', payload)
      return data
    },
    onSuccess: ({ listId, listName }: DataStoradgeResponse) => {
      addToStoradgeListData({ listId, listName })
      queryClient.invalidateQueries(['purchaseLists'])
      router.push(`/lista/${listId}`)
    },
  })
}

const addToStoradgeListData = ({ listId, listName }: DataStoradgeResponse) => {
  if (localStorage.getItem('purchase_lists')) {
    const existingLists = JSON.parse(localStorage.getItem('purchase_lists') ?? '')
    const data = { ...existingLists, [listId]: { name: listName } }
    localStorage.setItem('purchase_lists', JSON.stringify(data))
  } else {
    const data = { [listId]: { name: listName } }
    localStorage.setItem('purchase_lists', JSON.stringify(data))
  }
}
