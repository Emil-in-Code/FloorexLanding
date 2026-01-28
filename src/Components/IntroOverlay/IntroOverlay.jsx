import React from 'react';
import styles from './IntroOverlay.module.css';
import logo from '../../Assets/Images/logo.webp'
import { useIntroOverlay } from './useIntroOverlay.js'

// IntroOverlay.jsx
export default function IntroOverlay() {
  const { logoStyle, lineTopStyle, lineBottomStyle, overlayStyle } = useIntroOverlay(300);

  return (
    <div className={styles.overlay} style={overlayStyle}> 
      {/*<div className={styles.lineTop} style={lineTopStyle} />*/}
      <div className={styles.logoContainer} style={logoStyle}>
        <img src={logo} alt="logo de bienvenida" className={styles.svg} />
      </div>
      <p>Scroll</p>
      {/*<div className={styles.lineBottom} style={lineBottomStyle} />*/}
    </div>
  );
}
