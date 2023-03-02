'use client'

import Image from 'next/image';
import Link from 'next/link';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { useEffect, useState } from 'react';

import { IoMdHeartEmpty } from 'react-icons/io'

// const ProductEvent = () => ()

// const ProductFav = () => ()

const item = {
    promotion: true,
    recommend: false,


}

const ProductCard = () => {

    return (
        <div className='relative rounded-lg lg:border lg:border-transparent'>

            {/* Promotion or Recommend */}
            <div className='absolute left-0 w-full h-5 lg:top-3 lg:pl-3'>
                <span className='inline-flex h-5 text-sm items-center text-[#4d4d4d] max-w-[70%] whitespace-nowrap bg-white px-2 py-[2px] rounded-full border border-[#ccc]'>
                    {item.promotion && 'Promocja'}
                </span>
            </div>
            {/* Details */}
            <div className='pointer'>
                <div>
                    {/* Image */}
                    <div className='w-full h-[125px] mt-7'>
                        <div className='w-full h-full mt-4'>
                            <Link href='/'>
                                <div className='inline-flex items-center justify-center w-full h-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] max-h-[125px]'>
                                    <Image
                                        src='https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_9_8_51_32_288_00.jpg'
                                        width={136}
                                        height={125}
                                        alt='Beats'
                                        className='object-contain w-full h-full'
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Title */}
                    <div className='mr-2'>
                        <Link href='/'>
                            <h3 className='w-full h-10 mt-2 break-words max-h-10'>
                                Apple Beats Fit Pro Volt Yellow
                            </h3>
                        </Link>
                    </div>

                    {/* Price */}
                    <div className='flex items-end mt-1 h-9'>
                        <div>
                            <div className='inline-block text-left'>
                                <span className='block whitespace-nowrap'>
                                    999,00 zł
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fav */}
            <div className='absolute hidden top-1 right-1 lg:flex lg:top-3 lg:right-3'>
                <div className='transition duration-300 lg:flex lg:w-8 lg:h-8 '>
                    <div className='inline-block pointer-events-auto z-[1]'>
                        {/* Fav Component to Add List Favorited products */}
                        <div>
                            <button className='flex items-center justify-center w-8 h-8 bg-white rounded-full cursor-pointer select-none z-5 hover:bg-[#ddd] transition duration-300'>
                                <span className='inline-block w-5 h-5 overflow-hidden'>
                                    <IoMdHeartEmpty className='w-full h-full' />
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Hover */}
            <div></div>

        </div>
    )
}



const RecommendProducts = () => {
    const [widthWindow, setWidthWindow] = useState(window.innerWidth)

    useEffect(() => {
        function handleWindowResize() {
            setWidthWindow(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <section className='w-full mb-4 lg:w-[68.333%] bg-white lg:pb-7'>

            <div className='flex flex-col  border-y border-[#ebebeb] lg:border-b-0 lg:border-[#ddd] lg:pt-2'>

                <div className='flex justify-between w-full pl-4 pr-2'>
                    <div className='flex flex-col'>
                        <h2 className='mt-4 text-2xl font-semibold'>Polecamy</h2>
                    </div>
                </div>

                <div className='w-full pt-2 pb-6 lg:pb-0'>
                    {/* Desktop Products Show in 1080px */}
                    <div className='flex-wrap hidden mt-3 -mx-2 lg:flex'>
                        <div className='w-1/4 px-2 mb-[22px]'>
                            <ProductCard />
                        </div>
                        <div className='w-1/4 px-2 mb-[22px]'>
                            <ProductCard />
                        </div>
                        <div className='w-1/4 px-2 mb-[22px]'>
                            <ProductCard />
                        </div>
                        <div className='w-1/4 px-2 mb-[22px]'>
                            <ProductCard />
                        </div>
                        <div className='w-1/4 px-2 mb-[22px]'>
                            <ProductCard />
                        </div>
                        <div className='w-1/4 px-2 mb-[22px]'>
                            <ProductCard />
                        </div>
                        <div className='w-1/4 px-2 mb-[22px]'>
                            <ProductCard />
                        </div>
                        <div className='w-1/4 px-2 mb-[22px]'>
                            <ProductCard />
                        </div>
                    </div>

                    {/* Mobile Products Delete in DOM in 1080px */}
                    <div>
                        {widthWindow < 1024 &&
                            <ScrollingCarousel className='[&>*]:px-4' >
                                <div className='max-w-[150px] sm:max-w-[200px] md:max-w-[250px]'>
                                    <Product />
                                </div>
                                <div className='max-w-[150px] sm:max-w-[200px] md:max-w-[250px]'>
                                    <Product />
                                </div>
                                <div className='max-w-[150px] sm:max-w-[200px] md:max-w-[250px]'>
                                    <Product />
                                </div>
                                <div className='max-w-[150px] sm:max-w-[200px] md:max-w-[250px]'>
                                    <Product />
                                </div>
                                <div className='max-w-[150px] sm:max-w-[200px] md:max-w-[250px]'>
                                    <Product />
                                </div>
                                <div className='max-w-[150px] sm:max-w-[200px] md:max-w-[250px]'>
                                    <Product />
                                </div>
                                <div className='max-w-[150px] sm:max-w-[200px] md:max-w-[250px]'>
                                    <Product />
                                </div>
                                <div className='max-w-[150px] sm:max-w-[200px] md:max-w-[250px]'>
                                    <Product />
                                </div>

                            </ScrollingCarousel>
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}

export default RecommendProducts