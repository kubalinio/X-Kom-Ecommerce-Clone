import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'

const RemoveAllFromBasket = () => {

    return (
        <button
            title='Wyczysc koszyk'
            className='inline-flex items-center justify-start w-full h-10 text-[#4d4d4d] bg-transparent border-none rounded-full py-2 px-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200'
        >
            <span className='inline-block w-6 h-6 mr-1'>
                <HiOutlineTrash className='w-full h-full text-2xl' />
            </span>

            <span className='flex flex-col'>
                <span className='py-3 whitespace-nowrap'>Wyczyść koszyk</span>
            </span>
        </button>
    )

}

export default RemoveAllFromBasket