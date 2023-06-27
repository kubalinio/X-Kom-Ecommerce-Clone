import { useState } from 'react'

import { AddToFavModal } from '@/components/AddToFavList'
import { ModalContainer } from '@/components/Modal'
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
      {/* <AddToFavListBtn
        product={product}
        versionBtn={'DesktopFavBtn'}
        showInfo={(isLiked, isShow) => handleShowModal(isShow)}
      /> */}

      <ModalContainer openModal={show}>{show ? <AddToFavModal close={() => setShow(false)} /> : null}</ModalContainer>
    </>
  )
}
