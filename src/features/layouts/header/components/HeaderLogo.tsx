'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Overlay from '@/features/shared/components/Overlay'

import logoDesktop from '../assets/logoDesktop.svg'
import logoSmall from '../assets/logoSmall.svg'
import { HamburgerDesktop } from './Hamburgers/HamburgerDesktop'

// isScrollDown,
type Props = {
  isScrollDown: boolean
}

const HeaderLogo = ({ isScrollDown }: Props) => {
  const [isHoverCategories, setIsHoverCategories] = useState(false)

  return (
    <>
      {/* Hamburger */}
      <div
        className={`${
          !isScrollDown ? 'w-0 scale-0 opacity-0' : 'h-full w-[64px] md:w-[88px]'
        } absolute left-0 top-0 z-20 hidden h-[48px] bg-white outline-transparent transition-all duration-300 md:h-[64px] lg:block lg:h-[56px] ${
          isHoverCategories ? 'nav-item-after' : ''
        } `}
        onMouseEnter={() => setIsHoverCategories(true)}
        onMouseLeave={() => setIsHoverCategories(false)}
      >
        <HamburgerDesktop />
      </div>

      {/* Logo Mobile/Desktop*/}
      {/* Animacja Linku  */}

      <Link
        href="/"
        className={`${
          !isScrollDown ? 'lg:animate-logoShow' : 'lg:animate-logoHide'
        } flex items-center overflow-hidden `}
      >
        {/* Logo Big Screen */}
        <span className={`hidden h-10 items-center justify-center transition-all duration-500 lg:flex`}>
          <Image src={logoDesktop} alt="x-clone sklep komputerowy" width={225} height={40} />
        </span>

        {/* Logo Mobile */}
        <span className={`relative inline-flex h-12 items-center justify-start lg:hidden`}>
          <Image
            src={logoSmall}
            alt="x-clone sklep komputerowy"
            width={102}
            height={40}
            className="relative inline-block h-full max-h-full w-auto max-w-full"
          />
        </span>
      </Link>

      {isHoverCategories && <Overlay />}
    </>
  )
}

export default HeaderLogo
