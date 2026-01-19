"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';

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
                        {/* <li><a href="https://github.com/GuiFelSS/Alagaqui" target="_blank" rel="noopener noreferrer">Ver Projeto</a></li> */}
                        <li><a href="https://github.com/GuiFelSS/Troca_Comigo_Global_2_2025" target="_blank" rel="noopener noreferrer">GitHub</a></li>
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

                    {/* <ul>
                        <li><a href="//" target="_blank">Ver Projeto</a></li>
                    </ul> */}

                    <ul>
                        <li><a href="https://github.com/GuiFelSS/Troca_Comigo_Global_2_2025" target="_blank">GitHub</a></li>
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
                <h1>Troca Comigo</h1>

                <iframe
                    src="https://www.youtube.com/embed/Ly5RV3n5fZg"
                    title="Pitch Global Solution 2025 - Troca Comigo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.projectVideo}
                ></iframe>

                <p>
                    O <strong>Troca Comigo</strong> é um projeto inovador desenvolvido por mim juntamente com <a href="https://www.linkedin.com/in/vinicius-leopoldino-9a2194120/" target="_blank"><strong><u>Vinicius Leopoldino</u></strong></a> e <a href="https://www.linkedin.com/in/pablo-lopes-09a66a275/" target="_blank"><strong><u>Pablo Lopes</u></strong></a> para a Global Solution do segundo semestre de 2025, com o objetivo de enfrentar os desafios da democratização do ensino. A solução consiste em uma plataforma de economia colaborativa que conecta mentores e aprendizes, transformando conhecimento em moeda de troca.
                </p>

                <h4>Como Funciona?</h4>
                <p>
                    Nossa plataforma opera unindo interação humana, segurança e inteligência artificial para potencializar o aprendizado:
                </p>
                <ul>
                    <li>
                        <strong>Conexão de Saberes:</strong> O sistema permite que qualquer pessoa ofereça uma habilidade em troca de aprender outra, criando um ciclo sustentável de educação. Usuários podem agendar mentorias, trocar experiências e avaliar as interações.
                    </li>
                    <li>
                        <strong>IA Generativa Integrada:</strong> Para facilitar o <em>onboarding</em>, integramos a API do <strong>DeepSeek</strong>. A IA analisa os dados brutos inseridos pelo usuário e sugere descrições de perfil otimizadas, ajudando a destacar melhor as competências na plataforma.
                    </li>
                </ul>

                <h4>Tecnologias Utilizadas</h4>
                <p>
                    Para garantir escalabilidade, segurança e qualidade de código, adotamos uma arquitetura robusta:
                </p>
                <ul>
                    <li><strong>Backend Robusto:</strong> Desenvolvido em <code>Java</code> com <code>Spring Boot</code>. A segurança é garantida via <strong>Spring Security</strong> com autenticação baseada em tokens <code>JWT</code>.</li>
                    <li><strong>Arquitetura Assíncrona:</strong> Implementamos o <code>RabbitMQ</code> para mensageria, permitindo o desacoplamento de serviços e processamento eficiente de tarefas em segundo plano.</li>
                    <li><strong>Mobile:</strong> O front-end foi desenvolvido em <code>React Native</code> utilizando <code>Expo</code>, focando em uma interface limpa e responsiva.</li>
                    <li><strong>Cloud & DevOps:</strong> Esteira completa de CI/CD no <code>Azure</code>, com deploy automatizado para garantir entrega contínua.</li>
                    <li><strong>Qualidade & Dados:</strong> Testes automatizados via <code>JUnit</code>, validação de endpoints com <code>Postman</code> e persistência de dados segura em banco <code>Oracle</code>.</li>
                </ul>

                <p>
                    O Troca Comigo demonstra como a tecnologia pode ser usada para quebrar barreiras educacionais, unindo engenharia de software avançada com um forte propósito social.
                </p>

                <p><strong><em>*Mais informações técnicas no GitHub do projeto*</em></strong></p>
                <p><strong><em>*click no nome dos pareceiros envolvidos para ir para seus perfis no Linkedin*</em></strong></p>
            </section>
        </main>
    );
}