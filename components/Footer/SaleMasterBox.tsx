import Image from 'next/image'
import Link from 'next/link'

import salesMasterIcon from '../../public/icons/salesMasterIcon.svg'

const SaleMasterBox = () => {
  return (
    <Link
      href={`/`}
      className="group flex w-full flex-col items-center justify-center rounded-2xl bg-[#f9f9f9] pb-6 pt-5 shadow-sm-xCom transition-shadow duration-300 hover:shadow-xCom md:flex-row md:justify-between md:p-0 lg:mt-4 lg:px-10 lg:py-4"
    >
      <div className="flex flex-col items-center justify-center md:items-start md:px-8 md:py-6 lg:w-full lg:flex-row lg:items-center lg:justify-between lg:p-0">
        <span title="Program partnerski SalesMaster" className="inline-block h-10 overflow-hidden">
          <Image src={salesMasterIcon} alt="logo Sales Master" width={120} height={40} />
        </span>

        <p className="mx-[10px] my-3 flex flex-col text-[#4d4d4d] md:mx-0 md:w-[326px] md:text-left lg:m-0 lg:w-auto lg:flex-row lg:whitespace-pre lg:text-lg">
          <span className="font-bold">Polecaj i zarabiaj. </span>
          Dołącz do naszego programu partnerskiego
        </p>

        <span className="flex h-10 items-center justify-center rounded-[20px] border border-[#be0064] px-6 py-3 text-base text-[#be0064] transition-colors duration-300  group-hover:bg-[#be0064] group-hover:text-white">
          Zacznij zarabiać
        </span>
      </div>

      <span className="hidden h-[152px] overflow-hidden md:mx-auto md:block lg:mx-0 lg:hidden">
        <Image
          src={`https://assets.x-kom.pl/public-spa/xkom/29edf7e03b09236a.png`}
          width={169}
          height={152}
          loading="lazy"
          alt="SalesMaster"
          title="SalesMaster"
          className="inline-block h-auto max-h-full w-auto max-w-full"
        />
      </span>
    </Link>
  )
}

export default SaleMasterBox
