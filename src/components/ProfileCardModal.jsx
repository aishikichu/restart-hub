'use client';

import Image from 'next/image';

export default function ProfileCardModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card" 
        onClick={(e) => e.stopPropagation()}
        style={{
          '--card-accent': member.accentColor || 'rgba(180, 170, 230, 0.35)',
          '--card-accent-hover': member.accentColorHover || 'rgba(180, 170, 230, 0.5)',
          '--card-glow': member.glowColor || 'rgba(180, 170, 230, 0.3)',
        }}
      >
        {/* --- Left Side: Avatar & Pattern Background --- */}
        <div className="modal-card__left">
          <div className="modal-card__bg" />
          <div className="modal-card__avatar-wrapper">
            <Image
              src={member.avatar}
              alt={`${member.name}'s avatar`}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
              priority
            />
          </div>
        </div>

        {/* --- Right Side: Bio & Socials --- */}
        <div className="modal-card__right">
          <button className="modal-card__close" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
          
          <div className="modal-card__header">
            <span className="modal-card__role-badge">{member.role}</span>
            <h2 className="modal-card__name">{member.name}</h2>
            {member.handle && <p className="modal-card__handle">{member.handle}</p>}
          </div>

          <div className="modal-card__body">
            <h3 className="modal-card__section-title">Biography / Lore</h3>
            <p className="modal-card__bio">{member.lore || 'A new story waiting to be written...'}</p>
          </div>

          <div className="modal-card__footer">
            <h3 className="modal-card__section-title" style={{ marginBottom: 'var(--space-sm)' }}>Links</h3>
            <div className="modal-card__links">
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-card__btn modal-card__btn--twitter"
                >
                  🐦 Twitter / X
                </a>
              )}
              {member.twitch && (
                <a
                  href={member.twitch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-card__btn modal-card__btn--twitch"
                >
                  📺 Twitch Stream
                </a>
              )}
              {!member.twitter && !member.twitch && (
                <span className="modal-card__no-links">No social links linked yet.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
