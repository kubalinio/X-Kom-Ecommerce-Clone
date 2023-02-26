'use client'

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import React from 'react'

import { BiHelpCircle } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { SlBasket } from 'react-icons/sl'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'
import Image from 'next/image';

const menuItems = [
    {
        name: 'Pomoc i kontakt',
        icon: <BiHelpCircle />
    },
    {
        name: 'Twoje konto',
        icon: <CgProfile />
    },
    {
        name: 'Twoje listy',
        icon: <MdOutlineFavoriteBorder />
    },
    {
        name: 'Koszyk',
        icon: <SlBasket />
    },
]

const categorieItems = [
    {
        name: 'Laptop i komputer',
        icon: <HiOutlineDesktopComputer />
    },
    {
        name: 'Smartfony i smartwatche',
        icon: <HiOutlineDesktopComputer />
    },
    {
        name: 'Gaming i streaming',
        icon: <HiOutlineDesktopComputer />
    },
    {
        name: 'Podzespoły komputerowe',
        icon: <HiOutlineDesktopComputer />
    },
    {
        name: 'Urządzenia peryferyjne',
        icon: <HiOutlineDesktopComputer />
    },
    {
        name: 'TV i audio',
        icon: <HiOutlineDesktopComputer />
    },
    {
        name: 'Smarthome i lifestyle',
        icon: <HiOutlineDesktopComputer />
    },
    {
        name: 'Akcesoria',
        icon: <HiOutlineDesktopComputer />
    },
    {
        name: <p className="whitespace-nowrap">Trendy, promocje<br />i nowości</p>,
        icon: <HiOutlineDesktopComputer />
    },
]

const Icon = ({ icon }) => <span>{icon}</span>;

const Hamburger = () => (
    <button className="flex flex-col items-center justify-center w-8 px-8 md:h-10 md:px-11 lg:h-14" >
        <span className="flex items-center justify-center w-5 h-5 text-xl md:text-2xl md:w-6 md:h-6"><RxHamburgerMenu /></span>
        <span className="text-[10px]">Menu</span>
    </button>
)

// const Navigation = () => (

// )

// Portals 

// We use react portal to render the tooltip into document.body.
// To place it near the button, we use the position from the event.
// The position is "fixed" so it won't be affected by overflow rules.
//   return (
//     <>
//       {anchor}
//       {position &&
//         ReactDOM.createPortal(
//           <div
//             style={{
//               top: position.y,
//               left: position.x,
//               position: "fixed",
//               paddingTop: 5,
//               zIndex: 10
//             }}
//           >
//             <div
//               style={{
//                 background: "black",
//                 color: "white"
//               }}
//             >
//               {text}
//             </div>
//           </div>,
//           document.body
//         )}
//     </>
//   );
// }
const domElementDrawer = document.getElementById('react-portals')

