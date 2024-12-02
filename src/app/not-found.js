import styles from "./not-found.module.scss";
import Logo from '@/components/Header/Logo';
import Buttons from "@/components/Button/Buttons";

export const metadata = {
  title: "404 Page not found",
  description: "",
};
 
export default function NotFound() {
  const buttons = [
    { title: "Go back to the homepage", link: "/", class: "primary" },
  ];

  return (
    <div className={styles.error}>
      <div className={`container`}>
        <div className={styles.content}>
          <Logo />
          <h1>Page not found</h1>
          <p>We couldn&apos;t find the page you are looking for.</p>
          <Buttons data={buttons} className={styles.buttons} />
        </div>
      </div>
    </div>
  )
}