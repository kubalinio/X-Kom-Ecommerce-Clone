import { NextResponse } from 'next/server'

import { db } from '@/lib/db'

export async function DELETE(req: Request, { params }: { params: { listId: string } }) {
  try {
    const listId = params.listId

    if (listId) {
      await db.purchaseList.delete({
        where: {
          id: listId,
        },
      })
    }

    return NextResponse.json(listId, { status: 200 })
  } catch (err) {
    return new Response('Could not post to needit at this time, please try again later.', { status: 500 })
  }
}
