import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import usePageTracking from "./hook/useGtmTracking.js";

import './App.css';
import { CurvedLoop, GridScan, Hero, HorizontalGallery, PixelCard, IntroOverlay, AboutUs } from './Components';
import { Navbar, Footer } from './widgets';

import { projectList } from './Data/ProjectData.js';
import { servicesPics } from './Data/ServicesData.js';

const PrivacyPage = lazy(() => import('./pages/privacyPage.jsx'));
const CookiesPage = lazy(() => import('./pages/CookiePage.jsx'));
const LegalNoticePage = lazy(() => import('./pages/LegalNoticePage.jsx'));

// ✅ Extraé la home a su propio componente
function HomePage() {
  return (
    <>
      <IntroOverlay />
      <main>
        <Hero />

        <section id="projects" className="spacer">
          <HorizontalGallery projects={projectList} />
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
          <h1 className="general-title">Nuestros Servicios</h1>
          {servicesPics.map((servicio) => (
            <PixelCard key={servicio.id}>
              <div className="container-card">
                <h1 className="service-title">{servicio.title}</h1>
                <div className="img-container">
                  <img src={servicio.image} className="img" loading="lazy" />
                </div>
              </div>
            </PixelCard>
          ))}
        </section>

        <section id="aboutUs">
          <AboutUs />
        </section>
      </main>
    </>
  );
}

const fallback = (
  <div style={{ padding: '4rem', textAlign: 'center', color: '#6b6b6b' }}>
    Cargando...
  </div>
);

function App() {
  usePageTracking();

  return (
    <div className="appWrapper">
      <Navbar />

      {/* ✅ Ahora TODO está dentro del sistema de rutas */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/privacidad" element={
          <Suspense fallback={fallback}><PrivacyPage /></Suspense>
        } />
        <Route path="/cookies" element={
          <Suspense fallback={fallback}><CookiesPage /></Suspense>
        } />
        <Route path="/legal" element={
          <Suspense fallback={fallback}><LegalNoticePage /></Suspense>
        } />
      </Routes>

      <Footer id="Footer" />
    </div>
  );
}

export default App;
