'use client'



import useWindowDimensions from '@/hooks/useWindowDimensions';
import axios from "axios"
import { useQuery } from "react-query"



import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/swiper.min.css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper";
import { ProductCard } from '@/app/components/ProductCard';
import LoadingSpinner from '@/app/components/LoadingSpinner';

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
};


const RecommendProducts = ({ initialProducts }) => {


    // Check width
    const { width } = useWindowDimensions()

    const { data, isLoading } = useQuery({
        queryFn: () => fetchProducts(),
        queryKey: ['products'],
        initialData: initialProducts
    })

    if (isLoading) return (
        <section className='flex items-center justify-center w-full mb-4 lg:w-[68.333%] bg-white lg:pb-7 lg:mb-0'>
            <LoadingSpinner />
        </section>)

    return (
        <section className='w-full mb-4 lg:w-[68.333%] bg-white lg:pb-7 lg:mb-0'>

            <div className='flex flex-col border-y border-[#ebebeb] lg:border-b-0 lg:border-[#ddd] lg:pt-2'>

                <div className='flex justify-between w-full pl-4 pr-2'>
                    <div className='flex flex-col'>
                        <h2 className='mt-4 text-2xl font-semibold'>Polecamy</h2>
                    </div>
                </div>

                <div className='w-full pt-2 pb-6 lg:pb-0'>
                    {/* Desktop Products Show in 1080px */}
                    <div className='flex-wrap hidden mt-3 -mx-2 lg:flex'>

                        {data.products.map(product => (
                            <div key={product._id} className='w-1/4 px-2 mb-[22px]'>
                                <ProductCard
                                    _id={product._id}
                                    slug={product.slug}
                                    special={product.special}
                                    mainImage={product.mainImage}
                                    title={product.title}
                                    price={product.price}
                                />
                            </div>
                        ))}

                    </div>

                    {/* Mobile Products Delete in DOM in 1080px */}
                    <div>
                        {width < 1080 &&
                            // <ScrollingCarousel className='[&>*]:px-4'>
                            <Swiper
                                slidesPerView={2.3}
                                spaceBetween={8}
                                freeMode={true}
                                modules={[FreeMode]}
                                className='productsCarousel'
                                breakpoints={{
                                    520: {
                                        slidesPerView: 3.3,
                                        spaceBetween: 12
                                    },
                                    720: {
                                        slidesPerView: 3.6
                                    },
                                    900: {
                                        slidesPerView: 4.5
                                    }
                                }}
                            >
                                {
                                    data.products.map(product => (
                                        <SwiperSlide key={product._id}>
                                            <div className='w-full h-full max-w-[150px] p-2 min-w-[150px] sm:min-w-[180px] sm:max-w-[180px] md:max-w-[220px] md:min-w-[220px]'>
                                                <ProductCard slug={product.slug} special={product.special} mainImage={product.mainImage} title={product.title} price={product.price} />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>


                        }
                    </div>
                </div>
            </div>
        </section >
    )
}

export default RecommendProducts