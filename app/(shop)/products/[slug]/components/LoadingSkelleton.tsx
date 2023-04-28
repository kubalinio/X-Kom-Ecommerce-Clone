import LoadingSpinner from '@/app/components/LoadingSpinner'
import React from 'react'

const LoadingSkelleton = () => {
    return (
        <div className="my-20 flex items-center justify-center mx-auto max-w-full w-[calc(100%-32px)] md:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]">
            <div>
                <LoadingSpinner />
            </div>
        </div>
    )
}

export default LoadingSkelleton