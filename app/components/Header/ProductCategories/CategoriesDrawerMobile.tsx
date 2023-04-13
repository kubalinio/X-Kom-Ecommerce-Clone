import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { DrawerBody, DrawerHeader, DrawerModal } from "../../DrawerModal";
import { categorieItems } from "./CategoriesData";

type CategorieDrawerProps = {
    name: string
    icon: any
    slug: string
}

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