import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Docs.module.css'

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className={styles.docsContainer}>
      {/* Left Sidebar */}
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo.png"
            alt="Project Quest Logo"
            width={30}
            height={30}
          />
          <span>Project Quest</span>
        </Link>

        <nav className={styles.navigation}>
          <Link href="/docs" className={styles.navItem}>
            <svg className={styles.icon} /* Add home icon *//>
            Home
          </Link>
          
          <Link href="/docs/notifications" className={styles.navItem}>
            <svg className={styles.icon} /* Add notifications icon *//>
            Notifications
          </Link>

          <Link href="/docs/conversations" className={styles.navItem}>
            <svg className={styles.icon} /* Add conversations icon *//>
            Conversations
          </Link>

          <div className={styles.navSection}>Community Engagement</div>
          
          <Link href="/docs/guidelines" className={styles.navItem}>
            <svg className={styles.icon} /* Add guidelines icon *//>
            Guidelines
          </Link>

          <Link href="/docs/feedback" className={styles.navItem}>
            <svg className={styles.icon} /* Add feedback icon *//>
            Feedback
          </Link>
        </nav>

        <footer className={styles.sidebarFooter}>
          <div className={styles.socialLinks}>
            {/* Add social media links */}
          </div>
          <div className={styles.footerLinks}>
            <Link href="/terms">Terms and Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/imprint">Imprint</Link>
          </div>
          <div className={styles.copyright}>
            ©2024 Project Quest
          </div>
        </footer>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.searchContainer}>
            <svg className={styles.searchIcon} /* Add search icon *//>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <Link href="/auth/github" className={styles.githubButton}>
            Sign in with GitHub
          </Link>
        </header>

        <div className={styles.content}>
          {/* Documentation content goes here */}
          <div className={styles.docCard}>
            <Image
              src="/docs/toilet-paper.png"
              alt="Toilet Paper"
              width={800}
              height={400}
              className={styles.docImage}
            />
            <div className={styles.docInfo}>
              <h2>Toilet Paper</h2>
              <div className={styles.badges}>
                <span className={styles.badge}>100k+ Servers</span>
                <span className={styles.badge}>Economy</span>
              </div>
              <p>Simulate a robot vacuum cleaner navigating a room with obstacles to clean all reachable cells. The player inputs commands to control the robot.</p>
            </div>
          </div>

          {/* Add more doc cards as needed */}
        </div>
      </main>
    </div>
  )
} 