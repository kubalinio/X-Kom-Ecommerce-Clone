'use client'

import { useEffect, useState } from 'react'

import { useGetFavListItem } from './dataAccess/getFavListItem'
import { useAddItemToExistFavList } from './dataAccess/mutations/addItemToExistFavList'
import { useCreateNewFavList } from './dataAccess/mutations/createNewFavList'
import { useRemoveItemFavList } from './dataAccess/mutations/removeItemFavList'

type Props = {
  productId: string
}

const AddToFavList = ({ productId }: Props) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showPopper, setShowPopper] = useState(false)

  const getFavListItem = useGetFavListItem()
  const createNewList = useCreateNewFavList({ productId })
  const addItemToFav = useAddItemToExistFavList({ productId })
  const removeItem = useRemoveItemFavList({ productId })

  useEffect(() => {
    if (createNewList.isLoading || addItemToFav.isLoading || removeItem.isLoading) {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
  }, [createNewList.isLoading, addItemToFav.isLoading, removeItem.isLoading])

  useEffect(() => {
    getFavListItem.data?.map((item: { productId: string }) => {
      if (item.productId === productId) {
        setIsLiked(true)
      }
    })
  }, [getFavListItem.data, getFavListItem.isSuccess, productId])

  useEffect(() => {
    if (removeItem.isSuccess) {
      setIsLoading(false)
      setIsLiked(false)
      setShowPopper(false)
    }
  }, [removeItem.isSuccess])

  useEffect(() => {
    if (addItemToFav.isSuccess) {
      setIsLoading(false)
      setIsLiked(true)
      setShowPopper(true)
    }
  }, [addItemToFav.isSuccess])

  useEffect(() => {
    if (createNewList.data && createNewList.isSuccess) {
      const { listId, listName } = createNewList.data
      const dataStorage = { [listId]: { name: listName } }
      localStorage.setItem('purchase_lists', JSON.stringify(dataStorage))

      setIsLiked(true)
      setIsLoading(false)
      setShowPopper(true)
    }
  }, [createNewList.isSuccess, createNewList.data])

  const toggleFav = () => {
    const purchaseListsId = JSON.parse(localStorage.getItem('purchase_lists') ?? '{}')
    const listIds = Object.keys(purchaseListsId)

    if (listIds.length > 0 && isLiked === true) {
      // Uzycie danych zfechowanych productid i idlisty
      // Użyć localstoradge key id
      if (getFavListItem.data) {
        console.log(getFavListItem.data)
        const listWhereIsProduct = getFavListItem.data.find(
          (item: { productId: string }) => item.productId === productId
        )
        const { listId } = listWhereIsProduct
        removeItem.mutate(listId)
      } else {
        removeItem.mutate(listIds[0])
      }
    } else if (listIds.length > 0 && isLiked === false) {
      addItemToFav.mutate(listIds)
    } else {
      const listName = 'Ulubione'
      createNewList.mutate({ listName })
      setIsLoading(true)
    }
  }

  return { toggleFav, isLoading, isLiked, showPopper }
}

export const useFavList = (productId: string) => {
  return AddToFavList({ productId })
}
