'use client'

import { ListItem } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

import { ChangeQuantityProduct } from '@/features/shared/services/changeQuantity/ChangeQuantityProduct'
import { formatPrice } from '@/lib/utils'

import { ExpandDropdownList } from '../../listsPage'
import { AddToBasketItem } from './AddToBasketItem'
import { DeleteListItem } from './DeleteListItem'

const ChangeQuntityProductContainer = ({ ProductCount }: { ProductCount: number }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const changeQuantity = (newQ: number) => {
    return
  }

  return (
    <ChangeQuantityProduct
      basketQuantity={ProductCount}
      changeQuantity={(newQ) => changeQuantity(newQ)}
      className="absolute bottom-2 right-1 z-[2] md:static md:mr-8"
    />
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

  return (
    <div className="relative flex min-h-[84px] border-b border-[#ddd] py-2 md:min-h-[auto] md:items-center md:justify-between">
      {/* Product Img & Price & title & Checking */}
      <div className="flex flex-grow items-start">
        {/* Checking & Image */}
        <div className="mr-3 flex shrink-0 items-center md:mr-4 lg:mr-8">
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
              className="h-auto w-full object-contain"
            />
          </span>
        </div>

        {/* Title & price */}
        <div className="mr-11 flex h-full flex-col justify-between md:mr-10 md:w-full md:flex-row md:items-center md:self-center lg:mr-14">
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
        <ExpandDropdownListContainer listId={listId} productId={productId} product={product} count={Count} />

        {/* Quantity */}
        <ChangeQuntityProductContainer ProductCount={Count} />
      </div>

      {/* Desktop: Btn Actions ALl from Product Card */}
      <div className="hidden md:flex md:items-center">
        <ChangeQuntityProductContainer ProductCount={Count} />

        <AddToBasketItem
          variant="desktop"
          mainImage={mainPhoto}
          price={Price}
          productId={productId}
          title={name}
          count={Count}
        />

        <ExpandDropdownListContainer listId={listId} productId={productId} product={product} count={Count} />
      </div>
    </div>
  )
}

export default ProductListItem
