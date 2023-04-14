import { Modal, ModalBody, ModalContainer, ModalHeader } from "@/app/components/Modal"
import { Image as ImageData } from "@/typings"
import { useState } from "react"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { ServiceBodyBottom, ServiceBodyHead, ServiceBtn } from "./Services"


const ShowroomsData = {
    title: 'Dostępność w salonach',
    icon: <AiOutlineCheckCircle className='w-full h-full' />,
    status: 'Dostępny w salonach',
    text: 'Wybierz salon',
}

type Props = {
    productImg: ImageData
    productTitle: string
}

const ServiceShowrooms = ({ productImg, productTitle }: Props) => {
    const [showModal, setShowModal] = useState(false)

    const { title, icon, status, text } = ShowroomsData

    return (
        <div className='w-full hover:bg-gray-100 max-md:border border-[#ddd] rounded-b-lg'>

            <ServiceBtn onClick={() => setShowModal(true)} icon={icon} status={status} text={text || ''} />

            <ModalContainer openModal={showModal}>

                {showModal ? (

                    <Modal close={() => setShowModal(false)}>
                        <ModalHeader title={title} close={() => setShowModal(false)} />

                        <ModalBody>

                            <ServiceBodyHead image={productImg} title={productTitle} />

                            <div>Body</div>

                            <ServiceBodyBottom onClick={() => setShowModal(false)} />

                        </ModalBody>

                    </Modal>

                ) : null
                }
            </ModalContainer>


        </div >
    )
}

export default ServiceShowrooms