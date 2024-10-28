// app/page.tsx
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import styles from "./page.module.scss"; // Estilos SCSS (será criado depois)
import Profile from "@/components/Profile";
import ServicesGrid from "@/components/ServicesGrid";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <div className={styles.Profile}>
        <Profile />
        <ServicesGrid />
        <QuoteSection />
        <Footer />
      </div>
    </div>
  );
}
