//--------App.jsx-----------// 
import { lazy, Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import usePageTracking from "./hook/useGtmTracking.js";

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

//------pixelCard.jx--------//
import { useEffect, useRef } from 'react';
import './PixelCard.css';

class Pixel {
  constructor(canvas, context, x, y, color, speed, delay) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.size = 0;
    this.sizeStep = Math.random() * 0.4;
    this.minSize = 0.5;
    this.maxSizeInteger = 2;
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
    this.delay = delay;
    this.counter = 0;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
  }

  appear() {
    this.isIdle = false;
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }
    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }
    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }
    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;
    if (this.size <= 0) {
      this.isIdle = true;
      return;
    } else {
      this.size -= 0.1;
    }
    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true;
    } else if (this.size <= this.minSize) {
      this.isReverse = false;
    }
    if (this.isReverse) {
      this.size -= this.speed;
    } else {
      this.size += this.speed;
    }
  }
}

function getEffectiveSpeed(value, reducedMotion) {
  const min = 0;
  const max = 100;
  const throttle = 0.001;
  const parsed = parseInt(value, 10);

  if (parsed <= min || reducedMotion) {
    return min;
  } else if (parsed >= max) {
    return max * throttle;
  } else {
    return parsed * throttle;
  }
}

const VARIANTS = {
  default: {
    activeColor: null,
    gap: 5,
    speed: 35,
    colors: '#f8fafc,#f1f5f9,#cbd5e1',
    noFocus: false
  },
  blue: {
    activeColor: '#e0f2fe',
    gap: 10,
    speed: 25,
    colors: '#e0f2fe,#7dd3fc,#0ea5e9',
    noFocus: false
  },
  yellow: {
    activeColor: '#fef08a',
    gap: 3,
    speed: 20,
    colors: '#fef08a,#fde047,#eab308',
    noFocus: false
  },
  pink: {
    activeColor: '#fecdd3',
    gap: 3,
    speed: 80,
    colors: '#fecdd3,#fda4af,#e11d48',
    noFocus: true
  }
};

