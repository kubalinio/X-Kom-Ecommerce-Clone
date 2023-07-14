import groq from 'groq'
import { NextResponse } from 'next/server'

import { client } from '@/lib/sanity.client'
import { Promotions } from '@/types/typings'

const query = groq`*[_type == 'Promocja'] | order(_createdAt desc)`

type Data = {
  promotions: Promotions
}

export async function GET() {
  const promotions = (await client.fetch(query)) as Data

  return NextResponse.json({ promotions }, { status: 200 })
}
