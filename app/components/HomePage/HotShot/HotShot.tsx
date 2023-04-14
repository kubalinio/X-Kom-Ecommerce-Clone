'use client'

import { useState } from 'react'
import Link from 'next/link'

import { HotShotCounter } from './HotShotCounter'
import { HotShotProductDetail } from './HotShotProductDetail'
import SpecialBorder from './SpecialBorder'
import axios from 'axios'
import { useQuery } from 'react-query'
import { HotShot as HotShotData } from '@/typings'

const fetchHotShot = async () => {
    const response = await axios.get(`/api/getHotShot`)
    return response.data
}


export const HotShot = () => {
    const [ended, setEnded] = useState(false)

    const { data, isLoading } = useQuery({
        queryFn: () => fetchHotShot(),
        queryKey: ['hotShot'],
        staleTime: 6 * 60 * 60 * 1000 // 6 hours
    })

    if (isLoading) return (
        <section className='w-full p-4 pt-0 mb-4 bg-white border-b border-[#ebebeb] md:p-6 md:pt-3 lg:border-none lg:p-0 lg:pr-8 lg:pb-8 lg:w-[31.666%] lg:mb-0'>

            <div className='flex p-[2px] relative'>
                <p>Loading ...</p>
                <SpecialBorder />
            </div>
        </section>
    )

    const { price, oldPrice, promotionGainTextLines, promotionTotalCount, maxBuyCount, promotionName, mainImage, slug }: HotShotData = data.hotShot[0]

    // const currentTime = new Date().getHours()
    // console.log(currentTime)
    return (
        <section className='w-full p-4 pt-0 mb-4 bg-white border-b border-[#ebebeb] md:p-6 md:pt-3 lg:border-none lg:p-0 lg:pr-8 lg:pb-8 lg:w-[31.666%] lg:mb-0'>


            <div className='flex p-[2px] relative'>
                {/* Content */}
                <div className='relative w-full overflow-hidden rounded-xl z-[1]'>
                    <Link href='/'>
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
                            />

                        </div>
                    </Link>

                </div>
                {/* Border with spans */}
                <SpecialBorder />
            </div>


        </section>
    )
}

