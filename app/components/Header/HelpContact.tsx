'use client'


import Link from "next/link"
import { ReactNode, useState } from "react"

import { BsTelephone } from "react-icons/bs";

import { GoMail } from "react-icons/go";

import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { DrawerBody, DrawerContainer, DrawerHeader, DrawerModal } from "../DrawerModal";
import { NavDropdown } from "../NavDropdown";

const Icon = ({ icon }: { icon: ReactNode }) => <span className="flex items-center justify-center w-full h-full">{icon}</span>;

const helpItem = {
    name: 'Pomoc i kontakt',
    icon: <TfiHeadphoneAlt />,
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

}

type Props = {
    isScrollDown: boolean
    width: number
}

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



export const HelpContact = ({ isScrollDown, width }: Props) => {
    const [isHover, setIsHover] = useState(false)
    const [showDrawer, setShowDrawer] = useState(false)

    const handleClick = () => {
        if (width >= 1080) {
            setShowDrawer(false)
        } else if (width < 1080 && !showDrawer) {
            setShowDrawer(true)
        } else if (width < 1080 && showDrawer) {
            setShowDrawer(false)
        }
    }

    const handleHover = () => {
        if (width < 1080) {
            return
        }
        else if (width >= 1080 && !isHover) {
            setIsHover(true)
        } else if (width >= 1080 && isHover) {
            setIsHover(false)
        }

    }

    return (
        <>
            <div
                onMouseEnter={() => handleHover()}
                onMouseLeave={() => handleHover()}
                className={`relative hidden md:flex h-12 md:h-16 z-10 ${isHover ? 'nav-item-after' : ''}`}>

                <div
                    onClick={() => handleClick()}
                    className={`flex justify-center items-center min-w-[64px] md:min-w-[88px] cursor-pointer ${isHover ? 'shadow-xCom rounded-t-lg' : ''}`} >


                    <Link href='/' className="flex flex-col items-center justify-center h-full max-lg:pointer-events-none" >
                        <div className="relative flex items-center text-2xl 2xl:text-3xl w-7 h-7 md:w-8 md:h-8" >

                            <Icon icon={helpItem.icon} />

                        </div>

                        <span className={`${!isScrollDown ? 'lg:scale-100 lg:opacity-100 lg:translate-y-0' : 'lg:scale-0 lg:opacity-0 lg:translate-y-[-20px] lg:h-0 '} transition-all duration-500 text-[10px] whitespace-nowrap mt-1`}>{helpItem.name}</span>

                    </Link>

                </div>

                {isHover ? (
                    <NavDropdown>

                        <div>
                            <DropdownHeader title={'Popularne tematy'} />

                            <ul>
                                {helpItem?.subMenu?.popular?.map((item) => (
                                    <DropdownLink key={item.name} slug={item.slug} name={item.name} />
                                ))}
                            </ul>

                            <DropdownHeader title={'Skontaktuj się z nami'} />

                            <ul>
                                {helpItem?.subMenu?.contact.slice(0, 3).map((item) => (
                                    <DropdownLink key={item.name} slug={item.slug} name={item.name} icon={item.icon} />
                                ))}
                            </ul>

                            {/* Contact */}
                            {helpItem?.subMenu?.contact.slice(3, 4).map((item) => (
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

                    </NavDropdown>
                ) : ''}


            </div>


            <DrawerContainer close={() => setShowDrawer(false)} openDrawer={showDrawer} direction={'right'}>
                {showDrawer && width! <= 1080 ? (

                    <DrawerModal>
                        <DrawerHeader name={helpItem.name} closeDrawer={() => setShowDrawer(false)} basketQuantity={0} />

                        {/* Tylko Conterner 1 Div */}
                        <DrawerBody>

                            <div className='flex items-end w-full h-14'>
                                <p className='ml-4 text-[#707070] font-bold'>
                                    Popularne tematy
                                </p>
                            </div>
                            <ul>
                                {helpItem?.subMenu?.popular?.map((item) => (
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
                                {helpItem?.subMenu?.contact.slice(0, 3).map((item) => (
                                    <li>
                                        <Link href={`/${item.slug}`} className='flex items-center px-4 h-14 hover:no-underline active:no-underline focus:no-underline'>
                                            <span className='inline-block w-6 h-6 mr-3' title={item.name}>{item.icon}</span>
                                            <p className='flex items-center w-full text-base whitespace-nowrap'>{item.name}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {helpItem?.subMenu?.contact.slice(3, 4).map(item => (
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
                        </DrawerBody>


                    </DrawerModal>

                ) : ''}
            </DrawerContainer>





        </>

    )
}



{/* DropDown */ }
{/* {isHover && item.subMenu ? (
                <NavDropdown
                    index={i}
                    isActiveContent={activeNav}
                    navItem={menuItems[activeNav]} />
            )
                : ''
            }  */}



{/* Portals */ }
{/* {
            item.subMenu && (mounted && refPortal.current ? createPortal(
                <Drawer
                    show={isModalShow && activeNav === i}
                    close={() => setIsModalShow(false)}
                    isActiveNum={activeNav}
                    navItem={menuItems[activeNav]}
                />
                , refPortal.current) : null
            )
        } */}


