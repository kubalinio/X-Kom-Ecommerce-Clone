'use client'

import { useEffect } from "react"
import NavItem from "./NavItem"

const navItemData = [
    {
        title: 'Promocje',
        number: 10
    },
    {
        title: 'Przedsprzedaże',
        number: 4
    },
    {
        title: 'Konkursy',
        number: 0
    },
]


export const PageNavigation = () => {

    useEffect(() => {
        document.body.style.height = '100%'
        document.body.style.overflow = 'visible'
    }, [])

    return (
        <nav className="sticky top-[0px] z-[100] w-screen mx-[calc(50%-50vw)] mt-4 mb-8 transition-[top] duration-300 bg-white">
            {/* Shadow */}
            <div className="absolute w-screen ml-[calc(50%-50vw)] h-12 shadow-sm-xCom z-[-1]" />

            <div className="mx-auto w-[calc(100%-32px)] max-w-[1156px] flex items-center justify-center">
                <div className="flex flex-1 h-12 overflow-x-hidden">
                    <div className="relative flex min-w-full basis-auto">
                        {/* NavItems Component */}
                        {navItemData.map(item => (
                            <NavItem
                                key={item.title + Math.random()}
                                title={item.title}
                                number={item.number}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

