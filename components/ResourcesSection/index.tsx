'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import styles from './ResourcesSection.module.css'

export default function ResourcesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className={styles.gridFadeOut} data-scroll-section />
      <div className={styles.container} data-scroll-section>
        <div ref={sectionRef} className={styles.content}>
          <h2 className={styles.title}>Jumpstart your Discord server.</h2>
          <p className={styles.subtitle}>
            Discover powerful tools and features to enhance your Discord community.
          </p>
          
          <div className={styles.cardGrid}>
            <Link href="/docs/management" className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/placeholder-management.jpg"
                  alt="Management"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>Management</h3>
                <p>Powerful tools to manage your server efficiently.</p>
                <span className={styles.cardLink}>Explore Management →</span>
              </div>
            </Link>

            <Link href="/docs/economy" className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/placeholder-economy.jpg"
                  alt="Economy"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>Economy</h3>
                <p>Create engaging economy systems for your community.</p>
                <span className={styles.cardLink}>View Economy →</span>
              </div>
            </Link>

            <Link href="/docs/entertainment" className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/placeholder-entertainment.jpg"
                  alt="Entertainment"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>Entertainment</h3>
                <p>Add fun and engaging activities to your server.</p>
                <span className={styles.cardLink}>Discover Entertainment →</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 