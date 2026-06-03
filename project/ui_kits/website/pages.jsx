/* eslint-disable no-undef */
/* pages.jsx — static content pages: About, Contact, Privacy Policy.
   Required for AdSense approval (about / contact / privacy). */

/* ---------- SEO helper (reuses blog.jsx globals if present) ---------- */
function applyPageSeo(slug, title, description) {
  const url = `${window.BASE_URL || "https://ruwanwelisaya.com"}/${slug}`;
  document.title = `${title} | Ruwanwelisaya`;
  const set = (name, content, attr) => {
    attr = attr || "name";
    let el = document.head.querySelector(`meta[${attr}="${name}"]`);
    if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
    el.setAttribute("content", content);
  };
  set("description", description);
  set("og:title", `${title} | Ruwanwelisaya`, "property");
  set("og:description", description, "property");
  set("og:url", url, "property");
  let canon = document.head.querySelector('link[rel="canonical"]');
  if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
  canon.setAttribute("href", url);
}

/* ============================================================
   ABOUT
   ============================================================ */
function AboutPage() {
  React.useEffect(() => {
    applyPageSeo("about", "About Us", "About Ruwanwelisaya — a digital sanctuary dedicated to preserving the history, beauty, and spiritual significance of the Great Stupa of Anuradhapura, Sri Lanka.");
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="rw-page">
      <div className="rw-page__hero rw-page__hero--about">
        <div className="rw-page__hero-scrim"/>
        <div className="rw-container rw-page__hero-inner">
          <Eyebrow light>About</Eyebrow>
          <h1 className="rw-page__hero-title">A Digital Sanctuary</h1>
        </div>
      </div>

      <div className="rw-container rw-container--prose rw-static">
        <FadeIn>
          <p className="rw-lede">
            Ruwanwelisaya.com is a digital gateway to the Ruwanwelisaya Maha Stupa — one of the tallest ancient structures in the world and a sacred pilgrimage site for millions of Buddhists.
          </p>
          <p className="rw-body">
            Built by King Dutugemunu over 2,300 years ago, the Great Stupa stands as an enduring testament to devotion, craftsmanship, and the resilience of Sri Lankan heritage. Our mission is to make its history, beauty, and spiritual significance accessible to everyone — whether you are planning a pilgrimage, studying Buddhist heritage, or simply seeking inspiration from one of humanity's greatest architectural achievements.
          </p>

          <h2 className="rw-article__h2">Our mission</h2>
          <p className="rw-body">
            We exist to preserve and share. We document the stupa's history with care, publish practical guidance for pilgrims and travellers, host a community of devotees and visitors, and channel support toward the ongoing conservation of the Sacred City. Every article is researched, written, and reviewed by our editorial team to ensure historical accuracy and respectful representation of Buddhist tradition.
          </p>

          <h2 className="rw-article__h2">Who we are</h2>
          <p className="rw-body">
            We are a small, dedicated team of writers, historians, photographers, and Buddhist devotees based in Sri Lanka. Community-submitted content — forum posts, reviews, and photo uploads — is moderated by our team before publication to maintain quality and appropriateness. We are not bots, scrapers, or an AI-generated content farm; every page is crafted by people who care deeply about the legacy of the Ruwanwelisaya.
          </p>

          <div className="rw-values">
            {[
              { icon: "heart", t: "Devotion", d: "Preserving the sacred traditions and spiritual significance of this timeless monument." },
              { icon: "globe", t: "Accessibility", d: "Making the rich heritage of Ruwanwelisaya accessible to devotees worldwide." },
              { icon: "shield", t: "Preservation", d: "Supporting the physical conservation and cultural protection of the Great Stupa." },
              { icon: "book", t: "Education", d: "Sharing knowledge of Buddhist heritage, archaeology, and the history of Anuradhapura." },
            ].map((v) => (
              <div key={v.t} className="rw-value">
                <span className="rw-value__icon"><Icon name={v.icon} size={24} color="#d4af37"/></span>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>

          <h2 className="rw-article__h2">A note on affiliation</h2>
          <p className="rw-body">
            This website is a labour of love — built by devotees, for devotees. We are not officially affiliated with the temple administration or any government body, but we work in the spirit of preserving and sharing the stupa's legacy with the world. Where we earn revenue (through advertising and reader donations), it supports the running of this site and contributions to conservation efforts.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}

/* ============================================================
   CONTACT
   ============================================================ */
function ContactPage() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", subject: "General enquiry", message: "" });
  React.useEffect(() => {
    applyPageSeo("contact", "Contact Us", "Contact the Ruwanwelisaya editorial team — questions, corrections, photo submissions, partnership and advertising enquiries.");
    window.scrollTo({ top: 0 });
  }, []);
  const submit = (e) => { e.preventDefault(); if (form.name && form.email && form.message) { setSent(true); setTimeout(() => setSent(false), 6000); } };
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="rw-page">
      <div className="rw-page__hero rw-page__hero--contact">
        <div className="rw-page__hero-scrim"/>
        <div className="rw-container rw-page__hero-inner">
          <Eyebrow light>Contact</Eyebrow>
          <h1 className="rw-page__hero-title">Get in Touch</h1>
        </div>
      </div>

      <div className="rw-container rw-container--prose rw-static">
        <div className="rw-contact-grid">
          <FadeIn className="rw-contact-form-wrap">
            {sent ? (
              <div className="rw-feedback rw-feedback--sent">
                <div className="rw-feedback__sent-mark"><Lotus size={28} color="#d4af37" opacity={0.85}/></div>
                <h3 className="rw-h3" style={{ marginTop: 16 }}>Thank you.</h3>
                <p className="rw-body">Your message has been received. We read every note and reply within a few days.</p>
              </div>
            ) : (
              <form className="rw-donate__form" onSubmit={submit}>
                <div className="rw-donate__grid-2">
                  <div className="rw-donate__group">
                    <label className="rw-donate__lbl">Name</label>
                    <input className="rw-input" type="text" value={form.name} onChange={upd("name")} placeholder="Your name" required/>
                  </div>
                  <div className="rw-donate__group">
                    <label className="rw-donate__lbl">Email</label>
                    <input className="rw-input" type="email" value={form.email} onChange={upd("email")} placeholder="you@example.com" required/>
                  </div>
                </div>
                <div className="rw-donate__group">
                  <label className="rw-donate__lbl">Subject</label>
                  <select className="rw-input" value={form.subject} onChange={upd("subject")}>
                    <option>General enquiry</option>
                    <option>Correction or feedback on an article</option>
                    <option>Photo submission</option>
                    <option>Advertising / partnership</option>
                    <option>Donation question</option>
                  </select>
                </div>
                <div className="rw-donate__group">
                  <label className="rw-donate__lbl">Message</label>
                  <textarea className="rw-input" rows="5" value={form.message} onChange={upd("message")} placeholder="How can we help?" required/>
                </div>
                <Button type="submit" variant="primary" size="lg" disabled={!form.name || !form.email || !form.message}>
                  <Icon name="mail" size={16} style={{ marginRight: 8 }}/> Send Message
                </Button>
              </form>
            )}
          </FadeIn>

          <FadeIn delay={0.15} className="rw-contact-aside">
            <h3 className="rw-h3">Reach us directly</h3>
            <ul className="rw-contact-list">
              <li><Icon name="mail" size={18} color="#d4af37"/><div><strong>Email</strong><span>hello@ruwanwelisaya.com</span></div></li>
              <li><Icon name="location" size={18} color="#d4af37"/><div><strong>Location</strong><span>Abhayawewa Road, Anuradhapura, Sri Lanka</span></div></li>
              <li><Icon name="clock" size={18} color="#d4af37"/><div><strong>Response time</strong><span>Within 2–4 working days</span></div></li>
            </ul>
            <div className="rw-contact-note">
              <p>For advertising and partnership enquiries, please select that subject so your message reaches the right person. For article corrections, include the post title and the specific detail you'd like reviewed.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PRIVACY POLICY
   ============================================================ */
function PrivacyPage() {
  React.useEffect(() => {
    applyPageSeo("privacy-policy", "Privacy Policy", "Privacy policy for Ruwanwelisaya.com — how we handle data, cookies, third-party advertising (Google AdSense), and your choices.");
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="rw-page">
      <header className="rw-page__header">
        <div className="rw-container">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="rw-page__title">Privacy Policy</h1>
          <p className="rw-page__lead">Last updated: May 2026. This policy explains what information we collect, how we use it, and the choices available to you.</p>
        </div>
      </header>

      <div className="rw-container rw-container--prose rw-static rw-legal">
        <FadeIn>
          <h2 className="rw-article__h2">Introduction</h2>
          <p className="rw-body">Ruwanwelisaya.com ("we", "us", "our") operates this website. This Privacy Policy describes how we collect, use, and protect information when you visit the site. By using the site, you consent to the practices described here.</p>

          <h2 className="rw-article__h2">Information we collect</h2>
          <p className="rw-body">We collect two kinds of information. <strong>Information you provide</strong> — when you submit the newsletter form, the contact form, a forum post, a photo, or a donation, you may give us your name, email address, and the content you submit. <strong>Information collected automatically</strong> — like most websites, we collect standard log data (IP address, browser type, pages visited, time and date of visit) and use cookies and similar technologies as described below.</p>

          <h2 className="rw-article__h2">Cookies</h2>
          <p className="rw-body">We use cookies to remember your preferences (such as light/dark mode and dismissed notices) and to understand how the site is used. Some cookies are set by third parties — notably our advertising and analytics partners. You can control cookies through your browser settings; disabling them may affect some site features.</p>

          <h2 className="rw-article__h2">Third-party advertising (Google AdSense)</h2>
          <p className="rw-body">We display advertising served by Google AdSense and may use other ad networks. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the internet.</p>
          <p className="rw-body">You may opt out of personalised advertising by visiting <strong>Google Ads Settings</strong> (google.com/settings/ads). You can also opt out of third-party vendor cookies for personalised advertising at <strong>aboutads.info</strong>. For users in the EEA, UK, and Switzerland, we (and our partners) rely on consent collected through our cookie consent banner before serving personalised ads.</p>

          <h2 className="rw-article__h2">Analytics</h2>
          <p className="rw-body">We use analytics tools to measure traffic and understand which content is useful to readers. These tools collect aggregated, non-identifying information such as page views, session duration, and general geographic region. We do not sell your personal information.</p>

          <h2 className="rw-article__h2">How we use information</h2>
          <ul>
            <li className="rw-article__li">To operate and improve the website and its content.</li>
            <li className="rw-article__li">To respond to your enquiries, corrections, and submissions.</li>
            <li className="rw-article__li">To send the newsletter (only if you subscribe), which you can leave at any time.</li>
            <li className="rw-article__li">To process and acknowledge donations.</li>
            <li className="rw-article__li">To serve and measure relevant advertising.</li>
          </ul>

          <h2 className="rw-article__h2">Data retention and security</h2>
          <p className="rw-body">We retain submitted information only as long as necessary for the purpose it was given. We take reasonable technical and organisational measures to protect information against loss, misuse, and unauthorised access. No method of transmission over the internet is completely secure, however, and we cannot guarantee absolute security.</p>

          <h2 className="rw-article__h2">Children's privacy</h2>
          <p className="rw-body">This site is not directed to children under 13, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will remove it.</p>

          <h2 className="rw-article__h2">Your rights</h2>
          <p className="rw-body">Depending on your jurisdiction, you may have the right to access, correct, or delete the personal information we hold about you, and to object to or restrict certain processing. To exercise these rights, contact us at the address below.</p>

          <h2 className="rw-article__h2">Changes to this policy</h2>
          <p className="rw-body">We may update this policy from time to time. Material changes will be reflected by the "Last updated" date at the top of this page.</p>

          <h2 className="rw-article__h2">Contact</h2>
          <p className="rw-body">Questions about this policy may be sent to <strong>privacy@ruwanwelisaya.com</strong> or through our <a href="#" data-nav="contact">Contact page</a>.</p>
        </FadeIn>
      </div>
    </div>
  );
}

Object.assign(window, { AboutPage, ContactPage, PrivacyPage });
