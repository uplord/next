import React from 'react';
import Link from 'next/link'
import styles from "./style.module.scss";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <span className={styles.icon}>M</span>The<span className={styles.primary}>Michael</span>
    </Link>
  )
}
