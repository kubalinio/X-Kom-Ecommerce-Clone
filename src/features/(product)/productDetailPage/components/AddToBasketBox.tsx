'use client'
import { Product } from '@prisma/client'
import { FC, useEffect, useState } from 'react'

import { QuantityBasketProduct } from '@/features/basketPage/components/BasketProduct/components/QuantityBasketProduct'
import { AddToBasketBtn, ProductAddedToBasket, useAddProductToBasket } from '@/features/shared/services/basket'

interface AddToBasketBoxProps {
  product: Product
}

export const AddToBasketBox: FC<AddToBasketBoxProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1)
  const [show, setShow] = useState(false)
  const { mutate, isSuccess, isLoading } = useAddProductToBasket()

  const handleNewQuantity = (newNumber: number) => {
    setQuantity(newNumber)
  }

  const handleClick = () => {
    const productId = product.id
    const count = quantity
    mutate({ productId, count })
  }

  useEffect(() => {
    if (isSuccess) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [isSuccess])

  return (
    <div className="flex items-center pb-6 pt-4 md:p-4 md:pt-3">
      {/* Quantity */}
      <div className="mr-2">
        <QuantityBasketProduct changeQuantity={handleNewQuantity} />
      </div>

      {/* Add to Basket */}
      <div className="flex-grow">
        <AddToBasketBtn variant={'long'} onClick={() => handleClick()} isLoading={isLoading} />
        {show ? (
          <ProductAddedToBasket
            mainImage={product.photo}
            price={product.price}
            title={product.name}
            closeModal={() => setShow(false)}
            showed={show}
          />
        ) : null}
      </div>
    </div>
  )
}
