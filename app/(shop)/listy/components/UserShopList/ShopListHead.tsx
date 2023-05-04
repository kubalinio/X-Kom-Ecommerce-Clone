'use client'

import { Modal, ModalBody, ModalContainer, ModalHeader } from "@/app/components/Modals/Modal"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { v4 as uuid } from 'uuid'


import { FormEvent, useEffect, useState } from "react"
import CreateListBtn from "./CreateListBtn"
import { useDispatch } from "react-redux"
import { addToPurchaseList } from "@/app/store/purchaseSlice"

type Props = {
    listsLength: number | undefined
}

export const ShopListHead = ({ listsLength }: Props) => {
    const [showModal, setShowModal] = useState(false)
    const [listName, setListName] = useState('')

    const dispatch = useDispatch()
    const queryClient = useQueryClient()

    const { mutate } = useMutation(
        async ({ listName, id }: { listName: string, id: string }) =>
            // const id = await new ObjectId().toString()
            await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/purchaseLists/createPurchaseList`, {
                Name: listName,
                Id: id,
                WebUrl: `/listy/${id}`
            }), {
        onError: (error: AxiosError) => {
            console.log(error)
        },
        onSuccess: ({ data }) => {
            queryClient.invalidateQueries(['purchaseLists'])
            // Redirect to list
            setListName('')
        },
    }
    )


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setShowModal(false)
        const id = uuid().slice(0, 8)
        dispatch(addToPurchaseList({ id }))

        mutate({ listName, id })
    }


    return (
        <>
            <div className='flex flex-wrap items-center justify-between'>
                <h2 className='text-3xl/10 md:text-4xl/10'>Listy zakupowe</h2>
                {/* Future Build */}
                <CreateListBtn onClick={() => setShowModal(true)} listsLength={listsLength} />
            </div>

            <ModalContainer openModal={showModal}>

                {showModal ? (

                    <Modal close={() => setShowModal(false)}>
                        <ModalHeader title={'Dodaj nową listę'} close={() => setShowModal(false)} />

                        <div className="min-h-[100px] max-h-[calc(100vh-56px)] sm:max-h-[calc(100vh-128px)] md:min-h-[200px] md:max-h-[calc(100vh-112px)] py-6 px-14">

                            <form onSubmit={handleSubmit}>
                                {/* Input Name */}
                                <div>
                                    <div>
                                        <label className="relative inline-block w-full h-10">
                                            <input
                                                placeholder="Nazwa listy"
                                                name="listNameField"
                                                type="text"
                                                className="inline-block h-10 w-full border border-[#ddd] rounded-full px-4 bg-white placeholder:text-transparent peer"
                                                onChange={(e) => setListName(e.target.value)}
                                                value={listName}
                                            />

                                            <span className={`absolute  peer-focus:top-[-11px] peer-focus:bg-white left-[16px] inline-block h-5 text-[#707070] z-10 transition-all duration-300 ${listName !== '' ? 'top-[-11px] bg-white' : 'top-[8px]'}`}>
                                                Nazwa listy
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="w-full h-10 px-6 text-white transition-colors duration-200 bg-blue-500 border-none rounded-full hover:bg-blue-600 active:bg-blue-700"
                                    >
                                        <span className="flex items-center justify-center">Dodaj listę</span>
                                    </button>
                                </div>
                            </form>

                        </div>

                    </Modal>

                ) : null
                }
            </ModalContainer>

        </>
    )
}