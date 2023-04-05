'use client'

import Link from 'next/link';
import { ReactNode, useEffect, useRef, useState } from 'react'

import { SlArrowRight } from 'react-icons/sl'
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { DrawerBody, DrawerHeader, DrawerModal } from '../DrawerModal';
import { CgSmartphoneChip } from 'react-icons/cg';
import { MdOutlineCable, MdOutlineFavoriteBorder } from 'react-icons/md';
import { SlScreenSmartphone } from 'react-icons/sl'

import { AiOutlineLaptop, AiOutlinePrinter } from 'react-icons/ai'

import { IoGameControllerOutline, IoTvOutline } from 'react-icons/io5'
import { SiHomeassistant } from 'react-icons/si'
import { CiPercent } from 'react-icons/ci'
import Image, { StaticImageData } from 'next/image';
import Overlay from '../Overlay';

import CategoriesTrendsImage from '../../../public/CategoriesTrendsImage.jpg'
import useHover from '@/hooks/useHover';
import useDebounce from '@/hooks/useDebounce';

const Icon = ({ icon }: { icon: ReactNode }) => <span>{icon}</span>;



type CategorieDrawerProps = {
    name: string
    icon: any
    slug: string
}

export type categorieMainProps = {
    name: string
    icon: JSX.Element
    slug: string
    recommendProduct: string | StaticImageData
    subMenu?: {
        name: string
    }[]

}

const categorieItems: categorieMainProps[] = [
    {
        name: 'Laptop i komputer',
        icon: <AiOutlineLaptop className='w-full h-full' />,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
        subMenu: [
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
        ]
    },
    {
        name: 'Smartfony i smartwatche',
        icon: <SlScreenSmartphone className='w-full h-full' />,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
    },
    {
        name: 'Gaming i streaming',
        icon: <IoGameControllerOutline className='w-full h-full' />,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
    },
    {
        name: 'Podzespoły komputerowe',
        icon: <CgSmartphoneChip className='w-full h-full' />,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
    },
    {
        name: 'Urządzenia peryferyjne',
        icon: <AiOutlinePrinter className='w-full h-full' />,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
    },
    {
        name: 'TV i audio',
        icon: <IoTvOutline className='w-full h-full' />,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
    },
    {
        name: 'Smarthome i lifestyle',
        icon: <SiHomeassistant className='w-full h-full' />,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
    },
    {
        name: 'Akcesoria',
        icon: <MdOutlineCable className='w-full h-full' />,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
    },
    {
        name: 'Trendy, promocje i nowości',
        icon: <CiPercent className='w-full h-full' />,
        slug: 'promocje',
        recommendProduct: CategoriesTrendsImage,
    },
]


const CategorieDrawerItem = ({ name, icon, slug }: CategorieDrawerProps) => (
    <li className='text-[#1a1a1a]'>
        <Link href={`/${slug}`} className='flex items-center h-14 pl-4 pr-[14px]'>
            <span className='inline-block w-6 h-6 mr-3 text-[#1a1a1a]'>
                {icon}
            </span>
            <p className='flex items-center w-full whitespace-nowrap'>
                {name}
            </p>
            <span className='inline-block w-3 h-3 overflow-hidden text-gray-700'>
                <SlArrowRight className='w-full h-full' />
            </span>
        </Link>
    </li>
)

type DrawerCategoriesProps = {
    close: () => void
}

