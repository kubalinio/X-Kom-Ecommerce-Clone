import Image from "next/image"

const CompanyImage = () => (
    <span className="inline-flex items-center justify-center h-[36px] overflow-hidden mr-4">
        <Image
            src={`https://assets.x-kom.pl/public-spa/xkom/e51fb0a6ab97d090.png`}
            width={40}
            height={40}
            loading='lazy'
            alt="logo Visa"
            title="Visa"
            className="inline-block w-auto h-auto max-w-full max-h-full"
        />
    </span>
)

const MethodPayments = () => {
    return (
        <div className='py-2'>
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