import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineCheck } from 'react-icons/ai'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { Modal, ModalBody, ModalContainer, ModalHeader } from './Modal'

const ModalBasketBottom = ({ close }: { close: () => void }) => {
  return (
    <div className="flex items-end justify-between border-t border-[#ddd] bg-[#f5f5f5] px-4 py-2 sm:rounded-b-lg md:p-4 md:pr-6">
      <button
        onClick={() => close()}
        className="flex w-auto items-center justify-center rounded-full bg-transparent py-3 pl-2 pr-[5vw] text-[#4d4d4d] transition-colors duration-200 hover:text-black sm:p-2 sm:pr-4"
      >
        <span className="inline-block h-[24px] w-[24px]">
          <MdOutlineKeyboardArrowLeft className="h-full w-full text-2xl" />
        </span>

        <div className="sm:hidden">Wróć</div>
        <div className="hidden sm:block">Wróć do zakupów</div>
      </button>

      <Link
        href="/koszyk"
        className="flex h-[48px] w-auto grow-[unset] items-center justify-center rounded-full bg-[#119e00] py-2 pl-[22px] pr-[28px] text-white transition-colors duration-300  hover:bg-[#1f8014] focus:bg-[#1c7213] md:h-[40px] "
        title="Przejdź do koszyka"
        onClick={() => close()}
      >
        Przejdź do koszyka
        <span className="inline-block h-[24px] w-[24px]">
          <MdOutlineKeyboardArrowRight className="h-full w-full text-2xl" />
        </span>
      </Link>
    </div>
  )
}

type Props = {
  title: string
  price: number
  mainImage: string
  closeModal: () => void
  showed: boolean
}

const ProductAddedToBasket = ({ title, price, mainImage, closeModal, showed }: Props) => {
  return (
    <ModalContainer openModal={showed}>
      <Modal close={() => closeModal()}>
        <ModalHeader title={'Produkt dodany do koszyka'} close={() => closeModal()}>
          <div className="h-[24px]">
            <span className="inline-block h-[24px] w-[24px] text-green-500">
              <AiOutlineCheck className="h-full w-full text-2xl" />
            </span>
          </div>
        </ModalHeader>

        {/* Temporary */}
        <div className="grow bg-[#ddd] sm:hidden" />

        <ModalBody>
          {/* mainImage */}
          <div className="sm:mt-7">
            <div className="h-full p-4 md:px-6">
              <div className="flex">
                {/* Image */}
                <div className="pr-2">
                  <span className="inline-flex w-[108px] items-center justify-center overflow-hidden">
                    <Image
                      src={mainImage}
                      width={108}
                      height={93}
                      alt={title}
                      loading="lazy"
                      className="h-auto w-full object-contain"
                    />
                  </span>
                </div>

                {/* Title Price */}
                <div className="flex w-[calc(100%-116px)] items-center">
                  <div className="w-full">
                    <div className="mb-2 w-full text-[16px]/6">{title}</div>

                    <div className="flex flex-col items-baseline text-[14px]/5 text-[#4d4d4d]">
                      {/* Prev Price */}
                      {/* <div>PrevPrice</div> */}
                      {price.toFixed(2).replace('.', ',')} zł
                    </div>
                  </div>
                </div>

                {/* <div className='w-full h-[32px] bg-[#f5f5f5] border-y border-[#ddd] sm:border-t-0 sm:h-0' /> */}

                {/* @TODO Recommend Section */}
              </div>
            </div>
          </div>
        </ModalBody>

        <div className="grow bg-[#ddd] sm:hidden" />

        <ModalBasketBottom close={() => closeModal()} />
      </Modal>
    </ModalContainer>
  )
}

export default ProductAddedToBasket
