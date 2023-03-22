'use client'

// Style of Dots Added to globals

import React from "react";
import Image from 'next/image';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import axios from "axios";
import { useQuery } from "react-query";
import { urlFor } from "@/lib/sanity.client";

const slides = [
    {
        name: 'Sprzęt gamingowy taniej do 1000',
        img: 'https://cdn.x-kom.pl/i/img/banners/normal,,5ec8a769777e4bbaa135e910abe886bc.jpg?filters=trim',
        imgLarge: 'https://cdn.x-kom.pl/i/img/banners/normal,,b1127d9a3cfb4e8dbfa54ba861e331c7.jpg?filters=trim',
        link: '/',
    },
    {
        name: 'Sprzęt gamingowy taniej do 1000',
        img: 'https://cdn.x-kom.pl/i/img/banners/normal,,5ec8a769777e4bbaa135e910abe886bc.jpg?filters=trim',
        imgLarge: 'https://cdn.x-kom.pl/i/img/banners/normal,,862de5396d9049e7a7541b1e0c60bcd9.jpg?filters=trim',
        link: '/',
    },
    {
        name: 'Sprzęt gamingowy taniej do 1000',
        img: 'https://cdn.x-kom.pl/i/img/banners/normal,,5ec8a769777e4bbaa135e910abe886bc.jpg?filters=trim',
        imgLarge: 'https://cdn.x-kom.pl/i/img/banners/normal,,b1127d9a3cfb4e8dbfa54ba861e331c7.jpg?filters=trim',
        link: '/',
    },
    {
        name: 'Sprzęt gamingowy taniej do 1000',
        img: 'https://cdn.x-kom.pl/i/img/banners/normal,,5ec8a769777e4bbaa135e910abe886bc.jpg?filters=trim',
        imgLarge: 'https://cdn.x-kom.pl/i/img/banners/normal,,862de5396d9049e7a7541b1e0c60bcd9.jpg?filters=trim',
        link: '/',
    },
    {
        name: 'Sprzęt gamingowy taniej do 1000',
        img: 'https://cdn.x-kom.pl/i/img/banners/normal,,5ec8a769777e4bbaa135e910abe886bc.jpg?filters=trim',
        imgLarge: 'https://cdn.x-kom.pl/i/img/banners/normal,,b1127d9a3cfb4e8dbfa54ba861e331c7.jpg?filters=trim',
        link: '/',
    },
];

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='absolute hidden lg:flex bg-white rounded-full right-1 xl:-right-3 bottom-[42%] shadow-sm shadow-gray-600 cursor-pointer transition-all duration-200 hover:bg-gray-300 hover:shadow-md hover:shadow-gray-700 2xl:bottom-[35%]'
            onClick={onClick}>
            <span className='p-1 text-4xl text-gray-600'><MdKeyboardArrowRight /></span>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='absolute hidden lg:flex bg-white rounded-full left-1 xl:-left-3 bottom-[42%] shadow-sm shadow-gray-600 cursor-pointer z-10 transition-all duration-200 hover:bg-gray-300 hover:shadow-md hover:shadow-gray-700 2xl:bottom-[35%]'
            onClick={onClick}>
            <span className='p-1 text-4xl text-gray-600'><MdKeyboardArrowLeft /></span>
        </div>
    );
}

const settings = {
    dots: true,
    lazyLoad: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    customPaging: i => {
        return (
            <button className='w-full' >
                {slides[i].name}
            </button>
        )
    },
    responsive: [
        {
            breakpoint: 1080,
            settings: {
                className: "center",
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                variableWidth: false,
                arrows: true,
            }
        },


        {
            breakpoint: 900,
            settings: {
                className: "center",
                dots: false,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                variableWidth: false,

            }
        },

        {
            breakpoint: 768,
            settings: {
                dots: false,
                arrows: false,
                swipeToSlide: true,
                infinite: true,
                centerMode: false,
                slidesToShow: 1,
                centerPadding: "5px",
                variableWidth: true,

            }
        }
    ]
};

const fetchSliders = async () => {
    const response = await axios.get(`/api/getSlides`)
    return response.data
}

const SliderBox = () => {

    const { data, isLoading } = useQuery({
        queryFn: () => fetchSliders(),
        queryKey: ['slides'],
        staleTime: 3600000
    })

    if (isLoading) return (
        <section className='w-full bg-white lg:pb-5 lg:pt-2 xl:pt-1 2xl:pb-20'>
            <div className='flex flex-col justify-center w-full h-[310px] rounded-3xl pl-14 bg-gray-100 '>
                <div className="w-1/2 h-8 bg-gray-300" />
                <div className="w-1/4 h-8 mt-5 bg-gray-300" />
            </div>
        </section>)

    return (
        <section className="w-full bg-white lg:pb-5 lg:pt-1 xl:pt-0 2xl:pb-20">

            <Slider {...settings} >

                {data.slides.map((slide, i) => (

                    <div key={slide.title + i} className='w-full pl-4 md:px-6 lg:px-6 xl:px-0' >

                        <a href={slide.link} className='relative mx-2 overflow-hidden' >

                            <span className=' md:hidden'>
                                <Image loading='lazy' width={800} height={255} src={urlFor(slide.image).url()} alt={slide.title} className='object-cover w-full h-full rounded-2xl max-md:max-h-[175px] max-md:max-w-[325px]' />
                            </span>

                            {/* Large Screen */}
                            <span className='hidden w-full h-full md:block'>
                                <Image loading='lazy' width={1200} height={500} src={urlFor(slide.imageDesktop).url()} alt={slide.title} className='object-cover w-full h-auto min-h-[250px] rounded-3xl' />
                            </span>
                        </a>
                    </div>

                ))}
            </Slider>

        </section >
    )
}

export default SliderBox