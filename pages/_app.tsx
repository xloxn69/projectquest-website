import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import LoadingScreen from '@/components/LoadingScreen'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Initial load - reduced from 2000ms to 1000ms
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    // Handle route changes
    const handleStart = () => setLoading(true)
    const handleComplete = () => {
      // Reduced transition time to 500ms
      setTimeout(() => setLoading(false), 500)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      clearTimeout(timer)
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return (
    <main className={inter.className}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Component {...pageProps} />
      )}
    </main>
  )
} 