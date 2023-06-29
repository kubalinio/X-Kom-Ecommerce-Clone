import { BasketItem, Product, ProductItem, PurchaseListItem } from '@prisma/client'

export type ExtendedBasketItem = Omit<BasketItem, 'productHeader'> & {
  productHeader: Product
}
export type ExtendedPurchaseListItem = PurchaseListItem & {
  productItems: ProductItem[]
}
