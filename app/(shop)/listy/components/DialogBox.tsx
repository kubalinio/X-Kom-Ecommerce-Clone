/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useRef } from 'react'

type Props = {
  children: ReactNode
  close: () => void
}

export const DialogBox = ({ children, close }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!modalRef.current?.contains(e.target as Node) && overlayRef.current?.contains(e.target as Node)) {
        close()
      }
    }
    window.addEventListener('click', listener)
    return () => window.removeEventListener('click', listener)
  }, [])

  return (
    <>
      {/* 
            <div className="z-[1002] fixed inset-0 overflow-auto bg-black/50 sm:py-8" /> */}

      <div
        ref={overlayRef}
        className="fixed inset-0 z-[1000] flex items-center justify-center overflow-auto bg-black/50 sm:py-8"
      >
        <div
          ref={modalRef}
          className="z-[1001] flex h-full w-full flex-col rounded-none bg-white sm:h-auto sm:max-h-full sm:min-h-[116px] sm:w-[calc(100%-64px)] sm:max-w-[362px] sm:rounded-lg"
        >
          {children}
        </div>
      </div>
    </>
  )
}
