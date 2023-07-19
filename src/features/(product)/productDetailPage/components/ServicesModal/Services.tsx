import Image from 'next/image'
import { ReactNode } from 'react'

import ServiceAbility from './ServiceAbility'
import ServiceCalculate from './ServiceCalculate'
import ServiceDeliveryCost from './ServiceDeliveryCost'
import ServiceDeliveryTime from './ServiceDeliveryTime'
import ServiceShowrooms from './ServiceShowrooms'

const Icon = ({ icon }: { icon: ReactNode }) => (
  <span className="inline-block h-[24px] w-[24px] first:text-[20px] first:text-gray-600">{icon}</span>
)

export const ServiceBodyHead = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="mb-4 flex items-center">
      <span className="inline-flex h-[72px] w-[66px] items-center justify-center">
        <Image
          src={image}
          width={72}
          height={60}
          alt={title || 'Image Error'}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </span>
      <div className="ml-4">{title}</div>
    </div>
  )
}

export const ServiceBodyBottom = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => onClick()}
        className="mx-auto my-4 inline-flex h-[32px] w-[164px] items-center justify-center rounded-full border border-[#4d4d4d] bg-white px-2 py-4 transition-colors duration-200 hover:border-blue-500 hover:text-blue-500 focus:border-blue-600 focus:text-blue-600 sm:my-6"
      >
        <span>Zamknij okno</span>
      </button>
    </div>
  )
}

type BtnProps = {
  icon: ReactNode
  status: string
  text?: string
  onClick: () => void
}

export const ServiceBtn = ({ icon, status, text, onClick }: BtnProps) => {
  return (
    <button onClick={() => onClick()} className="flex w-full items-center text-left text-[#4d4d4d] ">
      <span className="flex w-[56px] items-center justify-center md:border-t md:border-t-transparent md:group-first:border-none ">
        <Icon icon={icon} />
      </span>

      <span
        className="block w-full py-[10px] md:border-t md:border-t-[#ddd] group-first:md:border-none 
            "
      >
        <span className="block">{status}</span>
        {text ? <span className="block text-ellipsis whitespace-nowrap text-gray-500/90">{text}</span> : ''}
      </span>
    </button>
  )
}

type Props = {
  productTitle: string
  productMainImage: string
}

export const Services = ({ productTitle, productMainImage }: Props) => {
  return (
    //   Container
    <div className="md:border-t md:border-[#ddd]">
      <ServiceAbility productImg={productMainImage} productTitle={productTitle} />
      <ServiceDeliveryTime productImg={productMainImage} productTitle={productTitle} />
      <ServiceDeliveryCost productImg={productMainImage} productTitle={productTitle} />
      <ServiceCalculate productImg={productMainImage} productTitle={productTitle} />
      <ServiceShowrooms productImg={productMainImage} productTitle={productTitle} />
    </div>
  )
}
