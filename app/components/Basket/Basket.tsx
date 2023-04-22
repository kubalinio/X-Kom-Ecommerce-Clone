'use client'

import { RootState } from '@/store'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineUser } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'
import { useSelector } from 'react-redux'
import { ReactNode, useEffect, useState } from "react"


import { DrawerBody, DrawerContainer, DrawerHeader, DrawerModal } from "../DrawerModal";
import { NavDropdown } from '../Header/HeaderNav/NavDropdown'
import { MiniBasket } from './MiniBasket'
import { EmptyMiniBasket } from './EmptyMiniBasket'

const Icon = ({ icon }: { icon: ReactNode }) => <span className="flex items-center justify-center w-full h-full text-gray-700">{icon}</span>;


const basketItem = {
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
}

type BasketNavProps = {
    isScrollDown: boolean
    width: number
}

export const BasketNav = ({ isScrollDown, width }: BasketNavProps) => {

    const [isHover, setIsHover] = useState(false)
    const [showDrawer, setShowDrawer] = useState(false)
    const pathname = usePathname()

    const basket = useSelector((state: RootState) => state.basket)
    const basketQuantity = basket.basketTotalQuantity

    const handleClick = () => {
        if (width >= 1080 && pathname === '/koszyk') {
            setIsHover(false)
            setShowDrawer(false)
        } else if (width < 1080 && !showDrawer && pathname !== '/koszyk') {
            setShowDrawer(true)
        } else if (width < 1080 && showDrawer) {
            setShowDrawer(false)
        }
    }

    useEffect(() => {

        if (pathname === '/koszyk') {
            setIsHover(false)
            setShowDrawer(false)
        }

    }, [pathname])

    const handleHover = () => {
        if (width < 1080 && pathname === '/koszyk') {
            setIsHover(false)
        }
        else if (width >= 1080 && !isHover && pathname !== '/koszyk') {
            setIsHover(true)
        } else if (width >= 1080 && isHover) {
            setIsHover(false)
        }
    }

    return (

        <>
            <div
                onClick={() => handleClick()}
                onMouseEnter={() => handleHover()}
                onMouseLeave={() => handleHover()}
                className={`relative flex h-12 md:h-16 z-10 ${isHover ? 'nav-item-after' : ''}`}>

                <div

                    className={`flex justify-center items-center min-w-[64px] md:min-w-[88px] cursor-pointer ${isHover ? 'shadow-xCom rounded-t-lg' : ''}`} >


                    <Link href='/koszyk' className="flex flex-col items-center justify-center h-full max-lg:pointer-events-none" >
                        <div className="relative flex items-center text-2xl 2xl:text-3xl w-7 h-7 md:w-8 md:h-8" >

                            {basketQuantity > 0 ? (
                                <div className="absolute top-0 -right-1">
                                    <div className="flex items-center justify-center w-4 px-1 text-xs text-white bg-blue-600 rounded-full shadow-sm-xCom shadow-white">
                                        {basketQuantity || 0}
                                    </div>
                                </div>

                            ) : null}

                            <Icon icon={basketItem.icon} />


                        </div>

                        <span className={`${!isScrollDown ? 'lg:scale-100 lg:opacity-100 lg:translate-y-0' : 'lg:scale-0 lg:opacity-0 lg:translate-y-[-20px] lg:h-0 '} transition-all duration-500 text-[10px] whitespace-nowrap mt-1`}>{basketItem.name}
                        </span>

                    </Link>

                </div>

                {isHover ? (
                    <NavDropdown last={true}>

                        {basketQuantity > 0 ? (
                            <MiniBasket onClick={() => setIsHover(false)} />
                        ) : (
                            <EmptyMiniBasket onClick={() => setIsHover(false)} />
                        )}

                    </NavDropdown>
                )
                    : ''
                }

            </div>


            <DrawerContainer close={() => setShowDrawer(false)} openDrawer={showDrawer} direction={'right'}>
                {showDrawer && width! <= 1080 ? (

                    <DrawerModal>
                        <DrawerHeader name={basketItem.name} closeDrawer={() => setShowDrawer(false)} basketQuantity={basketQuantity} />

                        {/* Tylko Conterner 1 Div */}
                        <DrawerBody>
                            {basketQuantity > 0 ? (
                                <MiniBasket onClick={() => setShowDrawer(false)} />
                            ) : (
                                <EmptyMiniBasket onClick={() => setShowDrawer(false)} />
                            )}
                        </DrawerBody>


                    </DrawerModal>

                ) : ''}
            </DrawerContainer>
        </>

    )
}

