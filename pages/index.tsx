import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import MobileNav from '../components/MobileNav'
import styles from '../styles/HomePage.module.css'

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen)

  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={30}
            height={30}
          />
          <span className={styles.logo}>Project Quest</span>
        </Link>
        <nav className={styles.desktopNav}>
          <div className={styles.navItem}>
            <a href="#" className={styles.navLink}>Applications <i className="fas fa-chevron-down"></i></a>
          </div>
          <div className={styles.navItem}>
            <a href="#" className={styles.navLink}>Stuff <i className="fas fa-chevron-down"></i></a>
          </div>
          <div className={styles.navItem}>
            <a href="#" className={styles.navLink}>Stuff <i className="fas fa-chevron-down"></i></a>
          </div>
          <div className={styles.navItem}>
            <a href="#" className={styles.navLink}>Stuff</a>
          </div>
        </nav>
        <div className={styles.authButtons}>
          <a href="#signin" className={styles.btnSignin}>Discord</a>
          <a href="#start" className={styles.btnStart}>Get Started</a>
        </div>
        <div className={styles.mobileButtons}>
          <a href="#start" className={styles.btnStart}>Get Started</a>
          <button onClick={toggleMobileNav} className={styles.mobileMenuButton}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />

      <main>
        <section className={styles.hero}>
          <h1>
            <span className={styles.innovativeGlow}>Innovative</span> <br className={styles.mobileOnly} /> 
            <span className={styles.noWrap}>Bots, Endless</span> <br className={styles.mobileOnly} />
            <span className={styles.glowContainer}>
              <span className={styles.gradientBlur}>Possibilities</span>
              <span className={styles.gradientClear}>Possibilities</span>
            </span>
          </h1>
          <p className={styles.heroText}>
            We create innovative Discord bots for a variety of server needs, offering endless possibilities for automation and engagement.
          </p>
          <a href="#" className={`${styles.btn} ${styles.btnPrimary}`}>Get Started</a>
          <a href="#" className={`${styles.btn} ${styles.btnSecondary}`}>Discord</a>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h4>Resources</h4>
            <a href="#">Blog</a>
            <a href="#">Documentation</a>
            <a href="#">Developers</a>
            <a href="#">Support</a>
          </div>
          <div className={styles.footerColumn}>
            <h4>Community</h4>
            <a href="#">Discord Server</a>
            <a href="#">System Status</a>
            <a href="#">Become a Partner</a>
          </div>
          <div className={styles.footerColumn}>
            <h4>Applications</h4>
            <a href="#">Toilet Paper</a>
            <a href="#">Automater</a>
            <a href="#">Game Arcade</a>
          </div>
          <div className={styles.footerColumn}>
            <h4>Legal</h4>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}