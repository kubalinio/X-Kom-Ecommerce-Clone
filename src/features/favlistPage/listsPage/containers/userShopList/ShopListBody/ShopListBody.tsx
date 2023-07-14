import { ExtendedPurchaseListItem } from '@/types/db'

import { ListCard } from './ListCard'

type Props = {
  lists: ExtendedPurchaseListItem[]
}

export const ShopListBody = ({ lists }: Props) => {
  return (
    <>
      {/* Sortuj */}
      {/* <ListSortBy /> */}

      {/* Listy */}
      <div>
        {lists.map((list) => (
          <ListCard key={list.id} item={list} />
        ))}
      </div>

      {/* Ilość stron */}
      {/* <ListPagination /> */}
    </>
  )
}
