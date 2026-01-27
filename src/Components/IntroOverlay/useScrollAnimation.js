import { useState, useEffect } from 'react';

export function useScrollAnimation(threshold = 500) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculamos el progreso de 0 a 1 en los primeros 'threshold' píxeles
      const currentScroll = window.scrollY;
      const progress = Math.min(currentScroll / threshold, 2);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollProgress;
}
