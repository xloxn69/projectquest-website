import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import MobileNav from '../../components/MobileNav'
import styles from '../../styles/ApplicationPage.module.css'

export default function GameArcadePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        {/* Same header as HomePage */}
      </header>

      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Game Arcade Bot</h1>
          <p className={styles.subtitle}>Add Fun and Games to Your Server</p>
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
            <h3>Multiple Games</h3>
            <p>Choose from a variety of text-based and interactive games</p>
          </div>
          <div className={styles.feature}>
            <h3>Leaderboards</h3>
            <p>Track scores and compete with server members</p>
          </div>
          <div className={styles.feature}>
            <h3>Custom Games</h3>
            <p>Create and customize your own game rules</p>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Add games to your server</h2>
          <div className={styles.ctaButtons}>
            <a href="#" className={styles.btnPrimary}>Add to Discord</a>
            <a href="#" className={styles.btnSecondary}>View Documentation</a>
          </div>
        </section>
      </main>

      {/* Same footer as HomePage */}
    </div>
  )
} 