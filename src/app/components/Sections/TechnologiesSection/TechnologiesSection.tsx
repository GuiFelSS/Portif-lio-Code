import Image from 'next/image';
import styles from './technologiesSection.module.css';

// 1. Defina seus logos em um array de objetos. Fácil de adicionar ou remover!
const logos = [
  { src: '/icons_logos/css3-original.svg', alt: 'CSS3', className: 'cssTechnology', url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS' },
  { src: '/icons_logos/github-original.svg', alt: 'GitHub', className: 'githubTechnology', url: 'https://docs.github.com/pt/get-started/start-your-journey/about-github-and-git' },
  { src: '/icons_logos/html5-original.svg', alt: 'HTML5', className: 'htmlTechnology', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML' },
  { src: '/icons_logos/java-original.svg', alt: 'Java', className: 'javaTechnology', url: 'https://www.java.com/pt-BR/' },
  { src: '/icons_logos/javascript-original.svg', alt: 'JavaScript', className: 'javascriptTechnology', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
  { src: '/icons_logos/nextjs-wordmark.svg', alt: 'Next.js', className: 'nextjsTechnology', url: 'https://nextjs.org/' },
  { src: '/icons_logos/python-original.svg', alt: 'Python', className: 'pythonTechnology', url: 'https://www.python.org/' },
  { src: '/icons_logos/react-original.svg', alt: 'React', className: 'reactTechnology', url: 'https://react.dev/' },
  { src: '/icons_logos/spring-original.svg', alt: 'Spring Boot', className: 'springTechnology', url: 'https://spring.io/why-spring' },
  { src: '/icons_logos/sqldeveloper-original.svg', alt: 'SQL Developer', className: 'sqldeveloperTechnology', url: 'https://www.oracle.com/br/database/sqldeveloper/' },
  { src: '/icons_logos/csharp-original.svg', alt: 'C#', className: 'csharpTechnology', url: 'https://dotnet.microsoft.com/pt-br/languages/csharp' },
  { src: '/icons_logos/docker-plain-wordmark.svg', alt: 'Docker', className: 'dockerTechnology', url: 'https://www.ibm.com/br-pt/think/topics/docker' },
  { src: '/icons_logos/linux-original.svg', alt: 'Linux', className: 'linuxTechnology', url: 'https://www.oracle.com/br/linux/what-is-linux/' },
  { src: '/icons_logos/dot-net-framework.svg', alt: '.NET', className: 'dotnetTechnology', url: 'https://dotnet.microsoft.com/pt-br/learn/dotnet/what-is-dotnet' },
];

export default function TechnologiesSection() {
  // Criando as CSS custom properties para cada tecnologia
  const cssVariables = logos.reduce<Record<string, string>>((acc, logo) => {
    acc[`--${logo.className}-image`] = `url('${logo.src}')`;
    return acc;
  }, {});
  return (
    <section id="technologies" className={styles.technologiesSection} style={cssVariables}>
      <h2>TECNOLOGIAS</h2>
      
      {/* O container que vai "mascarar" o overflow */}
      <div className={styles.sliderContainer}>
        {/* O track que vai conter os logos e ser animado */}
        <div className={styles.sliderTrack}>
          
          {/* Renderiza a lista de logos a primeira vez */}
          {logos.map((logo, index) => (
            <div className={styles.logo} key={`logo1-${index}`} style={{ position: 'relative' }}>
              <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: 'contain' }} />
            </div>
          ))}

          {/* Renderiza a mesma lista de logos uma segunda vez para o efeito infinito */}
          {logos.map((logo, index) => (
            <div className={styles.logo} key={`logo2-${index}`} style={{ position: 'relative' }}>
              <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: 'contain' }} />
            </div>
          ))}

        </div>

      </div>

      <div className= {styles.tecnologiesButtons}>

          {logos.map((logo, index) => (
            <a key={index} href={logo.url} target="_blank" title={logo.alt}>
              <span className={styles[logo.className]}></span>
            </a>
          ))}

      </div>

    </section>
  );
}