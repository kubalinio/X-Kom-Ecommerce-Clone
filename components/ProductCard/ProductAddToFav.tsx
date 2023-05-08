'use client'


import { Product } from '@/types/typings'
import { useEffect, useState } from 'react'
import { AddToFavListBtn } from '../AddToFavList'
import { AddToFavPopper } from '../AddToFavList/AddToFavPopper'

type Props = {
    product: Product
}

const AddToFav = ({ product }: Props) => {

    const [show, setShow] = useState(false)
    const [liked, setLiked] = useState(false)

    const handleShowInfo = (isLiked: boolean, isShow: boolean) => {
        setShow(isShow)
        setLiked(isLiked)
    }

    return (
        <div className='absolute hidden transition-all duration-300 top-1 right-1 lg:block lg:top-3 lg:right-3'>

            {/* Transparent overlay */}
            {show === true ?
                <div onClick={() => setShow(false)} className='fixed inset-0 overflow-auto cursor-auto z-[105]' /> :
                ''
            }

            <div className={`transition-opacity duration-400 lg:flex lg:w-8 lg:h-8 lg:group-hover:opacity-100 ${liked ? 'lg:opacity-100' : 'lg:opacity-0'}`}>

                <div className='relative inline-block pointer-events-auto align-middle z-[106]'>
                    {/* Fav Component to Add List Favorited products */}
                    <div>
                        <AddToFavListBtn
                            versionBtn={'DesktopFavBtn'}
                            showInfo={(isLiked, isShow) => handleShowInfo(isLiked, isShow)}
                            product={product}
                        />
                    </div>

                    {/* Modal */}
                    <AddToFavPopper
                        show={show}
                        close={() => setShow(false)}
                    />

                </div>

            </div>
        </div>
    )
}

export default AddToFav