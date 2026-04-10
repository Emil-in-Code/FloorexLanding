import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer({ id }) {
  
  const pushEvent = (data) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
  };

  return (
    <footer id={id} className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.brand}>
          <p className={styles.brandName}>De Sandro-Seguros</p>
          <div className={styles.divider} />
          <p className={styles.tagline}>Tu tranquilidad, mi prioridad</p>
        </div>

        <div className={styles.links}>
          <a className={styles.linkItem} href="https://wa.me/34614866499" target="_blank" rel="noopener noreferrer">
            <span>
              <span className={styles.linkLabel}>WhatsApp</span>
              <span className={styles.linkValue}>+34 614 866 499</span>
            </span>
          </a>
          <a className={styles.linkItem} href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <span>
              <span className={styles.linkLabel}>Instagram</span>
              <span className={styles.linkValue}>@desandroseguros</span>
            </span>
          </a>
          <a 
            className={styles.linkItem} 
            href="mailto:desandroseguros@gmail.com"
            onClick={(e) => {
              e.preventDefault();

              pushEvent({
                event: "generate_lead",
                method: "email",
                item_name: "contacto_footer",
                item_id: "footer_email"
              });

              setTimeout(() => {
                window.location.href = "mailto:desandroseguros@gmail.com";
              }, 150);
            }}
          >
            <span>
              <span className={styles.linkLabel}>Email</span>
              <span className={styles.linkValue}>desandroseguros@gmail.com</span>
            </span>
          </a>
          <div className={styles.linkItem}>
            <span>
              <span className={styles.linkLabel}>Ubicación</span>
              <span className={styles.linkValue}>Valencia, España</span>
            </span>
          </div>
        </div>

          {/*Legales*/}
        <div className={styles.bottom}>
          <span className={styles.copy}> 2026 Desandro Seguros — Todos los derechos reservados</span>
          <nav className={styles.legal} aria-label="Aviso legal">
            <Link to="/privacidad" className={styles.legalLink}>Política de privacidad</Link>
            <Link to="/cookies" className={styles.legalLink}>Política de cookies</Link>
            <Link to="/legal" className={styles.legalLink}>Aviso Legal</Link>
          </nav>
          <span className={styles.dev}>
            Diseñado y desarrollado con ♥ por <a href="#" className={styles.devLink}>Emilio Flor</a>
          </span>
        </div>

      </div>
    </footer>
  )
}
