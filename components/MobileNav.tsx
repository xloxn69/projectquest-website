import Link from 'next/link'
import { X } from 'lucide-react'
import Image from 'next/image'
import styles from '../styles/MobileNav.module.css'

export default function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
      <div className={styles.mobileNavContent}>
        <div className={styles.mobileNavHeader}>
          <Link href="/" className={styles.mobileNavLogo}>
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <span>Project Quest</span>
          </Link>
          <button onClick={onClose} className={styles.closeButton} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav className={styles.mobileNavMenu}>
          <ul>
            <li><Link href="#" className={styles.mobileNavLink} onClick={onClose}>Product</Link></li>
            <li><Link href="#" className={styles.mobileNavLink} onClick={onClose}>Resources</Link></li>
            <li><Link href="#" className={styles.mobileNavLink} onClick={onClose}>Docs</Link></li>
            <li><Link href="#" className={styles.mobileNavLink} onClick={onClose}>Pricing</Link></li>
          </ul>
        </nav>
        <div className={styles.authButtons}>
          <a href="#signin" className={styles.btnSignin}>Sign in</a>
          <a href="#demo" className={styles.btnDemo}>Book a demo</a>
        </div>
      </div>
    </div>
  )
}