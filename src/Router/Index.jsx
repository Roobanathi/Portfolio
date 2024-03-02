import React, { useRef, useEffect } from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Home from '../Component/Home/Home';
import Footer from '../Component/Footer/Footer';
import About from '../Component/About/About';
import Whatido from '../Component/About/Whatido';
import Skils from '../Component/Skils/Skils';
import Experiences from '../Component/Experiences/Experiences';
import Contact from '../Component/Contact/Contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const sections = [
    { id: 'home', ref: useRef(null), direction: 'left' },
    { id: 'about', ref: useRef(null), direction: 'right' },
    { id: 'whatido', ref: useRef(null), direction: 'bottom' },
    { id: 'skills', ref: useRef(null), direction: 'top' },
    { id: 'experiences', ref: useRef(null), direction: 'left' },
    { id: 'contact', ref: useRef(null), direction: 'right' }
  ];

  useEffect(() => {
    sections.forEach(section => {
      gsap.fromTo(
        section.ref.current,
        { opacity: 0, x: section.direction === 'left' ? -50 : section.direction === 'right' ? 50 : 0, y: section.direction === 'top' ? -50 : section.direction === 'bottom' ? 50 : 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section.ref.current,
            start: 'top center+=100',
            end: 'bottom center'
          }
        }
      );
    });
  }, []);

  const scrollTo = (ref) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: ref.current.offsetTop,
        autoKill: false
      }
    });
  };

  return (
    <div>
      <Navbar sections={sections} scrollTo={scrollTo} />
      {sections.map((section, index) => (
        <div key={index} ref={section.ref}>
          {section.id === 'home' && <Home />}
          {section.id === 'about' && <About />}
          {section.id === 'whatido' && <Whatido />}
          {section.id === 'skills' && <Skils />}
          {section.id === 'experiences' && <Experiences />}
          {section.id === 'contact' && <Contact />}
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Index;
