
type Props = {
    numOfProducts: number | undefined
    totalPrice: number | undefined
}

const ListSummary = ({ numOfProducts, totalPrice }: Props) => {
    return (
        <div className='flex flex-col px-2 pb-6 text-lg md:flex-row md:items-center md:justify-between md:w-full md:p-0 md:pr-16 lg:pl-2'>
            {/* How many */}
            <div className='pb-2 md:pb-0 md:pr-2'>
                {numOfProducts} {numOfProducts! > 1 ? 'produkty' : 'produkt'}
            </div>

            {/* Total value */}
            <div>
                Wartość listy:
                <span className='ml-1 font-bold'>
                    {totalPrice?.toFixed(2).replace('.', ',')} zł
                </span>
            </div>

        </div>
    )
}

export default ListSummary