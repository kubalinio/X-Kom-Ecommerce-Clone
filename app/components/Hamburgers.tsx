'use client'
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

export const HamburgerDrawer = ({ showDrawer }: { showDrawer: () => void }) => (

    <button onClick={showDrawer} className="flex flex-col items-center justify-center w-8 px-8 md:h-10 md:px-11 lg:h-14" >
        <span className="flex items-center justify-center w-5 h-5 text-xl md:text-2xl md:w-6 md:h-6"><RxHamburgerMenu /></span>
        <span className="text-[10px]">Menu</span>
    </button>
)

export const HamburgerDropdown = ({ isHover }: { isHover: boolean }) => {


    return (
        < button
            className={`${isHover ? 'shadow-xCom' : ''} flex items-center justify-start w-8 px-8 min-w-[64px] md:min-w-[88px] md:h-10  lg:h-14`} >

            <span className="w-5 h-5 text-xl md:text-2xl md:w-6 md:h-6">
                <RxHamburgerMenu />
            </span>

        </button >)
}

