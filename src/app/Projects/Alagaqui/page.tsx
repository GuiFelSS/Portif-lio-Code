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
                        <li><a href="https://github.com/GuiFelSS/Alagaqui" target="_blank" rel="noopener noreferrer">Ver Projeto</a></li>
                        <li><a href="https://github.com/GuiFelSS/Alagaqui" target="_blank" rel="noopener noreferrer">GitHub</a></li>
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
                        <li><a href="https://github.com/GuiFelSS/Alagaqui" target="_blank">Ver Projeto</a></li>
                    </ul>

                    <ul>
                        <li><a href="https://github.com/GuiFelSS/Alagaqui" target="_blank">GitHub</a></li>
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
                <h1>Alagaqui</h1>

                <iframe
                    src="https://www.youtube.com/embed/GR-xSpwOhPg"
                    title="Alagaqui - Demonstração do Projeto"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.projectVideo}
                ></iframe>

                <p>
                    O <strong>Alagaqui</strong> é um projeto inovador desenvolvido por mim juntamente com <a href="https://www.linkedin.com/in/alexsandro-macedo-jesus/" target="_blank"><strong><u>Alexsandro Macedo</u></strong></a> e <a href="https://www.linkedin.com/in/lfsalazaar/" target="_blank"><strong><u>Leonardo Salazar</u></strong></a> para a Global Solution do primeiro semestre de 2025, com o objetivo de enfrentar um dos maiores desafios urbanos de São Paulo: as enchentes. A solução consiste em uma plataforma completa que monitora pontos de alagamento em tempo real, alertando cidadãos e ajudando na prevenção de danos.
                </p>

                <h4>Como Funciona?</h4>
                <p>
                    Nossa plataforma opera com um sistema duplo de coleta de dados para garantir máxima precisão e agilidade:
                </p>
                <ul>
                    <li>
                        <strong>Mapeamento Colaborativo:</strong> Através de um aplicativo intuitivo, os próprios usuários podem reportar e marcar em um mapa, em tempo real, os locais que estão alagados. Essa funcionalidade cria uma rede de informação comunitária, permitindo que as pessoas evitem rotas afetadas e se mantenham seguras.
                    </li>
                    <li>
                        <strong>Sistema IoT Integrado:</strong> Para automatizar o monitoramento, desenvolvemos um sistema IoT composto por sensores ultrassônicos e de boia (float switch) acoplados a uma placa <code>ESP32</code>. Esses dispositivos são estrategicamente instalados em bueiros e bocas de lobo e, ao detectarem a elevação do nível da água, enviam um alerta automático para a nossa central, marcando o ponto de alagamento no mapa sem a necessidade de intervenção humana.
                    </li>
                </ul>
                <p>
                    Além do monitoramento em tempo real, o Alagaqui gera um histórico de ocorrências e um mapa de calor, que permite a visualização das áreas com maior incidência de alagamentos na cidade, tornando-se uma ferramenta valiosa para o planejamento urbano e para os cidadãos.
                </p>

                <h4>Tecnologias Utilizadas</h4>
                <p>
                    Para a construção deste projeto robusto e multidisciplinar, utilizamos um conjunto de tecnologias de ponta:
                </p>
                <ul>
                    <li><strong>Aplicativo Mobile:</strong> Desenvolvido em <code>React Native</code>, garantindo uma experiência de usuário fluida e compatível com múltiplas plataformas.</li>
                    <li><strong>Backend:</strong> A estrutura do servidor foi construída em <code>Java</code> com <code>Spring Boot</code>, oferecendo uma base sólida, escalável e de alta performance.</li>
                    <li><strong>Banco de Dados:</strong> Utilizamos um banco de dados <code>Oracle</code>, com gerenciamento via <code>SQLDeveloper</code>, para armazenar e consultar os dados de forma segura e eficiente.</li>
                    <li><strong>Hardware (IoT):</strong> O sistema de sensores foi implementado com a placa <code>ESP32</code>, programada para realizar a leitura dos sensores e a comunicação com o nosso backend.</li>
                    <li><strong>Ambiente e Testes:</strong> O projeto também incluiu o uso de <code>Java</code> e <code>C#</code> em <code>.NET</code> (com Visual Studio) e a criação de um <code>Dockerfile</code> para facilitar a configuração de ambientes de teste e garantir a integridade da aplicação.</li>
                </ul>

                <p>
                    O Alagaqui é uma demonstração de como a integração entre software, hardware e a colaboração da comunidade pode gerar soluções de grande impacto para a sociedade.
                </p>

                <p><strong><em>*Mais informações tecnicas no GitHub do projeto*</em></strong></p>
                <p><strong><em>*click no nome dos pareceiros envolvidos para ir para seus perfis no Linkedin*</em></strong></p>
            </section>
        </main>
    );
}