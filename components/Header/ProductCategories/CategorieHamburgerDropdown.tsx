import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import { categorieItems } from "./CategoriesData";

type CategorieProps = {
    name: string
    icon: any
    slug: string
    subMenu?: string[]
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
}

export const CategorieHamburgerDropdown = ({ show }: CategoriesDropdownProps) => {

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