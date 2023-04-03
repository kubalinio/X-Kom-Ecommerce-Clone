'use client'

import Link from 'next/link';
import { ReactNode, useEffect, useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { createPortal } from 'react-dom';

type DrawerHeaderProps = {
    name: string
    closeDrawer: () => void
    basketQuantity: number
}

export const DrawerHeader = ({ name, closeDrawer, basketQuantity }: DrawerHeaderProps) => (

    <div className='inline-flex justify-between items-center bg-[#f5f5f5] min-h-[56px] w-full p-2 pr-4 border-b border-[#ddd]'>

        <div className='flex items-center w-full'>

            <button onClick={closeDrawer} className='flex items-center justify-center w-10 h-10 text-base transition-colors border-none rounded-full bg-none hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300 '>
                <span className='inline-block h-5 overflow-hidden w-7'>
                    <AiOutlineClose className='w-full h-full' />
                </span>
            </button>

            {basketQuantity > 0 && name === 'Koszyk' ? (
                <>
                    <h3 className='pl-2 text-lg font-bold text-black whitespace-nowrap flex-shrink-[6] flex-grow basis-auto'>{name}

                        <span className='text-[#707070] ml-1'>
                            {`(${basketQuantity})`}
                        </span>
                    </h3>

                    <Link href='/koszyk' className='text-blue-500 hover:text-blue-600 focus:text-blue-600'>
                        Edytuj
                    </Link>
                </>
            ) : (

                <h3 className='pl-2 text-lg font-bold text-black whitespace-nowrap'>{name}</h3>
            )}

        </div>
    </div>
)

export const DrawerBody = ({ children }: { children: ReactNode }) => (
    <div className='absolute bottom-0 w-full overflow-x-hidden overflow-y-auto top-[58px]'>
        {children}
    </div>
)


type DrawerContainerProps = {
    children: ReactNode
    close: () => void
    openDrawer: boolean
    direction: string
}

export const DrawerContainer = ({ children, close, openDrawer, direction }: DrawerContainerProps) => {

    const refPortal = useRef<Element | null>()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        refPortal.current = document.querySelector<HTMLElement>('#react-portals')
        setMounted(true)
    }, [])

    useEffect(() => {
        if (openDrawer) {
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = '16px'
        } else {
            document.body.style.overflow = 'hidden visible'
            document.body.style.paddingRight = '0px'
        }

    }, [openDrawer])

    return (mounted && refPortal.current) ? createPortal(

        <div className='Drawer'>
            <aside>
                {!openDrawer ? '' :
                    <div onClick={() => close()} className='fixed inset-0 bg-black opacity-50 transition-opacity duration-300 z-[1001]' />
                }

                {direction === 'right' ? (
                    <div className={`z-[1002] fixed top-0 bottom-0 max-w-[calc(100vw-64px)] bg-white shadow-md overflow-x-hidden overflow-y-auto transition-transform duration-300 right-0 ${openDrawer ? 'w-[360px] translate-x-0' : 'w-0 translate-x-[105%]'}`}>

                        <div>
                            <div>

                                {children}

                            </div>
                        </div>

                    </div>
                ) : (
                    <div className={`z-[1002] fixed top-0 bottom-0 max-w-[calc(100vw-64px)] bg-white shadow-md overflow-x-hidden overflow-y-auto transition-transform duration-300 left-0 ${openDrawer ? 'w-[360px] translate-x-0' : 'w-0 -translate-x-[105%]'}`}>


                        <div>
                            <div>

                                {children}

                            </div>
                        </div>

                    </div>
                )}



            </aside>
        </div>
        , refPortal.current

    ) : null

}


export const DrawerModal = ({ children }: { children: ReactNode }) => {

    return (
        <div className='bg-transparent'>
            <div className='absolute inset-0 overflow-hidden transition-transform duration-300 bg-white '>
                <div className='flex flex-col h-screen sm:pt-0 sm:max-h-[calc(100vh-56px)] sm:min-h-[200px] sm:h-full'>

                    {children}

                </div>
            </div>
        </div>
    )
}





    // <div className='bg-transparent'>
    //     <div className='absolute inset-0 overflow-hidden transition-transform duration-300 bg-white '>
    //         <div className='flex flex-col h-screen sm:pt-0 sm:max-h-[calc(100vh-56px)] sm:min-h-[200px] sm:h-full'>
    //             <DrawerTop name={content?.name} />

    //             <DrawerBottom />

    //         </div>
    //     </div>
    // </div>
