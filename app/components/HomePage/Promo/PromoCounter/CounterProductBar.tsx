import { useEffect, useState } from "react"

export const CounterProductBar = ({ toSell, selled, sells, finished, selledAll }: { toSell: number, selled: number, sells: () => void, finished: boolean, selledAll: () => void }) => {


    const [left, setLeft] = useState(toSell - selled)
    const [fill, setFill] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {
            sells()

        }, 10000)

        setLeft(toSell - selled)
        setFill(Math.floor(100 - ((selled * 100) / toSell)))

        if (left <= 0) {
            selledAll()
        }

        return () => {
            clearInterval(interval)
        }

    }, [selled])

    return (
        <div>
            {!finished ? (
                <div>
                    {/* Numbers */}
                    <div className='flex justify-between'>
                        {/* left */}
                        <div className='flex items-center'>
                            <span className='mr-1 text-sm'>pozostało</span>
                            {/* Counter Up to Down */}
                            <div className='flex overflow-hidden h-7'>
                                <div className='flex flex-col'>
                                    <span className='text-lg font-bold h-7'>{left}</span>
                                </div>
                            </div>
                        </div>


                        {/* selled */}
                        <div className='flex items-center justify-end'>
                            <span className='mr-2 text-sm'>sprzedano</span>
                            {/* Counter Up to Down */}
                            <div className='flex overflow-hidden scale-150 h-7'>
                                <div className='flex flex-col'>
                                    <span className='text-lg font-bold h-7'>{selled}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bar */}
                    <div className='relative h-[9px] mt-1 mb-6 rounded-lg bg-[#ddd] overflow-hidden'>
                        <div style={{ width: `${fill}%` }} className={`h-[9px] rounded-lg bg-gradient-to-r from-[#0fd2ff] to-[#0082fa] transition-all duration-300 ease-in-out`} />
                    </div>
                </div>
            ) :
                (<p className='mb-6 text-3xl font-bold leading-10 text-center text-[#4d4d4d]'>Wyprzedano</p>)
            }

        </div >
    )
}