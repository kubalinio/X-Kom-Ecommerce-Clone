import { ExtendedPurchaseListItem } from '@/types/db'

import { AddAllAccessibleBtn } from '../components/AddAllAccessibleBtn'
import ListSummary from '../components/ListSummary'
import ProductListItem from '../components/ProductListItem'

type Props = {
  details: ExtendedPurchaseListItem
}

const ProductsContainer = ({ details }: Props) => {
  return (
    <>
      {/* Top - Checking & Do Action Btn  */}
      <div></div>

      {/* Middle - Product Info & Actions */}
      <div>
        {details.productItems.map((product) => (
          <ProductListItem key={product.productId} product={product} productCount={details.productCount} />
        ))}
      </div>

      {/* Bottom - QuantityAll & Value & Add all to Basket */}
      <div className="pt-4 md:-mb-8 md:flex md:items-center md:py-3">
        <ListSummary numOfProducts={details.productCount} totalPrice={details.totalPrice} />

        <div className="min-w-[188px]">
          <div>
            <AddAllAccessibleBtn products={details.productItems} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsContainer
