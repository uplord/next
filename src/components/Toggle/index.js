import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styles from './style.module.scss';
import Svg from '@/components/Svg';

export default function Toggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [themeStyles, setThemeStyles] = useState('');

  useEffect(() => {
    if (resolvedTheme) {
      setThemeStyles(styles[resolvedTheme] || '');
    }
  }, [resolvedTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      if (theme === 'system') {
        setTheme(newTheme);
      }
    };

    if (theme === 'system') {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    }

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme, setTheme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`${styles.toggle} ${themeStyles}`}
      onClick={toggleTheme}
      suppressHydrationWarning
    >
      <span></span>
      <Svg name="sun-solid" width={20} height={20} className={styles.sun} />
      <Svg name="moon-solid" width={20} height={20} className={styles.moon} />
    </div>
  );
}
