// src/components/sections/HeroSection.tsx

"use client";
import { TypeAnimation } from 'react-type-animation'; 
import Image from 'next/image';
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
                    <Image
                        src="/foto_perfil_teste.jpg"
                        alt="Foto de perfil - Guilherme Felipe"
                        width={150}
                        height={150}
                        className={styles.profileImage}
                    />
                </div>

                {/* Container do Texto - Lado Direito */}
                <div className={styles.textContent}>
                    <h1 className={styles.title}>
                        Oi, me chamo <br /> <span className={styles.destaque}>Guilherme Felipe</span>
                    </h1>

                    <h2 className={styles.subtitle}>
                        E sou um Desenvolvedor{' '}
                        <TypeAnimation
                            sequence={[
                                'Front-End',
                                2000,
                                'Back-End',
                                2000,
                                'Full-stack',
                                2000,
                            ]}
                            wrapper="span"
                            speed={8}
                            repeat={Infinity}
                            className={styles.destaque} 
                        />
                    </h2>

                    <p className={styles.description}>
                        Acredito que a melhor tecnologia é aquela que serve às pessoas. Por isso, dedico-me a construir aplicações intuitivas e acessíveis, buscando sempre gerar um impacto positivo e real na vida de quem as utiliza.
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