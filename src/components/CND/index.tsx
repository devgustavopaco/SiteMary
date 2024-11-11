"use client";

import React, { useState } from "react";
import styles from "../TCC/styles.module.scss";

const testimonials = [
  {
    text: "A Mary tem um método onde ela nos ajuda a organizar as informações da avaliação, conectando os resultados quantitativos dos testes com a história clínica do paciente, além de ajudar a estruturar a conclusão de forma não apenas descritiva, mas também compreensiva, para que os leitores do laudo realmente entendam todo o processo. Além disso, a forma didática como ela trabalha, é muito objetiva e focada em desenvolver as habilidades e a autonomia do supervisionando, por isso me sinto muito mais segura nas avaliações neuropsicológicas atualmente!",
    author: "Patrícia Oliveira, Neuropsicóloga, SP (@neuropsi.patioliveira)",
  },
  {
    text: "Conheci a Mary, como professora no curso de pós graduação do Einsten e logo me encantei pela didática clara e sensível em compartilhar seu conhecimento e o respeito em ver no aluno um colega de profissão. Quando ela divulgou a proposta do curso Neuropsicologia Descomplicada, não pensei duas vezes em me escrever e mais uma vez fui surpreendida de maneira muito positiva. O curso entregou o que prometeu e muito mais; o conteúdo respondeu as minhas angústias profissionais, o material didático foi rico e compreensível e a maneira que a Mary apresentou o raciocínio clínico, a elaboração do protocolo de avaliação e algumas sugestões de estruturas do laudo, foi muito esclarecedora e com várias dicas práticas e bastante dinâmico. Ressalto que o módulo bastidores, o que é um grande diferencial para quem está começando na neuropsicologia. Ter feito o curso Neuropsicologia Descomplicada foi um divisor de águas para minha atuação profissional.",
    author: "Laira Batisteti, Neuropsicóloga, SP (@lairapsicologa)",
  },
  {
    text: "A Mary me ensinou a identificar aspectos importantes ao longo do processo de avaliação, formular hipóteses coerentes e integrá-las com o resultado dos instrumentos utilizados, que é essencial para entender o quadro clínico que se apresenta e fazer as indicações adequadas, sempre que necessário. A cada caso discutido, novos aprendizados vão se estabelecendo e eu me sinto cada vez mais segura nos atendimentos.",
    author: "Michele Maragno, Neuropsicóloga, RS (@michelebmaragno)",
  },
  {
    text: "A Mary me ensinou a enxergar para além dos testes. Mostrou a necessidade de uma anamnese bem feita e de entender dos achados clínicos, para a partir disso montar o caminho que chegará a resposta da pergunta da minha avaliação. Muitas vezes a resposta não é clara, porém, o método que ela me ensinou me faz capaz de não estar presa em caixinhas.",
    author: "Amanda Zogob, Neuropsicóloga, CE (@psicologa.amandazogob)",
  },
  {
    text: "Poder fazer parte da primeira turma do neuropsidescomplicada, foi um enorme prazer. Tive sensação de terminar o ano com chave de ouro. Além de todo o conhecimento técnico, sistemático e consistente que muito me ajudou a elaborar o processo de avaliação (do começo ao fim) e do raciocínio clínico, a condução feita pela Mary e colabores foi de muita leveza, simplicidade e acolhimento, pautados nos conceitos éticos e humanos que são inerentes à nossa profissão. A relação construída entre a turma e os ministrantes foi nutrida por uma ambiência fortalecedora e abundante. Meu mais profundo respeito, agradecimento e admiração pelo trabalho de toda a equipe. Que tantas outras pessoas possam usufruir da beleza desse trabalho e ter, assim como eu tive, a felicidade de aprender e construir uma neuropsicologia com ciência e sentido.",
    author:
      "Anderson Fernandes, Neuropsicólogo, CE (@andersonfernandes_psicologia)",
  },
  {
    text: "O curso neuropsi descomplicada foi um divisor de águas para dar o start no meu caminho na neuropsi. Já havia o desejo, mas bem tímido e inseguro. Durante o curso consegui ter um norte e uma segurança e o que via como complicado e me impossibilitava, era uma grande possibilidade descomplicada. O curso neuropsi descomplicada foi um divisor de águas para dar o start no meu caminho na neuropsi. Já havia o desejo, mas bem tímido e inseguro. Durante o curso consegui ter um norte e uma segurança e o que via como complicado e me impossibilitava, era uma grande possibilidade descomplicada. Não só dei o start, como estou achando incrível todo o percurso e os desafios que vêm surgindo.",
    author: "Ilana Fillipi, Neuropsicóloga, CE (@ilanafillipi)",
  },
];

const CN: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

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
            passo, é o jeito que a Maryane ensina a &rdquo;destravar&rdquo; o
            raciocínio clínico no exame neuropsicológico. E o que quer dizer
            destravar o raciocínio clínico? É implementar com clareza todas as
            etapas da avaliação, de forma a fazer uma avaliação que realmente
            ajude o paciente, com mais clareza para unir todos os procedimentos
            utilizados, sem ser somente aquela avaliação que somente fala sobre
            resultado de testes.
          </p>
          <p>
            Depois que a Maryane ensinou para muitas pessoas através de várias
            horas na sala de aula e supervisionando diversos neuropsicólogos, o
            Neuropsi Descomplicada nasceu. Duas turmas já aconteceram.
          </p>
        </div>

        <div className={styles.carousel}>
          <div className={styles.testimonial}>
            <p>{testimonials[currentSlide].text}</p>
            <p className={styles.author}>{testimonials[currentSlide].author}</p>
          </div>
          <div className={styles.controls}>
            <button onClick={handlePrev}>Anterior</button>
            <button onClick={handleNext}>Próximo</button>
          </div>
        </div>
        <div className={styles.text}>
          <p>
            Atualmente a turma está fechada,
            <a href="/contato" className={styles.link}>
              clique aqui
            </a>
            e deixe o seu nome para ser avisado na próxima turma.
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
