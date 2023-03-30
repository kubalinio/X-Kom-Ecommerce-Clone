import { urlFor } from '@/lib/sanity.client'
import { Image as ImageData } from '@/typings'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Modal, ModalBody, ModalContainer, ModalHeader } from './Modal'


const ModalBasketBottom = ({ close }: { close: () => void }) => {

    return (
        <div className='flex justify-between items-end px-4 py-2 sm:rounded-b-lg bg-[#f5f5f5] border-t border-[#ddd] md:p-4 md:pr-6'>
            <button
                onClick={() => close()}
                className='flex items-center justify-center w-auto bg-transparent rounded-full py-3 pl-2 pr-[5vw] sm:p-2 sm:pr-4 text-[#4d4d4d] hover:text-black transition-colors duration-200'
            >
                <span className='inline-block h-[24px] w-[24px]'>
                    <MdOutlineKeyboardArrowLeft className='w-full h-full text-2xl' />
                </span>

                <div className='sm:hidden'>Wróć</div>
                <div className='hidden sm:block'>Wróć do zakupów</div>
            </button>

            <Link
                href='/koszyk'
                className='flex grow-[unset] items-center justify-center w-auto h-[48px] md:h-[40px] py-2 pl-[22px] pr-[28px] rounded-full bg-[#119e00] text-white hover:bg-[#1f8014]  focus:bg-[#1c7213] transition-colors duration-300 '
                title='Przejdź do koszyka'
            >
                Przejdź do koszyka
                <span className='inline-block h-[24px] w-[24px]'>
                    <MdOutlineKeyboardArrowRight className='w-full h-full text-2xl' />
                </span>

            </Link>
        </div>
    )
}


type Props = {
    title: string
    price: number
    mainImage: ImageData
    closeModal: () => void
}

const ProductAddedToBasket = ({ title, price, mainImage, closeModal }: Props) => {

    return (
        <ModalContainer>
            <Modal close={() => closeModal()} >
                <ModalHeader title={'Produkt dodany do koszyka'} close={() => closeModal()} >
                    <div className='h-[24px]'>
                        <span className='inline-block h-[24px] w-[24px] text-green-500'>
                            <AiOutlineCheck className='w-full h-full text-2xl' />
                        </span>
                    </div>
                </ModalHeader>

                <ModalBody>
                    {/* mainImage */}
                    <div className='mt-7'>
                        <div className='h-full p-4 md:px-6'>
                            <div className='flex'>
                                {/* Image */}
                                <div className='pr-2'>
                                    <span className='inline-flex items-center justify-center w-[108px] overflow-hidden'>
                                        <Image
                                            src={urlFor(mainImage).url()}
                                            width={108}
                                            height={93}
                                            alt={title}
                                            loading='lazy'
                                            className='object-contain w-full h-auto'
                                        />
                                    </span>
                                </div>

                                {/* Title Price */}
                                <div className='flex items-center w-[calc(100%-116px)]'>
                                    <div className='w-full'>
                                        <div className='text-[16px]/6 mb-2 w-full'>
                                            {title}
                                        </div>

                                        <div className='flex items-baseline flex-col text-[14px]/5 text-[#4d4d4d]'>
                                            {/* Prev Price */}
                                            {/* <div>PrevPrice</div> */}
                                            {price.toFixed(2).replace('.', ',')} zł
                                        </div>
                                    </div>
                                </div>

                                {/* <div className='w-full h-[32px] bg-[#f5f5f5] border-y border-[#ddd] sm:border-t-0 sm:h-0' /> */}

                                {/* Recommend Section */}
                            </div>
                        </div>
                    </div>
                </ModalBody>

                <ModalBasketBottom close={() => closeModal()} />

            </Modal>
        </ModalContainer>
    )
}

export default ProductAddedToBasket