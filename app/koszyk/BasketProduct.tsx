import { urlFor } from "@/lib/sanity.client"
import { BasketItem, removeItem, getTotals } from "@/store/basketSlice"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineHeart, AiOutlineMore } from "react-icons/ai"
import { HiOutlineTrash } from "react-icons/hi2"
import { useDispatch } from "react-redux"
import { QuantityBasketProduct } from "./QuantityBasketProduct"



const AddToWishBasketProduct = () => {

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

const RemoveBasketProduct = ({ id }: { id: string }) => {

    const dispatch = useDispatch()

    const removeItemFromBasket = () => {
        const product = {
            id: id
        }
        console.log(id)

        dispatch(removeItem(id))
        dispatch(getTotals())
    }

    return (
        <button
            onClick={() => removeItemFromBasket}
            title='Usuń z koszyka'
            className='inline-flex items-center justify-start w-full h-[48px] text-[#4d4d4d] bg-transparent border-none py-2 px-5 cursor-pointer hover:bg-[#ddd]'
        >
            <span className='inline-block w-6 h-6 mr-1'>
                <HiOutlineTrash className='w-full h-full text-2xl' />
            </span>

            <span className='flex flex-col'>
                <span className='py-3 whitespace-nowrap'>Usuń z koszyka</span>
            </span>
        </button>
    )
}

const ExpandActionBasketProduct = ({ id }: { id: string }) => {
    const [expand, setExpand] = useState(false)

    return (
        <div className={`${expand ? 'z-[999]' : 'z-[1]'} relative inline-block pointer-events-none md:hidden`}>
            {/* Icon */}
            <div>
                <div className="pointer-events-auto">
                    <button
                        onClick={() => setExpand(!expand)}
                        className="flex items-center justify-center rounded-full h-8 w-8 hover:bg-[#ddd] active:bg-[#ddd] focus:bg-[#ddd]"
                    >
                        <span className="inline-block w-5 h-5">
                            <AiOutlineMore className="w-full h-full text-xl" />
                        </span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className={`${expand ? '' : 'relative overflow-hidden'} pointer-events-auto`}>

                <div className={`${expand ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} absolute flex flex-col text-left rounded-lg shadow-xCom py-2 z-[2] top-full right-0 left-auto bg-white`}>

                    <AddToWishBasketProduct />

                    <RemoveBasketProduct id={id} />

                </div>
            </div>
        </div>
    )
}


const BasketProduct = ({ id, title, price, mainImage, quantity, slug, }: BasketItem) => {

    const formatedPrice = price.toFixed(2).replace('.', ',')

    const dispatch = useDispatch()

    const removeItemFromBasket = () => {

        dispatch(removeItem(id))
        dispatch(getTotals())
    }


    return (
        <li className="flex items-center px-4 py-3 border-b border-[#ddd] max-md:last:border-b-0 md:p-3 md:pr-4 md:border-x md:border-x-[#ddd] md:first:border-t md:first:rounded-t-lg md:last:rounded-b-lg">
            <div className="w-full">
                <div className="flex w-full">
                    {/* Image Left*/}
                    <Link href={`/${slug}`}>
                        <span className="inline-flex items-center justify-center w-[72px] h-[60px] overflow-hidden">
                            <Image
                                src={urlFor(mainImage).url()}
                                width={144}
                                height={120}
                                alt={title}
                                loading='lazy'
                                className="object-contain w-full h-auto"
                            />
                        </span>
                    </Link>

                    {/* Right Section */}
                    <div className="flex flex-wrap items-center justify-between w-full ml-2 md:flex-nowrap">
                        {/* Title & Expand*/}
                        <div className="inline-flex justify-between w-full mb-1">
                            <Link href={`/${slug}`}>
                                <h3 className="break-words line-clamp-1">{title}</h3>
                            </Link>

                            {/* Expand to fav list or delete item*/}

                            <ExpandActionBasketProduct id={id!} />

                        </div>

                        {/* Bottom && Left */}
                        <div className="flex flex-row-reverse items-end justify-between w-full basis-full md:basis-[80%] md:flex-row md:items-center md:w-[200px] md:justify-end">

                            {/* Price */}
                            <div className="inline-block text-left md:text-right md:mr-2">
                                <span className="block whitespace-nowrap">
                                    {formatedPrice} zł
                                </span>
                            </div>

                            {/* Quantity */}
                            <QuantityBasketProduct itemQuantity={quantity} />

                            {/* Add to Fav List */}
                            <button
                                className='hidden md:inline-flex items-center justify-center w-[32px] h-[32px] bg-transparent border-none ml-1 cursor-pointer rounded-full hover:bg-[#ddd] transition-colors duration-200'
                            >
                                <span className='inline-block w-5 h-5'>
                                    <AiOutlineHeart className='w-full h-full text-xl' />
                                </span>
                            </button>

                            {/* Delete Item Basket */}
                            <button
                                onClick={removeItemFromBasket}
                                className='hidden md:inline-flex items-center justify-center w-[32px] h-[32px] bg-transparent border-none ml-1 cursor-pointer rounded-full hover:bg-[#ddd] transition-colors duration-200'
                            >
                                <span className='inline-block w-5 h-5'>
                                    <HiOutlineTrash className='w-full h-full text-xl' />
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default BasketProduct