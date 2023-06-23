/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../../prisma'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { listId, productId } = req.body

//     const priceDeleteProduct = await prisma.productItem.findUnique({
//       where: {
//         Id: productId,
//       },
//       select: {
//         Price: true,
//       },
//     })

//     try {
//       const data = await prisma.purchaseList.update({
//         where: {
//           Id: listId,
//         },
//         data: {
//           ProductItems: {
//             delete: {
//               Id: productId,
//             },
//           },
//           TotalPrice: {
//             decrement: priceDeleteProduct!.Price!,
//           },
//         },
//       })

//       res.status(200).json(data)
//     } catch (error) {
//       res.status(403).json({ message: error })
//     }
//   }
// }

// const data = await prisma.productItem.create({
// 	data: {
// 		listId: listId,
// 		Id: Id,
// 		Name: req.body.Name,
// 		MainPhoto: req.body.MainPhoto,
// 		IsPriceVisible: req.body.IsPriceVisible,
// 	},
// });

// const data = await prisma.productItem.create({
// 	data: {
// 		listId: req.body.listId,
// 		Id: req.body.Id,
// 		Name: req.body.Name,
// Price: req.body.Price,
// MainPhoto: req.body.MainPhoto,
// ProductCount: req.body.ProductCount,
// WebUrl: req.body.WebUrl,
// IsPriceVisible: req.body.IsPriceVisible,
// 	},
// });
