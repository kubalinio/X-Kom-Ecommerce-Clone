'use client'

import Link from 'next/link'
import React from 'react'
import { SlArrowRight } from "react-icons/sl"

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import Image from 'next/image';

const items = {
    heading: 'Promocje',
    slug: 'promocje'
}

const item = {
    heading: 'Odkryj nowe procesory AMD Ryzen serii 7000X3D z technologią AMD 3D V‑Cache™',
    image: 'https://cdn.x-kom.pl/i/img/promotions-list/320x240,,63fe0f93c8f69-x-kom-promocje-miniatura-800x600px.jpg',
    slug: '',
    title: 'Łącząc technologię AMD 3D V-Cache™ z procesorami AMD Ryzen serii 7000X3D, zyskujesz ogromny wzrost wydajności w grach.'
}

type Props = {}

const Card = () => (
    <div className='block w-[250px] lg:w-full xl:w-full'>
        <div className='h-full py-2'>
            <Link href={`/${item.slug}`}>
                <div className='flex items-center justify-center mt-[2px] rounded-lg shadow-xCom overflow-hidden'>
                    <span className='inline-flex items-center justify-center w-[284px] h-[212px] overflow-hidden min-h-full py-3'>
                        <Image
                            src={`${item.image}`}
                            width={253}
                            height={212}
                            alt={`${item.heading}`}
                            loading='lazy'
                            className='object-cover w-full h-full'
                        />
                    </span>
                </div>
            </Link>


            <Link href={`${item.slug}`} className='block mt-4 ml-1'>
                <h3 className='text-xl leading-6 font-bold min-h-[48px] max-w-[250px]'>
                    <span className='max-h-[48px]'>
                        <span className='w-full overflow-hidden text-ellipsis line-clamp-2'
                        >
                            {item.heading}
                        </span>
                    </span>
                </h3>
            </Link>

            <div className='my-1 text-[#4d4d4d] whitespace-nowrap line-clamp-1 text-ellipsis'>
                {item.title}
            </div>


        </div>
    </div>
)


const Promotions = (props: Props) => (
    <div className='w-full mb-4 lg:pb-8'>
        <div className='flex flex-col bg-white border-y border-[#ebebeb] lg:border-b-0 lg:border-[#ddd]'>
            {/* Head */}
            <div className='flex justify-between w-full pl-4 pr-2 md:pl-6 lg:p-0'>
                <div className='flex flex-col'>
                    <h2 className='mt-4 text-3xl font-bold lg:mt-3'>
                        <Link href={`/${items.slug}`}>
                            {items.heading}
                        </Link>
                    </h2>
                </div>
                {/* Show All */}
                <div className='max-md:hidden'>
                    <Link href={`/${items.slug}`} className='flex items-center justify-center rounded-full pr-3 pl-4 min-h-[36px] text-[#4d4d4d] bg-white hover:bg-[#f5f5f5] mt-4 lg:mt-3 lg:-mr-5'>
                        Pokaż wszystkie
                        <span className='inline-block w-4 h-4 ml-1'>
                            <SlArrowRight className='w-full h-full' />
                        </span>
                    </Link>
                </div>
            </div>


            {/* Slider */}

            <div className='w-full pt-2 pb-6'>
                <div className='mt-2'>

                    {/* Slider  */}
                    <Splide
                        hasTrack={false}
                        options={{
                            rewind: true,
                            perPage: 2.5,
                            padding: '12px',
                            gap: '12px',
                            drag: 'free',
                            arrows: false,
                            autoWidth: true,

                            height: '310px',
                            focus: 'center',
                            mediaQuery: 'min',

                            breakpoints: {
                                640: {
                                    gap: '16px'
                                },

                                1024: {
                                    rewind: true,
                                    perPage: 4,
                                    perMove: 4,
                                    focus: 1,
                                    perDrag: 1,
                                    drag: true,
                                    gap: '20px',
                                    padding: '16px',
                                    autoWidth: false,
                                }
                            }

                        }}

                    >
                        <SplideTrack>

                            <SplideSlide>
                                <Card />
                            </SplideSlide>

                            <SplideSlide>
                                <Card />
                            </SplideSlide>

                            <SplideSlide>
                                <Card />
                            </SplideSlide>

                            <SplideSlide>
                                <Card />
                            </SplideSlide>

                            <SplideSlide>
                                <Card />
                            </SplideSlide>

                            <SplideSlide>
                                <Card />
                            </SplideSlide>

                            <SplideSlide>
                                <Card />
                            </SplideSlide>

                            <SplideSlide>
                                <Card />
                            </SplideSlide>



                        </SplideTrack>

                        <div className="splide__arrows">
                            <button className="splide__arrow splide__arrow--prev">Prev</button>
                            <button className="splide__arrow splide__arrow--next">Next</button>
                        </div>

                    </Splide>

                </div>
            </div>






            {/* Show All */}
            <div className='md:hidden'>
                <div className='flex justify-center mx-4 py-2 border-t border-[#ddd]'>
                    <Link href={`/${items.slug}`} className='flex items-center justify-center rounded-full pr-3 pl-4 min-h-[36px] text-[#4d4d4d] bg-white hover:bg-[#f5f5f5] mt-4 lg:mt-3 lg:-mr-5'>
                        Pokaż wszystkie
                        <span className='inline-block w-4 h-4 ml-1'>
                            <SlArrowRight className='w-full h-full' />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Promotions