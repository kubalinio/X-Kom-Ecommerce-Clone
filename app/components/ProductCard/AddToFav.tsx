'use client'

import { dataset } from '@/lib/sanity.client'
import { RootState } from '@/store'
import { addToPurchaseList, removePurchaseListItem } from '@/store/purchaseSlice'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../LoadingSpinner'


const AddToFav = ({ id }: { id: string }) => {
    const dispatch = useDispatch()
    const queryClient = useQueryClient()

    const [liked, setLiked] = useState(false)
    const [effect, setEffect] = useState(false)

    const purchaseList = useSelector((state: RootState) => state.purchaseList)

    useEffect(() => {
        purchaseList.purchaseListItems.map(item => {
            if (item.id === id) {
                setLiked(true)
            }
        })
    }, [])


    const { mutate, isLoading } = useMutation(async () =>
        await axios.post(`/api/addFav`, {
            productId: id,
        }),
        {
            onError: (error: any) => {
                console.log(error)
            },
            onSuccess: (data: any) => {
                queryClient.invalidateQueries(['products'])
                queryClient.invalidateQueries(['detail-product'])
                if (data.status === 201) handleAddToPurchaseList()

                if (data.status === 200) handleRemoveFromPurchaseList()

            }
        }
    )

    const handleAddToPurchaseList = () => {
        setLiked(true)
        setEffect(true)
        dispatch(addToPurchaseList({ id }))
    }
    const handleRemoveFromPurchaseList = () => {
        setLiked(false)
        dispatch(removePurchaseListItem({ id }))
    }

    const handleClickBtn = () => {
        mutate()
    }

    return (
        <div className='absolute hidden transition-all duration-300 top-1 right-1 lg:block lg:top-3 lg:right-3'>

            <div className={`transition-opacity duration-400 lg:flex lg:w-8 lg:h-8 lg:group-hover:opacity-100 ${liked ? 'lg:opacity-100' : 'lg:opacity-0'}`}>

                <div className='inline-block pointer-events-auto z-[1]'>
                    {/* Fav Component to Add List Favorited products */}
                    <div>
                        <button
                            onClick={() => handleClickBtn()}
                            onAnimationEnd={() => setEffect(false)}
                            className='relative flex items-center justify-center w-8 h-8 bg-white rounded-full cursor-pointer select-none z-5 hover:bg-[#ddd] transition duration-300'>
                            <span className='flex items-center justify-center w-5 h-5 overflow-hidden '>
                                {isLoading && <LoadingSpinner />}

                                {liked ?
                                    <IoMdHeart className='w-full h-full' /> :
                                    <IoMdHeartEmpty className='w-full h-full' />
                                }

                            </span>

                            <div className={`absolute top-1/2 left-1/2 rounded-full w-10 h-10  border-[#1a1a1a] transform -translate-x-1/2 -translate-y-1/2 z-[10] ${effect && 'animate-pulsOnceClick'}`} />

                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddToFav