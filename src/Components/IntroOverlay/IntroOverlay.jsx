import React, { useEffect, useRef } from 'react';
import styles from './IntroOverlay.module.css';
import logo from '../../Assets/Images/logo.webp';
import { useIntroOverlay } from './useIntroOverlay.js';

export default function IntroOverlay() {
  const { 
    logoStyle, 
    overlayStyle, 
    isComplete, 
    cancelAutoScroll,
    shouldAutoScroll 
  } = useIntroOverlay(300, 3000);
  
  const scrollHintRef = useRef(null);

  // Animación de rebote para el hint de scroll (solo si no hay auto-scroll pendiente)
  useEffect(() => {
    if (isComplete || !scrollHintRef.current) return;

    const element = scrollHintRef.current;
    let frameId;

    const bounce = () => {
      element.style.animation = 'bounce 1s ease-in-out infinite';
    };

    bounce();
    return () => {
      if (element) element.style.animation = '';
    };
  }, [isComplete]);

  // Manejar click en botón de entrada
  const handleEnterClick = () => {
    cancelAutoScroll();
    window.scrollTo({
      top: 300,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.overlay} style={overlayStyle} onClick={cancelAutoScroll}>
      <div className={styles.logoContainer} style={logoStyle}>
        <img 
          src={logo} 
          alt="FloorEx - Pisos Industriales" 
          className={styles.svg}
          fetchPriority="high" // Prioriza carga de LCP
        />
      </div>
      
      <div className={styles.interactionArea}>
        {shouldAutoScroll && (
          <div className={styles.autoScrollBadge}>
            ⚡ Acceso automático en {3}s
          </div>
        )}
        
        <button 
          className={styles.enterButton}
          onClick={handleEnterClick}
          aria-label="Entrar al sitio web"
        >
          Empezar
        </button>
        
        <p 
          ref={scrollHintRef} 
          className={styles.scrollHint}
          style={{ opacity: logoStyle.opacity }}
        >
          ↓ Haz scroll para continuar ↓
        </p>
      </div>
    </div>
  );
}
