/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { notFound } from 'next/navigation'

import { db } from '@/lib/db'

import { NeedHelpInfo } from '../../listy/components/UserShopList/NeedHelpInfo'
import EmptyList from './components/EmptyList'
import ListHeader from './components/ListHeader'
import ProductsContainer from './components/ProductsContainer'
import ReturnBtn from './components/ReturnBtn'

type Props = {
  params: {
    slug: string
  }
}

export default async function DetailListSection(url: Props) {
  const listData = await db.purchaseListItem.findUnique({
    where: {
      id: url.params.slug,
    },
    include: {
      productItems: true,
    },
  })

  if (!listData) return notFound()

  const { id, lastUpdate, name, productCount } = listData

  return (
    <section className="relative w-full sm:px-2 md:px-3 lg:w-3/4 lg:border-l lg:border-[#ddd] lg:px-4">
      <div className="bg:pl-2 lg:pl-4">
        <ReturnBtn />

        <div>
          {/* Notification */}
          <div></div>

          {/* List Header */}
          <ListHeader listId={id} updateAt={lastUpdate} name={name} />

          {/* Lists Container */}
          {productCount > 0 ? <ProductsContainer details={listData} /> : <EmptyList />}
        </div>

        <div className="max-lg:hidden">
          <NeedHelpInfo />
        </div>
      </div>
    </section>
  )
}
