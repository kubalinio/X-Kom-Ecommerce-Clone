'use client'

import { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

import { Modal, ModalBody, ModalContainer, ModalHeader } from '@/features/shared/components/Modal'

import { ServiceBodyBottom, ServiceBodyHead, ServiceBtn } from './Services'

const deliveryCostData = {
  title: 'Koszt Dostawy',
  icon: <AiOutlineCheckCircle className="h-full w-full" />,
  status: 'Darmowa dostawa',
  text: 'Sprawdź szczegóły',
}

type Props = {
  productImg: string
  productTitle: string
}

const ServiceDeliveryCost = ({ productImg, productTitle }: Props) => {
  const [showModal, setShowModal] = useState(false)

  const { title, icon, status, text } = deliveryCostData

  return (
    <div className="w-full border border-[#ddd] border-b-[transparent] hover:bg-gray-100 md:border-none">
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
        ) : null}
      </ModalContainer>
    </div>
  )
}

export default ServiceDeliveryCost
