import { NextResponse } from 'next/server'
import { z } from 'zod'

import { db } from '@/lib/db'

export async function GET(req: Request) {
  const url = new URL(req.url)
  // console.log(url)

  // const followedListsIds: string[] = []

  try {
    const { ids } = z
      .object({
        ids: z.string(),
      })
      .parse({
        ids: url.searchParams.get('purchaseListIds'),
      })

    console.log(ids)

    const itemIds = await db.productItem.findMany({
      where: {
        listId: ids,
      },
      select: {
        id: true,
      },
    })

    return NextResponse.json(itemIds, { status: 200 })
  } catch (err) {
    return new Response('Could not fetch fav products', { status: 500 })
  }
}
