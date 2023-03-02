'use client'

import {  ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import { createPortal } from 'react-dom';

import { BiHelpCircle, BiMessageDots } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { SlBasket } from 'react-icons/sl'
import { HiOutlineDesktopComputer, HiOutlineClipboardList } from 'react-icons/hi'
import { HiOutlineBuildingStorefront } from 'react-icons/hi2'

import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart, AiOutlineSetting } from 'react-icons/ai'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { GoMail } from 'react-icons/go'
import { BsTelephone, BsCreditCard2Front } from 'react-icons/bs'

import Image from 'next/image';

import { Drawer } from './DrawerModal';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { NavDropdown } from './NavDropdown';
import { DrawerCategories } from './CategoriesDrawer';
import { HamburgerDrawer, HamburgerDropdown } from './Hamburgers';
import { CategoriesDesktop, CategoriesDropdown } from './CategoriesDropdown';
import Overlay from './Overlay';

// sidebar Component

// Flying Dropdown Component


const menuItems = [
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
        subMenu: <div>Content 3</div>
    },
]

const categorieItems = [
    {
        name: 'Laptop i komputer',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug: 'products'
    },
    {
        name: 'Smartfony i smartwatche',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug: 'products'
    },
    {
        name: 'Gaming i streaming',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug: 'products'
    },
    {
        name: 'Podzespoły komputerowe',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug: 'products'
    },
    {
        name: 'Urządzenia peryferyjne',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug: 'products'
    },
    {
        name: 'TV i audio',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug: 'products'
    },
    {
        name: 'Smarthome i lifestyle',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug: 'products'
    },
    {
        name: 'Akcesoria',
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug:'products'
    },
    {
        name: <p className="whitespace-nowrap">Trendy, promocje i nowości</p>,
        icon: <HiOutlineDesktopComputer className='w-full h-full'/>,
        slug:'promocje'
    },
]

const Icon = ({ icon }: { icon: ReactNode }) => <span>{icon}</span>;


// const Navigation = () => (

// )

// Portals 
interface PortalProps {
    children: ReactNode
}

