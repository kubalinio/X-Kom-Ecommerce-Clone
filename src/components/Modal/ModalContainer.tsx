import { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ModalContainer = ({ children, openModal }: { children: ReactNode; openModal: boolean }) => {
  const refPortal = useRef<Element | null>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    refPortal.current = document.querySelector<HTMLElement>('#react-portals')
    setMounted(true)
  }, [])

  return mounted && refPortal.current
    ? createPortal(<div className="relative z-[1000]">{children}</div>, refPortal.current)
    : null
}
