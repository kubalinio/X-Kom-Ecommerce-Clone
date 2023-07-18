import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

// one purchase
// /api/v1/xkom/purchaseLists/getProductsByPurchaseListIds?purchaseListIds=8peewrxhz

// many purchase
// /api/v1/xkom/purchaseLists/getProductsByPurchaseListIds?purchaseListIds=8peewrxhz%2Cahjq7qqb4

export const useGetFavListItem = () => {
  return useQuery({
    queryFn: async () => {
      if (typeof window !== 'undefined' && window.localStorage) {
        const purchaseListsId = JSON.parse(localStorage.getItem('purchase_lists') ?? '{}')
        const listIds = Object.keys(purchaseListsId)
        const { data } = await axios.get(
          `/api/purchaseLists/getProductsByPurchaseListIds?purchaseListIds=${listIds?.join()}`
        )
        return data
      }
    },
    refetchOnWindowFocus: false,
    queryKey: ['products-in-fav-list'],
  })
}
