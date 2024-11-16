import { useEffect, useRef } from 'react'
import 'locomotive-scroll/dist/locomotive-scroll.css'

export default function useLocomotiveScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const locomotiveScrollRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Dynamically import Locomotive Scroll
    (async () => {
      const locomotiveScroll = (await import('locomotive-scroll')).default
      
      if (!scrollRef.current) return

      locomotiveScrollRef.current = new locomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: false,
        multiplier: 0.75,
        lerp: 0.075,
        class: 'is-revealed',
        reloadOnContextChange: true,
        touchMultiplier: 2,
        smartphone: {
          smooth: true,
          breakpoint: 767,
        },
        tablet: {
          smooth: true,
          breakpoint: 1024,
        },
      })
    })()

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy()
      }
    }
  }, [])

  return scrollRef
} 