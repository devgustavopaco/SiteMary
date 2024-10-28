// components/ServicesGrid.tsx
import React from "react";
import styles from "./styles.module.scss";

const services = [
  {
    icon: "/icons/User.svg",
    text: "You should hear yourself talk, (you’ll feel so much better).",
  },
  {
    icon: "/icons/Users.svg",
    text: "You should hear yourself talk, (you’ll feel so much better).",
  },
  {
    icon: "/icons/PuzzlePiece.svg",
    text: "You should hear yourself talk, (you’ll feel so much better).",
  },
  {
    icon: "/icons/Book.svg",
    text: "You should hear yourself talk, (you’ll feel so much better).",
  },
  {
    icon: "/icons/Flag.svg",
    text: "You should hear yourself talk, (you’ll feel so much better).",
  },
  {
    icon: "/icons/Gavel.svg",
    text: "You should hear yourself talk, (you’ll feel so much better).",
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
              <button className={styles.button}>Conheça Mais</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
