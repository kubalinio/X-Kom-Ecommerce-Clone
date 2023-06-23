/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'

import { LoadingSpinner } from '@/components/LoadingSpinner'
import { RootState } from '@/store'
import { addToPurchaseList } from '@/store/purchaseSlice'
import { Product } from '@/types/typings'

type Props = {
  versionBtn: string
  closeExpand?: () => void
  showInfo?: (isLiked: boolean, isShow: boolean) => void
  product: Product
}

const fetchProductsInFav = async (listIds: string[]) => {
  const response = await axios.post('/api/purchaseLists/productsInFavList', {
    purchaseListsId: listIds,
  })
  return response.data
}

export const AddToFavListBtn = ({ product, versionBtn, closeExpand, showInfo }: Props) => {
  const { _id: id, title, price, mainImage, slug } = product

  const dispatch = useDispatch()
  const [listIds, setListIds] = useState<Array<string>>([])
  const [fetchFav, setFetchFav] = useState(false)

  const queryClient = useQueryClient()
  const [effect, setEffect] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const purchaseList = useSelector((state: RootState) => state.purchaseList)

  useEffect(() => {
    setListIds(purchaseList.purchaseListItems.map((item) => item.id))

    if (purchaseList.purchaseListItems.length > 0) {
      setFetchFav(true)
    } else {
      setFetchFav(false)
    }
  }, [purchaseList.purchaseListItems.length])

  const { isLoading: isLoadingIds, isFetching } = useQuery({
    queryFn: () => fetchProductsInFav(listIds),
    queryKey: ['products-in-fav-list'],
    enabled: fetchFav,
    onSuccess(data) {
      {
        setFetchFav(false)
        data.map((item: { Id: string }) => {
          if (item.Id === id) {
            setIsLiked(true)
            showInfo!(true, false)
          }
        })
      }
    },
  })

  const { mutate, isLoading } = useMutation(
    async (listIds: string) =>
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/purchaseLists/addProductToList`, {
        listId: listIds,
        Id: id,
        ProductCount: 1,
        Name: title,
        MainPhoto: mainImage,
        IsPriceVisible: true,
        Price: price,
      }),
    {
      onError: (error: AxiosError) => {
        console.log(error)
      },
      onSuccess: (data) => {
        if (data.status === 201) {
          setIsLiked(true)
          showInfo!(true, true)
          setEffect(true)
        }

        if (data.status === 200) {
          setIsLiked(false)
          showInfo!(false, false)
          setEffect(false)
        }
      },
    }
  )

  const { mutate: mutateList, isLoading: isLoadingList } = useMutation(
    async ({ listName, listId }: { listName: string; listId: string }) =>
      // const id = await new ObjectId().toString()
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/purchaseLists/createPurchaseList`, {
        Name: listName,
        Id: listId,
        WebUrl: `/listy/${listId}`,
      }),
    {
      onError: (error: AxiosError) => {
        console.log(error)
      },
      onSuccess: ({ data }) => {
        queryClient.invalidateQueries(['purchaseLists'])

        mutate(data.Id)
      },
    }
  )

  const handleClickBtn = () => {
    if (listIds.length > 0) {
      mutate(listIds[listIds.length - 1])
    } else {
      const listId = uuid().slice(0, 8)
      dispatch(addToPurchaseList({ id: listId }))
      setListIds(purchaseList.purchaseListItems.map((item) => item.id))
      mutateList({ listName: 'Ulubione', listId })
    }
  }

  const Icon = () => (
    <span className="flex h-5 w-5 items-center justify-center overflow-hidden">
      {isLoading || isLoadingList || (isLoadingIds && isFetching) ? (
        <LoadingSpinner />
      ) : isLiked ? (
        <IoMdHeart className="h-full w-full text-[#BE0064]" />
      ) : (
        <IoMdHeartEmpty className="h-full w-full text-[#BE0064]" />
      )}
    </span>
  )

  return (
    <>
      {versionBtn === 'LongFavBtn' ? (
        <button
          disabled={isLoading || isFetching ? true : false}
          onClick={() => handleClickBtn()}
          title="Zapisz jako liście"
          className={`inline-flex h-[48px] w-full cursor-pointer items-center  justify-start border-none bg-transparent px-5 py-2 ${
            isLoading ? 'text-gray-400' : 'text-[#4d4d4d]'
          }`}
        >
          <Icon />

          <span className="flex flex-col">
            <span className="whitespace-nowrap py-3">{isLiked ? 'Edytuj na liście' : 'Zapisz na liście'}</span>
          </span>
        </button>
      ) : versionBtn === 'DesktopFavBtn' ? (
        <button
          disabled={isLoading || isFetching ? true : false}
          onClick={() => handleClickBtn()}
          className="relative ml-1 hidden h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full border-none bg-transparent transition-colors duration-200 hover:bg-[#ddd] md:flex"
        >
          <Icon />

          <div
            className={`absolute left-1/2 top-1/2 z-[10] h-10 w-10  -translate-x-1/2 -translate-y-1/2 transform rounded-full border-[#BE0064] ${
              effect && 'animate-pulsOnceClick'
            }`}
          />
        </button>
      ) : versionBtn === 'ProductGalleryFavBtn' ? (
        <button
          disabled={isLoading || isFetching ? true : false}
          onClick={() => handleClickBtn()}
          className="relative z-[5] mt-2 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-sm-xCom transition-colors duration-200 hover:bg-[#ddd]"
        >
          <Icon />

          <div
            className={`absolute left-1/2 top-1/2 z-[10] h-10 w-10  -translate-x-1/2 -translate-y-1/2 transform rounded-full border-[#BE0064] ${
              effect && 'animate-pulsOnceClick'
            }`}
          />
        </button>
      ) : null}
    </>
  )
}

// const LongFavBtn = ({ handleClickBtn, isLoading, id }: {
//     handleClickBtn: () => void
//     isLoading: boolean
//     id: string
// }) => {
//     const [liked, setLiked] = useState(false)

//     const purchaseList = useSelector((state: RootState) => state.purchaseList)

//     useEffect(() => {
//         purchaseList.purchaseListItems.map(item => {
//             if (item.id === id) {
//                 setLiked(true)
//             } else {
//                 setLiked(false)
//             }
//         })
//     }, [])

//     return
// }

// const DesktopFavBtn = ({ handleClickBtn, isLoading, effect, id, isFetched, isLiked }: {
//     handleClickBtn: () => void
//     isLoading: boolean
//     isFetched: boolean
//     isLiked: boolean
//     effect: boolean
//     id: string
// }) => {
//     const [isLike, setIsLike] = useState(isLiked)

//     const purchaseList = useSelector((state: RootState) => state.purchaseList)

//     useEffect(() => {
//         purchaseList.purchaseListItems.map(item => {
//             if (item.id === id) {
//                 setIsLike(true)
//             } else if (item.id !== id) {
//                 setIsLike(false)
//             }
//         })
//     }, [isLiked])

//     const handleBtn = () => {
//         handleClickBtn()

//     }

//     return
// }

// const ProductGalleryFavBtn = ({ handleClickBtn, isLoading, effect, id }: {
//     handleClickBtn: () => void
//     isLoading: boolean
//     id: string
//     effect: boolean
// }) => {

//     const [liked, setLiked] = useState(false)

//     const purchaseList = useSelector((state: RootState) => state.purchaseList)

//     useEffect(() => {
//         purchaseList.purchaseListItems.map(item => {
//             if (item.id === id) {
//                 setLiked(true)
//             } else {
//                 setLiked(false)
//             }
//         })
//     }, [])

//     return
// }
