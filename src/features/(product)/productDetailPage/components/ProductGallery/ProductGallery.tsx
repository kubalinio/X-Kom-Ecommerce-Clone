'use client'

import { Product } from '@prisma/client'
import Image from 'next/image'

import { AddToFavBox } from '../AddToFavBox'
import { ProductImagesCarousel } from './ProductImagesCarousel'
// import { ProductImgThumbnail } from './ProductImgThumbnail'

type Props = {
  product: Product
}

export const ProductGallery = ({ product }: Props) => {
  const { photo } = product
  // const [index, setIndex] = useState(0)

  return (
    // container
    <div className="relative flex">
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        {/* max-md:Carousel Container */}
        <ProductImagesCarousel images={photo} />

        {/* Md: Main Image */}

        <div className="hidden w-full items-center justify-center md:flex">
          <div className="w-full">
            <span className="inline-flex w-full items-center justify-center md:mb-3 md:h-[343px] bg:mb-6 bg:h-[400px] lg:mb-3 lg:h-[433px]">
              <Image
                // eslint-disable-next-line security/detect-object-injection
                src={photo}
                width={393}
                height={343}
                alt=""
                loading="lazy"
                className="inline-block h-full max-h-full w-auto max-w-full"
              />
            </span>
          </div>
        </div>

        {/* Md: Mini Images */}
        <div className="hidden w-full md:relative md:block md:h-[80px]">
          <div className="absolute left-0 right-0 top-0 h-full min-h-[80px]">
            <div className="flex flex-wrap justify-center">
              {/* @TODO when add many photos build thumbnail */}
              {/* {images?.map((image, i) => ( */}
              {/* <ProductImgThumbnail
                  key={Math.random()}
                  image={photo}
                  active={() => setIndex(i)}
                  actived={index === i}
                /> */}
              {/* ))} */}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="md:hidden">
          <AddToFavBox productId={product.id} />
        </div>
      </div>
    </div>
  )
}
