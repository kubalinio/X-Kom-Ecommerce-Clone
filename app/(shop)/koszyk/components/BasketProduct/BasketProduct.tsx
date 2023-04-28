import { useDispatch } from "react-redux"
import Image from "next/image"
import Link from "next/link"


import { urlFor } from "@/lib/sanity.client"
import { BasketItem, getTotals, addNewQuantity } from "@/app/store/basketSlice"


import { ExpandActionBasketProduct } from "./ExpandActionBasketProduct"
import { RemoveBasketProduct } from "./RemoveBasketProduct"
import { QuantityBasketProduct } from "./QuantityBasketProduct"
import { BasketAddToFav } from "./BasketAddToFav"


export const BasketProduct = ({ id, title, price, mainImage, quantity, slug, }: BasketItem) => {

    const formatedPrice = price.toFixed(2).replace('.', ',')

    const dispatch = useDispatch()

    const handleChangeQuantity = (newQuantity: number) => {

        const newProductQuantity = { id, newQuantity }
        // change Quanity from exist product
        dispatch(addNewQuantity(newProductQuantity))
        dispatch(getTotals())
    }



    return (
        <li className="flex items-center px-4 py-3 border-b border-[#ddd] max-md:last:border-b-0 md:p-3 md:pr-4 md:border-x md:border-x-[#ddd] md:first:border-t md:first:rounded-t-lg md:last:rounded-b-lg">
            <div className="w-full">
                <div className="flex w-full">
                    {/* Image Left*/}
                    <Link href={`/products/${slug}`}>
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

                            <Link href={`/products/${slug}`} className='hover:underline'>
                                <h3 className="break-words line-clamp-2">{title}</h3>
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
                            <QuantityBasketProduct basketQuantity={quantity} changeQuantity={handleChangeQuantity} />

                            {/* Add to Fav List */}
                            <BasketAddToFav id={id!} />

                            {/* Delete Item Basket */}
                            <RemoveBasketProduct id={id!} />

                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

