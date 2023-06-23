'use client'

import 'swiper/swiper.min.css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

import Link from 'next/link'
import { ReactNode } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { SlArrowRight } from 'react-icons/sl'
import { FreeMode, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

type SectionOverlayProps = {
  children?: ReactNode[]
  heading: string
  slugToAll: string
  productSection?: boolean
}

export const SectionCarouselContainer = ({ children, heading, slugToAll, productSection }: SectionOverlayProps) => {
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
    },
  }

  const breakpointsProducts = {
    520: {
      slidesPerView: 3.3,
      spaceBetween: 12,
    },
    720: {
      slidesPerView: 3.6,
    },
    900: {
      slidesPerView: 4.5,
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
    },
  }

  return (
    <section className="relative mb-4 w-full bg-white lg:mb-0 lg:pb-8">
      <div className="flex flex-col border-y border-[#ebebeb] bg-white lg:border-b-0 lg:border-[#ddd]">
        {/* Head */}
        <div className="flex w-full justify-between pl-4 pr-2 md:pl-6 lg:p-0">
          <div className="flex flex-col">
            <h2 className="mt-4 text-3xl font-bold lg:mt-3">
              <Link href="/">{heading}</Link>
            </h2>
          </div>
          {/* Show All */}
          {slugToAll && (
            <div className="max-md:hidden">
              <Link
                href={`/${slugToAll}`}
                className="mt-4 flex min-h-[36px] items-center justify-center rounded-full bg-white pl-4 pr-3 text-[#4d4d4d] hover:bg-[#f5f5f5] lg:-mr-5 lg:mt-3"
              >
                Pokaż wszystkie
                <span className="ml-1 inline-block h-4 w-4">
                  <SlArrowRight className="h-full w-full" />
                </span>
              </Link>
            </div>
          )}
        </div>

        {/* Slider */}
        <div className="w-full pb-6 pt-2">
          <div className="mt-2">
            <Swiper
              className="sectionCarousel"
              slidesPerView={!productSection ? 1.3 : 2.3}
              spaceBetween={12}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              freeMode={{
                enabled: true,
                minimumVelocity: 0.02,
                momentumRatio: 0.2,
              }}
              modules={[FreeMode, Navigation]}
              breakpoints={!productSection ? breakpointsArticle : breakpointsProducts}
            >
              {children?.map((child) => (
                <SwiperSlide key={Math.random()}>{child}</SwiperSlide>
              ))}

              {/* Nav Buttons */}

              <div
                className={`swiper-button-prev after:hidden ${
                  productSection ? 'swiper-button-prev--topProduct' : 'swiper-button-prev--top'
                }`}
              >
                <span className="p-1 text-4xl text-gray-600">
                  <MdKeyboardArrowLeft />
                </span>
              </div>

              <div
                className={`swiper-button-next swiper-button-next--top after:hidden ${
                  productSection ? 'swiper-button-next--topProduct' : 'swiper-button-next--top'
                }`}
              >
                <span className="p-1 text-4xl text-gray-600">
                  <MdKeyboardArrowRight />
                </span>
              </div>
            </Swiper>
          </div>
        </div>

        {/* Show All */}
        <div className="md:hidden">
          <div className="mx-4 flex justify-center border-t border-[#ddd] py-2">
            <Link
              href={`/${slugToAll}`}
              className="my-2 flex min-h-[36px] items-center justify-center rounded-full bg-white pl-4 pr-3 text-[#4d4d4d] hover:bg-[#f5f5f5] lg:-mr-5 lg:mt-3"
            >
              Pokaż wszystkie
              <span className="ml-1 inline-block h-4 w-4">
                <SlArrowRight className="h-full w-full" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
