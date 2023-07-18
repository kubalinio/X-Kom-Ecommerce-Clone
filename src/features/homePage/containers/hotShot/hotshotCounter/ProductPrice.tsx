type Props = {
  finished: boolean
  price: number
  oldPrice: number
  promotionGainTextLines?: {
    title: string
    value: string
  }
}

export const ProductPrice = ({ finished, price, oldPrice, promotionGainTextLines }: Props) => {
  return (
    <div className="mt-2 mb-3 text-sm font-lato md:mt-8 lg:mt-2">
      <p
        className={`block text-center text-4xl/10 font-bold text-[#4d4d4d] lg:mb-4 ${finished ? 'text-[#4d4d4d]' : 'text-[#fa0064]'
          }`}
      >
        {price.toString().replace('.', ',')} zł
      </p>

      <div className="hidden md:block lg:hidden">
        <p className="mb-2 text-lg/6 text-[#fa0064]">
          {promotionGainTextLines?.title} {promotionGainTextLines?.value}
        </p>
      </div>

      <p className="text-[#707070] lg:text-left">
        <span className="text-lg line-through">{oldPrice.toString().replace('.', ',')} zł</span> - cena regularna
      </p>

      <p className="text-[#707070] lg:text-left">
        {oldPrice.toString().replace('.', ',')} zł - najniższa cena z 30 dni przed obniżką
      </p>

      {/* <span className='block text-lg leading-6 line-through text-[#707070] md:mr-2'>{oldPrice.toString().replace('.', ',')} zł</span>
            {/* Finished  */}
      {/* <span className={`block text-3xl text-[#4d4d4d] font-bold leading-10 ${finished ? 'text-[#4d4d4d]' : 'text-[#fa0064]'}`}>{price.toString().replace('.', ',')} zł</span>  */}
    </div>
  )
}

export default ProductPrice

// < div class="sc-1bb6kqq-7 hUWcYW" >
// <p class="sc-1bb6kqq-4 beOjbI">49,99 zł</p>
// <div class="sc-1s1zksu-0 ecpleP sc-14h089p-0 jDdHWP">
//     <p class="sc-1bb6kqq-6 eBrrxn">Oszczędź 38 %</p>
//     </div>
//     <p class="sc-fznMnq ihemoi sc-1bb6kqq-5 gkoJce" color="neutral700">
//         <span class="sc-fznMnq jNEqCi" color="neutral700">79,99 zł</span> – cena regularna
//         </p>
//         <p class="sc-fznMnq ihemoi" color="neutral700">
//             79,99 zł – najniższa cena z 30 dni przed obniżką
//         </p>
//         </div >
