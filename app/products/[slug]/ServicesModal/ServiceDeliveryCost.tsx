import { Modal, ModalBody, ModalContainer, ModalHeader } from "@/app/components/Modal"
import { Image as ImageData } from "@/typings"
import { useState } from "react"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { ServiceBodyBottom, ServiceBodyHead, ServiceBtn } from "./Services"


const deliveryCostData = {
    title: 'Koszt Dostawy',
    icon: <AiOutlineCheckCircle className='w-full h-full' />,
    status: 'Darmowa dostawa',
    text: 'Sprawdź szczegóły'
}

type Props = {
    productImg: ImageData
    productTitle: string
}

const ServiceDeliveryCost = ({ productImg, productTitle }: Props) => {
    const [showModal, setShowModal] = useState(false)

    const { title, icon, status, text } = deliveryCostData

    return (
        <div className='w-full hover:bg-gray-100 border border-[#ddd] border-b-[transparent] md:border-none'>

            <ServiceBtn onClick={() => setShowModal(true)} icon={icon} status={status} text={text || ''} title={title} />

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


        </div>
    )
}

export default ServiceDeliveryCost