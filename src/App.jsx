import { useDarkMode } from './hooks/useDarkMode';
import { useScrollReveal } from './hooks/useScrollReveal';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [isDark, toggleDark] = useDarkMode();
  const appRef = useScrollReveal();

  return (
    <ErrorBoundary>
      <div ref={appRef} className="bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark font-sans transition-colors duration-300 antialiased min-h-screen">
        <Navbar isDark={isDark} toggleDark={toggleDark} />
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Testimonials />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </ErrorBoundary>
  );
}
