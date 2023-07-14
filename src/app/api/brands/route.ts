import groq from 'groq'
import { NextResponse } from 'next/server'

import { client } from '@/lib/sanity.client'
import { Brands } from '@/types/typings'

const query = groq`*[_type == 'brands']`

type Data = {
  brands: Brands[]
}

export async function GET() {
  const brands = (await client.fetch(query)) as Data

  return NextResponse.json({ brands }, { status: 200 })
}
