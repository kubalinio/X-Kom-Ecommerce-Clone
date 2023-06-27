import { NextRequest } from 'next/server'

import { db } from '@/lib/db'

export async function DELETE(req: NextRequest, { params }: { params: { productId: string } }) {
  try {
    const basketCookie = req.cookies.get('basketToken')?.value
    const basketItemId = params.productId

    const existingBasketItem = await db.basketItem.findFirst({
      where: {
        id: basketItemId,
      },
      select: {
        count: true,
        productHeader: true,
      },
    })

    if (basketCookie && existingBasketItem) {
      const { count, productHeader } = existingBasketItem

      await db.basket.update({
        where: {
          basketToken: basketCookie,
        },
        data: {
          productCount: { decrement: count },
          // @ts-expect-error productHeader no types
          totalPrice: { decrement: productHeader?.price * count },
          Items: {
            delete: {
              id: basketItemId,
            },
          },
        },
      })
    } else return new Response('Invalid request data passed', { status: 422 })

    return new Response('OK')
  } catch (err) {
    return new Response('Could not delete product from basket at this time, please try again later.', { status: 500 })
  }
}
