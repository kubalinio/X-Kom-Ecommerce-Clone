'use client'


import { AddToFavListBtn } from "@/components/AddToFavList"
import { BasketItem } from "@/store/basketSlice"
import { useEffect, useRef, useState } from "react"
import { AiOutlineMore } from "react-icons/ai"
import { RemoveBasketProductExpand } from "./RemoveBasketProduct"


export const ExpandActionBasketProduct = ({ product }: { product: BasketItem }) => {
    const [expand, setExpand] = useState(false)

    const buttonRef = useRef<HTMLDivElement>(null)
    const expandBoxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const listener = (e: MouseEvent) => {
            if (!buttonRef.current?.contains(e.target as Node) || !buttonRef.current) {
                setExpand(false)
            }
        }
        window.addEventListener('click', listener)
        return () => window.removeEventListener('click', listener)
    }, [])

    return (
        <div className={`${expand ? 'z-[999]' : 'z-[1]'} relative inline-block pointer-events-none md:hidden`}>
            {/* Icon */}
            <div ref={buttonRef}>
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
            <div

                className={`${expand ? '' : 'relative overflow-hidden'} pointer-events-auto`}
            >

                <div
                    ref={expandBoxRef}
                    className={`${expand ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} absolute flex flex-col text-left rounded-lg shadow-xCom py-2 z-[2] top-[calc(100%)] right-0 left-auto bg-white`}>

                    <AddToFavListBtn
                        product={product}
                        versionBtn={'LongFavBtn'}
                        showInfo={() => setExpand(false)}
                    />

                    <RemoveBasketProductExpand
                        id={product._id!}
                        closeExpand={() => setExpand(false)}
                    />

                </div>
            </div>
        </div>
    )
}