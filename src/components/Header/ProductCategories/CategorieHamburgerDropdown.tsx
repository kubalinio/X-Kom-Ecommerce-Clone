import Link from 'next/link'
import { ReactNode } from 'react'
import { SlArrowRight } from 'react-icons/sl'

import { categorieItems } from './CategoriesData'

type CategorieProps = {
  name: string
  icon: ReactNode
  slug: string
  subMenu?: string[]
}

const CategorieItem = ({ name, icon, slug }: CategorieProps) => (
  <li className="text-[#1a1a1a]">
    <Link href={`/${slug}`} className="flex h-9 w-full items-center pl-6 pr-[22px] hover:bg-[#f5f5f5]">
      <span className="mr-3 inline-block h-6 w-6 text-[#1a1a1a]">{icon}</span>
      <p className="flex w-full items-center whitespace-nowrap">{name}</p>
      <span className="inline-block h-3 w-3 overflow-hidden text-gray-700">
        <SlArrowRight className="h-full w-full" />
      </span>
    </Link>
  </li>
)

type CategoriesDropdownProps = {
  show: boolean
}

export const CategorieHamburgerDropdown = ({ show }: CategoriesDropdownProps) => {
  return (
    <div
      className={`${
        show ? 'block' : 'hidden'
      } absolute left-0 top-full z-[11s] min-w-[256px] rounded-lg rounded-tl-none bg-white pb-6 pt-1 shadow-xCom`}
    >
      <div className="flex w-auto bg-white">
        <div className="w-[290px]">
          <div className="my-1 flex h-8 w-full items-center">
            <div className="ml-4 font-bold text-[#707070]">Kategorie</div>
          </div>

          <div className="flex flex-col">
            <ul className="h-full">
              {categorieItems.map((categorie) => (
                <CategorieItem key={categorie.name} name={categorie.name} icon={categorie.icon} slug={categorie.slug} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
