import React, { useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactSimple from './components/ContactSimple';
import Footer from './components/Footer';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <AnimatedBackground />
      <Hero scrollY={scrollY} />
      <About />
      <Projects />
      <Skills />
      <ContactSimple />
      <Footer />
    </div>
  );
}
