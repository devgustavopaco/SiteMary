// components/QuoteSection.tsx
import React from "react";
import styles from "./styles.module.scss";

const QuoteSection = () => {
  return (
    <section className={styles.quoteSection}>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <blockquote>
          “A experiência constantemente molda o cérebro e, nesse sentido, o
          cérebro é moldado pela experiência.”
          <span>Oliver Sacks</span>
        </blockquote>
        <button className={styles.contactButton}>Entre em Contato</button>
      </div>
    </section>
  );
};

export default QuoteSection;
