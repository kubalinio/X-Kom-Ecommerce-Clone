'use client'

import Link from 'next/link'
import React, { useState, ReactNode } from 'react'
import { AuthButton, AuthButtonOutlined } from './AuthButtons'

const DropdownHeader = ({ title }: { title: string }) => (
    <div className='flex items-center w-full h-9'>
        <p className='ml-4 text-[#707070] font-bold'>
            {title}
        </p>
    </div>
)


type DropDownLinkProps = {
    slug: string
    name: string
    icon?: ReactNode
}

const DropdownLink = ({ slug, name, icon }: DropDownLinkProps) => (

    <li>
        <Link href={`/${slug}`} className='flex items-center h-9 px-4 hover:no-underline active:no-underline focus:no-underline hover:bg-[#f5f5f5]'>
            {icon && <span className='inline-block w-6 h-6 mr-3' title={name}>{icon}</span>}
            <p className='flex items-center w-full text-base whitespace-nowrap'>{name}</p>
        </Link>
    </li>
)

type NavDropdownProps = {
    index: number
    isActiveContent: number
    navItems: any
}

export const NavDropdown = ({ index, isActiveContent, navItems }: NavDropdownProps) => {
    const [isShow] = useState(index === isActiveContent)

    return (
        <div className={`${isShow ? 'block' : 'hidden'} ${index === 3 ? 'right-0 w-[360px] rounded-tr-none' : 'left-0 rounded-tl-none'} absolute top-full z-[11] bg-white rounded-lg shadow-xCom min-w-[256px] pt-2 pb-4`}>

            {isActiveContent === 0 &&
                <div>
                    <DropdownHeader title={'Popularne tematy'} />

                    <ul>
                        {navItems?.subMenu?.popular.map((item) => (
                            <DropdownLink key={item.name} slug={item.slug} name={item.name} />
                        ))}
                    </ul>

                    <DropdownHeader title={'Skontaktuj się z nami'} />

                    <ul>
                        {navItems?.subMenu?.contact.slice(0, 3).map((item) => (
                            <DropdownLink key={item.name} slug={item.slug} name={item.name} icon={item.icon} />
                        ))}
                    </ul>

                    {/* Contact */}
                    {navItems?.subMenu?.contact.slice(3, 4).map(item => (
                        <div key={item.name} className='relative h-[72px]'>
                            <a href={`${item.slug}`} className='flex items-center h-full px-4 pb-9 hover:no-underline active:no-underline focus:no-underline'>
                                <span className='inline-block w-6 h-6 mr-3' title={item.name}>{item.icon}</span>
                                {item.name}
                            </a>

                            <div className='absolute flex ml-10 text-sm text-gray-600 top-9'>
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
                </div>
            }

            {isActiveContent === 1 &&
                <div className='flex flex-col justify-between h-full min-h-[257px] max-h-[616px]'>
                    <div className='overflow-hidden'>
                        {/* Buttons */}
                        <div className='p-4 pt-6'>
                            <AuthButton slug='logowanie'>
                                Zaloguj się
                            </AuthButton>

                            <hr className='relative my-6 h-[1px] w-full border-none bg-[#ddd]' />

                            <p className='absolute top-[78px] text-gray-500 left-1/2 transform -translate-x-1/2 bg-white px-4'>Nie masz konta?</p>

                            <AuthButtonOutlined slug='rejestracja'>
                                Załóż Konto
                            </AuthButtonOutlined>

                        </div>

                        <hr className='my-3 h-[1px] w-full border-none bg-[#ddd]' />

                        {/* Functions */}
                        <div>
                            <ul>
                                {navItems?.subMenu?.contact.map((item) => (
                                    <DropdownLink key={item.name} slug={item.slug} name={item.name} icon={item.icon} />
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            }

            {isActiveContent === 3 &&
                <div className='flex flex-col justify-center h-full min-h-[150px]'>
                    <div className='flex flex-col items-center px-4 py-8'>
                        <p className='mb-1 text-2xl font-bold'>Twój koszyk jest pusty</p>
                        <p className='mb-2'>Szukasz inspiracji?</p>
                        <AuthButtonOutlined slug='promocje'>
                            Przejdź do promocji
                        </AuthButtonOutlined>
                    </div>
                </div>
            }

        </div>
    )
}

