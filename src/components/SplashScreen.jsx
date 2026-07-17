'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SplashScreen({ onComplete }) {
  const [phase, setPhase] = useState('enter'); // 'enter' | 'hold' | 'exit'

  useEffect(() => {
    // Phase 1: Logo fades in (handled by CSS animation on mount)
    // Phase 2: Hold for a moment
    const holdTimer = setTimeout(() => {
      setPhase('hold');
    }, 400);

    // Phase 3: Fade out
    const exitTimer = setTimeout(() => {
      setPhase('exit');
    }, 2000);

    // Phase 4: Remove from DOM
    const removeTimer = setTimeout(() => {
      onComplete?.();
    }, 2800);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`splash ${phase === 'exit' ? 'splash--exit' : ''}`}>
      <div className="splash__content">
        <div className="splash__logo-glow" />
        <Image
          src="/images/restart-logo-tagline.png"
          alt="Re:START — Redo Life Anew"
          width={500}
          height={170}
          className="splash__logo"
          priority
        />
        <div className="splash__particles">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="splash__particle"
              style={{
                '--delay': `${0.8 + Math.random() * 1.2}s`,
                '--x': `${-50 + Math.random() * 100}px`,
                '--y': `${-80 + Math.random() * -40}px`,
                '--size': `${2 + Math.random() * 4}px`,
                '--opacity': `${0.3 + Math.random() * 0.7}`,
                left: `${20 + Math.random() * 60}%`,
                top: `${40 + Math.random() * 20}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
