import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'

const DeleteProductBtn = () => {
    return (
        <button
            title='Usuń z listy'
            className='inline-flex items-center justify-start whitespace-nowrap bg-transparent rounded-none w-full h-[48px] py-3 px-4 hover:bg-[#ddd] transition-colors duration-200'
        >

            <span className='inline-block w-6 h-6 mr-3 overflow-hidden'>
                <RiDeleteBinLine className='w-full h-full text-xl' />
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