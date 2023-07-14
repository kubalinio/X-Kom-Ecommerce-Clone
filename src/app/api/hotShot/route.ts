import groq from 'groq'
import { NextResponse } from 'next/server'

import { client } from '@/lib/sanity.client'
import { HotShotsData } from '@/types/typings'

type Data = {
  hotShot: HotShotsData
}

const query = groq`*[_type == 'hotShot']`

export async function GET() {
  const hotShot = (await client.fetch(query)) as Data

  return NextResponse.json({ hotShot }, { status: 200 })
}
