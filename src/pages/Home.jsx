
import React from 'react';
import IntroOverlay from './components/introOverlay/IntroOverlay.jsx';
import Navbar from './widgets/Navbar/Navbar.jsx';
import HeroSection from './components/hero/heroSection.jsx';
import styles from './App.css';

function App() {
  return (
    <div className={styles.appWrapper}>
      {/* 1. Capa de animación superior */}
      <IntroOverlay />

      {/* 2. El Navbar se mantiene fijo */}
      <Navbar />

      {/* 3. Contenido Principal */}
      <main>
        <HeroSection />
        
        {/* Secciones adicionales para permitir el scroll */}
        <section id="servicios" className={styles.spacer}>
          <h2>Nuestros Servicios</h2>
        </section>
        <section id="proyectos" className={styles.spacer}>
          <h2>Proyectos Recientes</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
