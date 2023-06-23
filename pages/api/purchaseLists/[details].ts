// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = await prisma.purchaseList.findMany({
        where: {
          Id: { in: req.query.details },
        },
        include: {
          ProductItems: true,
        },
      })

      res.status(200).json(data)
    } catch (error) {
      res.status(403).json({ message: 'Error fetching Lists' })
    }
  }
}
