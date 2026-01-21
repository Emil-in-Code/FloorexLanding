// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import styles from './Navbar.module.css';
import logo from '../../assets/img/logo.webp'

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
              <img src={logo} className={styles.logoSvg} />

            </div>
            <div className={styles.logoText}>
              <span className={styles.logoPink}>FLOOR</span>
              <span className={styles.logoGrey}>EX</span>
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
