'use client';

import { useEffect, useRef, useState } from 'react';
import { members } from '@/data/members';
import ProfileCard from './ProfileCard';
import ProfileCardModal from './ProfileCardModal';

export default function TalentRoster() {
  const sectionRef = useRef(null);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const cards = section.querySelectorAll('.profile-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const founders = members.filter((m) => m.role === 'Founder');
  const crew = members.filter((m) => m.role !== 'Founder');

  return (
    <section className="roster" id="roster" ref={sectionRef}>
      {/* --- Founders Section --- */}
      <div className="roster__section">
        <div className="roster__header">
          <p className="roster__label">Re:START Leaders</p>
          <h2 className="roster__title">Meet the Founders</h2>
          <p className="roster__subtitle">
            The visionary minds shaping the destiny of Re:START.
          </p>
        </div>

        <div className="roster__grid">
          {founders.map((member, index) => (
            <ProfileCard 
              key={member.id} 
              member={member} 
              index={index} 
              onSelect={setSelectedMember} 
            />
          ))}
        </div>
      </div>

      {/* --- Crew Section --- */}
      <div className="roster__section" style={{ marginTop: 'var(--space-4xl)' }}>
        <div className="roster__header">
          <p className="roster__label">The Roster</p>
          <h2 className="roster__title">Meet the Crew</h2>
          <p className="roster__subtitle">
            The amazing people who make Re:START feel like home.
          </p>
        </div>

        <div className="roster__grid">
          {crew.map((member, index) => (
            <ProfileCard 
              key={member.id} 
              member={member} 
              index={index} 
              onSelect={setSelectedMember} 
            />
          ))}
        </div>
      </div>

      {/* --- Detailed Profile Modal Popup --- */}
      {selectedMember && (
        <ProfileCardModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}
    </section>
  );
}
