

import { PurchaseList } from '@/app/typings'
import { urlFor } from '@/lib/sanity.client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineMore } from 'react-icons/ai'
import { IoMdHeartEmpty } from 'react-icons/io'

const ExpandActionList = ({ id }: { id: string }) => {
    const [expand, setExpand] = useState(false)

    const buttonRef = useRef<HTMLDivElement>(null)
    const expandBoxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const listener = (e: MouseEvent) => {
            if (!buttonRef.current?.contains(e.target as Node) || !buttonRef.current) {
                setExpand(false)
            }
        }
        window.addEventListener('click', listener)
        return () => window.removeEventListener('click', listener)
    }, [])

    return (
        <div className={`${expand ? 'z-[999]' : 'z-[1]'} absolute right-0 flex justify-center items-start gap-1 min-h-full mt-3`}>
            {/* Icon */}
            <div ref={buttonRef}>
                <div className="pointer-events-auto">
                    <button
                        onClick={() => setExpand(!expand)}
                        className="flex items-center justify-center rounded-full h-12 w-12 hover:bg-[#ddd] active:bg-[#ddd] focus:bg-[#ddd]"
                    >
                        <span className="inline-block w-6 h-6">
                            <AiOutlineMore className="w-full h-full text-2xl" />
                        </span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div
                className={`${expand ? '' : 'relative overflow-hidden'} pointer-events-auto`}
            >

                <div
                    ref={expandBoxRef}
                    className={`${expand ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} absolute flex flex-col text-left rounded-lg shadow-xCom py-2 z-[2] top-1/2 right-0 left-auto bg-white`}>

                    <button>Udostepnij listę</button>
                    <button>Usuń listę</button>

                </div>
            </div>
        </div>
    )
}

type Props = {
    item: PurchaseList
}

export const ListCard = ({ item }: Props) => {
    const { Id, Name, createdAt, updateAt, WebUrl, ProductItems, TotalPrice } = item


    return (
        <div className='relative mt-4'>
            <ExpandActionList id={Id} />


            <Link
                href={`${WebUrl}`}
                className='flex flex-col rounded-lg shadow-sm-xCom p-4 min-h-[50px] md:py-4 md:px-6 hover:shadow-xCom transition-shadow duration-200'
            >
                {/* ListName & ListLastChange */}
                <div className='pr-12 mb-4'>
                    <h2 title='Ulubiona' className='mb-1 text-lg font-bold break-words'>
                        {Name}
                    </h2>

                    <div className='text-[#707070]'>
                        Przed chwilą (ostatnia zmiana)
                    </div>
                </div>

                {/* Lista jest Pusta */}
                {ProductItems?.length! > 0 ? (
                    <>
                        <div>
                            <div className='relative top-0 left-0 right-0 w-full overflow-hidden'>
                                {ProductItems?.map(product => (

                                    <div key={product.Id} className='inline-flex flex-wrap items-center justify-center w-[72px] h-[60px] mr-3'>
                                        <span className='inline-flex items-center justify-center m-1 max-w-full max-h-full w-[calc(100%-8px)] h-[calc(100%-8px)]'>
                                            <Image
                                                src={urlFor(product.MainPhoto).url()}
                                                alt={product.Name}
                                                title={product.Name}
                                                loading='lazy'
                                                className='w-full h-auto max-w-full max-h-full'
                                                width={64}
                                                height={52}
                                            />
                                        </span>
                                    </div>

                                ))}
                            </div>
                        </div>

                        <p>{TotalPrice.toFixed(2).replace('.', ',')} zł</p>
                    </>
                ) : (
                    <div className='flex items-center -mt-2'>
                        <span className='inline-block w-6 h-6'>
                            <IoMdHeartEmpty className='w-full h-full mr-3 text-2xl' />
                        </span>

                        <p>
                            Lista jest pusta - dodaj produkty
                        </p>
                    </div>

                )}


                {/* ??? */}
                <div></div>

            </Link >
        </div >
    )
}

