import { Link } from "react-router-dom";

export default function CtaButton({ to, href, wp, text, id, className }) {
  // 1. Prioridad: WhatsApp
  if (wp) {
    const wpUrl = `https://wa.me/${wp.replace(/\D/g, '')}`; // Limpia espacios o guiones
    return (
      <a 
        href={wpUrl} 
        className={className} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={`Contactar por WhatsApp: ${text}`}
      >
        {text}
      </a>
    );
  }

  // 2. Navegación interna de React Router (Páginas)
  if (to) {
    return (
      <Link to={to} id={id} className={className} aria-label={text}>
        {text}
      </Link>
    );
  }

  // 3. Enlaces externos o Anclas de la misma página (#servicios)
  return (
    <a
      href={href}
      className={className}
      id={id}
      aria-label={text}
      // Si el href empieza con #, no necesita target="_blank"
      target={href?.startsWith('#') ? "_self" : "_blank"}
      rel={href?.startsWith('#') ? "" : "noopener noreferrer"}
    >
      {text}
    </a>
  );
}
