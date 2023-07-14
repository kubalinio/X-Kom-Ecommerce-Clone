import groq from 'groq'
import { NextResponse } from 'next/server'

import { client } from '@/lib/sanity.client'
import { Guide } from '@/types/typings'

const query = groq`*[_type == 'guides'] | order(_createdAt asc)`

type Data = {
  guides: Guide[]
}

export async function GET() {
  const guides = (await client.fetch(query)) as Data

  return NextResponse.json({ guides }, { status: 200 })
}
