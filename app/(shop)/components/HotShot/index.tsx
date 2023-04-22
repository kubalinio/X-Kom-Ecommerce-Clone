'use client'

import { ReactNode, useState } from 'react'
import Link from 'next/link'

import { HotShotCounter } from './HotShotCounter'
import { HotShotProductDetail } from './HotShotProductDetail'
import SpecialBorder from './SpecialBorder'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import LoadingSpinner from '../../../components/LoadingSpinner'
import { HotShotData, HotShotsData } from '@/typings'

const WrapperHotShot = ({ children }: { children: ReactNode }) => (
    <section className='w-full p-4 pt-0 mb-4 bg-white border-b border-[#ebebeb] md:p-6 md:pt-3 lg:border-none lg:p-0 lg:pr-8 lg:pb-8 lg:w-[31.666%] lg:mb-0'>
        <div className='flex p-[2px] relative'>
            {children}
        </div>


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
        staleTime: 12 * 60 * 60 * 1000
    })



    if (isLoading) return (
        <WrapperHotShot>
            <LoadingSpinner />
            <SpecialBorder />
        </WrapperHotShot>
    )

    const { price, oldPrice, promotionGainTextLines, promotionTotalCount, maxBuyCount, promotionName, mainImage, slug } = data!.hotShot[0]

    // const currentTime = new Date().getHours()
    // console.log(currentTime)
    return (
        <WrapperHotShot>

            {/* Content */}
            < div className='relative w-full overflow-hidden rounded-xl z-[1]' >
                <Link href={`/${slug.current}`}>
                    <div className='flex flex-wrap rounded-xl mt-[18px] mb-8 mx-6 md:mt-6 md:mx-6 md:mb-10 lg:mt-[22px] lg:mb-[30px] '>
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

            </div >
            {/* Border with spans */}
            < SpecialBorder />
        </WrapperHotShot>
    )
}

