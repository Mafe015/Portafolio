import React, { useRef, useEffect } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

export const useDimensions = (ref: React.RefObject<HTMLElement>): Dimensions => {
  const dimensions = useRef<Dimensions>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight; // Fixed typo: offsetHeight
    }
  }, [ref]);

  return dimensions.current;
};