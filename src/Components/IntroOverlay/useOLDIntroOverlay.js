import { useScrollAnimation } from './useScrollAnimation';

// useIntroOverlay.js
export function useIntroOverlay(threshold = 300) {
  const progress = useScrollAnimation(threshold);

  // Forzamos que a mitad del scroll (0.5) ya empiece a desaparecer rápido
  // y que en 0.8 ya sea invisible.
  const fastOpacity = Math.max(0, 1 - progress * 1.5); 

  const logoStyle = {
    transform: `translate(-50%, -50%) 
                rotate(${progress * 360}deg) 
                scale(${1 - progress * 0.8})`,
    top: `${50 - progress * 45}%`,
    left: `${50 - progress * 42}%`,
    opacity: fastOpacity,
    pointerEvents: progress > 0.5 ? 'none' : 'all'
  };

  const overlayStyle = {
    opacity: fastOpacity,
    // Importante: usamos display none o visibility hidden temprano para que no se vea en mobile
    visibility: progress > 0.8 ? 'hidden' : 'visible',
    pointerEvents: progress > 0.5 ? 'none' : 'all',
    zIndex: progress > 0.8 ? -1 : 100 // Mandarlo al fondo cuando ya no sirve
  };

  return {
    progress,
    logoStyle,
    overlayStyle
  };
}


/*export function useIntroOverlay(threshold = 300) {
  const progress = useScrollAnimation(threshold);

  const logoStyle = {
    transform: `translate(-50%, -50%) 
                rotate(${progress * 360}deg) 
                scale(${1 - progress * 0.8})`,
    top: `${50 - progress * 45}%`,
    left: `${50 - progress * 42}%`,
    opacity: 1 - progress * 1.2,
    pointerEvents: progress > 1 ? 'none' : 'all'
  };


  const overlayStyle = {
    opacity: 1 - progress *1.2,
    pointerEvents: progress > 0.9 ? 'none' : 'all',
    visibility: progress >= 1 ? 'hidden' : 'visible'
  };

  return {
    progress,
    logoStyle,
    overlayStyle
  };
}*/
