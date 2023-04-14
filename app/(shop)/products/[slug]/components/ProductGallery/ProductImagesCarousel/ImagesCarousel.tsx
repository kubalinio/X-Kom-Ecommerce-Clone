import Image from 'next/image'
import { urlFor } from '@/lib/sanity.client'

import { Image as ImageData } from '@/typings'


type Props = {
    images: ImageData[]
}

export const ImagesCarousel = ({ images }: Props) => {
    return (
        <div className='w-full px-6 md:hidden'>

            {/* Image Carousel, Temporary Single Image */}
            <div className='flex items-center justify-center'>
                <span className='inline-flex items-center justify-center w-3/4'>
                    <Image
                        src={urlFor(images[0]).url()}
                        width={230}
                        height={200}
                        alt=''
                        loading='lazy'
                        className='inline-block h-auto max-w-full max-h-full'
                    />

                </span>
            </div>
        </div>
    )
}
