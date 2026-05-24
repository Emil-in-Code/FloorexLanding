import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './NotFound.module.css'; // Opcional, para darle estilos uniformes

export default function NotFound() {
  return (
    <div className={styles.page}>
      {/* ── SEO: Evitamos que Google indexe esta página ── */}
      <Helmet>
        <title>Página no encontrada - FloorEx</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className={styles.content}>
        <h1 className={styles.title}>Error 404 </h1>
        <h2 className={styles.text}>
          Ups... Parece que te has perdido
        </h2> 
        <p className={styles.text}>
          La página que buscas no existe o ha sido movida.<br/> ¡No te preocupes! <br/>Podemos volver a empezar.
        </p>
        
        <div className={styles.actions}>
          <Link to="/" className={styles.btnPrimary}>
            Volver al inicio 
          </Link>
          <a 
            href="https://wa.me/593987844281" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.btnOutline}
          >
            Contactar a soporte
          </a>
        </div>
      </div>
    </div>
  );
}
