/* eslint-disable no-undef */
/* home.jsx — landing page */

const QUICK_INFO = [
  { icon: "location", title: "Location", detail: "Anuradhapura, Sri Lanka" },
  { icon: "clock",    title: "Open",     detail: "24 Hours, Every Day" },
  { icon: "globe",    title: "Heritage", detail: "UNESCO World Heritage Site" },
];

const GALLERY_PREVIEW = [
  { title: "Golden Hour",   description: "The stupa bathed in warm sunset light",     kind: "golden"   },
  { title: "Sacred Night",  description: "Illuminated under the starlit sky",         kind: "night"    },
  { title: "Devotion",      description: "Pilgrims gathering for the Pooja ceremony", kind: "devotion" },
];

const FEATURES = [
  { icon: "photograph", title: "Pilgrim Gallery",   description: "Browse and submit photos from your sacred visits. Every image tells a story of devotion." },
  { icon: "book",       title: "Community Guides",  description: "Read and share pilgrim guides, tips, and stories to help fellow visitors on their journey." },
  { icon: "heart",      title: "Donate & Support",  description: "Contribute to the ongoing preservation and maintenance of this timeless monument." },
];

const TODAYS_QUOTE = {
  text: "Better than a thousand hollow words is one word that brings peace.",
  source: "Dhammapada, Verse 100",
};

const RECENT_BLOG = [
  { slug: "first-time-pilgrim-guide",     title: "A First-Time Pilgrim's Guide to Anuradhapura",   category: "Guide",    when: "May 4",   read: "8 min", kind: "golden"  },
  { slug: "dutugemunu-and-the-great-stupa", title: "King Dutugemunu and the Building of the Mahathupa", category: "History",  when: "Apr 22",  read: "12 min", kind: "dawn" },
  { slug: "vesak-2026-around-the-stupa",  title: "Vesak 2026: What to Expect Around the Stupa",   category: "Events",   when: "Apr 18",  read: "6 min", kind: "lamp"   },
];

