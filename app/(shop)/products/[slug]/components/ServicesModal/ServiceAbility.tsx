'use client'

import { Modal, ModalBody, ModalContainer, ModalHeader } from '@/components/Modal'
import { Image as ImageData } from '@/types/typings'

import React, { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { ServiceBodyBottom, ServiceBodyHead, ServiceBtn } from './Services'


const abilityData = {
    title: 'Dostępność produktu',
    icon: <AiOutlineCheckCircle className='w-full h-full' />,
    status: 'Dostępny',
    text: 'Dowiedz się więcej',
}

type Props = {
    productImg: ImageData
    productTitle: string
}

const ServiceAbility = ({ productImg, productTitle }: Props) => {
    const [showModal, setShowModal] = useState(false)

    const { title, icon, status, text } = abilityData


    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleHideModal = () => {
        setShowModal(false)
    }


    return (
        <div className='w-full hover:bg-gray-100 max-md:border max-md:border-[#ddd] max-md:border-b-[transparent] max-md:rounded-t-lg md:border-0 md:border-b md:border-b-[transparent] group
        '>

            <ServiceBtn onClick={() => handleShowModal()} icon={icon} status={status} text={text || ''} />

            <ModalContainer openModal={showModal}>

                {showModal ? (

                    <Modal close={() => handleHideModal()}>
                        <ModalHeader title={title} close={() => handleHideModal()} />

                        <ModalBody>

                            <div>
                                {/* Product Image with title */}
                                <div className='m-6 mt-0'>
                                    <ServiceBodyHead image={productImg} title={productTitle} />

                                    <div className='text-[18px]/6 font-bold mb-2 text-green-600'>Dostępny</div>

                                    <p className='text-[#4d4d4d]'>Produkty wyślemy zgodnie ze sposobem dostawy, który wybierasz.</p>
                                </div>

                                {/* <div className='pb-[1px] border-y border-[#ddd]'>
                                    <div className='w-full pl-2'>
                                    </div>
                                    <div className='w-full pl-2'>
                                    </div>
                                </div> */}
                            </div>
                            <ServiceBodyBottom onClick={() => handleHideModal()} />

                        </ModalBody>

                    </Modal>

                ) : null
                }
            </ModalContainer>
        </div>
    )
}

export default ServiceAbility