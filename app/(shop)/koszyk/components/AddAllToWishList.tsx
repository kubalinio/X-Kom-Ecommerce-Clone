import useWindowDimensions from '@/hooks/useWindowDimensions'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

const AddToWishList = () => {
    const { width } = useWindowDimensions()

    return (
        <button
            disabled={true}
            title={`${width! >= 720 ? 'Zapisz jako liste' : 'Zapisz'}`}
            className='inline-flex items-center justify-start w-full h-10 text-[#4d4d4d] bg-transparent border-none rounded-full py-2 px-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200 disabled:text-gray-400'
        >
            <span className='inline-block w-6 h-6 mr-1'>
                <AiOutlineHeart className='w-full h-full text-2xl' />

            </span>

            <span className='flex flex-col'>
                <span className='py-3 whitespace-nowrap'>{width! >= 720 ? 'Zapisz jako listę' : 'Zapisz'}</span>
            </span>
        </button>
    )
}

export default AddToWishList