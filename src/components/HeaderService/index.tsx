"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sidebarLinks = [
    {
      name: "Terapia Cognitivo Comportamental (TCC)",
      href: "/terapia-cognitivo-comportamental",
    },
    { name: "Avaliação Neuropsicológica", href: "/avaliacao-neuropsicologica" },
    {
      name: "Supervisão Clínica em Neuropsicologia",
      href: "/supervisao-clinica",
    },
    { name: "Grupo de Estudos Sou Neuropsi", href: "/grupo-de-estudos" },
    { name: "Curso Neuropsi Descomplicada", href: "/curso-neuropsi" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo Maryane Cavalcanti" />
      </div>
      <nav className={`${styles.nav} ${menuAberto ? styles.navAberto : ""}`}>
        <Link
          href="/"
          className={pathname === "/" ? styles.active : ""}
          onClick={() => setMenuAberto(false)}
        >
          Home
        </Link>
        <Link
          href="/areas-de-interesse"
          className={pathname === "/areas-de-interesse" ? styles.active : ""}
          onClick={() => setMenuAberto(false)}
        >
          Áreas de Interesse
        </Link>
        <Link
          href="/contato"
          className={pathname === "/contato" ? styles.active : ""}
          onClick={() => setMenuAberto(false)}
        >
          Contato
        </Link>

        {/* Links da Sidebar incluídos no menu */}
        <div className={styles.sidebarLinks}>
          {sidebarLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={pathname === link.href ? styles.active : ""}
              onClick={() => setMenuAberto(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
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