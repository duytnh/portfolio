import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import style from './App.module.css';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

// function AnimatedSection({ children }) {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     if (inView && !hasAnimated) {
//       setHasAnimated(true);
//     }
//   }, [inView, hasAnimated]);

//   return (
//     <div ref={ref} className={`${style.section} ${hasAnimated ? style.visible : ''}`}>
//       {children}
//     </div>
//   );
// }

function App() {
  return (
    <div className={style.App}>
      <Navbar />

      <Hero />


      <About />


      <Experience />


      <Projects />


      <Contact />

    </div>
  );
}

export default App;
