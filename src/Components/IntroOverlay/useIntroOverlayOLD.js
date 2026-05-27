import { useScrollAnimation } from './useScrollAnimation';

// useIntroOverlay.js
export function useIntroOverlay(threshold = 300) {
  const progress = useScrollAnimation(threshold);

  // El overlay desaparece en los primeros 0–0.55 del scroll.
  // En 0.55 ya es completamente invisible → hidden.
  // Así cuando el hero empieza a aparecer (desde 0.6 en HeroSection)
  // el overlay ya no existe visualmente.
  const overlayOpacity = Math.max(0, 1 - progress / 0.55);

  const logoStyle = {
    transform: `translate(-50%, -50%) 
                rotate(${progress * 360}deg) 
                scale(${1 - progress * 0.8})`,
    top: `${50 - progress * 45}%`,
    left: `${50 - progress * 42}%`,
    opacity: overlayOpacity,
    pointerEvents: 'none', // nunca bloquea eventos: el scroll tiene que funcionar siempre
  };

  const overlayStyle = {
    opacity: overlayOpacity,
    visibility: progress >= 0.55 ? 'hidden' : 'visible',
    pointerEvents: 'none', // idem
    zIndex: progress >= 0.55 ? -1 : 100,
  };

  return {
    progress,
    logoStyle,
    overlayStyle,
  };
}
