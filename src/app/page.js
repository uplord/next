import styles from "./page.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Banner from '@/components/Block/Banner';
import Section from '@/components/Block/Section';

function HomePage() {
  return (
    <div id="page">
      <Header />
      <main className={styles.main}>
        <Banner />
        <Section />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;