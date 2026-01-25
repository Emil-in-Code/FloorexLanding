import React from 'react';
import { useSlider } from './useSlider.js';
import styles from './ImageSlider.module.css';

const ImageSlider = ({ beforeImage, afterImage }) => {
  const { position, handleSliderChange } = useSlider(50);

  return (
    <div className={styles.container}>
      {/* Imagen del DESPUÉS (Fondo) */}
      <img 
        src={afterImage} 
        alt="Después" 
        className={styles.image} 
      />

      {/* Imagen del ANTES (Recortada) */}
      <div 
        className={styles.clippedWrapper} 
        style={{ width: `${position}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Antes" 
          className={styles.image} 
          style={{ width: `calc(100% * (100 / ${position}))` }} 
          /* El cálculo de arriba evita que la imagen se estire al mover el slider */
        />
      </div>

      {/* Control deslizante */}
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={handleSliderChange}
        className={styles.slider}
      />
    </div>
  );
};

export default ImageSlider;
