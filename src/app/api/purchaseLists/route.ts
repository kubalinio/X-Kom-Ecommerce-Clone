// when list no exist
// name: "ulubione"
// items: [{productId: "1154532", count: 1}]

import { NextResponse } from 'next/server'
import { v4 as uuid } from 'uuid'
import { z } from 'zod'

import { db } from '@/lib/db'
import { changeQuantityFavListValidator, purchaseListValidator } from '@/lib/validators/purchaseList'

export type DataStoradgeResponse = {
  listId: string
  listName: string
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name: listName, items } = purchaseListValidator.parse(body)
    const item = items.find((i) => i.productId === i.productId)

    const listId = uuid().slice(0, 8)

    const p = await db.product.findFirst({
      where: {
        id: item?.productId,
      },
    })

    if (items.length === 0) {
      await db.purchaseList.create({
        data: {
          id: listId,
          name: listName,
          productCount: 0,
          totalPrice: 0,
          webUrl: `/lista/${listId}`,
        },
      })
    }

    if (p && item) {
      await db.purchaseList.create({
        data: {
          id: listId,
          name: listName,
          productCount: item.count,
          totalPrice: p.price,
          webUrl: `/lista/${listId}`,
          productItems: {
            create: {
              productId: p.id,
              IsPriceVisible: true,
              mainPhoto: p.photo,
              name: p.name,
              Price: p.price,
              Count: item.count,
              OldPrice: p.oldPrice,
              webUrl: `/products/${p.slug}`,
            },
          },
        },
      })
    }

    const dataStoradge: DataStoradgeResponse = { listId: listId, listName: listName }

    return NextResponse.json(dataStoradge, { status: 200 })
    // return new Response('OK').json<dataStoradgeType>(dataStoradge)
  } catch (err) {
    console.log(err)
    if (err instanceof z.ZodError) {
      return new Response('Invalid request data passed', { status: 422 })
    }
    return new Response('Could not post to needit at this time, please try again later.', { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url ?? 'purchaseListIds')
    const { ids } = z
      .object({
        ids: z.string(),
      })
      .parse({
        ids: url.searchParams.get('purchaseListIds'),
      })

    const lists = await db.purchaseList.findMany({
      where: {
        id: {
          in: ids.split(','),
        },
      },
      include: {
        productItems: true,
      },
      orderBy: {
        lastUpdate: 'desc',
      },
    })

    return NextResponse.json(lists, { status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response('Invalid request data passed', { status: 422 })
    }
    return new Response('Could not post to needit at this time, please try again later.', { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const { productId, listId, count } = changeQuantityFavListValidator.parse(body)

    if (listId) {
      await db.listItem.update({
        where: {
          listId_productId: {
            listId,
            productId,
          },
        },
        data: {
          Count: count,
        },
      })
    }

    return NextResponse.json({ status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response('Invalid request data passed', { status: 422 })
    }
    return new Response('Could not post to needit at this time, please try again later.', { status: 500 })
  }
}
