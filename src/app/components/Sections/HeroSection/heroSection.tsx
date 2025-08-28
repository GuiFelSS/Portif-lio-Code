// src/components/sections/HeroSection.tsx

"use client";
import { TypeAnimation } from 'react-type-animation'; 
import styles from './heroSection.module.css';
import ParticlesBackground from './ParticlesBackground/ParticlesBackground';

export default function HeroSection() {
    return (
        <section id="hero" className={styles.hero}>
            {/* Background de Partículas */}
            <ParticlesBackground />

            <div className={styles.heroHeader}>
                <h1>GUIFELSS</h1>
            </div>
            
            {/* Container do Conteúdo */}
            <div className={styles.heroContent}>
                {/* Container da Imagem - Lado Esquerdo */}
                <div className={styles.imageContainer}>
                    <img
                        src="/foto_perfil_teste.jpg"
                        alt="Foto de perfil - Guilherme Felipe"
                        className={styles.profileImage}
                    />
                </div>

                {/* Container do Texto - Lado Direito */}
                <div className={styles.textContent}>
                    <h1 className={styles.title}>
                        Oi, me chamo <br /> <span className={styles.destaque}>Guilherme Felipe</span>
                    </h1>

                    <h2 className={styles.subtitle}>
                        Eu sou um Desenvolvedor{' '}
                        <TypeAnimation
                            sequence={[
                                'Front-End',
                                2000,
                                'Back-End',
                                2000,
                                'Full-stack, pronto KKKK',
                                0.2,
                            ]}
                            wrapper="span"
                            speed={8}
                            repeat={Infinity}
                            // Usando a sua classe de CSS já existente para o destaque!
                            className={styles.destaque} 
                        />
                    </h2>

                    <p className={styles.description}>
                        Transformando ideias em realidade através de código, com foco em criar soluções web modernas e eficientes.
                    </p>

                    <div className={styles.socialLinks}>
                        <a href="https://www.linkedin.com/in/guilherme-felipe-da-silva-souza/" target="_blank">
                            <span className={styles.linkedinIcon}></span>
                        </a>

                        <a href="https://github.com/GuiFelSS" target="_blank">
                            <span className={styles.GithubIcon}></span>
                        </a>

                        <a href="/About" rel="noopener noreferrer"
                            className={styles.CvButton}>
                                Sobre
                        </a>

                        <a href="/Guilherme_Felipe_da_Silva_Souza_CV.pdf" target="_blank" rel="noopener noreferrer"
                            className={styles.CvButton}>
                                Meu CV
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
}