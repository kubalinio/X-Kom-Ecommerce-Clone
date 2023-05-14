import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'
import { RiDeleteBinLine } from 'react-icons/ri'

const deleteProductList = async ({ listId, productId }: {
    listId: string
    productId: string
}) => {
    const response = await axios.delete('/api/purchaseLists/deleteProductList', {
        data: { listId, productId }
    })

    return response
}

const DeleteProductBtn = ({ listId, productId }: {
    listId: string
    productId: string
}) => {


    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: async ({ listId, productId }: {
            listId: string
            productId: string
        }) => await axios.post('/api/purchaseLists/deleteProductList', {
            listId: listId,
            productId: productId
        }),
        mutationKey: ['detail-list'],
        onSuccess(data) {
            queryClient.invalidateQueries(['detail-list'])
        },

    })

    const handleDeleteBtn = () => {
        mutate({ listId, productId })
    }


    return (
        <button
            onClick={handleDeleteBtn}
            title='Usuń z listy'
            className='inline-flex items-center justify-start whitespace-nowrap bg-transparent rounded-none w-full h-[48px] text-[#2a2a2a] py-3 px-4 hover:bg-[#ddd] transition-colors duration-200'
        >

            <span className='inline-block w-6 h-6 mr-3 overflow-hidden '>
                <HiOutlineTrash className='w-full h-full text-xl' />
            </span>
            <span className='flex flex-col items-center text-center whitespace-nowrap'>
                <span className='inline-block mt-[2px] text-center'>
                    Usuń z listy
                </span>
            </span>

        </button>
    )
}

export default DeleteProductBtn