import styles from "./page.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.section}>
          <div className={styles.container}>
            <h1>Home</h1>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;