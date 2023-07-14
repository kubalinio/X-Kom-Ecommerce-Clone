import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export const useDeleteFavList = (id: string) => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const removeStoradgeListData = (listId: string) => {
    const existingLists = JSON.parse(localStorage.getItem('purchase_lists') ?? '{}')
    const listIds = Object.keys(existingLists)

    if (listIds.length > 0) {
      // eslint-disable-next-line security/detect-object-injection
      delete existingLists[listId]
      const data = { ...existingLists }
      localStorage.setItem('purchase_lists', JSON.stringify(data))
    } else {
      localStorage.removeItem('purchase_lists')
    }
  }

  return useMutation({
    mutationFn: async () => {
      const { data } = await axios.delete(`/api/purchaseLists/${id}`)
      return data
    },
    onSuccess: (listId) => {
      removeStoradgeListData(listId)
      router.push('/listy')
      router.refresh()
      queryClient.invalidateQueries(['purchaseLists'])
    },
  })
}
