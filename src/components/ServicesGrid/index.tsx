import Link from "next/link";
import styles from "./styles.module.scss";

const services = [
  {
    icon: "/icons/User.svg",
    text: "Terapia Cognitivo Comportamental (TCC)",
    link: "/terapia-cognitivo-comportamental",
  },
  {
    icon: "/icons/Users.svg",
    text: "Avaliação Neuropsicológica",
    link: "/avaliacao-neuropsicologica",
  },
  {
    icon: "/icons/PuzzlePiece.svg",
    text: "Supervisão Clínica em Neuropsicologia",
    link: "/supervisao-clinica",
  },
  {
    icon: "/icons/Book.svg",
    text: "Grupo de Estudos Sou Neuropsi",
    link: "/grupo-estudos-sou-neuropsi",
  },
  {
    icon: "/icons/Flag.svg",
    text: "Curso Neuropsi Descomplicada",
    link: "/curso-neuropsi-descomplicada",
  },
  {
    icon: "/icons/Gavel.svg",
    text: "Quero a opinião de um Neurologista",
    link: "/neurologista",
  },
];

const ServicesGrid = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Atuações e Atendimentos</h2>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <img
                src={service.icon}
                alt="Service Icon"
                className={styles.icon}
              />
              <p>{service.text}</p>
              <Link href={service.link} passHref>
                <button className={styles.button}>Conheça Mais</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
