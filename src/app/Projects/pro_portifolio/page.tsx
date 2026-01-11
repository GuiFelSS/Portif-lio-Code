"use client";

import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectsPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <main className="main">
            <header className={styles.headerProjects}>

                <div className={styles.headerMobile}>
                    <h2 className={styles.logo}>GUIFELSS</h2>
                    <button
                        className={styles.hamburgerBtn}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                    >
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M4 7H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M4 14H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M4 21H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {menuOpen && <div className={styles.menuOverlay} onClick={() => setMenuOpen(false)} />}

                <nav className={`${styles.navMobile} ${menuOpen ? styles.open : ''}`}>
                    <ul>
                        <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><a href="https://github.com/GuiFelSS/Web_Portifolio" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                    <button
                        className={styles.closeBtn}
                        onClick={() => setMenuOpen(false)}
                        aria-label="Fechar"
                    >
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M6 6L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M22 6L6 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </nav>

                <div className={styles.profileImageContainer}>
                    <Image
                        src="/foto_perfil_teste.jpg"
                        alt="Foto de perfil - Guilherme Felipe"
                        width={150}
                        height={150}
                        className={styles.profileImage}
                    />
                    <h2>GUIFELSS</h2>

                </div>

                <nav className={styles.navProjects}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                    </ul>

                    <ul>
                        <li><a href="https://github.com/GuiFelSS/Web_Portifolio" target='_blank'>GitHub</a></li>
                    </ul>

                    <div className={styles.socialIconsContainer}>
                        <a href="https://www.linkedin.com/in/guilherme-felipe-da-silva-souza/" target="_blank">
                            <span className={styles.linkedinIcon}></span>
                        </a>

                        <a href="https://github.com/GuiFelSS" target="_blank">
                            <span className={styles.GithubIcon}></span>
                        </a>
                    </div>
                </nav>

            </header>

            <section className={styles.contentArea}>
                <h1>Meu Portifólio</h1>

                <p>
                    <strong>Bem-vindo(a) ao meu canto na internet!</strong> Este portfólio é onde eu apresento meus trabalhos feitos 
                    dentro e fora do ambiente acadêmico e tudo o que venho aprendendo na minha jornada em <strong>Análise e Desenvolvimento de Sistemas</strong>.
                </p>

                <p>
                    A criação deste projeto foi uma jornada de pesquisa, inspiração e, claro, muito código para tirá-lo do papel. 
                    Utilizando <strong>Next.js</strong>, busquei criar um espaço que demonstrasse <strong>minhas habilidades</strong> e a evolução do 
                    meu trabalho. Apesar de não ser um especialista em design, foquei em criar uma boa experiência de usuário, 
                    para que o destaque fosse o que realmente importa: <strong>as soluções e os projetos desenvolvidos</strong>.
                </p>

                <p>
                    Cada projeto aqui representa um degrau no meu <strong>crescimento</strong> e a materialização da minha paixão por tecnologia.
                    <strong> Meu grande objetivo é encontrar um lugar onde eu possa continuar aprendendo, contribuindo e ajudando a construir 
                    coisas incríveis.</strong> E, secretamente, espero que você que está lendo isto agora seja a ponte para essa oportunidade
                    (por favor, nunca te pedi nada 🙏 kkkk).
                </p>

                <p>
                    Explore meus trabalhos e veja o que um desenvolvedor <strong>dedicado</strong> (e com um <strong>bom senso de humor</strong>, pelo menos é o que dizem, 
                    espero que ninguém nunca tenha mentido para mim kkkk) pode fazer. Se a sua equipe precisa de alguém assim, 
                    <strong>vamos conversar!</strong> desde já agradeço pela atenção.
                </p>

            </section>
        </main>
    );
}