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
