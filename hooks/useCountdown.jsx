'use client'

import { useEffect, useState } from "react"


export const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime()

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().setHours(21, 59, 0)
    )


    useEffect(() => {

        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime())
        }, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [countDownDate])

    return getReturnValues(countDown)
}

const getReturnValues = (countDown) => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(12)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const days = Math.floor(countDown / 1000 * 60 * 60 * 24)
        const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)

    }, [countDown])


    return [days, hours, minutes, seconds]
}
