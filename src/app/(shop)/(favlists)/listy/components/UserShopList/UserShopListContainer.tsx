'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import LoadingSkelleton from '@/components/features/basket/LoadingSkelleton'
import { ExtendedPurchaseListItem } from '@/types/db'

import { ReturnButtonMobile } from '../../../listy/components/Buttons/ReturnBtnMobile'
import { NeedHelpInfo } from './NeedHelpInfo'
import ShopListBody from './ShopListBody'
import { ShopListBottom } from './ShopListBottom'
import { ShopListHead } from './ShopListHead'

export const UserShopList = () => {
  // /purchaseLists?pagination.currentPage=1&pagination.pageSize=5&sort=lastUpdate%20desc&purchaseListIds=z8y6nf2ep
  const { data: listsData, isFetching } = useQuery<ExtendedPurchaseListItem[]>({
    queryFn: async () => {
      const purchaseListsId = JSON.parse(localStorage.getItem('purchase_lists') ?? '')
      const listIds = Object.keys(purchaseListsId)
      const ids = listIds.join()

      const { data } = await axios.get(`/api/purchaseLists/?purchaseListIds=${ids}`)
      return data
    },

    // enabled: fetchLists,
    refetchOnWindowFocus: false,
    queryKey: ['purchaseLists'],
    onSuccess() {
      // setFetchLists(false)
      // data.map((item: { id: string }) => {
      //   if (item.id === productId) {
      //     setIsLiked(true)
      //     showInfo!(true, false)
      //   }
      // })
    },
  })

  return isFetching ? (
    <LoadingSkelleton />
  ) : (
    <div className="lg:pl-2">
      {/* Back konto */}
      <ReturnButtonMobile link="" title="Wróć" />

      {/* Button to Add List React Portal*/}
      <ShopListHead listsLength={listsData?.length} />

      <div className="min-h-[32px]">{/* Notification */}</div>

      {/* Created List Dynamic with fav products */}

      {/* How use lists */}
      {listsData ? <ShopListBody lists={listsData ?? []} /> : null}

      <ShopListBottom isFetched={(listsData?.length ?? 0) > 0} />

      {/* Need Help ? */}
      <div className="max-lg:hidden">
        <NeedHelpInfo />
      </div>
    </div>
  )
}
