// when list no exist
// name: "ulubione"
// items: [{productId: "1154532", count: 1}]

import { NextApiRequest } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuid } from 'uuid'
import { z } from 'zod'

import { db } from '@/lib/db'
import { purchaseListValidator } from '@/lib/validators/purchaseList'

export type DataStoradgeResponse = {
  listId: string
  listName: string
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    // console.log(body)
    const { name: listName, items } = purchaseListValidator.parse(body)
    const item = items.find((i) => i.productId === i.productId)
    // console.log(name)
    // console.log(item)

    const listId = uuid().slice(0, 8)

    const p = await db.product.findFirst({
      where: {
        id: item?.productId,
      },
    })

    if (p && item) {
      await db.purchaseListItem.create({
        data: {
          id: listId,
          name: listName,
          productCount: item.count,
          totalPrice: p.price,
          webUrl: `/lista/${listId}`,
          productItems: {
            create: {
              id: p.id,
              IsPriceVisible: true,
              mainPhoto: p.photo,
              name: p.name,
              Price: p.price,
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
    if (err instanceof z.ZodError) {
      return new Response('Invalid request data passed', { status: 422 })
    }
    return new Response('Could not post to needit at this time, please try again later.', { status: 500 })
  }
}

export async function GET(req: NextApiRequest) {
  try {
    const url = new URL(req.url ?? 'purchaseListIds')
    // console.log(url)
    const { ids } = z
      .object({
        ids: z.string().array(),
      })
      .parse({
        ids: url.searchParams.getAll('purchaseListIds'),
      })

    // console.log(ids)

    const lists = await db.purchaseListItem.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      include: {
        productItems: true,
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
