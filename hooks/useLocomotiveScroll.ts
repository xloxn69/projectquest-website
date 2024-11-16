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
          direction: 'vertical'
        },
        tablet: {
          smooth: true,
          direction: 'vertical'
        },
        getDirection: true,
        getSpeed: true,
        inertia: 0.7,
        useKeyboard: true,
        useTouch: true,
        resetNativeScroll: false
      })

      // Handle resize
      const handleResize = () => {
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.update()
        }
      }

      window.addEventListener('resize', handleResize)
      
      // Initial update
      setTimeout(() => {
        handleResize()
      }, 1000)

      return () => {
        window.removeEventListener('resize', handleResize)
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.destroy()
        }
      }
    })()
  }, [])

  return scrollRef
} 