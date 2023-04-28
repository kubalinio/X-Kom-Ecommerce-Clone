'use client'

import { RootState } from '@/app/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AddToFavListBtn } from '../AddToFavList'
import { AddToFavPopper } from '../AddToFavList/AddToFavPopper'
import { FavModal } from '../AddToFavList/Modal'



const AddToFav = ({ id }: { id: string }) => {
    const [show, setShow] = useState(false)
    const [liked, setLiked] = useState(false)

    const purchaseList = useSelector((state: RootState) => state.purchaseList)

    useEffect(() => {
        purchaseList.purchaseListItems.map(item => {
            if (item.id === id) {
                setLiked(true)
            }
        })
    }, [])

    const handleShowInfo = (isLiked: boolean) => {
        setShow(isLiked)
        setLiked(isLiked)
    }

    return (
        <div className='absolute hidden transition-all duration-300 top-1 right-1 lg:block lg:top-3 lg:right-3'>

            {/* Transparent overlay */}
            {show === true ?
                <div onClick={() => setShow(false)} className='fixed inset-0 overflow-auto cursor-auto z-[998]' /> :
                ''
            }

            <div className={`transition-opacity duration-400 lg:flex lg:w-8 lg:h-8 lg:group-hover:opacity-100 ${liked ? 'lg:opacity-100' : 'lg:opacity-0'}`}>

                <div className='relative inline-block pointer-events-auto align-middle z-[999]'>
                    {/* Fav Component to Add List Favorited products */}
                    <div>
                        <AddToFavListBtn
                            id={id}
                            mobile={false}
                            showInfo={(isLiked) => handleShowInfo(isLiked)}
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