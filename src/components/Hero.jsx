import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__badge">
        <span className="hero__badge-dot" />
        VRChat Community
      </div>

      <div className="hero__logo-wrapper">
        <Image
          src="/images/restart-logo-tagline.png"
          alt="Re:START — Redo Life Anew"
          width={650}
          height={210}
          className="hero__logo-image"
          priority
        />
      </div>

      <p className="hero__subtitle">
        A VRChat community where every connection sparks a new beginning.
        Meet the crew, explore the lore, and find your place among the stars.
      </p>

      <a href="#roster" className="hero__cta">
        Meet the Crew
        <span className="hero__cta-arrow">↓</span>
      </a>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
