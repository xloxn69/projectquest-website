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
          <span className={styles.label}>Resources</span>
          <h2 className={styles.title}>Jumpstart your Discord server.</h2>
          <p className={styles.subtitle}>
            Browse our documentation, guides, and community resources to get you started with Project Quest.
          </p>
          
          <div className={styles.cardGrid}>
            <Link href="/docs/academy" className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/placeholder-academy.jpg" // Add a placeholder image
                  alt="Academy"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>Academy</h3>
                <p>Watch tutorials and guides on bot configuration.</p>
                <span className={styles.cardLink}>Explore the Academy →</span>
              </div>
            </Link>

            <Link href="/blog" className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/placeholder-blog.jpg" // Add a placeholder image
                  alt="Blog"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>Blog</h3>
                <p>Learn new insights and tips for Discord server management.</p>
                <span className={styles.cardLink}>Get insights →</span>
              </div>
            </Link>

            <Link href="/community" className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/placeholder-community.jpg" // Add a placeholder image
                  alt="Community"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>Community</h3>
                <p>Connect with other server owners and bot enthusiasts.</p>
                <span className={styles.cardLink}>Join Community →</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 