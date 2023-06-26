// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import groq from 'groq'
import type { NextApiRequest, NextApiResponse } from 'next'

import { client } from '@/lib/sanity.client'
import { HotShotsData } from '@/types/typings'

type Data = {
  hotShot: HotShotsData
}

const query = groq`*[_type == 'hotShot']`

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const hotShot = await client.fetch(query)

  res.status(200).json({ hotShot })
}
