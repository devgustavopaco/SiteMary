import React from "react";
import styles from "../TCC/styles.module.scss";

const SCEN: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.banner}>
          <img src="/images/book.jpg" alt="" />
        </div>
        <div className={styles.title}>
          <h1>Supervisão Clínica em Neuropsicologia</h1>
        </div>
        <div className={styles.text}>
          <p>
            A supervisão em Neuropsicologia tem o objetivo de desenvolver o
            raciocínio clínico, trabalhar as suas habilidades como
            neuropsicólogo(a) e responder suas principais demandas. Sendo para
            algum caso específico ou na sua atuação de modo geral.
          </p>
          <p>
            Para Associação Americana de Psicologia (APA) a supervisão é uma
            prática profissional colaborativa com componentes que facilitem o
            aprimoramento de competências profissionais.
          </p>
        </div>

        <div className={styles.faqSection}>
          <h2>-</h2>
          <div className={styles.faqItem}>
            <h4>
              As Diretrizes de Supervisão estão organizadas em sete domínios,
              segundo a APA:
            </h4>
            <ul>
              <li>Domínio A: Competência do Supervisor</li>
              <li>Domínio B: Diversidade</li>
              <li>Domínio C: Relacionamento de Supervisão</li>
              <li>Domínio D: Profissionalismo</li>
              <li>Laudo final;</li>
              <li>Domínio E: Avaliação / mensuração / Feedback</li>
              <li>Domínio F: Problemas de Competência Profissional</li>
              <li>Domínio G: Considerações éticas, legais e regulamentares</li>
            </ul>
          </div>
        </div>
        <div className={styles.text}>
          <p>
            Neste sentido, as supervisões podem envolver discutir o processo de
            avaliação (entrevista e instrumentos), diagnóstico, até o raciocínio
            clínico final, elaboração do laudo e estabelecimento de condutas.
          </p>
        </div>
        <div className={styles.button}>
          <button>Quero iniciar minha terapia</button>
        </div>
      </div>
    </main>
  );
};

export default SCEN;
