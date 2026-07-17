'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { events } from '@/data/newsEvents';

export default function NewsEvents() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Initial load
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme);

    // Watch for theme changes on the html tag
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const nextTheme = document.documentElement.getAttribute('data-theme') || 'light';
          setTheme(nextTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  // Tell Twitter script to re-scan the DOM when theme changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }, [theme]);

  return (
    <section className="news-events" id="news">
      {/* Twitter Widgets Script */}
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load();
          }
        }}
      />

      <div className="news-events__container">
        {/* --- News & Updates Column (Real Live Twitter Feed) --- */}
        <div className="twitter-feed">
          <h2 className="section-title">
            <span>📢</span> News & Updates
          </h2>
          <div 
            key={theme} 
            className="twitter-timeline-container" 
            style={{ 
              background: 'var(--color-bg-card)', 
              borderRadius: 'var(--radius-xl)', 
              padding: 'var(--space-md)',
              border: '1px solid var(--navbar-border)',
              height: '620px',
              overflow: 'hidden'
            }}
          >
            <a
              className="twitter-timeline"
              data-theme={theme}
              data-chrome="transparent noheader nofooter noborder"
              data-height="580"
              href="https://twitter.com/aishikichu?ref_src=twsrc%5Etfw"
            >
              Loading tweets by @aishikichu...
            </a>
          </div>
        </div>

        {/* --- Events Calendar Column --- */}
        <div className="events-calendar">
          <h2 className="section-title">
            <span>📅</span> Upcoming Events
          </h2>
          {events.map((event) => {
            const [weekday, day, month] = event.date.split(', ');
            return (
              <div key={event.id} className="event-card">
                <div className="event-date-badge">
                  <span className="event-date-weekday">{weekday}</span>
                  <span className="event-date-day">{day}</span>
                  <span className="event-date-month">{month}</span>
                </div>
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-meta">
                    <div className="event-meta-item">
                      <span>🕒</span> {event.time}
                    </div>
                    <div className="event-meta-item">
                      <span>📍</span> {event.location}
                    </div>
                  </div>
                  <p className="event-desc">{event.description}</p>
                </div>
                <span className={`event-status ${event.status === 'Planning' ? 'event-status--planning' : ''}`}>
                  {event.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
