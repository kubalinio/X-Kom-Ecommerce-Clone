import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'


const Overlay = () => {
    const refPortal = useRef<Element | null>()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        refPortal.current = document.querySelector<HTMLElement>('#react-portals')
        setMounted(true)

    }, [])

    return (mounted && refPortal.current) ? createPortal(
        <div>
            <div className='fixed inset-0 z-[999] bg-black/60 transition-opacity duration-300' />
        </div>, refPortal.current
    ) : null
}

export default Overlay