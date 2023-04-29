import { AddToFavListBtn, AddToFavModal } from "@/app/components/AddToFavList"
import { ModalContainer } from "@/app/components/Modals/Modal"
import useWindowDimensions from "@/app/hooks/useWindowDimensions"
import { useState } from "react"

type Props = {
    id: string
}

const ActionBtns = ({ id }: Props) => {
    const { width } = useWindowDimensions()

    const [show, setShow] = useState(false)

    return (
        <>
            {width! < 720 ? (
                <div className="absolute top-0 right-2 bottom-[36px] flex flex-col justify-center w-[40px]">
                    <AddToFavListBtn
                        versionBtn={'ProductGalleryFavBtn'}
                        id={id}
                        showInfo={(isLiked) => setShow(isLiked)}
                    />
                </div>
            ) : (

                <div className="inline-flex items-center justify-end w-auto pt-4 lg:pt-0 lg:w-full">
                    {/* Fav */}
                    <AddToFavListBtn
                        versionBtn={'LongFavBtn'}
                        id={id}
                        showInfo={(isLiked) => setShow(isLiked)} />
                </div>
            )}


            <ModalContainer openModal={show}>
                {show ? (
                    <AddToFavModal close={() => setShow(false)} />
                ) : null
                }
            </ModalContainer>
        </>

    )
}

export default ActionBtns