'use client';

import React from 'react';
import Logo from '@/components/Header/Logo';
import Navigation from '@/components/Header/Navigation';
import Toggle from '@/components/Toggle';
import { useScroll } from '@/utils/scrollUtils';
import styles from './style.module.scss';

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
