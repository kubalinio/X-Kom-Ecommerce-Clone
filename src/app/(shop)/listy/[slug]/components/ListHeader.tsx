/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import DeleteListBtn from '../../components/Buttons/DeleteListBtn'
import SaveListBtn from '../../components/Buttons/SaveListBtn'
import ShareListBtn from '../../components/Buttons/ShareListBtn'
import { ExpandDropdownList } from '../../components/ExpandDropdownList'

const ListTitle = ({ name, updateAt }: Props) => {
  const [lastMod, setLastMod] = useState('')

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const changeTime = new Date(updateAt!).toLocaleDateString()
    setLastMod(changeTime)
  }, [])

  return (
    <div className="flex flex-col">
      <div className="flex">
        <h3 title={name} className="mb-2 mt-1 whitespace-nowrap text-xl font-bold">
          {name}
        </h3>
        {/* edit Favlist Name */}
      </div>

      <p>{lastMod} (ostatnia zmiana)</p>
    </div>
  )
}

type Props = {
  listId?: string | null | undefined
  updateAt?: Date
  name?: string
}

const ListHeader = ({ listId, updateAt, name }: Props) => {
  return (
    <div className="mb-6 max-md:relative md:flex md:justify-between">
      <ListTitle name={name} updateAt={updateAt} />

      {/* BtnActions Expand Mobile */}
      <ExpandDropdownList buttonSize="md" className="absolute right-1 top-0 md:hidden ">
        <ShareListBtn version="desktop" id={listId!} />
        <DeleteListBtn id={listId!} variant="mobile" size="sm" />
      </ExpandDropdownList>

      {/* BtnActions Desktop */}
      <div>
        <div className="absolute right-0 top-0 hidden md:flex ">
          <SaveListBtn version="desktop" id={listId!} />

          <ShareListBtn version="desktop" id={listId!} />

          <DeleteListBtn id={listId!} variant="mobile" size="lg" />
        </div>
      </div>
    </div>
  )
}

export default ListHeader
