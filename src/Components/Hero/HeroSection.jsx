// heroSection.jsx
import React, { useState, useEffect } from 'react';

import { useScrollAnimation } from '../IntroOverlay/useScrollAnimation.js';
import Navbar from '../../widgets/Navbar/Navbar.jsx';
import styles from './HeroSection.module.css';
import heroImg from '../../Assets/Images/imgHero.png';
import GridScan from '../GridScan/GridScan.jsx';
import CtaButton from '../Cta/cta.jsx';

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

  // El hero empieza a aparecer en 0.65 (cuando el overlay ya está en opacity 0).
  // Llega a opacity 1 en progress 1.
  // Rango disponible: 0.65 → 1 = 0.35 unidades → factor 1/0.35 ≈ 2.86
  const heroOpacity = Math.min(1, Math.max(0, (scrollValue - 0.65) * 2.86));

  // Escala: parte en 0.95, llega a 1
  const heroScale = 0.95 + heroOpacity * 0.05;

  const breakpoint = useBreakpoint();
  const isDesktop = breakpoint === 'desktop';

  return (
    <div className={styles.wrapper}>
      <Navbar />

      <section
        className={styles.hero}
        style={{
          opacity: heroOpacity,
          transform: `scale(${heroScale})`,
        }}
      >
        <div className={styles.containerGh}>
          {/* GridScan solo en desktop/tablet */}
          {isDesktop && (
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
          )}

          {/* Fondo animado siempre presente en mobile, 
              en desktop funciona como overlay sutil */}
          <div className={styles.gradientBg} />

          <div className={styles.content}>
            <div className={styles.textGroup}>
              <h1 className={styles.title}>A Flooring Company</h1>
              <p className={styles.parrafo}>Floors for life</p>

              <div className={styles.cta}>
                <CtaButton
                  wp="593987844281"
                  className={`${styles.btn} ${styles.btnContact}`}
                  text="Contactar"
                />
                <CtaButton
                  to="/seguro/1"
                  className={`${styles.btn} ${styles.btnServices}`}
                  text="Servicios"
                />                    

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buffer mínimo: solo lo necesario para el scroll de la animación */}
      <div className={styles.animationBuffer} />
    </div>
  );
}
