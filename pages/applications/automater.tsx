import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import MobileNav from '../../components/MobileNav'
import styles from '../../styles/ApplicationPage.module.css'

export default function AutomaterPage() {
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

      <MobileNav 
        isOpen={isMobileNavOpen} 
        onClose={() => setIsMobileNavOpen(false)}
        onOpen={() => setIsMobileNavOpen(true)}
      />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Automater Bot</h1>
          <p className={styles.subtitle}>Automate Your Discord Server Tasks</p>
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
            <h3>Custom Workflows</h3>
            <p>Create custom automation workflows for your server</p>
          </div>
          <div className={styles.feature}>
            <h3>Scheduled Tasks</h3>
            <p>Schedule messages, role updates, and other tasks</p>
          </div>
          <div className={styles.feature}>
            <h3>Integration Support</h3>
            <p>Connect with other services and platforms</p>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Automate your server today</h2>
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