export default function PixelCard({ variant = 'default', gap, speed, colors, noFocus, className = '', children, onClick }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const pixelsRef = useRef([]);
  const animationRef = useRef(null);
  const timePreviousRef = useRef(performance.now());
  const reducedMotion = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches).current;

  const variantCfg = VARIANTS[variant] || VARIANTS.default;
  const finalGap = gap ?? variantCfg.gap;
  const finalSpeed = speed ?? variantCfg.speed;
  const finalColors = colors ?? variantCfg.colors;
  const finalNoFocus = noFocus ?? variantCfg.noFocus;

  const initPixels = () => {
    if (!containerRef.current || !canvasRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);
    const ctx = canvasRef.current.getContext('2d');

    canvasRef.current.width = width;
    canvasRef.current.height = height;
    canvasRef.current.style.width = `${width}px`;
    canvasRef.current.style.height = `${height}px`;

    const colorsArray = finalColors.split(',');
    const pxs = [];
    for (let x = 0; x < width; x += parseInt(finalGap, 10)) {
      for (let y = 0; y < height; y += parseInt(finalGap, 10)) {
        const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];

        const dx = x - width / 2;
        const dy = y - height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const delay = reducedMotion ? 0 : distance;

        pxs.push(new Pixel(canvasRef.current, ctx, x, y, color, getEffectiveSpeed(finalSpeed, reducedMotion), delay));
      }
    }
    pixelsRef.current = pxs;
  };

  const doAnimate = fnName => {
    animationRef.current = requestAnimationFrame(() => doAnimate(fnName));
    const timeNow = performance.now();
    const timePassed = timeNow - timePreviousRef.current;
    const timeInterval = 1000 / 60;

    if (timePassed < timeInterval) return;
    timePreviousRef.current = timeNow - (timePassed % timeInterval);

    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx || !canvasRef.current) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    let allIdle = true;
    for (let i = 0; i < pixelsRef.current.length; i++) {
      const pixel = pixelsRef.current[i];
      pixel[fnName]();
      if (!pixel.isIdle) {
        allIdle = false;
      }
    }
    if (allIdle) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleAnimation = name => {
    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(() => doAnimate(name));
  };

  const onMouseEnter = () => handleAnimation('appear');
  const onMouseLeave = () => handleAnimation('disappear');
  const onFocus = e => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    handleAnimation('appear');
  };
  const onBlur = e => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    handleAnimation('disappear');
  };

  useEffect(() => {
    initPixels();
    const observer = new ResizeObserver(() => {
      initPixels();
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalGap, finalSpeed, finalColors, finalNoFocus]);

  return (
    <div
      ref={containerRef}
      className={`pixel-card ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={finalNoFocus ? undefined : onFocus}
      onBlur={finalNoFocus ? undefined : onBlur}
      tabIndex={finalNoFocus ? -1 : 0}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default'}}
    >
      <canvas className="pixel-canvas" ref={canvasRef} />
      {children}
    </div>
  );
}
//--------ServiceData.js------// 
import deportivo from '../Assets/Images/deportivo.webp'
import baño from '../Assets/Images/baño.webp'
import pinturaEpoxi from '../Assets/Images/pinturaEpoxi.webp'
import senaletica from '../Assets/Images/senaletica-1.webp'
import poliuretanoCemen from '../Assets/Images/poliuretanoCementicio_Página 5.webp'
import superficie from '../Assets/Images/superficie4.webp'
import ventaMaquina from '../Assets/Images/ventaMaquina.webp'
 

export const servicesPics = [
  { id: 1, 
    title: "Pisos abrillantados",
    image: baño
  },
  { 
    id: 2, 
    title: "Pisos deportivos",
    image: deportivo 
  },
  {
    id: 3,
    title: "Pisos Epóxicos",
    image: pinturaEpoxi
  },
  {
    id: 4,
    title: "Poliuretano cementicio",
    image: poliuretanoCemen 
  },
  {
    id: 5,
    title: "Superficies de concreto",
    image: superficie
  },
  {
    id: 6,
    title: "Pintura señalética",
    image: senaletica
  },
  {
    id: 7,
    title: "Venta de maquinaria",
    image: ventaMaquina
  }
]
//--------ServiceDetail.js----// 
import { servicesImg } from '../Data/GalleryServices.js'

// ─── Constantes SEO ────────────────────────────────────────
const BASE_URL = 'https://floorex.ec';
const OG_IMAGE_DEFAULT = '/seo/opengraph.webp';

const getCanonical = (slug) => `${BASE_URL}/servicio/${slug}`;

export const services = [
  {
    id: 1,
    slug: "pisos-pulidos-abrillantados",
    title: "Pisos pulidos/abrillantados",
    text: "En cualquier espacio que necesite durabilidad, estética y bajo mantenimiento.",
    image: servicesImg.pulidos.hero,
    waMessage: "Hola, estoy interesado en el servicio de pisos pulidos/abrillantados ¿me podría dar más información?",
    badge: "más contratado",
    gallery: servicesImg.pulidos.gallery,
    description: `Solución 100% ecológica que garantiza larga durabilidad sin contaminar el medio ambiente,
                  ya que nuestro proceso no aplica capas superficiales que se desgastan con el uso;
                  pulimos el propio concreto con diamantes para lograr un brillo duradero, natural y sostenible.`,
    faq:[
      { question: "¿Cuánto dura un piso pulido de concreto?", answer: "Un piso pulido correctamente puede durar más de 20 años sin necesidad de renovar el acabado..." },
      { question: "¿Se puede pulir cualquier tipo de hormigón?", answer: "En la mayoría de los casos sí. Evaluamos el estado del concreto antes..." },
    ],
    benefits: [
      { icon: '🌿', title: '100% ecológico',       desc: 'Sin capas ni químicos superficiales. Cuidamos el medioambiente.' },
      { icon: '⏳', title: 'Larga durabilidad',    desc: 'El brillo es parte del concreto, no se desgasta con el uso.' },
      { icon: '🧹', title: 'Bajo mantenimiento',   desc: 'Limpieza rápida y sin productos especiales.' },
      { icon: '✨', title: 'Acabado premium',      desc: 'Brillo natural y uniforme en toda la superficie.' },
      { icon: '🔒', title: 'Antideslizante',       desc: 'Certificado seguro para zonas de alto tránsito.' },
      { icon: '💰', title: 'Costo-eficiente',      desc: 'Inversión única que no requiere renovaciones periódicas.' },
    ],

    // Pasos del proceso — personalizable por servicio
    process: [
      { title: 'Evaluación del piso',       desc: 'Inspeccionamos el estado del concreto y definimos el proceso ideal según las condiciones del lugar.' },
      { title: 'Preparación y rectificado', desc: 'Desbastamos la superficie para exponer los agregados -al nivel deseado- y crear una base sólida.' },
      { title: 'Pulido progresivo con diamantes',      desc: 'Aplicamos una secuencia progresiva de discos diamantados para alcanzar el nivel de brillo requerido.' },
      { title: 'Densificado',               desc: 'Aplicamos densificadores tales como el litio,sodio o potasio para endurecer y sellar los poros del concreto desde adentro.' },
      { title: 'Brillo final',          desc: 'Usamos pads de resina fenólica para obtener un acabado fino, brillante y similar a la piedra natural… sin necesidad de selladores tópicos en la superficie.' },
    ],

    // ── SEO ─────────────────────────────────────────────────
    seo: {
      title: "Pisos Pulidos y Abrillantados de Concreto u Hormigón - FloorEx",
      description: `Servicio de pulido mecánico de concreto con diamantes en Ecuador. 
                    Acabado brillante de alta durabilidad, antideslizante y 100% ecológico.`,
      keywords: `pisos pulidos de cemento, pulido de hormigón, mejores empresas de pisos pulidos en Ecuador`,
      ogImage: OG_IMAGE_DEFAULT,
      canonical: getCanonical("pisos-pulidos-abrillantados"),
    },

    // ── HTML libre para la sección de descripción ────────────
    detail: `
      <h2>¿Dónde se puede instalar?</h2>
      <ul>
        <li>
          <h3>Residencial</h3>
          <article>Elegancia moderna sin complicaciones.</article>
        </li>
        <li>
          <h3>Comercial</h3>
          <article>Imagen profesional que soporta alto tránsito.</article>
        </li>
        <li>
          <h3>Industrial</h3>
          <article>Resistencia extrema para entornos exigentes.</article>
        </li>
        <li>
          <h3>Showrooms</h3>
          <article>Acabado brillante que realza tus productos.</article>
        </li>
        <li>
          <h3>Restaurantes</h3>
          <article>Higiene, fácil limpieza y estilo inolvidable.</article>
        </li>
        <li>
          <h3>Hoteles</h3>
          <article>Primera impresión impecable, día tras día.</article>
        </li>
        <li>
          <h3>Garajes</h3>
          <article>Adiós al polvo y a las manchas difíciles.</article>
        </li>
        <li>
          <h3>Supermercados</h3>
          <article>Seguro antideslizante y limpieza rápida.</article>
        </li>
      </ul>
    `,
  },
  {
    id: 2,
    slug: "pisos-deportivos",
    title: "Pisos Deportivos",
    text: "Que nada te saque del juego",
    image:servicesImg.deportivo.hero,
    waMessage: "Hola, estoy interesado en el servicio de los pisos deportivos ¿me podría dar más información?",
    badge: "",          // ← dejar vacío si no tiene badge
    gallery:servicesImg.deportivo.gallery, 
    description: `¿Tu cancha o pista tienen el hormigón agrietado, irregular o demasiado agresivo
                    para la práctica deportiva?
                    Entonces recupera la superficie y conviertela en un piso deportivo profesional:
                    Liso, duradero y estéticamente impecable`,
    benefits: [
      { icon: '⚒️', title: 'Sin demolición',    desc: 'Recuperamos pisos deportivos viejos o en mal estado' },
      { icon: '💰', title: 'Costo-eficiente', desc: 'Adaptamos el sistema a tu presupuesto y nivel de exigencia (uso escolar, federado o recreativo)' },
      { icon: '⏰', title: 'Tiempo de ejecución',    desc: 'Tu espacio estará listo en apenas unos días para que puedas volver a jugar' },
      { icon: '📐', title: 'Acabado liso',       desc: 'Agarre controlado en el punto justo de deslizamiento, sin frenadas bruscas ni resbalones' },
      { icon: '⏳', title: 'Larga durabilidad',    desc: 'Resistencia al arrastre de zapatillas, exposición solar,lluvias y limpieza sin decoloración' },
      { icon: '🎨', title: 'Estetica profesional',    desc: 'Colores vivos,líneas nítidas marcadas con pintura especial, terminación mate o satinado' },
    ],
    process: [
      { title: 'Preparación del soporte', desc: 'Escarificamos, pulimos o fresamos el concreto para eliminar imperfecciones y crear una base perfectamente plana.' },
      { title: 'Sistemas multicapa', desc: 'Aplicamos resinas acrílicas o poliuretánicas de alto rendimiento específicas para la práctica deportiva.' },
      { title: 'Marcado y acabado', desc: 'Delimitación de líneas nítidas con pintura especial y aplicación de la terminación estética (mate o satinada) con agarre controlado.' },
    ],
    seo: {
      title: "Pisos deportivos profesionales - Floorex",
      description: `Recuperamos canchas y pistas con hormigón 
                    dañado sin demolición. Sistemas acrílicos y
                    poliuretánicos para básquet, paddle, vóley y multiuso.`,
      keywords: `pisos deportivos, resinas acrilicas, poliuretano deportes, basquet, handball, paddle, voley, pintura canchas, recuperacion de pisos`,
      ogImage: OG_IMAGE_DEFAULT,
      canonical: getCanonical("pisos-deportivos"),
    },
    detail: `
      <h2>¿Qué pisos trabajamos?</h2>
      <ul>
        <li>
          <h3>Basquet</h3>
          <article>Superficies lisas con agarre controlado para un juego dinámico, seguro y con excelente rebote.</article>
        </li>
        <li>
          <h3>Handball</h3>
          <article>Sistemas multicapa de alto rendimiento que resisten el arrastre continuo y los impactos del juego exigente.</article>
        </li>
        <li>
          <h3>Paddle</h3>
          <article>Acabados de alta resistencia y durabilidad. </article>
        </li>
        <li>
          <h3>Volley</h3>
          <article>Estética profesional con colores vivos, líneas nítidas y la elasticidad justa para proteger a los deportistas.</article>
        </li>
        <li>
          <h3>Tennis</h3>
          <article>Acabados de alta resistencia y durabilidad para canchas interiores o exteriores expuestas al sol y la lluvia.</article>
        </li>
        <li>
          <h3>Multiuso</h3>
          <article>Soluciones versátiles adaptadas a presupuestos y niveles de exigencia escolar, federado o recreativo.</article>
        </li> 
        <li>
          <h3>Muchas más</h3>
          <article>Cuéntanos tu necesidad, tenemos la solución...</article>
        </li>
      </ul>
    `,
  },
  {
    id: 3,
    slug:"pisos-epoxicos",
    title: "Pisos epóxicos",
    text: "Resistencia extrema con acabado profesional",
    image: servicesImg.epoxico.hero,
    waMessage: "Hola, estoy interesado en el servicio de pisos epóxicos ¿me podría dar más información?",
    badge: "",          // ← dejar vacío si no tiene badge
    gallery: servicesImg.epoxico.gallery, 
    description: `¿Necesitas que tu piso aguante cargas pesadas, derrames químicos o tránsito constante? 
                    En FloorEx diseñamos la solución epóxica a la medida de tu industria.`,
    benefits: [
      { icon: '📏', title: 'Autonivelante', desc: 'Ideal para reparar y nivelar superficies irregulares, creando una base monolítica y de alta resistencia mecánica' },
      { icon: '🚛', title: 'Alto tráfico', desc: 'Para zonas sometidas a paso continuo de personas, carretillas o vehículos' },
      { icon: '✨', title: 'Grado alimenticio', desc: 'Cumple con normativas sanitarias. Superficies lisas, sin poros, resistentes a ácidos y limpiezas agresivas.' },
    ],
    process: [
      { title: 'Análisis técnico', desc: 'Analizamos tu tipo de industria, nivel de desgaste, exposición a químicos y necesidades de limpieza para recomendar el sistema exacto.' },
      { title: 'Preparación o Recuperación', desc: 'Lijamos, saneamos o reparamos capas existentes si están dañadas, o preparamos el soporte base para garantizar una adherencia perfecta.' },
      { title: 'Aplicación especializada', desc: 'Aplicamos el sistema seleccionado (mortero, pintura de alto tráfico o grado alimenticio) logrando un acabado liso, brillante y duradero.' },
    ],
    seo: {
      title: "Pisos Epóxicos Industriales y Comerciales - FloorEx",
      description: `Recubrimientos epóxicos de alta resistencia para industrias,
                    talleres, parkings y laboratorios. Sistemas autonivelantes y de grado alimenticio.`,
      keywords:`pisos epoxicos, recubrimientos epoxicos, mortero autonivelante, pintura alto trafico, grado alimenticio, pisos industriales, reparacion pisos epoxicos`,
      ogImage: OG_IMAGE_DEFAULT,
      canonical: getCanonical("pisos-epoxicos"),
    },
    detail: `
      <h2>¿Dónde se usan?</h2>
      <ul>
        <li>
          <h3>Naves industriales & talleres mecánicos</h3>
          <article>Resistencia al impacto, grasas y aceites.</article>
        </li>
        <li>
          <h3>Garajes/Estacionamientos</h3>
          <article>Adiós al polvo del cemento.Superficies resistentes al tránsito vehicular y de fácil limpieza.</article>
        </li>
        <li>
          <h3>Laboratorios/clínicas</h3>
          <article>Superficie continua e higiénica sin juntas, ideal para entornos médicos que exigen asepsia estricta. </article>
        </li>
        <li>
          <h3>Cocinas industriales y plantas</h3>
          <article>Sistemas sin poros que cumplen normativas sanitarias, resistentes a ácidos y limpiezas agresivas.</article>
        </li>
        <li>
          <h3>Comercios y oficinas</h3>
          <article>Acabado liso, brillante y personalizable en color para no perjudicar la estética de tu marca.</article>
        </li>
        <li>
          <h3>Recuperación epóxica</h3>
          <article>Reparamos, lijamos y rehabilitamos capas epóxicas existentes rayadas u opacas sin necesidad de volver a cero.</article>
        </li>
        <li>
          <h3>Mucho más</h3>
          <article>Cuéntanos tu necesidad, tenemos la solución...</article>
        </li>
      </ul>
    `,
  },
  {
    id: 4,
    slug:"poliuretano-cementicio",
    title: "Poliuretano Cementicio (UQESH®)",
    text: "La tecnología que eligen los gigantes mundiales",
    image: servicesImg.cementicio.hero,
    waMessage: "Hola, estoy interesado en el servicio de poliuretano cementicio ¿me podría dar más información?",
    badge: "",          // ← dejar vacío si no tiene badge
    gallery: servicesImg.cementicio.gallery,
    description: `Cuando la exigencia es máxima, el piso no puede fallar. Por eso, gigantes mundiales
                  como iPhone, Colgate, Walmart, Bimbo, Hikvision, Coca Cola, Red Bull y muchas otras 
                  confían en la tecnología UQESH®️.
                  Somos distribuidores y aplicadores oficiales de la tecnología UQESH® en Ecuador.
                  Pisos híbridos ecológicos de máxima resistencia térmica, química y de alto tráfico.
                  ¿Qué hace tan especial al sistema UQESH®️?
                  A diferencia del epóxico tradicional, el poliuretano cementicio es un sistema híbrido
                  que combina la robustez del cemento con la flexibilidad avanzada del poliuretano.
                  El resultado: un piso que no se agrieta con los cambios de temperatura, resiste químicos
                  agresivos y soporta tráfico pesado sin deteriorarse. Y con UQESH®️, la diferencia es aún mayor:
                  su fórmula a base de aceite de ricino vegetal (no derivados del petróleo) es completamente ecológica, 
                  con certificación LEED y apta para contacto directo con alimentos.`,
    benefits: [
      { icon: '🌡️', title: 'Resistencia térmica', desc: 'Soporta choques térmicos desde -40°C hasta +150°C, ideal para cámaras frigoríficas o lavado con vapor.' },
      { icon: '🧪', title: 'Química superior',    desc: 'Resiste ácidos, álcalis, grasas, aceites y limpiezas agresivas sin degradarse ni perder propiedades.' },
      { icon: '🛡️', title: 'Durabilidad extrema', desc: 'Hasta 3 veces más resistente a la abrasión y al tráfico pesado que los epóxicos convencionales.' },
      { icon: '🌱', title: 'Ecológico y seguro',   desc: 'Fórmula a base de aceite de ricino vegetal con certificación LEED, libre de solventes y apto para alimentos.' },
      { icon: '🧼', title: 'Higiene total',       desc: 'Superficie lisa, continua y sin juntas que evita la acumulación de bacterias, antideslizante incluso mojado.' },
    ],
    process: [
      { title: 'Asesoría y Selección', desc: 'Analizamos las necesidades de tu operación (temperaturas, químicos, tráfico) para definir el espesor y sistema exacto.' },
      { title: 'Preparación de Superficie', desc: 'Saneamos y preparamos mecánicamente el soporte (o recuperamos el piso dañado) para asegurar un anclaje perfecto del sistema híbrido.' },
      { title: 'Aplicación / Suministro', desc: 'Ejecutamos la aplicación llave en mano con nuestro equipo técnico certificado o realizamos la venta directa de la materia prima.' },
    ],
    seo: {
      title: "Pisos de Poliuretano Cementicio UQESH® en Ecuador - FloorEx",
      description: `Distribuidores autorizados de tecnología UQESH®. Pisos híbridos de 
                    poliuretano cementicio para industrias de alimentos,
                    frigoríficos y alta exigencia térmica.`,
      keywords: `poliuretano cementicio, uqesh ecuador, pisos industriales, grado alimenticio, pisos para frigorificos, mortero cementicio, floorex`,
      ogImage: OG_IMAGE_DEFAULT,
      canonical: getCanonical("poliuretano-cementicio"),
    },
    detail: `
      <h2>¿Dónde lo instalamos?</h2>
      <ul>
        <li>
          <h3>Industria Alimenticia y Bebidas</h3>
          <article>Plantas de procesamiento de grado alimenticio, cocinas industriales, restaurantes y cámaras frigoríficas.</article>
        </li>
        <li>
          <h3>Farmacéuticas y Laboratorios</h3>
          <article>Espacios que exigen un control estricto de higiene, superficies sin juntas y resistencia a químicos agresivos.</article>
        </li>
        <li>
          <h3>Zonas de Carga y Manufactura</h3>
          <article>Naves industriales, talleres, estacionamientos y áreas expuestas al arrastre constante y tráfico pesado.</article>
        </li>
        <li>
          <h3>Áreas Antiestáticas</h3>
          <article>Sistemas adaptados para cumplir con requisitos especiales en la industria electrónica y data centers.</article>
        </li>
        <li>
          <h3>Recuperación de Pisos</h3>
          <article>Evaluamos y rehabilitamos superficies dañadas aplicando morteros autonivelantes para ambientes extremos.</article>
        </li>
      </ul>
    `,
  },
  {
     id: 5,
     slug:"preparacion-superficies",
     title: "Preparación de Superficies",
     text: "La base que define un piso exitoso",
     image: servicesImg.superficies.hero, // ← Puedes mapearlo en tu archivo de imágenes si agregas este servicio
     waMessage: "Hola, estoy interesado en el servicio de preparación de superficies de concreto ¿me podría dar más información?",
     badge: "",          // ← dejar vacío si no tiene badge
     gallery: servicesImg.superficies.gallery,
     description:`Un recubrimiento solo es tan bueno como la superficie sobre la que se aplica. En FloorEx preparamos el hormigón con maquinaria profesional, escarificación y pulido mecánico.`,

     benefits: [
       { icon: '🏗️', title: 'Adherencia absoluta', desc: 'Evita desprendimientos prematuros, grietas o pérdida de adherencia. Tu nuevo piso se agarra de verdad.' },
       { icon: '⚙️', title: 'Criterio técnico',     desc: 'Preparamos el hormigón sin atajos, utilizando maquinaria profesional y adaptándonos a cada necesidad.' },
       { icon: '📈', title: 'Mayor durabilidad',  desc: 'Garantiza que cualquier recubrimiento epóxico, deportivo o de poliuretano dure años sin fallas estructurales.' },
     ],
     process: [
       { title: 'Evaluación del Soporte', desc: 'Analizamos la losa original para determinar el nivel de contaminación por grasas, aceites o revestimientos viejos.' },
       { title: 'Tratamiento Mecánico', desc: 'Escarificamos, pulimos o removemos capas débiles para nivelar imperfecciones y limpiar profundamente el concreto.' },
       { title: 'Perfil de Anclaje', desc: 'Creamos la rugosidad justa (CSP 1 al 9) mediante técnicas de precisión según el tipo de sistema que se vaya a aplicar.' },
     ],
     seo: {
       title: "Preparación de Superficies de Concreto y Hormigón - FloorEx",
       description:`Preparación técnica del concreto mediante escarificación, desbaste mecánico 
                    y perfil de anclaje (CSP 1 al 9). Asegura la máxima adherencia de tus resinas.`,
       keywords: `preparacion de superficies, escarificacion concreto, pulido mecanico, perfil de anclaje, csp concreto, remover epoxico, lavado industrial`,
       ogImage: OG_IMAGE_DEFAULT,
      canonical: getCanonical("preparacion-superficies"),
     },
     detail: `
      <h2>¿Qué metodologías aplicamos?</h2>
      <ul>
        <li>
          <h3>Escarificación</h3>
          <article>Eliminamos capas débiles, pinturas sueltas o selladores viejos, dejando el concreto rugoso y completamente limpio.</article>
        </li>
        <li>
          <h3>Pulido mecánico</h3>
          <article>Nivelamos imperfecciones superficiales y cerramos la base cuando se busca un acabado fino o preparación para diamantes.</article>
        </li>
        <li>
          <h3>Lavado a alta presión</h3>
          <article>Uso de agua caliente para arrasar grasas, aceites, residuos químicos y suciedad incrustada en talleres y naves industriales.</article>
        </li>
        <li>
          <h3>Retiro de revestimientos</h3>
          <article>Levantamos epóxicos viejos, uretanos, pinturas o adhesivos previos de forma eficiente sin dañar la losa original.</article>
        </li>
        <li>
          <h3>Perfil de anclaje (CSP 1 a 9)</h3>
          <article>Generamos la rugosidad exacta requerida por el fabricante del recubrimiento, desde autonivelantes hasta morteros de alta carga.</article>
        </li>
      </ul>
    `,
  },
  {
    id: 6,
    slug:"senaletica-vial-industrial",
    title: "Señalética vial e industrial",
    text: "Orden, seguridad y eficiencia en tu piso",
    image: servicesImg.señaletica.hero,
    waMessage: "Hola, estoy interesado en el servicio de señalética vial e industrial ¿me podría dar más información?",
    badge: "",          // ← dejar vacío si no tiene badge
    gallery: servicesImg.señaletica.gallery,
    description: `Un piso impecable no basta si tu personal o visitantes 
                  no saben por dónde transitar, dónde almacenar o cómo evacuar.
                  La señalética industrial es la diferencia entre un espacio funcional
                  y uno realmente seguro.En FloorEx diseñamos y aplicamos señalización 
                  horizontal y vertical sobre superficies de concreto, epóxico o poliuretano con pinturas
                  de alta resistencia que soportan el tránsito y la limpieza de tu operación.`,
    benefits: [
      { icon: '🛡️', title: 'Seguridad total', desc: 'Delimitamos áreas de paso, zonas de carga, riesgos eléctricos, salidas de emergencia y extintores.' },
      { icon: '📊', title: 'Organización visual', desc: 'Pasillos, estacionamientos, líneas de producción y zonas de almacenamiento claramente identificados.' },
      { icon: '🚜', title: 'Alta durabilidad', desc: 'Resiste el arrastre de montacargas, rodillos, grasas, químicos y lavados frecuentes sin borrarse.' },
      { icon: '👁️', title: 'Alta visibilidad', desc: 'Colores de alto contraste (amarillo, rojo, verde, blanco, negro) bajo cualquier tipo de iluminación.' },
      { icon: '📋', title: 'Cumplimiento normativo', desc: 'Adaptamos la señalética a las normativas vigentes del país y estándares internacionales (ISO, INEN, NFPA).' },
    ],

    process: [
      { title: 'Relevamiento y Diseño', desc: 'Analizamos el flujo de tu operación para diseñar la distribución de pasillos, racks, zonas de carga o estacionamientos.' },
      { title: 'Selección del Sistema', desc: 'Elegimos la pintura de alta resistencia (epóxica, poliuretánica o vial) adecuada según el tipo de soporte y desgaste mecánico.' },
      { title: 'Demarcación y Aplicación', desc: 'Trazamos y aplicamos las líneas, símbolos y flechas con acabados nítidos, colores de alto contraste y secado rápido.' },
    ],
    seo: {
      title: "Señalización Vial e Industrial y Demarcación - FloorEx",
      description: "Diseño y aplicación de señalización horizontal de alto tráfico para industrias, bodegas y estacionamientos. Cumplimiento de normas ISO e INEN.",
      keywords: "senaletica industrial, senalizacion vial, demarcacion de pisos, pintura de alto trafico, delimitar pasillos industriales, floorex",
      ogImage: OG_IMAGE_DEFAULT,
      canonical: getCanonical("senaletica-vial-industrial"),
    },
    detail: `
      <h2>¿Dónde la aplicamos?</h2>
      <ul>
        <li>
          <h3>Naves industriales y bodegas</h3>
          <article>Optimización del espacio de almacenamiento y delimitación de rutas seguras para montacargas.</article>
        </li>
        <li>
          <h3>Plantas de producción y líneas de ensamble</h3>
          <article>Organización visual de estaciones de trabajo, áreas de peligro y zonas de tránsito peatonal.</article>
        </li>
        <li>
          <h3>Estacionamientos y rampas</h3>
          <article>Pintura de tráfico para cajones de parqueo, flechas de dirección, pasos peatonales y numeración.</article>
        </li>
        <li>
          <h3>Hospitales, laboratorios y comercios</h3>
          <article>Señalización clara de zonas restringidas, accesos de emergencia y centros de distribución de alta rotación.</article>
        </li>
        <li>
          <h3>Talleres y áreas de mantenimiento</h3>
          <article>Demarcación resistente al derrame de grasas, aceites y productos químicos agresivos.</article>
        </li>
      </ul>
    `,
  }
];
//--------ServiceDetail.jsx-------// 
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BreadcrumbSchema, FAQSchema } from '../Components/Seo/ServiceSchema.jsx';
import { services } from '../Data/ServiceDetail.js';
import styles from './ServiceDetail.module.css';

import ServiceSchema from '../Components/Seo/ServiceSchema.jsx';

export default function ServiceDetail() {
  const { slug } = useParams();


  const currentIndex = services.findIndex((s) => s.slug === slug);
  const service = services[currentIndex];
  const nextService = services[currentIndex + 1] || null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!service) {
    return (
      <div className={styles.notFound}>
        <p>Servicio no encontrado.</p>
        <Link to="/">← Volver al inicio</Link>
      </div>
    );
  }

  const waUrl = `https://wa.me/593987844281?text=${encodeURIComponent(service.waMessage)}`;

  return (
    <div className={styles.page}>

      {/* ── SEO ──────────────────────────────────────────── */}
      <Helmet>
        {/* Básicos */}
        <title>{service.seo.title}</title>
        <meta name="description" content={service.seo.description} />
        <link rel="canonical"    href={service.seo.canonical} />

        {/* Open Graph — WhatsApp, Facebook, LinkedIn */}
        <meta property="og:type"         content="article" />
        <meta property="og:url"          content={service.seo.canonical} />
        <meta property="og:title"        content={service.seo.title} />
        <meta property="og:description"  content={service.seo.description} />
        <meta property="og:image"        content={service.seo.ogImage} />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale"       content="es_EC" />
        <meta property="og:site_name"    content="FloorEx" />

        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={service.seo.title} />
        <meta name="twitter:description" content={service.seo.description} />
        <meta name="twitter:image"       content={service.seo.ogImage} />
      </Helmet>

      <ServiceSchema service={service} />

      <BreadcrumbSchema items={[
        { name: 'Inicio', url: 'https://TU_DOMINIO.ec/' },
        { name: 'Servicios', url: 'https://TU_DOMINIO.ec/#services' },
        { name: service.title, url: service.seo.canonical },
      ]} />
      <FAQSchema items={service.faq.map(f => ({
        question: f.question,
        answer: f.answer,
      }))} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBreadcrumb}>
            <Link to="/#services" className={styles.breadcrumbLink}>Servicios</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span>{service.title}</span>
          </div>

          {service.badge && (
            <span className={styles.badge}>{service.badge}</span>
          )}

          <h1 className={styles.heroTitle}>{service.title}</h1>
          <p className={styles.heroText}>{service.text}</p>

          <div className={styles.heroCta}>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.528 5.854L0 24l6.336-1.503A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.01-1.378l-.36-.214-3.732.885.936-3.618-.235-.372A9.793 9.793 0 012.182 12C2.182 6.565 6.565 2.182 12 2.182S21.818 6.565 21.818 12 17.435 21.818 12 21.818z"/>
              </svg>
              Solicitar cotización
            </a>

            {nextService ? (
              <Link to={`/servicio/${nextService.slug}`} className={styles.btnOutline}>
                {nextService.title} →
              </Link>
            ) : (
              <Link to="/#services" className={styles.btnOutline}>
                Ver todos los servicios
              </Link>
            )}
          </div>
        </div>

        <div className={styles.heroImageWrap}>
          <img
            src={service.image}
            alt={service.title}
            className={styles.heroImage}
            width ="1200"
            height ="800"
            loading="eager"
            fetchPriority="high"
          />
          <div className={styles.heroImageOverlay} />
        </div>
      </section>

      {/* ── DESCRIPCIÓN ──────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Descripción</div>
          <p className={styles.description}>{service.description}</p>
          <div
            className={styles.detailHtml}
            dangerouslySetInnerHTML={{ __html: service.detail }}
          />
        </div>
      </section>

      {/* ── BENEFICIOS ───────────────────────────────────── */}
      {service.benefits && service.benefits.length > 0 && (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>Ventajas</div>
            <h2 className={styles.sectionTitle}>¿Por qué elegirlo?</h2>
            <div className={styles.benefitsGrid}>
              {service.benefits.map((b, i) => (
                <div key={i} className={styles.benefitCard}>
                  <span className={styles.benefitIcon}>{b.icon}</span>
                  <strong className={styles.benefitTitle}>{b.title}</strong>
                  <p className={styles.benefitDesc}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── GALERÍA ──────────────────────────────────────── */}
      {service.gallery && service.gallery.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>Galería</div>
            <h2 className={styles.sectionTitle}>Proyectos realizados</h2>
            <div className={styles.gallery}>
              {service.gallery.map((img, i) => (
                <div
                  key={i}
                  className={`${styles.galleryItem} ${i === 0 ? styles.galleryFeatured : ''}`}
                >
                  <img 
                    src={img}
                    alt={`${service.title} — proyecto ${i + 1}`} 
                    width="1200"
                    height="800"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROCESO ──────────────────────────────────────── */}
      {service.process && service.process.length > 0 && (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>Proceso</div>
            <h2 className={styles.sectionTitle}>¿Cómo trabajamos?</h2>
            <ol className={styles.processList}>
              {service.process.map((step, i) => (
                <li key={i} className={styles.processStep}>
                  <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <strong className={styles.stepTitle}>{step.title}</strong>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}
      {/* ── PREGUNTAS FRECUENTES (Visual) ────────────────── */}
      {service.faq && service.faq.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>FAQ</div>
            <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
            
            <div className={styles.faqList}>
              {service.faq.map((item, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <p className={styles.ctaLabel}>¿Listo para empezar?</p>
          <h2 className={styles.ctaTitle}>Hablemos de tu proyecto</h2>
          <p className={styles.ctaSub}>
            ¡Basta bots! Cuéntanos qué necesitas y te damos una cotización personalizada y sin compromiso.
          </p>
          <div className={styles.ctaButtons}>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.528 5.854L0 24l6.336-1.503A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.01-1.378l-.36-.214-3.732.885.936-3.618-.235-.372A9.793 9.793 0 012.182 12C2.182 6.565 6.565 2.182 12 2.182S21.818 6.565 21.818 12 17.435 21.818 12 21.818z"/>
              </svg>
              Hablar con una persona
            </a>

            {nextService ? (
              <Link to={`/servicio/${nextService.slug}`} className={styles.btnOutline}>
                Ver siguiente servicio →
              </Link>
            ) : (
              <Link to="/#services" className={styles.btnOutline}>
                Ver todos los servicios
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
//--------maquinariaDetail.js-----//
import { productImg } from './ProductImg.js'

const BASE_URL = "https://www.floorex.ec";
const getCanonical = (slug) => `${BASE_URL}/producto/${slug}`;

export const productos = [
  {
   id: 1,
   slug: "pulidora-portatil-xingyi-gx250",
   title: "Pulidora de bordes portátil XINGYI GX250",
   subtitle: "Acabado profesional en bordes y superficies reducidas",
   badge: "Oferta mes de mayo",
   text: "Equipada con motor síncrono de imanes permanentes y control vectorial avanzado. Rendimiento superior y arranque suave incluso en condiciones de bajo voltaje.",
   description:
     "La pulidora de bordes portátil XINGYI GX250 redefine la eficiencia en la preparación de superficies. Gracias a su motor síncrono de imanes permanentes de alta eficiencia y sus algoritmos avanzados de control vectorial, este equipo opera sin esfuerzo incluso en entornos con caídas de voltaje de hasta 200V. Su sistema inteligente gestiona de forma estable la corriente de desbaste grueso dentro de los 5 amperios, superando ampliamente a los modelos tradicionales del mercado. Además, cuenta con un capacitor integrado de gran capacidad que asiste en el arranque para proteger la red eléctrica.",
   price: "$2.100,00",
   waMessage:
     "Hola FloorEx! Estoy interesado en la Pulidora de bordes portátil XINGYI GX250. ¿Pueden darme más información y precio actualizado?",
   // Fotos del mismo producto (carrusel en hero)
   images: productImg.pulidoras.gallery,
   specs: [
     { label: "Motor", value: "1,5 kW / 1,5 HP" },
     { label: "Velocidad de rotación", value: "350 - 1500 rpm" },
     { label: "Plato de trabajo", value: "250 mm" },
     { label: "Peso", value: "60 kg" },
     { label: "Voltaje", value: "220V" },
     { label: "Inversor", value: "2,2 kW/3 HP" },
   ],
   advantages: [
     { icon: "⚡", title: "Motor Avanzado", desc: "Motor síncrono de imanes permanentes con control vectorial para máxima eficiencia." },
     { icon: "📉", title: "Bajo Voltaje", desc: "Arranca y opera sin problemas en entornos con tensiones de hasta 200V." },
     { icon: "🔋", title: "Arranque Protegido", desc: "Capacitor integrado que asiste en el encendido, manteniendo la corriente bajo los 10A para proteger el motor y la red." },
     { icon: "🚶", title: "Encendido Suave", desc: "Inicia de forma fluida y segura incluso con el operario parado sobre la máquina." },
     { icon: "🛠️", title: "Multifuncional", desc: "Compatible con pads diamantados, pads de resina, copas diamantadas y bouchardas para cualquier tipo de trabajo." },
     { icon: "📊", title: "Consumo Eficiente", desc: "Corriente de desbaste estable dentro de los 5 amperios, optimizando el consumo frente a modelos tradicionales." },
   ],
   seo: {
     title: "Pulidora de bordes portátil XINGYI GX250 | FloorEx",
     description:
       "Pulidora portátil XINGYI GX250 de alto rendimiento. Motor de imanes permanentes, arranque suave bajo 10A y excelente estabilidad a bajo voltaje.",
     keywords: "pulidora de bordes, XINGYI GX250, pulidora portátil, maquinaria para pisos, FloorEx",
     canonical: getCanonical("pulidora-portatil-xingyi-gx250"),
     ogImage: `${BASE_URL}/seo/openGraph.webp`,
   },
  },
  {
    id: 2,
    slug: "aspiradora-industrial",
    title: "Aspiradora industrial IVC-F65L",
    subtitle: "Elimina el polvo mediante filtro de agitación de alta eficiencia",
    badge: "Oferta mes de mayo",
    text: "El complemento ideal para pulidoras pequeñas y medianas. Diseñada para entornos industriales y comerciales, reduce drásticamente el polvo en suspensión asegurando un espacio de trabajo limpio y saludable.",
    description:
      "La aspiradora industrial IVC-F65L destaca por ser un equipo compacto pero completamente equipado, ideal para acompañar operaciones de desbaste y pulido en áreas comerciales e industriales. Cuenta con un potente motor de la reconocida marca estadounidense AMETEK, que ofrece una fuerza de succión excepcional y un caudal de aire superior, triplicando la vida útil de los motores de aspiración comerciales comunes. Su estructura robusta está fabricada íntegramente con cuerpo de acero y marco metálico de alta resistencia, superando a las alternativas plásticas del mercado. Además, incorpora un tanque de recolección de 65 litros con un sistema de elevación patentado que facilita un vaciado rápido, flexible y con un sellado hermético impecable.",
    price: "$1.250,00",
    waMessage:
      "Hola FloorEx! Me interesa la Aspiradora industrial IVC-F65L. ¿Pueden darme información y precio actualizado?",
    images: productImg.aspiradora.gallery,
    specs: [
      { label: "Motor", value: "2,2 kW / 3 HP (USA AMETEK)" },
      { label: "Caudal de aire", value: "350 m³/h (206 cfm)" },
      { label: "Diámetro de toma", value: "50 mm" },
      { label: "Capacidad de tanque", value: "65 Litros" },
      { label: "Peso", value: "68 kg" },
      { label: "Voltaje", value: "220V - 240V" },
    ],
    advantages: [
      { 
        icon: "🛡️", 
        title: "Filtro de Fibra de Vidrio", 
        desc: "Material importado de alta eficiencia. Retiene partículas de 3 a 5 μm con una efectividad del 99.9%." 
      },
      { 
        icon: "🚀", 
        title: "Motor USA AMETEK", 
        desc: "Fuerte poder de succión y alto caudal de aire. Su vida útil triplica la de un motor comercial ordinario." 
      },
      { 
        icon: "🏗️", 
        title: "Estructura Ultra Resistente", 
        desc: "Cuerpo de acero y chasis metálico duradero, evitando los componentes plásticos comunes del mercado." 
      },
      { 
        icon: "🔄", 
        title: "Compatibilidad XINGYI", 
        desc: "Equipada con ruedas industriales universales para fácil transporte y conexión directa con máquinas XINGYI." 
      },
      { 
        icon: "🪣", 
        title: "Depósito Móvil Removible", 
        desc: "Cubo de polvo de gran capacidad que reduce drásticamente la frecuencia de las limpiezas durante la jornada." 
      },
      { 
        icon: "⚙️", 
        title: "Sistema de Elevación Patentado", 
        desc: "Chasis con diseño de elevación patentado para extraer el tanque de 65L más rápido, garantizando hermeticidad y flexibilidad." 
      },
    ],
    seo: {
      title: "Aspiradora Industrial IVC-F65L | FloorEx",
      description: "Aspiradora industrial IVC-F65L de 65L con motor USA AMETEK de 3HP y filtro de fibra de vidrio (99.9% eficiencia). Ideal para pulidoras y control de polvo.",
      keywords: "aspiradora industrial, IVC F65L, extractor de polvo, maquinaria para pisos, XINGYI, FloorEx",
      canonical: getCanonical("aspiradora-industrial"),
      ogImage: `${BASE_URL}/seo/openGraph.webp`,
    },
  },
  {
    id: 3,
    slug: "pulidora-control-remoto",
    title: "Pulidora a Control Remoto Xingyi GX858",
    subtitle: "Máquina industrial de alto rendimiento para preparación y pulido de superficies",
    badge: "Alto Rendimiento",
    text: "Máquina industrial diseñada para el desbaste, pulido y abrillantado de grandes superficies de hormigón, terrazo y piedra.",
    description:
      "La pulidora a control remoto Xingyi GX858 es una solución de alta gama para proyectos de construcción y renovación. Ideal para eliminar revestimientos viejos, nivelar superficies y lograr acabados profesionales con el mínimo esfuerzo del operario gracias a su sistema de guiado autónomo.",
    price: "$14.500,00",
    waMessage:
      "Hola FloorEx! Me interesa la pulidora a control remoto Xingyi GX858. ¿Pueden darme información y precio actualizado?",
    images: productImg.pulidoraRemoto.gallery,
    specs: [
      { label: "Voltaje", value: "220V-240 V" },
      { label: "Motor", value: "15 kW / 20 HP" },
      { label: "Inversor", value: "20 HP" },
      { label: "Ancho de trabajo", value: "820 mm" },
      { label: "Discos", value: "4 cabezales (Sistema planetario)" },
      { label: "Rango de velocidad", value: "450 - 1950 rpm" },
      { label: "Peso", value: "595,5 kg" },
      { label: "Peso adicional", value: "15 kg x 2 (33 lb x 2)"},
      { label: "Depósito de agua", value: "30 litros"}
    ],
    advantages: [
      { 
        icon: "🕹️", 
        title: "Operación a Distancia", 
        desc: "Control remoto con joystick que reduce la fatiga del operario y aumenta la productividad en largas jornadas." 
      },
      { 
        icon: "♻️", 
        title: "Sistema Planetario", 
        desc: "Equipada con cuatro discos giratorios que garantizan un desgaste uniforme y una planimetría perfecta." 
      },
      { 
        icon: "🔋", 
        title: "Batería Auxiliar", 
        desc: "Permite mover y cargar la máquina en vehículos de transporte sin necesidad de conectarla a la red eléctrica." 
      },
      { 
        icon: "⚡", 
        title: "Velocidad Ajustable", 
        desc: "Control total sobre la velocidad de avance de las ruedas y de las revoluciones de los discos (450-1950 rpm)." 
      },
      { 
        icon: "💥", 
        title: "Remoción Eficiente", 
        desc: "Excelente fuerza de desbaste ideal para arrancar capas de resinas epoxi, adhesivos y pinturas viejas." 
      },
      { 
        icon: "✨", 
        title: "Acabados Profesionales", 
        desc: "Lista para procesos de diamantado y pulido progresivo hasta alcanzar el nivel de brillo deseado." 
      },
    ],
    seo: {
      title: "Pulidora Xingyi GX858 a Control Remoto | FloorEx Ecuador",
      description: "Adquiere la pulidora industrial Xingyi GX858 en Ecuador. Alto rendimiento para desbaste, remoción de epoxi y pulido de hormigón con control remoto.",
      keywords: "pulidora industrial, xingyi gx858, pulidora control remoto, pulido de hormigón, desbaste de pisos, floorex",
      canonical: getCanonical("pulidora-control-remoto"),
      ogImage: `${BASE_URL}/seo/openGraph.webp`,
    },
  },
  {
    id: 4,
    slug: "aspiradora-industrial-ivcl45l",
    title: "Aspiradora industrial IVC45L (manual)",
    subtitle: "Extractor de polvo de alta capacidad con diseño de elevación y filtrado HEPA 13",
    badge: "Alto Rendimiento",
    text: "Diseñada para las exigencias del desbaste industrial, combina un potente caudal de aire con un sistema de filtrado en dos etapas para capturar el polvo más fino sin saturarse.",
    description:
      "La aspiradora industrial IVC45L (manual) es una solución robusta y eficiente para la gestión de residuos en proyectos de preparación de superficies. Destaca por su innovador diseño de barril elevable asistido por resortes de gas, que permite compactar el equipo reduciendo su altura en 30 cm para facilitar un transporte cómodo. Su avanzado sistema de filtración de dos etapas incluye un separador ciclónico en primera instancia y un filtro de grado médico HEPA 13 en la segunda, garantizando un aire libre de partículas nocivas. Además, su panel de control centralizado y el sistema de embolsado continuo aseguran una operación limpia, rápida y segura para la salud del operario.",
    price: "$5.500,00",
    waMessage:
      "Hola FloorEx! Me interesa la aspiradora industrial IVC45L. ¿Pueden darme información y precio actualizado?",
    images: productImg.aspiradoraivc45.gallery,
    specs: [
      { label: "Voltaje", value: "220V-240 V" },
      { label: "Motor", value: "5,5 kW / 7,5 HP" },
      { label: "Caudal de aire", value: "600m3/h (353 cfm)" },
      { label: "Diámetro de succión", value: "50 mm/80 mm" },
      { label: "Peso", value: "223 kg" },
      { label: "Filtro", value: "Hepa 13 2,8 m2" },
    ],
    advantages: [
      { 
        icon: "🏗️", 
        title: "Diseño de Barril Elevable", 
        desc: "Sistema de elevación asistido por resorte de gas que reduce la altura en 30 cm para optimizar el espacio de transporte." 
      },
      { 
        icon: "🌀", 
        title: "Separador Ciclónico", 
        desc: "Filtración de primera etapa mediante supresión de polvo por vórtice, bloqueando las partículas gruesas antes de llegar al filtro." 
      },
      { 
        icon: "🛡️", 
        title: "Filtro HEPA 13 Absoluto", 
        desc: "Segunda etapa con filtro de alta eficiencia capaz de absorber de manera firme el polvo más fino y peligroso en suspensión." 
      },
      { 
        icon: "🎛️", 
        title: "Panel Central Integrado", 
        desc: "Consola de mandos centralizada y de diseño intuitivo para un control y operación ágil durante la jornada de trabajo." 
      },
      { 
        icon: "🥡", 
        title: "Embolsado Continuo Longopac", 
        desc: "Equipada con sistema de bolsa continua que proporciona una descarga de residuos rápida, segura y completamente libre de nubes de polvo." 
      },
      { 
        icon: "📉", 
        title: "Menor Presión de Mantenimiento", 
        desc: "Su sistema multicapa retiene de forma eficiente la suciedad prolongando los intervalos de limpieza de los filtros." 
      },
    ],
    seo: {
      title: "Aspiradora Industrial IVC45L | FloorEx Ecuador",
      description: "Adquiere la aspiradora industrial IVC45L de 7.5 HP en Ecuador. Filtración HEPA 13 de dos etapas, diseño elevable compacto y embolsado continuo sin polvo.",
      keywords: "aspiradora industrial, IVC45L, extractor de polvo, filtrado HEPA 13, longopac, maquinaria para pisos, floorex",
      canonical: getCanonical("aspiradora-industrial-ivcl45l"),
      ogImage: `${BASE_URL}/seo/openGraph.webp`,
    },
  },
{
    id: 5,
    slug: "rectificadora-de-suelo-gx550",
    title: "Rectificadora de suelo Xingyi GX550",
    subtitle: "Pulidora planetaria industrial de alta resistencia con caja de engranajes de aleación dual",
    badge: "Tecnología Avanzada",
    text: "La evolución de las series clásicas Q/X de XINGYI. Equipada con un sistema planetario de 3 cabezales de mínimo mantenimiento y un chasis robusto con presión de desbaste ajustable.",
    description:
      "La rectificadora y pulidora de suelo Xingyi GX550 representa el pináculo de la evolución técnica de la marca, perfeccionada a partir de las legendarias series Q/X que lideraron el mercado por más de 16 años. Este modelo destaca por incorporar la tecnología patentada de fundición para cajas de engranajes de aleación dual de XINGYI, lo que reduce drásticamente la necesidad de mantenimiento en sus 3 cabezales planetarios. Su estructura de acero soldado de alta resistencia cuenta con un manillar de operación ergonómico y un sistema de pesas adicionales de dos posiciones que permite al operario regular con precisión la presión sobre el suelo según el tipo de trabajo.",
    price: "$5.900,00",
    waMessage:
      "Hola FloorEx! Me interesa la rectificadora de suelo GX550. ¿Pueden darme información y precio actualizado?",
    images: productImg.rectificadora.gallery,
    specs: [
      { label: "Voltaje", value: "220V-240 V" },
      { label: "Motor", value: "4 kW / 5,5 HP" },
      { label: "Discos", value: "230 mm x 3 (3 cabezales)" },
      { label: "Peso", value: "221 kg" },
      { label: "Peso adicional", value: "20kg x 2 (88 lb)" },
      { label: "Depósito de agua", value: "25 litros" },
    ],
    advantages: [
      { 
        icon: "⚙️", 
        title: "Caja de Aleación Dual", 
        desc: "Tecnología de fundición avanzada de XINGYI que garantiza una transmisión hermética y un nivel de mantenimiento extremadamente bajo." 
      },
      { 
        icon: "🪐", 
        title: "Sistema Planetario de 3 Cabezales", 
        desc: "Distribución perfecta de la fuerza rotativa en sus discos de 230 mm para lograr una planimetría uniforme y acabados de nivel profesional." 
      },
      { 
        icon: "🏋️", 
        title: "Presión Ajustable en 2 Posiciones", 
        desc: "Chasis diseñado para albergar pesas adicionales (20 kg x 2), permitiendo adaptar el peso y la agresividad del desbaste según la dureza del suelo." 
      },
      { 
        icon: "🔩", 
        title: "Estructura de Acero Reforzada", 
        desc: "Cuerpo de la máquina con soldadura industrial pesada que absorbe las vibraciones y prolonga la vida útil del equipo en entornos exigentes." 
      },
      { 
        icon: "⚡", 
        title: "Motor e Inversor de Última Generación", 
        desc: "Componentes electrónicos desarrollados con la tecnología más reciente, optimizados específicamente para los ciclos de carga de XINGYI." 
      },
      { 
        icon: "⏳", 
        title: "16 Años de Evolución", 
        desc: "Un equipo heredero de las series clásicas Q/X, optimizado tras más de una década y media de pruebas y rendimiento probado en el mercado global." 
      },
    ],
    seo: {
      title: "Rectificadora de suelo Xingyi GX550 | FloorEx Ecuador",
      description: "Descubre la pulidora planetaria industrial Xingyi GX550 de 5.5 HP en Ecuador. Caja de cambios de aleación dual, 3 cabezales y presión de desbaste regulable.",
      keywords: "rectificadora de suelo, Xingyi GX550, pulidora planetaria, desbaste de pisos, maquinaria industrial, pulido de hormigón, floorex",
      canonical: getCanonical("rectificadora-de-suelo-gx550"),
      ogImage: `${BASE_URL}/seo/openGraph.webp`,
    },
  },
  {
    id: 6,
    slug: "aspiradora-industrial-xingyi-ivc-v3",
    title: "Aspiradora Industrial Xingyi IVC-V3",
    subtitle: "Aspirador comercial de alta eficiencia diseñado para pulidoras de hormigón",
    badge: "Alta Eficiencia",
    text: "Equipo compacto y potente diseñado especialmente para la recolección eficiente de polvo en trabajos de desbaste y pulido.",
    description:
      "La Xingyi IVC-V3 es una aspiradora comercial robusta desarrollada específicamente para trabajar en conjunto con pulidoras de hormigón. Cuenta con un sistema avanzado de filtro de cartucho (tipo órgano) y un contenedor de polvo con ruedas que facilita su transporte y optimiza las jornadas de trabajo libres de polvo.",
    price: "$2.500,00",
    waMessage:
      "Hola FloorEx! Me interesa la aspiradora industrial Xingyi IVC-V3. ¿Pueden darme información y precio actualizado?",
    images: productImg.aspiradorav3.gallery,
    specs: [
      { label: "Voltaje", value: "220V-240 V" },
      { label: "Motor", value: "3,3 kW" },
      { label: "Caudal de aire", value: "538 m3/h (225 cfm)" },
      { label: "Succión", value: "22 kPa/220 mbar" },
      { label: "Peso", value: "92 Kg" },
      { label: "Tamaño de manguera", value: "80 mm" },
    ],
    advantages: [
      { 
        icon: "🏗️", 
        title: "Diseño Especializado", 
        desc: "Desarrollada específicamente para conectarse y trabajar en conjunto con pulidoras de hormigón." 
      },
      { 
        icon: "🌪️", 
        title: "Alta Eficiencia", 
        desc: "Excelente capacidad de recolección de partículas suspendidas, manteniendo el entorno de trabajo limpio." 
      },
      { 
        icon: "🫁", 
        title: "Filtro de Cartucho", 
        desc: "Equipada con un sistema de filtro plisado (tipo órgano) que optimiza el flujo de aire y retiene el polvo fino." 
      },
      { 
        icon: "🛒", 
        title: "Contenedor Móvil", 
        desc: "La caja recolectora de polvo integra ruedas independientes para un vaciado rápido y sin esfuerzo." 
      },
      { 
        icon: "📦", 
        title: "Estructura Compacta", 
        desc: "Su tamaño optimizado permite ubicarla fácilmente en zonas estrechas de la obra sin estorbar." 
      },
      { 
        icon: "🧳", 
        title: "Fácil de Transportar", 
        desc: "Diseño ligero y maniobrable que facilita su carga, traslado en vehículos y movimiento en el proyecto." 
      },
    ],
    seo: {
      title: "Aspiradora Industrial Xingyi IVC-V3 | FloorEx Ecuador",
      description: "Compra la aspiradora comercial Xingyi IVC-V3 en Ecuador. Diseñada para pulidoras de hormigón, con filtro de alta eficiencia y recolector móvil.",
      keywords: "aspiradora industrial, xingyi ivc-v3, aspirador comercial, recolector de polvo, pulido de hormigón, floorex",
      canonical: getCanonical("aspiradora-industrial-xingyi-ivc-v3"),
      ogImage: `${BASE_URL}/seo/openGraph.webp`,
    },
  },
];

//--------maquinariaDetail.jsx-----//
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { ProductSchema, BreadcrumbSchema } from '../Components/Seo/ServiceSchema.jsx';
import { productos } from '../Data/MaquinariaDetail.js';
import styles from './MaquinariaDetail.module.css';

export default function MaquinariaDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const currentIndex = productos.findIndex((p) => p.slug === slug);
  const producto = productos[currentIndex];

  // Carrusel de fotos del producto actual
  const [activeImg, setActiveImg] = useState(0);

  // Resetear imagen activa al cambiar de producto
  useEffect(() => {
    setActiveImg(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const prevImg = useCallback(() => {
    setActiveImg((i) => (i === 0 ? producto.images.length - 1 : i - 1));
  }, [producto]);

  const nextImg = useCallback(() => {
    setActiveImg((i) => (i === producto.images.length - 1 ? 0 : i + 1));
  }, [producto]);

  // Navegar a otro producto desde la galería
  const handleGalleryClick = (clickedSlug) => {
    navigate(`/producto/${clickedSlug}`);
  };

  if (!producto) {
    return (
      <div className={styles.notFound}>
        <p>Producto no encontrado.</p>
        <Link to="/">← Volver al inicio</Link>
      </div>
    );
  }

  const waUrl = `https://wa.me/593987844281?text=${encodeURIComponent(producto.waMessage)}`;

  // Los otros productos para la galería (todos menos el actual)
  const otrosProductos = productos.filter((p) => p.id !== producto.id);

  return (
    <div className={styles.page}>

      {/* ── SEO ────────────────────────────────────────────── */}
      <Helmet>
        <title>{producto.seo.title}</title>
        <meta name="description" content={producto.seo.description} />
        <link rel="canonical"    href={producto.seo.canonical} />

        <meta property="og:type"         content="product" />
        <meta property="og:url"          content={producto.seo.canonical} />
        <meta property="og:title"        content={producto.seo.title} />
        <meta property="og:description"  content={producto.seo.description} />
        <meta property="og:image"        content={producto.seo.ogImage} />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale"       content="es_EC" />
        <meta property="og:site_name"    content="FloorEx" />

        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={producto.seo.title} />
        <meta name="twitter:description" content={producto.seo.description} />
        <meta name="twitter:image"       content={producto.seo.ogImage} />
      </Helmet>

      <ProductSchema producto={producto} />
      <BreadcrumbSchema items={[
        { name: 'Inicio', url: 'https://floorex.ec/' },
        { name: 'Maquinaria', url: 'https://floorex.ec/maquinaria' },
        { name: producto.title, url: producto.seo.canonical },
      ]} />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className={styles.hero}>

        {/* Columna izquierda: info del producto */}
        <div className={styles.heroContent}>
          <div className={styles.heroBreadcrumb}>
            <Link to="/maquinaria" className={styles.breadcrumbLink}>Maquinaria</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span>{producto.title}</span>
          </div>

          {producto.badge && (
            <span className={styles.badge}>{producto.badge}</span>
          )}

          <h1 className={styles.heroTitle}>{producto.title}</h1>
          <p className={styles.heroSubtitle}>{producto.subtitle}</p>
          <p className={styles.heroText}>{producto.text}</p>

          <div className={styles.priceRow}>
            <span className={styles.priceLabel}>Precio de lista</span>
            <span className={styles.priceValue}>{producto.price}</span>
          </div>

          <div className={styles.heroCta}>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.528 5.854L0 24l6.336-1.503A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.01-1.378l-.36-.214-3.732.885.936-3.618-.235-.372A9.793 9.793 0 012.182 12C2.182 6.565 6.565 2.182 12 2.182S21.818 6.565 21.818 12 17.435 21.818 12 21.818z"/>
              </svg>
              Consultar / Comprar
            </a>
            <Link to="/maquinaria" className={styles.btnOutline}>
              ← Ver todos
            </Link>
          </div>
        </div>

        {/* Columna derecha: carrusel de fotos del producto */}
        <div className={styles.heroCarousel}>
          <div className={styles.carouselMain}>
            <img
              key={activeImg}
              src={producto.images[activeImg]}
              alt={`${producto.title} — foto ${activeImg + 1}`}
              className={styles.carouselImg}
            />

            {producto.images.length > 1 && (
              <>
                <button
                  className={`${styles.carouselArrow} ${styles.carouselPrev}`}
                  onClick={prevImg}
                  aria-label="Foto anterior"
                >
                  ‹
                </button>
                <button
                  className={`${styles.carouselArrow} ${styles.carouselNext}`}
                  onClick={nextImg}
                  aria-label="Foto siguiente"
                >
                  ›
                </button>

                <div className={styles.carouselDots}>
                  {producto.images.map((_, i) => (
                    <button
                      key={i}
                      className={`${styles.dot} ${i === activeImg ? styles.dotActive : ''}`}
                      onClick={() => setActiveImg(i)}
                      aria-label={`Ver foto ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {producto.images.length > 1 && (
            <div className={styles.carouselThumbs}>
              {producto.images.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${i === activeImg ? styles.thumbActive : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={`miniatura ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── DESCRIPCIÓN ────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Descripción</div>
          <p className={styles.description}>{producto.description}</p>
        </div>
      </section>

      {/* ── ESPECIFICACIONES ───────────────────────────────── */}
      {producto.specs && producto.specs.length > 0 && (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>Ficha técnica</div>
            <h2 className={styles.sectionTitle}>Especificaciones</h2>
            <div className={styles.specsGrid}>
              {producto.specs.map((s, i) => (
                <div key={i} className={styles.specRow}>
                  <span className={styles.specLabel}>{s.label}</span>
                  <span className={styles.specValue}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── VENTAJAS ───────────────────────────────────────── */}
      {producto.advantages && producto.advantages.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>Ventajas</div>
            <h2 className={styles.sectionTitle}>¿Por qué elegirla?</h2>
            <div className={styles.benefitsGrid}>
              {producto.advantages.map((b, i) => (
                <div key={i} className={styles.benefitCard}>
                  <span className={styles.benefitIcon}>{b.icon}</span>
                  <strong className={styles.benefitTitle}>{b.title}</strong>
                  <p className={styles.benefitDesc}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── GALERÍA — otros productos ───────────────────────── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Otros productos</div>
          <h2 className={styles.sectionTitle}>También puede interesarte</h2>
          <div className={styles.gallery}>
            {otrosProductos.map((p) => (
              <button
                key={p.id}
                className={styles.galleryItem}
                onClick={() => handleGalleryClick(p.slug)}
                title={p.title}
              >
                <img
                  src={p.images[0]}
                  alt={p.title}
                />
                <div className={styles.galleryOverlay}>
                  <span className={styles.galleryItemTitle}>{p.title}</span>
                  <span className={styles.galleryItemPrice}>{p.price}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <p className={styles.ctaLabel}>¿Te interesa este equipo?</p>
          <h2 className={styles.ctaTitle}>{producto.title}</h2>
          <p className={styles.ctaPrice}>{producto.price}</p>
          <p className={styles.ctaSub}>
            Habla con nuestro equipo para obtener este producto
          </p>
          <div className={styles.ctaButtons}>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.528 5.854L0 24l6.336-1.503A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.01-1.378l-.36-.214-3.732.885.936-3.618-.235-.372A9.793 9.793 0 012.182 12C2.182 6.565 6.565 2.182 12 2.182S21.818 6.565 21.818 12 17.435 21.818 12 21.818z"/>
              </svg>
              Consultar por WhatsApp
            </a>
            <Link to="/maquinaria" className={styles.btnOutline}>
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

//--------productImg.js---------// 
import pulidora1 from '../Assets/products/pulidora1.webp'
import pulidora2 from '../Assets/products/pulidora2.webp'
import pulidora3 from '../Assets/products/pulidora3.webp'
import pulidora4 from '../Assets/products/pulidora4.webp'
//---------ASPIRADORA---------//
import aspiradora1 from '../Assets/products/aspiradora1.webp'
import aspiradora2 from '../Assets/products/aspiradora2.webp'
import aspiradora3 from '../Assets/products/aspiradora3.webp'
import aspiradora4 from '../Assets/products/aspiradora4.webp'
//--------PULIDORA A REMOTO --------//
import pulidoraRemo1 from '../Assets/products/pulidoraRemo1.webp'
import pulidoraRemo2 from '../Assets/products/pulidoraRemo2.webp'
import pulidoraRemo3 from '../Assets/products/pulidoraRemo3.webp'
import pulidoraRemo4 from '../Assets/products/pulidoraRemo4.webp'
//----------ASPIRADORA---------//
import aspiradoraivc451 from '../Assets/products/aspiradoraivc451.webp'
import aspiradoraivc452 from '../Assets/products/aspiradoraivc452.webp'
import aspiradoraivc453 from '../Assets/products/aspiradoraivc453.webp'
import aspiradoraivc454 from '../Assets/products/aspiradoraivc454.webp'
//------------RECTIFICADORA-------//
import rectificadora1 from '../Assets/products/rectificadora1.webp'
import rectificadora2 from '../Assets/products/rectificadora2.webp'
import rectificadora3 from '../Assets/products/rectificadora3.webp'
import rectificadora4 from '../Assets/products/rectificadora4.webp'
//----ASPIRADORA V3---------//
import aspira1 from '../Assets/products/aspira1.webp'
import aspira2 from '../Assets/products/aspira2.webp'
import aspira3 from '../Assets/products/aspira3.webp'
import aspira4 from '../Assets/products/aspira4.webp'





export const productImg = {
  
  pulidoras: {
    id:1,
    gallery: [pulidora1,pulidora2,pulidora3,pulidora4],
  },

  aspiradora: {
    id:2,
    gallery: [aspiradora1,aspiradora2,aspiradora3,aspiradora4],
  },

  pulidoraRemoto: {
    id:3,
    gallery: [pulidoraRemo1,pulidoraRemo2,pulidoraRemo3,pulidoraRemo4],
  },

  aspiradoraivc45: {
    id:4,
    gallery: [aspiradoraivc451,aspiradoraivc452,aspiradoraivc453,aspiradoraivc454],
  },

  rectificadora: {
    id:5,
    gallery: [rectificadora1,rectificadora2,rectificadora3,rectificadora4],
  },

  aspiradorav3: {
    id:6,
    gallery:[aspira1,aspira2,aspira3,aspira4],
  },
} 
