import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

// Registramos el plugin para que GSAP sepa que vamos a usar el scroll
gsap.registerPlugin(ScrollTrigger);

const HorizontalGallery = ({ projects }) => {
  const sectionRef = useRef();
  const triggerRef = useRef();

  // --- PUNTO 3: AQUÍ ESTÁ EL useGSAP ---
  useGSAP(() => {
    // Calculamos cuánto mide toda la tira de imágenes
    const totalMovimiento = sectionRef.current.scrollWidth - window.innerWidth;

    gsap.to(sectionRef.current, {
      x: -totalMovimiento, // Se mueve hacia la izquierda
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=2000", // Aumenta este número para que el scroll sea más lento
        scrub: 1,      // Hace que la animación siga suavemente al mouse
        pin: true,     // Bloquea la pantalla mientras ocurre el movimiento
      },
    });
  }, { scope: triggerRef, dependencies: [projects] });

  return (
    <div ref={triggerRef} style={{ overflow: 'hidden', backgroundColor: '#121212' }}>
      <div 
        ref={sectionRef} 
        style={{ 
          display: 'flex', 
          width: 'fit-content', // Esto permite que el ancho crezca según los proyectos
          height: '100vh',
          alignItems: 'center',
          marginTop:'5rem'
        }}
      >
        {/* Slide 1: Intro fija */}
        <div style={{ width: '35vw', padding: '0 5%', flexShrink: 0 }}>
          <h2 style={{ fontSize: '5rem', color: '#e1e1e1' }}>NUESTROS<br/><span style={{ color: '#b2113b' }}>PROYECTOS</span></h2>
          <p style={{ color: '#888' }}>Desliza hacia abajo ↓</p>
        </div>

        {/* --- PUNTO 2: AQUÍ ESTÁ EL .map() --- */}
        {projects.map((pro) => (
          <div 
            key={pro.id} // Usamos el ID que tienes en App.jsx
            style={{ width: '50vw', display: 'flex', justifyContent: 'center', flexShrink: 0 }}
          >
            <div style={{ width: '90%', maxWidth: '850px' }}>
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={pro.antes} />}
                itemTwo={<ReactCompareSliderImage src={pro.despues} />}
                style={{ height: '350px', borderRadius: '20px' }}
              />
              <h3 style={{ color: '#e1e1e1', marginTop: '20px' }}>{pro.titulo}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalGallery;
