import { BasketInfo } from '@/components/Basket'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export const BasketInfoBox = () => {
  const matches = useMediaQuery('(min-width: 720px) and (max-width: 900px)')

  // 720+ 900-
  return matches ? (
    <div className="-mx-3 flex flex-wrap">
      <div className="w-[18%] px-3" />

      <div className="my-3 w-[65%] px-3">
        <BasketInfo />
      </div>
    </div>
  ) : null
}
