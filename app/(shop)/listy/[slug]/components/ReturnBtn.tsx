import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

const ReturnBtn = () => {
    return (
        <Link
            href='/listy'
            title='Pokaż wszystkie listy'
            className='inline-flex items-center justify-center text-[#707070] text-center bg-[#ebebeb] hover:bg-[#ddd] transition-colors duration-200 rounded-full w-auto pr-5 pl-4 min-w-[96px] h-10 mb-10'
        >
            <span className='inline-block w-6 h-6 mr-4 overflow-hidden '>
                <MdOutlineKeyboardArrowLeft className='w-full h-full text-2xl' />
            </span>
            <span>Pokaż wszystkie listy</span>
        </Link>
    )
}

export default ReturnBtn