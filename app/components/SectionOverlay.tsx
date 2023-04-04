'use client'

import Link from 'next/link'
import React, { ReactNode, useRef, useState } from 'react'
import { SlArrowRight } from "react-icons/sl"


import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import "swiper/swiper.min.css";
import "swiper/css/free-mode";
import 'swiper/css/navigation';

import { FreeMode, Navigation } from "swiper";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

type SectionOverlayProps = {
    children?: ReactNode[]
    heading: string
    slugToAll: string
    productSection?: boolean
}

export const SectionOverlay = ({ children, heading, slugToAll, productSection }: SectionOverlayProps) => {


    const breakpointsArticle = {
        520: {
            slidesPerView: 2.5,
            spaceBetween: 12,
        },
        900: {
            slidesPerView: 3.4,
        },

        1080: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            freeMode: false,
            spaceBetween: 16,

        }

    }

    const breakpointsProducts = {
        520: {
            slidesPerView: 3.3,
            spaceBetween: 12
        },
        720: {
            slidesPerView: 3.6
        },
        900: {
            slidesPerView: 4.5
        },

        1080: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            freeMode: false,
            spaceBetween: 4,
        },
        1600: {
            slidesPerView: 6,
            slidesPerGroup: 6,
        }

    }

    return (
        <section className='relative w-full mb-4 bg-white lg:mb-0 lg:pb-8'>
            <div className='flex flex-col bg-white border-y border-[#ebebeb] lg:border-b-0 lg:border-[#ddd]'>
                {/* Head */}
                <div className='flex justify-between w-full pl-4 pr-2 md:pl-6 lg:p-0'>
                    <div className='flex flex-col'>
                        <h2 className='mt-4 text-3xl font-bold lg:mt-3'>
                            <Link href='/'>
                                {heading}
                            </Link>
                        </h2>
                    </div>
                    {/* Show All */}
                    {slugToAll && <div className='max-md:hidden'>
                        <Link href={`/${slugToAll}`} className='flex items-center justify-center rounded-full pr-3 pl-4 min-h-[36px] text-[#4d4d4d] bg-white hover:bg-[#f5f5f5] mt-4 lg:mt-3 lg:-mr-5'>
                            Pokaż wszystkie
                            <span className='inline-block w-4 h-4 ml-1'>
                                <SlArrowRight className='w-full h-full' />
                            </span>
                        </Link>
                    </div>}
                </div>

                {/* Slider */}
                <div className='w-full pt-2 pb-6'>
                    <div className='mt-2'>

                        <Swiper
                            className='sectionCarousel'
                            slidesPerView={!productSection ? 1.3 : 2.3}
                            spaceBetween={12}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            freeMode={{
                                enabled: true,
                                minimumVelocity: 0.02,
                                momentumRatio: 0.2
                            }}
                            modules={[FreeMode, Navigation]}
                            breakpoints={!productSection ? breakpointsArticle : breakpointsProducts}
                        >

                            {children?.map(child => (
                                <SwiperSlide key={Math.random()}>
                                    {child}
                                </SwiperSlide>
                            ))}

                            {/* Nav Buttons */}

                            <div className={`after:hidden swiper-button-prev ${productSection ? 'swiper-button-prev--topProduct' : 'swiper-button-prev--top'}`}>
                                <span className='p-1 text-4xl text-gray-600'>
                                    <MdKeyboardArrowLeft />
                                </span>
                            </div>

                            <div className={`after:hidden swiper-button-next swiper-button-next--top ${productSection ? 'swiper-button-next--topProduct' : 'swiper-button-next--top'}`}>
                                <span className='p-1 text-4xl text-gray-600'>
                                    <MdKeyboardArrowRight />
                                </span>
                            </div>

                        </Swiper>

                    </div>
                </div>

                {/* Show All */}
                <div className='md:hidden'>
                    <div className='flex justify-center mx-4 py-2 border-t border-[#ddd]'>
                        <Link href={`/${slugToAll}`} className='flex items-center justify-center rounded-full pr-3 pl-4 min-h-[36px] text-[#4d4d4d] bg-white hover:bg-[#f5f5f5] my-2 lg:mt-3 lg:-mr-5'>
                            Pokaż wszystkie
                            <span className='inline-block w-4 h-4 ml-1'>
                                <SlArrowRight className='w-full h-full' />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    )
}