export const Nav = () => {
    const [isScrollDown, setIsScrollDown] = useState(false)
    const [headerHeight, setHeaderHeight] = useState(98)
    const headerRef = useRef<any>(null)
    // Dać nasłuchiwanie na NAv Bottom do sumy wysokości nawigacji przy desktopach

    const onResize = useCallback(() => {
        if (headerRef.current) setHeaderHeight(headerRef.current.clientHeight)
    }, [])

    useEffect(() => {
        const listenerHeight = () => {
            onResize()
        }

        const listener = (event: any) => {
            if (event.target.scrollingElement.scrollTop >= 35 && window.innerWidth > 1027) {
                setIsScrollDown(true)
            } else {
                setIsScrollDown(false)
            }
        }
        document.addEventListener('scroll', listener)
        window.addEventListener('resize', listenerHeight)

        return () => {
            document.removeEventListener('scroll', listener)
            window.removeEventListener('resize', listenerHeight)
        }
    }, [])

    return (
        // Con mb
        <div style={{ height: `${headerHeight}px` }} className={`relative z-[1000] lg:mb-10`}>

            <header ref={headerRef} className="relative bg-white top-0 left-0 z-20 w-full shadow-md lg:h-[72px] lg:fixed">

                {/* Navbar Top */}
                <div className="flex relative flex-wrap items-center justify-between h-full max-w-full ml-4 md:ml-6 lg:mx-auto lg:max-w-[1024px] lg:w-[calc(100%+64px)] xl:max-w-screen-xl 2xl:max-w-[1444px]">

                    {/* Logo Box */}
                    <div className="flex items-center justify-center h-full shrink-0 lg:pl-2 lg:pr-2 2xl:pl-4" >
                        {/* Hamburger */}
                        <div className={`${!isScrollDown ? 'scale-0 opacity-0 w-0 h-full' : 'h-full w-20 2xl:w-24'} absolute top-0 left-0 z-10 outline-transparent items-center justify-center hidden transition-all duration-300 bg-white lg:flex`}>
                            <Hamburger />
                        </div>

                        {/* Logo */}
                        <Link href='/' className={`flex items-center overflow-hidden transition-all duration-300 ${!isScrollDown ? '' : ''}`} >
                            {/* Logo Big Screen */}
                            <span className={`hidden lg:inline-flex`} >
                                <Image src='https://assets.x-kom.pl/public-spa/xkom/7cbf82dd32ab7e88.svg' alt='x-kom sklep komputerowy' width={225} height={40} />
                            </span>
                            {/* Logo Mobile */}
                            <span className={`relative inline-flex items-center justify-start h-9 lg:hidden`} >
                                <Image src='https://assets.x-kom.pl/public-spa/xkom/064948e3bac8c6d5.svg' alt='x-kom sklep komputerowy' width={102} height={30} className='relative inline-block w-auto h-auto max-w-full max-h-full' />
                            </span>
                        </Link>

                    </div>

                    {/* Hamburger bottom nav & Searchbar Box*/}
                    <div className="flex items-center flex-grow order-4 w-full pt-1 pb-2 pr-2 ml-[-16px] md:ml-[-24px] lg:w-1/5 lg:order-2 lg:ml-0 lg:pl-8 lg:pr-2 lg:h-full " >
                        {/* Hamburger */}
                        <div className="lg:hidden">
                            <Hamburger />
                        </div>

                        {/* Searchbar */}
                        <div className="flex items-center w-full h-full lg:max-w-[480px] " >

                            <div className="h-[32px] md:h-[40px] relative w-full">

                                <div className='bg-white rounded-[20px] border border-[#ccc] lg:border-none'>
                                    <div className='flex justify-between items-center h-[30px]'>
                                        {/* Mobile Button Search*/}
                                        <button className='flex items-center justify-center p-1 border-none md:pl-4 lg:hidden'>
                                            <span className='flex items-center w-6 h-6 text-gray-500'>
                                                <AiOutlineSearch className='w-6 h-6' />
                                            </span>
                                        </button>
                                        {/* Input Mobile & Desktop */}
                                        <div className='flex-1 pr-4 lg:p-0'>

                                        </div>

                                        {/* Button Zamknięcia Mobile */}
                                        <button></button>

                                        {/* Separator Desktop */}
                                        <div></div>

                                        {/* Categories Dekstop */}
                                        <div></div>

                                        {/* Dektop Button Search */}
                                        <button></button>
                                    </div>

                                </div>

                                {/* <button></button> */}
                                {/* <div></div> */}
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className={`${!isScrollDown ? 'lg:h-16 xl:h-[78px]' : 'lg:h-14'} lg:transition-all lg:duration-300 flex order-3  pt-1`} >

                        {/* Pomoc */}
                        <div className='hidden md:flex min-w-[64px] md:min-w-[88px]'>
                            <Link href='/' className="flex flex-col items-center justify-center " >
                                <div className="text-2xl 2xl:text-3xl">
                                    <Icon icon={menuItems[0].icon} />
                                </div>
                                <span className={`${!isScrollDown ? 'lg:scale-100 lg:opacity-100 lg:translate-y-0' : 'lg:scale-0 lg:opacity-0 lg:translate-y-[-20px] lg:h-0'} text-[10px] whitespace-nowrap mt-1 transition-all duration-500`}>{menuItems[0].name}</span>
                            </Link>
                        </div>

                        <span className="hidden md:flex self-center border-r-[1px] border-gray-400 h-9 ml-2 mr-3 mb-1" />

                        {menuItems.slice(1, 4).map(item => (
                            <div key={item.name} className='min-w-[64px] md:min-w-[88px] my-2' >
                                <Link href='/' className="flex flex-col items-center justify-center h-full" >
                                    <div className="text-2xl 2xl:text-3xl" ><Icon icon={item.icon} /></div>
                                    <span className={`${!isScrollDown ? 'lg:scale-100 lg:opacity-100 lg:translate-y-0' : 'lg:scale-0 lg:opacity-0 lg:translate-y-[-20px] lg:h-0 '} transition-all duration-500 text-[10px] whitespace-nowrap mt-1`}>{item.name}</span>
                                </Link>
                            </div>
                        ))}

                    </div>

                </div>

                {/*Navbar Bottom min-screen 1028px */}
                <div className="relative z-10 hidden w-full bg-gray-200 shadow-sm lg:block ">

                    {/* Product Categories Container */}
                    <div className="z-10 flex items-center justify-center w-full mx-auto max-w-[1024px] xl:max-w-screen-xl 2xl:max-w-[1444px] lg:w-[calc(100%+64px)]" >

                        {/* Product Categories */}
                        <nav className={`w-full ${!isScrollDown ? 'h-12 opacity-100' : 'h-0 opacity-0'} transition-all duration-300 `}>
                            <ul className={`flex items-center justify-between text-[13px] leading-4 ${!isScrollDown ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 `}>

                                {categorieItems.map((item, i) => (
                                    <li key={'item' + i} className="z-30 flex-grow last:text-pink-800" >
                                        <Link href='/' className='flex items-center h-12 px-1 w-min'>

                                            <div className="hidden mr-2 text-xl 2xl:text-2xl xl:block">
                                                <Icon icon={item.icon} />
                                            </div>
                                            <span>{item.name}</span>
                                        </Link>

                                        {/* Aside Drawer */}

                                        {React.createPortal(
                                            <div>Drawer</div>, document.body
                                        )}

                                        {/* Flying dropdown */}
                                        {/* <section></section> */}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

            </header>

        </div>
    );
}

