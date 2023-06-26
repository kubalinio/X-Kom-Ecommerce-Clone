/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import LoadingSkelleton from '@/components/features/basket/LoadingSkelleton'
import { RootState } from '@/store'

import { ReturnButtonMobile } from '../Buttons/ReturnBtnMobile'
import { NeedHelpInfo } from './NeedHelpInfo'
import ShopListBody from './ShopListBody'
import { ShopListBottom } from './ShopListBottom'
import { ShopListHead } from './ShopListHead'

// Fetch lists
// when create list fetch by slug look post it Project

const fetchAllList = async (listIds: string[]) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/purchaseLists/getPurchaseLists`, {
    ids: listIds,
  })
  return response.data
}

export const UserShopList = () => {
  const purchaseLists = useSelector((state: RootState) => state.purchaseList)

  const [listIds, setListIds] = useState<Array<string>>(purchaseLists.purchaseListItems.map((item) => item.id))
  const [fetchList, setFetchList] = useState(true)
  const [isListExist, setIsListExist] = useState(false)

  useEffect(() => {
    if (purchaseLists.purchaseListItems.length > 0) {
      setFetchList(true)
      setListIds(purchaseLists.purchaseListItems.map((item) => item.id))
      setIsListExist(true)
    } else {
      setIsListExist(false)
      setFetchList(false)
    }
  }, [purchaseLists])

  const { data, error, isLoading, isFetching } = useQuery({
    queryFn: () => fetchAllList(listIds),
    queryKey: ['purchaseLists'],
    enabled: fetchList,
    onSuccess: () => {
      setFetchList(false)
    },
  })
  if (error) return <div>error</div>

  // useEffect(() => {
  //     if (purchaseLists.purchaseListItems.length < 1) {
  //         console.log(purchaseLists.purchaseListItems.length)
  //     }
  // }, [purchaseLists.purchaseListItems.length])

  return (
    <div className="lg:pl-2">
      {isLoading || isFetching ? (
        <LoadingSkelleton />
      ) : (
        <>
          {/* Back konto */}
          <ReturnButtonMobile link="" title="Wróć" />

          {/* Button to Add List React Portal*/}
          <ShopListHead listsLength={data?.length} />

          <div className="min-h-[32px]">{/* Notification */}</div>

          {/* Created List Dynamic with fav products */}

          {/* How use lists */}
          {isListExist ? <ShopListBody lists={data!} /> : ''}

          <ShopListBottom isFetched={isListExist} />

          {/* Need Help ? */}
          <div className="max-lg:hidden">
            <NeedHelpInfo />
          </div>
        </>
      )}
    </div>
  )
}
