'use client'

import LoadingSkelleton from '@/components/features/basket/LoadingSkelleton'
import { ReturnButtonMobile } from '@/features/listyPage/Buttons/ReturnBtnMobile'
import { ShopListBody } from '@/features/listyPage/containers/userShopList'
import { NeedHelpInfo } from '@/features/listyPage/containers/userShopList/NeedHelpInfo'
import { ShopListBottom } from '@/features/listyPage/containers/userShopList/ShopListBottom'
import { ShopListHead } from '@/features/listyPage/containers/userShopList/ShopListHead'
import { useGetFavLists } from '@/features/listyPage/dataAccess/getFavLists'

export type navUserItems = {
  title: string
  slug: string
  icon: JSX.Element
  iconActive?: JSX.Element
}

export default function ListsPage() {
  const { data: listsData, isFetching } = useGetFavLists()

  return (
    <section className="w-full sm:px-2 md:px-3 lg:w-3/4 lg:border-l lg:border-[#ddd] lg:px-4">
      {isFetching ? (
        <LoadingSkelleton />
      ) : (
        <div className="lg:pl-2">
          {/* Back konto */}
          <ReturnButtonMobile link="" title="Wróć" />

          {/* Button to Add List React Portal*/}
          <ShopListHead listsLength={listsData?.length} />

          <div className="min-h-[32px]">{/* Notification */}</div>

          {/* Created List Dynamic with fav products */}

          {/* How use lists */}
          {listsData ? <ShopListBody lists={listsData ?? []} /> : null}

          <ShopListBottom isFetched={(listsData?.length ?? 0) > 0} />

          {/* Need Help ? */}
          <div className="max-lg:hidden">
            <NeedHelpInfo />
          </div>
        </div>
      )}
    </section>
  )
}
