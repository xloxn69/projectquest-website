import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import styles from '../styles/MobileNav.module.css'

export default function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
      <div className={styles.mobileNavContent}>
        <div className={styles.mobileNavHeader}>
          <Link href="/" className={styles.mobileNavLogo}>
            Project Quest
          </Link>
          <button onClick={onClose} className={styles.closeButton} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav className={styles.mobileNavMenu}>
          <ul>
            <li><Link href="#" className={styles.mobileNavLink} onClick={onClose}>Applications</Link></li>
            <li><Link href="#" className={styles.mobileNavLink} onClick={onClose}>Stuff</Link></li>
            <li><Link href="#" className={styles.mobileNavLink} onClick={onClose}>Stuff</Link></li>
            <li><Link href="#" className={styles.mobileNavLink} onClick={onClose}>Stuff</Link></li>
          </ul>
        </nav>
        <div className={styles.mobileNavButtons}>
          <button className={styles.mobileNavButton}>Discord</button>
          <button className={`${styles.mobileNavButton} ${styles.mobileNavButtonOutline}`}>Get Started</button>
        </div>
      </div>
    </div>
  )
}