'use client';
import { useState } from 'react';
import FadeIn from '@/components/FadeIn';
import Icon, { Lotus } from '@/components/Icon';

const AMOUNTS = [500, 1000, 2500, 5000, 10000];

const ALLOCATIONS = [
  { label: 'Preservation & restoration', pct: 65 },
  { label: 'Education & documentation', pct: 20 },
  { label: 'Daily offerings & lamps', pct: 15 },
];

function CardForm() {
  return (
    <div className="rw-pay-form">
      <div className="rw-donate__group">
        <label className="rw-donate__lbl">Card number</label>
        <div className="rw-card-input">
          <input className="rw-input rw-input--mono" type="text" placeholder="1234 1234 1234 1234" maxLength={19} />
          <div className="rw-card-input__brands">
            <span className="rw-brand rw-brand--visa">VISA</span>
            <span className="rw-brand rw-brand--mc">●●</span>
            <span className="rw-brand rw-brand--amex">AMEX</span>
          </div>
        </div>
      </div>
      <div className="rw-donate__grid-2">
        <div className="rw-donate__group">
          <label className="rw-donate__lbl">Expiry</label>
          <input className="rw-input rw-input--mono" type="text" placeholder="MM / YY" maxLength={7} />
        </div>
        <div className="rw-donate__group">
          <label className="rw-donate__lbl">CVC</label>
          <input className="rw-input rw-input--mono" type="text" placeholder="123" maxLength={4} />
        </div>
      </div>
      <p className="rw-pay-form__note">Payments processed by Stripe. Card details never touch our servers.</p>
    </div>
  );
}

function PaypalForm() {
  return (
    <div className="rw-pay-form rw-pay-form--paypal">
      <div className="rw-paypal-box">
        <div className="rw-paypal-box__mark">
          <svg viewBox="0 0 100 28" width="56" height="16" aria-label="PayPal">
            <text x="0" y="20" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="20" fill="#003087">Pay</text>
            <text x="42" y="20" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="20" fill="#009cde">Pal</text>
          </svg>
        </div>
        <p>You&apos;ll be redirected to PayPal to complete your contribution securely. After payment you&apos;ll return here for a receipt.</p>
      </div>
    </div>
  );
}

function BankForm() {
  const ref = 'DONATE-' + Math.random().toString(36).slice(2, 8).toUpperCase();
  return (
    <div className="rw-pay-form rw-pay-form--bank">
      <p className="rw-pay-form__lead">Transfer in LKR to:</p>
      <dl className="rw-bank">
        <div><dt>Bank</dt><dd>Bank of Ceylon</dd></div>
        <div><dt>Account name</dt><dd>Ruwanwelisaya Preservation Trust</dd></div>
        <div><dt>Account number</dt><dd className="rw-mono">0093-2244-5811</dd></div>
        <div><dt>Branch</dt><dd>Anuradhapura Main · BCEYLKLX</dd></div>
        <div><dt>Reference</dt><dd className="rw-mono">{ref}</dd></div>
      </dl>
      <p className="rw-pay-form__note">Email the slip to <a href="mailto:treasury@ruwanwelisaya.com">treasury@ruwanwelisaya.com</a> and we&apos;ll send a receipt within 48 hours.</p>
    </div>
  );
}

