import Image from 'next/image';

export default function ProfileCard({ member, index, onSelect }) {
  return (
    <div
      className="profile-card"
      onClick={() => onSelect(member)}
      style={{
        '--card-accent': member.accentColor || 'rgba(180, 170, 230, 0.35)',
        '--card-accent-hover': member.accentColorHover || 'rgba(180, 170, 230, 0.5)',
        '--card-glow': member.glowColor || 'rgba(180, 170, 230, 0.3)',
        animationDelay: `${index * 0.12}s`,
      }}
    >
      {/* Pattern background */}
      <div className="profile-card__bg" />

      {/* Gradient overlay for text readability */}
      <div className="profile-card__gradient" />

      {/* Avatar PNG */}
      <div className="profile-card__avatar-wrapper">
        <div className="profile-card__avatar">
          <Image
            src={member.avatar}
            alt={`${member.name}'s avatar`}
            fill
            sizes="(max-width: 768px) 100vw, 250px"
            style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
          />
        </div>
      </div>

      {/* Name & info */}
      <div className="profile-card__info">
        <h3 className="profile-card__name">{member.name}</h3>
        {member.handle && (
          <p className="profile-card__handle">{member.handle}</p>
        )}
        {member.role && (
          <p className="profile-card__role">{member.role}</p>
        )}
      </div>
    </div>
  );
}
