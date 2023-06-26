'use client'

import { useEffect, useState } from 'react'

import { useScrollDirection } from '@/hooks/useScrollDirection'
import useWindowDimensions from '@/hooks/useWindowDimensions'

import LogoHeader from './HeaderLogo'
import { HeaderNav } from './HeaderNav'
import { CategoriesDesktopBar } from './ProductCategories'
import { SearchBar } from './SearchBar'

export const Header = ({ basketToken }: { basketToken: string }) => {
  const [isScrollDown, setIsScrollDown] = useState(false)
  const [scrollMobile, setScrollMobile] = useState(false)

  // Dać nasłuchiwanie na NAv Bottom do sumy wysokości nawigacji przy desktopach
  const { width }: { width: number | undefined } = useWindowDimensions()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const listener = (event: any) => {
      if (event.target.scrollingElement.scrollTop >= 35 && (width ?? 0) >= 1079) {
        setIsScrollDown(true)
      } else {
        setIsScrollDown(false)
      }

      if (event.target.scrollingElement.scrollTop >= 85 && (width ?? 0) < 1080) {
        setScrollMobile(true)
      } else {
        setScrollMobile(false)
      }
    }

    document.addEventListener('scroll', listener)

    return () => {
      document.removeEventListener('scroll', listener)
    }
  }, [width])

  const scrollDirection = useScrollDirection()

  return (
    <div className={`relative z-[1000] h-[90px] md:h-[107px] lg:h-[125px]`}>
      <header
        className={`${scrollMobile ? 'fixed animate-headerMobileHide' : 'relative'} ${
          scrollDirection === 'down' && scrollMobile ? 'translate-y-[-110px]' : 'translate-y-0 duration-300'
        } ${
          isScrollDown ? 'lg:animate-headerMinimize' : 'lg:animate-headerExpand'
        } left-0 top-0 z-20 w-full bg-white shadow-md lg:fixed`}
      >
        {/* Header Top */}
        <div className="relative ml-4 flex h-full max-w-full flex-wrap items-center justify-between md:ml-6 lg:mx-auto lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]">
          {/* Logo Box */}
          <div className="flex h-full shrink-0 items-center justify-center lg:pl-8 2xl:pl-8">
            <LogoHeader isScrollDown={isScrollDown} />
          </div>

          {/* Hamburger bottom nav & Searchbar Box*/}
          <div className="order-4 ml-[-16px] flex w-full flex-grow items-center pb-2 pr-2 pt-1 md:ml-[-24px] lg:order-2 lg:ml-0 lg:h-full lg:w-1/5 lg:pl-8 lg:pr-2 ">
            {/* Searchbar */} {/* Hamburger */}
            <SearchBar />
          </div>

          {/* Navigation */}
          <div className="order-3 flex h-full pt-1 md:pt-1 lg:z-20">
            <HeaderNav isScrollDown={isScrollDown} basketToken={basketToken} />
          </div>
        </div>

        {/* ProductCategories */}
        {/*Navbar Bottom min-screen 1028px */}
        <CategoriesDesktopBar isScroll={isScrollDown} width={width} />
      </header>
    </div>
  )
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

{
  /* Portals */
}

{
  /* {menuItems.map((item, i) => (
                    item.subMenu && (mounted && createPortal(
                        <Drawer
                            show={isModalShow && activeNav === i}
                            close={() => setIsModalShow(false)}
                            isActiveNum={activeNav}
                            navItems={menuItems[activeNav]}
                        />
                        , refPortal.current)
                    )

                ))} */
}

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
