// heroSection.jsx
import React from 'react';
import { useScrollAnimation } from '../introOverlay/useScrollAnimation.js';
import Navbar from '../../widgets/Navbar/Navbar.jsx';
import styles from './heroSection.module.css';
import baño from '../../assets/img/baño.webp'

export default function HeroSection() {
  const scrollValue = useScrollAnimation(650); 
  
  // El texto empieza a aparecer cuando el logo ya avanzó el 40% (0.4)
  const heroOpacity = Math.max(0, (scrollValue - 0.4) * 2);
  
  // Efecto de escala: empieza en 0.8 y llega a 1
  const heroScale = 0.9 + (Math.min(heroOpacity, 1) * 0.2);

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
        <div className={styles.content}>
          <div className= {styles.textGroup}>
            <h1>PISOS EPÓXICOS</h1>
            <p className={styles.parrafo}>La transformación que tu espacio merece.</p>
          </div>
          <div className={styles.banoContainer}>
            <img src={baño} alt="foto baño" className={styles.banoImg}/>
          </div>
        </div>

      </section>
      
      {/* Espaciador para permitir el scroll de la animación y contenido extra */}
      <div className={styles.animationBuffer} />

    </div>
  );
}
