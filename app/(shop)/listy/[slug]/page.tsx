import React from 'react'

type Props = {
    params: {
        slug: string
    }
}

const DetailListSection = (url: Props) => {
    return (
        <div>DetailListSection {url.params.slug}</div>
    )
}

export default DetailListSection