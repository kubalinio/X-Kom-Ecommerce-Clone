'use client'

import Link from 'next/link'

import { MdKeyboardArrowLeft } from 'react-icons/md'
import { IconNavUser } from './NavUser'
import ShopIcon from '../../public/listShoping.svg'
import Image from 'next/image'

export const NeedHelp = () => {

    return (
        <div className='flex flex-col items-start mt-10'>
            <h3 className='mb-2 text-lg font-bold'>Potrzebujesz pomocy ?</h3>
            <Link href='/centrum-pomocy' className='text-[#1c73e7] visited:text-[#6000b0] hover:text-[#6000b0] focus:text-[#6000b0] active:text-[#6000b0]'>
                W centrum pomocy odnajdziesz pełną bazę pytań i odpowiedzi
            </Link>
        </div>
    )
}

const ListHead = () => {
    return (
        <div className='flex flex-wrap items-center justify-between'>
            <h2 className='text-3xl leading-10'>Listy zakupowe</h2>
            {/* Future Build */}
            {/* <button>Dodaj pierwszą listę</button> */}
        </div>
    )
}
const ListBody = () => {
    return (
        <div>ListBody</div>
    )
}


const ListBottom = () => {
    return (
        <div>
            <div className='flex flex-wrap'>


                <div className='w-full pr-6 md:w-3/5 lg:w-3/5'>
                    <div className='mb-8 md:mb-0'>

                        <h2
                            title='Jak korzystać z listy?'
                            className='mb-4 text-lg md:mb-6'
                        >
                            Jak korzystać z listy?
                        </h2>

                        {/* List */}
                        <div>
                            <div className='flex'>
                                <h2 className='ml-3 mr-4 text-base md:text-sm'>1.</h2>
                                <div className='mb-4 md:mb-8'>
                                    <h3
                                        title='Dodaj produkt do koszyka i zapisz jako listę' className='mb-1 text-base md:mb-0 md:text-sm'
                                    >
                                        Dodaj produkt do koszyka i zapisz jako listę
                                    </h3>
                                    <p className='text-sm text-[#4d4d4d]'>
                                        Zapisuj interesujące Cię produkty na później, nie trać czasu na wyszukiwanie ich kolejny raz.
                                    </p>
                                </div>
                            </div>
                            <div className='flex'>
                                <h2 className='ml-3 mr-4 text-base md:text-sm'>2.</h2>
                                <div className='mb-4 md:mb-8'>
                                    <h3
                                        title='Twórz tyle list, ile tylko potrzebujesz' className='mb-1 text-base md:mb-0 md:text-sm'
                                    >
                                        Twórz tyle list, ile tylko potrzebujesz
                                    </h3>
                                    <p className='text-sm text-[#4d4d4d]'>
                                        Możesz stworzyć dowolną liczbę list zakupowych. Zapisuj zestawy komputerowe, pomysły na prezent czy propozycje dla znajomych.
                                    </p>
                                </div>
                            </div>
                            <div className='flex'>
                                <h2 className='ml-3 mr-4 text-base md:text-sm'>3.</h2>
                                <div className='mb-4 md:mb-8'>
                                    <h3
                                        title='Udostępniaj' className='mb-1 text-base md:mb-0 md:text-sm'
                                    >
                                        Udostępniaj
                                    </h3>
                                    <p className='text-sm text-[#4d4d4d]'>
                                        Chcesz doradzić rodzinie albo zapytać znajomych o opinię? Podziel się swoją listą, zamiast wysyłać każdy link osobno.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>



                {/* IMG  */}
                <div className='w-full pr-6 max-md:text-center md:w-2/5 md:flex md:items-center md:justify-end lg:w-2/5 '>
                    <span className='w-[286px] lg:w-[360px] h-auto inline-block max-w-full'>
                        <Image
                            src={ShopIcon}
                            alt='shop Image'
                            className='w-full h-full'
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}



const ReturnButtonMobile = ({ link, title }: { link: string, title: string }) => {
    return (
        <Link
            href={`/${link}`}
            title={title}
            className='inline-flex items-center justify-center bg-[#ebebeb] pr-5 pl-4 w-auto text-[#4d4d4d] text-center rounded-full min-w-[96px] h-10 min-h-[auto] mb-8 md:mb-10 lg:hidden active:bg-gray-300 transition-colors duration-200'
        >
            <IconNavUser icon={<MdKeyboardArrowLeft />} />
            <span>{title}</span>
        </Link >


    )
}

// Need Help

type Props = {}

const UserShopList = (props: Props) => {
    return (
        <div className='lg:pl-2'>
            {/* Back konto */}
            <ReturnButtonMobile link='konto' title='Wróć' />

            {/* Button to Add List React Portal*/}
            <ListHead />

            <div className='min-h-[32px]'>{/* Notification */}</div>

            {/* Created List Dynamic with fav products */}
            {/* <ListBody /> */}

            {/* How use lists */}
            <ListBottom />

            {/* Need Help ? */}
            <div className='max-lg:hidden'>
                <NeedHelp />
            </div>
        </div>
    )
}

export default UserShopList