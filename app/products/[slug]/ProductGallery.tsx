'use client'

import useWindowDimensions from '@/hooks/useWindowDimensions';
import { urlFor } from '@/lib/sanity.client';
import { Image as ImageData } from '@/typings';
import Image from 'next/image';

type Props = {
    image: ImageData
}

const ProductGallery = ({ image }: Props) => {
    const { width } = useWindowDimensions()

    return (
        // container
        <div className='flex'>
            <div className='flex flex-col items-center justify-center w-full h-full'>
                {/* max-md:Carousel Container */}
                <div className='w-full px-6 md:hidden'>
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

                {/* Md: Main Image */}

                <div className='items-center justify-center hidden w-full md:flex'>
                    <div className='w-full'>
                        <span className='inline-flex items-center justify-center w-full md:h-[343px] md:mb-3'>
                            <Image
                                src={urlFor(image).url()}
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
                <div className='hidden md:block w-full md:relative md:h-[180px]'>
                    <div className='absolute top-0 left-0 right-0 h-full min-h-[180px]'>


                        <div className='flex flex-wrap'>

                            <div className='inline-flex items-center justify-center h-[180px] bg:h-[107px] w-[calc(50%-8px)] bg:w-[calc(20%-4px)] rounded-lg mr-2 bg:mr-1 mb-2 bg:mb-1 border border-[#ddd]'>

                                <span className='inline-flex items-center justify-center w-[calc(100$-8px)] h-[calc(100%-8px)] m-1 max-w-full max-h-full'>
                                    <Image
                                        src={urlFor(image).url()}
                                        width={230}
                                        height={200}
                                        alt=''
                                        loading='lazy'
                                        className='inline-block w-full h-auto max-w-full max-h-full'
                                    />
                                </span>
                            </div>

                            <div className='inline-flex items-center justify-center h-[180px] bg:h-[107px] w-[calc(50%-8px)] bg:w-[calc(20%-4px)] rounded-lg mr-2 bg:mr-1 mb-2 bg:mb-1 border border-[#ddd]'>

                                <span className='inline-flex items-center justify-center w-[calc(100$-8px)] h-[calc(100%-8px)] m-1 max-w-full max-h-full'>
                                    <Image
                                        src={urlFor(image).url()}
                                        width={230}
                                        height={200}
                                        alt=''
                                        loading='lazy'
                                        className='inline-block w-full h-auto max-w-full max-h-full'
                                    />
                                </span>
                            </div>

                            {width! >= 900 ? (
                                <>
                                    <div className='inline-flex items-center justify-center h-[180px] bg:h-[107px] w-[calc(50%-8px)] bg:w-[calc(20%-4px)] rounded-lg mr-2 bg:mr-1 mb-2 bg:mb-1 border border-[#ddd]'>

                                        <span className='inline-flex items-center justify-center w-[calc(100$-8px)] h-[calc(100%-8px)] m-1 max-w-full max-h-full'>
                                            <Image
                                                src={urlFor(image).url()}
                                                width={230}
                                                height={200}
                                                alt=''
                                                loading='lazy'
                                                className='inline-block w-full h-auto max-w-full max-h-full'
                                            />
                                        </span>
                                    </div>

                                    <div className='inline-flex items-center justify-center h-[180px] bg:h-[107px] w-[calc(50%-8px)] bg:w-[calc(20%-4px)] rounded-lg mr-2 bg:mr-1 mb-2 bg:mb-1 border border-[#ddd]'>

                                        <span className='inline-flex items-center justify-center w-[calc(100$-8px)] h-[calc(100%-8px)] m-1 max-w-full max-h-full'>
                                            <Image
                                                src={urlFor(image).url()}
                                                width={230}
                                                height={200}
                                                alt=''
                                                loading='lazy'
                                                className='inline-block w-full h-auto max-w-full max-h-full'
                                            />
                                        </span>
                                    </div>

                                    <div className='inline-flex items-center justify-center h-[180px] bg:h-[107px] w-[calc(50%-8px)] bg:w-[calc(20%-4px)] rounded-lg mr-2 bg:mr-1 mb-2 bg:mb-1 border border-[#ddd]'>

                                        <span className='inline-flex items-center justify-center w-[calc(100$-8px)] h-[calc(100%-8px)] m-1 max-w-full max-h-full'>
                                            <Image
                                                src={urlFor(image).url()}
                                                width={230}
                                                height={200}
                                                alt=''
                                                loading='lazy'
                                                className='inline-block w-full h-auto max-w-full max-h-full'
                                            />
                                        </span>
                                    </div>
                                </>
                            ) : ''}

                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div></div>
            </div>
        </div>
    )
}

export default ProductGallery