'use client'

import Link from "next/link"
import { ReactNode, useState } from "react";
import { SlArrowRight } from "react-icons/sl"

const Icon = ({ icon }: { icon: ReactNode }) => <span>{icon}</span>;

type CategoriesDropdownProps = {
    show: boolean
    close: () => void
    isActiveNum: number
    categorieItems: CategorieProps[]
}
type CategoriesDesktop = {
    isScroll: boolean
    width: number | undefined
    categorieItems: CategorieProps[]
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

const CategoryDropdown = ({ category }) => {
    const [isShow, setIsShow] = useState(false)

    const { name, icon, slug, subMenu } = category

    const handleIsFocus = () => {
        setIsShow(true)
    }

    return (
        <li
            onClick={() => handleIsFocus()}
            key={'item'}
            className={`${isShow ? 'nav-item-after bg-white z-[4] shadow-xCom rounded-t-lg ' : 'z-[3]'} flex-grow relative last:text-pink-800 last:flex-grow-0`} >


            <Link href='/' className='flex items-center px-3 h-14 w-min'>

                <div className="max-xl:hidden">
                    <span className="inline-block w-6 h-6 mr-2 overflow-hidden">
                        {icon}
                    </span>
                </div>

                <span>{name}</span>
            </Link>

            {/* scaleY & visible do Animacji */}
            <section className={`${isShow ? 'block' : 'hidden'} absolute pt-2 pb-6 bg-white rounded-lg rounded-tl-none shadow-xCom w-80`}>
                <div>
                    {/* Left Section */}
                    <div>
                        {/* Heading */}
                        <div></div>

                        {/* List Box */}
                        <div>
                            {/* UL LIST */}
                            <ul>
                                {/* SubMenu Items */}
                                {subMenu?.map(category => (
                                    <li>{category.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div></div>
                </div>
            </section>

            {/* After */}


        </li>

    )
}

export const CategoriesDesktop = ({ isScroll, categorieItems, width }: CategoriesDesktop) => {

    return (
        <div className={`${isScroll ? 'h-0 opacity-0' : 'opacity-100'} relative z-[1] transition-all duration-200`}>

            {width! > 1024 ? (
                <div>
                    {/* Product Categories Container */}
                    <div className="relative hidden lg:block w-full pt-[1px] bg-[#f5f5f5] shadow-md z-[1]" >

                        <div className="relative flex items-center justify-center bg-inherit mx-auto lg:max-w-[1156px] lg:w-[calc(100%-64px)] xl:max-w-screen-xl 2xl:max-w-[1444px]">
                            {/* Product Categories */}
                            <nav className="w-full" >


                                <ul className='flex justify-between'>
                                    {categorieItems.map((category, i) => (
                                        <CategoryDropdown category={category} />
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            ) : null}

        </div>
    )
}