export const CategoriesDrawerMobile = ({ close }: DrawerCategoriesProps) => {

    return (

        <DrawerModal>
            <DrawerHeader name={'Menu'} closeDrawer={() => close()} basketQuantity={0} />

            <DrawerBody>
                <div>
                    <div className='flex items-end w-full h-12 pb-3'>
                        <div className='text-[#707070] font-bold ml-4'>Kategorie</div>
                    </div>

                    <div>
                        <ul>
                            {categorieItems.map((categorie, i) => (

                                <CategorieDrawerItem
                                    key={categorie.name + i}
                                    name={categorie.name}
                                    icon={categorie.icon}
                                    slug={categorie.slug} />
                            ))}
                        </ul>
                    </div>
                    <hr className='h-[1px] bg-[#ddd] w-full mt-2 border-0' />

                    <div className='flex items-end w-full h-12 pb-3 mt-1'>
                        <div className='text-[#707070] font-bold ml-4'>Masz pytania ?</div>
                    </div>

                    <ul>
                        <CategorieDrawerItem
                            name={'Pomoc i kontakt'}
                            icon={<TfiHeadphoneAlt className='w-full h-full' />}
                            slug={'centrum-pomocy'}
                        />
                    </ul>
                </div>
            </DrawerBody>

        </DrawerModal>

    );
}

type CategoriesDesktop = {
    isScroll: boolean
    width: number | undefined
}


export const CategoriesDesktopBar = ({ isScroll, width }: CategoriesDesktop) => {
    const [isActive, setIsActive] = useState(false)
    const [isHover, setIsHover] = useState(false)

    useDebounce(() => {

        if (isHover) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }

    }, 150, [isHover])


    return (
        <div className={`${isScroll ? 'opacity-0 -translate-y-1/2 scale-y-0' : 'opacity-100 translate-y-0 scale-y-100'} relative z-[1] transition-all duration-300`}>

            <div>
                {/* Product Categories Container */}
                <div className="relative hidden lg:block w-full pt-[1px] bg-[#f5f5f5] shadow-md z-[1]" >
                    {width! >= 1080 ? (

                        <div className="relative flex items-center justify-center bg-inherit mx-auto lg:max-w-[1156px] lg:w-[calc(100%-64px)]  2xl:max-w-[1444px]">
                            {/* Product Categories */}
                            <nav
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}
                                className="w-full"
                            >

                                <ul className='flex justify-between'>
                                    {categorieItems.map((category, i) => (
                                        <CategoryDropdown
                                            key={category.slug + i}
                                            category={category}
                                            index={i}

                                        />
                                    ))}
                                </ul>

                            </nav>
                            {isActive ? <Overlay /> : ''}
                        </div>

                    ) : null}
                </div>
            </div>

        </div>
    )
}

type CategoryDropdownProps = {
    category: categorieMainProps
    index: number

}

