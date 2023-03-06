'use client'

import Link from 'next/link'
import React from 'react'
import { SlArrowRight } from "react-icons/sl"

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


export const SectionOverlay = ({ children, heading, slugToAll }) => {


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
                    <div className='max-md:hidden'>
                        <Link href={`/${slugToAll}`} className='flex items-center justify-center rounded-full pr-3 pl-4 min-h-[36px] text-[#4d4d4d] bg-white hover:bg-[#f5f5f5] mt-4 lg:mt-3 lg:-mr-5'>
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
                            // renderControls={() => (
                            //     <div className="splide__arrows">
                            //         <div className="" role="button">
                            //             <span>prev</span>
                            //         </div>
                            //         <div className="" role="button">
                            //             <span>next</span>
                            //         </div>
                            //     </div>
                            // )}

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

                                {children.map(child => (
                                    <SplideSlide key={Math.random()}>
                                        {child}
                                    </SplideSlide>
                                ))}

                            </SplideTrack>

                            <div className="hidden lg:block absolute w-full top-[42%] splide__arrows">
                                {/* <button className="left-0 splide__arrow splide__arrow--prev">Prev</button> */}

                                <div
                                    className='absolute hidden lg:flex bg-white rounded-full -left-2 xl:-left-3 bottom-[42%] shadow-sm shadow-gray-600 cursor-pointer z-10 transition-all duration-200 hover:bg-gray-300 hover:shadow-md hover:shadow-gray-700 '
                                >
                                    <button className="p-1 text-4xl text-gray-600 splide__arrow splide__arrow--prev"><MdKeyboardArrowLeft /></button>
                                    {/* <span className='p-1 text-4xl text-gray-600'><MdKeyboardArrowLeft /></span> */}
                                </div>


                                <div
                                    className='absolute hidden lg:flex bg-white rounded-full -right-2 xl:-right-3 bottom-[42%] shadow-sm shadow-gray-600 cursor-pointer transition-all duration-200 hover:bg-gray-300 hover:shadow-md hover:shadow-gray-700'
                                >
                                    {/* <span className='p-1 text-4xl text-gray-600'><MdKeyboardArrowRight /></span> */}
                                    <button className="p-1 text-4xl text-gray-600 splide__arrow splide__arrow--next"><MdKeyboardArrowRight /></button>

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
