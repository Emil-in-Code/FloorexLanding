import { useState } from 'react';

export const useSlider = (initialPercent = 50) => {
  const [position, setPosition] = useState(initialPercent);

  const handleSliderChange = (e) => {
    setPosition(e.target.value);
  };

  return {
    position,
    handleSliderChange
  };
};
