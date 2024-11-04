import Link from 'next/link'
import { X } from 'lucide-react'
import Image from 'next/image'
import styles from '../styles/MobileNav.module.css'

export default function MobileNav({ isOpen, onClose, onOpen }: { 
  isOpen: boolean; 
  onClose: () => void;
  onOpen?: () => void;
}) {
  return (
    <>
      <div className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`} onClick={onClose} />

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
              <li><Link href="#" className={styles.mobileNavLink} onClick={onClose}>Applications</Link></li>
              <li><Link href="#" className={styles.mobileNavLink} onClick={onClose}>Stuff</Link></li>
              <li><Link href="#" className={styles.mobileNavLink} onClick={onClose}>Stuff</Link></li>
              <li><Link href="#" className={styles.mobileNavLink} onClick={onClose}>Stuff</Link></li>
            </ul>
          </nav>
          <div className={styles.authButtons}>
            <a href="#signin" className={styles.btnSignin}>Discord</a>
            <a href="#getstarted" className={styles.btnDemo}>Get started</a>
          </div>
        </div>
      </div>
    </>
  )
}