const CategoryDropdown = ({ category, index }: CategoryDropdownProps) => {
    const { name, icon, slug, recommendProduct, subMenu } = category
    const [isHover, setIsHover] = useState(false)
    const [isActive, setIsActive] = useState(false);


    useDebounce(() => {

        setIsActive(isHover)

    }, 150, [isHover])

    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsActive(false)
        setIsHover(false)
    }

    const newName = name.replace('i ', 'i\u00a0')

    return (
        <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={name + index}
            className={`${isActive ? 'nav-item-after bg-white z-[4] shadow-xCom rounded-t-lg ' : 'z-[3]'} flex-grow relative last:text-pink-800 last:flex-grow-0`} >


            <Link href='/' className={`flex items-center px-3 h-14 w-min ${index === 8 ? 'text-[#be0064]' : 'text-[#1a1a1a]'}`}>

                <div className="flex items-center max-xl:hidden">
                    <span className="inline-block mr-2 overflow-hidden w-7 h-7">
                        {icon}
                    </span>
                </div>

                <span className={`text-[13px] ${index === 8 ? 'min-w-[110px]' : ''}`}>{newName}</span>
            </Link>

            {/* scaleY & visible do Animacji */}
            <section className={`${isActive ? 'block' : 'hidden'} ${index >= 4 ? 'right-0 rounded-tr-none' : 'left-0 rounded-tl-none'} absolute pt-2 pb-6 bg-white rounded-lg  shadow-xCom`}>
                <div className="flex w-auto">
                    {/* Left Section */}
                    <div className="w-[290px] h-[416px]">
                        {/* Heading */}
                        <div className="flex items-center justify-between lg:w-full">
                            {/* Pokaż całą kategorię Button ??? od 1024px hidden */}
                            <div></div>
                            {/* Heading Dektop  */}
                            <div className="lg:flex lg:justify-between lg:items-center lg:w-full lg:h-8">
                                <div className="ml-6 font-bold text-[#707070]">
                                    {name}
                                </div>
                                <Link href={`/slug`} className='mr-6 text-[#707070]'>
                                    Wszystkie
                                </Link>
                            </div>
                        </div>

                        {/* List Box */}
                        <div className="lg:flex lg:flex-col lg:h-full">
                            {/* UL LIST */}
                            <ul className="h-full">
                                {/* SubMenu Items */}
                                {subMenu?.map((category, i) => (
                                    <li key={category.name + i}>
                                        <Link href={`/`} className='flex items-center text-[#1a1a1a] bg-white hover:bg-[#f5f5f5] rounded-r-full lg:pl-6 lg:pr-[22px] lg:h-9 w-full'>
                                            <p className="flex items-center w-full whitespace-nowrap">
                                                {category.name}
                                            </p>
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link href={`/products`} className='flex items-center font-bold text-[#1a1a1a] bg-white hover:bg-[#f5f5f5] rounded-r-full lg:pl-6 lg:pr-[22px] lg:h-9 w-full'>
                                        <p className="flex items-center w-full whitespace-nowrap">
                                            Więcej...
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-[372px] h-[416px]">
                        {/* Heading */}
                        <div className="lg:flex lg:justify-between lg:items-center lg:w-full lg:h-8">
                            <div className="ml-6 font-bold text-[#707070]">
                                Polecany produkt
                            </div>
                        </div>

                        {/* Img */}
                        <div className="flex flex-col">
                            <Link href={`/slug`} className='mt-2 ml-6'>
                                <span className="inline-flex items-center justify-center overflow-hidden">
                                    <Image
                                        loading="lazy"
                                        src={recommendProduct}
                                        width={480} height={320}
                                        alt=''
                                        className="object-contain w-auto h-auto max-w-none" />
                                </span>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

        </li>
    )
}



type SubCategoryProps = {
    name: string
}

type CategoriesDropdownProps = {
    show: boolean
}

export const CategoriesDropdown = ({ show }: CategoriesDropdownProps) => {

    return (
        <div className={`${show ? 'block' : 'hidden'} min-w-[256px] absolute top-full left-0 z-[11s] rounded-lg rounded-tl-none shadow-xCom pt-1 pb-6 bg-white`}>
            <div className="flex w-auto bg-white">
                <div className="w-[290px]">
                    <div className='flex items-center w-full h-8 my-1'>
                        <div className='text-[#707070] font-bold ml-4'>Kategorie</div>
                    </div>

                    <div className="flex flex-col">
                        <ul className="h-full">
                            {categorieItems.map((categorie) => (

                                <CategorieItem
                                    name={categorie.name}
                                    icon={categorie.icon}
                                    slug={categorie.slug} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

type CategorieProps = {
    name: string
    icon: any
    slug: string
    subMenu?: SubCategoryProps[]
}

const CategorieItem = ({ name, icon, slug }: CategorieProps) => (
    <li className='text-[#1a1a1a]'>
        <Link href={`/${slug}`} className='flex items-center w-full h-9 pl-6 pr-[22px] hover:bg-[#f5f5f5]'>
            <span className='inline-block w-6 h-6 mr-3 text-[#1a1a1a]'>
                {icon}
            </span>
            <p className='flex items-center w-full whitespace-nowrap'>
                {name}
            </p>
            <span className='inline-block w-3 h-3 overflow-hidden text-gray-700'>
                <SlArrowRight className='w-full h-full' />
            </span>
        </Link>
    </li>
)









{/* // <div className='bg-transparent'>
    //     <div className='absolute inset-0 overflow-hidden transition-transform duration-300 bg-white '>
    //         <div className='flex flex-col h-screen sm:pt-0 sm:max-h-[calc(100vh-56px)] sm:min-h-[200px] sm:h-full'>
    //             <DrawerTop name={content?.name} />

    //             <DrawerBottom />

    //         </div>
    //     </div>
    // </div> */}
