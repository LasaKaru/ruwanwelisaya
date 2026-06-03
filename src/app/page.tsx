import Link from 'next/link';
import { Metadata } from 'next';
import StupaScene from '@/components/StupaScene';
import GalleryScene from '@/components/GalleryScene';
import FadeIn from '@/components/FadeIn';
import AdSlot from '@/components/AdSlot';
import Feedback from '@/components/Feedback';
import Icon, { Lotus, LotusDivider } from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Ruwanwelisaya — The Great Stupa of Anuradhapura',
  description: 'Discover the Ruwanwelisaya Maha Stupa, one of the tallest ancient monuments in the world. Sacred pilgrimage site, UNESCO World Heritage, Anuradhapura, Sri Lanka.',
};

const QUICK_INFO = [
  { icon: 'location', title: 'Location', detail: 'Anuradhapura, Sri Lanka' },
  { icon: 'clock', title: 'Open', detail: '24 Hours, Every Day' },
  { icon: 'globe', title: 'Heritage', detail: 'UNESCO World Heritage Site' },
];

const GALLERY_PREVIEW = [
  { title: 'Golden Hour', description: 'The stupa bathed in warm sunset light', kind: 'golden' },
  { title: 'Sacred Night', description: 'Illuminated under the starlit sky', kind: 'night' },
  { title: 'Devotion', description: 'Pilgrims gathering for the Pooja ceremony', kind: 'devotion' },
];

const FEATURES = [
  { icon: 'photograph', title: 'Pilgrim Gallery', description: 'Browse and submit photos from your sacred visits. Every image tells a story of devotion.', href: '/gallery' },
  { icon: 'book', title: 'Community Guides', description: 'Read and share pilgrim guides, tips, and stories to help fellow visitors on their journey.', href: '/community' },
  { icon: 'heart', title: 'Donate & Support', description: 'Contribute to the ongoing preservation and maintenance of this timeless monument.', href: '/donate' },
];

const RECENT_BLOG = [
  { slug: 'first-time-pilgrim-guide', title: "A First-Time Pilgrim's Guide to Anuradhapura", category: 'Guide', when: 'May 4', read: '8 min', kind: 'golden' },
  { slug: 'dutugemunu-and-the-great-stupa', title: 'King Dutugemunu and the Building of the Mahathupa', category: 'History', when: 'Apr 22', read: '12 min', kind: 'dawn' },
  { slug: 'vesak-2026-around-the-stupa', title: 'Vesak 2026: What to Expect Around the Stupa', category: 'Events', when: 'Apr 18', read: '6 min', kind: 'lamp' },
];

