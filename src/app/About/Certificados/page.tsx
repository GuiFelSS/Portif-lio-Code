// PÁGINA CERTIFICADOS - Rota: /About/Certificados
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface Certificados {
    id: number;
    title: string;
    image: string;
    link?: string;
} 

const certificados: Certificados[] = [
    {
        id: 1,
        title: 'Qualificação Profissional em Análise de Sistemas e Prototipação Web',
        image: '/certificados/IMAGENs/Fiap-certificado-1.png', // Imagem do certificado
        link: '/certificados/PDFs/FIAP-certificado-1.pdf'   // PDF para download
    },

    {
        id: 2,
        title: 'Certificação Profissional em Desenvolvimento Web 2.0',
        image: '/certificados/IMAGENs/Fiap-certificado-2.png',
        link: '/certificados/PDFs/FIAP-certificado-2.pdf'
    },
    {
        id: 3,
        title: 'Certificação Profissional em Desenvolvimento de Aplicações Mobile',
        image: '/certificados/IMAGENs/Fiap-certificado-3.png',
        link: '/certificados/PDFs/FIAP-certificado-3.pdf'
    },
    {
        id: 4,
        title: 'Certificação Nano course - Front-End Developer',
        image: '/certificados/IMAGENs/Fiap-certificado-4.png',
        link: '/certificados/PDFs/FIAP-certificado-4.pdf'
    },
    {
        id: 5,
        title: 'JavaScript: manipulando elementos no DOM',
        image: '/certificados/IMAGENs/Alura-certificado-1.png',
        link: '/certificados/PDFs/Alura-certificado-1.pdf'
    },
    {
        id: 6,
        title: 'Python: crie a sua primeira aplicação',
        image: '/certificados/IMAGENs/Alura-certificado-2.png',
        link: '/certificados/PDFs/Alura-certificado-2.pdf'
    },
    {
        id: 7,
        title: 'Java: criando a sua primeira aplicação',
        image: '/certificados/IMAGENs/Alura-certificado-3.png',
        link: '/certificados/PDFs/Alura-certificado-3.pdf'
    },
    {
        id: 8,
        title: 'JavaScript para Web: Crie páginas dinâmicas',
        image: '/certificados/IMAGENs/Alura-certificado-4.png',
        link: '/certificados/PDFs/Alura-certificado-4.pdf'
    },
    {
        id: 9,
        title: 'JavaScript: consumindo e tratando dados de uma API',
        image: '/certificados/IMAGENs/Alura-certificado-5.png',
        link: '/certificados/PDFs/Alura-certificado-5.pdf'
    },
    {
        id: 10,
        title: 'JavaScript: explorando a manipulação de elementos e da localStorage',
        image: '/certificados/IMAGENs/Alura-certificado-6.png',
        link: '/certificados/PDFs/Alura-certificado-6.pdf'
    },
]

export default function CertificadosPage() {
    return (
        <main className={styles.mainCertificados}>
            <header className={styles.headerCertificados}>
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

                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                    </ul>

                    <ul>
                        <li><a href="/About">Sobre</a></li>
                    </ul>

                    <ul>
                        <li>
                            <a href="/Guilherme_Felipe_da_Silva_Souza_CV.pdf" target="_blank" rel="noopener noreferrer">
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
                <div className={styles.certificadosContainer}>
                    <h1>Meus Certificados</h1>

                    <div className={styles.certificadosGrid}>
                        {certificados.map((certificado) => (
                            <div key={certificado.id} className={styles.certificadoCard}>
                                <div className={styles.certificadoImageContainer}>
                                    <a 
                                        href={certificado.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <Image 
                                            src={certificado.image} 
                                            alt={certificado.title}
                                            width={300}
                                            height={200}
                                            className={styles.certificadoImage}
                                        />
                                    </a>
                                </div>
                                <h3 className={styles.certificadoTitle}>{certificado.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
