import styles from "./page.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Banner from '@/components/Block/Banner';

function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Banner />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;