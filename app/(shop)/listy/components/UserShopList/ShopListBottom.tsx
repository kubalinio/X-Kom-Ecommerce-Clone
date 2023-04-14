import Image from "next/image"

import ShopIcon from '../../../../../public/listShoping.svg'

export const ShopListBottom = () => {
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
