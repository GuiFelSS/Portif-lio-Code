import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        
        <div className={styles.navLinks}>
          <Link href="/About">Sobre</Link>
          <Link href="#projects">Projetos</Link>
          <Link href="#technologies">Tecnologias</Link>
        </div>

        <Link href="/" className={styles.logo}>
          GUIFELSS
        </Link>
      </nav>
    </footer>
  );
}