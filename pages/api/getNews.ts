// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from '@/lib/sanity.client';
import type { NextApiRequest, NextApiResponse } from 'next';

import groq from 'groq';
import { AllNews } from '@/types/typings';

const query = groq`*[_type == 'news'] | order(_createdAt asc)`;

type Data = {
	news: AllNews;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const news = await client.fetch(query);

	res.status(200).json({ news });
}
