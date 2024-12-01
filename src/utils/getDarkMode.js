export function getDarkMode() {
  // Ensure this only runs on the client
  // if (typeof window === "undefined") return;

  // let theme = localStorage.getItem('color-mode') || null;

  // if (theme == null) {
  //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     theme = 'dark';
  //   } else {
  //     theme = 'light';
  //   }
  // }

  // if (theme === 'dark') {
  //   document.documentElement.classList.add('dark');
  // } else if (theme === 'light') {
  //   document.documentElement.classList.add('light');
  // }
  return 'dark'
}
