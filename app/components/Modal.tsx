'use client'

import { ReactNode, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowLeftSLine } from "react-icons/ri";

const Icon = ({ icon }: { icon: ReactNode }) => <span className='inline-flex items-center justify-center h-[30px] w-[30px] first:text-[30px] sm:first:text-[26px] first:text-gray-600'>{icon}</span>;

export const ModalContainer = ({ children }: { children: ReactNode }) => {
    const refPortal = useRef<Element | null>()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        refPortal.current = document.querySelector<HTMLElement>('#react-portals')
        setMounted(true)
    }, [])

    return (mounted && refPortal.current) ? createPortal(
        <div className="relative z-[1000]">
            {children}
        </div>, refPortal.current
    ) : null
}


type HeaderProps = {
    children?: ReactNode
    title: string
    close: () => void

}

export const ModalHeader = ({ children, title, close }: HeaderProps) => {

    return (
        <div className="z-[1001] fixed top-0 inline-flex items-center justify-between max-w-full w-full p-2 pr-4 min-h-[56px] rounded-none bg-[#f5f5f5] border-b border-[#ddd] sm:py-2 sm:pl-4 sm:pr-3 sm:min-h-[48px] sm:static sm:rounded-t-lg sm:max-w-[600px]">

            <div className="flex items-center w-full">

                <button
                    onClick={() => close()}
                    className="flex sm:hidden items-center justify-center w-[40px] h-[40px] rounded-full hover:bg-[#ddd] focus:bg-[#ddd]"
                >
                    <Icon icon={<RiArrowLeftSLine />} />
                </button>

                {children}

                {/* title */}
                <div className="inline-flex flex-col flex-auto flex-shrink-[6] pl-2">
                    <h3 title={title} className='text-[18px] text-[#4d4d4d] font-bold whitespace-nowrap overflow-ellipsis'>{title}</h3>
                </div>

                <button
                    onClick={() => close()}
                    className="hidden sm:flex items-center justify-center w-[40px] h-[40px] rounded-full hover:bg-[#ddd] focus:bg-[#ddd]"
                >
                    <Icon icon={<AiOutlineClose />} />
                </button>

            </div>
        </div>
    )
}

type Props = {
    children: ReactNode,
    close: () => void
}

export const Modal = ({ children, close }: Props) => {

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
        <>
            {/* 
            <div className="z-[1002] fixed inset-0 overflow-auto bg-black/50 sm:py-8" /> */}

            <div ref={overlayRef} className="z-[1001] fixed flex items-center justify-center inset-0 overflow-auto bg-black/50 sm:py-8">

                <div className="z-[1002] flex flex-col h-full sm:h-auto sm:max-h-full sm:min-h-[200px] sm:w-[calc(100%-64px)] sm:max-w-[600px] sm:rounded-lg w-full rounded-none bg-white ">

                    {/* ref */}
                    <div ref={modalRef} className="flex flex-col pt-[56px] h-full sm:pt-0 sm:max-h-[calc(100vh-56px)] sm:min-h-[200px]">

                        {children}

                    </div>

                </div>
            </div>


        </>

    )
}

