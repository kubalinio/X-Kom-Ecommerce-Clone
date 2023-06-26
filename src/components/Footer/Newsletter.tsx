import Image from 'next/image'

// Validation for Form to do
const Newsletter = () => {
  return (
    <div className="mb-4 rounded-2xl bg-[#f9f9f9] shadow-sm-xCom md:flex lg:mr-4 lg:w-[calc(50%-16px)]">
      {/* Content */}
      <div className="flex flex-col items-center px-8 pb-6 pt-7 md:max-w-[390px] md:flex-grow md:items-start md:pr-3 lg:pb-4 lg:pl-10 lg:pr-5">
        <h2 className="text-2xl font-bold leading-7">Newsletter</h2>

        <div className="mb-4 mt-2 lg:mt-3">
          <p className="text-center text-[#4d4d4d] md:w-[270px] md:text-left lg:w-[186px]">
            Nie przegap żadnej promocji,
          </p>
          <p className="text-center text-[#4d4d4d] md:w-[270px] md:text-left lg:w-[186px]">
            zdobywaj dodatkowe rabaty.
          </p>
        </div>

        <form className="w-full">
          <div className="w-full">
            {/* input */}
            <div className="flex h-10 w-full lg:h-8 lg:max-w-[304px]">
              <input
                type="email"
                placeholder="Twój e-mail"
                className="-mr-4 h-full max-w-full flex-1 rounded-l-full border border-r-0 border-[#ccc] px-5 text-left text-base outline-none lg:pl-4"
              />
              <button
                type="submit"
                className="h-full w-auto rounded-full border-none bg-[#0082fa] px-4 text-white transition-colors duration-200 hover:bg-[#0070CC] active:bg-[#00407a]"
              >
                <span className="flex items-center justify-center whitespace-nowrap">Zapisz się</span>
              </button>
            </div>
            {/* error message*/}
            <span className="block min-h-[20px] pt-1 text-left text-red-800"></span>
          </div>
        </form>
      </div>

      {/* Img Tablet */}
      <div className="mx-auto hidden lg:mr-8 lg:flex lg:items-center">
        <span className="hidden h-[96px] overflow-hidden md:mx-auto md:my-3 md:block lg:mx-auto lg:my-0">
          <Image
            src={`https://assets.x-kom.pl/public-spa/xkom/2cc235c12e03ae26.png`}
            width={441}
            height={288}
            className="inline-block h-auto max-h-full w-auto max-w-full"
            alt="Newsletter"
            title="Newsletter"
            loading="lazy"
          />
        </span>
      </div>

      {/* Img Desktop */}
      <div className="mx-auto hidden md:flex md:items-center lg:hidden">
        <span className="hidden h-[112px] overflow-hidden md:mx-auto md:my-3 md:block lg:mx-auto lg:my-0">
          <Image
            src={`https://assets.x-kom.pl/public-spa/xkom/2cc235c12e03ae26.png`}
            width={441}
            height={288}
            className="inline-block h-auto max-h-full w-auto max-w-full"
            alt="Newsletter"
            loading="lazy"
            title="Newsletter"
          />
        </span>
      </div>
    </div>
  )
}

export default Newsletter
