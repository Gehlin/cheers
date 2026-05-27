import { useEffect, useRef, useState } from 'react'

interface Options {
  end: number
  duration?: number   // ms, default 1800
  start?: number
  suffix?: string
}

/**
 * Animates a number from `start` to `end` over `duration` ms.
 * Animation only starts once `active` is set to true (e.g. via scroll reveal).
 */
export function useCountUp({ end, duration = 1800, start = 0 }: Options, active: boolean) {
  const [value, setValue] = useState(start)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!active) return
    if (frameRef.current) cancelAnimationFrame(frameRef.current)

    const startTime = performance.now()
    const range = end - start

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(start + range * eased))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      }
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current) }
  }, [active, end, start, duration])

  return value
}
