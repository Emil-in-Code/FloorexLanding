import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { productos } from '../Data/MaquinariaDetail.js';
import styles from './MaquinariaDetail.module.css';

export default function MaquinariaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentIndex = productos.findIndex((p) => p.id === Number(id));
  const producto = productos[currentIndex];

  // Carrusel de fotos del producto actual
  const [activeImg, setActiveImg] = useState(0);

  // Resetear imagen activa al cambiar de producto
  useEffect(() => {
    setActiveImg(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const prevImg = useCallback(() => {
    setActiveImg((i) => (i === 0 ? producto.images.length - 1 : i - 1));
  }, [producto]);

  const nextImg = useCallback(() => {
    setActiveImg((i) => (i === producto.images.length - 1 ? 0 : i + 1));
  }, [producto]);

  // Navegar a otro producto desde la galería
  const handleGalleryClick = (clickedId) => {
    navigate(`/producto/${clickedId}`);
  };

  if (!producto) {
    return (
      <div className={styles.notFound}>
        <p>Producto no encontrado.</p>
        <Link to="/maquinaria">← Volver a maquinaria</Link>
      </div>
    );
  }

  const waUrl = `https://wa.me/593987844281?text=${encodeURIComponent(producto.waMessage)}`;

  // Los otros productos para la galería (todos menos el actual)
  const otrosProductos = productos.filter((p) => p.id !== producto.id);

  return (
    <div className={styles.page}>

      {/* ── SEO ────────────────────────────────────────────── */}
      <Helmet>
        <title>{producto.seo.title}</title>
        <meta name="description" content={producto.seo.description} />
        <meta name="keywords"    content={producto.seo.keywords} />
        <link rel="canonical"    href={producto.seo.canonical} />

        <meta property="og:type"         content="website" />
        <meta property="og:url"          content={producto.seo.canonical} />
        <meta property="og:title"        content={producto.seo.title} />
        <meta property="og:description"  content={producto.seo.description} />
        <meta property="og:image"        content={producto.seo.ogImage} />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale"       content="es_EC" />
        <meta property="og:site_name"    content="FloorEx" />

        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={producto.seo.title} />
        <meta name="twitter:description" content={producto.seo.description} />
        <meta name="twitter:image"       content={producto.seo.ogImage} />
      </Helmet>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className={styles.hero}>

        {/* Columna izquierda: info del producto */}
        <div className={styles.heroContent}>
          <div className={styles.heroBreadcrumb}>
            <Link to="/maquinaria" className={styles.breadcrumbLink}>Maquinaria</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span>{producto.title}</span>
          </div>

          {producto.badge && (
            <span className={styles.badge}>{producto.badge}</span>
          )}

          <h1 className={styles.heroTitle}>{producto.title}</h1>
          <p className={styles.heroSubtitle}>{producto.subtitle}</p>
          <p className={styles.heroText}>{producto.text}</p>

          <div className={styles.priceRow}>
            <span className={styles.priceLabel}>Precio de lista</span>
            <span className={styles.priceValue}>{producto.price}</span>
          </div>

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
              Consultar / Comprar
            </a>
            <Link to="/maquinaria" className={styles.btnOutline}>
              ← Ver todos
            </Link>
          </div>
        </div>

        {/* Columna derecha: carrusel de fotos del producto */}
        <div className={styles.heroCarousel}>
          <div className={styles.carouselMain}>
            <img
              key={activeImg}
              src={producto.images[activeImg]}
              alt={`${producto.title} — foto ${activeImg + 1}`}
              className={styles.carouselImg}
            />

            {producto.images.length > 1 && (
              <>
                <button
                  className={`${styles.carouselArrow} ${styles.carouselPrev}`}
                  onClick={prevImg}
                  aria-label="Foto anterior"
                >
                  ‹
                </button>
                <button
                  className={`${styles.carouselArrow} ${styles.carouselNext}`}
                  onClick={nextImg}
                  aria-label="Foto siguiente"
                >
                  ›
                </button>

                <div className={styles.carouselDots}>
                  {producto.images.map((_, i) => (
                    <button
                      key={i}
                      className={`${styles.dot} ${i === activeImg ? styles.dotActive : ''}`}
                      onClick={() => setActiveImg(i)}
                      aria-label={`Ver foto ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {producto.images.length > 1 && (
            <div className={styles.carouselThumbs}>
              {producto.images.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${i === activeImg ? styles.thumbActive : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={`miniatura ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── DESCRIPCIÓN ────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Descripción</div>
          <p className={styles.description}>{producto.description}</p>
        </div>
      </section>

      {/* ── ESPECIFICACIONES ───────────────────────────────── */}
      {producto.specs && producto.specs.length > 0 && (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>Ficha técnica</div>
            <h2 className={styles.sectionTitle}>Especificaciones</h2>
            <div className={styles.specsGrid}>
              {producto.specs.map((s, i) => (
                <div key={i} className={styles.specRow}>
                  <span className={styles.specLabel}>{s.label}</span>
                  <span className={styles.specValue}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── VENTAJAS ───────────────────────────────────────── */}
      {producto.advantages && producto.advantages.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>Ventajas</div>
            <h2 className={styles.sectionTitle}>¿Por qué elegirla?</h2>
            <div className={styles.benefitsGrid}>
              {producto.advantages.map((b, i) => (
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

      {/* ── GALERÍA — otros productos ───────────────────────── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Otros productos</div>
          <h2 className={styles.sectionTitle}>También puede interesarte</h2>
          <div className={styles.gallery}>
            {otrosProductos.map((p) => (
              <button
                key={p.id}
                className={styles.galleryItem}
                onClick={() => handleGalleryClick(p.id)}
                title={p.title}
              >
                <img
                  src={p.images[0]}
                  alt={p.title}
                />
                <div className={styles.galleryOverlay}>
                  <span className={styles.galleryItemTitle}>{p.title}</span>
                  <span className={styles.galleryItemPrice}>{p.price}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <p className={styles.ctaLabel}>¿Te interesa este equipo?</p>
          <h2 className={styles.ctaTitle}>{producto.title}</h2>
          <p className={styles.ctaPrice}>{producto.price}</p>
          <p className={styles.ctaSub}>
            Hablá con nuestro equipo para obtener este producto
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
              Consultar por WhatsApp
            </a>
            <Link to="/maquinaria" className={styles.btnOutline}>
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
