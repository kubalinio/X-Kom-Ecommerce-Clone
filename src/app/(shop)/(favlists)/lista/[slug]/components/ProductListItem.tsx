'use client'

import { ListItem } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

import { AddToBasket } from '@/components/Basket/AddToBasket'
import { ChangeQuantityProduct } from '@/components/ChangeQuantityProduct'
// import { AddToBasket } from '@/components/ProductCard/AddToBasket'
import { formatPrice } from '@/lib/utils'

import DeleteProductBtn from '../../../listy/components/Buttons/DeleteProductBtn'
import { ExpandDropdownList } from '../../../listy/components/ExpandDropdownList'

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
}: {
  listId: string
  productId: string
  product: ListItem
}) => {
  const { name, id, Price, mainPhoto } = product

  return (
    <ExpandDropdownList className="max-md:absolute max-md:right-0 max-md:top-1 md:ml-4">
      <DeleteProductBtn listId={listId} productId={productId} />

      {/* On MD Delete ,no hidden */}
      <div className="md:hidden">
        <AddToBasket
          comVariant="ProductCard"
          className=""
          count={1}
          name={name}
          productId={id}
          photo={mainPhoto}
          price={Price}
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
  const { name, mainPhoto, webUrl, Price, listId, id, Count } = product

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
        <ExpandDropdownListContainer listId={listId} productId={id} product={product} />

        {/* Quantity */}
        <ChangeQuntityProductContainer ProductCount={Count} />
      </div>

      {/* Desktop: Btn Actions ALl from Product Card */}
      <div className="hidden md:flex md:items-center">
        <ChangeQuntityProductContainer ProductCount={Count} />

        {/* @TODO Types */}
        <AddToBasket
          comVariant="ProductCard"
          count={Count}
          name={name}
          price={Price}
          photo={mainPhoto}
          productId={id}
          className="static flex h-[32px] min-w-[32px] items-center justify-center"
        />

        <ExpandDropdownListContainer listId={listId} productId={id} product={product} />
      </div>
    </div>
  )
}

export default ProductListItem
