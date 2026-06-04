'use client';
import { useState, useEffect, useCallback } from 'react';
import Icon, { Mark } from './Icon';

/* ----------------------------- config ----------------------------- */

const AD_SLOTS = [
  { id: 'home-top', name: 'Home — Top', size: 'Leaderboard', where: 'Below the info bar on the home page' },
  { id: 'home-mid', name: 'Home — Middle', size: 'Leaderboard', where: 'Between gallery and blog previews' },
  { id: 'home-bottom', name: 'Home — Bottom', size: 'Rectangle', where: 'Home footer & the Events page' },
  { id: 'blog-sidebar', name: 'Blog — Sidebar', size: 'Rectangle', where: 'Blog detail sidebar (reserved)' },
  { id: 'blog-inline', name: 'Blog — In-article', size: 'Leaderboard', where: 'Inside each article body' },
];

const FLAG_META: Record<string, { label: string; desc: string }> = {
  showAds: { label: 'Show advertisements', desc: 'Master switch for every ad slot across the site.' },
  festivalBanner: { label: 'Festival banner', desc: 'Highlight the next upcoming Poya day.' },
  lampCounter: { label: 'Virtual lamp counter', desc: 'Show the community lamp-offering counter.' },
  animations: { label: 'Scene animations', desc: 'Animated SVG scenes and scroll-reveal effects.' },
};

const PAY_META: Record<string, { label: string; desc: string }> = {
  stripe: { label: 'Card (Stripe)', desc: 'Accept Visa, Mastercard & Amex via Stripe.' },
  paypal: { label: 'PayPal', desc: 'Redirect donors to PayPal checkout.' },
  bank: { label: 'Bank transfer', desc: 'Show LKR bank-transfer details.' },
};

const DEFAULT_FLAGS = { showAds: true, festivalBanner: true, lampCounter: true, animations: true };
const DEFAULT_PAYMENTS = { stripe: true, paypal: true, bank: true };

type Section = 'overview' | 'ads' | 'appearance' | 'payments' | 'security';

const NAV: { id: Section; label: string; icon: string }[] = [
  { id: 'overview', label: 'Overview', icon: 'globe' },
  { id: 'ads', label: 'Advertisements', icon: 'photograph' },
  { id: 'appearance', label: 'Appearance', icon: 'sun' },
  { id: 'payments', label: 'Payments', icon: 'heart' },
  { id: 'security', label: 'Security', icon: 'shield' },
];

/* ----------------------------- props ------------------------------ */

interface AdminDashboardProps {
  username: string;
  sessionExpiry: number | null;
  security: { usingDefaults: boolean; passwordHashed: boolean; secretSet: boolean };
  stats: { posts: number; events: number; adSlots: number };
  logoutAction: () => Promise<void>;
}

/* --------------------------- component ---------------------------- */

