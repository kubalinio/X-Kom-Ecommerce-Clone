import { notFound } from 'next/navigation'

import EmptyList from '@/features/favlistPage/detailPage/components/EmptyList'
import ReturnBtn from '@/features/favlistPage/detailPage/components/ReturnBtn'
import ListHeader from '@/features/favlistPage/detailPage/containers/ListHeader'
import ProductsContainer from '@/features/favlistPage/detailPage/containers/ProductsContainer'
import { NeedHelpInfo } from '@/features/favlistPage/listsPage/containers/userShopList/NeedHelpInfo'
import { db } from '@/lib/db'

type Props = {
  params: {
    slug: string
  }
}

export default async function DetailListSection(url: Props) {
  const listData = await db.purchaseList.findUnique({
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
