import { Modal, ModalContainer, ModalHeader } from '@/app/components/Modal';
import React, { ReactNode, useRef, useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';

type Props = {}

const Icon = ({ icon }: { icon: ReactNode }) => <span className='inline-block h-[24px] w-[24px] first:text-[20px] first:text-gray-600'>{icon}</span>;

// status
const ServiceData = {
    icon: <AiOutlineCheckCircle className='w-full h-full' />,
    status: 'Dostępny',
    text: 'Dowiedz się więcej',
}

const ServiceBtn = () => {
    const [showModal, setShowModal] = useState(false)


    return (
        <>
            <button onClick={() => setShowModal(true)} className='flex items-center w-full text-[#707070] text-left'>
                <span className='flex items-center justify-center w-[56px]'>
                    <Icon icon={ServiceData.icon} />
                </span>
                <span className='block w-full py-[10px]'>
                    <span className='block'>{ServiceData.status}</span>
                    <span className='block text-[#707070] text-ellipsis whitespace-nowrap'>{ServiceData.text}</span>
                </span>
            </button>

            <ModalContainer>
                {showModal ? (

                    <Modal close={() => setShowModal(false)}>

                        <ModalHeader title='Dostępność produktu' close={() => setShowModal(false)} />


                    </Modal>

                ) : null}
            </ModalContainer>

        </>
    )
}


const Services = (props: Props) => {
    return (
        <div className='md:border-t md:border-[#ddd]'>
            <div className='w-full border border-[#ddd] first:rounded-t-lg md:first:border-none'>
                <ServiceBtn />
            </div>
            <div className='w-full border border-[#ddd]'>
                <ServiceBtn />
            </div>
            <div className='w-full border border-[#ddd]'>
                <ServiceBtn />
            </div>
            <div className='w-full border border-[#ddd]'>
                <ServiceBtn />
            </div>
            <div className='w-full border border-[#ddd] last:rounded-b-lg md:last:border-none'>
                <ServiceBtn />
            </div>
        </div>
    )
}

export default Services