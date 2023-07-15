'use client'

import { useEffect, useState } from 'react'

import { AddToBasketBtn, ProductAddedToBasket, useAddProductToBasket } from '@/features/shared/services/basket'

type Props = {
  productId: string
  title: string
  price: number
  mainImage: string
}

export const AddToBasket = ({ productId, title, price, mainImage }: Props) => {
  const count = 1
  // const { isLiked, isLoading, showPopper, toggleFav } = ToggleFavList(productId)
  const { isSuccess, mutate, isLoading } = useAddProductToBasket()
  const [show, setShow] = useState(false)

  const handleClick = () => {
    mutate({ count, productId })
  }

  useEffect(() => {
    if (isSuccess) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [isSuccess])

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '17px'
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [show])

  return (
    <>
      <AddToBasketBtn
        variant={'sm'}
        onClick={() => handleClick()}
        isLoading={isLoading}
        className="absolute bottom-[10px] right-[10px] hidden lg:group-hover:flex"
      />

      {show ? (
        <ProductAddedToBasket
          mainImage={mainImage}
          price={price}
          title={title}
          closeModal={() => setShow(false)}
          showed={show}
        />
      ) : null}
    </>
  )
}
