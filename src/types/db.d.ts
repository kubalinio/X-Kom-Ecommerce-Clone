import { BasketItem, Product } from '@prisma/client'

export type ExtendedBasketItem = Omit<BasketItem, 'productHeader'> & {
  productHeader: Product
}
