import Image from 'next/image'
import Link from 'next/link'

const MobileAppBox = () => {
  return (
    <div className="relative mb-4 flex w-full rounded-2xl bg-[#f9f9f9] shadow-sm-xCom transition-shadow duration-300 hover:shadow-xCom max-md:flex-col max-md:items-center max-md:text-center md:pl-8 lg:ml-4 lg:w-[calc(50%-16px)] lg:pl-10 lg:pr-1">
      {/* Content */}
      <div className="mb-8 mt-7 md:mb-11 md:text-center lg:mb-6">
        <Link href={`/`} target="_blank" className="z-1 absolute left-0 top-0 h-full w-full" />

        <h3 className="mb-1 text-2xl font-bold leading-7 lg:mb-2">Aplikacja mobilna</h3>

        <div className="mb-1 ml-3 mr-3 md:m-0 md:mb-3">
          <p className="text-[#4d4d4d]">Sprawdzaj promocje,</p>
          <p className="text-[#4d4d4d]">które dostępne są tylko w aplikacji.</p>
        </div>

        <div className="flex max-md:flex-wrap max-md:justify-center">
          <Link href={`/`} className="z-[2] mx-1 max-h-10 max-md:mt-2 md:ml-0 md:max-h-[32px] md:max-w-[100px]">
            <span className="inline-flex h-10 w-[120px] items-center justify-center overflow-hidden md:h-8 md:w-[100px]">
              <Image
                src={`https://assets.x-kom.pl/public-spa/xkom/0f6ff6eee36d1bb3.svg`}
                width={136}
                height={40}
                loading="lazy"
                alt="App Store"
                title="App Store"
                className="h-full w-full object-contain"
              />
            </span>
          </Link>

          <Link href={`/`} className="z-[2] mx-1 max-h-10 max-md:mt-2 md:ml-0 md:max-h-[32px] md:max-w-[100px]">
            <span className="inline-flex h-10 w-[120px] items-center justify-center overflow-hidden md:h-8 md:w-[100px]">
              <Image
                src={`https://assets.x-kom.pl/public-spa/xkom/32fe7e427a8819cc.svg`}
                width={136}
                height={40}
                loading="lazy"
                alt="Google Play"
                title="Google Play"
                className="h-full w-full object-contain"
              />
            </span>
          </Link>

          <Link href={`/`} className="z-[2] mx-1 max-h-10 max-md:mt-2 md:ml-0 md:max-h-[32px] md:max-w-[100px]">
            <span className="inline-flex h-10 w-[120px] items-center justify-center overflow-hidden md:h-8 md:w-[100px]">
              <Image
                src={`https://assets.x-kom.pl/public-spa/xkom/de8bbc5c651b4ad9.svg`}
                width={136}
                height={40}
                loading="lazy"
                alt="App Gallery"
                title="App Gallery"
                className="h-full w-full object-contain"
              />
            </span>
          </Link>
        </div>
      </div>

      {/*  Img Dektop */}
      <div className="mx-auto hidden lg:flex lg:items-end">
        <span className="hidden h-[136px] items-center justify-center overflow-hidden md:mx-auto md:block lg:flex lg:items-end">
          <Image
            src={`https://assets.x-kom.pl/public-spa/xkom/dc932e41baa41f9d.png`}
            width={441}
            height={288}
            loading="lazy"
            className="inline-block h-auto max-h-full w-auto max-w-full"
            alt="Telefony"
            title="Aplikacja mobilna"
          />
        </span>
      </div>

      {/*  Img Tablet */}
      <div className="mx-auto hidden md:flex md:items-end lg:hidden">
        <span className="hidden h-[164px] overflow-hidden md:mx-auto md:block">
          <Image
            src={`https://assets.x-kom.pl/public-spa/xkom/dc932e41baa41f9d.png`}
            width={441}
            height={288}
            loading="lazy"
            className="inline-block h-auto max-h-full w-auto max-w-full"
            alt="Telefony"
            title="Aplikacja mobilna"
          />
        </span>
      </div>
    </div>
  )
}

export default MobileAppBox
