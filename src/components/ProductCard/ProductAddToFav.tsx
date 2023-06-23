'use client'

import { useState } from 'react'

import { Product } from '@/types/typings'

import { AddToFavListBtn } from '../AddToFavList'
import { AddToFavPopper } from '../AddToFavList/AddToFavPopper'

type Props = {
  product: Product
}

const AddToFav = ({ product }: Props) => {
  const [show, setShow] = useState(false)
  const [liked, setLiked] = useState(false)

  const handleShowInfo = (isLiked: boolean, isShow: boolean) => {
    setShow(isShow)
    setLiked(isLiked)
  }

  return (
    <div className="absolute right-1 top-1 hidden transition-all duration-300 lg:right-3 lg:top-3 lg:block">
      {/* Transparent overlay */}
      {show === true ? (
        <div
          onClick={() => setShow(false)}
          aria-hidden="true"
          className="fixed inset-0 z-[105] cursor-auto overflow-auto"
        />
      ) : (
        ''
      )}

      <div
        className={`duration-400 transition-opacity lg:flex lg:h-8 lg:w-8 lg:group-hover:opacity-100 ${
          liked ? 'lg:opacity-100' : 'lg:opacity-0'
        }`}
      >
        <div className="pointer-events-auto relative z-[106] inline-block align-middle">
          {/* Fav Component to Add List Favorited products */}
          <div>
            <AddToFavListBtn
              versionBtn={'DesktopFavBtn'}
              showInfo={(isLiked, isShow) => handleShowInfo(isLiked, isShow)}
              product={product}
            />
          </div>

          {/* Modal */}
          <AddToFavPopper show={show} close={() => setShow(false)} />
        </div>
      </div>
    </div>
  )
}

export default AddToFav
