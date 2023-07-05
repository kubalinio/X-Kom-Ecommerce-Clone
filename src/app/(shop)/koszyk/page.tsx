import { Basket } from '@prisma/client'
import { cookies } from 'next/headers'

import { BasketPageFeed } from '@/components/features/basket/BasketPageFeed'
import EmptyBasket from '@/components/features/basket/EmptyBasket'
import { Information } from '@/components/features/basket/Information'
import { db } from '@/lib/db'
import { ExtendedBasketItem } from '@/types/db'

export default async function BasketPage() {
  const cookieStore = cookies()
  const basketToken = cookieStore.get('basketToken')?.value ?? undefined
  let basketData:
    | (Basket & {
        Items: ExtendedBasketItem[]
      })
    | undefined

  if (basketToken) {
    basketData = (await db.basket.findUnique({
      where: {
        id: basketToken,
      },
      include: {
        Items: true,
      },
    })) as Basket & {
      Items: ExtendedBasketItem[]
    }
  } else {
    basketData = undefined
  }

  return (
    <main className="relative mx-auto mt-5 w-[calc(100%-32px)] md:w-[calc(100%-48px)] lg:mt-12 lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]">
      {basketData && basketData.productCount > 0 ? <BasketPageFeed basketData={basketData} /> : <EmptyBasket />}

      <hr className="-mx-4 h-[1px] w-[calc(100%+32px)] bg-[#ddd] md:hidden" />

      {/* Are you have questions ? */}
      <div className="flex w-full flex-col border-t border-[#ddd] py-4">
        <Information />
      </div>
    </main>
  )
}
