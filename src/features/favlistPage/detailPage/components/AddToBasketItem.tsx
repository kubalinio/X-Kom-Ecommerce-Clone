import { useEffect, useState } from 'react'

import { AddToBasketBtn, ProductAddedToBasket, useAddProductToBasket } from '@/features/shared/services/basket'

type Props = {
  variant: 'mobile' | 'desktop'
  productId: string
  count: number
  title: string
  price: number
  mainImage: string
}

export const AddToBasketItem = ({ variant, mainImage, price, productId, title, count }: Props) => {
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
      {variant === 'desktop' ? (
        <AddToBasketBtn
          variant={'sm'}
          onClick={() => handleClick()}
          isLoading={isLoading}
          className="static flex h-8 w-8 items-center justify-center p-1"
        />
      ) : (
        <AddToBasketBtn variant={'long'} onClick={() => handleClick()} isLoading={isLoading} />
      )}

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
