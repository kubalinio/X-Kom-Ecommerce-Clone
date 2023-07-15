import { LoadingSpinner } from '@/features/shared/components/LoadingSpinner'

const LoadingSkelleton = () => {
  return (
    <div className="mx-auto my-20 flex w-[calc(100%-32px)] max-w-full items-center justify-center md:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]">
      <div>
        <LoadingSpinner />
      </div>
    </div>
  )
}

export default LoadingSkelleton
