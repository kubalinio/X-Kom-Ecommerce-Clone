import { NextRequest } from 'next/server'

import { db } from '@/lib/db'

export async function PUT(req: NextRequest, { params }: { params: { basketId: string } }) {
  const basketToken = params.basketId
  try {
    if (basketToken) {
      await db.basket.update({
        where: {
          id: basketToken,
        },
        data: {
          Items: {
            deleteMany: {
              basketToken: basketToken,
            },
          },
          productCount: 0,
          totalPrice: 0,
        },
      })
    } else {
      return new Response('Basket Token not exist', { status: 422 })
    }

    return new Response('OK')
  } catch (err) {
    return new Response('Could not delete all product from basket at this time, please try again later.', {
      status: 500,
    })
  }
}
