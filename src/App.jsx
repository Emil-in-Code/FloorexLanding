import React from 'react';
import IntroOverlay from './Components/IntroOverlay/IntroOverlay.jsx';
import Navbar from './widgets/Navbar/Navbar.jsx';
import HeroSection from './Components/Hero/HeroSection.jsx';
import './App.css';
import HorizontalGallery from './Components/HorizontalGallery/HorizontalGallery.jsx'
import { projectList } from './Data/ProjectData.js';
import CurvedLoop from './Components/CuverdLoop/CurvedLoop.jsx';
import PixelCard from './Components/PixelCard/PixelCard.jsx';
import baño from './Assets/Images/baño.webp'

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

        <section id="projects" className="spacer">
            <HorizontalGallery projects={projectList}/>
        </section> 
        <section id="servicios" className="spacer">
          <CurvedLoop 
            marqueeText="Nuestros Servicios ✦ Nuestros  Servicios ✦ "
            speed={2}
            curveAmount={-0}
            direction="left"
            interactive
            className="custom-text-style"
          />
        <PixelCard variant="pink">
            <div>
              <h2>Pisos Pulidos</h2>
              <p>Y abrillantados</p>
              <img 
                src={baño} alt=""/>
            </div>
          </PixelCard>
        </section>
      </main>
    </div>
  );
}

export default App;