const TODAYS_QUOTE = {
  text: 'Better than a thousand hollow words is one word that brings peace.',
  source: 'Dhammapada, Verse 100',
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="rw-hero rw-hero--scene">
        <div className="rw-hero__bg" aria-hidden="true">
          <StupaScene />
          <div className="rw-hero__scrim" />
        </div>
        <div className="rw-hero__content">
          <div className="rw-hero__ornament">
            <Lotus size={28} color="#d4af37" opacity={0.6} />
          </div>
          <h1 className="rw-hero__wordmark">RUWANWELISAYA</h1>
          <div className="rw-hero__sub">THE GREAT STUPA &nbsp;·&nbsp; ANURADHAPURA</div>
          <div className="rw-hero__cta">
            <a href="#history" className="rw-btn rw-btn--hero rw-btn--lg">
              Discover the Sacred
            </a>
          </div>
        </div>
        <div className="rw-hero__scroll" aria-hidden="true">
          <span className="rw-hero__scroll-dot" />
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="rw-info-bar">
        <div className="rw-info-bar__inner">
          {QUICK_INFO.map((info, i) => (
            <FadeIn key={info.title} delay={i * 0.15} className="rw-info-bar__item">
              <Icon name={info.icon} size={22} color="#d4af37" />
              <div>
                <div className="rw-info-bar__lbl">{info.title}</div>
                <div className="rw-info-bar__val">{info.detail}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* AD: HOME TOP */}
      <div className="rw-container rw-ad-wrap">
        <FadeIn><AdSlot id="home-top" size="leaderboard" label="Home — top" /></FadeIn>
      </div>

      {/* HISTORY */}
      <section id="history" className="rw-section">
        <div className="rw-container rw-container--prose">
          <div className="rw-section__head">
            <div className="rw-eyebrow">History</div>
            <h2 className="rw-section__title">A Legacy of Devotion</h2>
            <p className="rw-section__sub">Built by King Dutugemunu in 140 BCE, the Ruwanwelisaya stands as one of the tallest ancient monuments in the world and remains a living symbol of faith.</p>
          </div>
          <div className="rw-history__grid">
            <FadeIn>
              <h3 className="rw-h3">The Great Stupa</h3>
              <p className="rw-body">Rising to a height of 103 metres, the Ruwanwelisaya — also known as Mahathupa or the Great Stupa — is one of the most sacred Buddhist sites in Sri Lanka. Built over the sacred relics of the Buddha, it has been a beacon of spiritual devotion for over two millennia.</p>
              <p className="rw-body">The stupa is surrounded by a magnificent elephant wall featuring 1,900 carved elephants, symbolising strength and reverence. Its pristine white dome, crowned with a golden pinnacle, can be seen from miles away across the ancient city.</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h3 className="rw-h3">Spiritual Significance</h3>
              <p className="rw-body">The Ruwanwelisaya is venerated as one of the Solosmasthana — the sixteen sacred places of worship in Sri Lanka — and one of the Atamasthana, the eight sacred places in Anuradhapura. Pilgrims from around the world visit to offer prayers, flowers, and light oil lamps.</p>
              <p className="rw-body">Every full moon Poya day, thousands gather to circumambulate the stupa, chanting ancient Pali suttas in a profoundly moving display of collective devotion that has continued unbroken for centuries.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* DAILY DHAMMA */}
      <section className="rw-section rw-section--cream rw-section--tight">
        <FadeIn className="rw-quote">
          <LotusDivider />
          <div className="rw-eyebrow">{"Today's Dhamma"}</div>
          <blockquote className="rw-quote__text">&ldquo;{TODAYS_QUOTE.text}&rdquo;</blockquote>
          <p className="rw-quote__src">— {TODAYS_QUOTE.source}</p>
          <div className="rw-quote__line" />
        </FadeIn>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="rw-section rw-section--cream">
        <div className="rw-container">
          <div className="rw-section__head">
            <div className="rw-eyebrow">Gallery</div>
            <h2 className="rw-section__title">Sacred Moments</h2>
            <p className="rw-section__sub">Glimpses of the stupa&apos;s timeless beauty, captured by pilgrims and devotees.</p>
          </div>
          <div className="rw-gallery-preview">
            {GALLERY_PREVIEW.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <div className="rw-photo rw-photo--scene">
                  <GalleryScene kind={item.kind} />
                  <div className="rw-photo__overlay" />
                  <div className="rw-photo__caption">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="rw-section__cta">
            <Link href="/gallery" className="rw-btn rw-btn--secondary">
              <Icon name="photograph" size={16} style={{ marginRight: 8 }} />
              View Full Gallery
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* AD: HOME MID */}
      <div className="rw-container rw-ad-wrap rw-ad-wrap--tight">
        <FadeIn><AdSlot id="home-mid" size="leaderboard" label="Home — mid" /></FadeIn>
      </div>

      {/* BLOG PREVIEW */}
      <section className="rw-section">
        <div className="rw-container">
          <div className="rw-section__head">
            <div className="rw-eyebrow">From the Blog</div>
            <h2 className="rw-section__title">Reflections &amp; Writings</h2>
            <p className="rw-section__sub">Stories, history, conservation notes, and travel guidance — written by our editorial team and contributors who know the stupa in different lights.</p>
          </div>
          <div className="rw-blog-grid">
            {RECENT_BLOG.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.12}>
                <Link href={`/blog/${p.slug}`} className="rw-post-card">
                  <div className="rw-post-card__img rw-photo--scene">
                    <GalleryScene kind={p.kind} />
                    <div className="rw-photo__overlay" />
                  </div>
                  <div className="rw-post-card__body">
                    <div className="rw-eyebrow">{p.category}</div>
                    <h3 className="rw-post-card__title">{p.title}</h3>
                    <div className="rw-post-card__meta">
                      <span>{p.when}</span><span className="rw-dot" /><span>{p.read}</span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="rw-section__cta">
            <Link href="/blog" className="rw-btn rw-btn--secondary">Read all posts</Link>
          </FadeIn>
        </div>
      </section>

      {/* FEATURES */}
      <section className="rw-section rw-section--cream">
        <div className="rw-container">
          <div className="rw-section__head">
            <div className="rw-eyebrow">Explore</div>
            <h2 className="rw-section__title">Explore &amp; Connect</h2>
            <p className="rw-section__sub">Discover resources for pilgrims, share your experience, and support the preservation of this sacred site.</p>
          </div>
          <div className="rw-features">
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.15}>
                <Link href={f.href} className="rw-feature">
                  <span className="rw-feature__icon"><Icon name={f.icon} size={26} color="#d4af37" /></span>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                  <span className="rw-feature__more">Explore <Icon name="arrow" size={12} color="#d4af37" /></span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FEEDBACK */}
      <section className="rw-section rw-section--tight">
        <div className="rw-container rw-container--narrow">
          <FadeIn><Feedback compact /></FadeIn>
        </div>
      </section>

      {/* AD: HOME BOTTOM */}
      <div className="rw-container rw-ad-wrap">
        <FadeIn><AdSlot id="home-bottom" size="rectangle" label="Home — bottom" /></FadeIn>
      </div>

      {/* DONATE CTA */}
      <section className="rw-cta">
        <div className="rw-cta__bg" aria-hidden="true">
          <div className="rw-cta__photo" />
          <div className="rw-cta__scrim" />
        </div>
        <div className="rw-container rw-container--narrow rw-cta__inner">
          <div className="rw-section__head rw-section__head--light">
            <div className="rw-eyebrow rw-eyebrow--light">Support</div>
            <h2 className="rw-section__title">Support the Sacred</h2>
            <p className="rw-section__sub">Your contribution helps preserve one of humanity&apos;s most enduring monuments of faith. Every donation, no matter the size, makes a difference.</p>
          </div>
          <FadeIn className="rw-section__cta">
            <Link href="/donate" className="rw-btn rw-btn--primary rw-btn--lg">
              <Icon name="heart" size={16} style={{ marginRight: 8 }} />
              Make a Donation
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
