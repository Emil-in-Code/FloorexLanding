import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import styles from './HorizontalGallery.module.css';

gsap.registerPlugin(ScrollTrigger);

// Hook para saber si estamos en mobile/tablet
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth <= breakpoint
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [breakpoint]);

  return isMobile;
};

const HorizontalGallery = ({ projects }) => {
  const sectionRef = useRef();
  const triggerRef = useRef();
  const isMobile = useIsMobile(768);

  useGSAP(() => {
    // Solo inicializamos el scroll horizontal en desktop
    if (isMobile) return;

    const totalMovimiento = sectionRef.current.scrollWidth - window.innerWidth;

    const ctx = gsap.to(sectionRef.current, {
      x: -totalMovimiento,
      ease: 'none',
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: '+=2000',
        scrub: 1,
        pin: true,
      },
    });

    return () => ctx.revert?.();
  }, { scope: triggerRef, dependencies: [projects, isMobile] });

  return (
    <div ref={triggerRef} className={styles.triggerWrapper}>
      <div ref={sectionRef} className={styles.strip}>

        {/* Slide intro */}
        <div className={styles.introSlide}>
          <h2 className={styles.introTitle}>
            NUESTROS<br />
            <span className={styles.introAccent}>PROYECTOS</span>
          </h2>
          <p className={styles.introHint}>Scroll ↓</p>
        </div>

        {/* Cards de proyectos */}
        {projects.map((pro) => (
          <div key={pro.id} className={styles.projectCard}>
            <div className={styles.projectInner}>
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={pro.antes} />}
                itemTwo={<ReactCompareSliderImage src={pro.despues} />}
                style={{ height: '350px', borderRadius: '20px' }}
              />
              <h3 className={styles.projectTitle}>{pro.titulo}</h3>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default HorizontalGallery;
