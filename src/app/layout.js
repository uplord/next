'use client';

import "@/styles/style.scss";
import { useEffect, useState } from "react";
// import { getDarkMode } from '@/utils/getDarkMode';

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && localStorage.getItem('color-mode') === 'dark';

  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      <body>
        {children}
      </body>
    </html>
  );
}
