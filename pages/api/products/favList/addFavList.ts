import prisma from '@/prisma';
import { ObjectId } from 'bson';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	//   //Get User
	//   const prismaUser = await prisma.user.findUnique({
	//     where: { email: session.user.email },
	//   })
	const id = new ObjectId();

	//check to see if post was liked by user
	const favList = await prisma.purchaseList.findFirst({
		where: {
			id: req.body.favListId,
		},
	});

	if (req.method === 'POST') {
		//Add Like
		try {
			if (!favList) {
				const result = await prisma.purchaseList.create({
					data: {
						id: id.toString(),
						name: 'Ulubione',
						products: {
							set: req.body.productId,
						},
					},
				});
				res.status(201).json(result);
			} else {
				const result = await prisma.purchaseList.update({
					where: {
						id: favList.id,
					},
					data: {
						products: {
							push: req.body.productId,
						},
					},
				});
				res.status(200).json(result);
			}
		} catch (err) {
			res.status(403).json({ err: 'Error has occured while making a post' });
		}
	}
}
