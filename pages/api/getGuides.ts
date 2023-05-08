import { client } from '@/lib/sanity.client';
import type { NextApiRequest, NextApiResponse } from 'next';

import groq from 'groq';
import { Guide } from '@/types/typings';

const query = groq`*[_type == 'guides'] | order(_createdAt asc)`;

type Data = {
	guides: Guide[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const guides = await client.fetch(query);

	res.status(200).json({ guides });
}
