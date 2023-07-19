'use client'

import { Product } from "@prisma/client"
import { FC, useState } from "react"

import { HotShotCounter } from "@/features/shared/components/hotshotCounter"

import { HotShotProductDetail } from "./HotShotProductDetail"

interface HotshotFeedProps {
    hotData: Product
}

export const HotshotFeed: FC<HotshotFeedProps> = ({ hotData }) => {
    // @TODO Zustand state
    const [ended, setEnded] = useState(false)

    return (
        <div className="mx-6 mb-8 mt-[18px] flex flex-wrap rounded-xl md:mx-6 md:mb-10 md:mt-6 lg:mb-[30px] lg:mt-[22px] ">
            {/* Top */}
            <HotShotProductDetail
                finished={ended}
                image={hotData.photo}
                promotionGainTextLines={{ title: 'Oszczędź', value: '25%' }}
                title={hotData.name}
            />

            {/* Bottom */}
            <HotShotCounter
                startPromo={() => setEnded(false)}
                endPromo={() => setEnded(true)}
                price={hotData?.price}
                oldPrice={hotData?.oldPrice}
                promotionGainTextLines={{ title: 'Oszczędź', value: '25%' }}
                promotionTotalCount={1000}
            />
        </div>
    )
}
