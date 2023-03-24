'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useCountdown } from '../../../hooks/useCountdown'

const CountdownTimer = ({ hours, minutes, seconds, finished }: { hours: number, minutes: number, seconds: number, finished: boolean }) => {


    return (
        <div className='flex flex-col items-center'>
            <span className='mb-2'>
                {!finished ? 'Do końca zostało:' : 'Następny gorący strzał:'
                }
            </span>

            <div className='flex justify-center text-2xl'>
                <div className='flex flex-col items-center'>
                    <div className='flex items-center justify-center w-14 h-14 rounded-xl bg-[#ddd]'>{hours < 10 ? `0${hours}` : `${hours}`}</div>
                    <span className='text-sm text-[#707070]'>godz.</span>
                </div>
                <div className='mt-[9px] mx-[6px] after:content-[":"]' />
                <div className='flex flex-col items-center'>
                    <div className='flex items-center justify-center w-14 h-14 rounded-xl bg-[#ddd]'>{minutes < 10 ? `0${minutes}` : `${minutes}`}</div>
                    <span className='text-sm text-[#707070]'>godz.</span>
                </div>
                <div className='mt-[9px] mx-[6px] after:content-[":"]' />
                <div className='flex flex-col items-center'>
                    <div className='flex items-center justify-center w-14 h-14 rounded-xl bg-[#ddd]'>{seconds < 10 ? `0${seconds}` : `${seconds}`}</div>
                    <span className='text-sm text-[#707070]'>godz.</span>
                </div>
            </div>
        </div>
    )
}

const CounterProductBar = ({ toSell, selled, sells, finished, selledAll }: { toSell: number, selled: number, sells: () => void, finished: boolean, selledAll: () => void }) => {


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

const Promo = () => {
    //  12 HOURS
    const TIME_TO_END_PROMOTION = 12 * 60 * 60 * 1000
    // fetch date stamp from Sanity
    const DATE_MORNING_PROMOTION = new Date().setHours(10, 0, 0)
    const DATE_EVENING_PROMOTION = new Date().setHours(22, 0, 0)

    //  start promocji 10 albo 22
    const [startPromotion, setStartPromotion] = useState(DATE_MORNING_PROMOTION)


    let dateAfterPromo = startPromotion + TIME_TO_END_PROMOTION


    // useEffect(() => {
    //     const currentTime = new Date().getHours()

    //     if (currentTime > 10 && currentTime < 22) {
    //         setStartPromotion(DATE_MORNING_PROMOTION)


    //     } else if (currentTime > 22 && currentTime < 10) {

    //         setStartPromotion(DATE_MORNING_PROMOTION)
    //         console.log(startPromotion)
    //     }

    // }, [])

    // Czas do konca promocji 

    const [days, hours, minutes, seconds] = useCountdown(dateAfterPromo)

    // czas się skończył albo nie

    // wszystko sprzedane albo nie
    const [toSell, setToSell] = useState(300)
    const [selled, setSelled] = useState(145)
    const [isSelled, setIsSelled] = useState(false)
    // then
    const [finished, setFinished] = useState(false)

    useEffect(() => {

        if (hours + minutes + seconds <= 0 || isSelled) {
            // zakończ promocje
            setFinished(true)

            const currentTime = new Date().getHours()

            if (currentTime > 10 && currentTime < 22) {
                setStartPromotion(DATE_MORNING_PROMOTION)

            } else if (currentTime > 22 && currentTime < 10) {

                setStartPromotion(DATE_EVENING_PROMOTION)
            }

        } else if (hours + minutes + seconds <= 0 && isSelled) {
            setFinished(false)
            setIsSelled(false)
            setSelled(0)
            setToSell(123)

            const currentTime = new Date().getHours()

            if (currentTime > 10 && currentTime < 22) {
                setStartPromotion(DATE_MORNING_PROMOTION)

            } else if (currentTime > 22 && currentTime < 10) {

                setStartPromotion(DATE_EVENING_PROMOTION)
            }
        }

    }, [hours, isSelled])

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
                            <div className='w-full md:w-1/2 lg:w-full'>
                                {/* Photo */}
                                <div className='relative flex flex-col gap-2'>
                                    <h1 className='text-[26px] font-bold leading-7'>Gorący strzał</h1>
                                    <div className={`inline-flex items-center justify-center self-center overflow-hidden h-[220px] w-[262px] ${finished ? 'grayscale-[50%] opacity-60' : 'grayscale-0 opacity-100'}`}>
                                        <Image src="https://cdn.x-kom.pl/i/img/promotions/hot-shot-large,,hs_2023_2_23_9_1_19.PNG"
                                            alt="phone"
                                            width={180}
                                            height={220}
                                            className='w-auto h-auto max-w-full max-h-full' />
                                    </div>
                                    {/* Position */}
                                    <div className='absolute right-0 top-2'>
                                        <div className='text-white bg-[#707070] text-center w-[100px] rounded-lg px-2 py-[6px]'>
                                            <div className='text-xs leading-4'>Oszczędź</div>
                                            <span className='text-xl leading-7'>500 zł</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Title */}
                                <div className='text-center'>
                                    <span className='w-full text-xl line-clamp-1'>
                                        Motorola edge 20 lite 5G 8/128GB Electric Graphite 90Hz
                                    </span>
                                </div>
                            </div>
                            {/* Bottom */}

                            <div className='w-full md:w-1/2 md:text-center md:pl-2 lg:w-full'>
                                <div className='items-center justify-center block mt-6 mb-2 text-center md:mt-11 lg:my-5'>
                                    <span className='block text-lg leading-6 line-through text-[#707070] md:mr-2'>1399,00 zł</span>
                                    {/* Finished  */}
                                    <span className={`block text-3xl text-[#4d4d4d] font-bold leading-10 ${finished ? 'text-[#4d4d4d]' : 'text-[#fa0064]'}`}>899,00 zł</span>
                                </div>

                                <CounterProductBar toSell={toSell} selled={selled} finished={finished} selledAll={() => setIsSelled(true)} sells={() => setSelled(selled + 1)} />

                                {/* Counter */}
                                <CountdownTimer hours={hours} minutes={minutes} seconds={seconds} finished={finished} />
                            </div>
                        </div>
                    </Link>

                </div>
                {/* Border with spans */}
                <div className='absolute inset-0'>
                    <span className='block rounded-t-xl w-full h-[17%] border-2 border-b-0 border-[#fa0064] ' />
                    <span className='block w-full h-[11%] border-x-2 border-[#be0064] ' />
                    <span className='block w-full h-[44%] border-x-2 border-[#1a1a1a] ' />
                    <span className='block w-full h-[11%] border-x-2 border-[#be0064] ' />
                    <span className='block rounded-b-xl w-full h-[17%] border-2 border-t-0 border-[#fa0064] ' />
                </div>
            </div>


        </section>
    )
}

export default Promo