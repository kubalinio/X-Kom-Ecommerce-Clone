// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from '@/lib/sanity.client';
import type { NextApiRequest, NextApiResponse } from 'next'
import groq from 'groq'
import { HotShot } from '@/typings';

type Data = {
  hotShot: HotShot
}

const query = groq`*[_type == 'hotShot']`;


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const hotShot = await client.fetch(query)

  res.status(200).json({hotShot})
}