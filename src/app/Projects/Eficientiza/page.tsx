import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsPage() {
    return (
        <main className="main">
            <header className={styles.headerProjects}>

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
                        <li><a href="/project_imgs/Eficientiza/Challenge Mottu.pdf" target='_blank'>Ver Projeto</a></li>
                    </ul>

                    <ul>
                        <li><a href="https://github.com/GuiFelSS/Eficientiza" target="_blank">GitHub</a></li>
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
                <h1>Eficientiza</h1>

                <iframe
                    src="https://www.youtube.com/embed/JxCGub7fEj0"
                    title="Eficientiza - Demonstração do Projeto"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.projectVideo}
                ></iframe>

                <p>
                    Atualmente, estou imerso, junto com minha equipe composta pelo <a href="https://www.linkedin.com/in/alexsandro-macedo-jesus/" target="_blank"><strong>Alexsandro Macedo</strong></a> e <a href="https://www.linkedin.com/in/lfsalazaar/" target="_blank"><strong>Leonardo Salazar</strong></a>, no <strong>Challenge 2025 da FIAP</strong>,
                    um projeto desenvolvido em parceria com a <strong>Mottu</strong>.
                    A Mottu é uma startup de mobilidade que oferece soluções de aluguel de motos,
                    atendendo principalmente a entregadores no Brasil e no México.
                    A empresa se destaca por seu forte impacto social, criando oportunidades e gerando renda
                    para milhares de trabalhadores.
                </p>

                <h4>O Desafio: Mapeamento Inteligente do Pátio e Gestão das Motos</h4>

                <p>
                    Para suportar sua impressionante expansão, a Mottu nos apresentou o desafio de otimizar a gestão
                    de sua frota nos pátios de suas mais de 100 filiais. Diante do grande volume de veículos,
                    o processo de localização manual representa uma oportunidade para automação, visando mais agilidade
                    e eficiência nas operações.
                </p>
                <p>
                    O objetivo principal do desafio é desenvolver uma solução tecnológica inovadora e escalável para mapear e monitorar
                    as motos de forma automatizada. A solução deve fornecer uma visão precisa e em tempo real
                    da localização de cada veículo, através de uma interface visual intuitiva para os operadores.
                </p>

                <h4>Nosso Trabalho e Tecnologias Envolvidas</h4>

                <p>
                    Minha equipe e eu estamos trabalhando ativamente no desenvolvimento de uma solução completa para atender a essa demanda.
                    Por ser uma competição em andamento, os detalhes de nossa implementação são confidenciais, mas nosso trabalho
                    envolve a exploração e aplicação de tecnologias de ponta, como:
                </p>
                <ul>
                    <li><strong>Visão Computacional</strong> para identificação de modelos e localização das motos por imagem.</li>
                    <li><strong>Mapeamento Digital</strong> para criar uma representação visual e interativa dos pátios.</li>
                    <li><strong>Integração com Sensores IoT</strong> já presentes nas motos para obter dados em tempo real.</li>
                    <li><strong>Desenvolvimento de uma Interface Web/App</strong> para facilitar a gestão pelos operadores da Mottu.</li>
                </ul>

                <p>
                    Este projeto é uma oportunidade incrível de trabalhar em um desafio real, de grande escala,
                    e de propor uma solução com impacto direto na eficiência e no crescimento de uma empresa inovadora como a Mottu.
                </p>

                <p><strong><em>*Mais informações tecnicas no GitHub do projeto*</em></strong></p>
            </section>
        </main>
    );
}