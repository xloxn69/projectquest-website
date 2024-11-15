'use client'

import { Bell, Home, FileText, LifeBuoy, ScrollText } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { useEffect } from 'react'
import styles from '../../styles/Docs.module.css'

// Define proper types for the SVG component
const DiscordLogo: React.FC = () => {
  return (
    <svg 
      className={styles.discordIcon} 
      viewBox="0 -28.5 256 256" 
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" />
    </svg>
  )
}

const Component: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('dark')
  }, [])

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo.png"
              alt="Project Quest"
              width={32}
              height={32}
              className={styles.logoImage}
            />
            Project Quest
            <span className={styles.betaBadge}>BETA</span>
          </div>
          <div className={styles.searchContainer}>
            <input
              type="search"
              placeholder="Search..."
              className={styles.searchInput}
            />
            <div className={styles.searchShortcut}>⌘ K</div>
          </div>
          <div className={styles.headerRight}>
            <button className={styles.discordButton}>
              <DiscordLogo />
              Discord Server
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <nav className={styles.mainNav}>
            <Link href="#" className={styles.navLinkActive}>
              <Home className={styles.navIcon} />
              Home
            </Link>
            <Link href="#" className={styles.navLink}>
              <Bell className={styles.navIcon} />
              Announcements
            </Link>
          </nav>

          <div className={styles.navSection}>
            <h2 className={styles.sectionTitle}>Toilet Paper</h2>
            <nav className={styles.sectionNav}>
              <Link href="#" className={styles.navLink}>
                <ScrollText className={styles.navIcon} />
                Overview
              </Link>
              <Link href="#" className={styles.navLink}>
                <FileText className={styles.navIcon} />
                Rules
              </Link>
            </nav>
          </div>

          <div className={styles.navSection}>
            <h2 className={styles.sectionTitle}>Community Engagement</h2>
            <nav className={styles.sectionNav}>
              <Link href="#" className={styles.navLink}>
                <FileText className={styles.navIcon} />
                Guidelines
              </Link>
              <Link href="#" className={styles.navLink}>
                <LifeBuoy className={styles.navIcon} />
                Feedback
              </Link>
            </nav>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <div className={styles.cardImage} />
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Toilet Paper</h3>
              <div className={styles.badgeContainer}>
                <span className={styles.badge}>100k+ Servers</span>
                <span className={styles.badge}>Entertainment</span>
              </div>
            </div>
            <div className={styles.cardContent}>
              <p>
                Grow your supply, invest in facilities, and expand production to reach maximum efficiency.
                Earn upgrades, tackle unique challenges, and watch your stockpile grow automatically as you progress.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImage} />
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Automater</h3>
              <div className={styles.badgeContainer}>
                <span className={styles.badge}>50k+ Servers</span>
                <span className={styles.badge}>Server Management</span>
              </div>
            </div>
            <div className={styles.cardContent}>
              <p>
                Powerful automation tool for Discord servers. Schedule messages, moderate content, and manage roles
                automatically with customizable rules and triggers.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImage} />
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Game Arcade</h3>
              <div className={styles.badgeContainer}>
                <span className={styles.badge}>25k+ Servers</span>
                <span className={styles.badge}>Entertainment</span>
              </div>
            </div>
            <div className={styles.cardContent}>
              <p>
                Transform your server into a gaming hub with multiple interactive games, leaderboards, and 
                competitive features. Perfect for building an engaged community.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Component 