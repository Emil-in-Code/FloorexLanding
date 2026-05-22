import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://floorex.ec';

const getAbsoluteUrl = (url) => {
  if (!url) return BASE_URL;
  return url.startsWith('http') ? url : `${BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
};

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

// ── NUEVO: BreadcrumbSchema ──────────────────────────────────────────────────
// Genera breadcrumbs visibles en los resultados de Google (SERP)
// items: [{ name: string, url: string }]
export function BreadcrumbSchema({ items }) {
  if (!items?.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": getAbsoluteUrl(item.url),
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// ── NUEVO: FAQSchema ─────────────────────────────────────────────────────────
// Genera el bloque de preguntas frecuentes en SERP (rich snippet de acordeón)
// items: [{ question: string, answer: string }]
export function FAQSchema({ items }) {
  if (!items?.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// ── NUEVO: ProductSchema ─────────────────────────────────────────────────────
// Schema de Product para páginas de maquinaria
// Permite que Google muestre precio, disponibilidad y specs en Shopping
export function ProductSchema({ producto }) {
  if (!producto) return null;

  let priceClean = null;
  if (producto.price) {
    const rawPrice = producto.price.replace(/[^\d,. ]/g, '').trim();
    // Si tiene puntos y comas, asumimos formato europeo/latino $2.100,00
    if (rawPrice.includes('.') && rawPrice.includes(',')) {
      priceClean = rawPrice.replace(/\./g, '').replace(',', '.');
    } else if (rawPrice.includes(',')) {
      // Si solo tiene coma, podría ser decimal (ej: 2100,00)
      priceClean = rawPrice.replace(',', '.');
    } else {
      priceClean = rawPrice;
    }
  } 

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": producto.title,
    "description": producto.description,
    "image": producto.seo.ogImage ?? `${BASE_URL}/seo/opengraph.webp`,
    "url": producto.seo.canonical,
    "brand": {
      "@type": "Brand",
      // ACCIÓN: si el producto es de una marca específica (ej: XINGYI), usarla aquí
      "name": producto.title.includes('Xingyi') ? 'Xingyi' : 'FloorEx',
    },
    "offers": {
      "@type": "Offer",
      "url": getAbsoluteUrl(producto.seo?.canonical),
      "priceCurrency": "USD",
      "price": priceClean,
      // ACCIÓN: cambiá a "OutOfStock" si el producto no está disponible
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "FloorEx",
        "url": BASE_URL,
      },
    },
    // Las specs se mapean como additionalProperty para mayor contexto
    "additionalProperty": producto.specs?.map((spec) => ({
      "@type": "PropertyValue",
      "name": spec.label,
      "value": spec.value,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
