import Image from 'next/image'

import { urlFor } from '@/lib/sanity.client'
import { Image as ImageData } from '@/types/typings'

export const ProductImgThumbnail = ({
  image,
  active,
  actived,
}: {
  image: ImageData
  active: () => void
  actived: boolean
}) => {
  return (
    <div
      onMouseEnter={() => active()}
      className={`mb-2 mr-2 inline-flex h-[70px] w-[calc(18%-4px)] cursor-pointer items-center justify-center rounded-lg border hover:border-gray-600 bg:mb-1 bg:mr-1 bg:h-[80px]  lg:h-[70px] lg:w-[calc(16%-4px)] ${
        actived ? 'border-gray-800' : 'border-[#ddd]'
      }`}
    >
      <span className="m-1 inline-flex h-[calc(100%-8px)] max-h-full w-[calc(100%-8px)] max-w-full items-center justify-center">
        <Image
          src={urlFor(image).url()}
          width={230}
          height={200}
          alt=""
          loading="lazy"
          className="inline-block h-auto max-h-full w-full max-w-full"
        />
      </span>
    </div>
  )
}
