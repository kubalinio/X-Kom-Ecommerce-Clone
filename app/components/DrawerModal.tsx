'use client'

import { ReactNode, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Icon = ({ icon }: { icon: ReactNode }) => <span>{icon}</span>;

type DrawerProps = {
    show: boolean
    close: () => void
    isActiveNum: number
    navItems: any
}

const DrawerTop = ({ name, closeModal }: { name: string, closeModal: any }) => (
    <div className='inline-flex justify-between items-center bg-[#f5f5f5] min-h-[56px] w-full p-2 pr-4 border-b border-[#ddd]'>

        <div className='flex items-center w-full'>
            <button onClick={closeModal}>
                <span className='inline-block w-6 h-6 overflow-hidden'>
                    <AiOutlineClose className='w-full h-full' />
                </span>
            </button>
            <h3>{name}</h3>
        </div>
    </div>
)

const DrawerBottom = ({ children }: { children: ReactNode }) => (
    <div>
        {children}
    </div>
)

export const Drawer = ({ show, close, isActiveNum, navItems }: DrawerProps) => {
    const { name } = navItems


    return (
        <div className='Drawer'>
            <aside>
                {!show ? '' : <div onClick={() => close()} className='fixed inset-0 bg-black/50 opacity-30 transition-opacity duration-300 z-[1001]' />}

                <div className={`${!show ? 'w-0 translate-x-[105%]' : 'w-[360px] translate-x-0'} z-[1002] fixed top-0 bottom-0 max-w-[calc(100vw+64px)] bg-white shadow-md overflow-x-hidden overflow-y-auto transition-transform duration-300 right-0`}>
                    <div>
                        <div>
                            {show &&
                                <div className='bg-transparent'>
                                    <div className='absolute inset-0 overflow-hidden transition-transform duration-300 bg-white '>
                                        <div className='flex flex-col h-screen sm:pt-0 sm:max-h-[calc(100vh-56px)] sm:min-h-[200px] sm:h-full'>
                                            <DrawerTop name={name} closeModal={() => close()} />

                                            {isActiveNum === 0 &&
                                                <DrawerBottom>
                                                    {navItems?.subMenu?.popular.map((item) => (
                                                        <div>
                                                            <p>{item.name}</p>
                                                            <p>{item.slug}</p>
                                                        </div>
                                                    ))}
                                                </DrawerBottom>}

                                            {isActiveNum === 1 &&
                                                <DrawerBottom>
                                                    <div>Konto</div>
                                                </DrawerBottom>}

                                            {isActiveNum === 3 &&
                                                <DrawerBottom>
                                                    <div>Koszyk</div>
                                                </DrawerBottom>}

                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </aside>
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
