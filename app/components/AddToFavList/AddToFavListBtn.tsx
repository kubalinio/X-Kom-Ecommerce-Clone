import LoadingSpinner from "@/app/components/LoadingSpinner"
import { Modal, ModalContainer, ModalHeader } from "@/app/components/Modals/Modal"

import { RootState } from "@/app/store"
import { addToPurchaseList, removePurchaseListItem } from "@/app/store/purchaseSlice"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useEffect, useState } from "react"

import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"

type Props = {
    mobile: boolean
    id: string
    closeExpand?: () => void
    showInfo?: (isLiked: boolean) => void
}

export const AddToFavListBtn = ({ id, mobile, closeExpand, showInfo }: Props) => {


    const dispatch = useDispatch()
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
                if (data.status === 201) handleAddToPurchaseList()

                if (data.status === 200) handleRemoveFromPurchaseList()

            }
        }
    )

    const handleAddToPurchaseList = () => {
        setLiked(true)
        showInfo!(true)
        setEffect(true)
        dispatch(addToPurchaseList({ id }))
    }
    const handleRemoveFromPurchaseList = () => {
        setLiked(false)
        showInfo!(false)
        dispatch(removePurchaseListItem({ id }))
    }

    const handleClickBtn = () => {

        if (mobile === true) {
            closeExpand!()
            mutate()
        } else {
            mutate()
        }
    }

    return (

        <>

            {mobile === true ? (

                <button
                    onClick={() => handleClickBtn()}
                    title='Zapisz jako liście'
                    className='inline-flex items-center justify-start w-full h-[48px] text-[#4d4d4d] bg-transparent border-none py-2 px-5 cursor-pointer hover:bg-[#ddd]'
                >
                    <span className='inline-block w-6 h-6 mr-1 '>
                        {liked ? <IoMdHeart className='w-full h-full text-[#BE0064]' /> :
                            <IoMdHeartEmpty className='w-full h-full text-[#BE0064]' />}
                    </span>

                    <span className='flex flex-col'>
                        <span className='py-3 whitespace-nowrap'>
                            {liked ? 'Edytuj na liście' : 'Zapisz na liście'}
                        </span>
                    </span>
                </button>
            ) : (
                <button
                    onClick={() => handleClickBtn()}
                    className='relative flex items-center justify-center w-[32px] h-[32px] bg-transparent border-none ml-1 cursor-pointer rounded-full hover:bg-[#ddd] transition-colors duration-200'
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
            )}


        </>
    )


}

