'use client'

import useWindowDimensions from '@/hooks/useWindowDimensions'
import { urlFor } from '@/lib/sanity.client'
import { RootState } from '@/store'
import { BasketItem } from '@/store/basketSlice'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineInfoCircle, AiOutlineUser } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'
import { useSelector } from 'react-redux'
import { AuthButtonOutlined } from './AuthButtons'
import { ReactNode, useEffect, useState } from "react"


import { DrawerBody, DrawerContainer, DrawerHeader, DrawerModal } from "./DrawerModal";
import { NavDropdown } from './NavDropdown'

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


const BasketHeader = ({ totalQuantity }: { totalQuantity: number }) => (


    <div className='flex items-center w-full'>

        <h3 className='pl-2 text-lg font-bold text-black whitespace-nowrap flex-shrink-[6] flex-grow basis-auto'>
            Koszyk
            <span className='text-[#707070] ml-1'>
                {`(${totalQuantity})`}
            </span>
        </h3>
        <Link href='/koszyk' className='text-blue-500 hover:text-blue-600 focus:text-blue-600'>
            Edytuj
        </Link>
    </div>

)

export const BasketInfo = () => (
    <div className='flex w-full px-4 py-3 bg-transparent rounded md:px-0'>
        <span className='flex-shrink-0 inline-block w-5 h-5 mr-2'>
            <AiOutlineInfoCircle className='w-full h-full text-xl' />
        </span>

        <div className=' text-[#4d4d4d] leading-5 text-base pr-4'>
            Dokończ składanie zamówienia - dodanie produktów do koszyka nie oznacza rezerwacji.
        </div>

    </div>
)

const BasketProduct = ({ title, quantity, price, mainImage, slug, onClick }: BasketItem) => (
    <div className='py-3 border-b border-[#ddd] overflow-hidden'>
        <div className='flex'>
            <Link onClick={() => onClick!()} href={`/products/${slug}`}>
                <span className='inline-flex items-center justify-center h-[60px] w-[72px] overflow-hidden'>
                    <Image
                        src={urlFor(mainImage).url()}
                        width={72}
                        height={60}
                        alt={title}
                        title={title}
                        loading='lazy'
                        className='object-contain w-full h-full'
                    />
                </span>
            </Link>

            <div className='block w-full ml-3'>
                <div className='flex flex-col items-start'>
                    <Link onClick={() => onClick!()} href={`/products/${slug}`} title={title}>
                        <h3 className='mb-1 overflow-hidden max-w-[145px] line-clamp-2 underline-offset-auto hover:underline'>{title}</h3>
                    </Link>
                </div>

                <div className='flex items-end justify-between'>
                    <span className='text-[#707070] min-w-[40px] mr-2 text-left'>
                        {quantity} szt.
                    </span>
                    <div className='inline-block text-right'>
                        <span>
                            {price.toFixed(2).replace('.', ',')} zł
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* ??? */}
        <div className='text-[#1a1a1a] mt-4'></div>
    </div>
)

const BasketBottom = ({ totalAmount, width, onClick }: { totalAmount: number, width: number, onClick: () => void }) => (
    <>
        <div className='flex justify-between text-base font-bold'>
            <span>Do zapłaty</span>
            <span>{totalAmount.toFixed(2).replace('.', ',')} zł</span>
        </div>

        <Link onClick={() => onClick()} href='/koszyk' className='flex items-center justify-center w-full px-4 py-3 mt-3 text-white bg-green-600 rounded-full hover:bg-green-700 min-h-[40px]'>
            Przejdź do koszyka
        </Link>

        {width > 1079 ? (
            <BasketInfo />
        ) : ''}

    </>
)

export const MiniBasket = ({ onClick }: { onClick: () => void }) => {
    const { width } = useWindowDimensions()

    const basket = useSelector((state: RootState) => state)

    return (
        <div className='flex flex-col justify-center min-h-[150px] h-full lg:max-h-[610px]'>
            {/* 0 in dekstop Heeader Desktop */}
            <div className='hidden lg:inline-flex justify-between items-center bg-white min-h-[56px] w-full p-2 pr-4 border-b rounded-t-lg border-[#ddd]'>
                <BasketHeader totalQuantity={basket.basketTotalQuantity} />
            </div>

            {/* 15 */}
            {width! < 1079 ? (
                <div className='px-2 border-b border-[#ddd]'>
                    <BasketInfo />
                </div>) : ''}


            {/* 3 */}
            <div className='h-full px-4 -mb-1 overflow-y-auto break-words'>
                {basket.basketItems.map(item => (
                    <BasketProduct
                        onClick={() => onClick()}
                        key={item.title + Math.random()}
                        title={item.title}
                        quantity={item.quantity}
                        price={item.price}
                        mainImage={item.mainImage}
                        slug={item.slug} />
                ))}
            </div>

            {/* 5 */}
            <div className='sticky mt-auto bg-[#f5f5f5] border border-[#ddd] p-4 pb-3 rounded-lg '>
                <BasketBottom onClick={() => onClick()} totalAmount={basket.basketTotalAmount} width={width!} />
            </div>
        </div>
    )
}

export const EmptyMiniBasket = ({ onClick }: { onClick: () => void }) => {

    const pathname = usePathname()

    return (
        <div className='flex flex-col justify-center h-full min-h-[150px]'>
            <div className='flex flex-col items-center px-4 py-8'>

                <p className='mb-1 text-2xl font-bold'>Twój koszyk jest pusty</p>
                <p className='mb-2'>Szukasz inspiracji?</p>

                <AuthButtonOutlined onClick={() => onClick()} slug={`${pathname === '/' ? 'promocje' : ''}`}>
                    Przejdź do {pathname === '/' ? 'promocji' : 'strony głównej'}
                </AuthButtonOutlined>
            </div>
        </div >
    )
}

type BasketNavProps = {
    isScrollDown: boolean
    width: number
}

export const BasketNav = ({ isScrollDown, width }: BasketNavProps) => {

    const [isHover, setIsHover] = useState(false)
    const [showDrawer, setShowDrawer] = useState(false)
    const pathname = usePathname()

    const basket = useSelector((state: RootState) => state)
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

