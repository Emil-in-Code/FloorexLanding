// heroSection.jsx
import React from 'react';
import { useScrollAnimation } from '../IntroOverlay/useScrollAnimation.js';
import Navbar from '../../widgets/Navbar/Navbar.jsx';
import styles from './HeroSection.module.css';
import heroImg from '../../Assets/Images/imgHero.png'
import GridScan from '../GridScan/GridScan.jsx';

export default function HeroSection() {
  const scrollValue = useScrollAnimation(300); 
  
  // El texto empieza a aparecer cuando el logo ya avanzó el 40% (0.4)
  const heroOpacity = Math.max(0, (scrollValue - 0.6) * 2.5);
  
  // Efecto de escala: empieza en 0.8 y llega a 1
  const heroScale = 0.95 + (Math.min(heroOpacity, 1) * 0.2);

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
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#1e1e1e"
            gridScale={0.1}
            scanColor="#f20800"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
            enableWebcam={false}
          />
          <div className={styles.content}>

            <div className= {styles.textGroup}>
              <h1 className={styles.title}>PISOS <span className={styles.titleGradient}>EPÓXICOS</span></h1>
              <p className={styles.parrafo}>La transformación que tu espacio merece.</p>
              <div className={styles.cta}>
                 <button className={`${styles.btn} ${styles.btnContact}`}>Contactar</button>
                 <button className={`${styles.btn} ${styles.btnProject}`}>Proyectos</button>             
              </div> 

            </div>


           {/*<div className={styles.pulidoraContainer}>
              <img src={heroImg} alt="foto pulidora" className={styles.pulidoraImg}/>
            </div>*/}
          </div>
        </div>


      </section>
      
      {/* Espaciador para permitir el scroll de la animación y contenido extra */}
      <div className={styles.animationBuffer} />

    </div>
  );
}
