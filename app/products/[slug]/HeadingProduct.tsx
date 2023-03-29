import Link from 'next/link'
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'

type Props = {
    title: string
}

const ProductReviews = () => (
    <div className='flex flex-col gap-[5px] items-start'>
        <Link href='#Opinie' className='flex items-center gap-[2px] text-[#707070]'>

            <span className='inline-flex items-center justify-center overflow-hidden h-[14px] w-[14px] text-yellow-300'>
                <BsFillStarFill className='h-full w-full text-[12px]' />
            </span>
            <span className='inline-flex items-center justify-center overflow-hidden h-[14px] w-[14px] text-yellow-300'>
                <BsFillStarFill className='h-full w-full text-[12px]' />
            </span>
            <span className='inline-flex items-center justify-center overflow-hidden h-[14px] w-[14px] text-yellow-300'>
                <BsFillStarFill className='h-full w-full text-[12px]' />
            </span>
            <span className='inline-flex items-center justify-center overflow-hidden h-[14px] w-[14px] text-yellow-300'>
                <BsFillStarFill className='h-full w-full text-[12px]' />
            </span>
            <span className='inline-flex items-center justify-center overflow-hidden h-[14px] w-[14px] text-gray-300'>
                <BsFillStarFill className='h-full w-full text-[12px]' />
            </span>
            <span className='inline-flex items-center justify-center overflow-hidden h-[14px] w-[14px] text-gray-300'>
                <BsFillStarFill className='h-full w-full text-[12px]' />
            </span>

            <span className='inline-flex items-center justify-center pl-1 font-bold'>(5 opinii)</span>
        </Link>
    </div>
)

const HeadingProduct = ({ title }: Props) => {
    return (
        <div className="flex w-full pb-4 break-words md:mt-6">

            <div className="w-full">
                {/* Title & Md:Reviews  */}
                <div className="flex flex-col w-full mb-1">

                    <h1 className="text-[18px] leading-6 md:text-[22px]/7 lg:text-[26px]/8 lg:inline">{title}</h1>

                    {/* Div z opiniamy od MD */}
                    <div>

                    </div>
                </div>

                {/* Reviews & Md: Producent Details */}
                <div className='flex flex-col items-start'>
                    {/* Reviews */}
                    <div>
                        <ProductReviews />
                    </div>

                    {/* Md: Product Details */}
                    <div>
                        <div className='hidden'>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeadingProduct