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
      className={` flex h-full min-w-[64px] items-center justify-center hover:rounded-t-lg hover:bg-white hover:shadow-xCom md:min-w-[88px]`}
    >
      <div className="my-2 -ml-6 flex flex-col place-items-center rounded-lg bg-[#f5f5f5] px-3 py-1">
        <span className="inline-flex h-8 w-8 items-center justify-center">
          <RxHamburgerMenu className="h-full w-full" />
        </span>
      </div>

      {isHover ? <CategorieHamburgerDropdown show={isHover} /> : ''}
    </button>
  )
}
