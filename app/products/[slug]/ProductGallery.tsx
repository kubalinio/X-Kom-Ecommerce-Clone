'use client'

import { urlFor } from '@/lib/sanity.client';
import { Image as ImageData } from '@/typings';
import Image from 'next/image';

type Props = {
    image: ImageData
}

const ProductGallery = ({ image }: Props) => {

    return (
        // container
        <div className='flex'>
            <div className='flex flex-col items-center justify-center w-full h-full'>
                {/* Carousel Container */}
                <div className='w-full px-6'>
                    {/* Image Carousel, Temporary Single Image */}

                    <div className='flex items-center justify-center'>
                        <span className='inline-flex items-center justify-center w-3/4'>
                            <Image
                                src={urlFor(image).url()}
                                width={230}
                                height={200}
                                alt=''
                                loading='lazy'
                                className='inline-block h-auto max-w-full max-h-full'
                            />

                        </span>
                    </div>

                </div>

                {/* Buttons */}
                <div></div>
            </div>
        </div>
    )
}

export default ProductGallery