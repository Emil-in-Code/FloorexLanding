// src/Data/MaquinariaDetail.js
import { productImg } from './ProductImg.js'

export const productos = [
  {
   id: 1,
   slug: "pulidora-portatil",
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
     canonical: "https://www.floorex.ec/maquinaria/pulidora-portatil",
     ogImage: "/img/maquinaria/pulidora-og.jpg",
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
      canonical: "https://www.floorex.ec/maquinaria/aspiradora-industrial",
      ogImage: "/img/maquinaria/aspiradora-og.jpg",
    },
  },
  {
    id: 3,
    slug: "pulidora-control-remoto-xingyi-gx858",
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
      canonical: "https://www.floorex.ec/producto/3",
      ogImage: "/img/maquinaria/pulidora-gx858-og.jpg",
    },
  },
  {
    id: 4,
    slug: "aspiradora-industrial-IVC45L-manual",
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
      canonical: "https://www.floorex.ec/producto/4",
      ogImage: "/img/maquinaria/aspiradora-ivc45l-og.jpg",
    },
  },
{
    id: 5,
    slug: "Rectificadora-de-suelo-GX550",
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
      canonical: "https://www.floorex.ec/producto/5",
      ogImage: "/img/maquinaria/rectificadora-gx550-og.jpg",
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
      canonical: "https://www.floorex.ec/producto/6", // Corregido de 5 a 6 para coincidir con el id
      ogImage: "/img/maquinaria/aspiradora-ivc-v3-og.jpg",
    },
  },
];
