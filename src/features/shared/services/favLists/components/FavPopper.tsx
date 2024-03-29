import { ReactNode, useEffect, useState } from 'react'
import { GrClose } from 'react-icons/gr'

import { cn } from '@/lib/utils';

const PopperContainer = ({ children, show, i }: { children: ReactNode; show: boolean; i?: number }) => {

  return (
    <div className={`pointer-events-auto ${show ? 'overflow-visible' : 'overflow-hidden'}`}>
      <div
        className={cn('hidden absolute left-1/2 top-[calc(100%+12px)] z-[110] max-w-[328px] -translate-x-[50%] cursor-auto flex-col rounded-lg bg-white py-3 text-left shadow-xCom lg:[&:nth-child(2n+2)]:bg-red-500 [&:nth-child(3n+3)]:right-0 [&:nth-child(3n+3)]:translate-x-0 opacity-0', {
          'opacity-100 flex': show,
          'left-auto right-0 -translate-x-0': i === 3 || i === 7
        })}

      >
        <div className="z-[100] flex w-[328px] flex-col items-start">{children}</div>

        {/* After */}
        <div className={cn("absolute left-[50.5%] top-[2px] z-[3] h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rotate-45 skew-x-12 skew-y-12 bg-white shadow-[-2px_-2px_2px_rgba(0,0,0,0.08)]", {
          'left-auto right-2 -translate-x-0': i === 3 || i === 7
        })} />
      </div>
    </div>
  )
}

const PopperBody = ({ close }: { close: () => void }) => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap">
      <h2 title="Zapisz na liście" className="inline-flex mx-6 mt-2 mb-3 text-lg/6">
        Zapisz na liście
      </h2>

      <button
        onClick={() => close()}
        className="absolute right-4 top-2 flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f5f5f5]"
      >
        <span className="flex justify-center w-full">
          <span className="inline-block w-5 h-5 text-center">
            <GrClose className="w-full h-full text-xl" />
          </span>
        </span>
      </button>

      <p className="whitespace-normal px-6 text-[#4d4d4d]">
        Zaloguj się, żeby zapisać swoje listy i mieć do nich dostęp na wszystkich urządzeniach.
      </p>
    </div>
  )
}

export const AddToFavPopper = ({ show, close, i }: { show: boolean; close: () => void; i?: number }) => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setIsShow(show)

    if (show) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '17px'
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [show])

  const handleCloseModal = () => {
    setIsShow(false)
    close()
  }

  return (
    <PopperContainer show={isShow} i={i}>
      <PopperBody close={() => handleCloseModal()} />
    </PopperContainer>
  )
}
