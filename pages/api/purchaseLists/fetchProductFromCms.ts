// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from '@/lib/sanity.client';
import type { NextApiRequest, NextApiResponse } from 'next';
import groq from 'groq';
import { Products } from '@/app/typings';

type Data = {
	products: Products[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const products = req.body.productsId.map((item: string) => `'${item}'`);

	const query = groq`*[_id in [${products}]]`;

	if (req.method === 'POST') {
		try {
			const products = await client.fetch(query);

			res.status(200).json({ products });
		} catch (error) {
			res.status(403).json({ message: 'Error while fetch products from Sanity' });
		}
	}
}
