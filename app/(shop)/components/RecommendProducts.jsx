'use client'

import 'swiper/swiper.min.css'
import 'swiper/css/free-mode'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { LoadingSpinner } from '@/components/LoadingSpinner'
import { ProductCard } from '@/components/ProductCard'
import useWindowDimensions from '@/hooks/useWindowDimensions'

// const item = {
//     title: 'Apple Beats Fit Pro Volt Yellow',
//     slug: 'apple-beats-fit-pro-volt-yellow',
//     mainImage: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_9_8_51_32_288_00.jpg',
//     price: '1200,00',
//     special: 'Promocja'
// }

const fetchProducts = async () => {
  const response = await axios.get(`/api/products/getProducts`)
  return response.data
}

const RecommendProducts = () => {
  // Check width
  const { width } = useWindowDimensions()

  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(),
    staleTime: 12 * 60 * 60 * 1000,
  })

  if (isLoading)
    return (
      <section className="mb-4 flex w-full items-center justify-center bg-white lg:mb-0 lg:w-[68.333%] lg:pb-7">
        <LoadingSpinner />
      </section>
    )

  return (
    <section className="mb-4 w-full bg-white lg:mb-0 lg:w-[68.333%] lg:pb-7">
      <div className="flex flex-col border-y border-[#ebebeb] lg:border-b-0 lg:border-[#ddd] lg:pt-2">
        <div className="flex w-full justify-between pl-4 pr-2">
          <div className="flex flex-col">
            <h2 className="mt-4 text-2xl font-semibold">Polecamy</h2>
          </div>
        </div>

        <div className="w-full pb-6 pt-2 lg:pb-0">
          {/* Desktop Products Show in 1080px */}
          <div className="-mx-2 mt-3 hidden flex-wrap lg:flex">
            {data.products.map((product) => (
              <div key={product._rev} className="mb-[22px] w-1/4 px-2">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Mobile Products Delete in DOM in 1080px */}
          <div>
            {width < 1080 && (
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
                {data.products.map((product) => (
                  <SwiperSlide key={product._rev}>
                    <div className="h-full w-full min-w-[150px] max-w-[150px] p-2 sm:min-w-[180px] sm:max-w-[180px] md:min-w-[220px] md:max-w-[220px]">
                      <ProductCard product={product} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecommendProducts
