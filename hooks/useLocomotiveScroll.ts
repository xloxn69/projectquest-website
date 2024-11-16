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
        smoothMobile: true,
        multiplier: 1.5,
        lerp: 0.1,
        class: 'is-revealed',
        reloadOnContextChange: true,
        touchMultiplier: 3,
        smartphone: {
          smooth: true,
          multiplier: 2,
          breakpoint: 767,
        },
        tablet: {
          smooth: true,
          multiplier: 2,
          breakpoint: 1024,
        },
        gestureDirection: 'vertical',
        getDirection: true,
        getSpeed: true,
        inertia: 0.7,
      })

      // Update on window resize for better responsiveness
      window.addEventListener('resize', () => {
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.update()
        }
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