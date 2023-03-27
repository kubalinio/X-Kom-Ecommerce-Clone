import { urlFor } from "@/lib/sanity.client"
import { BasketItem } from "@/store/basketSlice"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineHeart, AiOutlineMore } from "react-icons/ai"
import { HiOutlineTrash } from "react-icons/hi2"



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

const RemoveBasketProduct = () => {
    return (
        <button
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

const ExpandActionBasketProduct = () => {
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

                    <RemoveBasketProduct />

                </div>
            </div>
        </div>
    )
}

const QuantityBasketProduct = ({ itemQuantity }: { itemQuantity: number }) => {

    const [quantity, setQuantity] = useState(itemQuantity)
    const [isOpen, setIsOpen] = useState(false)


    const valueQuantities = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const handleNewQuantity = (quantity: number) => {
        setQuantity(quantity)
    }

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className={`${isOpen ? 'rounded-t-2xl' : 'rounded-2xl'} w-[56px] h-[32px] text-center max-w-full cursor-pointer`}>

            <div className="relative w-[56px] h-[32px] rounded-[inherit]">
                {/* Control */}
                <div className="relative table h-[inherit] w-full rounded-[inherit] border border-[#ddd] bg-white">
                    <span>
                        <div className="absolute inset-0 bottom-auto px-4 -translate-y-1/2 top-1/2">
                            <span className="w-full">{quantity}</span>
                        </div>
                    </span>
                </div>

                {/* Expanded Quantities Dropdown*/}
                {isOpen ? (
                    <div className="absolute z-[3] left-0 right-0 bg-white top-full border border-[#ddd]">
                        <div>
                            {valueQuantities.map(quantity => (
                                <div onClick={() => handleNewQuantity(quantity)}
                                    className='bg-white hover:bg-[#ddd] py-2 px-4'
                                >
                                    {quantity}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : ''}

            </div>
        </div>
    )
}


const BasketProduct = ({ id, title, price, mainImage, quantity, slug, }: BasketItem) => {

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

                            <ExpandActionBasketProduct />

                        </div>

                        {/* Bottom && Left */}
                        <div className="flex flex-row-reverse items-end justify-between w-full basis-full md:basis-[80%] md:flex-row md:items-center md:w-[200px] md:justify-end">

                            {/* Price */}
                            <div className="inline-block text-left md:text-right md:mr-2">
                                <span className="block whitespace-nowrap">
                                    {price} zł
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