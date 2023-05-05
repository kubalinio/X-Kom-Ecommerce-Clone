import React, { useEffect, useState } from 'react'

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
        <div className='flex justify-between mb-6'>
            <ListTitle name={name} updateAt={updateAt} />
            {/* BtnActions */}
            <div></div>
            <div></div>
        </div>
    )
}

export default ListHeader