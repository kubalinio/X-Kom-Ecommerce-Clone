'use client'

import Link from 'next/link'
import React, { ReactNode } from 'react'
import { SlArrowRight } from "react-icons/sl"

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

type SectionOverlayProps = {
    children: ReactNode[]
    heading: string
    slugToAll: string
    howSlides: number
    centerArrow: boolean
}

export const SectionOverlay = ({ children, heading, slugToAll, howSlides, centerArrow }: SectionOverlayProps) => {


    return (
        <div className='w-full '>
            <div className='flex flex-col bg-white border-y border-[#ebebeb] lg:border-b-0 lg:border-[#ddd]'>
                {/* Head */}
                <div className='flex justify-between w-full pl-4 pr-2 md:pl-6 lg:p-0'>
                    <div className='flex flex-col'>
                        <h2 className='mt-4 text-3xl font-bold lg:mt-3'>
                            <Link href={`/`}>
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

                        {/* Slider  */}
                        <Splide
                            hasTrack={false}
                            options={{
                                rewind: true,
                                perPage: 2.5,
                                padding: '12px',
                                gap: '12px',
                                drag: 'free',
                                autoWidth: true,
                                // height: '310px',
                                focus: 'center',
                                mediaQuery: 'min',

                                breakpoints: {
                                    640: {
                                        gap: '16px'
                                    },

                                    1024: {
                                        rewind: false,
                                        perPage: howSlides,
                                        perMove: howSlides,
                                        focus: 1,
                                        perDrag: 1,
                                        drag: true,
                                        gap: '20px',
                                        // padding: '16px',
                                        autoWidth: false,
                                    }
                                }

                            }}
                        >
                            <SplideTrack>

                                {children.map(child => (
                                    <SplideSlide key={Math.random()}>
                                        {child}
                                    </SplideSlide>
                                ))}

                            </SplideTrack>

                            <div className={`${!centerArrow ? 'top-[42%]' : 'top-[55%]'} hidden lg:block absolute w-full splide__arrows`}>
                                {/* <button className="left-0 splide__arrow splide__arrow--prev">Prev</button> */}

                                <div
                                    className='absolute hidden lg:flex bg-white rounded-full -left-2 xl:-left-3 bottom-[42%] shadow-sm-xCom  cursor-pointer z-10 transition-all duration-200 hover:bg-gray-100 hover:shadow-xCom '
                                >
                                    <button className="p-1 text-4xl text-gray-500 transition duration-300 splide__arrow splide__arrow--prev disabled:hidden">
                                        <MdKeyboardArrowLeft />
                                    </button>
                                    {/* <span className='p-1 text-4xl text-gray-600'><MdKeyboardArrowLeft /></span> */}
                                </div>


                                <div
                                    className='absolute hidden lg:flex bg-white rounded-full -right-2 xl:-right-3 bottom-[42%] shadow-sm-xCom  cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:shadow-xCom '
                                >
                                    {/* <span className='p-1 text-4xl text-gray-600'><MdKeyboardArrowRight /></span> */}
                                    <button className="p-1 text-4xl text-gray-500 splide__arrow splide__arrow--next disabled:hidden"><MdKeyboardArrowRight /></button>

                                </div>


                            </div>

                        </Splide>

                    </div>
                </div>

                {/* Show All */}
                <div className='md:hidden'>
                    <div className='flex justify-center mx-4 py-2 border-t border-[#ddd]'>
                        <Link href={`/${slugToAll}`} className='flex items-center justify-center rounded-full pr-3 pl-4 min-h-[36px] text-[#4d4d4d] bg-white hover:bg-[#f5f5f5] mt-4 lg:mt-3 lg:-mr-5'>
                            Pokaż wszystkie
                            <span className='inline-block w-4 h-4 ml-1'>
                                <SlArrowRight className='w-full h-full' />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
