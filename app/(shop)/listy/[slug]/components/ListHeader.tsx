import React, { useEffect, useState } from 'react'
import DeleteListBtn from '../../components/Buttons/DeleteListBtn'
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
        <div className='flex justify-between mb-6 max-md:relative'>
            <ListTitle name={name} updateAt={updateAt} />

            {/* Expand Mobile */}
            <div className='md:hidden'>

                <ExpandDropdownList className='absolute right-0 top-2 [&>div:nth-child(1)>div>button]:w-12 [&>div:nth-child(1)>div>button]:h-12 [&>div:nth-child(1)>div>button>span>svg]:stroke-2' >

                    <ShareListBtn />

                    <DeleteListBtn
                        id={listId!}
                    />

                </ExpandDropdownList>

            </div>


            {/* BtnActions Desktop*/}
            <div className='max-md:hidden'>
                <div className='absolute top-0 right-0 flex'>
                    <ShareListBtn
                        className='inline-flex items-center justify-start whitespace-nowrap bg-transparent rounded-full w-full h-[40px] py-2 px-5 hover:bg-[#ddd] transition-colors duration-200'
                    />

                    <DeleteListBtn
                        className='rounded-full h-[40px] py-2 px-5 inline-flex items-center justify-start whitespace-nowrap bg-transparent w-full hover:bg-[#ddd] transition-colors duration-200'
                        id={listId!}
                    />
                </div>
            </div>
        </div>
    )
}

export default ListHeader