export default function DonatePage() {
  const [amount, setAmount] = useState(2500);
  const [custom, setCustom] = useState('');
  const [frequency, setFrequency] = useState('once');
  const [method, setMethod] = useState('card');
  const [submitted, setSubmitted] = useState(false);
  const [pulse, setPulse] = useState(false);

  const display = custom ? `Rs. ${parseInt(custom, 10).toLocaleString()}` : `Rs. ${amount.toLocaleString()}`;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setPulse(true);
    setTimeout(() => { setSubmitted(true); setPulse(false); }, 800);
  };

  const methods = [
    { id: 'card', label: 'Card', sub: 'Visa, Mastercard, Amex', mark: <svg viewBox="0 0 60 25" width="48" height="18" aria-label="Stripe"><text x="0" y="20" fontFamily="Inter, sans-serif" fontWeight="700" fontStyle="italic" fontSize="20" fill="#635bff">stripe</text></svg> },
    { id: 'paypal', label: 'PayPal', sub: 'Redirect to PayPal', mark: <svg viewBox="0 0 100 28" width="56" height="16" aria-label="PayPal"><text x="0" y="20" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="20" fill="#003087">Pay</text><text x="42" y="20" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="20" fill="#009cde">Pal</text></svg> },
    { id: 'bank', label: 'Bank', sub: 'LKR transfer', mark: <Icon name="shield" size={18} color="#d4af37" /> },
  ];

  return (
    <div className="rw-page">
      <header className="rw-page__header">
        <div className="rw-container">
          <div className="rw-eyebrow">Support</div>
          <h1 className="rw-page__title">Make a Donation</h1>
          <p className="rw-page__lead">Your contribution helps preserve one of humanity&apos;s most enduring monuments of faith. Every rupee, no matter the size, supports the ongoing care of the Great Stupa.</p>
        </div>
      </header>

      <section className="rw-section rw-section--cream rw-section--tight">
        <div className="rw-container rw-container--prose rw-donate-grid">
          <div className="rw-donate-card">
            {submitted ? (
              <div className="rw-donate__success">
                <div className="rw-donate__success-mark"><Icon name="check" size={28} color="#d4af37" /></div>
                <h2 className="rw-h2">Sadhu.</h2>
                <p className="rw-body">Your offering of {display} has been received via {method === 'card' ? 'card' : method === 'paypal' ? 'PayPal' : 'bank transfer'}. A receipt will arrive at your inbox shortly.</p>
                <button className="rw-btn rw-btn--secondary" onClick={() => setSubmitted(false)}>Make Another</button>
              </div>
            ) : (
              <form className="rw-donate__form" onSubmit={submit}>
                <div className="rw-donate__group">
                  <label className="rw-donate__lbl">Frequency</label>
                  <div className="rw-toggle">
                    {['once', 'monthly'].map(f => (
                      <button type="button" key={f} className={frequency === f ? 'is-active' : ''} onClick={() => setFrequency(f)}>
                        {f === 'once' ? 'One-time' : 'Monthly'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rw-donate__group">
                  <label className="rw-donate__lbl">Amount (LKR)</label>
                  <div className="rw-amount-grid">
                    {AMOUNTS.map(a => (
                      <button type="button" key={a} className={`rw-amount ${amount === a && !custom ? 'is-active' : ''}`}
                        onClick={() => { setAmount(a); setCustom(''); }}>
                        Rs. {a.toLocaleString()}
                      </button>
                    ))}
                    <div className={`rw-amount rw-amount--custom ${custom ? 'is-active' : ''}`}>
                      <span>Rs.</span>
                      <input type="number" inputMode="numeric" placeholder="Other" value={custom} onChange={e => setCustom(e.target.value)} />
                    </div>
                  </div>
                </div>

                <div className="rw-donate__group">
                  <label className="rw-donate__lbl">Payment method</label>
                  <div className="rw-pay-methods">
                    {methods.map(m => (
                      <button type="button" key={m.id} className={`rw-pay-method ${method === m.id ? 'is-active' : ''}`} onClick={() => setMethod(m.id)}>
                        <span className="rw-pay-method__mark">{m.mark}</span>
                        <span className="rw-pay-method__info">
                          <span className="rw-pay-method__label">{m.label}</span>
                          <span className="rw-pay-method__sub">{m.sub}</span>
                        </span>
                        <span className="rw-pay-method__radio" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rw-pay-detail">
                  {method === 'card' && <CardForm />}
                  {method === 'paypal' && <PaypalForm />}
                  {method === 'bank' && <BankForm />}
                </div>

                {method !== 'bank' && (
                  <>
                    <div className="rw-donate__group">
                      <label className="rw-donate__lbl">Name (optional)</label>
                      <input className="rw-input" type="text" placeholder="Anonymous" />
                    </div>
                    <div className="rw-donate__group">
                      <label className="rw-donate__lbl">Email (for receipt)</label>
                      <input className="rw-input" type="email" placeholder="you@example.com" required />
                    </div>
                    <div className="rw-donate__group">
                      <label className="rw-donate__lbl">Dedication (optional)</label>
                      <textarea className="rw-input" rows={2} placeholder="May this merit be shared with…" />
                    </div>
                    <button type="submit" className={`rw-btn rw-btn--primary rw-btn--lg rw-donate__submit ${pulse ? 'is-pulsing' : ''}`}>
                      <Icon name="heart" size={16} style={{ marginRight: 8 }} />
                      Offer {display}{frequency === 'monthly' ? ' / month' : ''}
                    </button>
                  </>
                )}

                <p className="rw-donate__legal">Payments processed securely. Ruwanwelisaya Preservation is a registered non-profit. Receipts are tax-deductible in Sri Lanka.</p>
              </form>
            )}
          </div>

          <div className="rw-donate__aside">
            <FadeIn>
              <h3 className="rw-h3">Where it goes</h3>
              <ul className="rw-alloc">
                {ALLOCATIONS.map(a => (
                  <li key={a.label}>
                    <div className="rw-alloc__row">
                      <span className="rw-alloc__label">{a.label}</span>
                      <span className="rw-alloc__pct">{a.pct}%</span>
                    </div>
                    <div className="rw-alloc__bar"><span style={{ width: `${a.pct}%` }} /></div>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rw-donate__quote">
                <Lotus size={20} color="#d4af37" opacity={0.6} />
                <blockquote>&ldquo;If you light a lamp for somebody, it will also brighten your path.&rdquo;</blockquote>
                <p>— Buddhist teaching</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="rw-trust">
                <Icon name="shield" size={20} color="#d4af37" />
                <div>
                  <strong>Secure payments</strong>
                  <span>PCI-DSS · 3D-Secure · TLS 1.3 · receipts issued by email within minutes</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
