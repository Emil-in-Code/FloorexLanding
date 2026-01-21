import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';
import styles from './introOverlay.module.css';
import logo from '../../assets/img/logo.webp'

export default function IntroOverlay() {
  const progress = useScrollAnimation(400); // Se completa a los 400px de scroll

  // Estilos dinámicos basados en el scroll
  const logoStyle = {
    transform: `translate(-50%, -50%) 
                rotate(${progress * 360}deg) 
                scale(${1 - progress * 0.8})`,
    top: `${50 - progress * 45}%`,
    left: `${50 - progress * 42}%`,
    opacity: 1 - progress,
    pointerEvents: progress > 1 ? 'none' : 'all'
  };

  const lineTopStyle = {
    transform: `translateX(-${progress * 100}%)`,
    opacity: 1 - progress
  };

  const lineBottomStyle = {
    transform: `translateX(${progress * 100}%)`,
    opacity: 1 - progress
  };

  return (
    <div className={styles.overlay} style={{ opacity: 1 - progress }}>
      <div className={styles.lineTop} style={lineTopStyle} />
      
      <div className={styles.logoContainer} style={logoStyle}>
        <img src={logo} alt="logo de bienvenida" className={styles.svg} />
      </div>

      <div className={styles.lineBottom} style={lineBottomStyle} />
    </div>
  );
}
