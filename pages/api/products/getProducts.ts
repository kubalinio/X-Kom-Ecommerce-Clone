// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from '@/lib/sanity.client';
import type { NextApiRequest, NextApiResponse } from 'next'
import groq from 'groq'
import { Products } from '@/typings';

type Data = {
  products: Products[]
}

const query = groq`*[_type == 'products'] | order(_createdAt asc)`;


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const products = await client.fetch(query)

  res.status(200).json({products})
}
