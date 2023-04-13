import { urlFor } from '@/lib/sanity.client';
import { Image as ImageData } from '@/typings';
import Image from 'next/image';
import React, { ReactNode } from 'react'

import ServiceAbility from './ServiceAbility';
import ServiceCalculate from './ServiceCalculate';
import ServiceDeliveryCost from './ServiceDeliveryCost';
import ServiceDeliveryTime from './ServiceDeliveryTime';
import ServiceShowrooms from './ServiceShowrooms';


const Icon = ({ icon }: { icon: ReactNode }) => <span className='inline-block h-[24px] w-[24px] first:text-[20px] first:text-gray-600'>{icon}</span>;


export const ServiceBodyHead = ({ image, title }: { image: ImageData, title: string }) => {

    return (
        <div className='flex items-center mb-4'>
            <span className='inline-flex items-center justify-center h-[72px] w-[66px]'>
                <Image src={`${urlFor(image).url()}`} width={72} height={60} alt={title || 'Image Error'} loading='lazy' className='object-contain w-full h-full' />
            </span>
            <div className='ml-4'>{title}</div>
        </div>
    )
}

export const ServiceBodyBottom = ({ onClick }: { onClick: () => void }) => {

    return (
        <div className='flex items-center justify-center'>
            <button
                onClick={() => onClick()}
                className='inline-flex items-center justify-center w-[164px] h-[32px] bg-white border border-[#4d4d4d] rounded-full py-4 px-2 my-4 mx-auto sm:my-6 transition-colors duration-200 hover:border-blue-500 focus:border-blue-600 hover:text-blue-500 focus:text-blue-600'
            >
                <span>
                    Zamknij okno
                </span>
            </button>
        </div>
    )
}

type BtnProps = {
    icon: ReactNode
    status: string
    text?: string
    onClick: () => void
}

export const ServiceBtn = ({ icon, status, text, onClick }: BtnProps) => {

    return (
        <button onClick={() => onClick()} className='flex items-center w-full text-[#4d4d4d] text-left '>
            <span className='flex items-center justify-center w-[56px] md:border-t md:border-t-transparent md:group-first:border-none '>
                <Icon icon={icon} />
            </span>

            <span className='block w-full py-[10px] group-first:md:border-none md:border-t md:border-t-[#ddd] 
            '>


                <span className='block'>{status}</span>
                {text ? (
                    <span className='block text-gray-500/90 text-ellipsis whitespace-nowrap'>{text}</span>
                ) : ''
                }
            </span>
        </button>)
}


type Props = {
    productTitle: string
    productMainImage: ImageData
}

const Services = ({ productTitle, productMainImage }: Props) => {

    return (

        //   Container
        <div className='md:border-t md:border-[#ddd]'>

            <ServiceAbility productImg={productMainImage} productTitle={productTitle} />
            <ServiceDeliveryTime productImg={productMainImage} productTitle={productTitle} />
            <ServiceDeliveryCost productImg={productMainImage} productTitle={productTitle} />
            <ServiceCalculate productImg={productMainImage} productTitle={productTitle} />
            <ServiceShowrooms productImg={productMainImage} productTitle={productTitle} />

        </div>


    )
}

export default Services



