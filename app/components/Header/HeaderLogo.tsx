'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Overlay from '../Overlay'

import { HamburgerDesktop } from './Hamburgers/HamburgerDesktop'
import logoSmall from '../../../public/logoSmall.svg'
import logoDesktop from '../../../public/logoDesktop.svg'


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
                className={`${!isScrollDown ? 'scale-0 opacity-0 w-0' : 'h-full w-[64px] md:w-[88px]'} absolute top-0 left-0 z-20 outline-transparent hidden transition-all duration-300 bg-white h-[48px] md:h-[64px] lg:h-[56px] lg:block ${isHoverCategories ? 'nav-item-after' : ''} `}
                onMouseEnter={() => setIsHoverCategories(true)}
                onMouseLeave={() => setIsHoverCategories(false)}

            >
                <HamburgerDesktop />
            </div>

            {/* Logo Mobile/Desktop*/}
            {/* Animacja Linku  */}

            <Link href='/' className={`${!isScrollDown ? 'lg:animate-logoShow' : 'lg:animate-logoHide'} flex items-center overflow-hidden `} >
                {/* Logo Big Screen */}
                <span className={`hidden lg:flex h-10 items-center justify-center transition-all duration-500`} >
                    <Image
                        src={logoDesktop}
                        alt='x-clone sklep komputerowy'
                        width={225}
                        height={40}
                    />
                </span>

                {/* Logo Mobile */}
                <span className={`relative inline-flex items-center justify-start h-12 lg:hidden`} >
                    <Image
                        src={logoSmall}
                        alt='x-clone sklep komputerowy'
                        width={102}
                        height={40}
                        className='relative inline-block w-auto h-full max-w-full max-h-full' />
                </span>
            </Link>

            {isHoverCategories && <Overlay />}

        </>
    )
}

export default HeaderLogo