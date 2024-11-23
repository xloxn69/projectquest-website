import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, ChevronDown } from 'lucide-react'
import styles from './NavBar.module.css'

export default function NavBar({ isScrolled, isMobileNavOpen, toggleMobileNav }: {
  isScrolled: boolean;
  isMobileNavOpen: boolean;
  toggleMobileNav: () => void;
}) {
  return (
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
  )
} 