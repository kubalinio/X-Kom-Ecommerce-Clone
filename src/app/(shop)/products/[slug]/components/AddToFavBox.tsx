'use client'
import { FC, useState } from 'react'

import { ModalContainer } from '@/features/shared/components/Modal'
import { AddToFavModal, FavListBtn, useFavList } from '@/features/shared/services/favLists'
import { useMediaQuery } from '@/hooks/useMediaQuery'

interface AddToFavBoxProps {
  productId: string
}

export const AddToFavBox: FC<AddToFavBoxProps> = ({ productId }) => {
  const matches = useMediaQuery('(min-width: 720px)')
  const [show, setShow] = useState(false)
  const { isLiked, isLoading, toggleFav } = useFavList(productId)

  const handleClick = () => {
    toggleFav()
  }

  return (
    <>
      {matches ? (
        <div className="inline-flex w-auto items-center justify-end pt-4 lg:w-full lg:pt-0">
          <FavListBtn onClick={() => handleClick()} variant={'FavLong'} isLiked={isLiked} isLoading={isLoading} />
        </div>
      ) : (
        <div className="absolute bottom-[36px] right-2 top-0 flex w-[40px] flex-col justify-center">
          <FavListBtn onClick={() => handleClick()} variant={'FavGallery'} isLiked={isLiked} isLoading={isLoading} />
        </div>
      )}

      <ModalContainer openModal={show}>{show ? <AddToFavModal close={() => setShow(false)} /> : null}</ModalContainer>
    </>
  )
}
