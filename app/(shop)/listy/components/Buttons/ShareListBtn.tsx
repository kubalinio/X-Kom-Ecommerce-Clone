import React from 'react'
import { RiShareForwardLine } from 'react-icons/ri'

type Props = {
    className?: string
}

const ShareListBtn = ({ className }: Props) => {

    const handleClickBtn = () => {
        // if (action === 'delete') {
        //     mutate(id)
        // }
    }
    return (
        <button
            onClick={handleClickBtn}
            title='Udostępnij listę'
            className={className ? className : 'inline-flex items-center justify-start whitespace-nowrap bg-transparent rounded-none w-full h-[48px] py-3 px-4 hover:bg-[#ddd] transition-colors duration-200 '} >
            <span className='inline-block w-6 h-6 mr-3 overflow-hidden'>
                <RiShareForwardLine className='w-full h-full text-xl ' />
            </span>

            <span>
                <span>
                    Udostępnij listę
                </span>
            </span>
        </button >
    )
}

export default ShareListBtn