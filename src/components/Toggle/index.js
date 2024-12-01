import React, { useEffect, useState } from 'react';
import { useTheme } from "next-themes";
import styles from './style.module.scss';
import Svg from '@/components/Svg';

export default function Toggle() {
  const { theme, setTheme } = useTheme();
  const [ themeStyles, setThemeStyles ] = useState('');
  const [ animate, setAnimate ] = useState(false);

  useEffect(() => {
    if (theme) {
      setThemeStyles(styles[theme] || '');
      setAnimate(true);
    }
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`${styles.toggle} ${animate ? styles.animate : ''} ${themeStyles}`}
      onClick={toggleTheme}
      suppressHydrationWarning
    >
      <span></span>
      <Svg name="sun-solid" width={20} height={20} className={styles.sun} />
      <Svg name="moon-solid" width={20} height={20} className={styles.moon} />
    </div>
  );
}
