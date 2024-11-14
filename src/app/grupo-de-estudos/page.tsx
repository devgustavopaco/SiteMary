import React from "react";
import HeaderService from "@/components/HeaderService";
import styles from "./styles.module.scss";

const Grupo: React.FC = () => {
  return (
    <>
      <HeaderService />
      <div className={styles.container}>
        <div className={styles.message}>EM BREVE, RETORNE A OUTRAS PÁGINAS</div>
      </div>
    </>
  );
};

export default Grupo;
