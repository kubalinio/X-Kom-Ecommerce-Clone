/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'

import { useCountdown } from '@/hooks/useCountdown'

export const CountdownTimer = ({ finished }: { finished: boolean }) => {
  //  12 HOURS
  const TIME_TO_END_PROMOTION = 12 * 60 * 60 * 1000
  // fetch date stamp from Sanity
  const DATE_MORNING_PROMOTION = new Date().setHours(10, 0, 0)
  const DATE_EVENING_PROMOTION = new Date().setHours(22, 0, 0)

  const [dateAfter, setDateAfter] = useState(0)

  const [days, hours, minutes, seconds] = useCountdown(dateAfter)

  useEffect(() => {
    const currentTime = new Date().getHours()

    if (currentTime < 10 || currentTime >= 22) {
      setDateAfter(DATE_EVENING_PROMOTION + TIME_TO_END_PROMOTION)
    } else if (currentTime >= 10 || currentTime < 22) {
      setDateAfter(DATE_MORNING_PROMOTION + TIME_TO_END_PROMOTION)
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <span className="mb-2">{!finished ? 'Do końca zostało:' : 'Następny gorący strzał:'}</span>

      <div className="flex justify-center text-2xl">
        <div className="flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#ddd]">
            {hours < 10 ? `0${hours}` : `${hours}`}
          </div>
          <span className="text-sm text-[#707070]">godz.</span>
        </div>

        <div className='mx-[6px] mt-[9px] after:content-[":"]' />

        <div className="flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#ddd]">
            {minutes < 10 ? `0${minutes}` : `${minutes}`}
          </div>
          <span className="text-sm text-[#707070]">godz.</span>
        </div>

        <div className='mx-[6px] mt-[9px] after:content-[":"]' />

        <div className="flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#ddd]">
            {seconds < 10 ? `0${seconds}` : `${seconds}`}
          </div>
          <span className="text-sm text-[#707070]">godz.</span>
        </div>
      </div>
    </div>
  )
}