export default function AdminDashboard({ username, sessionExpiry, security, stats, logoutAction }: AdminDashboardProps) {
  const [section, setSection] = useState<Section>('overview');
  const [navOpen, setNavOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [adCodes, setAdCodes] = useState<Record<string, string>>({});
  const [flags, setFlags] = useState(DEFAULT_FLAGS);
  const [payments, setPayments] = useState(DEFAULT_PAYMENTS);

  // Load persisted state once on mount.
  useEffect(() => {
    setMounted(true);
    try {
      const codes: Record<string, string> = {};
      AD_SLOTS.forEach(s => { codes[s.id] = localStorage.getItem(`rw_ad_${s.id}`) || ''; });
      setAdCodes(codes);
      const f = localStorage.getItem('rw_flags');
      if (f) setFlags({ ...DEFAULT_FLAGS, ...JSON.parse(f) });
      const p = localStorage.getItem('rw_payments');
      if (p) setPayments({ ...DEFAULT_PAYMENTS, ...JSON.parse(p) });
    } catch {}
  }, []);

  const saveFlags = useCallback((next: typeof flags) => {
    setFlags(next);
    try { localStorage.setItem('rw_flags', JSON.stringify(next)); } catch {}
  }, []);

  const savePayments = useCallback((next: typeof payments) => {
    setPayments(next);
    try { localStorage.setItem('rw_payments', JSON.stringify(next)); } catch {}
  }, []);

  const setAdCode = useCallback((id: string, code: string) => {
    setAdCodes(prev => ({ ...prev, [id]: code }));
  }, []);

  const persistAd = useCallback((id: string, code: string) => {
    try {
      if (code) localStorage.setItem(`rw_ad_${id}`, code);
      else localStorage.removeItem(`rw_ad_${id}`);
    } catch {}
  }, []);

  const resetAll = useCallback(() => {
    try {
      AD_SLOTS.forEach(s => localStorage.removeItem(`rw_ad_${s.id}`));
      localStorage.removeItem('rw_flags');
      localStorage.removeItem('rw_payments');
    } catch {}
    setAdCodes(Object.fromEntries(AD_SLOTS.map(s => [s.id, ''])));
    setFlags(DEFAULT_FLAGS);
    setPayments(DEFAULT_PAYMENTS);
  }, []);

  const configuredAds = Object.values(adCodes).filter(Boolean).length;
  const activePayments = Object.values(payments).filter(Boolean).length;

  const expiryText = mounted && sessionExpiry ? formatRemaining(sessionExpiry - Date.now()) : '—';

  return (
    <div className="rw-adm">
      {/* Sidebar */}
      <aside className={`rw-adm__side ${navOpen ? 'is-open' : ''}`}>
        <div className="rw-adm__brand">
          <Mark size={26} color="#d4af37" />
          <div>
            <div className="rw-adm__brand-name">Ruwanwelisaya</div>
            <div className="rw-adm__brand-sub">Admin Console</div>
          </div>
        </div>

        <nav className="rw-adm__nav">
          {NAV.map(n => (
            <button key={n.id} className={`rw-adm__navitem ${section === n.id ? 'is-active' : ''}`}
              onClick={() => { setSection(n.id); setNavOpen(false); }}>
              <Icon name={n.icon} size={17} />
              <span>{n.label}</span>
              {n.id === 'ads' && configuredAds > 0 && <span className="rw-adm__badge">{configuredAds}</span>}
            </button>
          ))}
        </nav>

        <div className="rw-adm__side-foot">
          <div className="rw-adm__who">
            <div className="rw-adm__avatar">{username.slice(0, 2).toUpperCase()}</div>
            <div className="rw-adm__who-meta">
              <div className="rw-adm__who-name">{username}</div>
              <div className="rw-adm__who-role">Administrator</div>
            </div>
          </div>
          <form action={logoutAction}>
            <button type="submit" className="rw-adm__logout">
              <Icon name="external" size={15} /> Sign out
            </button>
          </form>
        </div>
      </aside>

      {/* Main */}
      <div className="rw-adm__main">
        <header className="rw-adm__top">
          <button className="rw-adm__hamburger" onClick={() => setNavOpen(o => !o)} aria-label="Menu">
            <Icon name={navOpen ? 'close' : 'menu'} size={20} />
          </button>
          <div>
            <div className="rw-adm__crumb">Admin / {NAV.find(n => n.id === section)?.label}</div>
            <h1 className="rw-adm__h1">{NAV.find(n => n.id === section)?.label}</h1>
          </div>
          <a href="/" className="rw-adm__view-site" target="_blank" rel="noopener noreferrer">
            <Icon name="external" size={14} /> View site
          </a>
        </header>

        {security.usingDefaults && (
          <div className="rw-adm__alert" role="alert">
            <Icon name="shield" size={18} color="#c98a1a" />
            <div>
              <strong>Default credentials in use.</strong> Set <code>ADMIN_USERNAME</code>, <code>ADMIN_PASSWORD</code> (or <code>ADMIN_PASSWORD_HASH</code>) and <code>AUTH_SECRET</code> in your environment before going live.
            </div>
          </div>
        )}

        <div className="rw-adm__content">
          {section === 'overview' && (
            <Overview username={username} expiryText={expiryText} stats={stats}
              configuredAds={configuredAds} activePayments={activePayments} security={security}
              onGo={setSection} />
          )}
          {section === 'ads' && (
            <AdsManager adCodes={adCodes} setAdCode={setAdCode} persistAd={persistAd} />
          )}
          {section === 'appearance' && (
            <TogglePanel title="Feature flags"
              hint="Control which features render across the site. Saved to this browser."
              meta={FLAG_META} state={flags} onChange={saveFlags} />
          )}
          {section === 'payments' && (
            <TogglePanel title="Payment methods"
              hint="Choose which options appear on the donate page."
              meta={PAY_META} state={payments} onChange={savePayments} />
          )}
          {section === 'security' && (
            <Security username={username} expiryText={expiryText} security={security} onReset={resetAll} />
          )}
        </div>
      </div>

      {navOpen && <div className="rw-adm__scrim" onClick={() => setNavOpen(false)} />}
    </div>
  );
}

/* ------------------------- Overview ------------------------- */

function Overview({ username, expiryText, stats, configuredAds, activePayments, security, onGo }: {
  username: string; expiryText: string; stats: AdminDashboardProps['stats'];
  configuredAds: number; activePayments: number; security: AdminDashboardProps['security'];
  onGo: (s: Section) => void;
}) {
  return (
    <>
      <div className="rw-adm__welcome">
        <h2>Welcome back, {username} 🙏</h2>
        <p>Manage advertising, payments, and site settings. Your session expires in <strong>{expiryText}</strong>.</p>
      </div>

      <div className="rw-adm__stats">
        <StatCard icon="book" label="Blog posts" value={stats.posts} />
        <StatCard icon="calendar" label="Events" value={stats.events} />
        <StatCard icon="photograph" label="Ad slots configured" value={`${configuredAds} / ${stats.adSlots}`} />
        <StatCard icon="heart" label="Payment methods on" value={`${activePayments} / 3`} />
      </div>

      <div className="rw-adm__cards">
        <button className="rw-adm__quick" onClick={() => onGo('ads')}>
          <Icon name="photograph" size={20} color="#d4af37" />
          <div><strong>Configure ads</strong><span>Paste AdSense or custom HTML per slot.</span></div>
          <Icon name="arrow" size={14} color="#d4af37" />
        </button>
        <button className="rw-adm__quick" onClick={() => onGo('payments')}>
          <Icon name="heart" size={20} color="#d4af37" />
          <div><strong>Payments</strong><span>Toggle Stripe, PayPal & bank transfer.</span></div>
          <Icon name="arrow" size={14} color="#d4af37" />
        </button>
        <button className="rw-adm__quick" onClick={() => onGo('security')}>
          <Icon name="shield" size={20} color="#d4af37" />
          <div><strong>Security</strong><span>Session &amp; credential status.</span></div>
          <Icon name="arrow" size={14} color="#d4af37" />
        </button>
      </div>

      <div className={`rw-adm__health ${security.usingDefaults ? 'is-warn' : 'is-ok'}`}>
        <Icon name={security.usingDefaults ? 'shield' : 'check'} size={18} color={security.usingDefaults ? '#c98a1a' : '#4f7d4f'} />
        <span>{security.usingDefaults
          ? 'Security: action needed — default credentials are active.'
          : `Security: looks good — ${security.passwordHashed ? 'hashed password' : 'password'} & signing secret configured.`}</span>
      </div>
    </>
  );
}

function StatCard({ icon, label, value }: { icon: string; label: string; value: string | number }) {
  return (
    <div className="rw-adm__stat">
      <span className="rw-adm__stat-icon"><Icon name={icon} size={18} color="#d4af37" /></span>
      <div className="rw-adm__stat-val">{value}</div>
      <div className="rw-adm__stat-lbl">{label}</div>
    </div>
  );
}

/* ------------------------- Ads Manager ------------------------- */

function AdsManager({ adCodes, setAdCode, persistAd }: {
  adCodes: Record<string, string>;
  setAdCode: (id: string, code: string) => void;
  persistAd: (id: string, code: string) => void;
}) {
  const [editing, setEditing] = useState<string | null>(null);
  const [savedId, setSavedId] = useState<string | null>(null);
  const [preview, setPreview] = useState(false);

  const save = (id: string) => {
    persistAd(id, adCodes[id] || '');
    setSavedId(id);
    setTimeout(() => setSavedId(s => (s === id ? null : s)), 1800);
  };
  const demo = (id: string) => setAdCode(id, `<div style="background:#f8f4e8;border:1px solid rgba(212,175,55,0.3);padding:20px;text-align:center;font-family:sans-serif"><p style="color:#d4af37;font-size:13px;letter-spacing:0.1em">ADVERTISEMENT</p><p style="color:#666;font-size:12px;margin-top:6px">Demo Ad — ${id}</p></div>`);
  const clear = (id: string) => { setAdCode(id, ''); persistAd(id, ''); };

  return (
    <>
      <p className="rw-adm__hint">Each slot accepts an AdSense unit, affiliate snippet, or any custom HTML. Saved to this browser&apos;s storage. See <a href="https://github.com/LasaKaru/ruwanwelisaya/blob/main/docs/ADSENSE.md" target="_blank" rel="noopener noreferrer">the AdSense guide</a>.</p>
      <div className="rw-adm__slots">
        {AD_SLOTS.map(slot => {
          const code = adCodes[slot.id] || '';
          const isOpen = editing === slot.id;
          return (
            <div key={slot.id} className={`rw-adm__slot ${isOpen ? 'is-open' : ''}`}>
              <button className="rw-adm__slot-head" onClick={() => setEditing(isOpen ? null : slot.id)}>
                <div className="rw-adm__slot-info">
                  <div className="rw-adm__slot-name">{slot.name}</div>
                  <div className="rw-adm__slot-where">{slot.size} · {slot.where}</div>
                </div>
                <span className={`rw-adm__pill ${code ? 'is-on' : ''}`}>{code ? 'Configured' : 'Empty'}</span>
                <Icon name={isOpen ? 'close' : 'arrow'} size={14} color="#9b8a63" />
              </button>

              {isOpen && (
                <div className="rw-adm__slot-body">
                  <textarea className="rw-adm__code" value={code} spellCheck={false}
                    onChange={e => setAdCode(slot.id, e.target.value)}
                    placeholder={`<!-- paste ad code for ${slot.id} -->`} />
                  <div className="rw-adm__slot-actions">
                    <button className="rw-adm__btn rw-adm__btn--primary" onClick={() => save(slot.id)}>
                      {savedId === slot.id ? '✓ Saved' : 'Save'}
                    </button>
                    <button className="rw-adm__btn" onClick={() => demo(slot.id)}>Insert demo</button>
                    <button className="rw-adm__btn" onClick={() => setPreview(p => !p)}>{preview ? 'Hide preview' : 'Preview'}</button>
                    <button className="rw-adm__btn rw-adm__btn--ghost" onClick={() => clear(slot.id)}>Clear</button>
                    <span className="rw-adm__chars">{code.length} chars</span>
                  </div>
                  {preview && code && (
                    <div className="rw-adm__preview">
                      <div className="rw-adm__preview-lbl">Live preview</div>
                      <div dangerouslySetInnerHTML={{ __html: code }} />
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

/* ------------------------- Toggle Panel ------------------------- */

function TogglePanel<T extends Record<string, boolean>>({ title, hint, meta, state, onChange }: {
  title: string; hint: string; meta: Record<string, { label: string; desc: string }>;
  state: T; onChange: (next: T) => void;
}) {
  return (
    <>
      <p className="rw-adm__hint">{hint}</p>
      <div className="rw-adm__toggles">
        {(Object.keys(state) as (keyof T)[]).map(key => {
          const k = key as string;
          const on = state[key];
          return (
            <label key={k} className={`rw-adm__toggle-card ${on ? 'is-on' : ''}`}>
              <div className="rw-adm__toggle-text">
                <div className="rw-adm__toggle-label">{meta[k]?.label ?? k}</div>
                <div className="rw-adm__toggle-desc">{meta[k]?.desc}</div>
              </div>
              <input type="checkbox" checked={on} onChange={() => onChange({ ...state, [key]: !on })} />
              <span className="rw-adm__switch"><span /></span>
            </label>
          );
        })}
      </div>
    </>
  );
}

/* ------------------------- Security ------------------------- */

function Security({ username, expiryText, security, onReset }: {
  username: string; expiryText: string;
  security: AdminDashboardProps['security']; onReset: () => void;
}) {
  const [confirm, setConfirm] = useState(false);

  const checks = [
    { ok: !security.usingDefaults, label: 'Admin password configured via environment' },
    { ok: security.passwordHashed, label: 'Password stored as a scrypt hash (recommended)' },
    { ok: security.secretSet, label: 'AUTH_SECRET set for session signing' },
  ];

  return (
    <>
      <div className="rw-adm__sec-grid">
        <div className="rw-adm__panel">
          <h3 className="rw-adm__panel-title">Current session</h3>
          <dl className="rw-adm__deflist">
            <div><dt>Signed in as</dt><dd>{username}</dd></div>
            <div><dt>Role</dt><dd>Administrator</dd></div>
            <div><dt>Expires in</dt><dd>{expiryText}</dd></div>
            <div><dt>Session</dt><dd>Signed JWT · httpOnly cookie</dd></div>
          </dl>
        </div>

        <div className="rw-adm__panel">
          <h3 className="rw-adm__panel-title">Security checklist</h3>
          <ul className="rw-adm__checklist">
            {checks.map(c => (
              <li key={c.label} className={c.ok ? 'is-ok' : 'is-no'}>
                <Icon name={c.ok ? 'check' : 'close'} size={15} color={c.ok ? '#4f7d4f' : '#b46b6b'} />
                <span>{c.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rw-adm__panel">
        <h3 className="rw-adm__panel-title">Hardening this admin</h3>
        <ul className="rw-adm__tips">
          <li>Protected by edge middleware — every <code>/admin</code> request requires a valid signed session.</li>
          <li>Login is rate-limited (5 attempts / 15&nbsp;min per IP) to slow brute-force.</li>
          <li>Set a hashed password: run <code>node scripts/hash-password.mjs &apos;your-pass&apos;</code> and put the result in <code>ADMIN_PASSWORD_HASH</code>.</li>
          <li>Generate a strong <code>AUTH_SECRET</code> with <code>openssl rand -base64 32</code>.</li>
          <li>Responses for <code>/admin</code> are sent with <code>no-store</code> and <code>X-Frame-Options: DENY</code>.</li>
        </ul>
      </div>

      <div className="rw-adm__danger">
        <div>
          <h3 className="rw-adm__panel-title">Danger zone</h3>
          <p>Reset all ad slots and settings on this browser to their defaults.</p>
        </div>
        {confirm ? (
          <div className="rw-adm__danger-confirm">
            <span>Are you sure?</span>
            <button className="rw-adm__btn rw-adm__btn--danger" onClick={() => { onReset(); setConfirm(false); }}>Yes, reset</button>
            <button className="rw-adm__btn rw-adm__btn--ghost" onClick={() => setConfirm(false)}>Cancel</button>
          </div>
        ) : (
          <button className="rw-adm__btn rw-adm__btn--danger" onClick={() => setConfirm(true)}>Reset everything</button>
        )}
      </div>
    </>
  );
}

/* ------------------------- utils ------------------------- */

function formatRemaining(ms: number): string {
  if (ms <= 0) return 'expired';
  const h = Math.floor(ms / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}
