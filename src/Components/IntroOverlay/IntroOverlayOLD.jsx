import React from 'react';
import styles from './IntroOverlay.module.css';
import logo from '../../Assets/Images/logo.webp'
import { useIntroOverlay } from './useIntroOverlay.js'

// IntroOverlay.jsx
export default function IntroOverlay() {
  const { logoStyle, overlayStyle } = useIntroOverlay(300);

  return (
    <div className={styles.overlay} style={overlayStyle}> 
      <div className={styles.logoContainer} style={logoStyle}>
        <img src={logo} alt="logo de bienvenida" className={styles.svg} />
      </div>
      <p style={{ opacity: logoStyle.opacity }}>Scroll ↓</p>
    </div>
  );
}
