'use client'

import { useEffect, useState } from 'react'

import { AddToFavPopper, FavListBtn, useFavList } from '@/features/favList'

type Props = {
  productId: string
}

const AddToFav = ({ productId }: Props) => {
  const { isLiked, isLoading, showPopper, toggleFav } = useFavList(productId)
  const [show, setShow] = useState(false)

  const handleClick = () => {
    toggleFav()
  }

  useEffect(() => {
    console.log(showPopper)
    if (showPopper) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [showPopper])

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
          isLiked ? 'lg:opacity-100' : 'lg:opacity-0'
        }`}
      >
        <div className="pointer-events-auto relative z-[106] inline-block align-middle">
          {/* Fav Component to Add List Favorited products */}
          <div>
            <FavListBtn onClick={() => handleClick()} variant={'FavDesktop'} isLiked={isLiked} isLoading={isLoading} />
          </div>

          {/* Modal */}
          <AddToFavPopper show={show} close={() => setShow(false)} />
        </div>
      </div>
    </div>
  )
}

export default AddToFav
