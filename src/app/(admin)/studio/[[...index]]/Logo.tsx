/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'

import XCloneLogo from '@/features/header/assets/logoSmall.svg'

const Logo = (props: any) => {
  const { renderDefault, title } = props
  return (
    <div className="ml-1 flex items-center space-x-4">
      <Image className="h-[40px] w-[100px] object-contain" width={100} height={40} alt="XClone Logo" src={XCloneLogo} />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo
