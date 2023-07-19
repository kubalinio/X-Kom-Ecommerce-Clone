import Link from 'next/link'
import { ReactNode } from 'react'

import { LoadingSpinner } from '@/features/shared/components/LoadingSpinner'
import { db } from '@/lib/db'

import { HotshotFeed } from './hotshotFeed'
import SpecialBorder from './SpecialBorder'

const WrapperHotShot = ({ children }: { children: ReactNode }) => (
  <section className="mb-4 w-full border-b border-[#ebebeb] bg-white p-4 pt-0 md:p-6 md:pt-3 lg:mb-0 lg:w-[31.666%] lg:border-none lg:p-0 lg:pb-8 lg:pr-8">
    <div className="relative flex p-[2px] h-full">{children}</div>
  </section>
)

export const HotShot = async () => {

  const hotData = await db.product.findUnique({
    where: {
      id: 'clk9d805n0008upv0ul678nbh'
    }
  })

  return (
    <WrapperHotShot>
      {/* Content */}
      {!hotData ? (
        <div className='flex items-center justify-center w-full h-full p-16'>
          <LoadingSpinner />
        </div>
      ) : (
        <div className="relative z-[1] w-full overflow-hidden rounded-xl">
          <Link href={`/goracy_strzal`}>
            <HotshotFeed hotData={hotData} />
          </Link>
        </div>
      )}

      {/* Border with spans */}
      <SpecialBorder />
    </WrapperHotShot>
  )
}
