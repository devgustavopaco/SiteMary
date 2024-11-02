import React from "react";

import HeaderService from "@/components/HeaderService";
import Sidebar from "@/components/Sidebar";
import TCC from "@/components/TCC";
import styles from "./styles.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <HeaderService />
      <div className={styles.content}>
        <Sidebar />
        <TCC />
      </div>
    </div>
  );
};

export default Home;
