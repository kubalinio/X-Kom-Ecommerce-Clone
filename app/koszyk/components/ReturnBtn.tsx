import { useRouter } from 'next/navigation'
import React from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

const ReturnBtn = () => {
    const router = useRouter()

    return (
        <button onClick={() => router.back()} className='flex items-center justify-center rounded-full bg-[#ebebeb] text-[#4d4d4d] w-full py-2 hover:bg-[#ddd] bg:px-4 bg:w-auto'>

            <span className='inline-block w-5 h-5 mr-1 overflow-hidden text-center'>
                <MdOutlineKeyboardArrowLeft className='w-full h-full text-lg' />
            </span>
            Wróć do zakupów
        </button>
    )
}

export default ReturnBtn