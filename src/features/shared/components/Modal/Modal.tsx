import { ReactNode, useEffect, useRef } from 'react'

type Props = {
  children: ReactNode
  close: () => void
}

export const Modal = ({ children, close }: Props) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {/* 
            <div className="z-[1002] fixed inset-0 overflow-auto bg-black/50 sm:py-8" /> */}

      <div
        ref={overlayRef}
        className="fixed inset-0 z-[1001] flex items-center justify-center overflow-auto bg-black/50 sm:py-8"
      >
        <div className="z-[1002] flex h-full w-full flex-col rounded-none bg-white sm:h-auto sm:max-h-full sm:min-h-[200px] sm:w-[calc(100%-64px)] sm:max-w-[600px] sm:rounded-lg">
          {/* ref */}
          <div
            ref={modalRef}
            className="flex h-full flex-col pt-[56px] sm:max-h-[calc(100vh-56px)] sm:min-h-[200px] sm:pt-0"
          >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
