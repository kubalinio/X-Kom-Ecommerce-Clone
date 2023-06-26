/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

type DrawerHeaderProps = {
  name: string
  closeDrawer: () => void
  basketQuantity: number
}

export const DrawerHeader = ({ name, closeDrawer, basketQuantity }: DrawerHeaderProps) => (
  <div className="inline-flex min-h-[56px] w-full items-center justify-between border-b border-[#ddd] bg-[#f5f5f5] p-2 pr-4">
    <div className="flex w-full items-center">
      <button
        onClick={closeDrawer}
        className="flex h-10 w-10 items-center justify-center rounded-full border-none bg-none text-base transition-colors hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 "
      >
        <span className="inline-block h-5 w-7 overflow-hidden">
          <AiOutlineClose className="h-full w-full" />
        </span>
      </button>

      {basketQuantity > 0 && name === 'Koszyk' ? (
        <>
          <h3 className="flex-shrink-[6] flex-grow basis-auto whitespace-nowrap pl-2 text-lg font-bold text-black">
            {name}

            <span className="ml-1 text-[#707070]">{`(${basketQuantity})`}</span>
          </h3>

          <Link href="/koszyk" className="text-blue-500 hover:text-blue-600 focus:text-blue-600">
            Edytuj
          </Link>
        </>
      ) : (
        <h3 className="whitespace-nowrap pl-2 text-lg font-bold text-black">{name}</h3>
      )}
    </div>
  </div>
)

export const DrawerBody = ({ children }: { children: ReactNode }) => (
  <div className="absolute bottom-0 top-[58px] w-full overflow-y-auto overflow-x-hidden">{children}</div>
)

type DrawerContainerProps = {
  children: ReactNode
  close: () => void
  openDrawer: boolean
  direction: string
}

export const DrawerContainer = ({ children, close, openDrawer, direction }: DrawerContainerProps) => {
  const refPortal = useRef<Element | null>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    refPortal.current = document.querySelector<HTMLElement>('#react-portals')
    setMounted(true)
  }, [])

  useEffect(() => {
    if (openDrawer) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = '0px'
      document.body.style.left = '0px'
      document.body.style.right = '0px'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
    }
  }, [openDrawer])

  return mounted && refPortal.current
    ? createPortal(
        <div className="Drawer">
          <aside>
            {!openDrawer ? (
              ''
            ) : (
              <div
                onClick={() => close()}
                className="fixed inset-0 z-[1001] bg-black opacity-50 transition-opacity duration-300"
              />
            )}

            {direction === 'right' ? (
              <div
                className={`fixed bottom-0 right-0 top-0 z-[1002] max-w-[calc(100vw-64px)] overflow-y-auto overflow-x-hidden bg-white shadow-md transition-transform duration-300 ${
                  openDrawer ? 'w-[360px] translate-x-0' : 'w-0 translate-x-[105%]'
                }`}
              >
                <div>
                  <div>{children}</div>
                </div>
              </div>
            ) : (
              <div
                className={`fixed bottom-0 left-0 top-0 z-[1002] max-w-[calc(100vw-64px)] overflow-y-auto overflow-x-hidden bg-white shadow-md transition-transform duration-300 ${
                  openDrawer ? 'w-[360px] translate-x-0' : 'w-0 -translate-x-[105%]'
                }`}
              >
                <div>
                  <div>{children}</div>
                </div>
              </div>
            )}
          </aside>
        </div>,
        refPortal.current
      )
    : null
}

export const DrawerModal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-transparent">
      <div className="absolute inset-0 overflow-hidden bg-white transition-transform duration-300 ">
        <div className="flex h-screen flex-col sm:h-full sm:max-h-[calc(100vh-56px)] sm:min-h-[200px] sm:pt-0">
          {children}
        </div>
      </div>
    </div>
  )
}

// <div className='bg-transparent'>
//     <div className='absolute inset-0 overflow-hidden transition-transform duration-300 bg-white '>
//         <div className='flex flex-col h-screen sm:pt-0 sm:max-h-[calc(100vh-56px)] sm:min-h-[200px] sm:h-full'>
//             <DrawerTop name={content?.name} />

//             <DrawerBottom />

//         </div>
//     </div>
// </div>
