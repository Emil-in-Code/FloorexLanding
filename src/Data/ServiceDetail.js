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
      description: `¿Tu cancha o pista tienen el hormigón agrietado, irregular o demasiado agresivo
                    para la práctica deportiva?
                    Entonces recupera la superficie y conviertela en un piso deportivo profesional:
                    Liso, duradero y estéticamente impecable`,
      keywords: `pisos deportivos, resinas acrilicas, poliuretano deportes, basquet, handball, paddle, voley, pintura canchas, recuperacion de pisos`,
      ogImage: OG_IMAGE_DEFAULT,
      canonical: `${BASE_URL}/servicio/`,
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
    title: "Pisos epóxicos",
    text: "Resistencia extrema con acabado profesional",
    image: servicesImg.epoxico.hero,
    waMessage: "Hola, estoy interesado en el servicio de pisos epóxicos ¿me podría dar más información?",
    badge: "",          // ← dejar vacío si no tiene badge
    gallery: servicesImg.epoxico.gallery,
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
      description: `¿Necesitas que tu piso aguante cargas pesadas, derrames químicos o tránsito constante? 
                    En FloorEx diseñamos la solución epóxica a la medida de tu industria.`,
      keywords:`pisos epoxicos, recubrimientos epoxicos, mortero autonivelante, pintura alto trafico, grado alimenticio, pisos industriales, reparacion pisos epoxicos`,
      ogImage: OG_IMAGE_DEFAULT,
      canonical: `${BASE_URL}/servicio/`,
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
    title: "Poliuretano Cementicio (UQESH®)",
    text: "La tecnología que eligen los gigantes mundiales",
    image: servicesImg.cementicio.hero,
    waMessage: "Hola, estoy interesado en el servicio de poliuretano cementicio ¿me podría dar más información?",
    badge: "",          // ← dejar vacío si no tiene badge
    gallery: servicesImg.cementicio.gallery,
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
      description: `Distribuidores y aplicadores oficiales de la tecnología UQESH® en Ecuador.
                    Pisos híbridos ecológicos de máxima resistencia térmica, química y de alto tráfico.
                    ¿Qué hace tan especial al sistema UQESH®️?
                    A diferencia del epóxico tradicional, el poliuretano cementicio es un sistema híbrido
                    que combina la robustez del cemento con la flexibilidad avanzada del poliuretano.
                    El resultado: un piso que no se agrieta con los cambios de temperatura, resiste químicos
                    agresivos y soporta tráfico pesado sin deteriorarse. Y con UQESH®️, la diferencia es aún mayor:
                    su fórmula a base de aceite de ricino vegetal (no derivados del petróleo) es completamente ecológica, 
                    con certificación LEED y apta para contacto directo con alimentos.
                    `,
      keywords: `poliuretano cementicio, uqesh ecuador, pisos industriales, grado alimenticio, pisos para frigorificos, mortero cementicio, floorex`,
      ogImage: OG_IMAGE_DEFAULT,
      canonical: `${BASE_URL}/servicio/poliuretano-cementicio-uqesh`,
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
     title: "Preparación de Superficies",
     text: "La base que define un piso exitoso",
     image: servicesImg.preparacion?.hero || null, // ← Puedes mapearlo en tu archivo de imágenes si agregas este servicio
     waMessage: "Hola, estoy interesado en el servicio de preparación de superficies de concreto ¿me podría dar más información?",
     badge: "",          // ← dejar vacío si no tiene badge
     gallery: [],
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
       description: `Un recubrimiento solo es tan bueno como la superficie sobre la que se aplica. En FloorEx preparamos el hormigón con maquinaria profesional, escarificación y pulido mecánico.`,
       keywords: `preparacion de superficies, escarificacion concreto, pulido mecanico, perfil de anclaje, csp concreto, remover epoxico, lavado industrial`,
       ogImage: OG_IMAGE_DEFAULT,
       canonical: `${BASE_URL}/servicio/preparacion-superficies`,
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
  }

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
