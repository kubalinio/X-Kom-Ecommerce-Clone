import useDebounce from "@/hooks/useDebounce"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { categorieMainProps } from "./CategoriesData"

type CategoryDropdownProps = {
    category: categorieMainProps
    index: number

}

export const CategorieBarDropdown = ({ category, index }: CategoryDropdownProps) => {
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