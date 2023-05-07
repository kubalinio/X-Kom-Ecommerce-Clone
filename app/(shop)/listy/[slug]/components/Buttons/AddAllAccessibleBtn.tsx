import React from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

type Props = {}

const AddAllAccessibleBtn = (props: Props) => {

    // const [showModal, setShowModal] = useState(false)
    // console.log(product)
    // const { _id, slug, special, mainImage, title, price } = product

    // const dispatch = useDispatch()

    // const currentSlug = slug.current

    const addItemToBasket = () => {

        // const product = {
        //     _id, title, price, mainImage, quantity, slug: currentSlug, special
        // }

        // dispatch(addToBasket(product))
        // dispatch(getTotals())

    }

    return (
        <button
            onClick={addItemToBasket}
            title='Dodaj dostępne'
            className='flex items-center justify-center w-full h-[36px] px-2 py-3 rounded-full bg-[#119e00] text-white hover:bg-[#1f8014] ocus:bg-[#1f8014] transition-colors duration-300 '
        >
            <span className='flex items-center justify-center text-white'>
                <span className='inline-block w-[24px] h-[24px]'>
                    <MdOutlineAddShoppingCart className='w-full h-full stroke-[0px]' />
                </span>

                <span className='flex flex-col'>
                    <span className='whitespace-nowrap'>Dodaj dostępne</span>
                </span>
            </span>
        </button>

    )
}

export default AddAllAccessibleBtn