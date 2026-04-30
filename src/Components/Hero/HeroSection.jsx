// heroSection.jsx
import React, { useState, useEffect,} from 'react';

import { useScrollAnimation } from '../IntroOverlay/useScrollAnimation.js';
import Navbar from '../../widgets/Navbar/Navbar.jsx';
import styles from './HeroSection.module.css';
import heroImg from '../../Assets/Images/imgHero.png'
import GridScan from '../GridScan/GridScan.jsx';

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(() => {
    if (typeof window === 'undefined') return 'desktop';
    const w = window.innerWidth;
    if (w < 768) return 'mobile';
    if (w < 1024) return 'tablet';
    return 'desktop';
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setBreakpoint('mobile');
      else if (w < 1024) setBreakpoint('tablet');
      else setBreakpoint('desktop');
    };
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

  return breakpoint;
}

export default function HeroSection() {
  const scrollValue = useScrollAnimation(100); 
  
  // El texto empieza a aparecer cuando el logo ya avanzó el 40% (0.4)
  const heroOpacity = Math.max(0, (scrollValue - 0.6) * 2.5);
  
  // Efecto de escala: empieza en 0.8 y llega a 1
  const heroScale = 0.95 + (Math.min(heroOpacity, 1) * 0.2);

  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === 'mobile';
  const isTablet = breakpoint === 'tablet';

  //  Delay controlado (mejora LCP)
  const [showEffect, setShowEffect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEffect(true);
    }, 500); // se puede ajustar 300–800ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Navbar />

      <section 
        className={styles.hero} 
        style={{ 
          opacity: heroOpacity,
          transform: `scale(${heroScale})`
        }}
      >  
        <div className={styles.containerGh}>
          <div className={styles.gridScan}>
             <GridScan
              sensitivity={0.55}
              lineThickness={1}
              linesColor="#1e1e1e"
              gridScale={0.1}
              scanColor="#ff7700"
              scanOpacity={0.4}
              enablePost
              bloomIntensity={0.6}
              chromaticAberration={0.002}
              noiseIntensity={0.01}
              enableWebcam={false}
            />
          </div>

          <div className={styles.gradientBg}>
          </div>
          <div className={styles.content}>

            <div className= {styles.textGroup}>
              <h1 className={styles.title}>A Flooring Company</h1>
              <p className={styles.parrafo}>Floors for life</p>
              <div className={styles.cta}>
                 <button className={`${styles.btn} ${styles.btnContact}`}>Contactar</button>
                 <button className={`${styles.btn} ${styles.btnProject}`}>Proyectos</button>             
              </div> 

            </div>

          </div>
        </div>


      </section>
      
      {/* Espaciador para permitir el scroll de la animación y contenido extra */}
      <div className={styles.animationBuffer} />

    </div>
  );
}