export const Nav = () => {
    const [isScrollDown, setIsScrollDown] = useState(false)
    const [headerHeight, setHeaderHeight] = useState(98)
    const headerRef = useRef<any>(null)

    const refPortal = useRef<Element | null>()
    const [mounted, setMounted] = useState(false)

    const [isModalShow, setIsModalShow] = useState(false)
    const [activeNav, setActiveNav] = useState(0)
    // Dać nasłuchiwanie na NAv Bottom do sumy wysokości nawigacji przy desktopach
    const { width }: {width: number | undefined} = useWindowDimensions()
    const router = useRouter()

    // Desktop Navigation
    const [isHover, setIsHover] = useState(false)

    // Mobile Categories
    const [showCategories, setShowCategories] = useState(false)
    const [isHoverCategories ,setIsHoverCategories] = useState(false)

  

    const onResize = useCallback(() => {
        if (headerRef.current) setHeaderHeight(headerRef.current.clientHeight)
    }, [])

    useEffect(() => {
        refPortal.current = document.querySelector<HTMLElement>('#react-portals')
        setMounted(true)

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

    const handleActiveNav = (width: number | undefined, num: number, link: string) => {
        if (width! > 1027) {
            setIsModalShow(false)
            // Check better solution
            router.replace(`/${link}`)
        } else if (num === 0 || num === 1 || num === 3 && width! < 1027) {
            setActiveNav(num)
            setIsModalShow(true)
        } else {
            setIsModalShow(false)
            // Check better solution
            router.replace(`/${link}`)
        }
    }


    const handleHoverNav = (width: number | undefined, num: number) => {
        if (width! < 1027) {
            return
        } else if (num === 0 || num === 1 || num === 3 ) {
            setActiveNav(num)
            setIsHover(true)
        } else {
            setIsHover(false)
        }
    }
    

    return (

        <div style={{ height: `${headerHeight}px` }} className={`relative z-[1000] lg:mb-10`}>

            <header ref={headerRef} className={`${isScrollDown ? 'lg:[56px]' : 'lg:h-[72px]'} relative bg-white top-0 left-0 z-20 w-full shadow-md lg:fixed transition-all duration-300`}>

                {/* Navbar Top */}
                <div className="flex relative flex-wrap items-center justify-between h-full max-w-full ml-4 md:ml-6 lg:mx-auto lg:max-w-[1156px] lg:w-[calc(100%-64px)] xl:max-w-screen-xl 2xl:max-w-[1444px]">

                    {/* Logo Box */}
                    <div className="flex items-center justify-center h-full shrink-0 lg:pl-8 2xl:pl-8" >

                        {/* Hamburger */}
                        <div 
                            className={`${!isScrollDown ? 'scale-0 opacity-0 w-0' : 'h-full w-[64px] md:w-[88px]'} absolute top-0 left-0 z-20 outline-transparent hidden transition-all duration-300 bg-white h-[48px] md:h-[64px] lg:h-[56px] lg:block ${isHoverCategories ? 'nav-item-after' : ''} `}
                            onMouseEnter={() =>  setIsHoverCategories(true)} 
                            onMouseLeave={() => setIsHoverCategories(false)} 
                            
                            >
                                <HamburgerDropdown isHover={isHoverCategories}/>
                                {/* DropDown */}
                                { isHoverCategories ? (
                                       
                                        <CategoriesDropdown 
                                            show={isHoverCategories}
                                            categorieItems={categorieItems}
                                        />
                
                                    ) 
                                    : '' }
                        </div>
                        
                        {/* Logo */}
                        <Link href='/' className={`flex items-center overflow-hidden `} >
                            {/* Logo Big Screen */}
                            <span className={`${!isScrollDown ? 'h-12' : 'h-8 w-52' } hidden lg:inline-flex transition-all duration-500`} >
                                <Image src='https://assets.x-kom.pl/public-spa/xkom/7cbf82dd32ab7e88.svg' alt='x-kom sklep komputerowy' width={225} height={40} />
                            </span>
                            {/* Logo Mobile */}
                            <span className={`relative inline-flex items-center justify-start h-8 lg:hidden`} >
                                <Image src='https://assets.x-kom.pl/public-spa/xkom/064948e3bac8c6d5.svg' alt='x-kom sklep komputerowy' width={102} height={30} className='relative inline-block w-auto h-full max-w-full max-h-full' />
                            </span>
                        </Link>
                        
                        {isHoverCategories && <Overlay/>}
                        
                    </div>

                    {/* Hamburger bottom nav & Searchbar Box*/}
                    <div className="flex items-center flex-grow order-4 w-full pt-1 pb-2 pr-2 ml-[-16px] md:ml-[-24px] lg:w-1/5 lg:order-2 lg:ml-0 lg:pl-8 lg:pr-2 lg:h-full " >
                        {/* Hamburger */}
                        <div className="lg:hidden">
                            <HamburgerDrawer showDrawer={() => setShowCategories(true)} />

                            {(mounted ? createPortal(
                                  <DrawerCategories 
                                        show={showCategories}
                                        close={() => setShowCategories(false)}
                                        categorieItems={categorieItems} 
                                        width={width}
                                        />

                                , refPortal.current) : null
                                )}

                                {/* // <Drawer
                                //     show={isModalShow && activeNav === i}
                                //     close={() => setIsModalShow(false)}
                                //     isActiveNum={activeNav}
                                //     navItem={menuItems[activeNav]}
                                // /> */}
                          

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
                    <div className={`${!isScrollDown ? '' : ''} lg:z-20 flex h-full order-3 pt-1 md:pt-0`} >
                        <div className='relative flex items-center'>
                            
                        {menuItems.map((item, i) => (
                            <>  
                                {i === 1 && <span className="hidden md:flex self-center border-r-[1px] border-gray-400 h-9 ml-2 mr-3 mb-1" />}

                                {/* Nav Items */}
                                <div 
                                    key={item.name} 
                                    onMouseEnter={() => handleHoverNav(width, i)} 
                                    onMouseLeave={() => setIsHover(false)} 
                                    className={`relative flex h-12 md:h-16 z-10 ${i === 0 ? 'max-md:hidden' : ''} ${activeNav === i && isHover ? 'nav-item-after' : ''}`}>

                                    <div 
                                        onClick={() => handleActiveNav(width, i, item?.slug)}  
                                        className={`flex justify-center items-center min-w-[64px] md:min-w-[88px] cursor-pointer ${activeNav === i && isHover ? 'shadow-xCom rounded-t-lg' : ''}`} >

                                        <Link href={`/${menuItems[0].slug}`} className="flex flex-col items-center justify-center h-full pointer-events-none" >
                                            <div className="text-2xl 2xl:text-3xl" ><Icon icon={item.icon} /></div>
                                            <span className={`${!isScrollDown ? 'lg:scale-100 lg:opacity-100 lg:translate-y-0' : 'lg:scale-0 lg:opacity-0 lg:translate-y-[-20px] lg:h-0 '} transition-all duration-500 text-[10px] whitespace-nowrap mt-1`}>{item.name}</span>
                                        </Link>
                                    </div>

                                    {/* DropDown */}
                                    { isHover && item.subMenu ? (
                                        <NavDropdown 
                                            index={i} 
                                            isActiveContent={activeNav} 
                                            navItems={menuItems[activeNav]} />
                                    ) 
                                    : ''
                                    }
                                </div>

                                {/* Portals */}
                                {item.subMenu && (mounted ? createPortal(
                                    <Drawer
                                        show={isModalShow && activeNav === i}
                                        close={() => setIsModalShow(false)}
                                        isActiveNum={activeNav}
                                        navItem={menuItems[activeNav]}
                                    />
                                    , refPortal.current) : null
                                )}

                            </>
                        ))}
                        </div>

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