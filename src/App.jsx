import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import usePageTracking from "./hook/useGtmTracking.js";

import './App.css';
import { CurvedLoop, GridScan, Hero, HorizontalGallery, PixelCard, IntroOverlay,AboutUs } from './Components';
import { Navbar, Footer}  from './widgets';

import { projectList } from './Data/ProjectData.js';
import { servicesPics } from './Data/ServicesData.js';


//Carga diferida: estos bundles solo se descargan cuando el usuario navega a la ruta
const PrivacyPage = lazy(() => import('./pages/privacyPage.jsx'));
const CookiesPage = lazy(() => import ('./pages/CookiePage.jsx')) 
const LegalNoticePage = lazy(() => import ('./pages/LegalNoticePage.jsx')) 

function App() {

  usePageTracking();

  return (

    <div className="appWrapper">
      {/* 1. Capa de animación superior */}
      <IntroOverlay />

      {/* 2. El Navbar se mantiene fijo */}
      <Navbar />

      {/* 3. Contenido Principal */}
      <main>
        <Hero />
        
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


        <AboutUs />

      </main>

      <Routes>
        {/* RUTAS LEGALES — lazy loaded */}
        <Route
            path="/privacidad"
            element={
              <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center', color: '#6b6b6b' }}>Cargando...</div>}>
                <PrivacyPage />
              </Suspense>
            }
        />

        <Route
            path="/cookies"
            element={
              <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center', color: '#6b6b6b' }}>Cargando...</div>}>
                <CookiesPage />
              </Suspense> 
            }
        />

        <Route
            path="/legal"
            element={
              <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center', color: '#6b6b6b' }}>Cargando...</div>}>
                <LegalNoticePage />
              </Suspense> 
            }
    
        />

      </Routes>

      <Footer id="Footer" />
    </div>
  );
}

export default App;
