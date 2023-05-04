'use client'

import LoadingSpinner from "@/app/components/LoadingSpinner"
import { RootState } from "@/app/store"
import { BasketItem } from "@/app/store/basketSlice"
import { addToPurchaseList, removePurchaseListItem } from "@/app/store/purchaseSlice"
import { Product, PurchaseListProduct } from "@/app/typings"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { useEffect, useMemo, useState } from "react"

import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"
import { uuid } from "uuidv4"



type Props = {
    versionBtn: string
    closeExpand?: () => void
    showInfo?: (isLiked: boolean, isShow: boolean) => void
    product: Product
}



const fetchProductsInFav = async (listIds: string[]) => {
    const response = await axios.post('/api/purchaseLists/productsInFavList', {
        purchaseListsId: listIds
    })
    return response.data
}

export const AddToFavListBtn = ({ product, versionBtn, closeExpand, showInfo }: Props) => {
    const { _id: id, mainImage, price, title } = product

    const dispatch = useDispatch()
    const [listIds, setListIds] = useState<Array<string>>([])
    const [fetchFav, setFetchFav] = useState(false)

    const queryClient = useQueryClient()
    const [effect, setEffect] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

    const purchaseList = useSelector((state: RootState) => state.purchaseList)

    useEffect(() => {
        setListIds(purchaseList.purchaseListItems.map(item => item.id))

        if (purchaseList.purchaseListItems.length > 0) {
            setFetchFav(true)
        } else {
            setFetchFav(false)
        }
    }, [])

    const { isLoading: isLoadingIds, isFetching } = useQuery({
        queryFn: () => fetchProductsInFav(listIds),
        queryKey: ['products-in-fav-list'],
        enabled: fetchFav,
        onSuccess(data) {
            {
                data.map((item: { Id: string }) => {
                    if (item.Id === id) {
                        setIsLiked(true)
                        showInfo!(true, false)
                    }
                })
            }
        },
    })

    const { mutate, isLoading } = useMutation(async (listIds: string) =>
        await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/purchaseLists/addProductToList`, {
            listId: listIds,
            Id: id,
            Name: title,
            MainPhoto: mainImage,
            IsPriceVisible: true,
            Price: price,
            // ProductCount: 1,
            // WebUrl: slug,
        }),
        {
            onError: (error: any) => {
                console.log(error)
            },
            onSuccess: (data: any) => {
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
            }
        },


    )

    const { mutate: mutateList, isLoading: isLoadingList } = useMutation(
        async ({ listName, listId }: { listName: string, listId: string }) =>
            // const id = await new ObjectId().toString()
            await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/purchaseLists/createPurchaseList`, {
                Name: listName,
                Id: listId,
                WebUrl: `/listy/${listId}`
            }), {
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

            mutateList({ listName: 'Ulubione', listId })
        }
    }

    const Icon = () => (
        <span className='flex items-center justify-center w-5 h-5 overflow-hidden'>
            {
                isLoading || isLoadingList || isLoadingIds && isFetching ? <LoadingSpinner /> :
                    isLiked ?
                        <IoMdHeart className='w-full h-full text-[#BE0064]' /> :
                        <IoMdHeartEmpty className='w-full h-full text-[#BE0064]' />
            }
        </span>
    )

    return (
        <>

            {versionBtn === 'LongFavBtn' ?
                (
                    <button
                        onClick={() => handleClickBtn()}
                        title='Zapisz jako liście'
                        className={`inline-flex items-center justify-start w-full h-[48px]  bg-transparent border-none py-2 px-5 cursor-pointer ${isLoading ? 'text-gray-400' : 'text-[#4d4d4d]'}`}
                    >
                        <Icon />

                        <span className='flex flex-col'>
                            <span className='py-3 whitespace-nowrap'>
                                {isLiked ? 'Edytuj na liście' : 'Zapisz na liście'}
                            </span>
                        </span>
                    </button>) :

                versionBtn === 'DesktopFavBtn' ?
                    (
                        <button
                            onClick={() => handleClickBtn()}
                            className='relative hidden md:flex items-center justify-center w-[32px] h-[32px] bg-transparent border-none ml-1 cursor-pointer rounded-full hover:bg-[#ddd] transition-colors duration-200'
                        >
                            <Icon />

                            <div className={`absolute top-1/2 left-1/2 rounded-full w-10 h-10  border-[#BE0064] transform -translate-x-1/2 -translate-y-1/2 z-[10] ${effect && 'animate-pulsOnceClick'}`} />

                        </button>
                    ) :
                    versionBtn === 'ProductGalleryFavBtn' ?
                        (

                            <button
                                onClick={() => handleClickBtn()}
                                className='z-[5] relative inline-flex items-center justify-center bg-white w-10 h-10 mt-2 shadow-sm-xCom rounded-full hover:bg-[#ddd] transition-colors duration-200 cursor-pointer'
                            >
                                <Icon />

                                <div className={`absolute top-1/2 left-1/2 rounded-full w-10 h-10  border-[#BE0064] transform -translate-x-1/2 -translate-y-1/2 z-[10] ${effect && 'animate-pulsOnceClick'}`} />

                            </button>
                        ) :
                        null

            }

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