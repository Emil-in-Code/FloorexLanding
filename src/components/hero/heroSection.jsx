import React from 'react';
import { useScrollAnimation } from '../introOverlay/useScrollAnimation.js';
import Navbar from '../../widgets/Navbar/Navbar.jsx';
import styles from './heroSection.module.css';

export default function HeroSection() {
  const progress = useScrollAnimation(400);

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <section 
        className={styles.hero} 
        style={{ opacity: progress, transform: `scale(${0.9 + progress * 0.1})` }}
      >
        <div className={styles.content}>
          <h1>PISOS ELEGANTES</h1>
          <p>La transformación que tu espacio merece.</p>
        </div>
      </section>
      
      {/* Espacio para permitir el scroll */}
      <div style={{ height: '200vh' }} />
    </div>
  );
}
