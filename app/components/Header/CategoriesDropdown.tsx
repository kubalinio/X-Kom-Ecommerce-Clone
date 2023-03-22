'use client'

import Image from "next/image";
import Link from "next/link"
import { ReactNode, useRef, useState } from "react";
import { SlArrowRight } from "react-icons/sl"
import Overlay from "../Overlay";
import { categorieMainProps } from "./Header";

const Icon = ({ icon }: { icon: ReactNode }) => <span>{icon}</span>;


type CategoriesDesktop = {
    isScroll: boolean
    width: number | undefined
    categorieItems: categorieMainProps[]
}

type CategorieProps = {
    name: string
    icon: any
    slug: string
    subMenu?: SubCategoryProps[]
}

type SubCategoryProps = {
    name: string
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

type CategoriesDropdownProps = {
    show: boolean
    categorieItems: categorieMainProps[]
}

export const CategoriesDropdown = ({ show, categorieItems }: CategoriesDropdownProps) => {

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

const CategoryDropdown = ({ category, index }: { category: categorieMainProps, index: number }) => {
    const [isShow, setIsShow] = useState(false)

    const { name, icon, slug, recommendProduct, subMenu } = category

    const newName = name.replace('i ', 'i\u00a0')

    const handleIsFocus = () => {
        if (isShow === false) {
            setIsShow(true)
        } else {
            setIsShow(false)
        }
    }

    return (
        <>
            <li
                onMouseEnter={handleIsFocus}
                onMouseLeave={handleIsFocus}
                key={'item'}
                className={`${isShow ? 'nav-item-after bg-white z-[4] shadow-xCom rounded-t-lg ' : 'z-[3]'} flex-grow relative last:text-pink-800 last:flex-grow-0`} >


                <Link href='/' className={`flex items-center px-3 h-14 w-min ${index === 8 ? 'text-[#be0064]' : 'text-[#1a1a1a]'}`}>

                    <div className="flex items-center max-xl:hidden">
                        <span className="inline-block mr-2 overflow-hidden w-7 h-7">
                            {icon}
                        </span>
                    </div>

                    <span className={`text-[13px] ${index === 8 ? 'min-w-[110px]' : ''}`}>{newName}</span>
                </Link>

                {/* scaleY & visible do Animacji */}
                <section className={`${isShow ? 'block' : 'hidden'} ${index >= 4 ? 'right-0 rounded-tr-none' : 'left-0 rounded-tl-none'} absolute pt-2 pb-6 bg-white rounded-lg  shadow-xCom`}>
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
                                            <Link href={`/slug`} className='flex items-center text-[#1a1a1a] bg-white hover:bg-[#f5f5f5] rounded-r-full lg:pl-6 lg:pr-[22px] lg:h-9 w-full'>
                                                <p className="flex items-center w-full whitespace-nowrap">
                                                    {category.name}
                                                </p>
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <Link href={`/slug`} className='flex items-center font-bold text-[#1a1a1a] bg-white hover:bg-[#f5f5f5] rounded-r-full lg:pl-6 lg:pr-[22px] lg:h-9 w-full'>
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
            {/* // Shadow */}
            {isShow ? <Overlay /> : ''}
        </>
    )
}

export const CategoriesDesktop = ({ isScroll, categorieItems, width }: CategoriesDesktop) => {


    return (
        <div className={`${isScroll ? 'h-0 opacity-0 invisible' : 'opacity-100 visible'} relative z-[1] transition-all duration-200`}>

            <div>
                {/* Product Categories Container */}
                <div className="relative hidden lg:block w-full pt-[1px] bg-[#f5f5f5] shadow-md z-[1]" >
                    {width! >= 1080 ? (

                        <div className="relative flex items-center justify-center bg-inherit mx-auto lg:max-w-[1156px] lg:w-[calc(100%-64px)]  2xl:max-w-[1444px]">
                            {/* Product Categories */}
                            <nav className="w-full" >

                                <ul className='flex justify-between'>
                                    {categorieItems.map((category, i) => (
                                        <CategoryDropdown key={category.slug + i} category={category} index={i} />
                                    ))}
                                </ul>
                            </nav>
                        </div>

                    ) : null}
                </div>
            </div>

        </div>
    )
}

