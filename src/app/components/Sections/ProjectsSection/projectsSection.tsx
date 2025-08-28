

'use client';

import Image from 'next/image';

import { useState, useEffect } from 'react';
import styles from './projectSection.module.css';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink: string;
  VerMais: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Alagaqui",
    description: "Um sistema inteligente que une a colaboração dos cidadãos e a tecnologia IoT para mapear alagamentos em São Paulo em tempo real. Descubra como transformamos dados em segurança urbana.",
    image: "/project_imgs/Alagaqui/Alagaqui-logo.jpg", // Placeholder - você pode substituir pela imagem real
    technologies: ["React Native", "Java", "SQL", "JavaScript", "Spring Boot", "GitHub", "Docker", "Linux", "C#", ".NET"],
    liveLink: "https://github.com/GuiFelSS/Alagaqui",
    githubLink: "https://github.com/GuiFelSS/Alagaqui",
    VerMais: "/Projects/Alagaqui"
  },
  {
    id: 2,
    title: "Solar Drive",
    description: "Um sistema de painéis solares adaptáveis que gera energia limpa para o carro enquanto ele se move. Descubra como o Solar Drive alimenta os sistemas secundários do veículo e promove uma economia inteligente da bateria principal, revolucionando a eficiência energética no asfalto.",
    image: "/project_imgs/SolarDrive/solar_drive.png", // Placeholder - você pode substituir pela imagem real
    technologies: ["Java", "SQL", "Next.js", "Python", "GitHub"],
    liveLink: "https://global-solution-2-oau6.vercel.app/",
    githubLink: "https://github.com/GuiFelSS/Solar-Drive",
    VerMais: "/Projects/SolarDrive"
  },
  {
    id: 3,
    title: "Eficientiza",
    description: "Um projeto em andamento em parceria com a Mottu para resolver um desafio de escala. Desenvolvendo uma solução com Visão Computacional e IoT para o mapeamento em tempo real de milhares de motos para uma das startups que mais crescem na América Latina.",
    image: "/project_imgs/Eficientiza/eficientiza-logo.png", // Placeholder - você pode substituir pela imagem real
    technologies: ["React Native", "Java", "SQL", "JavaScript", "Spring Boot", "GitHub", "Docker", "Linux", "C#", ".NET"],
    githubLink: "https://github.com/GuiFelSS/Eficientiza",
    VerMais: "/Projects/Eficientiza"
  },
  {
    id: 4,
    title: "Meu Portfólio",
    description: "Este é meu portifólio, desenvolvido com Next.js, apresentando alguns dos meus projetos desenvolvidos sozinho e em grupo durante minha jornada de aprendizado em busca por oportunidades na área de desenvolvimento (por favor me de essa oportunidade 🙏 kkkk) fique à vontade para explorar e conhecer mais sobre meu trabalho e habilidades, espero que goste e desde já agradeço pela atenção.",
    image: "/project_imgs/p_portifolio/Portifolio.jpeg", // Placeholder - você pode substituir pela imagem real
    technologies: ["Next.js", "GitHub"],
    githubLink: "https://github.com/username/project4",
    VerMais: "/Projects/pro_portifolio"
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: number]: boolean }>({});
  const [expandedTechnologies, setExpandedTechnologies] = useState<{ [key: number]: boolean }>({});
  const [animatedProjects, setAnimatedProjects] = useState<Set<number>>(new Set());
  
  // Hook para animação da seção principal
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  // 4 projetos por página (2x2)
  const projectsPerPage = 4;
  const totalSlides = Math.ceil(projects.length / projectsPerPage);

  // Tamanho máximo da descrição antes de truncar
  const MAX_DESCRIPTION_LENGTH = 100;
  // Número máximo de tecnologias a mostrar inicialmente
  const MAX_TECHNOLOGIES_DISPLAYED = 3;

  // Função para obter projetos por slide
  const getProjectsForSlide = (slideIndex: number) => {
    const startIndex = slideIndex * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return projects.slice(startIndex, endIndex);
  };

  // Animar projetos quando a seção ficar visível ou esconder quando sair
  useEffect(() => {
    if (sectionVisible) {
      const currentProjects = getProjectsForSlide(currentIndex);
      const timer = setTimeout(() => {
        setAnimatedProjects(prev => {
          const newSet = new Set(prev);
          currentProjects.forEach(project => newSet.add(project.id));
          return newSet;
        });
      }, 300);

      return () => clearTimeout(timer);
    } else {
      // Remove todos os projetos animados quando a seção sai de vista
      setAnimatedProjects(new Set());
    }
  }, [sectionVisible, currentIndex]);

  // Animar novos projetos quando trocar de slide
  useEffect(() => {
    if (sectionVisible) {
      const currentProjects = getProjectsForSlide(currentIndex);
      // Anima todos os projetos juntos
      setAnimatedProjects(prev => {
        const newSet = new Set(prev);
        currentProjects.forEach(project => newSet.add(project.id));
        return newSet;
      });
    } else {
      // Remove animações quando não está visível
      setAnimatedProjects(new Set());
    }
  }, [currentIndex, sectionVisible]);

  const getTechClass = (tech: string) => {
    const normalizedTech = tech.toLowerCase().replace(/[.\s-]/g, '');
    const techClassMap: { [key: string]: string } = {
      'react': 'techReact',
      'nextjs': 'techNextjs',
      'javascript': 'techJavaScript',
      'springboot': 'techSpringBoot',
      'java': 'techJava',
      'python': 'techPython',
      'html': 'techHTML',
      'css': 'techCSS',
      'github': 'techGitHub',
      'reactnative': 'techReactNative',
      'sql': 'techOracleSQL',
      'docker': 'techDocker',
      'linux': 'techLinux',
      'c#': 'techCSharp',
      'net': 'techDotNet',
    };

    return techClassMap[normalizedTech] || '';
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Função para truncar a descrição
  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength).trim() + '... ';
  };

  // Função para alternar expansão da descrição
  const toggleDescription = (projectId: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  // Função para alternar expansão das tecnologias
  const toggleTechnologies = (projectId: number) => {
    setExpandedTechnologies(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <section 
      id="projects" 
      className={`${styles.projectsSection} ${sectionVisible ? styles.animate : ''}`}
      ref={sectionRef}
    >
      <h2>PROJETOS</h2>

      <div className={styles.sliderContainer}>
        <div
          className={styles.sliderWrapper}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className={styles.projectCard}>
              {getProjectsForSlide(slideIndex).map((project) => (
                <div 
                  key={project.id} 
                  className={`${styles.projectItem} ${animatedProjects.has(project.id) ? styles.animate : ''} ${project.id >= 999 ? styles.placeholderProject : ''}`}
                >
                  <div className={styles.projectImage}>
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={400} 
                      height={150} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <div className={styles.projectDescription}>
                      <p>
                        {expandedDescriptions[project.id] || project.description.length <= MAX_DESCRIPTION_LENGTH
                          ? project.description
                          : (
                            <>
                              {truncateDescription(project.description, MAX_DESCRIPTION_LENGTH)}
                              <button
                                className={styles.toggleButton}
                                onClick={() => toggleDescription(project.id)}
                              >
                                {'mais'}
                              </button>
                            </>
                          )
                        }
                        {expandedDescriptions[project.id] && project.description.length > MAX_DESCRIPTION_LENGTH && (
                          <button
                            className={styles.toggleButton}
                            onClick={() => toggleDescription(project.id)}
                          >
                            {'menos'}
                          </button>
                        )}
                      </p>
                    </div>

                    <div className={styles.projectTechnologies}>
                      {(expandedTechnologies[project.id] 
                        ? project.technologies 
                        : project.technologies.slice(0, MAX_TECHNOLOGIES_DISPLAYED)
                      ).map((tech, index) => (
                        <span
                          key={index}
                          className={`${styles.techTag} ${styles[getTechClass(tech)]}`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > MAX_TECHNOLOGIES_DISPLAYED && (
                        <button
                          className={styles.toggleButton}
                          onClick={() => toggleTechnologies(project.id)}
                        >
                          {expandedTechnologies[project.id] 
                            ? `menos (${project.technologies.length - MAX_TECHNOLOGIES_DISPLAYED} ocultas)`
                            : `+${project.technologies.length - MAX_TECHNOLOGIES_DISPLAYED} mais`
                          }
                        </button>
                      )}
                    </div>
                      
                    <div className={styles.projectLinks}>
                      {project.VerMais && (
                        <a
                          href={project.VerMais}
                          className={styles.projectLink}
                        >
                          Ver mais
                        </a>
                      )}
                      {project.id < 999 ? (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          GitHub
                        </a>
                      ) : (
                        <span className={styles.projectLink} style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                          Em desenvolvimento
                        </span>
                      )}
                      {project.liveLink && project.id < 999 && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          Ver Projeto
                        </a>
                      )}
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {totalSlides > 1 && (
        <>
          <div className={styles.navigationButtons}>
            <button
              className={styles.navButton}
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              &#8249;
            </button>
            <button
              className={styles.navButton}
              onClick={nextSlide}
              disabled={currentIndex === totalSlides - 1}
            >
              &#8250;
            </button>
          </div>

          <div className={styles.indicators}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                className={`${styles.indicator} ${currentIndex === index ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}