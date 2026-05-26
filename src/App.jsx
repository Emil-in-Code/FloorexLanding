import { lazy, Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import usePageTracking from "./hook/useGtmTracking.js";
import { Helmet } from 'react-helmet-async';

import './App.css';
import { CurvedLoop, GridScan, Hero, HorizontalGallery, PixelCard, IntroOverlay, AboutUs } from './Components';
import { Navbar, Footer } from './widgets';
import { services } from './Data/ServiceDetail.js'
import NotFound from './pages/NotFound.jsx'
import LocalBusinessSchema from './Components/Seo/LocalBussinessSchema.jsx'

import { projectList } from './Data/ProjectData.js';
import { servicesPics } from './Data/ServicesData.js';

const PrivacyPage = lazy(() => import('./pages/privacyPage.jsx'));
const CookiesPage = lazy(() => import('./pages/CookiePage.jsx'));
const LegalNoticePage = lazy(() => import('./pages/LegalNoticePage.jsx'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetail.jsx'));
const MaquinariaDetailPage = lazy(() => import('./pages/MaquinariaDetail.jsx'));


// ✅ Extraé la home a su propio componente
function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
          <title>FloorEx | Pisos Industriales, Epóxicos y Deportivos en Ecuador</title>
          <meta name="description" content="Especialistas en pisos industriales y comerciales en Ecuador. Aplicación de pisos epóxicos, pulidos, deportivos y poliuretano cementicio UQESH®. Cotiza sin costo." />
          <meta name="keywords" content="pisos industriales, pisos epóxicos, pisos pulidos, pisos deportivos, poliuretano cementicio, señalética industrial, Ecuador, Guayaquil, Cuenca" />
          <link rel="canonical" href="https://floorex.ec/" />
        
          {/* Open Graph (Redes Sociales como WhatsApp, Facebook) */}
          <meta property="og:title" content="FloorEx | Pisos Industriales y Comerciales en Ecuador" />
          <meta property="og:description" content="Especialistas en pisos industriales, epóxicos, deportivos y poliuretano cementicio UQESH® en Ecuador. Cotiza sin compromiso." />
          <meta property="og:url" content="https://floorex.ec/" />
          <meta property="og:type" content="website" />
          {/* Te sugiero agregar la imagen que ya tienes guardada en tu carpeta public/seo */}
          <meta property="og:image" content="https://floorex.ec/seo/openGraph.webp" /> 

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="FloorEx | Pisos Industriales y Comerciales en Ecuador" />
          <meta name="twitter:description" content="Especialistas en pisos industriales y comerciales en Ecuador." />
          <meta name="twitter:image" content="https://floorex.ec/seo/openGraph.webp" />
      </Helmet>
      <LocalBusinessSchema />
      <IntroOverlay />
      <main>
        <Hero />

        <section id="projects">
          <HorizontalGallery projects={projectList} />
        </section>

        <section id="companies">
          <h3 className="title-loop">Trabajamos con</h3>
          <CurvedLoop 
            text="Bonddex ✦ Sailor Paint ✦ Xingyi ✦ Aurand ✦ HG ✦ Monster  ✦ "
            speed={30}
            repeat={8}
          />
        </section>


        <section id="services" className="services-grid">
          <h2 className="general-title">Nuestros Servicios</h2>
          {servicesPics.map((servicio) => (
            <PixelCard key={servicio.id}
              onClick={() => {
                if (servicio.id === 7) {
                  // Redirección temporal basada en slug para la maquinaria
                  navigate('/producto/pulidora-portatil-xingyi-gx250');
                } else {
                  // 🧠 Buscamos el servicio equivalente en el archivo de detalles usando el id de la card
                  const servicioEnDetalle = services.find(s => s.id === servicio.id);
                  
                  // 🚀 Si lo encuentra y tiene slug, navegamos forzando minúsculas por estándar SEO
                  if (servicioEnDetalle && servicioEnDetalle.slug) {
                    navigate(`/servicio/${servicioEnDetalle.slug.toLowerCase()}`);
                  } else {
                    // ⚠️ Respaldo por si algún servicio en el array de detalles no tiene slug definido aún
                    navigate(`/servicio/${servicio.id}`);
                  }
                }
              }}
            >
              <div className="container-card">
                <h3 className="service-title">{servicio.title}</h3>
                <div className="img-container">
                  <img src={servicio.image} alt={servicio.title} className="img" loading="lazy" />
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
        <Route path="/servicio/:slug" element={
          <Suspense fallback={fallback}><ServiceDetailPage /></Suspense>
        } />
        <Route path="/producto/:slug" element={
          <Suspense fallback={fallback}><MaquinariaDetailPage /></Suspense>
        } />
        <Route path="*" element={<NotFound />
        } />
      </Routes>

      <Footer id="Footer" />
    </div>
  );
}

export default App;
