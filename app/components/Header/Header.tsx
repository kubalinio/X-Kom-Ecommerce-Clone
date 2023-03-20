'use client'

import {  ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import useWindowDimensions from '@/hooks/useWindowDimensions';

import { createPortal } from 'react-dom';

import {  BiMessageDots } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { SlBasket } from 'react-icons/sl'
import { HiOutlineDesktopComputer, HiOutlineClipboardList } from 'react-icons/hi'
import { HiOutlineBuildingStorefront } from 'react-icons/hi2'

import { AiOutlineUser, AiOutlineHeart, AiOutlineSetting } from 'react-icons/ai'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { GoMail } from 'react-icons/go'
import { BsTelephone, BsCreditCard2Front } from 'react-icons/bs'


import { CategoriesDesktop } from './CategoriesDropdown';

import { SearchBar } from './SearchBar';
import LogoHeader from './HeaderLogo';
import HeaderNav from './HeaderNav';

// sidebar Component

// Flying Dropdown Component
export type MenuItemsProps = {
    name: string
    icon: JSX.Element
    slug: string
    subMenu?: {
        popular?: {
            name: string
            slug: string
        }[],
        contact: {
            name: string
            icon: any
            slug: string
            workTime?: {
                days: string
                time: string
            }[]
        }[]
    }
}

const menuItems: MenuItemsProps[] = [
    {
        name: 'Pomoc i kontakt',
        icon: <TfiHeadphoneAlt  />,
        slug: 'centrum-pomocy',
        subMenu: {
            popular: [
                {
                    name: 'Status przesyłki',
                    slug: 'status-przesylki'
                },
                {
                    name: 'Dostawa',
                    slug: 'dostawa'
                },
                {
                    name: 'Raty',
                    slug: 'raty'
                },
                {
                    name: 'Leasing',
                    slug: 'leasing'
                },
                {
                    name: 'Ubezpieczenie sprzętu',
                    slug: 'ubezpieczenia'
                },
                {
                    name: 'Zwroty i reklamacje',
                    slug: 'serwis'
                },
                {
                    name: 'Najczęsciej zadawane pytania',
                    slug: 'centrum-pomocy'
                },
            ],
            contact: [
                {
                    name: 'Kontakt',
                    icon: <TfiHeadphoneAlt className='w-full h-full' />,
                    slug: 'kontakt'
                },
                {
                    name: 'Salony',
                    icon: <HiOutlineBuildingStorefront className='w-full h-full' />,
                    slug: 'salony'
                },
                {
                    name: 'x-kom@x-kom.pl',
                    icon: <GoMail className='w-full h-full' />,
                    slug: 'mailto:x-kom@x-kom.pl'
                },
                {
                    name: '12 312 31 23',
                    icon: <BsTelephone className='w-full h-full' />,
                    slug: 'tel:123123123',
                    workTime: [
                        {
                            days: 'pn. - pt.',
                            time: '8:00 - 21:00'
                        },
                        {
                            days: 'sob. - niedz.',
                            time: '8:00 - 19:00'
                        }
                    ]
                },
            ]
        }
    },
    {
        name: 'Twoje konto',
        icon: <CgProfile />,
        slug: 'konto',
        subMenu: {
            contact: [
                {
                    name: 'Twoje konto',
                    icon: <AiOutlineUser className='w-full h-full' />,
                    slug: 'konto'
                },
                {
                    name: 'Zamówienia',
                    icon: <HiOutlineClipboardList className='w-full h-full' />,
                    slug: 'zamowienia'
                },
                {
                    name: 'Listy zakupowe',
                    icon: <AiOutlineHeart className='w-full h-full' />,
                    slug: 'listy'
                },
                {
                    name: 'Opinie',
                    icon: <BiMessageDots className='w-full h-full' />,
                    slug: 'opinie'
                },
                {
                    name: 'Dane do zamówień',
                    icon: <BsCreditCard2Front className='w-full h-full' />,
                    slug: 'dane-do-zamowienia'
                },
                {
                    name: 'Ustawienia konta',
                    icon: <AiOutlineSetting className='w-full h-full' />,
                    slug: 'ustawienia-konta'
                },
            ]
        }
    },
    {
        name: 'Twoje listy',
        icon: <MdOutlineFavoriteBorder />,
        slug: 'listy'
    },
    {
        name: 'Koszyk',
        icon: <SlBasket />,
        slug: 'koszyk',
        subMenu: {
            contact: [
                {
                    name: 'Twoje konto',
                    icon: <AiOutlineUser className='w-full h-full' />,
                    slug: 'konto'
                },
            ]
        }
    },
]

export type categorieMainProps = {
   name: string
   icon: JSX.Element
   slug: string
   recommendProduct: string
   subMenu?: {
     name: string
   }[]
} 

const categorieItems: categorieMainProps[] = [
    {
        name: 'Laptop i komputer',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
        subMenu: [
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
        ]
    },
    {
        name: 'Smartfony i smartwatche',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
    },
    {
        name: 'Gaming i streaming',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
    },
    {
        name: 'Podzespoły komputerowe',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
    },
    {
        name: 'Urządzenia peryferyjne',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
    },
    {
        name: 'TV i audio',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
    },
    {
        name: 'Smarthome i lifestyle',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
    },
    {
        name: 'Akcesoria',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug:'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
    },
    {
        name: 'Trendy, promocje i nowości',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug:'promocje',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
    },
]

export const Header = () => {
    const [isScrollDown, setIsScrollDown] = useState(false)
    const [headerHeight, setHeaderHeight] = useState(98)
    const headerRef = useRef<any>(null)

    // Dać nasłuchiwanie na NAv Bottom do sumy wysokości nawigacji przy desktopach
    const { width }: {width: number | undefined} = useWindowDimensions()
  

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

        <div style={{ height: `${headerHeight}px` }} className={`relative z-[1000] lg:mb-10 `}>

            <header ref={headerRef} className={`${isScrollDown ? 'lg:animate-headerMinimize' : 'lg:animate-headerExpand'} relative bg-white top-0 left-0 z-20 w-full shadow-md lg:fixed`}>

                {/* Header Top */}
                <div className="flex relative flex-wrap items-center justify-between h-full max-w-full ml-4 md:ml-6 lg:mx-auto lg:max-w-[1156px] lg:w-[calc(100%-64px)] xl:max-w-screen-xl 2xl:max-w-[1444px]">

                    {/* Logo Box */}
                    <div className="flex items-center justify-center h-full shrink-0 lg:pl-8 2xl:pl-8" >
                        
                        <LogoHeader isScrollDown={isScrollDown} categorieItems={categorieItems} />
                        
                    </div>

                    {/* Hamburger bottom nav & Searchbar Box*/}
                    <div className="flex items-center flex-grow order-4 w-full pt-1 pb-2 pr-2 ml-[-16px] md:ml-[-24px] lg:w-1/5 lg:order-2 lg:ml-0 lg:pl-8 lg:pr-2 lg:h-full " >
                        
                        {/* Searchbar */}            {/* Hamburger */}
                        <SearchBar categorieItems={categorieItems} />
                        
                    </div>

                    {/* Navigation */}
                    <div className='flex order-3 h-full pt-1 lg:z-20 md:pt-0' >

                       <HeaderNav menuItems={menuItems} isScrollDown={isScrollDown} />

                    </div>

                </div>





                {/* ProductCategories */}
                {/*Navbar Bottom min-screen 1028px */}
                <CategoriesDesktop isScroll={isScrollDown} categorieItems={categorieItems} width={width} />

            </header>

        </div>
    );
}



