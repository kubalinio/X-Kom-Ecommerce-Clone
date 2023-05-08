
import { PurchaseList } from '@/types/typings'
import { ListCard } from './ListCard'

import ListPagination from './ListPagination'
import ListSortBy from './ListSortBy'

type Props = {
    lists: PurchaseList[]
}

const ShopListBody = ({ lists }: Props) => {
    return (
        <>
            {/* Sortuj */}
            {/* <ListSortBy /> */}

            {/* Listy */}
            <div>
                {lists.map((list) => (

                    <ListCard key={list.Id} item={list} />

                ))}
            </div>

            {/* Ilość stron */}
            {/* <ListPagination /> */}
        </>
    )
}

export default ShopListBody