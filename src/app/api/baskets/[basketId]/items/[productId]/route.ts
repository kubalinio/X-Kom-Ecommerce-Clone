import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

import { db } from '@/lib/db'
import { changeQuantityBasketItemValidator } from '@/lib/validators/basketProduct'

interface DeleteParamsProps {
  params: {
    productId: string
  }
}

export async function DELETE(req: NextRequest, { params }: DeleteParamsProps) {
  try {
    const basketCookie = req.cookies.get('basketToken')?.value
    const basketItemId = params.productId

    const existingBasketItem = await db.basketItem.findFirst({
      where: {
        basketToken: basketCookie,
        productId: basketItemId,
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
          id: basketCookie,
        },
        data: {
          productCount: { decrement: count },
          // @ts-expect-error productHeader no types
          totalPrice: { decrement: productHeader?.price * count },
          Items: {
            delete: {
              basketToken_productId: {
                basketToken: basketCookie,
                productId: basketItemId,
              },
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

interface PutParamsProps {
  params: {
    basketId: string
    productId: string
  }
}

export async function PUT(req: NextRequest, { params }: PutParamsProps) {
  try {
    const body = await req.json()
    const { basketToken: basketTokenReq, productId, count } = changeQuantityBasketItemValidator.parse(body)

    const basketToken = params.basketId ?? basketTokenReq
    const basketItemId = params.productId ?? productId

    const existingBasketItem = await db.basketItem.findUnique({
      where: {
        basketToken_productId: {
          basketToken,
          productId: basketItemId,
        },
      },
      select: {
        count: true,
        productHeader: true,
      },
    })

    const handleChangeQuantity = (newCount: number) => {
      const prevCount = existingBasketItem?.count ?? 0
      if (prevCount > newCount) {
        return { decrement: prevCount - newCount }
      } else if (prevCount < newCount) {
        return { increment: newCount - prevCount }
      } else {
        return 0
      }
    }

    const handleTotalPrice = (newCount: number) => {
      const prevCount = existingBasketItem?.count ?? 0
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const productPrice = existingBasketItem?.productHeader?.price

      if (prevCount > newCount) {
        return { decrement: productPrice * (prevCount - newCount) }
      } else if (prevCount < newCount) {
        return { increment: productPrice * (newCount - prevCount) }
      } else {
        return 0
      }
    }

    if (basketToken && basketItemId) {
      await db.basket.update({
        where: {
          id: basketToken,
        },
        data: {
          productCount: handleChangeQuantity(count),
          totalPrice: handleTotalPrice(count),
          Items: {
            update: [
              {
                where: {
                  basketToken_productId: {
                    basketToken,
                    productId,
                  },
                },
                data: {
                  count: { set: count },
                },
              },
            ],
          },
        },
      })
    }

    return NextResponse.json({ status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response('Invalid request data passed', { status: 422 })
    }
    console.log(err)
    return new Response('Could not post to needit at this time, please try again later.', { status: 500 })
  }
}
