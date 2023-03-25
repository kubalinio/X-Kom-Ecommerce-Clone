'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { BsEnvelopeFill } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { ImLocation } from 'react-icons/im'
import facebookIcon from '../../public/facebook.svg'
import salesMasterIcon from '../../public/salesMasterIcon.svg'
import { usePathname } from 'next/navigation'

type footerItem = {
    title: string;
    links: {
        name: string;
        slug: string;
    }[]
}

const footerItems: footerItem[] = [
    {
        title: 'Zamówienia',
        links: [
            {
                name: 'Dostawy',
                slug: ''
            },
            {
                name: 'Raty',
                slug: ''
            },
            {
                name: 'Leasing',
                slug: ''
            },
            {
                name: 'Ubezpieczenia',
                slug: ''
            },
            {
                name: 'TaxFree',
                slug: ''
            },
            {
                name: 'Montaż',
                slug: ''
            },
            {
                name: 'Zwroty i reklamacje',
                slug: ''
            },
            {
                name: 'Najczęściej zadawane pytania',
                slug: ''
            },
        ]
    },
    {
        title: 'Promocje i inspiracje',
        links: [
            {
                name: 'Wyprzedaż',
                slug: ''
            },
            {
                name: 'Gorący strzał',
                slug: ''
            },
            {
                name: 'Promocje',
                slug: ''
            },
            {
                name: 'Karty podarunkowe',
                slug: ''
            },
            {
                name: 'Poradniki',
                slug: ''
            },
            {
                name: 'Aktualności',
                slug: ''
            },
        ]
    },
    {
        title: 'x-kom',
        links: [
            {
                name: 'O nas',
                slug: ''
            },
            {
                name: 'Regulamin',
                slug: ''
            },
            {
                name: 'Polityka prywatności',
                slug: ''
            },
            {
                name: 'Polityka cookies',
                slug: ''
            },
            {
                name: 'Biura prasowe',
                slug: ''
            },
            {
                name: 'Zamówienia publiczne',
                slug: ''
            },
            {
                name: 'Współpraca B2B',
                slug: ''
            },
            {
                name: 'Współpraca marketingowa',
                slug: ''
            },
            {
                name: 'Geex',
                slug: ''
            },
            {
                name: 'Forum',
                slug: ''
            },
            {
                name: 'Kariera',
                slug: ''
            },
            {
                name: 'Kontakt',
                slug: ''
            },
            {
                name: 'Realizowane projekty',
                slug: ''
            },
        ]
    },

]


// Validation for Form to do
const Newsletter = () => (
    <div className='bg-[#f9f9f9] rounded-2xl shadow-sm-xCom mb-4 md:flex lg:mr-4 lg:w-[calc(50%-16px)]'>
        {/* Content */}
        <div className='flex flex-col items-center px-8 pt-7 pb-6 md:pr-3 md:items-start md:flex-grow md:max-w-[390px] lg:pr-5 lg:pb-4 lg:pl-10'>

            <h2 className='text-2xl font-bold leading-7'>Newsletter</h2>

            <div className='mt-2 mb-4 lg:mt-3'>
                <p className='text-[#4d4d4d] text-center md:text-left md:w-[270px] lg:w-[186px]'>Nie przegap żadnej promocji,</p>
                <p className='text-[#4d4d4d] text-center md:text-left md:w-[270px] lg:w-[186px]'>zdobywaj dodatkowe rabaty.</p>
            </div>

            <form className='w-full'>
                <div className='w-full'>
                    {/* input */}
                    <div className='flex w-full h-10 lg:h-8 lg:max-w-[304px]'>
                        <input
                            type="email"
                            placeholder='Twój e-mail'
                            className='flex-1 h-full px-5 text-left border border-[#ccc] border-r-0 max-w-full rounded-l-full -mr-4 outline-none text-base lg:pl-4'
                        />
                        <button type='submit' className='text-white border-none rounded-full h-full w-auto px-4 bg-[#0082fa] hover:bg-[#0070CC] active:bg-[#00407a] transition-colors duration-200'>
                            <span className='flex items-center justify-center whitespace-nowrap'>
                                Zapisz się
                            </span>
                        </button>
                    </div>
                    {/* error message*/}
                    <span className='min-h-[20px] text-left block text-red-800 pt-1'></span>
                </div>
            </form>
        </div>

        {/* Img Tablet */}
        <div className='hidden mx-auto lg:flex lg:items-center lg:mr-8'>
            <span className='hidden h-[96px] overflow-hidden md:block md:my-3 md:mx-auto lg:my-0 lg:mx-auto'>
                <Image
                    src={`https://assets.x-kom.pl/public-spa/xkom/2cc235c12e03ae26.png`}
                    width={441}
                    height={288}
                    className='inline-block w-auto h-auto max-w-full max-h-full'
                    alt='Newsletter'
                    title='Newsletter'
                    loading='lazy'
                />
            </span>
        </div>

        {/* Img Desktop */}
        <div className='hidden mx-auto md:flex md:items-center lg:hidden'>
            <span className='hidden h-[112px] overflow-hidden md:block md:my-3 md:mx-auto lg:my-0 lg:mx-auto'>
                <Image
                    src={`https://assets.x-kom.pl/public-spa/xkom/2cc235c12e03ae26.png`}
                    width={441}
                    height={288}
                    className='inline-block w-auto h-auto max-w-full max-h-full'
                    alt='Newsletter'
                    loading='lazy'
                    title='Newsletter'
                />
            </span>

        </div>
    </div>
)

