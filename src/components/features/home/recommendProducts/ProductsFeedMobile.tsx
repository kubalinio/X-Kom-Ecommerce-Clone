'use client'

import 'swiper/swiper.min.css'
import 'swiper/css/free-mode'

import { Product } from '@prisma/client'
import { FC } from 'react'
import { FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import useWindowDimensions from '@/hooks/useWindowDimensions'

import { ProductCard } from '../../../ProductCard'

interface ProductsFeedMobileProps {
  products: Product[]
}

export const ProductsFeedMobile: FC<ProductsFeedMobileProps> = ({ products }) => {
  const { width } = useWindowDimensions()

  return (
    <div>
      {(width ?? 0) < 1080 && (
        // <ScrollingCarousel className='[&>*]:px-4'>
        <Swiper
          slidesPerView={2.3}
          spaceBetween={8}
          freeMode={true}
          modules={[FreeMode]}
          className="productsCarousel"
          breakpoints={{
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
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product._rev}>
              <div className="h-full w-full min-w-[150px] max-w-[150px] p-2 sm:min-w-[180px] sm:max-w-[180px] md:min-w-[220px] md:max-w-[220px]">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}
