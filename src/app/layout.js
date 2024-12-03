import '@/styles/style.scss';
import { DM_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className} suppressHydrationWarning>
      <body >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
