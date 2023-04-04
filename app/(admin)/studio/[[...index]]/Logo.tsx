import Image from 'next/image'
import XCloneLogo from '../../../../public/logoSmall.svg'


const Logo = (props: any) => {
    const { renderDefault, title } = props
    return (
        <div className='flex items-center ml-1 space-x-4'>
            <Image
                className='w-[100px] h-[40px] object-contain'
                width={100}
                height={40}
                alt='XClone Logo'
                src={XCloneLogo}
            />
            {renderDefault && <>{renderDefault(props)}</>}
        </div>
    )
}

export default Logo