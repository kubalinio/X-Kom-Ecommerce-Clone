import Image from 'next/image'

import { urlFor } from '@/lib/sanity.client'
import { Image as ImageData } from '@/types/typings'

type Props = {
  images: ImageData[]
}

export const ImagesCarousel = ({ images }: Props) => {
  return (
    <div className="w-full px-6 md:hidden">
      {/* Image Carousel, Temporary Single Image */}
      <div className="flex items-center justify-center">
        <span className="inline-flex w-3/4 items-center justify-center">
          <Image
            src={urlFor(images[0]).url()}
            width={230}
            height={200}
            alt=""
            loading="lazy"
            className="inline-block h-auto max-h-full max-w-full"
          />
        </span>
      </div>
    </div>
  )
}
