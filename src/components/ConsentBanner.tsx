'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getConsent, setConsent, CONSENT_EVENT, type Consent } from '@/lib/consent';

export default function ConsentBanner() {
  const [consent, setLocal] = useState<Consent>('unset');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLocal(getConsent());
    const onChange = (e: Event) => setLocal((e as CustomEvent).detail as Consent);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  // Never render on the server, and hide once a choice exists.
  if (!mounted || consent !== 'unset') return null;

  return (
    <div className="rw-consent" role="dialog" aria-label="Cookie consent" aria-live="polite">
      <div className="rw-consent__inner">
        <div className="rw-consent__text">
          <strong>We value your privacy</strong>
          <p>
            We use cookies to run this site and to serve advertising (Google AdSense).
            Choose &ldquo;Accept&rdquo; to allow ad cookies, or &ldquo;Decline&rdquo; for essential cookies only.
            Read our <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </div>
        <div className="rw-consent__actions">
          <button className="rw-btn rw-btn--ghost rw-btn--sm" onClick={() => setConsent('denied')}>
            Decline
          </button>
          <button className="rw-btn rw-btn--primary rw-btn--sm" onClick={() => setConsent('granted')}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
