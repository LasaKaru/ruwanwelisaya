'use client';
import { useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import AdSlot from '@/components/AdSlot';
import Feedback from '@/components/Feedback';
import EventScenes from '@/components/EventScenes';
import Icon from '@/components/Icon';
import { POYA_DAYS, DAILY_OBSERVANCES, type PoyadDay, type DailyObservance } from '@/lib/events';

type AnyEvent = PoyadDay | DailyObservance;

function DailySunIcon({ id }: { id: string }) {
  if (id === 'ude-danaya') return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <line x1="0" y1="24" x2="32" y2="24" stroke="#d4af37" strokeWidth="1.5"/>
      <circle cx="16" cy="20" r="7" fill="#f7d94e"/>
      <g stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round">
        <line x1="16" y1="6" x2="16" y2="10"/>
        <line x1="6" y1="18" x2="9" y2="18"/>
        <line x1="23" y1="18" x2="26" y2="18"/>
        <line x1="9" y1="13" x2="11" y2="15"/>
        <line x1="23" y1="13" x2="21" y2="15"/>
      </g>
    </svg>
  );
  if (id === 'dawal-danaya') return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <circle cx="16" cy="16" r="6" fill="#f7d94e"/>
      <g stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round">
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="16" y1="26" x2="16" y2="30"/>
        <line x1="2" y1="16" x2="6" y2="16"/>
        <line x1="26" y1="16" x2="30" y2="16"/>
        <line x1="6" y1="6" x2="9" y2="9"/>
        <line x1="23" y1="23" x2="26" y2="26"/>
        <line x1="6" y1="26" x2="9" y2="23"/>
        <line x1="23" y1="9" x2="26" y2="6"/>
      </g>
    </svg>
  );
  if (id === 'gilanpasa') return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <line x1="0" y1="22" x2="32" y2="22" stroke="#c77b2b" strokeWidth="1.5"/>
      <path d="M 9 22 A 7 7 0 0 1 23 22 Z" fill="#c77b2b"/>
      <g stroke="#c77b2b" strokeWidth="1.5" strokeLinecap="round">
        <line x1="3" y1="14" x2="7" y2="16"/>
        <line x1="29" y1="14" x2="25" y2="16"/>
        <line x1="16" y1="8" x2="16" y2="12"/>
      </g>
    </svg>
  );
  if (id === 'buddha-pooja') return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <g stroke="#d4af37" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <ellipse cx="16" cy="20" rx="3" ry="8"/>
        <ellipse cx="11" cy="18" rx="3" ry="7" transform="rotate(-30 11 18)"/>
        <ellipse cx="21" cy="18" rx="3" ry="7" transform="rotate(30 21 18)"/>
        <ellipse cx="8" cy="20" rx="2.5" ry="6" transform="rotate(-55 8 20)"/>
        <ellipse cx="24" cy="20" rx="2.5" ry="6" transform="rotate(55 24 20)"/>
        <circle cx="16" cy="22" r="1.6" fill="#d4af37"/>
      </g>
    </svg>
  );
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <path d="M 22 16 A 8 8 0 1 1 14 8 A 6 6 0 0 0 22 16 Z" fill="#d4af37"/>
      <circle cx="6" cy="8" r="1" fill="#d4af37"/>
      <circle cx="26" cy="26" r="1" fill="#d4af37"/>
      <circle cx="10" cy="26" r="0.8" fill="#d4af37"/>
    </svg>
  );
}

