"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo Maryane Cavalcanti" />
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={pathname === "/" ? styles.active : ""}>
          Home
        </Link>
        <Link
          href="/areas-de-interesse"
          className={pathname === "/areas-de-interesse" ? styles.active : ""}
        >
          Áreas de Interesse
        </Link>
        <Link
          href="/contato"
          className={pathname === "/contato" ? styles.active : ""}
        >
          Contato
        </Link>
      </nav>
      <div className={styles.social}>
        <a href="#">
          <img src="/images/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="#">
          <img src="/images/face.svg" alt="Facebook" />
        </a>
        <a href="#">
          <img src="/images/insta.svg" alt="Instagram" />
        </a>
        <a href="#">
          <img src="/images/email.svg" alt="Email" />
        </a>
      </div>
    </header>
  );
};

export default Header;
