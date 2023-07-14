import Image from 'next/image'
import Link from 'next/link'
import { IoMdHeartEmpty } from 'react-icons/io'

import { formatPrice } from '@/lib/utils'
import { ExtendedPurchaseListItem } from '@/types/db'

import ShareListBtn from '../../Buttons/ShareListBtn'
import { DeleteList } from '../../DeleteList'
import { ExpandDropdownList } from '../../ExpandDropdownList'

type Props = {
  item: ExtendedPurchaseListItem
}

export const ListCard = ({ item }: Props) => {
  const { id, webUrl, name, productItems, totalPrice } = item

  return (
    <div className="relative mt-4">
      {/* <ExpandActionList id={Id} /> */}

      <ExpandDropdownList className="absolute right-2 top-2">
        <ShareListBtn version="mobile" id={id} />

        <DeleteList id={id} />
      </ExpandDropdownList>

      <Link
        href={`${webUrl}`}
        className="flex min-h-[50px] flex-col rounded-lg p-4 shadow-sm-xCom transition-shadow duration-200 hover:shadow-xCom md:px-6 md:py-4"
      >
        {/* ListName & ListLastChange */}
        <div className="mb-4 pr-12">
          <h2 title="Ulubiona" className="mb-1 break-words text-lg font-bold">
            {name}
          </h2>

          <div className="text-[#707070]">Przed chwilą (ostatnia zmiana)</div>
        </div>

        {/* Lista jest Pusta */}
        {productItems ? (
          <>
            <div>
              <div className="relative left-0 right-0 top-0 w-full overflow-hidden">
                {productItems.map((product) => (
                  <div
                    key={product.productId}
                    className="mr-3 inline-flex h-[60px] w-[72px] flex-wrap items-center justify-center"
                  >
                    <span className="m-1 inline-flex h-[calc(100%-8px)] max-h-full w-[calc(100%-8px)] max-w-full items-center justify-center">
                      <Image
                        src={product.mainPhoto}
                        alt={product.name}
                        title={product.name}
                        loading="lazy"
                        className="h-auto max-h-full w-full max-w-full"
                        width={64}
                        height={52}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p>{formatPrice(totalPrice)} zł</p>
          </>
        ) : (
          <div className="-mt-2 flex items-center">
            <span className="inline-block h-6 w-6">
              <IoMdHeartEmpty className="mr-3 h-full w-full text-2xl" />
            </span>

            <p>Lista jest pusta - dodaj produkty</p>
          </div>
        )}

        {/* ??? */}
        <div></div>
      </Link>
    </div>
  )
}
