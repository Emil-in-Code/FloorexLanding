import { useState, useEffect, useCallback, useRef } from 'react';
import { useScrollAnimation } from './useScrollAnimation';

export function useIntroOverlay(threshold = 300, autoScrollDelay = 3000) {
  const progress = useScrollAnimation(threshold);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
  const autoScrollTriggered = useRef(false);
  const overlayOpacity = Math.max(0, 1 - progress / 0.55);
  const isComplete = progress >= 0.55;

  // Auto-scroll después del delay si no hay interacción
  useEffect(() => {
    if (!shouldAutoScroll || autoScrollTriggered.current || isComplete) return;

    const timer = setTimeout(() => {
      if (!autoScrollTriggered.current && !isComplete) {
        autoScrollTriggered.current = true;
        window.scrollTo({
          top: threshold,
          behavior: 'smooth'
        });
      }
    }, autoScrollDelay);

    return () => clearTimeout(timer);
  }, [shouldAutoScroll, autoScrollDelay, threshold, isComplete]);

  // Cancelar auto-scroll si el usuario interactúa
  const cancelAutoScroll = useCallback(() => {
    setShouldAutoScroll(false);
  }, []);

  const logoStyle = {
    transform: `translate(-50%, -50%) rotate(${progress * 360}deg) scale(${1 - progress * 0.8})`,
    top: `${50 - progress * 45}%`,
    left: `${50 - progress * 42}%`,
    opacity: overlayOpacity,
    pointerEvents: 'none',
    willChange: 'transform, top, left, opacity', // hint de rendimiento
  };

  const overlayStyle = {
    opacity: overlayOpacity,
    visibility: isComplete ? 'hidden' : 'visible',
    pointerEvents: 'auto', // Cambiado a 'auto' para permitir clicks en el botón
    zIndex: isComplete ? -1 : 100,
  };

  return {
    progress,
    logoStyle,
    overlayStyle,
    isComplete,
    cancelAutoScroll,
    shouldAutoScroll: shouldAutoScroll && !isComplete,
  };
}
