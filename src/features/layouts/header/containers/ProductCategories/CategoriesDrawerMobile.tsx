import Link from 'next/link'
import { ReactNode } from 'react'
import { SlArrowRight } from 'react-icons/sl'
import { TfiHeadphoneAlt } from 'react-icons/tfi'

import { DrawerBody, DrawerHeader, DrawerModal } from '@/features/shared/components/DrawerModal'

import { categorieItems } from '../../dataAccess/CategoriesData'

type CategorieDrawerProps = {
  name: string
  icon: ReactNode
  slug: string
}

const CategorieDrawerItem = ({ name, icon, slug }: CategorieDrawerProps) => (
  <li className="text-[#1a1a1a]">
    <Link href={`/${slug}`} className="flex h-14 items-center pl-4 pr-[14px]">
      <span className="mr-3 inline-block h-6 w-6 text-[#1a1a1a]">{icon}</span>
      <p className="flex w-full items-center whitespace-nowrap">{name}</p>
      <span className="inline-block h-3 w-3 overflow-hidden text-gray-700">
        <SlArrowRight className="h-full w-full" />
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
          <div className="flex h-12 w-full items-end pb-3">
            <div className="ml-4 font-bold text-[#707070]">Kategorie</div>
          </div>

          <div>
            <ul>
              {categorieItems.map((categorie, i) => (
                <CategorieDrawerItem
                  key={categorie.name + i}
                  name={categorie.name}
                  icon={categorie.icon}
                  slug={categorie.slug}
                />
              ))}
            </ul>
          </div>
          <hr className="mt-2 h-[1px] w-full border-0 bg-[#ddd]" />

          <div className="mt-1 flex h-12 w-full items-end pb-3">
            <div className="ml-4 font-bold text-[#707070]">Masz pytania ?</div>
          </div>

          <ul>
            <CategorieDrawerItem
              name={'Pomoc i kontakt'}
              icon={<TfiHeadphoneAlt className="h-full w-full" />}
              slug={'centrum-pomocy'}
            />
          </ul>
        </div>
      </DrawerBody>
    </DrawerModal>
  )
}
