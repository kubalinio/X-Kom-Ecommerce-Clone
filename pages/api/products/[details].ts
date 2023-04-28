import { client } from '@/lib/sanity.client';
import type { NextApiRequest, NextApiResponse } from 'next';
import groq from 'groq';
import { Product } from '@/app/typings';

// type Data = {
//     product: Product
//   }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const query = groq`*[_type == "products" && slug.current == '${req.query.details}'][0]`;

	if (req.method === 'GET') {
		//Get Auth Users Posts
		try {
			const product = await client.fetch(query);

			res.status(200).json({ product });
		} catch (err) {
			res.status(403).json({ message: 'Error has occured while fetch product' });
		}
	}
}
