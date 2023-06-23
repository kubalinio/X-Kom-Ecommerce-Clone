'use client'

import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

import { DrawerContainer } from '../../DrawerModal'
import { CategoriesDrawerMobile } from '../ProductCategories'

export const HamburgerMobile = () => {
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowDrawer(true)}
        className="flex w-8 flex-col items-center justify-center px-8 md:h-10 md:px-11 lg:h-14"
      >
        <span className="flex h-5 w-5 items-center justify-center text-xl md:h-6 md:w-6 md:text-2xl">
          <RxHamburgerMenu />
        </span>
        <span className="text-[10px]">Menu</span>
      </button>

      <DrawerContainer close={() => setShowDrawer(false)} openDrawer={showDrawer} direction={'left'}>
        <CategoriesDrawerMobile close={() => setShowDrawer(false)} />
      </DrawerContainer>
    </>
  )
}
