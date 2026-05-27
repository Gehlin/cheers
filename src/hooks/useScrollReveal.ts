import { useEffect, useRef, useState } from 'react'

interface Options {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

/**
 * Returns a ref to attach to a DOM element and a boolean `isVisible`
 * that becomes true when the element enters the viewport.
 * Once `once = true` (default), it stays visible after the first trigger.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: Options = {}
) {
  const { threshold = 0.15, rootMargin = '0px', once = true } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isVisible }
}
