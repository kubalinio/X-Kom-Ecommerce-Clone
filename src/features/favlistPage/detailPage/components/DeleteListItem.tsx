'use client'

import { DeleteFavListBtn } from '@/features/shared/services/favLists'
import { useRemoveItemFavList } from '@/features/shared/services/favLists/dataAccess/mutations/removeItemFavList'

const DeleteProductBtn = ({ listId, productId }: { listId: string; productId: string }) => {
  const { mutate } = useRemoveItemFavList({ productId })

  const handleClick = () => {
    mutate(listId)
  }

  return <DeleteFavListBtn onClick={() => handleClick()} variant={'mobile'} size={'sm'} text="Usuń z listy" />
}

export default DeleteProductBtn