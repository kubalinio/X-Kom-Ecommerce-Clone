// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/prisma'

// type Data = {
//   result: {
//     id: string
//   }
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const Id: string = req.body.Id
    const Name: string = req.body.Name
    const WebUrl: string = req.body.WebUrl

    try {
      const result = await prisma.purchaseList.create({
        data: {
          Id: Id,
          Name: Name,
          WebUrl: WebUrl,
        },
      })

      res.status(200).json(result)
    } catch (error) {
      res.status(403).json({ message: error })
    }
  }
}