const MobileAppBox = () => (
    <div className='relative flex shadow-sm-xCom bg-[#f9f9f9] rounded-2xl mb-4 w-full max-md:flex-col max-md:items-center max-md:text-center md:pl-8 lg:pl-10 lg:pr-1 lg:ml-4 lg:w-[calc(50%-16px)] transition-shadow duration-300 hover:shadow-xCom'>

        {/* Content */}
        <div className='mb-8 mt-7 md:text-center md:mb-11 lg:mb-6'>
            <Link
                href={`/`}
                target='_blank'
                className='absolute top-0 left-0 w-full h-full z-1'
            />

            <h3 className='mb-1 text-2xl font-bold leading-7 lg:mb-2'>Aplikacja mobilna</h3>

            <div className='mb-1 ml-3 mr-3 md:m-0 md:mb-3'>
                <p className='text-[#4d4d4d]'>Sprawdzaj promocje,</p>
                <p className='text-[#4d4d4d]'>które dostępne są tylko w aplikacji.</p>
            </div>

            <div className='flex max-md:flex-wrap max-md:justify-center'>

                <Link href={`/`} className='max-h-10 z-[2] mx-1 max-md:mt-2 md:max-w-[100px] md:max-h-[32px] md:ml-0'>
                    <span className='inline-flex items-center justify-center overflow-hidden h-10 w-[120px] md:h-8 md:w-[100px]'>
                        <Image
                            src={`https://assets.x-kom.pl/public-spa/xkom/0f6ff6eee36d1bb3.svg`}
                            width={136}
                            height={40}
                            loading='lazy'
                            alt='App Store'
                            title='App Store'
                            className='object-contain w-full h-full'
                        />
                    </span>
                </Link>

                <Link href={`/`} className='max-h-10 z-[2] mx-1 max-md:mt-2 md:max-w-[100px] md:max-h-[32px] md:ml-0'>
                    <span className='inline-flex items-center justify-center overflow-hidden h-10 w-[120px] md:h-8 md:w-[100px]'>
                        <Image
                            src={`https://assets.x-kom.pl/public-spa/xkom/32fe7e427a8819cc.svg`}
                            width={136}
                            height={40}
                            loading='lazy'
                            alt='Google Play'
                            title='Google Play'
                            className='object-contain w-full h-full'
                        />
                    </span>
                </Link>

                <Link href={`/`} className='max-h-10 z-[2] mx-1 max-md:mt-2 md:max-w-[100px] md:max-h-[32px] md:ml-0'>
                    <span className='inline-flex items-center justify-center overflow-hidden h-10 w-[120px] md:h-8 md:w-[100px]'>
                        <Image
                            src={`https://assets.x-kom.pl/public-spa/xkom/de8bbc5c651b4ad9.svg`}
                            width={136}
                            height={40}
                            loading='lazy'
                            alt='App Gallery'
                            title='App Gallery'
                            className='object-contain w-full h-full'
                        />
                    </span>
                </Link>
            </div>
        </div>

        {/*  Img Dektop */}
        <div className='hidden mx-auto lg:items-end lg:flex'>
            <span className='hidden items-center justify-center h-[136px] overflow-hidden md:block md:mx-auto lg:flex lg:items-end'>
                <Image
                    src={`https://assets.x-kom.pl/public-spa/xkom/dc932e41baa41f9d.png`}
                    width={441}
                    height={288}
                    loading='lazy'
                    className='inline-block w-auto h-auto max-w-full max-h-full'
                    alt='Telefony'
                    title='Aplikacja mobilna'
                />
            </span>
        </div>

        {/*  Img Tablet */}
        <div className='hidden mx-auto md:flex md:items-end lg:hidden'>
            <span className='hidden h-[164px] overflow-hidden md:block md:mx-auto'>
                <Image
                    src={`https://assets.x-kom.pl/public-spa/xkom/dc932e41baa41f9d.png`}
                    width={441}
                    height={288}
                    loading='lazy'
                    className='inline-block w-auto h-auto max-w-full max-h-full'
                    alt='Telefony'
                    title='Aplikacja mobilna'
                />
            </span>
        </div>
    </div>
)