// {menuItems.map((item, i) => (
//     <>
//         {i === 1 && <span className="hidden md:flex self-center border-r-[1px] border-gray-400 h-9 ml-2 mr-3 mb-1" />}

//         <NavItem item={item} isScrollDown={isScrollDown} />

//         {item.subMenu && (mounted && createPortal(
//             <Drawer
//                 show={isModalShow && activeNav === i}
//                 close={() => setIsModalShow(false)}
//                 isActiveNum={activeNav}
//                 navItems={menuItems[activeNav]}
//             />
//             , refPortal.current)
//         )}

//     </>
// ))}

{/* Portals */ }

{/* {menuItems.map((item, i) => (
                    item.subMenu && (mounted && createPortal(
                        <Drawer
                            show={isModalShow && activeNav === i}
                            close={() => setIsModalShow(false)}
                            isActiveNum={activeNav}
                            navItems={menuItems[activeNav]}
                        />
                        , refPortal.current)
                    )

                ))} */}

                // const NavItem = ({ item, isScrollDown, index }) => {

                //     const { width } = useWindowDimensions()
                
                
                
                //     return (
                //         <div className='relative flex hover:z-10'>
                //             <div onClick={() => handleActiveNav(width, index, item?.slug)} key={item.name} className='min-w-[64px] md:min-w-[88px] my-2 cursor-pointer' >
                
                //                 <Link href={`/${item.slug}`} className="flex flex-col items-center justify-center h-full pointer-events-none" >
                //                     <div className="text-2xl 2xl:text-3xl" ><Icon icon={item.icon} /></div>
                //                     <span className={`${!isScrollDown ? 'lg:scale-100 lg:opacity-100 lg:translate-y-0' : 'lg:scale-0 lg:opacity-0 lg:translate-y-[-20px] lg:h-0 '} transition-all duration-500 text-[10px] whitespace-nowrap mt-1`}>{item.name}</span>
                //                 </Link>
                //             </div>
                //         </div>
                
                
                //     )
                // }