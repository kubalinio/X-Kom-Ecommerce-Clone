import { Modal, ModalBody, ModalContainer, ModalHeader } from '@/app/components/Modal';
import { urlFor } from '@/lib/sanity.client';
import { Image as ImageData } from '@/typings';
import Image from 'next/image';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';

type productProps =
    {
        title: string,
        image: ImageData,
        show?: {
            showModal: boolean
            setShowModal: Dispatch<SetStateAction<boolean>>
        },
        currentActive?: {
            currentModal: string
            setCurrentModal: Dispatch<SetStateAction<string>>
        }
    } | null

const ProductModalContext = createContext<productProps>(null)

const Icon = ({ icon }: { icon: ReactNode }) => <span className='inline-block h-[24px] w-[24px] first:text-[20px] first:text-gray-600'>{icon}</span>;

const ServiceAbility = () => {


    return (
        <>
            <div>
                {/* Product Image with title */}
                <div className='m-6 mt-0'>
                    <ServiceBodyHead />

                    <div className='text-[18px]/6 font-bold mb-2 text-green-600'>Dostępny</div>

                    <p className='text-[#4d4d4d]'>Produkty wyślemy zgodnie ze sposobem dostawy, który wybierasz.</p>
                </div>

                <div className='pb-[1px] border-y border-[#ddd]'>
                    <div className='w-full pl-2'>
                        {ServicesData.slice(1, 2).map(service => (
                            <ServiceBtn
                                key={service.title + Math.random()}
                                icon={service.icon}
                                status={'Sprawdź termin dostawy'}
                                title={service.title}
                            />
                        ))}
                    </div>
                    <div className='w-full pl-2'>
                        {ServicesData.slice(4, 5).map(service => (
                            <ServiceBtn
                                key={service.title + Math.random()}
                                icon={service.icon}
                                status={'Sprawdź dostępność w salonach'}
                                title={service.title}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <ServiceBodyBottom />

        </>
    )
}

const DeliveryTime = () => {

    return (
        <>
            <div className='px-4 xsm:px-6'>
                <ServiceBodyHead />

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
            <ServiceBodyBottom />
        </>
    )
}

// To Build
const DeliveryCost = () => {

    return (
        <>
            <ServiceBodyHead />

            <div>Body</div>

            <ServiceBodyBottom />
        </>
    )
}

// To Build
const CalculateInstallMent = () => {

    return (
        <>
            <ServiceBodyHead />

            <div>Body</div>

            <ServiceBodyBottom />
        </>
    )
}

// To Build
const AvailableShowrooms = () => {

    return (
        <>
            <ServiceBodyHead />

            <div>Body</div>

            <ServiceBodyBottom />
        </>
    )
}


const ServicesData = [
    {
        title: 'Dostępność produktu',
        icon: <AiOutlineCheckCircle className='w-full h-full' />,
        status: 'Dostępny',
        text: 'Dowiedz się więcej',
        body: <ServiceAbility />
    },

    {
        title: 'Terminy Dostawy',
        icon: <AiOutlineCheckCircle className='w-full h-full' />,
        status: 'Kup teraz, otrzymasz jutro',
        text: 'Zapłać do 12:00',
        body: <DeliveryTime />
    },

    {
        title: 'Koszt Dostawy',
        icon: <AiOutlineCheckCircle className='w-full h-full' />,
        status: 'Darmowa dostawa',
        text: 'Sprawdź szczegóły',
        body: <DeliveryCost />
    },
    {
        title: 'Oblicz ratę',
        icon: <AiOutlineCheckCircle className='w-full h-full' />,
        status: 'Rata tylko za 132,22 zł',
        text: 'Oblicz ratę',
        body: <CalculateInstallMent />
    },
    {
        title: 'Dostępność w salonach',
        icon: <AiOutlineCheckCircle className='w-full h-full' />,
        status: 'Dostępny w salonach',
        text: 'Wybierz salon',
        body: <AvailableShowrooms />
    },

]

const ServiceBodyHead = () => {
    const modal = useContext(ProductModalContext)

    return (
        <div className='flex items-center mb-4'>
            <span className='inline-flex items-center justify-center h-[72px] w-[66px]'>
                <Image src={`${urlFor(modal?.image).url()}`} width={72} height={60} alt={modal?.title || 'Image Error'} loading='lazy' className='object-contain w-full h-full' />
            </span>
            <div className='ml-4'>{modal?.title}</div>
        </div>
    )
}

const ServiceBodyBottom = () => {

    const modal = useContext(ProductModalContext)


    const { setShowModal } = modal?.show!

    return (
        <div className='flex items-center justify-center'>
            <button
                onClick={() => setShowModal(false)}
                className='inline-flex items-center justify-center w-[164px] h-[32px] bg-white border border-[#4d4d4d] rounded-full py-4 px-2 my-4 mx-auto sm:my-6 transition-colors duration-200 hover:border-blue-500 focus:border-blue-600 hover:text-blue-500 focus:text-blue-600'
            >
                <span>
                    Zamknij okno
                </span>
            </button>
        </div>
    )
}

type BtnProps = {
    icon: ReactNode
    status: string
    text?: string
    title: string

}

const ServiceBtn = ({ icon, status, text, title }: BtnProps) => {
    const modal = useContext(ProductModalContext)
    const { setShowModal } = modal?.show!
    const { setCurrentModal } = modal?.currentActive!

    const handleActive = () => {
        setShowModal(true)
        setCurrentModal(title)
    }


    return (
        <button onClick={handleActive} className='flex items-center w-full text-[#4d4d4d] text-left'>
            <span className='flex items-center justify-center w-[56px]'>
                <Icon icon={icon} />
            </span>
            <span className='block w-full py-[10px]'>
                <span className='block'>{status}</span>
                {text ? (
                    <span className='block text-gray-500/90 text-ellipsis whitespace-nowrap'>{text}</span>
                ) : ''
                }
            </span>
        </button>)
}

type ServiceProps = {
    title: string
    icon: ReactNode
    status: string
    text?: string
    body: JSX.Element
}

const Service = ({ title, icon, status, text, body }: ServiceProps) => {

    const modal = useContext(ProductModalContext)
    const { showModal, setShowModal } = modal?.show!
    const { currentModal, setCurrentModal } = modal?.currentActive!

    return (
        <>
            <ServiceBtn icon={icon} status={status} text={text || ''} title={title} />

            <ModalContainer openModal={showModal}>

                {showModal && currentModal === title ? (

                    <Modal close={() => setShowModal(false)}>
                        <ModalHeader title={title} close={() => setShowModal(false)} />

                        <ModalBody>

                            {body}

                        </ModalBody>

                    </Modal>

                ) : null}
            </ModalContainer>

        </>
    )
}



type Props = {
    productTitle: string
    productMainImage: ImageData
}

const Services = ({ productTitle, productMainImage }: Props) => {
    const [showModal, setShowModal] = useState(false)
    const [currentModal, setCurrentModal] = useState('')


    const modal = {
        title: productTitle,
        image: productMainImage,
        show: {
            showModal,
            setShowModal
        },
        currentActive: {
            currentModal,
            setCurrentModal
        }
    }

    return (

        <ProductModalContext.Provider value={modal}>
            <div className='md:border-t md:border-[#ddd]'>

                {ServicesData.map(service => (

                    <div key={service.title + Math.random()} className='w-full border border-[#ddd] first:rounded-t-lg md:first:border-none m'>

                        <Service
                            title={service.title}
                            icon={service.icon}
                            status={service.status}
                            text={service.text}
                            body={service.body}
                        />

                    </div>

                ))}

            </div>
        </ProductModalContext.Provider>

    )
}

export default Services



