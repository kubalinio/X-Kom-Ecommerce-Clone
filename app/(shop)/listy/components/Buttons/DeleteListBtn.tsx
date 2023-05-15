import { ButtonHTMLAttributes, FC, useState, forwardRef } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { removePurchaseListItem } from '@/store/purchaseSlice'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/utils/classUtils'

import { ModalContainer } from '@/components/Modal'
import { DialogBox } from '../DialogBox'

import { HiOutlineTrash } from 'react-icons/hi2'
import { GrFormClose } from 'react-icons/gr'

const buttonVariants = cva(
    'inline-flex items-center justify-start whitespace-nowrap bg-transparent w-full py-3 px-4 text-[#2a2a2a] hover:bg-[#f5f5f5] transition-colors duration-200',
    {
        variants: {
            variant: {
                default: '[&_span]:first:mr-3',
                mobile: '[&_span]:first:mr-3',
                desktop: ' [&_span]:first:mr-2'
            },
            size: {
                default: 'rounded-none h-[48px]',
                sm: 'rounded-none h-[48px]',
                lg: 'rounded-full h-[32px]'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    id: string
}

const DeleteListBtn = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ id, className, variant, size, ...props }, ref) => {
        const [showModal, setShowModal] = useState(false)

        const queryClient = useQueryClient()
        const dispatch = useDispatch()
        const router = useRouter()

        const { mutate } = useMutation(
            async (id: string) => await axios.post('/api/purchaseLists/deletePurchaseList', {
                listId: id
            }),
            {
                onError: (error: AxiosError) => {
                    console.log(error)
                },
                onSuccess: () => {
                    queryClient.invalidateQueries(['purchaseLists'])
                    dispatch(removePurchaseListItem({ id }))

                }
            },
        )

        const handleShowModal = () => {
            if (showModal) {
                document.body.style.overflow = ''
                document.body.style.paddingRight = ''
                setShowModal(false)
            } else {
                setShowModal(true)
                document.body.style.overflow = 'hidden'
                document.body.style.paddingRight = '17px'
            }
        }

        const handleDeleteList = () => {
            mutate(id)
            router.push('/listy')
        }

        return (
            <>
                <button
                    onClick={() => handleShowModal()}
                    title='Usuń listę'
                    className={cn(buttonVariants({ variant, size, className }))}
                    ref={ref}
                    {...props}
                >

                    <span className='inline-block w-6 h-6 overflow-hidden '>
                        <HiOutlineTrash className='w-full h-full text-xl' />
                    </span>

                    <span>
                        <span>
                            Usuń listę
                        </span>
                    </span>

                </button >

                {/* Modal Confirmation */}
                <ModalContainer openModal={showModal}>

                    {showModal ? (


                        <DialogBox close={() => setShowModal(false)}>

                            <div className='flex flex-col p-6 pt-5 pb-4'>

                                {/* Title */}
                                <div className='relative flex justify-between w-full pb-3'>
                                    <h3 className='pr-10 text-xl font-bold'>
                                        Usunąć listę zakupową?
                                    </h3>

                                    <button
                                        onClick={() => setShowModal(false)}
                                        className='absolute -right-3 -top-2 flex items-center justify-center w-11 h-11 rounded-full hover:bg-[#ddd]'
                                    >
                                        <span className='inline-block w-9 h-9'>
                                            <GrFormClose className='w-full h-full' />
                                        </span>
                                    </button>
                                </div>

                                {/* Info */}
                                <div className='text-[#4d4d4d] text-base'>
                                    Pamiętaj, że tej akcji nie można cofnąć.
                                </div>

                                {/* Buttons */}
                                <div className='flex justify-end pt-6'>

                                    <button
                                        onClick={() => setShowModal(false)}
                                        className='rounded-full px-4 py-2 h-11 w-[80px] bg-white hover:bg-gray-100 active:bg-gray-200'
                                    >
                                        Anuluj
                                    </button>

                                    <button
                                        onClick={() => handleDeleteList()}
                                        className='rounded-full px-4 py-2 h-11 w-[136px] text-white ml-2 bg-red-600 hover:bg-red-700 active:bg-red-800'
                                    >
                                        Tak, usuń
                                    </button>

                                </div>

                            </div>

                        </DialogBox>

                    ) : null
                    }
                </ModalContainer>

            </>
        )
    }
)

export default DeleteListBtn