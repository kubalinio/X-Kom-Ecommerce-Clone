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

export type purchaseListRequest = z.infer<typeof purchaseListValidator>

export const addItemToListValidator = z.object({
  productId: z.string(),
  count: z.number(),
})

export type addItemToListRequest = z.infer<typeof addItemToListValidator>
