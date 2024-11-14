import React from "react";
import styles from "../TCC/styles.module.scss";

const AN: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.bannerAv}>
          <img src="/images/bannerAv.jpeg" alt="" />
        </div>
        <div className={styles.title}>
          <h1>Avaliação Neuropsicológica</h1>
        </div>
        <div className={styles.text}>
          <p>
            A Avaliação Neuropsicológica faz um mapeamento geral dos processos
            neurocognitivos (memória, atenção, linguagem, funcionamento
            executivo etc). Os resultados fornecem informações valiosas sobre as
            possíveis causas subjacentes às dificuldades vivenciadas, a partir
            do perfil de funcionamento cognitivo e comportamental do indivíduo.
          </p>
          <p>
            É útil para neurologistas, psiquiatras e outros profissionais, pois,
            em muitos casos, auxilia na realização de diagnósticos. Além disso,
            esclarece as potencialidades e dificuldades do indivíduo,
            possibilitando também intervenções personalizadas para cada caso.
          </p>
        </div>
        <div className={styles.button}>
          <a
            href="https://wa.me/5585998482733?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20realizar%20uma%20Avaliação%20Neuropsicológica."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Quero iniciar minha terapia</button>
          </a>
        </div>
        <div className={styles.faqSection}>
          <h2>Perguntas frequentes sobre avaliação neuropsicológica:</h2>
          <div className={styles.faqItem}>
            <h4>
              Preciso sempre de um encaminhamento médico ou de outro
              profissional?
            </h4>
            <p>
              Não, você pode realizar a avaliação neuropsicológica de modo
              espontâneo ao notar dificuldades específicas.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>Como a avaliação pode me ajudar?</h4>
            <p>
              A avaliação pode ser útil para fornecer esclarecimentos
              diagnósticos quando há suspeita de um transtorno. Como por
              exemplo, TDAH, Transtorno do Espectro Autista, Alzheimer, Altas
              Habilidades, Transtorno Específico de Aprendizagem etc. Esses
              diagnósticos podem impactar substancialmente a vida do indivíduo e
              merecem ser identificados para serem tratados de maneira
              específica. Além disso, a partir da avaliação é possível traçar
              terapêuticas médicas farmacoterápicas e de reabilitação
              multiprofissional mais assertivas.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>Quanto tempo leva a avaliação?</h4>
            <p>
              As sessões são semanais e a duração depende da complexidade de
              cada caso e perfil do paciente. Cada avaliação começará com uma
              entrevista de anamnese com o foco de obter um histórico detalhado
              da pessoa a ser avaliada e que pode ser complementada ao longo do
              processo avaliativo. No caso de adultos, um segundo informante
              pode ser solicitado, caso o paciente autorize. E em caso de
              pessoas menores de 18 anos, a entrevista de anamnese é realizada
              com os pais ou responsáveis. Do mesmo modo, outras pessoas de
              convivência da criança/adolescente também podem ser solicitadas,
              bem como a participação da escola. Uma estimativa geral, seria
              algo em torno de 5 e 7 sessões, com duração média de 1h cada
              sessão. Depois deste período, para a redação do laudo final, é
              solicitado um tempo de até 20 dias úteis para a entrega e
              devolutiva com todas as informações minuciosamente detalhadas e
              esclarecimento de dúvidas.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>O que acontece após a avaliação</h4>
            <p>
              Após a avaliação, você receberá um laudo escrito conforme orienta
              o Conselho Federal de Psicologia, incluindo recomendações claras
              direcionadas às necessidades específicas de acordo com a história
              de vida e achados do exame. Essas recomendações podem ser usadas
              por você, por outros profissionais (psicólogos clínicos,
              fonoaudiólogos, psicopedagogos, neurologistas, psiquiatras) e pela
              escola da criança/adolescente, visando garantir adequações para
              promover o sucesso diante das dificuldades.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>O que está incluso na avaliação?</h4>
            <ul>
              <li>Anamnese;</li>
              <li>
                Todas as sessões em que serão utilizados testes psicológicos,
                escala, questionários, inventários, tarefas e observações;
              </li>
              <li>
                Discussão do caso com outros profissionais, caso o paciente e/ou
                família autorizem;
              </li>
              <li>
                Discussão com a escola em caso de crianças e adolescentes (se
                autorização dos pais ou responsáveis);
              </li>
              <li>Laudo final;</li>
              <li>Sessão de devolutiva para esclarecimento de dúvidas;</li>
              <li>
                Encaminhamentos para outros profissionais, se necessários;
              </li>
              <li>Sugestões para a rotina.</li>
            </ul>
          </div>
          <div className={styles.faqItem}>
            <h4>Você atende a partir de qual idade?</h4>
            <p>A partir dos 6 anos.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Onde fica seu consultório?</h4>
            <p>
              Na torre Comercial do Shopping Aldeota. Fortaleza - CE. Contato:
              (85) 99848.2733
            </p>
          </div>
        </div>
        <div className={styles.button}>
          <a
            href="https://wa.me/5585998482733?text=Olá,%20entrei%20em%20contato%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20consulta."
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

export default AN;
