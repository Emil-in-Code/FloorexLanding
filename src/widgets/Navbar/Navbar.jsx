// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          {/* Logo */}
          <a href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 100 100" className={styles.logoSvg}>
                <circle cx="50" cy="50" r="45" fill="none" stroke="#9ca3af" strokeWidth="3"/>
                <path 
                  d="M 30 30 L 50 50 L 70 30 M 50 50 L 70 70 M 50 50 L 30 70" 
                  stroke="#ec4899" 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoPink}>FLOOR</span>
              <span className={styles.logoWhite}>EX</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <a href="#servicios" className={styles.navLink}>Servicios</a>
            <a href="#proyectos" className={styles.navLink}>Proyectos</a>
            <a href="#contacto" className={styles.navLink}>Contacto</a>
            <button className={styles.ctaButton}>Cotizar Ahora</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <a href="#servicios" className={styles.mobileLink} onClick={closeMenu}>
              Servicios
            </a>
            <a href="#proyectos" className={styles.mobileLink} onClick={closeMenu}>
              Proyectos
            </a>
            <a href="#contacto" className={styles.mobileLink} onClick={closeMenu}>
              Contacto
            </a>
            <button className={styles.mobileCtaButton} onClick={closeMenu}>
              Cotizar Ahora
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
