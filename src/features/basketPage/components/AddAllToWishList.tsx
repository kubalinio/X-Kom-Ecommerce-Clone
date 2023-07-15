'use client'

import { AiOutlineHeart } from 'react-icons/ai'

import useWindowDimensions from '@/hooks/useWindowDimensions'

const AddToWishList = () => {
  const { width } = useWindowDimensions()

  return (
    <button
      disabled={true}
      title={`${width ?? 0 >= 720 ? 'Zapisz jako liste' : 'Zapisz'}`}
      className="inline-flex h-10 w-full cursor-pointer items-center justify-start rounded-full border-none bg-transparent px-3 py-2 text-[#4d4d4d] transition-colors duration-200 hover:bg-gray-100 disabled:text-gray-400"
    >
      <span className="mr-1 inline-block h-6 w-6">
        <AiOutlineHeart className="h-full w-full text-2xl" />
      </span>

      <span className="flex flex-col">
        <span className="whitespace-nowrap py-3">{width ?? 0 >= 720 ? 'Zapisz jako listę' : 'Zapisz'}</span>
      </span>
    </button>
  )
}

export default AddToWishList
