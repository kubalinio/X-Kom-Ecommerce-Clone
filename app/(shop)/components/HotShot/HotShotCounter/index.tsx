import React, { useState } from 'react'
import { CountdownTimer } from './CountdownTimer'
import { CounterProductBar } from './CounterProductBar'
import ProductPrice from './ProductPrice'

type Props = {
    startPromo: () => void
    endPromo: () => void
    price: number
    oldPrice: number
    promotionGainTextLines: {
        title: string
        value: string
    }
    promotionTotalCount: number
}

export const HotShotCounter = ({ startPromo, endPromo, price, oldPrice, promotionGainTextLines, promotionTotalCount }: Props) => {
    const [finished, setFinished] = useState(false)

    const [toSell, setToSell] = useState(promotionTotalCount)
    const [selled, setSelled] = useState(145)

    const handleSelledProduct = () => {
        setFinished(true)
        endPromo()
    }


    return (
        <div className='w-full md:w-1/2 md:text-center md:pl-2 lg:w-full'>
            <ProductPrice
                finished={finished}
                price={price}
                oldPrice={oldPrice}
                promotionGainTextLines={promotionGainTextLines}
            />

            <CounterProductBar
                toSell={toSell}
                selled={selled}
                finished={finished}
                selledAll={() => handleSelledProduct()}
                sells={() => setSelled(selled + 1)} />

            {/* Counter */}
            <CountdownTimer finished={finished} />
        </div>
    )
}

