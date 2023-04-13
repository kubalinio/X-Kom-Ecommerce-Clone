'use client'

import { Modal, ModalBody, ModalContainer, ModalHeader } from "@/app/components/Modal"
import { Image as ImageData } from "@/typings"
import { useState } from "react"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { ServiceBodyBottom, ServiceBodyHead, ServiceBtn } from "./Services"


const deliveryTimeData = {
    title: 'Terminy Dostawy',
    icon: <AiOutlineCheckCircle className='w-full h-full' />,
    status: 'Kup teraz, otrzymasz jutro',
    text: 'Zapłać do 12:00',
}

type Props = {
    productImg: ImageData
    productTitle: string
}

const ServiceDeliveryTime = ({ productImg, productTitle }: Props) => {
    const [showModal, setShowModal] = useState(false)

    const { title, icon, status, text } = deliveryTimeData


    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleHideModal = () => {
        setShowModal(false)
    }

    return (
        <div className='w-full hover:bg-gray-100 max-md:border max-md:border-[#ddd] max-md:border-b-[transparent]'>

            <ServiceBtn onClick={() => handleShowModal()} icon={icon} status={status} text={text || ''} />

            <ModalContainer openModal={showModal}>

                {showModal ? (

                    <Modal close={() => handleHideModal()}>
                        <ModalHeader title={title} close={() => handleHideModal()} />

                        <ModalBody>

                            <div className='px-4 xsm:px-6'>
                                <ServiceBodyHead image={productImg} title={productTitle} />

                                {/* Body */}
                                <div>
                                    <h2 className='mt-5 mb-3 text-[18px]/6 font-bold  text-green-600'>
                                        Kup teraz, otrzymasz jutro
                                    </h2>
                                    {/* Dynami counter to 16:00 */}
                                    <p>Termin realizacji może ulec zmianie, jeśli:</p>

                                    <ul className='pl-8 list-disc marker:bg-blue-600'>
                                        <li className='pl-2 my-2'>
                                            Skorzystasz z dodatkowych usług (wniesienie lub montaż)
                                        </li>
                                        <li className='pl-2 my-2'>
                                            Zamówienie obejmuje produkty z dłuższym czasem realizacji zamówienia - wysyłka następuje po skompletowaniu całego zamówienia
                                        </li>
                                        <li className='pl-2 my-2'>
                                            Jako formę płatności wybierzesz przelew lub raty - wysyłka następuje po otrzymaniu przez nas płatności na konto lub informacji o przyznaniu kredytu ratalnego
                                        </li>
                                        <li className='pl-2 my-2'>
                                            Dodasz uwagi do zamówienia
                                        </li>
                                        <li className='pl-2 my-2'>
                                            Zamówienie obejmuje produkty wielkogabarytowe, które wymagają szczególnej obsługi z uwagi na nietypowy rozmiar i konieczność dodatkowego zabezpieczenia towaru na czas transportu
                                        </li>
                                    </ul>

                                </div>
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

export default ServiceDeliveryTime