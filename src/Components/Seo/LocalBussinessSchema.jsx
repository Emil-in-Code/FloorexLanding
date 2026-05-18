import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://floorex.ec';

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "FloorEx",
  "description": "FloorEx es una empresa especializada en pisos industriales; nuestros servicios abarcan desde la venta de maquinaria especializada hasta la colocación del sistema industrial que mejor se adapte a la necesidad de tu piso.",
  "url": BASE_URL,
  "telephone": "+593987844281",
  "email": "floorex.ec@gmail.com",
  "image": `${BASE_URL}/seo/opengraph.webp`,
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash",
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
