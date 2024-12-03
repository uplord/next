'use client';

import React from 'react';
import styles from './style.module.scss';
import Logo from '@/components/Header/Logo';
import Navigation from '@/components/Header/Navigation';
import Toggle from '@/components/Toggle';
import { useScroll } from '@/utils/scrollUtils';

export default function Header() {
  const isScrolled = useScroll();

  return (
    <div className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Logo />
        <Navigation />
        <Toggle />
      </div>
    </div>
  );
}
