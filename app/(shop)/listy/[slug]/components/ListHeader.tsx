import React, { useEffect, useState } from 'react'
import DeleteListBtn from '../../components/Buttons/DeleteListBtn'
import SaveListBtn from '../../components/Buttons/SaveListBtn'
import ShareListBtn from '../../components/Buttons/ShareListBtn'
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

            <p>
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
            <ExpandDropdownList
                buttonSize='md'
                className='absolute top-0 right-1 md:hidden '>
                <ShareListBtn version='desktop' id={listId!} />
                <DeleteListBtn
                    id={listId!}
                    variant='mobile'
                    size='sm'
                />
            </ExpandDropdownList>


            {/* BtnActions Desktop */}
            <div>
                <div className='absolute top-0 right-0 hidden md:flex '>
                    <SaveListBtn version='desktop' id={listId!} />

                    <ShareListBtn version='desktop' id={listId!} />

                    <DeleteListBtn
                        id={listId!}
                        variant='mobile'
                        size='lg'
                    />


                </div>
            </div>
        </div>
    )
}

export default ListHeader