import { servicesImg } from '../Data/GalleryServices.js'

// ─── Constantes SEO ────────────────────────────────────────
const BASE_URL = 'https://floorex.ec';
const OG_IMAGE_DEFAULT = '/seo/opengraph.png';

export const services = [
  {
    id: 1,
    title: "Pisos pulidos/abrillantados",
    text: "En cualquier espacio que necesite durabilidad, estética y bajo mantenimiento.",
    image: servicesImg.pulidos.hero,
    waMessage: "Hola, estoy interesado en el servicio de pisos pulidos/abrillantados ¿me podría dar más información?",
    badge: "más contratado",

    // ── Campos nuevos ───────────────────────────────────────

    // Imágenes para la galería (pueden ser las mismas de Assets/Images)
    gallery: servicesImg.pulidos.gallery,

    // Ventajas que se muestran como cards con ícono
    // El ícono puede ser un emoji o un SVG string simple
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
      title: "Pisos deportivos | recupera la jugabilidad",
      description: `Solución 100% ecológica que garantiza larga durabilidad sin contaminar el medio ambiente,
                    ya que nuestro proceso no aplica capas superficiales que se desgastan con el uso;
                    pulimos el propio concreto con diamantes para lograr un brillo duradero, natural y sostenible.`,
      keywords: `pisos pulidos de cemento, pulido de hormigón, mejores empresas de pisos pulidos en Ecuador`,
      ogImage: OG_IMAGE_DEFAULT,
      canonical: `${BASE_URL}/servicio/pulido`,
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
    title: "Pisos Deportivos",
    text: "Que nada te saque del juego",
    image:servicesImg.deportivo.hero,
    waMessage: "Hola, estoy interesado en el servicio de los pisos deportivos ¿me podría dar más información?",
    badge: "",          // ← dejar vacío si no tiene badge
    gallery: [],
    benefits: [
      { icon: '', title: 'Sin demolición',    desc: 'Recuperamos pisos deportivos viejos o en mal estado' },
      { icon: '💰', title: 'Costo-eficiente', desc: 'Adaptamos el sistema a tu presupuesto y nivel de exigencia (uso escolar, federado o recreativo)' },
      { icon: '⏳', title: 'Tiempo de ejecución',    desc: 'Tu espacio estará listo en apenas unos días para que puedas volver a jugar' },
      { icon: '🔒', title: 'Acabado liso',       desc: 'Agarre controlado en el punto justo de deslizamiento, sin frenadas bruscas ni resbalones' },
      { icon: '⏳', title: 'Larga durabilidad',    desc: 'Resistencia al arrastre de zapatillas, exposición solar,lluvias y limpieza sin decoloración' },
      { icon: '', title: 'Estetica profesional',    desc: 'Colores vivos,líneas nítidas marcadas con pintura especial, terminación mate o satinado' },
    ],
    process: [
      { title: '', desc: '' },
    ],
    seo: {
      title: "",
      description: `¿Tu cancha o pista tienen el hormigón agrietado, irregular o demasiado agresivo
                    para la práctica deportiva?
                    Entonces recupera la superficie y conviertela en un piso deportivo profesional:
                    Liso, duradero y estéticamente impecable`,
      keywords: ``,
      ogImage: OG_IMAGE_DEFAULT,
      canonical: `${BASE_URL}/servicio/`,
    },
    detail: ``,
  },
  // ─── Plantilla para nuevos servicios ───────────────────────
  // Copiá este bloque y completá los campos.
  /*
  {
    id: 2,
    title: "",
    text: "",
    image: null,
    waMessage: "Hola, estoy interesado en el servicio de ... ¿me podría dar más información?",
    badge: "",          // ← dejar vacío si no tiene badge
    gallery: [],
    benefits: [
      { icon: '', title: '', desc: '' },
    ],
    process: [
      { title: '', desc: '' },
    ],
    seo: {
      title: "",
      description: ``,
      keywords: ``,
      ogImage: OG_IMAGE_DEFAULT,
      canonical: `${BASE_URL}/servicio/`,
    },
    detail: ``,
  },
  */
];
