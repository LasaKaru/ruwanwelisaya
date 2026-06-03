/* eslint-disable no-undef */
/* admin.jsx — ad slots + an admin panel for injecting custom ad code,
   toggling feature flags, and previewing changes live. */

const AD_SLOT_DEFS = [
  { id: "home-top",      label: "Home — Below quick info bar",  size: "leaderboard" },
  { id: "home-mid",      label: "Home — Between sections",      size: "leaderboard" },
  { id: "home-bottom",   label: "Home — Above donate CTA",      size: "rectangle" },
  { id: "blog-sidebar",  label: "Blog — Sidebar",               size: "rectangle" },
  { id: "blog-inline",   label: "Blog — Inline (post body)",    size: "leaderboard" },
];

/* In-memory bus so React updates without round-tripping the storage event. */
const AD_LISTENERS = new Set();
function getAdCode(id) {
  return localStorage.getItem("rw-ad-" + id) || "";
}
function setAdCode(id, code) {
  if (code) localStorage.setItem("rw-ad-" + id, code);
  else      localStorage.removeItem("rw-ad-" + id);
  AD_LISTENERS.forEach((fn) => fn(id, code));
}

function useAdCode(id) {
  const [code, setCode] = React.useState(() => getAdCode(id));
  React.useEffect(() => {
    const fn = (slotId) => { if (slotId === id) setCode(getAdCode(id)); };
    AD_LISTENERS.add(fn);
    return () => AD_LISTENERS.delete(fn);
  }, [id]);
  return code;
}

/* ---------- AdSlot ---------- */

function AdSlot({ id, size = "leaderboard", label }) {
  const code = useAdCode(id);
  if (code) {
    return (
      <div className={`rw-ad rw-ad--${size}`} aria-label="Advertisement">
        <div className="rw-ad__pin">Ad</div>
        <div className="rw-ad__html" dangerouslySetInnerHTML={{ __html: code }}/>
      </div>
    );
  }
  return (
    <div className={`rw-ad rw-ad--${size} rw-ad--empty`} aria-label="Advertisement placeholder">
      <div className="rw-ad__pattern" aria-hidden="true"/>
      <div className="rw-ad__inner">
        <div className="rw-ad__eyebrow">Ad Placement</div>
        <div className="rw-ad__id">{label || id}</div>
        <div className="rw-ad__hint">Configure in <strong>Admin → Ads</strong></div>
      </div>
    </div>
  );
}

/* ---------- Feature flags ---------- */

const FEATURE_DEFAULTS = {
  showAds: true,
  showFestivalBanner: true,
  showLampCounter: true,
  enableAnimations: true,
  paymentStripe: true,
  paymentPaypal: true,
  paymentBank: true,
};

function loadFlags() {
  try {
    return { ...FEATURE_DEFAULTS, ...JSON.parse(localStorage.getItem("rw-flags") || "{}") };
  } catch { return { ...FEATURE_DEFAULTS }; }
}

const FLAG_LISTENERS = new Set();
function setFlag(key, value) {
  const next = { ...loadFlags(), [key]: value };
  localStorage.setItem("rw-flags", JSON.stringify(next));
  FLAG_LISTENERS.forEach((fn) => fn(next));
}
function useFlags() {
  const [flags, setFlags] = React.useState(loadFlags);
  React.useEffect(() => {
    FLAG_LISTENERS.add(setFlags);
    return () => FLAG_LISTENERS.delete(setFlags);
  }, []);
  return flags;
}

/* ---------- Admin Panel ---------- */

