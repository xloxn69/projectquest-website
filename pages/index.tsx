import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, ChevronDown } from 'lucide-react'
import MobileNav from '../components/MobileNav'
import styles from '../styles/HomePage.module.css'
import Testimonials from '../components/Testimonials'
import useLocomotiveScroll from '../hooks/useLocomotiveScroll'
import ResourcesSection from '../components/ResourcesSection'

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const scrollRef = useLocomotiveScroll()

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
      <div className={styles.backgroundWrapper} />
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isMobileNavOpen ? styles.headerHidden : ''}`}>
        <div className={styles.headerContent}>
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
              <a href="#" className={styles.navLink}>Product</a>
            </div>
            <div className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Applications
                <ChevronDown size={16} className={styles.navArrow} />
              </a>
              <div className={styles.navDropdown}>
                
                <div className={styles.dropdownSection}>
                  <div className={styles.dropdownCategory}>Management</div>
                  <Link href="/automater" className={styles.dropdownItem}>
                    <div className={styles.dropdownContent}>
                      <div className={styles.dropdownTitle}>Automater</div>
                      <div className={styles.dropdownDescription}>Automate Your Discord Server Tasks</div>
                    </div>
                  </Link>
                </div>
                
                <div className={styles.dropdownSection}>
                  <div className={styles.dropdownCategory}>Economy</div>
                <Link href="/toiletpaper" className={styles.dropdownItem}>
                    <div className={styles.dropdownContent}>
                      <div className={styles.dropdownTitle}>Toilet Paper</div>
                      <div className={styles.dropdownDescription}>Server Management Solution</div>
                    </div>
                  </Link>
                </div>
                <div className={styles.dropdownSection}>
                  <div className={styles.dropdownCategory}>Entertainment</div>
                  <Link href="/game-arcade" className={styles.dropdownItem}>
                    <div className={styles.dropdownContent}>
                      <div className={styles.dropdownTitle}>Game Arcade</div>
                      <div className={styles.dropdownDescription}>Add Fun and Games to Your Server</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.navItem}>
              <a href="#" className={styles.navLink}>Resources</a>
            </div>
            <div className={styles.navItem}>
              <a href="#" className={styles.navLink}>Docs</a>
            </div>
            <div className={styles.navItem}>
              <a href="#" className={styles.navLink}>Pricing</a>
            </div>
          </nav>
          <div className={styles.authButtons}>
            <a href="#signin" className={styles.btnSignin}>Discord</a>
            <a href="#start" className={styles.btnStart}>Get Started</a>
          </div>
          <div className={styles.mobileButtons}>
            <button onClick={toggleMobileNav} className={styles.mobileMenuButton}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />

      <main ref={scrollRef} data-scroll-container>
        <section className={`${styles.hero} hero-section`} data-scroll-section>
          <div className={styles.heroContent} data-scroll data-scroll-speed="1">
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
            <div className={styles.heroButtons}>
              <a href="#" className={`${styles.btn} ${styles.btnPrimary}`}>Get Started</a>
              <a href="#" className={`${styles.btn} ${styles.btnSecondary}`}>Discord</a>
            </div>
          </div>
        </section>

        <br />
        <br />
        <br />
        <br />
        <br />
        

        <div className={styles.gridFadeSection} data-scroll-section />
        <div className={styles.blackSection}>
          <ResourcesSection />
          <Testimonials />
          <footer className={styles.footer} data-scroll-section>
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
                <Link href="/toiletpaper">Toilet Paper</Link>
                <Link href="/automater">Automater</Link>
                <Link href="/gamearcade">Game Arcade</Link>
              </div>
              <div className={styles.footerColumn}>
                <h4>Legal</h4>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}