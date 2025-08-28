
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="main">
            <header className={styles.headerAbout}>

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

                <nav className={styles.navAbout}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                    </ul>

                    <ul>
                        <li><a href="/About/Certificados">Certificados</a></li>
                    </ul>

                    <ul>
                        <li>
                            <a href="/Guilherme_Felipe_da_Silva_Souza_CV_Portifolio.pdf" target="_blank" rel="noopener noreferrer">
                                Meu CV
                            </a>
                        </li>

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
                <h1>SOBRE MIM</h1>

                <p>Olá, meu nome é Guilherme Felipe.<br />
                    Formado como aspirante oficial da reserva no Exército. Atualmente, estou cursando o segundo ano de Análise e Desenvolvimento de Sistemas na Faculdade de Informática e Administração Paulista - FIAP.</p>

                <p>Tenho uma paixão por tecnologia e inovação, sempre buscando aprender e aplicar novos conhecimentos em projetos práticos.
                    Minha formação militar me proporcionou a oportunidade de aplicar e aprimorar habilidades como trabalho em equipe, disciplina e proatividade - competências que levo comigo em meus estudos, projetos e experiências profissionais.</p>

                <p>Valorizo um ambiente de trabalho leve e descontraído, sem abrir mão da seriedade e do comprometimento. Acredito que esse equilíbrio estimula a criatividade, a colaboração e o apoio mútuo - elementos fundamentais para o sucesso de qualquer equipe e projeto.</p>

                <p>Meu objetivo é desenvolver soluções tecnológicas acessíveis a todos, com foco em impacto social positivo. Valorizo a empatia e a importância de pensar no próximo, buscando criar soluções úteis, humanas e significativas.</p>

                <p>Nessa jornada, me dedico ao máximo aos projetos, às equipes e às empresas das quais faço parte, sempre com foco em entregar produtos escaláveis, eficientes e de alta qualidade.</p>

                <p>Faço tudo isso com o propósito de contribuir com a sociedade e, especialmente, de realizar meus sonhos. Um dos mais importantes deles é comprar uma casa para a minha família, que sempre esteve ao meu lado.</p>

                <p>No meu portfólio, você encontrará uma variedade de projetos pessoais e acadêmicos, que demonstram minha evolução, minha criatividade e minha capacidade de resolver problemas de forma prática e eficiente.</p>

                <p>Estou sempre aberto a novas oportunidades de aprendizado, inovação e colaboração. Sinta-se à vontade para explorar meu portfólio e conectar-se comigo.</p>

            </section>
        </main>
    );
}