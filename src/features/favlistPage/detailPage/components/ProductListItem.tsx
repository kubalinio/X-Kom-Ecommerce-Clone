'use client'

import { ListItem } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/features/shared/components/ui/Select'
import { useChangeFavItemQuantity } from '@/features/shared/services/favLists/dataAccess/mutations/changeFavItemQuantity'
import { formatPrice } from '@/lib/utils'

import { ExpandDropdownList } from '../../listsPage'
import { AddToBasketItem } from './AddToBasketItem'
import { DeleteListItem } from './DeleteListItem'

interface ChangeQuantityProps {
  ProductCount: number
  changeQuantity: (val: number) => void
}

const ChangeQuantityProductContainer: FC<ChangeQuantityProps> = ({ ProductCount, changeQuantity }) => {

  // md:mr-4 for box

  return (
    <div className='mr-4'>
      <Select defaultValue={ProductCount.toString()} onValueChange={(value: string) => changeQuantity(+value)}>

        <SelectTrigger >
          <SelectValue />
        </SelectTrigger>

        <SelectContent>

          <SelectGroup>
            {Array(9).fill(null).map((_, qnt) => (
              <SelectItem key={qnt} value={(qnt + 1).toString()}>{qnt + 1}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

const ExpandDropdownListContainer = ({
  listId,
  productId,
  product,
  count,
}: {
  listId: string
  productId: string
  product: ListItem
  count: number
}) => {
  const { name, Price, mainPhoto } = product

  return (
    <ExpandDropdownList className="max-md:absolute max-md:right-0 max-md:top-1 md:ml-4">
      <DeleteListItem listId={listId} productId={productId} />
      {/* On MD Delete ,no hidden */}
      <div className="md:hidden">
        <AddToBasketItem
          variant="mobile"
          mainImage={mainPhoto}
          price={Price}
          productId={productId}
          title={name}
          count={count}
        />
      </div>
    </ExpandDropdownList>
  )
}

type Props = {
  product: ListItem
  productCount: number
}

const ProductListItem = ({ product }: Props) => {
  const { name, mainPhoto, webUrl, Price, listId, Count, productId } = product
  const [count, setCount] = useState(Count)
  const { mutate } = useChangeFavItemQuantity()

  const handleChangeQuantity = (newQnt: number) => {
    const count = newQnt
    mutate({ listId, productId, count })
    setCount(newQnt)
  }

  return (
    <div className="relative flex min-h-[84px] border-b border-[#ddd] py-2 md:min-h-[auto] md:items-center md:justify-between">
      {/* Product Img & Price & title & Checking */}
      <div className="flex items-start flex-grow">
        {/* Checking & Image */}
        <div className="flex items-center mr-3 shrink-0 md:mr-4 lg:mr-8">
          {/* Label(Checking) */}
          {/* <label htmlFor=""></label> */}

          {/* Image */}
          <span className="inline-flex h-[60px] w-[70px] items-center justify-center overflow-hidden">
            <Image
              width={70}
              height={60}
              alt={name}
              title={name}
              src={mainPhoto}
              className="object-contain w-full h-auto"
            />
          </span>
        </div>

        {/* Title & price */}
        <div className="flex flex-col justify-between h-full mr-11 md:mr-10 md:w-full md:flex-row md:items-center md:self-center lg:mr-14">
          <div className="flex flex-col">
            <Link href={`/products/${webUrl}`} title={name} className="mr-2 break-words md:mr-8 lg:mr-16">
              {name}
            </Link>
          </div>

          <div className="mt-2 md:mt-0 md:text-right">
            <p className="whitespace-nowrap">{formatPrice(Price)} zł</p>
          </div>
        </div>
      </div>

      {/* Mobile: Expand Btn Action & Counting Product */}
      <div className="md:hidden">
        {/* Expand Btns */}
        <ExpandDropdownListContainer
          listId={listId}
          productId={productId}
          product={product}
          count={count}
        />

        {/* Quantity */}
        <ChangeQuantityProductContainer
          ProductCount={count}
          changeQuantity={(newQnt) => handleChangeQuantity(newQnt)}
        />

      </div>

      {/* Desktop: Btn Actions ALl from Product Card */}
      <div className="hidden md:flex md:items-center">
        <ChangeQuantityProductContainer
          ProductCount={count}
          changeQuantity={(newQnt) => handleChangeQuantity(newQnt)}
        />

        <AddToBasketItem
          variant="desktop"
          mainImage={mainPhoto}
          price={Price}
          productId={productId}
          title={name}
          count={count}

        />

        <ExpandDropdownListContainer listId={listId} productId={productId} product={product} count={count} />
      </div>
    </div>
  )
}

export default ProductListItem
