import groq from 'groq'
import { NextResponse } from 'next/server'

import { client } from '@/lib/sanity.client'
import { AllNews } from '@/types/typings'

const query = groq`*[_type == 'news'] | order(_createdAt asc)`

type Data = {
  news: AllNews
}

export async function GET() {
  const news = (await client.fetch(query)) as Data

  return NextResponse.json({ news }, { status: 200 })
}
