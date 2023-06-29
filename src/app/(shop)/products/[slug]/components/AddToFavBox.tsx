'use client'
import { FC, useState } from 'react'

import { AddToFavList, AddToFavModal } from '@/components/AddToFavList'
import { ModalContainer } from '@/components/Modal'
import { useMediaQuery } from '@/hooks/useMediaQuery'

interface AddToFavBoxProps {
  productId: string
}

export const AddToFavBox: FC<AddToFavBoxProps> = ({ productId }) => {
  const matches = useMediaQuery('(min-width: 720px)')

  const [show, setShow] = useState(false)

  return (
    <>
      {matches ? (
        <div className="inline-flex w-auto items-center justify-end pt-4 lg:w-full lg:pt-0">
          {/* Fav */}
          <AddToFavList versionBtn={'FavLong'} productId={productId} showInfo={(isLiked, isShow) => setShow(isShow)} />
        </div>
      ) : (
        <div className="absolute bottom-[36px] right-2 top-0 flex w-[40px] flex-col justify-center">
          <AddToFavList
            versionBtn={'FavGallery'}
            productId={productId}
            showInfo={(isLiked, isShow) => setShow(isShow)}
          />
        </div>
      )}

      <ModalContainer openModal={show}>{show ? <AddToFavModal close={() => setShow(false)} /> : null}</ModalContainer>
    </>
  )
}
