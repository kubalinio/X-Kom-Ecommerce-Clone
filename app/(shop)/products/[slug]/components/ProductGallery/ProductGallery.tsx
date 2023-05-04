'use client'


import { urlFor } from '@/lib/sanity.client';
import { Image as ImageData, Product } from '@/app/typings';
import Image from 'next/image';
import { useState } from 'react';
import { ProductImagesCarousel } from './ProductImagesCarousel';
import { ProductImgThumbnail } from './ProductImgThumbnail';
import ActionBtns from '../ActionBtns';

type Props = {
    product: Product
}

export const ProductGallery = ({ product }: Props) => {
    const { images } = product
    const [index, setIndex] = useState(0)


    return (
        // container
        <div className='relative flex'>
            <div className='relative flex flex-col items-center justify-center w-full h-full'>
                {/* max-md:Carousel Container */}
                <ProductImagesCarousel images={images!} />

                {/* Md: Main Image */}

                <div className='items-center justify-center hidden w-full md:flex'>
                    <div className='w-full'>
                        <span className='inline-flex items-center justify-center w-full md:h-[343px] bg:h-[400px] lg:h-[433px] md:mb-3 bg:mb-6 lg:mb-3'>
                            <Image
                                src={urlFor(images![index]).url()}
                                width={393}
                                height={343}
                                alt=''
                                loading='lazy'
                                className='inline-block w-auto h-full max-w-full max-h-full'
                            />
                        </span>
                    </div>
                </div>

                {/* Md: Mini Images */}
                <div className='hidden w-full md:h-[80px] md:block md:relative'>
                    <div className='absolute top-0 left-0 right-0 h-full min-h-[80px]'>
                        <div className='flex flex-wrap justify-center'>

                            {images?.map((image, i) => (
                                <ProductImgThumbnail
                                    key={Math.random()}
                                    image={image}
                                    active={() => setIndex(i)}
                                    actived={index === i} />
                            ))}

                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className='md:hidden'>
                    <ActionBtns
                        product={product}
                    />
                </div>

            </div>
        </div>
    )
}