function HomePage({ onNavigate }) {
  const flags = useFlags();
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="rw-hero rw-hero--scene">
        <div className="rw-hero__bg" aria-hidden="true">
          <StupaScene/>
          <div className="rw-hero__scrim"/>
        </div>
        <div className="rw-hero__content">
          <div className="rw-hero__ornament">
            <Lotus size={28} color="#d4af37" opacity={0.6}/>
          </div>
          <h1 className="rw-hero__wordmark">RUWANWELISAYA</h1>
          <div className="rw-hero__sub">THE GREAT STUPA &nbsp;·&nbsp; ANURADHAPURA</div>
          <div className="rw-hero__cta">
            <Button variant="hero" size="lg" onClick={() => {
              const el = document.getElementById("history");
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 60;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}>
              Discover the Sacred
            </Button>
          </div>
        </div>

        <div className="rw-hero__scroll" aria-hidden="true">
          <span className="rw-hero__scroll-dot"/>
        </div>
      </section>

      {/* ===== QUICK INFO ===== */}
      <section className="rw-info-bar">
        <div className="rw-info-bar__inner">
          {QUICK_INFO.map((info, i) => (
            <FadeIn key={info.title} delay={i * 0.15} className="rw-info-bar__item">
              <Icon name={info.icon} size={22} color="#d4af37"/>
              <div>
                <div className="rw-info-bar__lbl">{info.title}</div>
                <div className="rw-info-bar__val">{info.detail}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ===== AD: HOME TOP ===== */}
      {flags.showAds && (
        <div className="rw-container rw-ad-wrap">
          <FadeIn><AdSlot id="home-top" size="leaderboard" label="Home — top"/></FadeIn>
        </div>
      )}

      {/* ===== HISTORY ===== */}
      <section id="history" className="rw-section">
        <div className="rw-container rw-container--prose">
          <SectionHeading
            eyebrow="History"
            title="A Legacy of Devotion"
            subtitle="Built by King Dutugemunu in 140 BCE, the Ruwanwelisaya stands as one of the tallest ancient monuments in the world and remains a living symbol of faith."
          />
          <div className="rw-history__grid">
            <FadeIn>
              <h3 className="rw-h3">The Great Stupa</h3>
              <p className="rw-body">
                Rising to a height of 103 metres, the Ruwanwelisaya — also known as Mahathupa or the Great Stupa — is one of the most sacred Buddhist sites in Sri Lanka. Built over the sacred relics of the Buddha, it has been a beacon of spiritual devotion for over two millennia.
              </p>
              <p className="rw-body">
                The stupa is surrounded by a magnificent elephant wall featuring 1,900 carved elephants, symbolising strength and reverence. Its pristine white dome, crowned with a golden pinnacle, can be seen from miles away across the ancient city.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h3 className="rw-h3">Spiritual Significance</h3>
              <p className="rw-body">
                The Ruwanwelisaya is venerated as one of the Solosmasthana — the sixteen sacred places of worship in Sri Lanka — and one of the Atamasthana, the eight sacred places in Anuradhapura. Pilgrims from around the world visit to offer prayers, flowers, and light oil lamps.
              </p>
              <p className="rw-body">
                Every full moon Poya day, thousands gather to circumambulate the stupa, chanting ancient Pali suttas in a profoundly moving display of collective devotion that has continued unbroken for centuries.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== DAILY DHAMMA ===== */}
      <section className="rw-section rw-section--cream rw-section--tight">
        <FadeIn className="rw-quote">
          <LotusDivider triple/>
          <Eyebrow>Today's Dhamma</Eyebrow>
          <blockquote className="rw-quote__text">&ldquo;{TODAYS_QUOTE.text}&rdquo;</blockquote>
          <p className="rw-quote__src">— {TODAYS_QUOTE.source}</p>
          <div className="rw-quote__line"/>
        </FadeIn>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="rw-section rw-section--cream">
        <div className="rw-container">
          <SectionHeading
            eyebrow="Gallery"
            title="Sacred Moments"
            subtitle="Glimpses of the stupa's timeless beauty, captured by pilgrims and devotees."
          />
          <div className="rw-gallery-preview">
            {GALLERY_PREVIEW.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <div className="rw-photo rw-photo--scene">
                  <GalleryScene kind={item.kind}/>
                  <div className="rw-photo__overlay"/>
                  <div className="rw-photo__caption">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="rw-section__cta">
            <Button variant="secondary" onClick={() => onNavigate("gallery")}>
              <Icon name="photograph" size={16} style={{ marginRight: 8 }}/>
              View Full Gallery
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* ===== AD: HOME MID ===== */}
      {flags.showAds && (
        <div className="rw-container rw-ad-wrap rw-ad-wrap--tight">
          <FadeIn><AdSlot id="home-mid" size="leaderboard" label="Home — mid"/></FadeIn>
        </div>
      )}

      {/* ===== BLOG PREVIEW ===== */}
      <section className="rw-section">
        <div className="rw-container">
          <SectionHeading
            eyebrow="From the Blog"
            title="Reflections &amp; Writings"
            subtitle="Stories, history, conservation notes, and travel guidance — written by our editorial team and contributors who know the stupa in different lights."
          />
          <div className="rw-blog-grid">
            {RECENT_BLOG.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.12}>
                <a className="rw-post-card" href="#" onClick={(e) => { e.preventDefault(); onNavigate("blog"); }}>
                  <div className="rw-post-card__img rw-photo--scene">
                    <GalleryScene kind={p.kind}/>
                    <div className="rw-photo__overlay"/>
                  </div>
                  <div className="rw-post-card__body">
                    <Eyebrow>{p.category}</Eyebrow>
                    <h3 className="rw-post-card__title">{p.title}</h3>
                    <div className="rw-post-card__meta">
                      <span>{p.when}</span><span className="rw-dot"/><span>{p.read}</span>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="rw-section__cta">
            <Button variant="secondary" onClick={() => onNavigate("blog")}>
              Read all posts
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="rw-section rw-section--cream">
        <div className="rw-container">
          <SectionHeading
            eyebrow="Explore"
            title="Explore &amp; Connect"
            subtitle="Discover resources for pilgrims, share your experience, and support the preservation of this sacred site."
          />
          <div className="rw-features">
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.15}>
                <a className="rw-feature" href="#" onClick={(e) => {
                  e.preventDefault();
                  onNavigate(i === 0 ? "gallery" : i === 1 ? "community" : "donate");
                }}>
                  <span className="rw-feature__icon"><Icon name={f.icon} size={26} color="#d4af37"/></span>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                  <span className="rw-feature__more">Explore <Icon name="arrow" size={12} color="#d4af37"/></span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEEDBACK ===== */}
      <section className="rw-section rw-section--tight">
        <div className="rw-container rw-container--narrow">
          <FadeIn><FeedbackForm compact/></FadeIn>
        </div>
      </section>

      {/* ===== AD: HOME BOTTOM ===== */}
      {flags.showAds && (
        <div className="rw-container rw-ad-wrap">
          <FadeIn><AdSlot id="home-bottom" size="rectangle" label="Home — bottom"/></FadeIn>
        </div>
      )}

      {/* ===== DONATE CTA ===== */}
      <section className="rw-cta">
        <div className="rw-cta__bg" aria-hidden="true">
          <div className="rw-cta__photo"/>
          <div className="rw-cta__scrim"/>
        </div>
        <div className="rw-container rw-container--narrow rw-cta__inner">
          <SectionHeading
            eyebrow="Support"
            title="Support the Sacred"
            subtitle="Your contribution helps preserve one of humanity's most enduring monuments of faith. Every donation, no matter the size, makes a difference."
            light
          />
          <FadeIn className="rw-section__cta">
            <Button variant="primary" size="lg" onClick={() => onNavigate("donate")}>
              <Icon name="heart" size={16} style={{ marginRight: 8 }}/>
              Make a Donation
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { HomePage });
