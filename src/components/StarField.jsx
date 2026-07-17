'use client';

import { useEffect, useRef } from 'react';

export default function StarField() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing stars
    container.innerHTML = '';

    const layers = [
      { count: 120, className: 'star--small', driftRange: 60 },
      { count: 60, className: 'star--medium', driftRange: 40 },
      { count: 25, className: 'star--large', driftRange: 20 },
    ];

    layers.forEach((layer) => {
      const layerEl = document.createElement('div');
      layerEl.className = 'star-layer';

      for (let i = 0; i < layer.count; i++) {
        const star = document.createElement('div');
        star.className = `star ${layer.className}`;

        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // Random twinkle animation
        const twinkleDuration = 2 + Math.random() * 4;
        const twinkleDelay = Math.random() * 5;
        star.style.animation = `twinkle ${twinkleDuration}s ease-in-out ${twinkleDelay}s infinite`;

        // Random drift for large and medium stars
        if (layer.className !== 'star--small') {
          const driftDuration = 15 + Math.random() * 25;
          const driftDelay = Math.random() * 10;
          star.style.animation += `, drift ${driftDuration}s ease-in-out ${driftDelay}s infinite`;
        }

        layerEl.appendChild(star);
      }

      container.appendChild(layerEl);
    });

    // Cleanup on unmount
    return () => {
      if (container) container.innerHTML = '';
    };
  }, []);

  return <div className="starfield" ref={containerRef} aria-hidden="true" />;
}
