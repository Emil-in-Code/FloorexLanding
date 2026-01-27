import React from 'react';
import IntroOverlay from './Components/IntroOverlay/IntroOverlay.jsx';
import Navbar from './widgets/Navbar/Navbar.jsx';
import HeroSection from './Components/Hero/HeroSection.jsx';
import './App.css';
import HorizontalGallery from './Components/HorizontalGallery/HorizontalGallery.jsx'
import { projectList } from './Data/ProjectData.js';

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

        <section id="proyectos" className="spacer">
          <div>
            <HorizontalGallery proyectos={projectList}/>

           {/* <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={beforeImg} alt="Antes" />}
              itemTwo={<ReactCompareSliderImage src={afterImg} alt="Después" />}
              handle={<ReactCompareSliderHandle style={{color: '#b2113bff'}}/>}
              style={{
                width: '500px',
                height: '400px',
                borderRadius: '9px', // Bordes redondeados
                border: '2px solid #b2113bff' // Un marco sutil
              }}

            />*/}
          </div>
        </section> 
        <section id="servicios" className="spacer">
          <h2>Nuestros Servicios</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
