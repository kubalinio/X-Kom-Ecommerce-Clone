import { BasketItem, ListItem, PurchaseList } from '@prisma/client'

export type ExtendedBasketItem = Omit<BasketItem, 'productHeader'> & {
  productHeader: {
    create: {
      id: string
      name: string
      oldPrice: price
      photo: string
      price: number
      slug: string
    }
    productId: string
  }
}
export type ExtendedPurchaseListItem = PurchaseList & {
  productItems: ListItem[]
}
