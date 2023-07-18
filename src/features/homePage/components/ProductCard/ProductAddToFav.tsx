'use client'

import { useEffect, useState } from 'react'

import { AddToFavPopper, FavListBtn, ToggleFavList } from '@/features/shared/services/favLists'

type Props = {
  productId: string
  i?: number
}

const AddToFav = ({ productId, i }: Props) => {
  const { isLiked, isLoading, showPopper, toggleFav } = ToggleFavList(productId)
  const [show, setShow] = useState(false)

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
    <div className="absolute hidden transition-all duration-300 right-1 top-1 lg:right-3 lg:top-3 lg:block">
      {/* Transparent overlay */}
      {show === true ? (
        <div
          onClick={() => setShow(false)}
          aria-hidden="true"
          className="fixed inset-0 z-[109] cursor-auto overflow-auto"
        />
      ) : (
        ''
      )}

      <div
        className={`duration-400 transition-opacity lg:flex lg:h-8 lg:w-8 lg:group-hover:opacity-100 ${isLiked ? 'lg:opacity-100' : 'lg:opacity-0'
          }`}
      >
        <div className="relative inline-block align-middle pointer-events-auto">
          {/* Fav Component to Add List Favorited products */}
          <div>
            <FavListBtn onClick={() => handleClick()} variant={'FavDesktop'} isLiked={isLiked} isLoading={isLoading} showAnimation={showPopper} />
          </div>

          {/* Modal */}
          <AddToFavPopper show={show} close={() => setShow(false)} i={i} />
        </div>
      </div>
    </div>
  )
}

export default AddToFav
