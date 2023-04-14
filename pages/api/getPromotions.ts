// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from '@/lib/sanity.client';
import type { NextApiRequest, NextApiResponse } from 'next'

import groq from 'groq'
import { Promotions } from '@/typings';

const query = groq`*[_type == 'Promocja'] | order(_createdAt desc)`;

type Data = {
  promotions: Promotions
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const promotions = await client.fetch(query)

  res.status(200).json({promotions})
}
