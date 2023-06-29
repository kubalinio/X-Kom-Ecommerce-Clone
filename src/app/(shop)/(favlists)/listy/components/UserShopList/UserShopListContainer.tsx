'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'

import LoadingSkelleton from '@/components/features/basket/LoadingSkelleton'
import { ExtendedPurchaseListItem } from '@/types/db'

import { ReturnButtonMobile } from '../../../listy/components/Buttons/ReturnBtnMobile'
import { NeedHelpInfo } from './NeedHelpInfo'
import ShopListBody from './ShopListBody'
import { ShopListBottom } from './ShopListBottom'
import { ShopListHead } from './ShopListHead'

// Fetch lists
// when create list fetch by slug look post it Project

export const UserShopList = () => {
  const [listIds, setListIds] = useState<string[]>([])
  const [fetchLists, setFetchLists] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const purchaseListsId = JSON.parse(localStorage.getItem('purchase_lists') ?? '')
      const listIds = Object.keys(purchaseListsId)
      setListIds(listIds)
      setFetchLists(true)
    }
  }, [])

  // /purchaseLists?pagination.currentPage=1&pagination.pageSize=5&sort=lastUpdate%20desc&purchaseListIds=z8y6nf2ep
  const { data: listsData, isLoading } = useQuery<ExtendedPurchaseListItem[]>({
    queryFn: async () => {
      const ids = listIds
      const { data } = await axios.get(`/api/purchaseLists/?purchaseListIds=${ids?.join()}`)
      return data
    },
    enabled: fetchLists,
    refetchOnWindowFocus: false,
    queryKey: ['products-in-fav-list'],
    onSuccess() {
      setFetchLists(false)
      // data.map((item: { id: string }) => {
      //   if (item.id === productId) {
      //     setIsLiked(true)
      //     showInfo!(true, false)
      //   }
      // })
    },
  })

  return isLoading ? (
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
      {listsData?.length ?? 0 > 0 ? <ShopListBody lists={listsData ?? []} /> : null}

      <ShopListBottom isFetched={(listsData?.length ?? 0) > 0} />

      {/* Need Help ? */}
      <div className="max-lg:hidden">
        <NeedHelpInfo />
      </div>
    </div>
  )
}
