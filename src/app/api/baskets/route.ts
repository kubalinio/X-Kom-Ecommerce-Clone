import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'

import { db } from '@/lib/db'
import { basketProductValidator } from '@/lib/validators/basketProduct'

export async function POST(req: NextRequest) {
  try {
    const basketCookie = req.cookies.get('basketToken')?.value
    let basketToken

    if (!basketCookie) {
      basketToken = uuidv4()
    } else {
      basketToken = basketCookie
    }

    const existingBasket = await db.basket.findFirst({
      where: {
        basketToken: basketToken,
      },
      select: {
        productCount: true,
        totalPrice: true,
        basketToken: true,
        id: true,
        Items: true,
      },
    })

    const body = await req.json()

    const { count, productId } = basketProductValidator.parse(body)

    const existingProductInBasket = await db.basketItem.findFirst({
      where: {
        productId: productId,
        basketToken: basketToken,
      },
      select: {
        productId: true,
        count: true,
      },
    })

    const p = await db.product.findFirst({
      where: {
        id: productId,
      },
    })

    // WhatDo Doesn't had basket
    if (!existingBasket?.basketToken && p) {
      await db.basket.create({
        data: {
          id: basketToken,
          basketToken: basketToken,
          productCount: count,
          totalPrice: p.price * count,
          Items: {
            create: [
              {
                count: count,
                productId: p.id,
                basketToken: basketToken,
                productHeader: {
                  name: p.name,
                  oldPrice: p.oldPrice,
                  price: p.price,
                  photo: p.photo,
                  slug: p.slug,
                  id: p.id,
                },
              },
            ],
          },
        },
      })
    }

    // WhatDo Have basket and equel Items
    if (existingBasket?.basketToken && existingProductInBasket?.productId === productId && p) {
      await db.basket.update({
        where: {
          id: existingBasket.id,
        },
        data: {
          productCount: { increment: count },
          totalPrice: { increment: p.price * count },
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
                  count: { increment: count },
                },
              },
            ],
          },
        },
      })
    }

    // WhatDo Have basket and items
    if (existingBasket?.basketToken && existingProductInBasket?.productId !== productId && p) {
      await db.basket.update({
        where: {
          id: existingBasket.id,
        },
        data: {
          productCount: { increment: count },
          totalPrice: { increment: p.price * count },
          Items: {
            create: [
              {
                count: count,
                productId: p.id,
                basketToken: basketToken,
                productHeader: {
                  name: p.name,
                  oldPrice: p.oldPrice,
                  price: p.price,
                  photo: p.photo,
                  slug: p.slug,
                  id: p.id,
                },
              },
            ],
          },
        },
      })
      // await db.basketItem.create({
      //   data: {
      //     basketToken: basketToken,
      //     count: count,
      //     productId: productId,
      //     basketId: existingBasket.id,
      //     productHeader: {
      //       name: p.name,
      //       oldPrice: p.oldPrice,
      //       price: p.price,
      //       photo: p.photo,
      //       slug: p.slug,
      //       id: p.id,
      //     },
      //   },
      // })
    }

    const res = NextResponse.json({ basketToken }, { status: 200 })
    // Then set a cookie
    if (!basketCookie) {
      res.cookies.set({
        name: 'basketToken',
        value: basketToken,
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
      })
    }

    return res
    // return new Response('OK')
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response('Invalid request data passed', { status: 422 })
    }
    console.log(err)
    return new Response('Could not post to needit at this time, please try again later.', { status: 500 })
  }
}
