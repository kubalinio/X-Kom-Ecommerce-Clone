'use client'

import { urlFor } from '@/lib/sanity.client';
import { Product } from '@/typings';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdHeartEmpty } from 'react-icons/io'
import { MdOutlineAddShoppingCart, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useDispatch } from 'react-redux'
import { addToBasket, getTotals } from '@/store/basketSlice';
import { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalContainer, ModalHeader } from '../Modal';
import { AiOutlineCheck } from 'react-icons/ai';
import ProductAddedToBasket from '../ProductAddedToBasket';
import { AddToBasket } from './AddToBasket';


// const ProductEvent = () => ()

// const ProductFav = () => ()

// const dispatch = useDispatch()
//    

//     useEffect(() => {
//         dispatch(getTotals())
// }, [basket, dispatch])


export const ProductCard = ({ _id, slug, special, mainImage, title, price }: Product) => {

    const currentSlug = slug.current
    const formatedPrice = price.toFixed(2).replace('.', ',')


    return (
        <div className='relative rounded-lg cursor-pointer lg:duration-300 group lg:border lg:border-transparent lg:hover:shadow-xCom lg:hover:scale-105 lg:transition-all'>

            {/* Promotion or Recommend */}
            {special ?
                <div className='absolute left-0 w-full h-5 lg:top-3 lg:pl-3'>
                    <span className='inline-flex h-5 text-sm items-center text-[#4d4d4d] max-w-[70%] whitespace-nowrap bg-white px-2 py-[2px] rounded-full border border-[#ccc]'>
                        {special}
                    </span>
                </div> : ''}
            {/* Details */}
            <div className='pointer'>
                <div>
                    {/* Image */}
                    <div className='w-full h-[125px] mt-7 lg:mt-8 lg:h-[130px]'>
                        <div className='w-full h-full mt-4'>
                            <Link href={`/products/${currentSlug}`}>
                                <div className='inline-flex items-center justify-center w-full h-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] max-h-[125px]'>
                                    <Image
                                        src={`${urlFor(mainImage).url()}`}
                                        width={136}
                                        height={125}
                                        alt={title}
                                        className='object-contain w-full h-full'
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Title */}
                    <div className='mr-2 md:mx-3'>
                        <Link href={`/products/${currentSlug}`}>
                            <h3 style={{ maxHeight: '40px' }} className='mt-2 text-sm overflow-hidden break-words whitespace-normal h-[40px] max-h-10 lg:mt-0'>
                                <span className='w-full line-clamp-2'>
                                    {title}
                                </span>
                            </h3>
                        </Link>
                    </div>

                    {/* Price */}
                    <div className='flex items-end mt-1 h-9 md:mx-3 lg:mt-1 lg:mb-2'>
                        <div>
                            <div className='inline-block text-left'>
                                <span className='block whitespace-nowrap'>
                                    {formatedPrice} zł
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fav */}
            <div className='absolute hidden transition-all duration-300 top-1 right-1 lg:group-hover:block lg:top-3 lg:right-3'>
                <div className='transition duration-300 lg:flex lg:w-8 lg:h-8 '>
                    <div className='inline-block pointer-events-auto z-[1]'>
                        {/* Fav Component to Add List Favorited products */}
                        <div>
                            <button className='flex items-center justify-center w-8 h-8 bg-white rounded-full cursor-pointer select-none z-5 hover:bg-[#ddd] transition duration-300'>
                                <span className='inline-block w-5 h-5 overflow-hidden'>
                                    <IoMdHeartEmpty className='w-full h-full' />
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Basket */}
            {/* OnClick show Modal with choose product & info where is save to basket */}
            <AddToBasket
                _id={_id}
                slug={slug}
                special={special}
                mainImage={mainImage}
                title={title}
                price={price}
            />

        </div>
    )
}