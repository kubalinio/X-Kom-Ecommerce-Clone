// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import groq from 'groq'
import type { NextApiRequest, NextApiResponse } from 'next'

import { client } from '@/lib/sanity.client'
import { Brands } from '@/types/typings'

const query = groq`*[_type == 'brands']`

type Data = {
  brands: Brands[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const brands = await client.fetch(query)

  res.status(200).json({ brands })
}
