import { AddToFavListBtn, AddToFavModal } from "@/components/AddToFavList"
import { ModalContainer } from "@/components/Modal"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import { Product } from "@/types/typings"
import { useState } from "react"

type Props = {
    product: Product
}

const ActionBtns = ({ product }: Props) => {
    const { width } = useWindowDimensions()

    const [show, setShow] = useState(false)

    return (
        <>
            {width! < 720 ? (
                <div className="absolute top-0 right-2 bottom-[36px] flex flex-col justify-center w-[40px]">
                    <AddToFavListBtn
                        versionBtn={'ProductGalleryFavBtn'}
                        product={product}
                        showInfo={(isLiked, isShow) => setShow(isShow)}
                    />
                </div>
            ) : (

                <div className="inline-flex items-center justify-end w-auto pt-4 lg:pt-0 lg:w-full">
                    {/* Fav */}
                    <AddToFavListBtn
                        versionBtn={'LongFavBtn'}
                        product={product}
                        showInfo={(isLiked, isShow) => setShow(isShow)} />
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