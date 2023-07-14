import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { ExtendedPurchaseListItem } from '@/types/db'

// /purchaseLists?pagination.currentPage=1&pagination.pageSize=5&sort=lastUpdate%20desc&purchaseListIds=z8y6nf2ep

export const useGetFavLists = () => {
  return useQuery<ExtendedPurchaseListItem[]>({
    queryFn: async () => {
      const purchaseListsId = localStorage.getItem('purchase_lists') ?? null

      console.log(purchaseListsId)

      if (purchaseListsId) {
        const purchaseListsIdparsed = JSON.parse(purchaseListsId)
        const listIds = Object.keys(purchaseListsIdparsed)
        const ids = listIds.join()
        const { data } = await axios.get(`/api/purchaseLists/?purchaseListIds=${ids}`)
        return data
      } else return []
    },

    refetchOnWindowFocus: false,
    queryKey: ['purchaseLists'],
    // onSuccess() {
    // setFetchLists(false)
    // data.map((item: { id: string }) => {
    //   if (item.id === productId) {
    //     setIsLiked(true)
    //     showInfo!(true, false)
    //   }
    // })
    // },
  })
}
