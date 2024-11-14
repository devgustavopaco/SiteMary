"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo Maryane Cavalcanti" />
      </div>
      <nav className={`${styles.nav} ${menuAberto ? styles.navAberto : ""}`}>
        <Link
          href="/"
          className={pathname === "/" ? styles.ativo : ""}
          onClick={() => setMenuAberto(false)}
        >
          Home
        </Link>
        <Link
          href="/terapia-cognitivo-comportamental"
          passHref
          onClick={() => setMenuAberto(false)}
        >
          <a className={pathname === "/" ? styles.ativo : ""}>
            Áreas de Interesse
          </a>
        </Link>
        <Link
          href="/contato"
          className={pathname === "/contato" ? styles.ativo : ""}
          onClick={() => setMenuAberto(false)}
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
      <div className={styles.menuHamburguer} onClick={toggleMenu}>
        <img
          src={menuAberto ? "/images/x.svg" : "/images/menu.svg"}
          alt="Menu"
        />
      </div>
    </header>
  );
};

export default Header;
