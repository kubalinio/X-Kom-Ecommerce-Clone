/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import { ReactNode, useState } from 'react'

import { LoadingSpinner } from '@/components/LoadingSpinner'
import { HotShotsData } from '@/types/typings'

import { HotShotCounter } from './hotshotCounter'
import { HotShotProductDetail } from './HotShotProductDetail'
import SpecialBorder from './SpecialBorder'

const WrapperHotShot = ({ children }: { children: ReactNode }) => (
  <section className="mb-4 w-full border-b border-[#ebebeb] bg-white p-4 pt-0 md:p-6 md:pt-3 lg:mb-0 lg:w-[31.666%] lg:border-none lg:p-0 lg:pb-8 lg:pr-8">
    <div className="relative flex p-[2px]">{children}</div>
  </section>
)

const fetchHotShot = async () => {
  const response = await axios.get(`/api/getHotShot`)
  return response.data
}

export const HotShot = () => {
  const [ended, setEnded] = useState(false)

  const { data, isLoading } = useQuery<HotShotsData>({
    queryKey: ['hotShot'],
    queryFn: () => fetchHotShot(),
    staleTime: 12 * 60 * 60 * 1000,
  })

  if (isLoading)
    return (
      <WrapperHotShot>
        <LoadingSpinner />
        <SpecialBorder />
      </WrapperHotShot>
    )

  const { price, oldPrice, promotionGainTextLines, promotionTotalCount, maxBuyCount, promotionName, mainImage, slug } =
    data!.hotShot[0]

  // const currentTime = new Date().getHours()
  return (
    <WrapperHotShot>
      {/* Content */}
      <div className="relative z-[1] w-full overflow-hidden rounded-xl">
        <Link href={`/${slug.current}`}>
          <div className="mx-6 mb-8 mt-[18px] flex flex-wrap rounded-xl md:mx-6 md:mb-10 md:mt-6 lg:mb-[30px] lg:mt-[22px] ">
            {/* Top */}
            <HotShotProductDetail
              finished={ended}
              image={mainImage}
              promotionGainTextLines={promotionGainTextLines}
              title={promotionName}
            />

            {/* Bottom */}
            <HotShotCounter
              startPromo={() => setEnded(false)}
              endPromo={() => setEnded(true)}
              price={price}
              oldPrice={oldPrice}
              promotionGainTextLines={promotionGainTextLines}
              promotionTotalCount={promotionTotalCount}
            />
          </div>
        </Link>
      </div>
      {/* Border with spans */}
      <SpecialBorder />
    </WrapperHotShot>
  )
}
