import { ReactNode } from 'react'

export const ModalBody = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-h-[calc(100vh-56px)] min-h-[100px] overflow-y-auto overflow-x-hidden pt-3 sm:max-h-[calc(100vh-128px)] md:max-h-[calc(100vh-112px)] md:min-h-[200px]">
      {children}
    </div>
  )
}
