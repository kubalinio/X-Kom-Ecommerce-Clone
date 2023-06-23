/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import { GrClose } from 'react-icons/gr'

export const AddToFavModal = ({ close }: { close: () => void }) => {
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
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-auto bg-black/50 sm:py-8"
    >
      <div
        ref={modalRef}
        className="relative z-[1001] flex max-h-[calc(100%-48px)] min-h-[116px] w-[calc(100%-48px)] max-w-[328px] flex-col overflow-hidden rounded-lg bg-white"
      >
        <div className="flex max-h-full max-w-[328px] flex-col">
          <div className="static flex justify-between px-6 pb-3 pt-5">
            <h3 title="Zapisz na liście" className="inline-flex items-center text-lg/6 font-bold">
              Zapisz na liście
            </h3>

            <button
              onClick={() => close()}
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f5f5f5]"
            >
              <span className="flex w-full justify-center">
                <span className="inline-block h-5 w-5 text-center">
                  <GrClose className="h-full w-full text-xl" />
                </span>
              </span>
            </button>
          </div>

          <div className="px-6 pb-6 text-[#4d4d4d]">
            Zaloguj się, żeby zapisać swoje listy i mieć do nich dostęp na wszystkich urządzeniach.
          </div>
        </div>
      </div>
    </div>
  )
}
