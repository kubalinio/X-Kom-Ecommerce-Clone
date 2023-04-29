import React, { useEffect, useRef } from 'react'
import { GrClose } from 'react-icons/gr'

export const AddToFavModal = ({ close }: { close: () => void }) => {

    const modalRef = useRef<HTMLDivElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const listener = (e: MouseEvent) => {
            if (!modalRef.current?.contains(e.target as Node) && overlayRef.current?.contains(e.target as Node)) {
                close()
            }
        }
        window.addEventListener('click', listener)
        return () => window.removeEventListener('click', listener)
    }, [])

    return (

        <div
            ref={overlayRef}
            className="z-[1000] fixed flex items-center justify-center inset-0 overflow-auto bg-black/50 sm:py-8">

            <div
                ref={modalRef}
                className='z-[1001] relative flex flex-col bg-white overflow-hidden w-[calc(100%-48px)] max-w-[328px] rounded-lg min-h-[116px] max-h-[calc(100%-48px)]'
            >

                <div className='flex flex-col max-w-[328px] max-h-full'>

                    <div className='static flex justify-between px-6 pt-5 pb-3'>

                        <h3 title="Zapisz na liście" className="inline-flex items-center font-bold text-lg/6">
                            Zapisz na liście
                        </h3>

                        <button
                            onClick={() => close()}
                            className='flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#f5f5f5]'
                        >
                            <span className="flex justify-center w-full">
                                <span className="inline-block w-5 h-5 text-center">
                                    <GrClose className="w-full h-full text-xl" />
                                </span>
                            </span>
                        </button>
                    </div>


                    <div className='text-[#4d4d4d] px-6 pb-6'>
                        Zaloguj się, żeby zapisać swoje listy i mieć do nich dostęp na wszystkich urządzeniach.
                    </div>

                </div>
            </div>
        </div>
    )
}
