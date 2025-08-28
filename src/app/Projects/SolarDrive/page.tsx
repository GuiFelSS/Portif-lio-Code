// PÁGINA Projects - Rota: /Projects
import styles from './page.module.css'; // Corrigi o caminho do CSS

export default function ProjectsPage() {
    return (
        <main className="main">
            <header className={styles.headerProjects}>

                <div className={styles.profileImageContainer}>
                    <img
                        src="/foto_perfil_teste.jpg"
                        alt="Foto de perfil - Guilherme Felipe"
                        className={styles.profileImage}
                    />
                    <h2>GUIFELSS</h2>

                </div>

                <nav className={styles.navProjects}>
                    <ul>
                        <li><a href="/">Home</a></li>
                    </ul>

                    <ul>
                        <li><a href="https://global-solution-2-oau6.vercel.app/" target='_blank'>Ver Projeto</a></li>
                    </ul>

                    <ul>
                        <li><a href="https://github.com/GuiFelSS/Solar-Drive" target='_blank'>GitHub</a></li>
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
                <h1>Solar Drive</h1>

                <iframe
                    src="https://www.youtube.com/embed/SFDQ3bVrzS0"
                    title="Solar Drive- Demonstração do Projeto"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.projectVideo}
                ></iframe>

                <p>
                    Desenvolvido juntamente com o <a href="https://www.linkedin.com/in/juanpabloruiz12/" target="_blank">
                    <strong>Juan Pablo</strong></a> e a <a href="https://www.linkedin.com/in/natasha-lopes-125029249/" target="_blank">
                    <strong>Natasha Lopes</strong></a> para a <strong>Global Solution do segundo semestre de 2024 da FIAP</strong>,
                    o projeto <strong>Solar Drive</strong> nasceu do desafio "Energia para um Futuro Sustentável".
                    Este evento, realizado em parceria com empresas líderes em seus setores como <strong>SAP, FIA (Fórmula E),
                    Mahindra Racing, Ultragaz e Ultracargo</strong>, nos inspirou a criar uma solução inovadora para um dos maiores
                    desafios da mobilidade elétrica: a autonomia e a sustentabilidade no carregamento de veículos.
                </p>

                <h4>A Solução Proposta</h4>

                <p>
                    O Solar Drive consiste em um sistema de <strong>placas solares removíveis e adaptáveis</strong>,
                    projetadas para serem facilmente instaladas na superfície de qualquer veículo elétrico. Através da
                    conversão de energia solar em energia elétrica, o sistema alimenta o carro de forma inteligente e ecológica.
                </p>

                <p>
                    O principal objetivo é otimizar o consumo de energia do veículo.
                    Em vez de depender exclusivamente da carga da bateria principal, o carro utiliza a energia gerada
                    em tempo real pelo painel solar para alimentar sistemas secundários ou até mesmo para locomoção,
                    o que resulta em uma economia direta da bateria. Em situações ideais, o sistema pode gerar autonomia extra,
                    permitindo que o veículo percorra alguns metros ou quilômetros adicionais de forma totalmente limpa.
                </p>

                <p>
                    Essa abordagem não apenas aumenta a eficiência energética dos carros elétricos,
                    mas também promove a sustentabilidade e aproveitamento de uma fonte de energia limpa e abundante.
                    O Solar Drive é a nossa contribuição para um futuro onde a tecnologia e o meio ambiente avançam juntos.
                </p>

                <p><strong><em>*Mais informações tecnicas no GitHub do projeto*</em></strong></p>
            </section>
        </main>
    );
}