import React from "react";
import styles from "../TCC/styles.module.scss";

const CN: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.banner}>
          <img src="/images/banner23.jpg" alt="" />
        </div>
        <div className={styles.title}>
          <h1>Curso Neuropsi Descomplicada</h1>
        </div>
        <div className={styles.text}>
          <p>
            O que é o Neuropsi Descomplicada exatamente? É um curso, um passo a
            passo, é o jeito que a Maryane ensina a "destravar" o raciocínio
            clínico no exame neuropsicológico. E o que quer dizer destravar o
            raciocínio clínico? É implementar com clareza todas as etapas da
            avaliação, de forma a fazer uma avaliação que realmente ajude o
            paciente, com mais clareza para unir todos os procedimentos
            utilizados, sem ser somente aquela avaliação que somente fala sobre
            resultado de testes.
          </p>
          <p>
            Depois que a Maryane ensinou para muitas pessoas através de várias
            horas na sala de aula e supervisionando diversos neuropsicólogos, o
            Neuropsi Descomplicada nasceu. Duas turmas já aconteceram:
          </p>
        </div>

        <div className={styles.button}>
          <button>Quero iniciar minha terapia</button>
        </div>
      </div>
    </main>
  );
};

export default CN;
