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
            className={`${isHover ? 'shadow-xCom bg-white rounded-t-lg' : ''} flex items-center justify-center h-full min-w-[64px] md:min-w-[88px]`} >

            <div className='flex flex-col my-2 place-items-center bg-[#f5f5f5] rounded-lg py-1 px-3 -ml-6'>

                <span className="inline-flex items-center justify-center w-8 h-8">
                    <RxHamburgerMenu className='w-full h-full' />
                </span>
            </div>

        </button >)
}

