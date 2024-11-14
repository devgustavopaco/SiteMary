import React from "react";
import styles from "../TCC/styles.module.scss";

const Neuro: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.bannerNeuro}>
          <img src="/images/neuro.jpg" alt="" />
        </div>
        <div className={styles.title}>
          <h1>Consulta com Neurologista</h1>
        </div>
        <div className={styles.text}>
          <p>
            O neurologista é um médico especialista que avalia, diagnostica e
            trata doenças que afetam o sistema nervoso, incluindo o cérebro, a
            medula espinhal, os nervos e os músculos.
          </p>
          <p>
            O Dr. Carlos Alberto é médico com formação pela Universidade Federal
            do Ceará, neurologista pelo Hospital Geral de Fortaleza e
            especialista em doenças cerebrovasculares pelo mesmo hospital.
          </p>
          <p>
            Há mais de 14 anos atuando com abordagem integrativa e de maneira
            multidisciplinar com outros profissionais da saúde. Em suas
            consultas, o Dr. Carlos leva em consideração o paciente como um
            todo, desde os fatores físicos até os emocionais e cognitivos. Isso
            é essencial para promover não apenas a recuperação, mas também o
            bem-estar geral do paciente.
          </p>
        </div>
        <div className={styles.faqSection} style={{ paddingTop: "20px" }}>
          <div className={styles.faqItem}>
            <h4>O Dr. Carlos pode ajudar com:</h4>
            <ul>
              <li>Acidente Vascular Cerebral (AVC)</li>
              <li>Transtorno do Espectro Autista</li>
              <li>Enxaqueca</li>
              <li>Tremores</li>
              <li>TDAH</li>
              <li>Doença de Alzheimer</li>
              <li>Epilepsia</li>
              <li>Demências</li>
              <li>Doença de Parkinson</li>
              <li>Insônia</li>
              <li>Dores de cabeça</li>
            </ul>
          </div>
        </div>
        <div className={styles.button}>
          <a
            href="https://wa.me/5585998482733?text=Quero%20agendar%20uma%20consulta%20com%20o%20DR.CARLOS%20ALBERTO."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Quero iniciar minha terapia</button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Neuro;