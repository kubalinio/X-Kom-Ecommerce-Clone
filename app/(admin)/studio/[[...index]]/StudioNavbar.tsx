import Link from "next/link"
import { HiOutlineArrowLeft } from "react-icons/hi2"

const StudioNavbar = (props: any) => {
    return (
        <div>
            <div className="flex items-center p-4 bg-[#1a1a1a]">
                <Link href='/' className="flex items-center text-red-600 hover:text-red-700">
                    <HiOutlineArrowLeft className="mr-2 text-xl" />
                    Go To Website
                </Link>
            </div>
            <>
                {props.renderDefault(props)}
            </>
        </div>
    )
}

export default StudioNavbar