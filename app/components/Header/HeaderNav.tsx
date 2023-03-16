'use client'

import useWindowDimensions from "@/hooks/useWindowDimensions"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ReactNode, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { Drawer } from "./DrawerModal"
import { MenuItemsProps } from "./Header"
import { NavDropdown } from "./NavDropdown"

const Icon = ({ icon }: { icon: ReactNode }) => <span>{icon}</span>;


type Props = {
    menuItems: MenuItemsProps[]
    isScrollDown: boolean
}


const HeaderNav = ({ menuItems, isScrollDown }: Props) => {
    const [isHover, setIsHover] = useState(false)
    const [activeNav, setActiveNav] = useState(0)
    const [isModalShow, setIsModalShow] = useState(false)
    const { width }: { width: number | undefined } = useWindowDimensions()

    const refPortal = useRef<Element | null>()
    const [mounted, setMounted] = useState(false)

    const router = useRouter()

    const handleHoverNav = (width: number | undefined, num: number) => {
        if (width! < 1027) {
            return
        } else if (num === 0 || num === 1 || num === 3) {
            setActiveNav(num)
            setIsHover(true)
        } else {
            setIsHover(false)
        }
    }

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

    useEffect(() => {
        refPortal.current = document.body.querySelector<HTMLElement>('#react-portals')!;
        setMounted(true)

    }, [])

    return (
        <div className='relative flex items-center'>

            {menuItems.map((item, i) => (
                <>
                    {i === 1 && <span className="hidden md:flex self-center border-r-[1px] border-gray-400 h-9 ml-2 mr-3 mb-1" />}

                    {/* Nav Items */}
                    <div
                        key={item.name + Math.random()}
                        onMouseEnter={() => handleHoverNav(width, i)}
                        onMouseLeave={() => setIsHover(false)}
                        className={`relative flex h-12 md:h-16 z-10 ${i === 0 ? 'max-md:hidden' : ''} ${activeNav === i && isHover ? 'nav-item-after' : ''}`}>

                        <div
                            onClick={() => handleActiveNav(width, i, item?.slug)}
                            className={`flex justify-center items-center min-w-[64px] md:min-w-[88px] cursor-pointer ${activeNav === i && isHover ? 'shadow-xCom rounded-t-lg' : ''}`} >

                            <Link href={`/${item.slug}`} className="flex flex-col items-center justify-center h-full pointer-events-none" >
                                <div className="text-2xl 2xl:text-3xl" >
                                    <Icon icon={item.icon} /></div>
                                <span className={`${!isScrollDown ? 'lg:scale-100 lg:opacity-100 lg:translate-y-0' : 'lg:scale-0 lg:opacity-0 lg:translate-y-[-20px] lg:h-0 '} transition-all duration-500 text-[10px] whitespace-nowrap mt-1`}>{item.name}</span>
                            </Link>
                        </div>

                        {/* DropDown */}
                        {isHover && item.subMenu ? (
                            <NavDropdown
                                index={i}
                                isActiveContent={activeNav}
                                navItem={menuItems[activeNav]} />
                        )
                            : ''
                        }
                    </div>

                    {/* Portals */}
                    {item.subMenu && (mounted && refPortal.current ? createPortal(
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
    )
}

export default HeaderNav