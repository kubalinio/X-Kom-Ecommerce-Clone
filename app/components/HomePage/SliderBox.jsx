'use client'

// Style of Dots Added to globals

import Image from 'next/image';

// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import "swiper/swiper.min.css";
import 'swiper/css/navigation';

import { Pagination } from 'swiper'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import axios from "axios";
import { useQuery } from "react-query";
import { urlFor } from "@/lib/sanity.client";

const fetchSliders = async () => {
    const response = await axios.get(`/api/getSlides`)
    return response.data
}

const SwiperNavButtons = () => {
    const swiper = useSwiper()

    return (
        <>
            <div
                onClick={() => swiper.slidePrev()}
                className={`absolute hidden lg:flex bg-white rounded-full -left-3 xl:-left-5 shadow-sm-xCom shadow-black/20 cursor-pointer z-30 transition-all duration-200 hover:bg-gray-100 active:bg-gray-200 hover:shadow-xCom hover:shadow-black/30 top-[38%]`}
            >
                <span className='p-1 text-4xl text-gray-600'><MdKeyboardArrowLeft /></span>
            </div>

            <div
                onClick={() => swiper.slideNext()}
                className={`absolute hidden lg:flex bg-white rounded-full top-[38%] -right-3 xl:-right-5 z-30 shadow-sm-xCom shadow-black/20 cursor-pointer transition-all duration-200 hover:bg-gray-100 active:bg-gray-200 hover:shadow-xCom hover:shadow-black/30 `}
            >
                <span className='p-1 text-4xl text-gray-600'><MdKeyboardArrowRight /></span>
            </div>
        </>
    )
}

const SliderBox = () => {

    const { data, isLoading } = useQuery({
        queryFn: () => fetchSliders(),
        queryKey: ['slides'],
        staleTime: 3600000
    })

    if (isLoading) return (
        <section className='w-full p-4 bg-white lg:pb-5 lg:pt-2 xl:pt-1 2xl:pb-20'>
            <div className='flex flex-col justify-center w-full h-[175px] md:h-[250px] lg:h-[310px] rounded-3xl pl-14 bg-gray-100 '>
                <div className="w-1/2 h-6 bg-gray-300 md:h-8" />
                <div className="w-1/4 h-6 mt-5 bg-gray-300 md:h-8" />
            </div>
        </section>)

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<button class="' + className + ' w-full">' + (data.slides[index].title) + "</button>";
        }
    }


    return (
        <section className="relative w-full px-4 bg-white md:px-[24px] lg:p-0">

            <Swiper
                slidesPerView={1.2}
                spaceBetween={16}
                rewind={true}
                className='bannersCarousel'
                modules={[Pagination]}
                pagination={pagination}
                breakpoints={{
                    520: {
                        slidesPerView: 1.5
                    },

                    680: {
                        slidesPerView: 2.1,
                        spaceBetween: 8
                    },

                    720: {
                        slidesPerView: 1,
                        spaceBetween: 8
                    },
                    900: {
                        slidesPerView: 1,
                        spaceBetween: 8,

                    }
                }}

            >

                {data.slides.map((slide, i) => (

                    <SwiperSlide>
                        <div key={slide.title + i} className='w-full h-full' >

                            <a href={slide.link} className='relative w-full h-full' >

                                <span className='md:hidden'>
                                    <Image loading='lazy' width={800} height={255} src={urlFor(slide.image).url()} alt={slide.title} className='object-cover w-full h-full rounded-2xl' />
                                </span>


                                <span className='max-md:hidden'>
                                    <Image loading='lazy' width={1200} height={500} src={urlFor(slide.imageDesktop).url()} alt={slide.title} className='object-cover w-full h-full rounded-3xl min-h-[250px] max-h-[250px] 2xl:max-h-[315px]' />
                                </span>
                            </a>
                        </div>

                    </SwiperSlide>

                ))}

                <SwiperNavButtons />
            </Swiper>

        </section >
    )
}

export default SliderBox



/* <Slider {...settings} >

                {data.slides.map((slide, i) => (

                    <div key={slide.title + i} className='w-full pl-4 md:px-6 lg:px-6 xl:px-0' >

                        <a href={slide.link} className='relative mx-2 overflow-hidden' >

                            <span className=' md:hidden'>
                                <Image loading='lazy' width={800} height={255} src={urlFor(slide.image).url()} alt={slide.title} className='object-cover w-full h-full rounded-2xl max-md:max-h-[175px] max-md:max-w-[325px]' />
                            </span>


                            <span className='hidden w-full h-full md:block'>
                                <Image loading='lazy' width={1200} height={500} src={urlFor(slide.imageDesktop).url()} alt={slide.title} className='object-cover w-full h-auto min-h-[250px] rounded-3xl' />
                            </span>
                        </a>
                    </div>

                ))}
            </Slider> */