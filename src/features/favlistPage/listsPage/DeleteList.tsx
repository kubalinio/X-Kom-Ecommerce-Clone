'use client'

import { FC, useEffect, useState } from 'react'
import { GrFormClose } from 'react-icons/gr'

import { ModalContainer } from '@/features/shared/components/Modal'
import { DeleteFavListBtn, useDeleteFavList } from '@/features/shared/services/favLists'

import { DialogBox } from './DialogBox'

interface DeleteListProps {
  id: string
}

export const DeleteList: FC<DeleteListProps> = ({ id }) => {
  const [showModal, setShowModal] = useState(false)
  const { mutate: deleteList, isSuccess } = useDeleteFavList(id)

  useEffect(() => {
    if (isSuccess) {
      setShowModal(true)
    }
  }, [isSuccess])

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

  return (
    <>
      <DeleteFavListBtn onClick={() => handleShowModal()} variant={'mobile'} />

      {/* Modal Confirmation */}
      <ModalContainer openModal={showModal}>
        {showModal ? (
          <DialogBox close={() => setShowModal(false)}>
            <div className="flex flex-col p-6 pb-4 pt-5">
              {/* Title */}
              <div className="relative flex w-full justify-between pb-3">
                <h3 className="pr-10 text-xl font-bold">Usunąć listę zakupową?</h3>

                <button
                  onClick={() => setShowModal(false)}
                  className="absolute -right-3 -top-2 flex h-11 w-11 items-center justify-center rounded-full hover:bg-[#ddd]"
                >
                  <span className="inline-block h-9 w-9">
                    <GrFormClose className="h-full w-full" />
                  </span>
                </button>
              </div>

              {/* Info */}
              <div className="text-base text-[#4d4d4d]">Pamiętaj, że tej akcji nie można cofnąć.</div>

              {/* Buttons */}
              <div className="flex justify-end pt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="h-11 w-[80px] rounded-full bg-white px-4 py-2 hover:bg-gray-100 active:bg-gray-200"
                >
                  Anuluj
                </button>

                <button
                  onClick={() => deleteList()}
                  className="ml-2 h-11 w-[136px] rounded-full bg-red-600 px-4 py-2 text-white hover:bg-red-700 active:bg-red-800"
                >
                  Tak, usuń
                </button>
              </div>
            </div>
          </DialogBox>
        ) : null}
      </ModalContainer>
    </>
  )
}
