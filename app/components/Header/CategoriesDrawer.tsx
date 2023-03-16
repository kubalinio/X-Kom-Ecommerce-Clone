'use client'

import Link from 'next/link';
import { ReactNode } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { SlArrowRight } from 'react-icons/sl'
import { TfiHeadphoneAlt } from 'react-icons/tfi';


type DrawerCategoriesProps = {
    show: boolean
    close: () => void
    categorieItems: CategorieProps[]
}

type CategorieProps = {
    name: string
    icon: any
    slug: string
}

const DrawerHeader = ({ name, closeModal }: { name: string, closeModal: any }) => (
    <div className='inline-flex justify-between items-center bg-[#f5f5f5] min-h-[56px] w-full p-2 pr-4 border-b border-[#ddd]'>

        <div className='flex items-center w-full'>

            <button onClick={closeModal} className='flex items-center justify-center w-10 h-10 text-base transition-colors border-none rounded-full bg-none hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300 '>
                <span className='inline-block w-8 h-6 overflow-hidden'>
                    <AiOutlineClose className='w-full h-full' />
                </span>
            </button>
            <h3 className='pl-2 text-xl font-bold text-black whitespace-nowrap'>{name}</h3>
        </div>
    </div>
)

const DrawerBottom = ({ children }: { children: ReactNode }) => (
    <div className='absolute bottom-0 w-full overflow-x-hidden overflow-y-auto top-[58px]'>
        {children}
    </div>
)

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

export const DrawerCategories = ({ show, close, categorieItems }: DrawerCategoriesProps) => {

    return (
        <div className='Drawer'>
            <aside>
                {!show ? '' : <div onClick={() => close()} className='fixed inset-0 bg-black opacity-50 transition-opacity duration-300 z-[1001]' />}

                <div className={`${!show ? 'w-0 translate-x-[-105%]' : 'w-[360px] translate-x-0'} z-[1002] fixed top-0 bottom-0 max-w-[calc(100vw+64px)] bg-white shadow-md overflow-x-hidden overflow-y-auto transition-transform duration-300 left-0`}>
                    <div>
                        <div>
                            {show &&
                                <div className='bg-transparent'>
                                    <div className='absolute inset-0 overflow-hidden transition-transform duration-300 bg-white '>
                                        <div className='flex flex-col h-screen sm:pt-0 sm:max-h-[calc(100vh-56px)] sm:min-h-[200px] sm:h-full'>
                                            <DrawerHeader name={'Menu'} closeModal={() => close()} />

                                            <DrawerBottom>
                                                <div>
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
                                                    <hr className='h-[1px] bg-[#ddd] w-full mt-2 border-0' />

                                                    <div className='flex items-end w-full h-12 pb-3 mt-1'>
                                                        <div className='text-[#707070] font-bold ml-4'>Masz pytania ?</div>
                                                    </div>

                                                    <ul>
                                                        <CategorieItem
                                                            name={'Pomoc i kontakt'}
                                                            icon={<TfiHeadphoneAlt className='w-full h-full' />}
                                                            slug={'centrum-pomocy'}
                                                        />
                                                    </ul>
                                                </div>
                                            </DrawerBottom>

                                        </div>
                                    </div>

                                </div>
                            }
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}



{/* // <div className='bg-transparent'>
    //     <div className='absolute inset-0 overflow-hidden transition-transform duration-300 bg-white '>
    //         <div className='flex flex-col h-screen sm:pt-0 sm:max-h-[calc(100vh-56px)] sm:min-h-[200px] sm:h-full'>
    //             <DrawerTop name={content?.name} />

    //             <DrawerBottom />

    //         </div>
    //     </div>
    // </div> */}
