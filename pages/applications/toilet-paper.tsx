import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import MobileNav from '../../components/MobileNav'
import styles from '../../styles/ApplicationPage.module.css'

export default function ToiletPaperPage() {
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
        {/* Same header as HomePage - you might want to create a Header component */}
      </header>

      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Toilet Paper Bot</h1>
          <p className={styles.subtitle}>The Ultimate Server Management Solution</p>
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
            <h3>Moderation Tools</h3>
            <p>Advanced moderation capabilities to keep your server clean and organized</p>
          </div>
          <div className={styles.feature}>
            <h3>Auto Responses</h3>
            <p>Customize automatic responses to common questions and commands</p>
          </div>
          <div className={styles.feature}>
            <h3>Role Management</h3>
            <p>Effortlessly manage roles and permissions within your server</p>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Ready to upgrade your server?</h2>
          <div className={styles.ctaButtons}>
            <a href="#" className={styles.btnPrimary}>Add to Discord</a>
            <a href="#" className={styles.btnSecondary}>View Documentation</a>
          </div>
        </section>
      </main>

      {/* Same footer as HomePage - you might want to create a Footer component */}
    </div>
  )
} 