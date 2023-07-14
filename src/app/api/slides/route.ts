import groq from 'groq'
import { NextResponse } from 'next/server'

import { client } from '@/lib/sanity.client'
import { Slides } from '@/types/typings'

type Data = {
  slides: Slides
}

const query = groq`*[_type == 'slides'] | order(_createdAt asc)`

export async function GET() {
  const slides = (await client.fetch(query)) as Data

  return NextResponse.json({ slides }, { status: 200 })
}
