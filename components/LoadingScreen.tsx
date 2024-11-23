import React from 'react'
import styles from './LoadingScreen.module.css'

export default function LoadingScreen() {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.content}>
        <div className={styles.dots}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
        <p className={styles.text}>Just a moment.</p>
      </div>
    </div>
  )
} 