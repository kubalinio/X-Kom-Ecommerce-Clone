'use client'

import useDebounce from "@/hooks/useDebounce"
import { useState } from "react"
import Overlay from "../../Overlay"
import { CategorieBarDropdown } from "./CategorieBarDropdown"
import { categorieItems } from "./CategoriesData"

type CategoriesDesktop = {
    isScroll: boolean
    width: number | undefined
}

export const CategoriesDesktopBar = ({ isScroll, width }: CategoriesDesktop) => {
    const [isActive, setIsActive] = useState(false)
    const [isHover, setIsHover] = useState(false)

    useDebounce(() => {

        if (isHover) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }

    }, 150, [isHover])


    return (
        <div className={`${isScroll ? 'opacity-0 -translate-y-1/2 scale-y-0' : 'opacity-100 translate-y-0 scale-y-100'} relative z-[1] transition-all duration-300`}>

            <div>
                {/* Product Categories Container */}
                <div className="relative hidden lg:block w-full pt-[1px] bg-[#f5f5f5] shadow-md z-[1]" >
                    {width! >= 1080 ? (

                        <div className="relative flex items-center justify-center bg-inherit mx-auto lg:max-w-[1156px] lg:w-[calc(100%-64px)]  2xl:max-w-[1444px]">
                            {/* Product Categories */}
                            <nav
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}
                                className="w-full"
                            >

                                <ul className='flex justify-between'>
                                    {categorieItems.map((category, i) => (
                                        <CategorieBarDropdown
                                            key={category.slug + i}
                                            category={category}
                                            index={i}

                                        />
                                    ))}
                                </ul>

                            </nav>
                            {isActive ? <Overlay /> : ''}
                        </div>

                    ) : null}
                </div>
            </div>

        </div>
    )
}