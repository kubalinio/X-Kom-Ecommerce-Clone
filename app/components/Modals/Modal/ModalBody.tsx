import { ReactNode } from "react"

export const ModalBody = ({ children }: { children: ReactNode }) => {

    return (
        <div className="min-h-[100px] max-h-[calc(100vh-56px)] overflow-x-hidden overflow-y-auto pt-3 sm:max-h-[calc(100vh-128px)] md:min-h-[200px] md:max-h-[calc(100vh-112px)]">
            {children}
        </div>
    )
}