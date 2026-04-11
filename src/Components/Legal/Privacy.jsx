import { useEffect, useRef, useState } from "react";
import styles from "./Privacy.module.css";
import { sections, LAST_UPDATED, RESPONSIBLE } from "../../Data/Privacy.js";

// ── Sub-components ───────────────────────────────────────────

function Prose({ text }) {
  if (!text) return null;
  return <p className={styles.prose}>{text}</p>;
}

function ItemList({ items }) {
  if (!items?.length) return null;
  return (
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li key={i} className={styles.listItem}>{item}</li>
      ))}
    </ul>
  );
}

function Highlight({ text }) {
  if (!text) return null;
  // Bold the first sentence (up to the first colon)
  const colonIdx = text.indexOf(":");
  if (colonIdx !== -1) {
    return (
      <div className={styles.highlight}>
        <p>
          <strong>{text.slice(0, colonIdx + 1)}</strong>
          {text.slice(colonIdx + 1)}
        </p>
      </div>
    );
  }
  return (
    <div className={styles.highlight}>
      <p>{text}</p>
    </div>
  );
}

function ContactCard() {
  return (
    <div className={styles.contactCard}>
      <p className={styles.contactIntro}>
        Si tiene preguntas o comentarios sobre este Aviso de Privacidad, puede contactarnos a través de:
      </p>
      <div className={styles.contactGrid}>
        <div className={styles.contactRow}>
          <span className={styles.contactLabel}>Titular</span>
          <span className={styles.contactValue}>
            {RESPONSIBLE.name} ({RESPONSIBLE.trade})
          </span>
        </div>

        <div className={styles.contactRow}>
          <span className={styles.contactLabel}>Documento</span> 
          <span className={styles.contactValue}>{RESPONSIBLE.dni}</span>         
        </div>

        <div className={styles.contactRow}>
          <span className={styles.contactLabel}>Dirección</span>
          <span className={styles.contactValue}>{RESPONSIBLE.address}</span>
        </div>

        <div className={styles.contactRow}>
          <span className={styles.contactLabel}>Email</span>
          <span className={styles.contactValue}>
            <a href={`mailto:${RESPONSIBLE.email}`}>{RESPONSIBLE.email}</a>
          </span>
        </div>
        <div className={styles.contactRow}>
          <span className={styles.contactLabel}>Web</span>
          <span className={styles.contactValue}>
            <a
              href={`https://${RESPONSIBLE.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {RESPONSIBLE.website}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

function Section({ section }) {
  const { number, title, content, list, subsections, extra, highlight, isContact } = section;

  return (
    <section id={section.id} className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNum}>{number}.</span>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>

      {isContact ? (
        <ContactCard />
      ) : (
        <>
          <Prose text={content} />
          <ItemList items={list} />
          <Prose text={extra} />
          <Highlight text={highlight} />

          {subsections?.map((sub, i) => (
            <div key={i} className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>{sub.title}</h3>
              <Prose text={sub.content} />
              <ItemList items={sub.list} />
              <Prose text={sub.extra} />
            </div>
          ))}
        </>
      )}
    </section>
  );
}

// ── TOC ──────────────────────────────────────────────────────

function TableOfContents({ activeId }) {
  return (
    <nav className={styles.toc} aria-label="Índice de contenidos">
      <p className={styles.tocTitle}>Contenido</p>
      <ul className={styles.tocList}>
        {sections.map((s) => (
          <li key={s.id} className={styles.tocItem}>
            <a
              href={`#${s.id}`}
              className={`${styles.tocLink} ${activeId === s.id ? styles.active : ""}`}
            >
              <span className={styles.tocNum}>{s.number}</span>
              <span>{s.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ── Main component ───────────────────────────────────────────

export default function PrivacyPolicy() {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const observerRef = useRef(null);

  useEffect(() => {
    const sectionEls = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sectionEls.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <header className={styles.header}>
        <span className={styles.eyebrow}>De Sandro Seguros</span>
        <h1 className={styles.title}>Política de Privacidad</h1>
        <p className={styles.meta}>Última actualización: {LAST_UPDATED}</p>
        <p className={styles.intro}>
          Este Aviso de Privacidad de{" "}
          <strong>{RESPONSIBLE.name}</strong> (operando como{" "}
          <strong>{RESPONSIBLE.trade}</strong>), con domicilio en{" "}
          {RESPONSIBLE.address}, describe cómo y por qué podemos acceder,
          recopilar, almacenar, usar y/o compartir su información personal
          cuando utiliza nuestros servicios.
        </p>
        <p className={styles.contactLine}>
          ¿Preguntas? Escríbanos a{" "}
          <a href={`mailto:${RESPONSIBLE.email}`}>{RESPONSIBLE.email}</a>
        </p>
      </header>

      {/* Two-column layout: TOC + content */}
      <div className={styles.layout}>
        <TableOfContents activeId={activeId} />

        <main className={styles.content}>
          {sections.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </main>
      </div>
    </div>
  );
}
