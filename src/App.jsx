import React from 'react';
import IntroOverlay from './components/introOverlay/IntroOverlay.jsx';
import Navbar from './widgets/Navbar/Navbar.jsx';
import HeroSection from './components/hero/heroSection.jsx';
import './App.css';
import imgAntes from './assets/img/afterImage.jpg'
import imgDespues from './assets/img/beforeImage.jpg'
import slider from './components/sliders/slider.jsx'

function App() {
  return (
    <div className="appWrapper">
      {/* 1. Capa de animación superior */}
      <IntroOverlay />

      {/* 2. El Navbar se mantiene fijo */}
      <Navbar />

      {/* 3. Contenido Principal */}
      <main>
        <HeroSection />
        
        {/* Secciones adicionales para permitir el scroll */}
        <section id="servicios" className="spacer">
          <h2>Nuestros Servicios</h2>
        </section>
        <section id="proyectos" className="spacer">
          <h2>Proyectos Recientes</h2>
          <p>Desliza para ver nuestra calidad</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Slider 
              beforeImage={imgAntes} 
              afterImage={imgDespues} 
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
