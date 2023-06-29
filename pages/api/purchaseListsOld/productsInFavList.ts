/* eslint-disable @typescript-eslint/no-unused-vars */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../../prisma'

// type Data = {
//   name: string
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const data = await prisma.productItem.findMany({
//         where: {
//           listId: { in: req.body.purchaseListsId },
//         },
//         select: {
//           Id: true,
//         },
//       })

//       res.status(200).json(data)
//     } catch (error) {
//       res.status(403).json({ message: 'Error fetching Lists' })
//     }
//   }
// }
