import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Svg from '@/components/Svg';

export default function Toggle() {
  const [theme, setTheme] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      const savedTheme = localStorage.getItem('color-mode') || (html.classList.contains('dark') ? 'dark' : 'light');
      setTheme(savedTheme);

      updateIcons(savedTheme);

      setTimeout(() => {
        setAnimate(true);
      }, 300);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      updateTheme(newTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const updateTheme = (newTheme) => {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      html.classList.remove('light', 'dark');
      html.classList.add(newTheme);
      localStorage.setItem('color-mode', newTheme);

      updateIcons(newTheme);
    }
  };

  const updateIcons = (newTheme) => {
    const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = newTheme === 'dark' ? '/favicon-dark.svg' : '/favicon.svg';
    document.head.appendChild(favicon);

    const themeColor = document.querySelector('meta[name="theme-color"]') || document.createElement('meta');
    if (!themeColor.hasAttribute('name')) {
      themeColor.setAttribute('name', 'theme-color');
    }
    themeColor.setAttribute('content', newTheme === 'dark' ? '#0d0d0d' : '#fff');
    if (!document.head.contains(themeColor)) {
      document.head.appendChild(themeColor);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    updateTheme(newTheme);
  };

  return (
    <div
      className={`${styles.toggle} ${animate ? styles.animate : ''} ${styles[theme]}`}
      onClick={toggleTheme}
    >
      <span></span>
      <Svg name="sun-solid" width={20} height={20} className={styles.sun} />
      <Svg name="moon-solid" width={20} height={20} className={styles.moon} />
    </div>
  );
}
