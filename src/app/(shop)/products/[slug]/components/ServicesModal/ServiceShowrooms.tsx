import { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

import { Modal, ModalBody, ModalContainer, ModalHeader } from '@/components/Modal'
import { Image as ImageData } from '@/types/typings'

import { ServiceBodyBottom, ServiceBodyHead, ServiceBtn } from './Services'

const ShowroomsData = {
  title: 'Dostępność w salonach',
  icon: <AiOutlineCheckCircle className="h-full w-full" />,
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
    <div className="w-full rounded-b-lg border-[#ddd] hover:bg-gray-100 max-md:border">
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

export default ServiceShowrooms
