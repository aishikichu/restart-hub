'use client';

import Image from 'next/image';
import { tweets, events } from '@/data/newsEvents';

export default function NewsEvents() {
  return (
    <section className="news-events" id="news">
      <div className="news-events__container">
        {/* --- News & Updates Column (Twitter Feed) --- */}
        <div className="twitter-feed">
          <h2 className="section-title">
            <span>📢</span> News & Updates
          </h2>
          {tweets.map((tweet) => (
            <a
              key={tweet.id}
              href={tweet.link}
              target="_blank"
              rel="noopener noreferrer"
              className="tweet-card"
              style={{ textDecoration: 'none', display: 'flex' }}
            >
              <div className="tweet-avatar" style={{ width: '48px', height: '48px', position: 'relative' }}>
                <Image
                  src={tweet.avatar}
                  alt={tweet.author}
                  fill
                  sizes="48px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="tweet-content">
                <div className="tweet-header">
                  <div className="tweet-author-info">
                    <span className="tweet-name">{tweet.author}</span>
                    <span className="tweet-badge">✓</span>
                    <span className="tweet-handle">{tweet.handle}</span>
                  </div>
                  <span className="tweet-time">{tweet.timestamp}</span>
                </div>
                <p className="tweet-text">{tweet.content}</p>
                <div className="tweet-actions">
                  <span className="tweet-action">💬 {tweet.retweets * 2}</span>
                  <span className="tweet-action">🔁 {tweet.retweets}</span>
                  <span className="tweet-action">❤️ {tweet.likes}</span>
                </div>
              </div>
            </a>
          ))}
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
