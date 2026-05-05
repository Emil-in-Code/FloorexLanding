import { useEffect, useRef, useState } from "react";
import styles from "./Privacy.module.css";
import { LegalSections, LEGAL_LAST_UPDATED, RESPONSIBLE } from "../../Data/legalNotice.js";
// ── Sub-components ───────────────────────────────────────────
// Los mismos que en Privacy: si no hay dato, no renderizan nada
//

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
  return <div className={styles.highlight}><p>{text}</p></div>;
}

// ── Section ──────────────────────────────────────────────────
// Desestructuramos todos los campos que puede tener una sección.
// Si alguno no existe en el objeto de datos, será undefined
// y los sub-componentes devolverán null sin romper nada.

function Section({ section }) {
  const { number, title, content, list, extra, highlight } = section;

  return (
    <section id={section.id} className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNum}>{number}.</span>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <Prose text={content} />
      <ItemList items={list} />
      <Prose text={extra} />
      <Highlight text={highlight} />
    </section>
  );
}

// ── TOC ──────────────────────────────────────────────────────

function TableOfContents({ activeId }) {
  return (
    <nav className={styles.toc} aria-label="Índice de contenidos">
      <p className={styles.tocTitle}>Contenido</p>
      <ul className={styles.tocList}>
        {LegalSections.map((s) => (
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

export default function legalSections() {
  const [activeId, setActiveId] = useState(LegalSections[0]?.id ?? "");
  const observerRef = useRef(null);

  useEffect(() => {
    const sectionEls = LegalSections
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
      <header className={styles.header}>
        <span className={styles.eyebrow}>Floorex</span>
        <h1 className={styles.title}>Aviso Legal</h1>
        <p className={styles.meta}>Última actualización: {LEGAL_LAST_UPDATED}</p>
        <p className={styles.intro}>
          En cumplimiento con el deber de información establecido en la Ley
          de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos de la
          República del Ecuador, se facilitan a continuación los datos
          identificativos del titular de este sitio web:
        </p>

        <div className={styles.contactCard}>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Titular</span>
              <span className={styles.contactValue}>
                {RESPONSIBLE.name} (en adelante, {RESPONSIBLE.trade})
              </span>
            </div>

          <div className={styles.contactRow}>
            <span className={styles.contactLabel}>Cédula</span>
            <span className={styles.contactValue}>
              {RESPONSIBLE.dni} 
            </span>
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
            <span className={styles.contactLabel}>Actividad</span>
            <span className={styles.contactValue}>{RESPONSIBLE.activity}</span>
          </div>

        </div>

      </header>
      <div className={styles.layout}>
        <TableOfContents activeId={activeId} />
        <main className={styles.content}>
          {LegalSections.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </main>
      </div>
    </div>
  );
}



