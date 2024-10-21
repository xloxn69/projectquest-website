import React from 'react';
import styles from '../styles/HomePage.module.css';
import Head from 'next/head';  // Import Head from Next.js

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Project Quest - Innovative Bots, Endless Possibilities</title>
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <a href="index.html" className={styles.logoLink}>
            <div className={styles.logoContainer}>
              <img
                src="your-logo-url"
                alt="Logo"
                className={styles.logoImage}
              />
              <span className={styles.logo}>Project Quest</span>
            </div>
          </a>
          <nav className={styles.desktopNav}>
            <div className={styles.navItem}>
              <a href="#" className={styles.navLink}>Applications</a>
            </div>
            <div className={styles.navItem}>
              <a href="#" className={styles.navLink}>Stuff</a>
            </div>
          </nav>
          <div className={styles.authButtons}>
            <a href="#signin" className={styles.btnSignIn}>Discord</a>
            <a href="#start" className={styles.btnStart}>Get Started</a>
          </div>
        </header>

        <main>
          <section className={styles.hero}>
            <h1>
              <span className={styles.innovativeGlow}>Innovative</span> Bots, Endless
              <span className={styles.glowContainer}>
                <span className={styles.gradientBlur}>Possibilities</span>
                <span className={styles.gradientClear}>Possibilities</span>
              </span>
            </h1>
            <p>We create innovative Discord bots for a variety of server needs, offering endless possibilities for automation and engagement.</p>
            <a href="#" className={styles.btnPrimary}>Get Started</a>
            <a href="#" className={styles.btnSecondary}>Discord</a>
          </section>
        </main>

        <footer>
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
    </>
  );
};

export default HomePage;