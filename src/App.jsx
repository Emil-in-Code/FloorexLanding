import React from 'react';
import IntroOverlay from './Components/IntroOverlay/IntroOverlay.jsx';
import Navbar from './widgets/Navbar/Navbar.jsx';
import HeroSection from './Components/Hero/HeroSection.jsx';
import './App.css';
import HorizontalGallery from './Components/HorizontalGallery/HorizontalGallery.jsx'
import { projectList } from './Data/ProjectData.js';
import { servicesPics } from './Data/ServicesData.js';
import CurvedLoop from './Components/CuverdLoop/CurvedLoop.jsx';
import PixelCard from './Components/PixelCard/PixelCard.jsx';


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

        <section id="companies" className="spacer">
          <div className="loopContainer">
            <h3 className="title-loop">Trabajamos con</h3>
            <CurvedLoop 
              marqueeText="Bonddex ✦ Sailor Paint ✦ Xingyi ✦ Aurand ✦ HG ✦ Monster ✦"
              speed={2}
              curveAmount={-0}
              direction="left"
              interactive 
              className="custom-text-style"
            />
          </div>
        </section>

        <section id="services" className="services-grid"> 
          <h1>Nuestros Servicios</h1>
          {servicesPics.map((servicio) => (
            <PixelCard key={servicio.id}>
              <div className="container-card">
                <h1 className="service-title">{servicio.title}</h1>
                <div className="img-container">
                  <img 
                    src={servicio.image} 
                    className="img" 
                    loading="lazy" /* Importante: solo carga la imagen cuando el usuario llega a ella */
                  />
                </div>
              </div>
            </PixelCard>
          ))}
        </section>

      </main>
    </div>
  );
}

export default App;
