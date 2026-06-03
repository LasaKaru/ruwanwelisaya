'use client';
import { useState, useEffect, useCallback } from 'react';
import Icon from './Icon';

const SLOTS = ['home-top','home-mid','home-bottom','blog-sidebar','blog-inline'];

const DEFAULT_FLAGS = {
  showAds: true,
  festivalBanner: true,
  lampCounter: true,
  animations: true,
};

const DEFAULT_PAYMENTS = { stripe: true, paypal: true, bank: true };

export default function AdminPanel() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<'ads'|'settings'|'payments'|'reset'>('ads');
  const [slot, setSlot] = useState(SLOTS[0]);
  const [code, setCode] = useState('');
  const [saved, setSaved] = useState(false);
  const [flags, setFlags] = useState(DEFAULT_FLAGS);
  const [payments, setPayments] = useState(DEFAULT_PAYMENTS);

  useEffect(() => {
    try {
      const f = localStorage.getItem('rw_flags');
      if (f) setFlags({...DEFAULT_FLAGS, ...JSON.parse(f)});
      const p = localStorage.getItem('rw_payments');
      if (p) setPayments({...DEFAULT_PAYMENTS, ...JSON.parse(p)});
    } catch {}
  }, []);

  useEffect(() => {
    try { const c = localStorage.getItem(`rw_ad_${slot}`) || ''; setCode(c); } catch {}
  }, [slot]);

  const toggle = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === '.') setOpen(o => !o);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', toggle);
    return () => window.removeEventListener('keydown', toggle);
  }, [toggle]);

  const saveAd = () => {
    try { localStorage.setItem(`rw_ad_${slot}`, code); setSaved(true); setTimeout(() => setSaved(false), 2000); } catch {}
  };

  const saveFlags = (next: typeof flags) => {
    setFlags(next);
    try { localStorage.setItem('rw_flags', JSON.stringify(next)); } catch {}
  };

  const savePayments = (next: typeof payments) => {
    setPayments(next);
    try { localStorage.setItem('rw_payments', JSON.stringify(next)); } catch {}
  };

  const resetAll = () => {
    try {
      SLOTS.forEach(s => localStorage.removeItem(`rw_ad_${s}`));
      localStorage.removeItem('rw_flags');
      localStorage.removeItem('rw_payments');
      setFlags(DEFAULT_FLAGS); setPayments(DEFAULT_PAYMENTS); setCode('');
    } catch {}
  };

  return (
    <>
      <button className={`rw-admin-fab ${open ? 'is-open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Admin panel">
        <Icon name={open ? 'close' : 'sun'} size={15}/>
        <span>{open ? 'Close' : 'Admin'}</span>
      </button>

      {open && (
        <div className="rw-admin">
          <div className="rw-admin__head">
            <div>
              <div className="rw-eyebrow" style={{color:'rgba(246,236,216,0.5)',fontSize:10,letterSpacing:'0.22em'}}>PANEL</div>
              <div className="rw-admin__title">Site Admin</div>
            </div>
            <button className="rw-admin__close" onClick={() => setOpen(false)}><Icon name="close" size={18}/></button>
          </div>

          <div className="rw-admin__tabs">
            {(['ads','settings','payments','reset'] as const).map(t => (
              <button key={t} className={tab === t ? 'is-active' : ''} onClick={() => setTab(t)}>{t.charAt(0).toUpperCase()+t.slice(1)}</button>
            ))}
          </div>

          <div className="rw-admin__body">
            {tab === 'ads' && (
              <>
                <p className="rw-admin__hint">Paste AdSense, affiliate, or custom HTML per slot. Saved to localStorage.</p>
                <div className="rw-admin__group">
                  <label className="rw-admin__lbl">
                    Slot
                    <span className={`rw-admin__saved ${saved ? 'is-on' : ''}`}>✓ Saved</span>
                  </label>
                  <select className="rw-admin__select" value={slot} onChange={e => setSlot(e.target.value)}>
                    {SLOTS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="rw-admin__group">
                  <label className="rw-admin__lbl">HTML / AdSense snippet</label>
                  <textarea className="rw-admin__code" value={code} onChange={e => setCode(e.target.value)} placeholder="<!-- paste ad code here -->"/>
                </div>
                <div className="rw-admin__row">
                  <button className="rw-admin__btn rw-admin__btn--primary" onClick={saveAd}>Save</button>
                  <button className="rw-admin__btn" onClick={() => setCode(`<div style="background:#f8f4e8;border:1px solid rgba(212,175,55,0.3);padding:20px;text-align:center;font-family:sans-serif"><p style="color:#d4af37;font-size:13px;letter-spacing:0.1em">ADVERTISEMENT</p><p style="color:#666;font-size:12px;margin-top:6px">Demo Ad — ${slot}</p></div>`)}>Insert demo</button>
                  <button className="rw-admin__btn rw-admin__btn--ghost" onClick={() => { setCode(''); try { localStorage.removeItem(`rw_ad_${slot}`); } catch {} }}>Clear</button>
                </div>
              </>
            )}

            {tab === 'settings' && (
              <div className="rw-admin__flags">
                {(Object.entries(flags) as [keyof typeof flags, boolean][]).map(([key, val]) => (
                  <label key={key} className="rw-admin__toggle">
                    <input type="checkbox" checked={val} onChange={() => saveFlags({...flags, [key]: !val})}/>
                    <span className="rw-admin__toggle-track"><span/></span>
                    <span className="rw-admin__toggle-lbl">{key.replace(/([A-Z])/g, ' $1')}</span>
                  </label>
                ))}
              </div>
            )}

            {tab === 'payments' && (
              <div className="rw-admin__flags">
                {(Object.entries(payments) as [keyof typeof payments, boolean][]).map(([key, val]) => (
                  <label key={key} className="rw-admin__toggle">
                    <input type="checkbox" checked={val} onChange={() => savePayments({...payments, [key]: !val})}/>
                    <span className="rw-admin__toggle-track"><span/></span>
                    <span className="rw-admin__toggle-lbl">{key.charAt(0).toUpperCase()+key.slice(1)}</span>
                  </label>
                ))}
              </div>
            )}

            {tab === 'reset' && (
              <>
                <p className="rw-admin__hint">Reset all ad slots and settings to defaults.</p>
                <div className="rw-admin__row">
                  <button className="rw-admin__btn rw-admin__btn--danger" onClick={resetAll}>Reset Everything</button>
                </div>
              </>
            )}
          </div>

          <div className="rw-admin__foot">
            Press <kbd>⌘ .</kbd> / <kbd>Ctrl .</kbd> to toggle
          </div>
        </div>
      )}
    </>
  );
}
