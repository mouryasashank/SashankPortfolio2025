import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.querySelector('.scroll-progress').style.width = scrolled + '%';
    };

    const toggleBackToTop = () => {
      const backToTop = document.querySelector('.back-to-top');
      backToTop.classList.toggle('show', window.scrollY > 300);
    };

    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('scroll', toggleBackToTop);
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('scroll', toggleBackToTop);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="scroll-progress"></div>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <motion.button
        className="back-to-top bg-purple-600 text-white p-3 rounded-full shadow-md fixed bottom-5 right-5"
        aria-label="Back to Top"
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fas fa-arrow-up"></i>
      </motion.button>
    </div>
  );
};

export default App;