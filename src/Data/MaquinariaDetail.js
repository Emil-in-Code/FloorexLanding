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
    slug: "",
    title: "",
    subtitle: "",
    badge:"",
    text: "",
    description:
      "",
    price: "",
    waMessage:
      "Hola FloorEx! Me interesa la aspiradora industrial. ¿Pueden darme información y precio actualizado?",
    images: productImg.aspiradora.gallery,
    specs: [
      { label: "Motor", value: "2,2 kW/3HP" },
      { label: "Caudal de aire", value: "350 m3/h (206 cfm)" },
      { label: "Diámetro", value: "50mm" },
      { label: "Peso", value: "68 kg" },
      { label: "Voltaje", value: "220V-240 V" },
    ],
    advantages: [
      { icon: "", title: "", desc: "" },
      { icon: "", title: "", desc: "" },
      { icon: "", title: "", desc: "" },
      { icon: "", title: "", desc: "" },
      { icon: "", title: "", desc: "" },
      { icon: "", title: "", desc: "" },
    ],
    seo: {
      title: "",
      description:"",
      keywords: "",
      canonical: "https://www.floorex.ec/producto/2",
      ogImage: "/img/maquinaria/lijadora-og.jpg",
    },
  },
];
