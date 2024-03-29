'use client'

import Link from 'next/link'
import { BsFillStarFill } from 'react-icons/bs'

import { useMediaQuery } from '@/hooks/useMediaQuery'

type Props = {
  title: string
  size?: 'md'
}

const ProductReviews = () => (
  <div className="flex flex-col items-start gap-[5px]">
    <Link href="#Opinie" className="flex items-center gap-[2px] text-[#707070]">
      <span className="inline-flex h-[14px] w-[14px] items-center justify-center overflow-hidden text-yellow-300">
        <BsFillStarFill className="h-full w-full text-[12px]" />
      </span>
      <span className="inline-flex h-[14px] w-[14px] items-center justify-center overflow-hidden text-yellow-300">
        <BsFillStarFill className="h-full w-full text-[12px]" />
      </span>
      <span className="inline-flex h-[14px] w-[14px] items-center justify-center overflow-hidden text-yellow-300">
        <BsFillStarFill className="h-full w-full text-[12px]" />
      </span>
      <span className="inline-flex h-[14px] w-[14px] items-center justify-center overflow-hidden text-yellow-300">
        <BsFillStarFill className="h-full w-full text-[12px]" />
      </span>
      <span className="inline-flex h-[14px] w-[14px] items-center justify-center overflow-hidden text-gray-300">
        <BsFillStarFill className="h-full w-full text-[12px]" />
      </span>
      <span className="inline-flex h-[14px] w-[14px] items-center justify-center overflow-hidden text-gray-300">
        <BsFillStarFill className="h-full w-full text-[12px]" />
      </span>

      <span className="inline-flex items-center justify-center pl-1 font-bold">(5 opinii)</span>
    </Link>
  </div>
)

const HeadingProduct = ({ title, size }: Props) => {
  const headingMediaMd = useMediaQuery('(min-width: 720px) and (max-width: 1080px)')
  const headingMediaToMd = useMediaQuery('(max-width: 720px)')
  const headingMediaDt = useMediaQuery('(min-width: 1080px)')

  return size === 'md' ? (
    headingMediaMd ? (
      <div className="flex w-full break-words pb-4 md:mt-6 lg:pb-0">
        <div className="w-full">
          {/* Title & Md:Reviews  */}
          <div className="mb-1 flex w-full flex-col">
            <h1 className="text-[18px] leading-6 md:text-[22px]/7 lg:inline lg:text-[26px]/8">{title}</h1>

            {/* Div z opiniamy od MD */}
            <div></div>
          </div>

          {/* Reviews & Md: Producent Details */}
          <div className="flex flex-col items-start">
            {/* Reviews */}
            <div>
              <ProductReviews />
            </div>

            {/* Md: Product Details */}
            <div>
              <div className="hidden"></div>
            </div>
          </div>
        </div>
      </div>
    ) : null
  ) : headingMediaToMd || headingMediaDt ? (
    <div className="flex w-full break-words pb-4 md:mt-6 lg:pb-0">
      <div className="w-full">
        {/* Title & Md:Reviews  */}
        <div className="mb-1 flex w-full flex-col">
          <h1 className="text-[18px] leading-6 md:text-[22px]/7 lg:inline lg:text-[26px]/8">{title}</h1>

          {/* Div z opiniamy od MD */}
          <div></div>
        </div>

        {/* Reviews & Md: Producent Details */}
        <div className="flex flex-col items-start">
          {/* Reviews */}
          <div>
            <ProductReviews />
          </div>

          {/* Md: Product Details */}
          <div>
            <div className="hidden"></div>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default HeadingProduct
