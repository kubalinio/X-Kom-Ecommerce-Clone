import Image from 'next/image'

const CompanyImage = () => (
  <span className="mr-4 inline-flex h-[36px] items-center justify-center overflow-hidden">
    <Image
      src={`https://assets.x-kom.pl/public-spa/xkom/e51fb0a6ab97d090.png`}
      width={40}
      height={40}
      loading="lazy"
      alt="logo Visa"
      title="Visa"
      className="inline-block h-auto max-h-full w-auto max-w-full"
    />
  </span>
)

const MethodPayments = () => {
  return (
    <div className="py-2">
      <h2 className="mb-2 text-xl leading-6">Akceptujemy</h2>
      <div className="flex flex-wrap">
        <CompanyImage />
        <CompanyImage />
        <CompanyImage />
        <CompanyImage />
        <CompanyImage />
        <CompanyImage />
        <CompanyImage />
        <CompanyImage />
        <CompanyImage />
        <CompanyImage />
        <CompanyImage />
        <CompanyImage />
      </div>
    </div>
  )
}

export default MethodPayments
