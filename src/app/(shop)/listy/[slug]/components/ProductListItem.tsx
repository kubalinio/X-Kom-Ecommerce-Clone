import Image from 'next/image'
import Link from 'next/link'

import { ChangeQuantityProduct } from '@/components/ChangeQuantityProduct'
// import { AddToBasket } from '@/components/ProductCard/AddToBasket'
import { urlFor } from '@/lib/sanity.client'
import { PurchaseListProduct } from '@/types/typings'

import AddToBasketBtn from '../../components/Buttons/AddToBasketBtn'
import DeleteProductBtn from '../../components/Buttons/DeleteProductBtn'
import { ExpandDropdownList } from '../../components/ExpandDropdownList'

type Props = {
  product: PurchaseListProduct
}

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
  product: PurchaseListProduct
}) => {
  return (
    <ExpandDropdownList className="max-md:absolute max-md:right-0 max-md:top-1 md:ml-4">
      <DeleteProductBtn listId={listId} productId={productId} />

      {/* On MD Delete ,no hidden */}
      <div className="md:hidden">
        <AddToBasketBtn product={product} />
      </div>
    </ExpandDropdownList>
  )
}

const ProductListItem = ({ product }: Props) => {
  // console.log(product)
  const { Name, MainPhoto, WebUrl, Price, ProductCount, listId, Id } = product

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
              alt={Name}
              title={Name}
              src={urlFor(MainPhoto).url()}
              className="h-auto w-full object-contain"
            />
          </span>
        </div>

        {/* Title & price */}
        <div className="mr-11 flex h-full flex-col justify-between md:mr-10 md:w-full md:flex-row md:items-center md:self-center lg:mr-14">
          <div className="flex flex-col">
            <Link href={`/products/${WebUrl}`} title={Name} className="mr-2 break-words md:mr-8 lg:mr-16">
              {Name}
            </Link>
          </div>

          <div className="mt-2 md:mt-0 md:text-right">
            <p className="whitespace-nowrap">{Price.toFixed(2).replace('.', ',')} zł</p>
          </div>
        </div>
      </div>

      {/* Mobile: Expand Btn Action & Counting Product */}
      <div className="md:hidden">
        {/* Expand Btns */}
        <ExpandDropdownListContainer listId={listId} productId={Id} product={product} />

        {/* Quantity */}
        <ChangeQuntityProductContainer ProductCount={ProductCount} />
      </div>

      {/* Desktop: Btn Actions ALl from Product Card */}
      <div className="hidden md:flex md:items-center">
        <ChangeQuntityProductContainer ProductCount={ProductCount} />

        {/* @TODO Types */}
        {/* <AddToBasket
          id={product.Id}
          // slug={''}
          mainImage={product.MainPhoto}
          title={product.Name}
          price={product.Price}
          className="static flex h-[32px] min-w-[32px] items-center justify-center"
        /> */}

        <ExpandDropdownListContainer listId={listId} productId={Id} product={product} />
      </div>
    </div>
  )
}

export default ProductListItem
