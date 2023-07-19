type Props = {
  price: number
}

const ProductPrice = ({ price }: Props) => {
  return (
    <div className="m-0 md:mx-4">
      {/* If Promotion */}
      {/* <div className='text-right'>Oszczędz (kwota) zł</div> */}
      <div className="inline-flex w-full items-baseline justify-end">
        {/* If Promotion Previous price */}
        {/* <div className='mr-2 text-[#949494] line-through'>Prev Price</div> */}
        <div className="text-[18px] text-[#4d4d4d]">{price.toFixed(2).replace('.', ',')} zł</div>
      </div>
    </div>
  )
}

export default ProductPrice
