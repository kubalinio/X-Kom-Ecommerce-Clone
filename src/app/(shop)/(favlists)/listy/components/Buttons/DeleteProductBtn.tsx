'use client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { HiOutlineTrash } from 'react-icons/hi2'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const deleteProductList = async ({ listId, productId }: { listId: string; productId: string }) => {
  const response = await axios.delete('/api/purchaseLists/deleteProductList', {
    data: { listId, productId },
  })

  return response
}

const DeleteProductBtn = ({ listId, productId }: { listId: string; productId: string }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: async ({ listId, productId }: { listId: string; productId: string }) =>
      await axios.post('/api/purchaseLists/deleteProductList', {
        listId: listId,
        productId: productId,
      }),
    mutationKey: ['detail-list'],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSuccess(data) {
      queryClient.invalidateQueries(['detail-list'])
    },
  })

  const handleDeleteBtn = () => {
    mutate({ listId, productId })
  }

  return (
    <button
      onClick={handleDeleteBtn}
      title="Usuń z listy"
      className="inline-flex h-[48px] w-full items-center justify-start whitespace-nowrap rounded-none bg-transparent px-4 py-3 text-[#2a2a2a] transition-colors duration-200 hover:bg-[#ddd]"
    >
      <span className="mr-3 inline-block h-6 w-6 overflow-hidden ">
        <HiOutlineTrash className="h-full w-full text-xl" />
      </span>
      <span className="flex flex-col items-center whitespace-nowrap text-center">
        <span className="mt-[2px] inline-block text-center">Usuń z listy</span>
      </span>
    </button>
  )
}

export default DeleteProductBtn
