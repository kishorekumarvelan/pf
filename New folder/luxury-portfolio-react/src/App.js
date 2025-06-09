import React, { useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.section, .lux-card, .skill-card').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });

      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav a');
      sections.forEach(sec => {
        const top = window.scrollY + 150;
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (document.querySelector(`nav a[href="#${id}"]`)) {
              document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
