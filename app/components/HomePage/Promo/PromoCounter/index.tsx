import React, { useState } from 'react'
import { CountdownTimer } from './CountdownTimer'
import { CounterProductBar } from './CounterProductBar'

type Props = {
    startPromo: () => void
    endPromo: () => void
}

export const PromoCounter = ({ startPromo, endPromo }: Props) => {
    const [finished, setFinished] = useState(false)

    const [toSell, setToSell] = useState(300)
    const [selled, setSelled] = useState(145)



    return (
        <div className='w-full md:w-1/2 md:text-center md:pl-2 lg:w-full'>
            <div className='items-center justify-center block mt-6 mb-2 text-center md:mt-11 lg:my-5'>
                <span className='block text-lg leading-6 line-through text-[#707070] md:mr-2'>1399,00 zł</span>
                {/* Finished  */}
                <span className={`block text-3xl text-[#4d4d4d] font-bold leading-10 ${finished ? 'text-[#4d4d4d]' : 'text-[#fa0064]'}`}>899,00 zł</span>
            </div>

            <CounterProductBar toSell={toSell} selled={selled} finished={finished} selledAll={() => setFinished(true)} sells={() => setSelled(selled + 1)} />

            {/* Counter */}
            <CountdownTimer finished={finished} />
        </div>
    )
}

