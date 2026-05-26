import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://floorex.ec';

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "FloorEx",
  "description": "En FloorEx nos especializamos en la aplicación de sistemas y revestimientos de pisos industriales, comerciales y deportivos en Ecuador, además de la venta de maquinaria técnica y materias primas. Diseñamos soluciones de Alta Resistencia mecánica y química: desde pisos epóxicos de grado alimenticio y sistemas de poliuretano cementicio (tecnología UQESH®️) para entornos de máxima exigencia, hasta el pulido y abrillantado ecológico de concreto con densificadores y discos de diamantes. También realizamos preparación técnica de superficies y demarcación de señalética industrial para bodegas y naves. Garantizamos máxima adherencia, durabilidad y cumplimiento normativo.",
  "url": BASE_URL,
  "telephone": "+593987844281",
  "email": "floorex.ec@gmail.com",
  "image": `${BASE_URL}/seo/opengraph.webp`,
  "logo": {
    "@type": "ImageObject",
    "url": `${BASE_URL}/logo.svg`,
    "width": 200,
    "height": 60,
  },
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash",
  "knowsAbout": [
    "Industrial flooring",
    "Epoxy flooring",
    "Concrete polishing",
    "Flooring contractor"
  ],
  "OpeningHoursSpecification":[
    {
      "@type":"OpeningHoursSpecification",
      "dayOfWeek":["Monday","Tuesday","Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00",
    },
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Guayaquil",
      "sameAs": "https://www.wikidata.org/wiki/Q43509"
    },
    {
      "@type": "City",
      "name": "Cuenca",
      "sameAs": "https://www.wikidata.org/wiki/Q54886"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Guayaquil",
    "addressRegion": "Guayas",
    "addressCountry": "EC"
  },


  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+593987844281",
    "contactType": "customer service",
    "availableLanguage": "Spanish",
  },
  "sameAs": [
    "https://www.instagram.com/floorex.ec"
  ]
};

export default function LocalBusinessSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessData)}
      </script>
    </Helmet>
  );
}
