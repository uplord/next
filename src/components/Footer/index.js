import React from 'react';
import Social from '@/components/Social';
import styles from "./style.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <Social />
        <p>&copy; {currentYear} Michael Allen</p>
      </div>
    </div>
  )
}
