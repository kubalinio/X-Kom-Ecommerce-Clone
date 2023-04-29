'use client'

import LoadingSpinner from "@/app/components/LoadingSpinner"

import { RootState } from "@/app/store"
import { addToPurchaseList, removePurchaseListItem } from "@/app/store/purchaseSlice"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useEffect, useState } from "react"

import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"

const LongFavBtn = ({ handleClickBtn, isLoading, id }: {
    handleClickBtn: () => void
    isLoading: boolean
    id: string
}) => {
    const [liked, setLiked] = useState(false)

    const purchaseList = useSelector((state: RootState) => state.purchaseList)

    useEffect(() => {
        purchaseList.purchaseListItems.map(item => {
            if (item.id === id) {
                setLiked(true)
            } else {
                setLiked(false)
            }
        })
    })

    return (
        <button
            onClick={() => handleClickBtn()}
            title='Zapisz jako liście'
            className={`inline-flex items-center justify-start w-full h-[48px]  bg-transparent border-none py-2 px-5 cursor-pointer ${isLoading ? 'text-gray-400' : 'text-[#4d4d4d]'}`}
        >
            <span className='inline-flex items-center justify-center w-6 h-6 mr-1 '>
                {isLoading ? <LoadingSpinner /> :
                    liked ?
                        <IoMdHeart className='w-full h-full text-[#BE0064]' /> :
                        <IoMdHeartEmpty className='w-full h-full text-[#BE0064]' />
                }
            </span>

            <span className='flex flex-col'>
                <span className='py-3 whitespace-nowrap'>
                    {liked ? 'Edytuj na liście' : 'Zapisz na liście'}
                </span>
            </span>
        </button>)
}



const DesktopFavBtn = ({ handleClickBtn, isLoading, effect, id }: {
    handleClickBtn: () => void
    isLoading: boolean
    effect: boolean
    id: string
}) => {
    const [liked, setLiked] = useState(false)

    const purchaseList = useSelector((state: RootState) => state.purchaseList)

    useEffect(() => {
        purchaseList.purchaseListItems.map(item => {
            if (item.id === id) {
                setLiked(true)
            } else {
                setLiked(false)
            }
        })
    })

    return (
        <button
            onClick={() => handleClickBtn()}
            className='relative hidden md:flex items-center justify-center w-[32px] h-[32px] bg-transparent border-none ml-1 cursor-pointer rounded-full hover:bg-[#ddd] transition-colors duration-200'
        >
            <span className='flex items-center justify-center w-5 h-5 overflow-hidden'>
                {isLoading ? <LoadingSpinner /> :
                    liked ?
                        <IoMdHeart className='w-full h-full text-[#BE0064]' /> :
                        <IoMdHeartEmpty className='w-full h-full text-[#BE0064]' />
                }

            </span>

            <div className={`absolute top-1/2 left-1/2 rounded-full w-10 h-10  border-[#BE0064] transform -translate-x-1/2 -translate-y-1/2 z-[10] ${effect && 'animate-pulsOnceClick'}`} />

        </button>
    )
}

const ProductGalleryFavBtn = ({ handleClickBtn, isLoading, effect, id }: {
    handleClickBtn: () => void
    isLoading: boolean
    id: string
    effect: boolean
}) => {

    const [liked, setLiked] = useState(false)

    const purchaseList = useSelector((state: RootState) => state.purchaseList)

    useEffect(() => {
        purchaseList.purchaseListItems.map(item => {
            if (item.id === id) {
                setLiked(true)
            } else {
                setLiked(false)
            }
        })
    })

    return (

        <button
            onClick={() => handleClickBtn()}
            className='z-[5] relative inline-flex items-center justify-center bg-white w-10 h-10 mt-2 shadow-sm-xCom rounded-full hover:bg-[#ddd] transition-colors duration-200 cursor-pointer'
        >
            <span className='flex items-center justify-center w-5 h-5 overflow-hidden'>
                {isLoading ? <LoadingSpinner /> :
                    liked ?
                        <IoMdHeart className='w-full h-full text-[#BE0064]' /> :
                        <IoMdHeartEmpty className='w-full h-full text-[#BE0064]' />
                }

            </span>

            <div className={`absolute top-1/2 left-1/2 rounded-full w-10 h-10  border-[#BE0064] transform -translate-x-1/2 -translate-y-1/2 z-[10] ${effect && 'animate-pulsOnceClick'}`} />

        </button>
    )
}


type Props = {
    versionBtn: string
    id: string
    closeExpand?: () => void
    showInfo?: (isLiked: boolean) => void
}

export const AddToFavListBtn = ({ id, versionBtn, closeExpand, showInfo }: Props) => {

    const dispatch = useDispatch()

    const [effect, setEffect] = useState(false)

    const { mutate, isLoading } = useMutation(async () =>
        await axios.post(`/api/addFav`, {
            productId: id,
        }),
        {
            onError: (error: any) => {
                console.log(error)
            },
            onSuccess: (data: any) => {
                if (data.status === 201) {
                    showInfo!(true)
                    setEffect(true)
                    dispatch(addToPurchaseList({ id }))
                }

                if (data.status === 200) {
                    showInfo!(false)
                    setEffect(false)
                    dispatch(removePurchaseListItem({ id }))
                }

            }
        }
    )


    const handleClickBtn = () => {
        mutate()

    }


    return (
        <>

            {versionBtn === 'LongFavBtn' ?
                <LongFavBtn
                    handleClickBtn={() => handleClickBtn()}
                    isLoading={isLoading}
                    id={id}
                /> :
                versionBtn === 'DesktopFavBtn' ?
                    <DesktopFavBtn
                        handleClickBtn={() => handleClickBtn()}
                        isLoading={isLoading}
                        effect={effect}
                        id={id}
                    /> :
                    versionBtn === 'ProductGalleryFavBtn' ?
                        <ProductGalleryFavBtn
                            handleClickBtn={() => handleClickBtn()}
                            isLoading={isLoading}
                            effect={effect}
                            id={id}
                        /> :
                        null

            }

        </>
    )


}

