import { AddToFavListBtn } from "@/app/components/AddToFavList"
import AddToFavModal from "@/app/components/AddToFavList/AddToFavModal"
import { Modal, ModalContainer, ModalHeader } from "@/app/components/Modals/Modal"

import { useState } from "react"

type Props = {
    id: string
}

export const BasketAddToFav = ({ id }: Props) => {
    const [show, setShow] = useState(false)

    const handleShowModal = (isLiked: boolean) => {
        setShow(isLiked)
    }


    return (

        <>
            <AddToFavListBtn
                id={id}
                mobile={false}
                showInfo={(isLiked) => handleShowModal(isLiked)}
            />


            <ModalContainer openModal={show}>
                {show ? (
                    <AddToFavModal close={() => setShow(false)} />
                ) : null
                }
            </ModalContainer>
        </>
    )

    // } else {

    //     return (

    //         <button
    //             onClick={() => handleClickBtn()}
    //             className='relative hidden md:flex items-center justify-center w-[32px] h-[32px] bg-transparent border-none ml-1 cursor-pointer rounded-full hover:bg-[#ddd] transition-colors duration-200'
    //         >
    //             <span className='flex items-center justify-center w-5 h-5 overflow-hidden '>
    //                 {isLoading ? <LoadingSpinner /> :
    //                     liked ? <IoMdHeart className='w-full h-full' /> :
    //                         <IoMdHeartEmpty className='w-full h-full' />
    //                 }

    //             </span>

    //             <div className={`absolute top-1/2 left-1/2 rounded-full w-10 h-10  border-[#1a1a1a] transform -translate-x-1/2 -translate-y-1/2 z-[10] ${effect && 'animate-pulsOnceClick'}`} />

    //         </button>
    //     )

    // }


}

