/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'
import { IoMdHeartEmpty } from 'react-icons/io'

import { urlFor } from '@/lib/sanity.client'
import { PurchaseList } from '@/types/typings'

import DeleteListBtn from '../../Buttons/DeleteListBtn'
import ShareListBtn from '../../Buttons/ShareListBtn'
import { ExpandDropdownList } from '../../ExpandDropdownList'

type Props = {
  item: PurchaseList
}

export const ListCard = ({ item }: Props) => {
  const { Id, Name, createdAt, updateAt, WebUrl, ProductItems, TotalPrice } = item

  return (
    <div className="relative mt-4">
      {/* <ExpandActionList id={Id} /> */}

      <ExpandDropdownList className="absolute right-2 top-2">
        <ShareListBtn version="mobile" id={Id} />

        <DeleteListBtn id={Id} variant="mobile" />
      </ExpandDropdownList>

      <Link
        href={`${WebUrl}`}
        className="flex min-h-[50px] flex-col rounded-lg p-4 shadow-sm-xCom transition-shadow duration-200 hover:shadow-xCom md:px-6 md:py-4"
      >
        {/* ListName & ListLastChange */}
        <div className="mb-4 pr-12">
          <h2 title="Ulubiona" className="mb-1 break-words text-lg font-bold">
            {Name}
          </h2>

          <div className="text-[#707070]">Przed chwilą (ostatnia zmiana)</div>
        </div>

        {/* Lista jest Pusta */}
        {ProductItems?.length! > 0 ? (
          <>
            <div>
              <div className="relative left-0 right-0 top-0 w-full overflow-hidden">
                {ProductItems?.map((product) => (
                  <div
                    key={product.Id}
                    className="mr-3 inline-flex h-[60px] w-[72px] flex-wrap items-center justify-center"
                  >
                    <span className="m-1 inline-flex h-[calc(100%-8px)] max-h-full w-[calc(100%-8px)] max-w-full items-center justify-center">
                      <Image
                        src={urlFor(product.MainPhoto).url()}
                        alt={product.Name}
                        title={product.Name}
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

            <p>{TotalPrice.toFixed(2).replace('.', ',')} zł</p>
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
