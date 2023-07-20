'use client'

import { FC, useEffect } from 'react'

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/features/shared/components/ui/Select'
import { useChangeBasketItemQuantity } from '@/features/shared/services/basket'
import { useLoadingState } from '@/store/LoadingState'

interface QuantityProductProps {
    count: number
    productId: string
    basketToken: string
}

export const QuantityProduct: FC<QuantityProductProps> = ({ basketToken, productId, count }) => {
    const { setIsLoading } = useLoadingState()
    const { mutate, isLoading } = useChangeBasketItemQuantity()

    const handleChangeQuantity = (newQnt: number) => {
        const count = newQnt
        mutate({ basketToken, productId, count })
    }

    useEffect(() => {
        setIsLoading(isLoading)
    }, [isLoading, setIsLoading])

    return (
        <Select
            defaultValue={count}
            onValueChange={(value: number) => handleChangeQuantity(value)}
        >
            <SelectTrigger >
                <SelectValue />
            </SelectTrigger>

            <SelectContent>

                <SelectGroup>
                    {Array(9).fill(null).map((_, qnt) => (
                        <SelectItem key={qnt} value={qnt + 1}>{qnt + 1}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

