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
                        <li><a href="#" target='_blank'>GitHub</a></li>
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