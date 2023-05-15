
import { PurchaseList } from '@/types/typings'
import { urlFor } from '@/lib/sanity.client'
import { useQueryClient } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { AiOutlineMore } from 'react-icons/ai'
import { IoMdHeartEmpty } from 'react-icons/io'
import { RiDeleteBinLine, RiShareForwardLine } from 'react-icons/ri'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { removePurchaseListItem } from '@/store/purchaseSlice'
import { ExpandDropdownList } from '../../ExpandDropdownList'
import DeleteListBtn from '../../Buttons/DeleteListBtn'
import ShareListBtn from '../../Buttons/ShareListBtn'

type BtnProps = {
    action: string
    id: string
}

type Props = {
    item: PurchaseList
}

export const ListCard = ({ item }: Props) => {
    const { Id, Name, createdAt, updateAt, WebUrl, ProductItems, TotalPrice } = item


    return (
        <div className='relative mt-4'>
            {/* <ExpandActionList id={Id} /> */}

            <ExpandDropdownList className='absolute right-2 top-2' >
                <ShareListBtn version='mobile' id={Id} />

                <DeleteListBtn version='mobile' id={Id} />

            </ExpandDropdownList>


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

