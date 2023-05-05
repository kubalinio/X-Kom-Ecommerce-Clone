// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	name: string;
};

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
			});

			res.status(200).json(data);
		} catch (error) {
			res.status(403).json({ message: 'Error fetching Lists' });
		}
	}
}
