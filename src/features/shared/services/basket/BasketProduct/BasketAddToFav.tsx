import { useState } from 'react'

import { ModalContainer } from '@/features/shared/components/Modal'
import { AddToFavModal } from '@/features/shared/services/favLists'
// import { BasketItem } from '@/store/basketSlice'

// type Props = {
//   product: BasketItem
// }

// pass Props
export const BasketAddToFav = () => {
  const [show, setShow] = useState(false)

  // const handleShowModal = (isShow: boolean) => {
  //   setShow(isShow)
  // }

  return (
    <>
      {/* @TODO Fix passed props */}
      {/* <AddToFavList
        product={product}
        versionBtn={'DesktopFavBtn'}
        showInfo={(isLiked, isShow) => handleShowModal(isShow)}
      /> */}

      <ModalContainer openModal={show}>{show ? <AddToFavModal close={() => setShow(false)} /> : null}</ModalContainer>
    </>
  )
}
