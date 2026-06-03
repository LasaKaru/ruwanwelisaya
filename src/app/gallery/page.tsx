'use client';
import { useState } from 'react';
import FadeIn from '@/components/FadeIn';
import GalleryScene from '@/components/GalleryScene';
import Icon from '@/components/Icon';

const GALLERY_CATEGORIES = ['All', 'Golden Hour', 'Night', 'Pilgrims', 'Architecture', 'Festivals'];

const GALLERY_PHOTOS = [
  { title: 'Dawn Over the Dome', by: 'Anura S.', kind: 'dawn', tall: true, cat: 'Golden Hour' },
  { title: 'Devotion Hall', by: 'Priya K.', kind: 'devotion', tall: false, cat: 'Pilgrims' },
  { title: 'Vesak Lanterns', by: 'Nimal P.', kind: 'lamp', tall: false, cat: 'Festivals' },
  { title: 'Elephant Wall Detail', by: 'Saman D.', kind: 'wall', tall: true, cat: 'Architecture' },
  { title: 'Full Moon Procession', by: 'Hiruni W.', kind: 'procession', tall: false, cat: 'Pilgrims' },
  { title: 'Morning Pooja', by: 'Tharindu', kind: 'golden', tall: false, cat: 'Golden Hour' },
  { title: 'Oil Lamp Offering', by: 'Kavindi', kind: 'lamp', tall: false, cat: 'Pilgrims' },
  { title: 'Pinnacle at Sunset', by: 'Roshan', kind: 'golden', tall: true, cat: 'Golden Hour' },
  { title: 'Sacred Night', by: 'Asanka G.', kind: 'night', tall: false, cat: 'Night' },
];

export default function GalleryPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? GALLERY_PHOTOS : GALLERY_PHOTOS.filter(p => p.cat === active);

  return (
    <div className="rw-page">
      <header className="rw-page__header">
        <div className="rw-container">
          <div className="rw-eyebrow">Gallery</div>
          <h1 className="rw-page__title">Sacred Moments</h1>
          <p className="rw-page__lead">Photographs submitted by pilgrims and devotees. Every image tells a story of devotion — the dawn light striking the dome, the slow circle of feet around the stupa at full moon, the small bowl of an oil lamp lit by a child.</p>
        </div>
      </header>

      <div className="rw-container rw-gallery">
        <div className="rw-chips" role="tablist">
          {GALLERY_CATEGORIES.map(c => (
            <button key={c} className={`rw-chip ${active === c ? 'is-active' : ''}`} onClick={() => setActive(c)} role="tab" aria-selected={active === c}>
              {c}
            </button>
          ))}
        </div>

        <div className="rw-masonry">
          {filtered.map((p, i) => (
            <FadeIn key={p.title} delay={(i % 6) * 0.08} className={`rw-tile ${p.tall ? 'rw-tile--tall' : ''}`}>
              <div className="rw-photo rw-photo--scene">
                <GalleryScene kind={p.kind} />
                <div className="rw-photo__overlay" />
                <div className="rw-photo__caption">
                  <h3>{p.title}</h3>
                  <p>by {p.by}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="rw-section__cta">
          <button className="rw-btn rw-btn--primary rw-btn--md">
            <Icon name="upload" size={14} style={{ marginRight: 8 }} />
            Submit a Photo
          </button>
        </div>
      </div>
    </div>
  );
}
