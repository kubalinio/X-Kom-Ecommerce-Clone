import { DependencyList, useEffect } from 'react'

import useTimeoutFn from './useTimeoutFn'

export type UseDebounceReturn = [() => boolean | null, () => void]

// eslint-disable-next-line @typescript-eslint/ban-types
export default function useDebounce(fn: Function, ms = 0, deps: DependencyList = []): UseDebounceReturn {
  const [isReady, cancel, reset] = useTimeoutFn(fn, ms)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(reset, deps)

  return [isReady, cancel]
}
