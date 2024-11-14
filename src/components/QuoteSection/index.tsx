import styles from "./styles.module.scss";

const QuoteSection = () => {
  const handleWhatsAppClick = (e: any) => {
    e.preventDefault(); // Evita o comportamento padrão do Link
    window.open(
      "https://wa.me/5585998482733?text=Olá,%20entrei%20em%20contato%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20consulta.",
      "_blank",
      "noopener,noreferrer"
    );
  };
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
        <button onClick={handleWhatsAppClick}>
          Quero iniciar minha terapia
        </button>
      </div>
    </section>
  );
};

export default QuoteSection;
