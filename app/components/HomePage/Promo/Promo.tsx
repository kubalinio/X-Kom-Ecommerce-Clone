'use client'

import { useState } from 'react'
import Link from 'next/link'

import { PromoCounter } from './PromoCounter'
import { PromoProductDetail } from './PromoProductDetail'
import SpecialBorder from './SpecialBorder'


export const Promo = () => {
    const [ended, setEnded] = useState(false)

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
                            <PromoProductDetail finished={ended} />

                            {/* Bottom */}
                            <PromoCounter
                                startPromo={() => setEnded(false)}
                                endPromo={() => setEnded(true)} />

                        </div>
                    </Link>

                </div>
                {/* Border with spans */}
                <SpecialBorder />
            </div>


        </section>
    )
}

