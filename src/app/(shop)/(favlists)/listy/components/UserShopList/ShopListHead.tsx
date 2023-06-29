'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'

import { Modal, ModalContainer, ModalHeader } from '@/components/Modal'
import { addToPurchaseList } from '@/store/purchaseSlice'

import CreateListBtn from '../../../listy/components/Buttons/CreateListBtn'

type Props = {
  listsLength: number | undefined
}

export const ShopListHead = ({ listsLength }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [listName, setListName] = useState('')
  const router = useRouter()

  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const { mutate } = useMutation(
    async ({ listName, id }: { listName: string; id: string }) =>
      // const id = await new ObjectId().toString()
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/purchaseLists/createPurchaseList`, {
        Name: listName,
        Id: id,
        WebUrl: `/listy/${id}`,
      }),
    {
      onError: (error: AxiosError) => {
        console.log(error)
      },
      onSuccess: () => {
        queryClient.invalidateQueries(['purchaseLists'])
        // Redirect to list
        setListName('')
      },
    }
  )

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const id = uuid().slice(0, 8)
    router.push(`/listy/${id}`)
    dispatch(addToPurchaseList({ id }))
    setShowModal(false)
    mutate({ listName, id })
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="text-3xl/10 md:text-4xl/10">Listy zakupowe</h2>
        {/* Future Build */}
        <CreateListBtn onClick={() => setShowModal(true)} listsLength={listsLength} />
      </div>

      <ModalContainer openModal={showModal}>
        {showModal ? (
          <Modal close={() => setShowModal(false)}>
            <ModalHeader title={'Dodaj nową listę'} close={() => setShowModal(false)} />

            <div className="max-h-[calc(100vh-56px)] min-h-[100px] px-14 py-6 sm:max-h-[calc(100vh-128px)] md:max-h-[calc(100vh-112px)] md:min-h-[200px]">
              <form onSubmit={handleSubmit}>
                {/* Input Name */}
                <div>
                  <div>
                    <label className="relative inline-block h-10 w-full">
                      <input
                        placeholder="Nazwa listy"
                        name="listNameField"
                        type="text"
                        className="peer inline-block h-10 w-full rounded-full border border-[#ddd] bg-white px-4 placeholder:text-transparent"
                        onChange={(e) => setListName(e.target.value)}
                        value={listName}
                      />

                      <span
                        className={`absolute  left-[16px] z-10 inline-block h-5 text-[#707070] transition-all duration-300 peer-focus:top-[-11px] peer-focus:bg-white ${
                          listName !== '' ? 'top-[-11px] bg-white' : 'top-[8px]'
                        }`}
                      >
                        Nazwa listy
                      </span>
                    </label>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="h-10 w-full rounded-full border-none bg-blue-500 px-6 text-white transition-colors duration-200 hover:bg-blue-600 active:bg-blue-700"
                  >
                    <span className="flex items-center justify-center">Dodaj listę</span>
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        ) : null}
      </ModalContainer>
    </>
  )
}
