'use client'

import Link from 'next/link'

const ListHead = () => {
    return (
        <div>ListHead</div>
    )
}
const ListBody = () => {
    return (
        <div>ListBody</div>
    )
}
const ListBottom = () => {
    return (
        <div>ListBottom</div>
    )
}

const HelpBox = () => {
    return (
        <div>HelpBox</div>
    )
}



// Need Help

type Props = {}

const UserShopList = (props: Props) => {
    return (
        <div className='lg:pl-2'>
            {/* Back konto */}
            <Link href='/konto' />
            {/* Button to Add List React Portal*/}
            <ListHead />

            <div>{/* Notification */}</div>

            {/* Created List */}
            <ListBody />

            {/* How use lists */}
            <ListBottom />
        </div>
    )
}

export default UserShopList