// components/Profile.tsx
import React from "react";
import styles from "./styles.module.scss";

const Profile = () => {
  return (
    <section className={styles.profile}>
      <div className={styles.imageContainer}>
        <img src="/images/profile.png" alt="Maryane Cavalcanti" />
      </div>
      <div className={styles.info}>
        <h1>Maryane Cavalcanti</h1>
        <p className={styles.crp}>CRP 11/10624</p>
        <p className={styles.description}>
          Graduada em Psicologia pela Universidade Presbiteriana Mackenzie
          (2009), Especialista e Proficiente em Terapia Cognitivo Comportamental
          (CTC VEDA), certificada pelo Beck Institute em Estresse
          Pós-Traumático, treinamento em Ensino e Supervisão em Terapia
          Cognitivo-Comportamental pelo Beck Institute, certificada pelo DEGERT
          (União Europeia), especialista em Psicologia Jurídica (Conselho
          Federal de Psicologia), pós-graduação em Psicologia Positiva, Ciência
          do Bem-Estar e Autorrealização (PUC-RS).
        </p>
        <p className={styles.description}>
          É uma das sócias fundadoras do Centro de Terapia Cognitiva Veda -
          Clínica, Ensino e Pesquisa, professora de pós-graduação, supervisora
          clínica, psicóloga clínica, psicóloga do grupo de Transtorno Explosivo
          Intermitente do Ambulatório de Transtornos do Controle de Impulso do
          Instituto de Psiquiatria da Faculdade de Medicina da USP e assistente
          técnica em Psicologia Jurídica.
        </p>
      </div>
    </section>
  );
};

export default Profile;
