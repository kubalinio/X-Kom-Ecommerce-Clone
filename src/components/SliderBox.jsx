/* eslint-disable security/detect-object-injection */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client'

// Style of Dots Added to globals

import 'swiper/swiper.min.css'
import 'swiper/css/navigation'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import * as ReactDOMServer from 'react-dom/server'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Pagination } from 'swiper'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import { urlFor } from '@/lib/sanity.client'

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
        className={`absolute -left-3 top-[38%] z-30 hidden cursor-pointer rounded-full bg-white shadow-sm-xCom shadow-black/20 transition-all duration-200 hover:bg-gray-100 hover:shadow-xCom hover:shadow-black/30 active:bg-gray-200 lg:flex xl:-left-5`}
      >
        <span className="p-1 text-4xl text-gray-600">
          <MdKeyboardArrowLeft />
        </span>
      </div>

      <div
        onClick={() => swiper.slideNext()}
        className={`absolute -right-3 top-[38%] z-30 hidden cursor-pointer rounded-full bg-white shadow-sm-xCom shadow-black/20 transition-all duration-200 hover:bg-gray-100 hover:shadow-xCom hover:shadow-black/30 active:bg-gray-200 lg:flex xl:-right-5 `}
      >
        <span className="p-1 text-4xl text-gray-600">
          <MdKeyboardArrowRight />
        </span>
      </div>
    </>
  )
}

const SliderBox = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => fetchSliders(),
    queryKey: ['slides'],
    staleTime: 3600000,
  })

  if (isLoading)
    return (
      <section className="w-full bg-white p-4 lg:pb-5 lg:pt-2 xl:pt-1 2xl:pb-20">
        <div className="flex h-[175px] w-full flex-col justify-center rounded-3xl bg-gray-100 pl-14 md:h-[250px] lg:h-[310px] ">
          <div className="h-6 w-1/2 bg-gray-300 md:h-8" />
          <div className="mt-5 h-6 w-1/4 bg-gray-300 md:h-8" />
        </div>
      </section>
    )

  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      // return '<button class="' + className + ' w-full">' + (data.slides[index].title) + "</button>";

      return ReactDOMServer.renderToStaticMarkup(
        <button className={`${className} w-full`}>
          <span className="inline-block max-w-full overflow-hidden text-ellipsis text-[#4d4d4d]">
            <span style={{ maxHeight: '40px' }} className="block">
              <span className="line-clamp-2 w-full text-ellipsis">{data.slides[index].title}</span>
            </span>
          </span>
        </button>
      )
    },
  }

  return (
    <section className="relative w-full bg-white px-4 md:px-[24px] lg:p-0">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        rewind={true}
        className="bannersCarousel"
        modules={[Pagination]}
        pagination={pagination}
        breakpoints={{
          520: {
            slidesPerView: 1.5,
          },

          680: {
            slidesPerView: 2.1,
            spaceBetween: 8,
          },

          720: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          900: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
        }}
      >
        {data.slides.map((slide, i) => (
          <SwiperSlide key={slide.title + i}>
            <div className="h-full w-full">
              <a href={slide.link} className="relative h-full w-full">
                <span className="md:hidden">
                  <Image
                    loading="lazy"
                    width={800}
                    height={255}
                    src={urlFor(slide.image).url()}
                    alt={slide.title}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </span>

                <span className="overflow-hidden rounded-3xl max-md:hidden">
                  <Image
                    loading="lazy"
                    width={1200}
                    height={500}
                    src={urlFor(slide.imageDesktop).url()}
                    alt={slide.title}
                    className="h-full max-h-[250px] min-h-[250px] w-full rounded-3xl object-cover object-left-top 2xl:max-h-[315px]"
                  />
                </span>
              </a>
            </div>
          </SwiperSlide>
        ))}

        <SwiperNavButtons />
      </Swiper>
    </section>
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