function AdminPanel() {
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState("ads");
  const [activeSlot, setActiveSlot] = React.useState(AD_SLOT_DEFS[0].id);
  const flags = useFlags();
  const currentCode = useAdCode(activeSlot);
  const [draft, setDraft] = React.useState(currentCode);
  const [saved, setSaved] = React.useState(false);

  React.useEffect(() => { setDraft(currentCode); setSaved(false); }, [activeSlot, currentCode]);

  // Open via shortcut: Cmd/Ctrl + .
  React.useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === ".") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const save = () => {
    setAdCode(activeSlot, draft.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  const insertSample = () => {
    setDraft(`<a class="demo-ad" href="#" style="
  display: flex; align-items: center; gap: 14px;
  padding: 16px 22px; background: #1a1410; color: #fff;
  text-decoration: none; border-radius: 6px;
  font-family: Inter, sans-serif;">
  <strong style="color:#d4af37; font-family: Cinzel, serif;">Heritage Tours Lanka</strong>
  <span style="opacity:0.8; font-size:13px;">Guided pilgrimage tours of Anuradhapura — book now.</span>
  <span style="margin-left:auto; color:#d4af37; font-size:11px; letter-spacing: 0.2em; text-transform: uppercase;">Visit →</span>
</a>`);
  };

  const clearSlot = () => { setDraft(""); setAdCode(activeSlot, ""); };

  return (
    <>
      <button className={`rw-admin-fab ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-label="Admin panel">
        <Icon name={open ? "close" : "lightbulb"} size={20}/>
        <span className="rw-admin-fab__lbl">Admin</span>
      </button>

      {open && (
        <div className="rw-admin">
          <header className="rw-admin__head">
            <div>
              <Eyebrow>Admin · live</Eyebrow>
              <h2 className="rw-admin__title">Site Controls</h2>
            </div>
            <button className="rw-admin__close" onClick={() => setOpen(false)} aria-label="Close">
              <Icon name="close" size={18}/>
            </button>
          </header>

          <nav className="rw-admin__tabs">
            {[
              { id: "ads",     label: "Ads" },
              { id: "flags",   label: "Settings" },
              { id: "payments",label: "Payments" },
              { id: "danger",  label: "Reset" },
            ].map((t) => (
              <button key={t.id} className={tab === t.id ? "is-active" : ""} onClick={() => setTab(t.id)}>
                {t.label}
              </button>
            ))}
          </nav>

          <div className="rw-admin__body">
            {tab === "ads" && (
              <>
                <p className="rw-admin__hint">
                  Paste any HTML ad snippet — Google AdSense, an affiliate banner, a custom partner promo. It's stored to your browser's localStorage and rendered live in the chosen slot.
                </p>

                <div className="rw-admin__group">
                  <label className="rw-admin__lbl">Ad slot</label>
                  <select className="rw-admin__select" value={activeSlot} onChange={(e) => setActiveSlot(e.target.value)}>
                    {AD_SLOT_DEFS.map((s) => (
                      <option key={s.id} value={s.id}>{s.label}</option>
                    ))}
                  </select>
                </div>

                <div className="rw-admin__group">
                  <label className="rw-admin__lbl">
                    HTML code
                    <span className={`rw-admin__saved ${saved ? "is-on" : ""}`}>Saved ✓</span>
                  </label>
                  <textarea className="rw-admin__code" rows="9"
                    placeholder={'<script async src="https://pagead2.googlesyndication.com/..."></script>\n<ins class="adsbygoogle" ...></ins>'}
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}/>
                </div>

                <div className="rw-admin__row">
                  <button className="rw-admin__btn rw-admin__btn--primary" onClick={save}>Save & inject</button>
                  <button className="rw-admin__btn" onClick={insertSample}>Insert demo ad</button>
                  <button className="rw-admin__btn rw-admin__btn--ghost" onClick={clearSlot}>Clear</button>
                </div>
              </>
            )}

            {tab === "flags" && (
              <div className="rw-admin__flags">
                {Object.entries({
                  showAds: "Show ads",
                  showFestivalBanner: "Festival banner (Vesak / Poson)",
                  showLampCounter: "Virtual lamp counter",
                  enableAnimations: "Page animations",
                }).map(([k, label]) => (
                  <label key={k} className="rw-admin__toggle">
                    <input type="checkbox" checked={flags[k]} onChange={(e) => setFlag(k, e.target.checked)}/>
                    <span className="rw-admin__toggle-track"><span/></span>
                    <span className="rw-admin__toggle-lbl">{label}</span>
                  </label>
                ))}
              </div>
            )}

            {tab === "payments" && (
              <div className="rw-admin__flags">
                <p className="rw-admin__hint">Toggle which payment methods appear on the donate page.</p>
                {Object.entries({
                  paymentStripe: "Card (Stripe)",
                  paymentPaypal: "PayPal",
                  paymentBank:   "Bank transfer (LKR)",
                }).map(([k, label]) => (
                  <label key={k} className="rw-admin__toggle">
                    <input type="checkbox" checked={flags[k]} onChange={(e) => setFlag(k, e.target.checked)}/>
                    <span className="rw-admin__toggle-track"><span/></span>
                    <span className="rw-admin__toggle-lbl">{label}</span>
                  </label>
                ))}
              </div>
            )}

            {tab === "danger" && (
              <div>
                <p className="rw-admin__hint">Reset all admin-set values — ad codes, flags, lamp counter — back to defaults.</p>
                <button className="rw-admin__btn rw-admin__btn--danger" onClick={() => {
                  AD_SLOT_DEFS.forEach((s) => localStorage.removeItem("rw-ad-" + s.id));
                  localStorage.removeItem("rw-flags");
                  localStorage.removeItem("rw-lamps-lit");
                  AD_LISTENERS.forEach((fn) => fn("*", ""));
                  FLAG_LISTENERS.forEach((fn) => fn({ ...FEATURE_DEFAULTS }));
                }}>
                  Reset everything
                </button>
              </div>
            )}
          </div>

          <footer className="rw-admin__foot">
            Press <kbd>⌘ .</kbd> / <kbd>Ctrl .</kbd> to toggle this panel
          </footer>
        </div>
      )}
    </>
  );
}

Object.assign(window, { AdSlot, AdminPanel, useFlags, useAdCode });
