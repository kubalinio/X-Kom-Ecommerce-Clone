// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const { listId, Id } = req.body;

		const existingItem = await prisma.productItem.findFirst({
			where: {
				Id: Id,
				listId: listId,
			},
		});

		if (!existingItem) {
			try {
				const data = await prisma.purchaseList.update({
					where: {
						Id: listId,
					},
					data: {
						ProductItems: {
							create: {
								Id: Id,
								Name: req.body.Name,
								MainPhoto: req.body.MainPhoto,
								IsPriceVisible: req.body.IsPriceVisible,
								Price: req.body.Price,
								ProductCount: req.body.ProductCount,
							},
						},
						TotalPrice: {
							increment: req.body.Price,
						},
					},
				});

				res.status(201).json(data);
			} catch (error) {
				res.status(403).json({ message: error });
			}
		} else {
			try {
				const data = await prisma.purchaseList.update({
					where: {
						Id: listId,
					},
					data: {
						ProductItems: {
							delete: {
								Id: Id,
							},
						},
						TotalPrice: {
							decrement: req.body.Price,
						},
					},
				});

				res.status(200).json(data);
			} catch (error) {
				res.status(403).json({ message: error });
			}
		}
	}
}
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
