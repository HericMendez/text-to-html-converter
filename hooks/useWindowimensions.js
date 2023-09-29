import { useState, useEffect } from 'react';

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? 'horizontal' : 'vertical',
  });

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      const newOrientation = newWidth > newHeight ? 'horizontal' : 'vertical';

      setDimensions({
        width: newWidth,
        height: newHeight,
        orientation: newOrientation,
      });
    };

    window.addEventListener('resize', handleResize);

    // Call it once to set initial dimensions
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dimensions;
};

export default useDimensions;
