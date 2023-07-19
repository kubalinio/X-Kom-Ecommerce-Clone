import { useEffect, useState } from 'react'

export const CounterProductBar = ({
  toSell,
  selled,
  sells,
  finished,
  selledAll,
}: {
  toSell: number
  selled: number
  sells: () => void
  finished: boolean
  selledAll: () => void
}) => {
  const [left, setLeft] = useState(toSell - selled)
  const [fill, setFill] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      sells()
    }, 10000)

    setLeft(toSell - selled)
    setFill(Math.floor(100 - (selled * 100) / (toSell ?? 0)))

    if (left <= 0) {
      selledAll()
    }

    return () => {
      clearInterval(interval)
    }
  }, [left, selled, selledAll, sells, toSell])

  return (
    <div>
      {!finished ? (
        <div className="mx-auto md:max-w-[280px] lg:mx-0 lg:max-w-none">
          {/* Numbers */}
          <div className="flex justify-between md:mt-10 lg:mt-0">
            {/* left */}
            <div className="flex items-center">
              <span className="mr-1 text-sm">pozostało</span>
              {/* Counter Up to Down */}
              <div className="flex overflow-hidden h-7">
                <div className="flex flex-col">
                  <span className="text-lg font-bold h-7">{left}</span>
                </div>
              </div>
            </div>

            {/* selled */}
            <div className="flex items-center justify-end">
              <span className="mr-2 text-sm">sprzedano</span>
              {/* Counter Up to Down */}
              <div className="flex overflow-hidden scale-150 h-7">
                <div className="flex flex-col">
                  <span className="text-lg font-bold h-7">{selled}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bar */}
          <div className="relative mb-6 mt-1 h-[9px] overflow-hidden rounded-lg bg-[#ddd]">
            <div
              style={{ width: `${fill}%` }}
              className={`h-[9px] rounded-lg bg-gradient-to-r from-[#0fd2ff] to-[#0082fa] transition-all duration-300 ease-in-out`}
            />
          </div>
        </div>
      ) : (
        <p className="mb-6 text-center text-3xl font-bold leading-10 text-[#4d4d4d]">Wyprzedano</p>
      )}
    </div>
  )
}
