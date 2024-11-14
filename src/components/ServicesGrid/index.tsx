import Link from "next/link";
import styles from "./styles.module.scss";

const services = [
  {
    icon: "/icons/users-thin.svg",
    text: "Terapia Cognitivo Comportamental (TCC)",
    link: "/terapia-cognitivo-comportamental",
  },
  {
    icon: "/icons/brain-thin.svg",
    text: "Avaliação Neuropsicológica",
    link: "/avaliacao-neuropsicologica",
  },
  {
    icon: "/icons/mindset.png",
    text: "Supervisão Clínica em Neuropsicologia",
    link: "/supervisao-clinica",
  },
  {
    icon: "/icons/thinking.png",
    text: "Grupo de Estudos Sou Neuropsi",
    link: "/grupo-de-estudos",
  },
  {
    icon: "/icons/thinking.png",
    text: "Curso Neuropsi Descomplicada",
    link: "/curso-neuropsi-descomplicada",
  },
  {
    icon: "/icons/doctor.png",
    text: "Quero a opinião de um Neurologista",
    link: "/neuro",
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
