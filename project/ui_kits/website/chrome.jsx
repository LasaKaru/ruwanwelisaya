/* eslint-disable no-undef */
/* chrome.jsx — Navbar + Footer. */

const { useState: useStateChrome, useEffect: useEffectChrome } = React;

const NAV_LINKS = [
  { id: "home",      label: "Home" },
  { id: "events",    label: "Events" },
  { id: "gallery",   label: "Gallery" },
  { id: "blog",      label: "Blog" },
  { id: "community", label: "Community" },
  { id: "donate",    label: "Donate" },
];

function Navbar({ route, onNavigate, transparentTop = true }) {
  const [scrolledPast, setScrolledPast] = useStateChrome(false);
  const [open, setOpen] = useStateChrome(false);

  // Only listen to scroll when we're floating over a hero. Otherwise the
  // nav is always in its solid "scrolled" state, regardless of scrollY.
  useEffectChrome(() => {
    if (!transparentTop) return;
    const onScroll = () => setScrolledPast(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentTop]);

  const isScrolled = !transparentTop || scrolledPast;

  return (
    <header className={`rw-nav ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="rw-nav__inner">
        <a className="rw-nav__brand" href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}>
          <span className="rw-nav__mark">
            <Mark size={20} color="#fff"/>
          </span>
          <span className={`rw-nav__wordmark ${isScrolled ? "on-light" : ""}`} style={{ color: isScrolled ? "#333" : "#fff" }}>RUWANWELISAYA</span>
        </a>

        <div className="rw-nav__links">
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href="#" className={`${route === l.id ? "is-active" : ""} ${isScrolled ? "on-light" : ""}`}
                  style={{ color: route === l.id ? "#d4af37" : (isScrolled ? "#333" : "rgba(255,255,255,0.9)") }}
                  onClick={(e) => { e.preventDefault(); onNavigate(l.id); }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button className={`rw-nav__theme ${isScrolled ? "on-light" : ""}`} style={{ color: isScrolled ? "#333" : "rgba(255,255,255,0.85)" }} aria-label="Toggle theme">
            <Icon name="moon" size={18}/>
          </button>
        </div>

        <button className={`rw-nav__menu-btn ${isScrolled ? "on-light" : ""}`} style={{ color: isScrolled ? "#333" : "rgba(255,255,255,0.9)" }} onClick={() => setOpen(!open)} aria-label="Menu">
          <Icon name={open ? "close" : "menu"} size={22}/>
        </button>
      </nav>

      {open && (
        <div className="rw-nav__mobile">
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href="#" className={route === l.id ? "is-active" : ""}
                  onClick={(e) => { e.preventDefault(); onNavigate(l.id); setOpen(false); }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

/* ---------- Footer ---------- */

const FOOTER_EXPLORE = [
  { label: "Sacred Events", id: "events" },
  { label: "Gallery", id: "gallery" },
  { label: "Pilgrim Guides", id: "blog" },
  { label: "Blog", id: "blog" },
  { label: "Community", id: "community" },
  { label: "Support", id: "donate" },
];
const FOOTER_LEGAL = [
  { label: "About Us", id: "about" },
  { label: "Contact", id: "contact" },
  { label: "Privacy Policy", id: "privacy" },
];

function Footer({ onNavigate }) {
  const [email, setEmail] = useStateChrome("");
  const [subscribed, setSubscribed] = useStateChrome(false);
  const go = (id) => (e) => { e.preventDefault(); if (onNavigate) onNavigate(id); };

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="rw-footer">
      <LotusDivider/>

      <div className="rw-footer__inner">
        <div className="rw-footer__grid">
          <div className="rw-footer__brand">
            <h3 className="rw-footer__wordmark">RUWANWELISAYA</h3>
            <p>The Great Stupa of Anuradhapura — a timeless sanctuary of peace, devotion, and heritage.</p>
          </div>

          <div className="rw-footer__col">
            <h4>Explore</h4>
            <ul>
              {FOOTER_EXPLORE.map((l) => <li key={l.label}><a href="#" onClick={go(l.id)}>{l.label}</a></li>)}
            </ul>
          </div>

          <div className="rw-footer__col">
            <h4>Legal &amp; Info</h4>
            <ul>
              {FOOTER_LEGAL.map((l) => <li key={l.label}><a href="#" onClick={go(l.id)}>{l.label}</a></li>)}
            </ul>
          </div>

          <div className="rw-footer__col rw-footer__visit">
            <h4>Visit</h4>
            <p>
              Abhayawewa Rd<br/>
              Anuradhapura, Sri Lanka<br/>
              Open 24 Hours
            </p>
          </div>
        </div>

        <div className="rw-footer__newsletter">
          <div className="rw-news">
            <div className="rw-news__head">
              <Icon name="mail" size={18} color="#d4af37"/>
              <h3>Sacred Newsletter</h3>
            </div>
            <p>Receive Poya day reminders, temple updates, and spiritual inspiration in your inbox.</p>
            {subscribed ? (
              <div className="rw-news__success">
                <Icon name="check" size={18} color="#4f7d4f"/>
                <span>Sadhu! You&rsquo;re subscribed 🙏</span>
              </div>
            ) : (
              <form className="rw-news__form" onSubmit={submit}>
                <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <button type="submit">Join</button>
              </form>
            )}
          </div>
        </div>

        <div className="rw-footer__copyright">
          © {new Date().getFullYear()} Ruwanwelisaya Preservation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Navbar, Footer });
