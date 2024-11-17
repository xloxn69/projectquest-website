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

      const isMobile = window.innerWidth <= 768

      locomotiveScrollRef.current = new locomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true,
        multiplier: isMobile ? 1.25 : 1.5,
        lerp: isMobile ? 0.1 : 0.1,
        class: 'is-revealed',
        reloadOnContextChange: true,
        touchMultiplier: isMobile ? 3.5 : 3,
        smartphone: {
          smooth: true,
          direction: 'vertical',
          multiplier: 1.25,
          breakpoint: 767,
          touchMultiplier: 3.5,
          resetNativeScroll: false,
          customScrollBehavior: (position: any, direction: string) => {
            return direction === 'up' ? position * 1.8 : position;
          }
        },
        tablet: {
          smooth: true,
          direction: 'vertical',
          breakpoint: 1024
        },
        getDirection: true,
        getSpeed: true,
        inertia: isMobile ? 0.65 : 0.7,
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