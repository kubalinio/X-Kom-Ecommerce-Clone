// when list exist
// items: [{productId: "1154532", count: 1}]
// modificationToken: '5cefb216b95cd0bb3f65c5d1b9400192'

import { NextResponse } from 'next/server'
import { z } from 'zod'

import { db } from '@/lib/db'
import { addItemToListValidator } from '@/lib/validators/purchaseList'

export async function POST(req: Request, { params }: { params: { listId: string } }) {
  try {
    const listId = params.listId
    const body = await req.json()

    const { productId, count } = addItemToListValidator.parse(body)

    const p = await db.product.findFirst({
      where: {
        id: productId,
      },
    })

    if (listId && p) {
      await db.purchaseList.update({
        where: {
          id: listId,
        },
        data: {
          productCount: { increment: count },
          totalPrice: { increment: p.price },
          productItems: {
            create: {
              productId: p.id,
              IsPriceVisible: true,
              mainPhoto: p.photo,
              name: p.name,
              Price: p.price,
              Count: count,
              OldPrice: p.oldPrice,
              webUrl: `/products/${p.slug}`,
            },
          },
        },
      })
    }

    return NextResponse.json('OK', { status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response('Invalid request data passed', { status: 422 })
    }
    console.log(err)
    return new Response('Could not post to needit at this time, please try again later.', { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { listId: string } }) {
  const url = new URL(req.url)
  try {
    const listId = params.listId

    const { productId } = z
      .object({
        productId: z.string(),
      })
      .parse({
        productId: url.searchParams.get('productId'),
      })

    const p = await db.product.findFirst({
      where: {
        id: productId,
      },
      select: {
        price: true,
      },
    })

    if (p) {
      await db.purchaseList.update({
        where: {
          id: listId,
        },
        data: {
          productCount: { decrement: 1 },
          totalPrice: { decrement: p.price },
          productItems: {
            delete: {
              listId_productId: {
                listId,
                productId,
              },
            },
          },
        },
        select: {
          productCount: true,
        },
      })
    }

    return NextResponse.json('OK')
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response('Invalid request data passed', { status: 422 })
    }
    console.log(err)
    return new Response('Could not post to needit at this time, please try again later.', { status: 500 })
  }
}
