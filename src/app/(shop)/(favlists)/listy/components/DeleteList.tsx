import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { cva, VariantProps } from 'class-variance-authority'
import { useRouter } from 'next/navigation'
import { ButtonHTMLAttributes, FC, forwardRef, useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { HiOutlineTrash } from 'react-icons/hi2'

import { ModalContainer } from '@/components/Modal'
import { cn } from '@/lib/utils'

import { DialogBox } from './DialogBox'

const buttonVariants = cva(
  'inline-flex items-center justify-start whitespace-nowrap bg-transparent w-full py-3 px-4 text-[#2a2a2a] hover:bg-[#f5f5f5] transition-colors duration-200',
  {
    variants: {
      variant: {
        default: '[&_span]:first:mr-3',
        mobile: '[&_span]:first:mr-3',
        desktop: ' [&_span]:first:mr-2',
      },
      size: {
        default: 'rounded-none h-[48px]',
        sm: 'rounded-none h-[48px]',
        lg: 'rounded-full h-[32px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

// eslint-disable-next-line react/display-name
const DeleteListBtn = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button title="Usuń listę" className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
    <span className="inline-block h-6 w-6 overflow-hidden ">
      <HiOutlineTrash className="h-full w-full text-xl" />
    </span>

    <span>
      <span>Usuń listę</span>
    </span>
  </button>
))

interface DeleteListProps extends VariantProps<typeof buttonVariants> {
  id: string
  className?: string
}

export const DeleteList: FC<DeleteListProps> = ({ id, className, variant, size }) => {
  const [showModal, setShowModal] = useState(false)

  const queryClient = useQueryClient()
  const router = useRouter()

  const { mutate: deleteList } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.delete(`/api/purchaseLists/${id}`)
      return data
    },
    onSuccess: (listId) => {
      setShowModal(false)
      removeStoradgeListData(listId)
      queryClient.invalidateQueries(['purchaseLists'])
      router.refresh()
      router.push('/listy')
    },
  })

  const removeStoradgeListData = (listId: string) => {
    const existingLists = JSON.parse(localStorage.getItem('purchase_lists') ?? '')
    console.log(listId)
    // eslint-disable-next-line security/detect-object-injection
    delete existingLists[listId]
    const data = { ...existingLists }
    localStorage.setItem('purchase_lists', JSON.stringify(data))
  }

  const handleShowModal = () => {
    if (showModal) {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      setShowModal(false)
    } else {
      setShowModal(true)
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '17px'
    }
  }

  return (
    <>
      <DeleteListBtn onClick={() => handleShowModal()} className={className} variant={variant} size={size} />

      {/* Modal Confirmation */}
      <ModalContainer openModal={showModal}>
        {showModal ? (
          <DialogBox close={() => setShowModal(false)}>
            <div className="flex flex-col p-6 pb-4 pt-5">
              {/* Title */}
              <div className="relative flex w-full justify-between pb-3">
                <h3 className="pr-10 text-xl font-bold">Usunąć listę zakupową?</h3>

                <button
                  onClick={() => setShowModal(false)}
                  className="absolute -right-3 -top-2 flex h-11 w-11 items-center justify-center rounded-full hover:bg-[#ddd]"
                >
                  <span className="inline-block h-9 w-9">
                    <GrFormClose className="h-full w-full" />
                  </span>
                </button>
              </div>

              {/* Info */}
              <div className="text-base text-[#4d4d4d]">Pamiętaj, że tej akcji nie można cofnąć.</div>

              {/* Buttons */}
              <div className="flex justify-end pt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="h-11 w-[80px] rounded-full bg-white px-4 py-2 hover:bg-gray-100 active:bg-gray-200"
                >
                  Anuluj
                </button>

                <button
                  onClick={() => deleteList()}
                  className="ml-2 h-11 w-[136px] rounded-full bg-red-600 px-4 py-2 text-white hover:bg-red-700 active:bg-red-800"
                >
                  Tak, usuń
                </button>
              </div>
            </div>
          </DialogBox>
        ) : null}
      </ModalContainer>
    </>
  )
}