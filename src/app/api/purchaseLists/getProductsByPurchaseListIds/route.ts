import { NextResponse } from 'next/server'
import { z } from 'zod'

import { db } from '@/lib/db'

export async function GET(req: Request) {
  const url = new URL(req.url)

  try {
    const { ids } = z
      .object({
        ids: z.string(),
      })
      .parse({
        ids: url.searchParams.get('purchaseListIds'),
      })

    const itemIds = await db.listItem.findMany({
      where: {
        listId: {
          in: ids.split(','),
        },
      },
      select: {
        productId: true,
        listId: true,
      },
    })

    return NextResponse.json(itemIds, { status: 200 })
  } catch (err) {
    return new Response('Could not fetch fav products', { status: 500 })
  }
}