const FooterExpandNavigation = ({ items }: { items: footerItem[] }) => {
    const [isShow, setIsShow] = useState(false)
    const [expandIndex, setExpandIndex] = useState(0)

    const handleShowAcc = (index: number) => {
        if (isShow === true && expandIndex === index) {
            setIsShow(false)
            setExpandIndex(0)
        } else {
            setIsShow(true)
            setExpandIndex(index)
        }
    }

    return (
        // {/* Mobile Accordion */ }
        <div className='flex flex-col border-b border-[#ddd] w-full md:hidden'>

            {items.map(((item, index) => (
                <div key={item.title + Math.random()}>
                    <div onClick={() => handleShowAcc(index)} className='flex justify-between items-center cursor-pointer border-t border-[#ddd] w-full h-16'>
                        <h3 className='pr-2 text-lg font-bold'>{item.title}</h3>
                        <span className={`${expandIndex === index && isShow ? '-rotate-180' : 'rotate-0'} inline-block w-8 h-8 mr-2 transition-transform duration-300 `}>
                            <MdOutlineKeyboardArrowDown className='w-full h-full' />
                        </span>
                    </div>

                    <div className={`${expandIndex === index && isShow ? 'block max-h-[400px]' : 'hidden max-h-0'} overflow-hidden transition-all duration-500`}>
                        <div className='flex flex-col text-base last:mb-4'>
                            {item.links.map(link => (
                                <Link key={link.name + Math.random()} href={`/`} className='px-4 py-3 leading-6 hover:underline underline-offset-2 '>{link.name}</Link>

                            ))}

                        </div>
                    </div>

                </div>
            )))}

        </div >
    )

}

