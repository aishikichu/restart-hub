'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check local storage or fallback to light theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <a href="#hero" className="navbar__logo">
        <Image
          src="/images/restart-logo.png"
          alt="Re:START"
          width={200}
          height={65}
          className="navbar__logo-img"
          priority
        />
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
        <ul className="navbar__links">
          <li>
            <a href="#hero" className="navbar__link">Home</a>
          </li>
          <li>
            <a href="#roster" className="navbar__link">Roster</a>
          </li>
        </ul>
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}
