'use client'


import Link from "next/link"
import { ReactNode, useState } from "react"
import { AiOutlineHeart, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { BsCreditCard2Front } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AuthButton, AuthButtonOutlined } from "../AuthButtons";
import { DrawerBody, DrawerContainer, DrawerHeader, DrawerModal } from "../DrawerModal";
import { NavDropdown } from "../NavDropdown";

const Icon = ({ icon }: { icon: ReactNode }) => <span className="flex items-center justify-center w-full h-full">{icon}</span>;



const userItem = {

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
}

type Props = {
    isScrollDown: boolean
    width: number
}

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

const UserAccount = ({ isScrollDown, width }: Props) => {
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
                className={`relative flex h-12 md:h-16 z-10 ${isHover ? 'nav-item-after' : ''}`}>

                <div
                    onClick={() => handleClick()}
                    className={`flex justify-center items-center min-w-[64px] md:min-w-[88px] cursor-pointer ${isHover ? 'shadow-xCom rounded-t-lg' : ''}`} >


                    <Link href='/' className="flex flex-col items-center justify-center h-full max-lg:pointer-events-none" >
                        <div className="relative flex items-center text-2xl 2xl:text-3xl w-7 h-7 md:w-8 md:h-8" >

                            <Icon icon={userItem.icon} />

                        </div>
                        <span className={`${!isScrollDown ? 'lg:scale-100 lg:opacity-100 lg:translate-y-0' : 'lg:scale-0 lg:opacity-0 lg:translate-y-[-20px] lg:h-0 '} transition-all duration-500 text-[10px] whitespace-nowrap mt-1`}>{userItem.name}</span>
                    </Link>

                </div>


                {isHover ? (

                    <NavDropdown>

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
                                        {userItem?.subMenu?.contact.map((item) => (
                                            <DropdownLink key={item.name} slug={item.slug} name={item.name} icon={item.icon} />
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </NavDropdown>

                ) : ''}


            </div>


            <DrawerContainer close={() => setShowDrawer(false)} openDrawer={showDrawer} direction={'right'}>
                {showDrawer && width! <= 1080 ? (

                    <DrawerModal>
                        <DrawerHeader name={userItem.name} closeDrawer={() => setShowDrawer(false)} basketQuantity={0} />

                        {/* Tylko Conterner 1 Div */}
                        <DrawerBody>

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
                                            {userItem.subMenu?.contact.map((item) => (
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


export default UserAccount