import { ReactNode, useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"

const ModalContainer = ({ children, show }: { children: ReactNode, show: boolean }) => {

    return (
        <div className={`relative pointer-events-auto z-[1000] ${show ? 'overflow-visible' : 'overflow-hidden'}`}>
            <div className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 lg:[&:nth-child(2n+2)]:bg-red-500  [&:nth-child(3n+3)]:right-0 [&:nth-child(3n+3)]:translate-x-0 max-w-[328px] flex flex-col py-3 bg-white text-left rounded-lg shadow-xCom cursor-auto z-[998] ${show ? 'opacity-100' : 'opacity-0'}`}>

                <div className='flex flex-col items-start w-[328px] z-[100]'>
                    {children}
                </div>

                {/* After */}
                <div />

            </div>
        </div>
    )
}

const ModalBody = ({ close }: { close: () => void }) => {

    return (
        <div className="w-full overflow-hidden whitespace-nowrap">
            <h2 title="Zapisz na liście" className="inline-flex mx-6 mt-2 mb-3 text-lg/6">
                Zapisz na liście
            </h2>

            <button
                onClick={() => close()}
                className='absolute top-2 right-4 flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#f5f5f5]'
            >
                <span className="flex justify-center w-full">
                    <span className="inline-block w-6 h-6 text-center">
                        <AiOutlineClose className="w-full h-full text-2xl" />
                    </span>
                </span>
            </button>

            <p className="text-[#4d4d4d] px-6 whitespace-normal">
                Zaloguj się, żeby zapisać swoje listy i mieć do nich dostęp na wszystkich urządzeniach.
            </p>
        </div>
    )
}

export const FavModal = ({ show, close }: { show: boolean, close: () => void }) => {
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        setIsShow(show)
    }, [show])

    const handleCloseModal = () => {
        setIsShow(false)
        close()
    }

    return (
        <ModalContainer show={isShow}>
            <ModalBody close={() => handleCloseModal()} />
        </ModalContainer>
    )
}