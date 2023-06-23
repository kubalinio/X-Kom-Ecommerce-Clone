import { useState } from 'react'

import { AddToFavListBtn, AddToFavModal } from '@/components/AddToFavList'
import { ModalContainer } from '@/components/Modal'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { Product } from '@/types/typings'

type Props = {
  product: Product
}

const ActionBtns = ({ product }: Props) => {
  const { width } = useWindowDimensions()

  const [show, setShow] = useState(false)

  return (
    <>
      {width ?? 0 < 720 ? (
        <div className="absolute bottom-[36px] right-2 top-0 flex w-[40px] flex-col justify-center">
          <AddToFavListBtn
            versionBtn={'ProductGalleryFavBtn'}
            product={product}
            showInfo={(isLiked, isShow) => setShow(isShow)}
          />
        </div>
      ) : (
        <div className="inline-flex w-auto items-center justify-end pt-4 lg:w-full lg:pt-0">
          {/* Fav */}
          <AddToFavListBtn
            versionBtn={'LongFavBtn'}
            product={product}
            showInfo={(isLiked, isShow) => setShow(isShow)}
          />
        </div>
      )}

      <ModalContainer openModal={show}>{show ? <AddToFavModal close={() => setShow(false)} /> : null}</ModalContainer>
    </>
  )
}

export default ActionBtns
