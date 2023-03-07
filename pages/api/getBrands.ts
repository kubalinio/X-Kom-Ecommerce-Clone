// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from '@/lib/sanity.client';
import type { NextApiRequest, NextApiResponse } from 'next'

import groq from 'groq'

const query = groq`*[_type == 'brands']`;

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const brands = await client.fetch(query)

  res.status(200).json({brands})
}
