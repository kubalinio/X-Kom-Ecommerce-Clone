import { AddToFavListBtn, AddToFavModal } from "@/components/AddToFavList"

import { ModalContainer } from "@/components/Modal"
import { BasketItem } from "@/store/basketSlice"

import { useState } from "react"

type Props = {
    product: BasketItem
}

export const BasketAddToFav = ({ product }: Props) => {
    const [show, setShow] = useState(false)

    const handleShowModal = (isShow: boolean) => {
        setShow(isShow)
    }

    return (
        <>
            <AddToFavListBtn
                product={product}
                versionBtn={'DesktopFavBtn'}
                showInfo={(isLiked, isShow) => handleShowModal(isShow)}
            />


            <ModalContainer openModal={show}>
                {show ? (
                    <AddToFavModal close={() => setShow(false)} />
                ) : null
                }
            </ModalContainer>
        </>
    )
}

