import { ReactNode, useEffect, useState } from 'react'
import { GrClose } from 'react-icons/gr'

const PopperContainer = ({ children, show }: { children: ReactNode, show: boolean }) => {

    return (
        <div className={`relative pointer-events-auto z-[1000] ${show ? 'overflow-visible' : 'overflow-hidden'}`}>

            <div className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 lg:[&:nth-child(2n+2)]:bg-red-500  [&:nth-child(3n+3)]:right-0 [&:nth-child(3n+3)]:translate-x-0 max-w-[328px] flex flex-col py-3 bg-white text-left rounded-lg shadow-xCom cursor-auto z-[998] ${show ? 'opacity-100' : 'opacity-0'}`}>

                <div className='flex flex-col items-start w-[328px] z-[100]'>
                    {children}
                </div>

                {/* After */}
                <div
                    className='absolute top-[2px] left-[50.7%] w-[18px] h-[18px] bg-white z-[3] -translate-x-1/2 -translate-y-1/2 rotate-45 skew-x-12 skew-y-12 shadow-[-2px_-2px_2px_rgba(0,0,0,0.08)]'
                />

            </div>
        </div>
    )
}

const PopperBody = ({ close }: { close: () => void }) => {

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
                    <span className="inline-block w-5 h-5 text-center">
                        <GrClose className="w-full h-full text-xl" />
                    </span>
                </span>
            </button>

            <p className="text-[#4d4d4d] px-6 whitespace-normal">
                Zaloguj się, żeby zapisać swoje listy i mieć do nich dostęp na wszystkich urządzeniach.
            </p>
        </div>
    )
}

export const AddToFavPopper = ({ show, close }: { show: boolean, close: () => void }) => {
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        setIsShow(show)
    }, [show])

    const handleCloseModal = () => {
        setIsShow(false)
        close()
    }

    return (
        <PopperContainer show={isShow}>
            <PopperBody close={() => handleCloseModal()} />
        </PopperContainer>
    )
}