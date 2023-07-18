'use client'

import { useEffect, useState } from 'react'

import { ModalContainer } from '@/features/shared/components/Modal'
import { AddToFavModal, FavListBtn, ToggleFavList } from '@/features/shared/services/favLists'

type Props = {
  productId: string
}

// pass Props
export const BasketAddToFav = ({ productId }: Props) => {
  const [show, setShow] = useState(false)
  const { isLiked, isLoading, showPopper, toggleFav } = ToggleFavList(productId)

  const handleClick = () => {
    toggleFav()
  }

  useEffect(() => {
    if (showPopper) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [showPopper])

  return (
    <>
      <FavListBtn onClick={() => handleClick()} isLiked={isLiked} isLoading={isLoading} variant={'FavDesktop'} showAnimation={showPopper} />

      <ModalContainer openModal={show}>{show ? <AddToFavModal close={() => setShow(false)} /> : null}</ModalContainer>
    </>
  )
}
