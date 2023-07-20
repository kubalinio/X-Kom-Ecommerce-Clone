import { z } from 'zod'

export const purchaseListValidator = z.object({
  name: z.string(),
  items: z
    .object({
      productId: z.string(),
      count: z.number(),
    })
    .array(),
})

export const addItemToListValidator = z.object({
  productId: z.string(),
  count: z.number(),
})

export const changeQuantityFavListValidator = z.object({
  listId: z.string(),
  productId: z.string(),
  count: z.number(),
})

export type purchaseListRequest = z.infer<typeof purchaseListValidator>
export type addItemToListRequest = z.infer<typeof addItemToListValidator>
export type changeQuantityFavListRequest = z.infer<typeof changeQuantityFavListValidator>
