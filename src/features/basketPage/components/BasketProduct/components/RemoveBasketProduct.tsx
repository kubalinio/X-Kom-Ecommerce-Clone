'use client'

import { useEffect } from 'react'

import { DeleteBasketBtn } from '@/features/shared/services/basket/components/DeleteBasketBtn'
import { useRemoveBasketItem } from '@/features/shared/services/basket/dataAccess/mutations/removeBasketItem'
import { useLoadingState } from '@/store/LoadingState'

export const RemoveBasketProduct = ({ id, basketToken }: { id: string; basketToken: string }) => {
  const { setIsLoading } = useLoadingState()
  const { mutate, isLoading } = useRemoveBasketItem()

  const handleClick = () => {
    const productId = id
    mutate({ basketToken, productId })
  }

  useEffect(() => {
    isLoading ? setIsLoading(true) : setIsLoading(false)
  }, [isLoading, setIsLoading])

  return <DeleteBasketBtn onClick={() => handleClick()} variant={'sm'} isLoading={isLoading} />
}
