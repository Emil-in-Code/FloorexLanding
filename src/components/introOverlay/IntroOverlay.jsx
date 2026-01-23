import React from 'react';
import styles from './introOverlay.module.css';
import logo from '../../assets/img/logo.webp'
import { useIntroOverlay } from './useIntroOverlay.js'

// IntroOverlay.jsx
export default function IntroOverlay() {
  const { logoStyle, lineTopStyle, lineBottomStyle, overlayStyle } = useIntroOverlay(400);

  return (
    <div className={styles.overlay} style={overlayStyle}> 
      <div className={styles.lineTop} style={lineTopStyle} />
      <div className={styles.logoContainer} style={logoStyle}>
        <img src={logo} alt="logo de bienvenida" className={styles.svg} />
      </div>
      <div className={styles.lineBottom} style={lineBottomStyle} />
    </div>
  );
}
