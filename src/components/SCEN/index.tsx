"use client";

import Image from "next/image";
import React from "react";
import styles from "../TCC/styles.module.scss";

const SCEN: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Evita o comportamento padrão do Link
    window.open(
      "https://wa.me/5585998482733?text=Olá,%20entrei%20em%20contato%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20consulta.",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.bannerSup}>
          <Image
            src="/images/bannerSup.jpeg"
            alt=""
            width={1200}
            height={400}
          />
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
          <button onClick={handleWhatsAppClick}>
            Quero iniciar minha terapia
          </button>
        </div>
      </div>
    </main>
  );
};

export default SCEN;
