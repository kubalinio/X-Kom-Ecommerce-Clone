import { ReactNode, useEffect, useRef } from "react"


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

                <div className="z-[1002] flex flex-col h-full sm:h-auto sm:max-h-full sm:min-h-[200px] sm:w-[calc(100%-64px)] sm:max-w-[600px] sm:rounded-lg w-full rounded-none bg-white">

                    {/* ref */}
                    <div ref={modalRef} className="flex flex-col pt-[56px] h-full sm:pt-0 sm:max-h-[calc(100vh-56px)] sm:min-h-[200px]">

                        {children}

                    </div>

                </div>
            </div>


        </>

    )
}

