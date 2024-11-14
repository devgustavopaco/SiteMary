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
        <Image
          src="/images/logo.png"
          alt="Logo Maryane Cavalcanti"
          width={200}
          height={100}
        />
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
          Áreas de Interesse
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
        <Link href="#" passHref>
          <Image
            src="/images/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#" passHref>
          <Image src="/images/face.svg" alt="Facebook" width={24} height={24} />
        </Link>
        <Link href="#" passHref>
          <Image
            src="/images/insta.svg"
            alt="Instagram"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#" passHref>
          <Image src="/images/email.svg" alt="Email" width={24} height={24} />
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
