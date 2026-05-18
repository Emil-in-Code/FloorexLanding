import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://floorex.ec';

export default function ServiceSchema({ service }) {
  if (!service) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.seo.description,
    "url": service.seo.canonical,
    "image": service.seo.ogImage ?? `${BASE_URL}/seo/opengraph.webp`,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "FloorEx",
      "url": BASE_URL,
      "telephone": "+593987844281",
      "email": "floorex.ec@gmail.com",
      "areaServed": [
        { "@type": "City", "name": "Guayaquil" },
        { "@type": "City", "name": "Cuenca" }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Guayaquil",
        "addressRegion": "Guayas",
        "addressCountry": "EC"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Guayaquil" },
      { "@type": "City", "name": "Cuenca" }
    ],
    "serviceType": "Aplicación de sistemas de pisos industriales",
    "category": "Pisos industriales y comerciales"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
