'use client'


import { useState } from "react"
import { AiOutlineMore } from "react-icons/ai"

import { AddToWishListExpand } from "./AddToWishList"
import { RemoveBasketProductExpand } from "./RemoveBasketProduct"

export const ExpandActionBasketProduct = ({ id }: { id: string }) => {
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

                    <AddToWishListExpand />

                    <RemoveBasketProductExpand id={id} />

                </div>
            </div>
        </div>
    )
}