// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/prisma';
import { ObjectId } from 'bson';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	result: {
		id: string;
	};
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const Id: string = req.body.listId;
		console.log(Id);

		try {
			const result = await prisma.purchaseList.delete({
				where: {
					Id: Id,
				},
			});

			res.status(200).json(result);
		} catch (error) {
			res.status(403).json({ message: error });
		}
	}
}
