// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import groq from 'groq'
import type { NextApiRequest, NextApiResponse } from 'next'

import { client } from '@/lib/sanity.client'
import { Slides } from '@/types/typings'

type Data = {
  slides: Slides
}

const query = groq`*[_type == 'slides'] | order(_createdAt asc)`

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const slides = await client.fetch(query)

  res.status(200).json({ slides })
}
