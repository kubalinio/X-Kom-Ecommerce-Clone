'use client'

import config from '../../../../sanity.cli'
import { NextStudioLoading } from 'next-sanity/studio/loading'

export default function Loading() {
    return <>
        <NextStudioLoading />
    </>
}