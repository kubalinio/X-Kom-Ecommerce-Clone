'use client'

import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { DrawerContainer } from '../../DrawerModal'
import { CategoriesDrawerMobile } from '../ProductCategories'


export const HamburgerMobile = () => {
    const [showDrawer, setShowDrawer] = useState(false)

    return (
        <>
            <button onClick={() => setShowDrawer(true)} className="flex flex-col items-center justify-center w-8 px-8 md:h-10 md:px-11 lg:h-14" >
                <span className="flex items-center justify-center w-5 h-5 text-xl md:text-2xl md:w-6 md:h-6"><RxHamburgerMenu /></span>
                <span className="text-[10px]">Menu</span>
            </button>

            <DrawerContainer close={() => setShowDrawer(false)} openDrawer={showDrawer} direction={'left'}>

                <CategoriesDrawerMobile close={() => setShowDrawer(false)} />

            </DrawerContainer>

        </>
    )
}



