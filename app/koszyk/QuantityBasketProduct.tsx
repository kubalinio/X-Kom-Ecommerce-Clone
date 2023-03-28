'use client'

import { useState } from "react"

export const QuantityBasketProduct = ({ itemQuantity }: { itemQuantity: number }) => {

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