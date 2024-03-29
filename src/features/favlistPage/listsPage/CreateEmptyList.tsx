'use client'

import { FormEvent, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

import { Modal, ModalContainer, ModalHeader } from '@/features/shared/components/Modal'
import { useCreateEmptyFav } from '@/features/shared/services/favLists/dataAccess/mutations/createEmptyFavList'

type Props = {
  listsLength: number | undefined
}

export const CreateEmptyList = ({ listsLength }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [listName, setListName] = useState('')

  const { mutate: createList } = useCreateEmptyFav()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowModal(false)
    createList(listName)
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        title="Dodaj pierwszą listę"
        className="inline-flex h-[40px] w-auto items-center justify-center rounded-3xl border border-[#0082fa] bg-white py-2 pl-4 pr-5 text-[#0082fa] transition-colors duration-200 hover:bg-gray-200 active:bg-gray-300 max-md:mt-4 max-md:w-full"
      >
        <span className="inline-block w-6 h-6 mr-1">
          <AiOutlinePlus className="w-full h-full text-2xl" />
        </span>
        <span className="flex flex-col">
          <span className="whitespace-nowrap">{listsLength ? 'Dodaj listę' : 'Dodaj pierwszą listę'}</span>
        </span>
      </button>

      <ModalContainer openModal={showModal}>
        {showModal ? (
          <Modal close={() => setShowModal(false)}>
            <ModalHeader title={'Dodaj nową listę'} close={() => setShowModal(false)} />

            <div className="max-h-[calc(100vh-56px)] min-h-[100px] px-14 py-6 sm:max-h-[calc(100vh-128px)] md:max-h-[calc(100vh-112px)] md:min-h-[200px]">
              <form onSubmit={handleSubmit}>
                {/* Input Name */}
                <div>
                  <div>
                    <label className="relative inline-block w-full h-10">
                      <input
                        placeholder="Nazwa listy"
                        name="listNameField"
                        type="text"
                        className="peer inline-block h-10 w-full rounded-full border border-[#ddd] bg-white px-4 placeholder:text-transparent"
                        onChange={(e) => setListName(e.target.value)}
                        value={listName}
                      />

                      <span
                        className={`absolute  left-[16px] z-10 inline-block h-5 text-[#707070] transition-all duration-300 peer-focus:top-[-11px] peer-focus:bg-white ${listName !== '' ? 'top-[-11px] bg-white' : 'top-[8px]'
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
                    className="w-full h-10 px-6 text-white transition-colors duration-200 bg-blue-500 border-none rounded-full hover:bg-blue-600 active:bg-blue-700"
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