function EventDetailView({ event, onBack }: { event: AnyEvent; onBack: () => void }) {
  const isPoya = 'date' in event;
  return (
    <article className="rw-page rw-event-detail">
      <div className="rw-event-detail__hero">
        <EventScenes theme={event.theme} />
        <div className="rw-event-detail__scrim" />
        <div className="rw-container rw-event-detail__hero-inner">
          <button className="rw-back" onClick={onBack}>
            <Icon name="arrowLeft" size={14} /> <span>All events</span>
          </button>
          <div className="rw-eyebrow rw-eyebrow--light">{'eyebrow' in event ? event.eyebrow : event.subtitle}</div>
          <h1 className="rw-event-detail__title">{event.title}</h1>
          {event.sinhala && <div className="rw-event-detail__sinhala">{event.sinhala}</div>}
          <p className="rw-event-detail__sub">{event.subtitle}</p>
          {isPoya && (event as PoyadDay).date && <div className="rw-event-detail__date">{(event as PoyadDay).date}</div>}
        </div>
      </div>

      <div className="rw-container rw-container--prose rw-event-detail__body">
        <FadeIn>
          <p className="rw-lede">{event.blurb}</p>
          <div className="rw-event-detail__grid">
            {event.details.map((d, i) => (
              <div key={i} className="rw-detail-row">
                <div className="rw-detail-row__lbl">{d.lbl}</div>
                <div className="rw-detail-row__val">{d.val}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {isPoya && (event as PoyadDay).extended && (
          <FadeIn delay={0.15}>
            <h3 className="rw-h3">What to expect at the stupa</h3>
            <p className="rw-body">On the day itself, the courtyard fills before dawn. Pilgrims wear white. Each carries a small bowl — flowers, oil for a lamp, sometimes a stick of incense. The circumambulation is unhurried; people stop where they need to and continue when they are ready. The chanting from the loudspeakers is in Pali, but it doesn&apos;t matter if you don&apos;t follow the words. The voices, the dome, the soft pressure of so many bare feet on the sand — that is the meaning.</p>
            <p className="rw-body">By dusk the lights come up. If the moon is clear, it appears directly above the pinnacle from the east entrance — a coincidence of orientation that has been remarked on for centuries.</p>
          </FadeIn>
        )}

        <FadeIn delay={0.2}>
          <div className="rw-event-cta">
            <h3 className="rw-h3">Plan your visit</h3>
            <p className="rw-body">The stupa is open 24 hours. On Poya days, the courtyard is busiest between 4&nbsp;AM and 8&nbsp;AM, and again between 6&nbsp;PM and 11&nbsp;PM. Bring water, a light shawl, and prepare to walk in bare feet. Photography is permitted in the outer courtyard.</p>
            <div className="rw-event-cta__row">
              <a href="https://maps.google.com/?q=Ruwanwelisaya,Anuradhapura" target="_blank" rel="noopener noreferrer" className="rw-btn rw-btn--secondary rw-btn--md">
                <Icon name="location" size={14} style={{ marginRight: 8 }} />Get directions
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      <section className="rw-section rw-section--cream rw-section--tight">
        <div className="rw-container rw-container--prose">
          <FadeIn><Feedback compact /></FadeIn>
        </div>
      </section>
    </article>
  );
}

export default function EventsPage() {
  const [openEvent, setOpenEvent] = useState<string | null>(null);
  const upcoming = POYA_DAYS.find(d => d.id === 'vesak')!;

  if (openEvent) {
    const all: AnyEvent[] = [...POYA_DAYS, ...DAILY_OBSERVANCES];
    const ev = all.find(e => e.id === openEvent);
    if (ev) return <EventDetailView event={ev} onBack={() => setOpenEvent(null)} />;
  }

  return (
    <div className="rw-page">
      <header className="rw-page__header">
        <div className="rw-container">
          <div className="rw-eyebrow">Events</div>
          <h1 className="rw-page__title">Sacred Days &amp; Observances</h1>
          <p className="rw-page__lead">The Sinhala Buddhist calendar follows the moon. Each full moon — Poya — carries the memory of one event from the Buddha&apos;s life or from the early history of the Dhamma. Daily rituals at the temple mark the passage of every dawn and noon.</p>
        </div>
      </header>

      {/* Featured upcoming event */}
      <section className="rw-section rw-section--tight">
        <div className="rw-container">
          <FadeIn>
            <div className="rw-event-feature" onClick={() => setOpenEvent(upcoming.id)} style={{ cursor: 'pointer' }}>
              <div className="rw-event-feature__scene">
                <EventScenes theme={upcoming.theme} />
                <div className="rw-event-feature__scrim" />
              </div>
              <div className="rw-event-feature__body">
                <div className="rw-eyebrow rw-eyebrow--light">Up next · {upcoming.date}</div>
                <h2 className="rw-event-feature__title">{upcoming.title}</h2>
                <p className="rw-event-feature__sub">{upcoming.subtitle}</p>
                <p className="rw-event-feature__blurb">{upcoming.blurb}</p>
                <button className="rw-btn rw-btn--hero rw-btn--md" onClick={e => { e.stopPropagation(); setOpenEvent(upcoming.id); }}>
                  Read more about {upcoming.name}
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Poya calendar */}
      <section className="rw-section rw-section--cream">
        <div className="rw-container">
          <div className="rw-section__head">
            <div className="rw-eyebrow">The Twelve Poya Days</div>
            <h2 className="rw-section__title">A Year of Full Moons</h2>
            <p className="rw-section__sub">The Sinhala calendar gives each full moon a name and a story. Tap any month to read its history.</p>
          </div>
          <div className="rw-poya-grid">
            {POYA_DAYS.map((p, i) => (
              <FadeIn key={p.id} delay={(i % 4) * 0.08}>
                <button className={`rw-poya-card rw-poya-card--${p.theme}`} onClick={() => setOpenEvent(p.id)}>
                  <div className="rw-poya-card__moon">
                    <div className="rw-poya-card__phase" />
                  </div>
                  <div className="rw-poya-card__body">
                    <div className="rw-poya-card__month">{p.month}</div>
                    <div className="rw-poya-card__name">{p.name}</div>
                    <div className="rw-poya-card__sinhala">{p.sinhala}</div>
                    <p className="rw-poya-card__sub">{p.subtitle}</p>
                    <span className="rw-poya-card__date">{p.date}</span>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Daily observances */}
      <section className="rw-section">
        <div className="rw-container">
          <div className="rw-section__head">
            <div className="rw-eyebrow">Daily Observances</div>
            <h2 className="rw-section__title">The Rhythm of the Temple</h2>
            <p className="rw-section__sub">Five rituals mark every day at the temple — from the first alms before sunrise to the last protective chant after dark.</p>
          </div>
          <div className="rw-daily-grid">
            {DAILY_OBSERVANCES.map((d, i) => (
              <FadeIn key={d.id} delay={(i % 3) * 0.1}>
                <button className="rw-daily-card" onClick={() => setOpenEvent(d.id)}>
                  <div className="rw-daily-card__time">
                    <div className="rw-daily-card__sun">
                      <DailySunIcon id={d.id} />
                    </div>
                    <span>{d.time}</span>
                  </div>
                  <h3 className="rw-daily-card__title">{d.title}</h3>
                  <div className="rw-daily-card__sinhala">{d.sinhala}</div>
                  <p className="rw-daily-card__sub">{d.subtitle}</p>
                  <span className="rw-daily-card__more">Read <Icon name="arrow" size={12} color="#d4af37" /></span>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="rw-container rw-ad-wrap">
        <AdSlot id="home-bottom" size="leaderboard" label="Events — bottom" />
      </div>
    </div>
  );
}
