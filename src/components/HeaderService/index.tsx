"use client";

import Image from "next/image";
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
        <Image
          src="/images/logo.png"
          alt="Logo Maryane Cavalcanti"
          width={100}
          height={100}
        />
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
          href="/terapia-cognitivo-comportamental"
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
        <Link href="#" passHref>
          <a>
            <Image
              src="/images/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </a>
        </Link>
        <Link href="#" passHref>
          <a>
            <Image
              src="/images/face.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </a>
        </Link>
        <Link href="#" passHref>
          <a>
            <Image
              src="/images/insta.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
        </Link>
        <Link href="#" passHref>
          <a>
            <Image src="/images/email.svg" alt="Email" width={24} height={24} />
          </a>
        </Link>
      </div>
      <div className={styles.menuHamburguer} onClick={toggleMenu}>
        <Image
          src={menuAberto ? "/images/x.svg" : "/images/menu.svg"}
          alt="Menu"
          width={24}
          height={24}
        />
      </div>
    </header>
  );
};

export default Header;