const FooterNavigation = ({ items }: { items: footerItem[] }) => {
    return (
        <div className='hidden md:flex flex-grow-[3] shrink'>
            {items.map(item => (
                <div key={item.title + Math.random()} className='flex flex-col flex-grow lg:px-2'>
                    <h3 title={item.title} className='mb-4 text-lg font-bold'>{item.title}</h3>
                    <ul className='flex flex-col list-none '>
                        {item.links.map(link => (
                            <li key={link.name + Math.random()} className='w-full mb-4'>
                                <Link href={`/`} className='inline-block w-full hover:underline'>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            ))}
        </div>
    )
}

const SaleMasterBox = () => (
    <Link href={`/`} className='flex flex-col justify-center group items-center w-full pt-5 pb-6 rounded-2xl bg-[#f9f9f9] shadow-sm-xCom transition-shadow duration-300 hover:shadow-xCom md:p-0 md:flex-row md:justify-between lg:py-4 lg:px-10 lg:mt-4'>

        <div className='flex flex-col items-center justify-center md:items-start md:py-6 md:px-8 lg:p-0 lg:items-center lg:w-full lg:flex-row lg:justify-between'>

            <span title='Program partnerski SalesMaster' className='inline-block h-10 overflow-hidden'>
                <Image
                    src={salesMasterIcon}
                    alt='logo Sales Master'
                    width={120}
                    height={40}

                />

            </span>

            <p className='flex flex-col my-3 mx-[10px] text-[#4d4d4d] md:text-left md:w-[326px] md:mx-0 lg:flex-row lg:whitespace-pre lg:m-0 lg:text-lg lg:w-auto'>
                <span className='font-bold'>Polecaj i zarabiaj. </span>
                Dołącz do naszego programu partnerskiego
            </p>


            <span className='flex items-center justify-center border border-[#be0064] rounded-[20px] py-3 px-6 text-base text-[#be0064] h-10 transition-colors duration-300  group-hover:text-white group-hover:bg-[#be0064]'>
                Zacznij zarabiać
            </span>

        </div>

        <span className='hidden overflow-hidden h-[152px] md:block md:mx-auto lg:hidden lg:mx-0'>
            <Image
                src={`https://assets.x-kom.pl/public-spa/xkom/29edf7e03b09236a.png`}
                width={169}
                height={152}
                loading='lazy'
                alt='SalesMaster'
                title='SalesMaster'
                className='inline-block w-auto h-auto max-w-full max-h-full'
            />
        </span>
    </Link>
)

const FooterMain = () => (
    <footer>
        {/* Foot Layout page */}
        <div className='max-w-full w-[calc(100%-32px)] mx-auto md:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]'>

            {/* Top Section Newsletter , Appmobile && Partner program */}
            <div className='flex flex-col mb-10 lg:flex-row lg:flex-wrap'>
                {/* NewsLetter */}
                <Newsletter />
                {/* Mobile App Box */}
                <MobileAppBox />
                {/* Sales Master */}
                <SaleMasterBox />
            </div>

            {/* Bottom Section Orders, Promotion, x-kom, Contact */}
            <div>
                {/* Orders... */}
                <div className='flex flex-col-reverse justify-between pb-[52px] md:flex-row' >
                    {/* Orders ... */}
                    <FooterExpandNavigation items={footerItems} />


                    {/* Desktop/Tablet Navigation*/}
                    <FooterNavigation items={footerItems} />


                    {/* Contact */}
                    <div className='md:flex-1'>
                        {/* Address */}
                        <div>
                            <p title='Kontakt' className='mb-5 text-lg font-bold'>Kontakt</p>
                            <address className='flex flex-col text-[#4d4d4d] font-lato'>
                                <Link href='tel:333222111' className='inline-flex items-center text-2xl hover:underline'>
                                    <span className='inline-block w-6 h-6 mx-2 '>
                                        <FaPhoneAlt className='w-full h-full ' />
                                    </span>
                                    333222111
                                </Link>
                                <div className='flex mt-1 mb-2 ml-10 text-[#707070] '>
                                    <div className='flex flex-col first:mb-1'>
                                        <span className='mr-2 whitespace-nowrap'>pon. - pt.</span>
                                        <span className='mr-2 whitespace-nowrap'>sob. - niedz.</span>
                                    </div>


                                    <div className='flex flex-col first:mb-1'>
                                        <span className='whitespace-nowrap'>8:00 - 21:00</span>
                                        <span className='whitespace-nowrap'>8:00 - 19:00</span>
                                    </div>
                                </div>


                                <Link href='mailto:jsapalawebdev@gmail.com' className='inline-flex items-center py-2 text-[#4d4d4d] hover:underline'>
                                    <span className='inline-block w-6 h-6 mx-2 '>
                                        <BsEnvelopeFill className='w-full h-full' />
                                    </span>
                                    x-kom@x-kom.pl
                                </Link>

                                <Link href={`/kontakt`} className='inline-flex items-center py-2 text-[#4d4d4d] hover:underline'>
                                    <span className='inline-block w-6 h-6 mx-2 '>
                                        <ImLocation className='w-full h-full' />
                                    </span>
                                    Salony x-kom
                                </Link>
                            </address>
                        </div>

                        {/* Socials */}
                        <div className='flex flex-wrap pt-4 pb-6 -mx-2'>
                            <Link href={`/`}>
                                <span title='facebook' className='flex items-center justify-center w-12 h-12 transition duration-300 grayscale hover:grayscale-0'>
                                    <Image
                                        src={facebookIcon}
                                        height={24}
                                        width={24}
                                        alt='facebook'
                                        className='w-6 h-6'
                                    />
                                </span>
                            </Link>
                            <Link href={`/`}>
                                <span title='facebook' className='flex items-center justify-center w-12 h-12 transition duration-300 grayscale hover:grayscale-0'>
                                    <Image
                                        src={facebookIcon}
                                        height={24}
                                        width={24}
                                        alt='facebook'
                                        className='w-6 h-6'
                                    />
                                </span>
                            </Link>
                            <Link href={`/`}>
                                <span title='facebook' className='flex items-center justify-center w-12 h-12 transition duration-300 grayscale hover:grayscale-0'>
                                    <Image
                                        src={facebookIcon}
                                        height={24}
                                        width={24}
                                        alt='facebook'
                                        className='w-6 h-6'
                                    />
                                </span>
                            </Link>
                            <Link href={`/`}>
                                <span title='facebook' className='flex items-center justify-center w-12 h-12 transition duration-300 grayscale hover:grayscale-0'>
                                    <Image
                                        src={facebookIcon}
                                        height={24}
                                        width={24}
                                        alt='facebook'
                                        className='w-6 h-6'
                                    />
                                </span>
                            </Link>

                        </div>
                    </div>
                </div>



                {/* Companies.. */}
                <div className='flex flex-col'>

                    <div className='flex flex-wrap justify-center mb-6'>

                        <span className='inline-flex items-center justify-center px-2 max-md:mb-2 h-9 max-md:basis-1/5'>
                            <Image
                                src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                width={36}
                                height={36}
                                alt='blik'
                                loading='lazy'
                                title='Blik'
                                className='inline-block w-auto h-auto max-w-full max-h-full'
                            />
                        </span>
                        <span className='inline-flex items-center justify-center px-2 max-md:mb-2 h-9 max-md:basis-1/5'>
                            <Image
                                src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                width={36}
                                height={36}
                                alt='blik'
                                loading='lazy'
                                title='Blik'
                                className='inline-block w-auto h-auto max-w-full max-h-full'
                            />
                        </span>
                        <span className='inline-flex items-center justify-center px-2 max-md:mb-2 h-9 max-md:basis-1/5'>
                            <Image
                                src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                width={36}
                                height={36}
                                alt='blik'
                                loading='lazy'
                                title='Blik'
                                className='inline-block w-auto h-auto max-w-full max-h-full'
                            />
                        </span>
                        <span className='inline-flex items-center justify-center px-2 max-md:mb-2 h-9 max-md:basis-1/5'>
                            <Image
                                src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                width={36}
                                height={36}
                                alt='blik'
                                loading='lazy'
                                title='Blik'
                                className='inline-block w-auto h-auto max-w-full max-h-full'
                            />
                        </span>
                        <span className='inline-flex items-center justify-center px-2 max-md:mb-2 h-9 max-md:basis-1/5'>
                            <Image
                                src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                width={36}
                                height={36}
                                alt='blik'
                                loading='lazy'
                                title='Blik'
                                className='inline-block w-auto h-auto max-w-full max-h-full'
                            />
                        </span>
                        <span className='inline-flex items-center justify-center px-2 h-9 max-md:basis-1/5'>
                            <Image
                                src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                width={36}
                                height={36}
                                alt='blik'
                                loading='lazy'
                                title='Blik'
                                className='inline-block w-auto h-auto max-w-full max-h-full'
                            />
                        </span>
                        <span className='inline-flex items-center justify-center px-2 h-9 max-md:basis-1/5'>
                            <Image
                                src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                width={36}
                                height={36}
                                alt='blik'
                                loading='lazy'
                                title='Blik'
                                className='inline-block w-auto h-auto max-w-full max-h-full'
                            />
                        </span>
                        <span className='inline-flex items-center justify-center px-2 h-9 max-md:basis-1/5'>
                            <Image
                                src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                width={36}
                                height={36}
                                alt='blik'
                                loading='lazy'
                                title='Blik'
                                className='inline-block w-auto h-auto max-w-full max-h-full'
                            />
                        </span>
                        <span className='inline-flex items-center justify-center px-2 h-9 max-md:basis-1/5'>
                            <Image
                                src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                width={36}
                                height={36}
                                alt='blik'
                                loading='lazy'
                                title='Blik'
                                className='inline-block w-auto h-auto max-w-full max-h-full'
                            />
                        </span>
                        <span className='inline-flex items-center justify-center px-2 h-9 max-md:basis-1/5'>
                            <Image
                                src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                width={36}
                                height={36}
                                alt='blik'
                                loading='lazy'
                                title='Blik'
                                className='inline-block w-auto h-auto max-w-full max-h-full'
                            />
                        </span>


                    </div>



                    <div className='text-center text-[#4d4d4d] mx-auto mb-11 max-w-full w-[calc(100%-32px)] md:w-[calc(100%-48px)] md:mb-4 lg:mb-7 lg:w-[calc(100%-64px)] lg:max-w-[1156px]'>
                        &copy; x-kom Clone 2023-2023
                    </div>
                </div>
            </div>


        </div>
    </footer >
)

const FooterBasket = () => (
    <footer className='py-4 mt-6 border-t border-[#ebebeb]'>
        <div className='flex flex-col'>
            <div className='text-center text-[#4d4d4d] mx-auto mb-11 max-w-full w-[calc(100%-32px)] md:w-[calc(100%-48px)] md:mb-4 lg:mb-7 lg:w-[calc(100%-64px)] lg:max-w-[1156px]'>
                &copy; x-kom Clone 2023-2023
            </div>
        </div>
    </footer>
)


const Footer = () => {
    const pathname = usePathname()

    return (
        <>
            {pathname === '/koszyk' ? (
                <FooterBasket />
            ) :
                (<FooterMain />)
            }

        </>
    )
}

export default Footer