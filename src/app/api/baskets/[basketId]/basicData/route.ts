import { NextRequest } from 'next/server'

import { db } from '@/lib/db'

export async function GET(req: NextRequest) {
  const basketCookie = req.cookies.get('basketToken')?.value

  try {
    const products = await db.basket.findMany({
      where: {
        basketToken: basketCookie,
      },
      include: {
        Items: true,
      },
    })

    return new Response(JSON.stringify(products))
  } catch (err) {
    return new Response('Could not fetch basket products', { status: 500 })
  }
}
