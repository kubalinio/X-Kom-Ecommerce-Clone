'use client'

import Link from "next/link"
import { SlArrowRight } from "react-icons/sl"

type DrawerCategoriesProps = {
    show: boolean
    close: () => void
    isActiveNum: number
    categorieItems: CategorieProps[]
}

type CategorieProps = {
    name: string
    icon: any
    slug: string
}

const CategorieItem = ({ name, icon, slug }: CategorieProps) => (
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

export const CategoriesDropdown = ({ show, categorieItems }: CategoriesDropdownProps) => {

    return (
        <div className={`${show ? 'block' : 'hidden'} min-w-[256px] absolute top-full left-0 z-[12] rounded-lg shadow-xCom`}>
            <div className="flex w-auto bg-white">
                <div className="w-[290px]">
                    <div className='flex items-end w-full h-12 pb-3'>
                        <div className='text-[#707070] font-bold ml-4'>Kategorie</div>
                    </div>
                    <div>
                        <ul>
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