import { AiOutlineHeart } from "react-icons/ai"

export const AddToWishListExpand = () => {

    return (
        <button
            title='Zapisz jako liście'
            className='inline-flex items-center justify-start w-full h-[48px] text-[#4d4d4d] bg-transparent border-none py-2 px-5 cursor-pointer hover:bg-[#ddd]'
        >
            <span className='inline-block w-6 h-6 mr-1'>
                <AiOutlineHeart className='w-full h-full text-2xl' />
            </span>

            <span className='flex flex-col'>
                <span className='py-3 whitespace-nowrap'>Zapisz na liście</span>
            </span>
        </button>
    )
}

export const AddToWishList = () => {

    return (
        <button
            className='hidden md:inline-flex items-center justify-center w-[32px] h-[32px] bg-transparent border-none ml-1 cursor-pointer rounded-full hover:bg-[#ddd] transition-colors duration-200'
        >
            <span className='inline-block w-5 h-5'>
                <AiOutlineHeart className='w-full h-full text-xl' />
            </span>
        </button>
    )
}

