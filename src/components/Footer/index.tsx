// components/Footer.tsx
import React from "react";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3>Maryane Cavalcanti</h3>
          <p>
            Alameda Santos, 211 - cj. 212.
            <br />
            Cerqueira César - São Paulo - SP.
          </p>
          <p>
            <a href="mailto:contato@carolinabernardo.com.br">
              contato@carolinabernardo.com.br
            </a>
          </p>
          <p>
            Tel/WhatsApp: <strong>(11) 97123-0543</strong>
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h3>Social</h3>
          <ul>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Facebook Carolina Bernardo</a>
            </li>
            <li>
              <a href="#">Instagram Carolina Bernardo</a>
            </li>
            <li>
              <a href="#">Instagram TCC Positiva</a>
            </li>
            <li>
              <a href="#">Facebook TCC Positiva</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>Navegação</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Áreas de Interesse</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Site desenvolvido pelo Cérebro © 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
