'use client'

import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { CategorieHamburgerDropdown } from '../ProductCategories'



export const HamburgerDesktop = () => {
    const [isHover, setIsHover] = useState(false)


    return (

        <button
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={` flex items-center justify-center h-full min-w-[64px] md:min-w-[88px] hover:shadow-xCom hover:bg-white hover:rounded-t-lg`} >

            <div className='flex flex-col my-2 place-items-center bg-[#f5f5f5] rounded-lg py-1 px-3 -ml-6'>

                <span className="inline-flex items-center justify-center w-8 h-8">
                    <RxHamburgerMenu className='w-full h-full' />
                </span>
            </div>



            {isHover ? (

                <CategorieHamburgerDropdown show={isHover} />
            ) : ''}

        </button >



    )
}

