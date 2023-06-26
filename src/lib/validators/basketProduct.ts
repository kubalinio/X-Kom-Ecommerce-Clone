import { z } from 'zod'

export const basketProductValidator = z.object({
  productId: z.string(),
  count: z.number(),
  basketToken: z.string().optional(),
})

export type basketProductRequest = z.infer<typeof basketProductValidator>
