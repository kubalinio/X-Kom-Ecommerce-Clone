import { removePurchaseListItem } from '@/store/purchaseSlice'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'

type Props = {
    id: string
    version: string
}

const DeleteListBtn = ({ id, version }: Props) => {

    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const router = useRouter()

    const { mutate } = useMutation(
        async (id: string) => await axios.post('/api/purchaseLists/deletePurchaseList', {
            listId: id
        }),
        {
            onError: (error: AxiosError) => {
                console.log(error)
            },
            onSuccess: () => {
                queryClient.invalidateQueries(['purchaseLists'])
                dispatch(removePurchaseListItem({ id }))

            }
        },
    )

    const handleClickBtn = () => {
        mutate(id)
        router.push('/listy')
    }

    let style = version === 'mobile' ? 'inline-flex items-center justify-start whitespace-nowrap bg-transparent rounded-none w-full h-[48px] py-3 px-4 hover:bg-[#ddd] transition-colors duration-200' : version === 'desktop' ? 'inline-flex items-center justify-start whitespace-nowrap bg-transparent rounded-full w-full h-[40px] py-3 px-4 hover:bg-[#ddd] transition-colors duration-200 [&_span]:first:mr-2' : ''


    return (
        <button
            onClick={() => handleClickBtn()}

            title='Usuń listę'
            className={style} >

            <span className='inline-block w-6 h-6 mr-3 overflow-hidden '>

                <RiDeleteBinLine className='w-full h-full text-xl' />

            </span>

            <span>
                <span>
                    Usuń listę
                </span>
            </span>
        </button >
    )
}

export default DeleteListBtn