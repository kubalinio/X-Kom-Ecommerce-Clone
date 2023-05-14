import React, { useEffect, useState } from 'react'
import DeleteListBtn from '../../components/DeleteListBtn'
import { ExpandDropdownList } from '../../components/ExpandDropdownList'

const ListTitle = ({ name, updateAt }: Props) => {
    const [lastMod, setLastMod] = useState('')

    useEffect(() => {
        const changeTime = new Date(updateAt!).toLocaleDateString()
        setLastMod(changeTime)
    }, [])

    return (
        <div className='flex flex-col'>

            <div className='flex'>
                <h3
                    title={name}
                    className='mt-1 mb-2 text-xl font-bold whitespace-nowrap'>
                    {name}
                </h3>
                {/* edit Favlist Name */}
            </div>

            <p className='text-[#707070]'>
                {lastMod} (ostatnia zmiana)
            </p>
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
        <div className='mb-6 md:flex md:justify-between max-md:relative'>
            <ListTitle name={name} updateAt={updateAt} />

            {/* BtnActions Expand Mobile */}
            <ExpandDropdownList className='absolute right-0 md:hidden'>
                <DeleteListBtn version='mobile' id={listId!} />
            </ExpandDropdownList>


            {/* BtnActions Desktop */}
            <div>
                <div className='absolute top-0 right-0 flex'>
                    <DeleteListBtn version='desktop' id={listId!} />
                </div>
            </div>
        </div>
    )
}

export default ListHeader