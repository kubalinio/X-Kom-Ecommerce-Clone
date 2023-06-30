import { BasketItem, ListItem, Product, PurchaseList } from '@prisma/client'

export type ExtendedBasketItem = Omit<BasketItem, 'productHeader'> & {
  productHeader: Product
}
export type ExtendedPurchaseListItem = PurchaseList & {
  productItems: ListItem[]
}
