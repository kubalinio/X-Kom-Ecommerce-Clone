/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

import { DataStoradgeResponse } from '@/app/api/purchaseLists/route'
import { addItemToListRequest, purchaseListRequest } from '@/lib/validators/purchaseList'

import { FavListBtn } from './FavListBtn'

type Props = {
  versionBtn: 'FavLong' | 'FavDesktop' | 'FavGallery' | null | undefined
  closeExpand?: () => void
  showInfo?: (isLiked: boolean, isShow: boolean) => void
  productId: string
}

type FavBtnContextType = {
  isLoading: boolean
  isLiked: boolean
}

const FavBtnContext = createContext<FavBtnContextType>({
  isLoading: false,
  isLiked: false,
})

export const AddToFavList = ({ productId, versionBtn, closeExpand, showInfo }: Props) => {
  const [purchaseListsId, setPurchaseListsId] = useState<string[] | null>(null)
  const queryClient = useQueryClient()
  const [fetchFav, setFetchFav] = useState(false)

  const [effect, setEffect] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  // key: purchase_lists
  // value(id): {name: 'Ulubione'}

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const purchaseListsId = JSON.parse(localStorage.getItem('purchase_lists')!)
      const listIds = Object.keys(purchaseListsId)
      setPurchaseListsId(listIds)

      setFetchFav(true)
    }
  }, [])

  // one purchase
  // /api/v1/xkom/purchaseLists/getProductsByPurchaseListIds?purchaseListIds=8peewrxhz

  // many purchase
  // /api/v1/xkom/purchaseLists/getProductsByPurchaseListIds?purchaseListIds=8peewrxhz%2Cahjq7qqb4
  const { isLoading: isLoadingIds } = useQuery({
    queryFn: async () => {
      const ids = purchaseListsId
      const { data } = await axios.get(`/api/purchaseLists/getProductsByPurchaseListIds?purchaseListIds=${ids?.join()}`)
      return data
    },
    enabled: fetchFav,
    refetchOnWindowFocus: false,
    queryKey: ['products-in-fav-list'],
    onSuccess(data) {
      {
        setFetchFav(false)
        data.map((item: { id: string }) => {
          if (item.id === productId) {
            setIsLiked(true)
            showInfo!(true, false)
          }
        })
      }
    },
  })
  // #3 RemoveItem,
  // api/v1/xkom/purchaseLists/8peewrxhz/items?productId=1154532&modificationToken=a4f0218e2f50d9ee456dd4cfd827dbb0
  const { mutate: removeItemToList, isLoading: isRemoveItem } = useMutation({
    mutationFn: async (listId: string[]) => {
      const id = listId.join()

      const { data } = await axios.delete(`/api/purchaseLists/${id}/items?productId=${productId}`)
      return data
    },
    onError: (error: AxiosError) => {
      console.log(error)
    },
    onSuccess: (data) => {
      setIsLiked(false)
      showInfo!(false, false)
      setEffect(false)
    },
  })

  // #2 Add Item to list
  const { mutate: addItemToList, isLoading: isAddItem } = useMutation({
    mutationFn: async (listId: string[]) => {
      const payload: addItemToListRequest = {
        productId,
        count: 1,
      }
      const { data } = await axios.post(`/api/purchaseLists/${listId.join()}/items`, payload)
      return data
    },
    onError: (error: AxiosError) => {
      console.log(error)
    },
    onSuccess: (data) => {
      setIsLiked(true)
      showInfo!(true, true)
      setEffect(true)
    },
  })

  // #1 New List
  const { mutate: createNewList, isLoading: isLoadingList } = useMutation({
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
    onSuccess: ({ listId, listName }: DataStoradgeResponse) => {
      const data = { [listId]: { name: [listName] } }
      localStorage.setItem('purchase_lists', JSON.stringify(data))
      const list = localStorage.getItem('purchase_lists')
      setPurchaseListsId(JSON.parse(list!))
      setIsLiked(true)
      showInfo!(true, true)
      setEffect(true)
    },
  })

  // #1 Dodanie Itemu Kiedy niema list
  // #2 Dodanie Itemu Kiedy lista jest
  // #3 Kiedy Produkt jest dodany a chcemy go usunąć
  const handleClickBtn = () => {
    const purchaseListsId = JSON.parse(localStorage.getItem('purchase_lists')!)
    console.log(purchaseListsId)

    if (purchaseListsId !== null && isLiked === true) {
      removeItemToList(Object.keys(purchaseListsId))
    } else if (purchaseListsId !== null && isLiked === false) {
      addItemToList(Object.keys(purchaseListsId))
    } else {
      const listName = 'Ulubione'
      createNewList({ listName })
    }
  }

  return (
    <FavBtnContext.Provider
      value={{
        isLoading: isRemoveItem || isLoadingList || isAddItem,
        isLiked,
      }}
    >
      <FavListBtn onClick={() => handleClickBtn()} variant={versionBtn} />
    </FavBtnContext.Provider>
  )
}

export const useFavBtnContext = () => useContext(FavBtnContext)
