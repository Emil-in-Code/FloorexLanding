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
  "logo": {
    "@type": "ImageObject",
    "url": `${BASE_URL}/logo.svg`,
    "width": 200,
    "height": 60,
  },
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash",
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
    "streetAddress": "Colinas de los Ceibos calle 8va y AV.3ra #203 Guayaquil, Ecuador",
    "addressLocality": "Guayaquil",
    "addressRegion": "Guayas",
    "PostalCode":"090902",
    "addressCountry": "EC"
  },
  "geo":{
  "@type":"GeoCoordinates",
  "latitude":-2.1643126,
  "longitude":-79.9114755,
  },
  "hasMap": "https://maps.google.com/?q=FloorEx+Guayaquil",

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
