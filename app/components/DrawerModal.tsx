'use client'

import Link from 'next/link';
import { ReactNode, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { AuthButton, AuthButtonOutlined } from './AuthButtons';


type DrawerProps = {
    show: boolean
    close: () => void
    isActiveNum: number
    navItems: navItemProps
}

type navItemProps = {
    name: string
    icon: any
    subMenu?: {
        popular: [{
            name: string
            slug: string
        }],
        contact: [{
            name: string
            icon: any
            slug: string
            workTime?: [{
                days: string
                time: string
            }]
        }]
    }
}

const DrawerHeader = ({ name, closeModal }: { name: string, closeModal: any }) => (
    <div className='inline-flex justify-between items-center bg-[#f5f5f5] min-h-[56px] w-full p-2 pr-4 border-b border-[#ddd]'>

        <div className='flex items-center w-full'>
            <button onClick={closeModal} className='flex items-center justify-center w-10 h-10 text-base transition-colors border-none rounded-full bg-none hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300 '>
                <span className='inline-block h-5 overflow-hidden w-7'>
                    <AiOutlineClose className='w-full h-full' />
                </span>
            </button>
            <h3 className='pl-2 text-lg font-bold text-black whitespace-nowrap'>{name}</h3>
        </div>
    </div>
)

const DrawerBottom = ({ children }: { children: ReactNode }) => (
    <div className='absolute bottom-0 w-full overflow-x-hidden overflow-y-auto top-[58px]'>
        {children}
    </div>
)

export const Drawer = ({ show, close, isActiveNum, navItems }: DrawerProps) => {

    return (
        <div className='Drawer'>
            <aside>
                {!show ? '' : <div onClick={() => close()} className='fixed inset-0 bg-black opacity-50 transition-opacity duration-300 z-[1001]' />}

                <div className={`${!show ? 'w-0 translate-x-[105%]' : 'w-[360px] translate-x-0'} z-[1002] fixed top-0 bottom-0 max-w-[calc(100vw+64px)] bg-white shadow-md overflow-x-hidden overflow-y-auto transition-transform duration-300 right-0`}>
                    <div>
                        <div>
                            {show &&
                                <div className='bg-transparent'>
                                    <div className='absolute inset-0 overflow-hidden transition-transform duration-300 bg-white '>
                                        <div className='flex flex-col h-screen sm:pt-0 sm:max-h-[calc(100vh-56px)] sm:min-h-[200px] sm:h-full'>
                                            <DrawerHeader name={navItems.name} closeModal={() => close()} />

                                            {/* Help */}
                                            {isActiveNum === 0 &&
                                                <DrawerBottom>
                                                    <div className='flex items-end w-full h-14'>
                                                        <p className='ml-4 text-[#707070] font-bold'>
                                                            Popularne tematy
                                                        </p>
                                                    </div>
                                                    <ul>
                                                        {navItems?.subMenu?.popular.map((item) => (
                                                            <li>
                                                                <Link
                                                                    href={`/${item.slug}`}
                                                                    className='flex items-center h-12 px-4 hover:no-underline active:no-underline focus:no-underline'
                                                                >
                                                                    <p className='flex items-center w-full text-base whitespace-nowrap'>
                                                                        {item.name}
                                                                    </p>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className='border border-[#ddd] mt-4' />
                                                    <div className='flex items-end w-full mb-1 h-14'>
                                                        <p className='ml-4 text-[#707070] font-bold'>
                                                            Skontaktuj się z nami
                                                        </p>
                                                    </div>
                                                    <ul>
                                                        {navItems?.subMenu?.contact.slice(0, 3).map((item) => (
                                                            <li>
                                                                <Link href={`/${item.slug}`} className='flex items-center px-4 h-14 hover:no-underline active:no-underline focus:no-underline'>
                                                                    <span className='inline-block w-6 h-6 mr-3' title={item.name}>{item.icon}</span>
                                                                    <p className='flex items-center w-full text-base whitespace-nowrap'>{item.name}</p>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    {navItems?.subMenu?.contact.slice(3, 4).map(item => (
                                                        <div className='relative h-[88px]'>
                                                            <a href={`${item.slug}`} className='flex items-center px-4 h-14 hover:no-underline active:no-underline focus:no-underline'>
                                                                <span className='inline-block w-6 h-6 mr-3' title={item.name}>{item.icon}</span>
                                                                {item.name}
                                                            </a>

                                                            <div className='absolute flex ml-10 text-sm text-gray-600 top-12'>
                                                                <div className='flex flex-col ml-4'>
                                                                    {item.workTime?.map(item => (
                                                                        <span className='mb-1 mr-1 whitespace-nowrap'>{item.days}</span>
                                                                    ))}
                                                                </div>

                                                                <div className='flex flex-col ml-4'>
                                                                    {item.workTime?.map(item => (
                                                                        <span className='mb-1 mr-1 whitespace-nowrap'>{item.time}</span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}

                                                </DrawerBottom>}
                                            {/* User */}
                                            {isActiveNum === 1 &&
                                                <DrawerBottom>
                                                    <div className='flex flex-col justify-between h-full min-h-[257px]'>
                                                        <div className='overflow-hidden'>
                                                            {/* Buttons */}
                                                            <div className='p-4 pt-6'>
                                                                <AuthButton slug='logowanie'>
                                                                    Zaloguj się
                                                                </AuthButton>

                                                                <hr className='relative my-6 h-[1px] w-full border-none bg-[#ddd]' />

                                                                <p className='absolute top-[72px] left-1/2 transform -translate-x-1/2 bg-white px-4'>Nie masz konta?</p>

                                                                <AuthButtonOutlined slug='rejestracja'>
                                                                    Załóż Konto
                                                                </AuthButtonOutlined>

                                                            </div>

                                                            <hr className='my-3 h-[1px] w-full border-none bg-[#ddd]' />

                                                            {/* Functions */}
                                                            <div>
                                                                <ul>
                                                                    {navItems?.subMenu?.contact.map((item) => (
                                                                        <li>
                                                                            <Link href={`/${item.slug}`} className='flex items-center px-5 h-14 hover:no-underline active:no-underline focus:no-underline'>
                                                                                <span className='inline-block w-6 h-6 mr-4' title={item.name}>{item.icon}</span>
                                                                                <p className='flex items-center w-full text-base whitespace-nowrap'>{item.name}</p>
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                        </div>
                                                    </div>




                                                </DrawerBottom>}
                                            {/* Basket */}
                                            {isActiveNum === 3 &&
                                                <DrawerBottom>
                                                    <div className='flex flex-col justify-center h-full min-h-[150px]'>
                                                        <div className='flex flex-col items-center px-4 py-8'>
                                                            <p className='mb-1 text-2xl font-bold'>Twój koszyk jest pusty</p>
                                                            <p className='mb-2'>Szukasz inspiracji?</p>
                                                            <AuthButtonOutlined slug='promocje'>
                                                                Przejdź do promocji
                                                            </AuthButtonOutlined>
                                                        </div>
                                                    </div>
                                                </DrawerBottom>}

                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}



    // <div className='bg-transparent'>
    //     <div className='absolute inset-0 overflow-hidden transition-transform duration-300 bg-white '>
    //         <div className='flex flex-col h-screen sm:pt-0 sm:max-h-[calc(100vh-56px)] sm:min-h-[200px] sm:h-full'>
    //             <DrawerTop name={content?.name} />

    //             <DrawerBottom />

    //         </div>
    //     </div>
    // </div>
