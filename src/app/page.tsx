import Footer from './components/Footer/footer'
import HeroSection from './components/Sections/HeroSection/heroSection';
import TechnologiesSection from './components/Sections/TechnologiesSection/TechnologiesSection';
import ProjectsSection from './components/Sections/ProjectsSection/projectsSection'

export default function Home() {
  return (
    <main className="main">
      
      <HeroSection/>

      <TechnologiesSection/>

      <ProjectsSection/>

      <Footer/>
    </main>
  );
}
