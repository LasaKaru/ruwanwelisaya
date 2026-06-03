'use client';
import { useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import GalleryScene from '@/components/GalleryScene';
import { POSTS, CATEGORIES } from '@/lib/posts';

export default function BlogPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? POSTS : POSTS.filter(p => p.category === active);

  return (
    <div className="rw-page">
      <header className="rw-page__header">
        <div className="rw-container">
          <div className="rw-eyebrow">Blog</div>
          <h1 className="rw-page__title">Reflections &amp; Writings</h1>
          <p className="rw-page__lead">Thirty in-depth articles — pilgrim guides, ancient history, architecture, conservation, and living tradition — written by our editorial team and contributors who know the stupa in different lights.</p>
        </div>
      </header>

      <div className="rw-container">
        <div className="rw-chips" style={{ marginBottom: 36 }}>
          {CATEGORIES.map(c => {
            const n = c === 'All' ? POSTS.length : POSTS.filter(p => p.category === c).length;
            return (
              <button key={c} className={`rw-chip ${active === c ? 'is-active' : ''}`} onClick={() => setActive(c)}>
                {c} <span className="rw-chip__count">{n}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured post */}
      {filtered[0] && (
        <section className="rw-section rw-section--tight">
          <div className="rw-container">
            <FadeIn>
              <Link href={`/blog/${filtered[0].slug}`} className="rw-feature-post">
                <div className="rw-feature-post__img rw-photo--scene">
                  <GalleryScene kind={filtered[0].kind} />
                  <div className="rw-photo__overlay" />
                </div>
                <div className="rw-feature-post__body">
                  <div className="rw-eyebrow">Featured · {filtered[0].category}</div>
                  <h2 className="rw-feature-post__title">{filtered[0].title}</h2>
                  <p className="rw-feature-post__excerpt">{filtered[0].excerpt}</p>
                  <div className="rw-feature-post__meta">
                    <span>{filtered[0].author}</span>
                    <span className="rw-dot" />
                    <span>{filtered[0].when}</span>
                    <span className="rw-dot" />
                    <span>{filtered[0].read}</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="rw-section">
        <div className="rw-container">
          <div className="rw-blog-grid">
            {filtered.slice(1).map((p, i) => (
              <FadeIn key={p.slug} delay={(i % 3) * 0.08}>
                <Link href={`/blog/${p.slug}`} className="rw-post-card">
                  <div className="rw-post-card__img rw-photo--scene">
                    <GalleryScene kind={p.kind} />
                    <div className="rw-photo__overlay" />
                  </div>
                  <div className="rw-post-card__body">
                    <div className="rw-eyebrow">{p.category}</div>
                    <h3 className="rw-post-card__title">{p.title}</h3>
                    <p className="rw-post-card__excerpt">{p.excerpt}</p>
                    <div className="rw-post-card__meta">
                      <span>{p.author}</span>
                      <span className="rw-dot" />
                      <span>{p.read}</span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
