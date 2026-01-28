import { useScrollAnimation } from './useScrollAnimation';

export function useIntroOverlay(threshold = 300) {
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
}
