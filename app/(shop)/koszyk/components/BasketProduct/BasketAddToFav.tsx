import { AddToFavListBtn, AddToFavModal } from "@/app/components/AddToFavList"

import { ModalContainer } from "@/app/components/Modals/Modal"

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
                versionBtn={'DesktopFavBtn'}
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
}

