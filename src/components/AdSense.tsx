'use client';
import { useState, useEffect } from 'react';
import Script from 'next/script';
import { getConsent, CONSENT_EVENT, ADSENSE_CLIENT, type Consent } from '@/lib/consent';

/**
 * Loads the Google AdSense library — but only when:
 *   1. a publisher ID is configured (NEXT_PUBLIC_ADSENSE_CLIENT), and
 *   2. the visitor has granted ad-cookie consent.
 *
 * Individual <AdSlot> units then push themselves to `adsbygoogle`.
 */
export default function AdSense() {
  const [consent, setConsent] = useState<Consent>('unset');

  useEffect(() => {
    setConsent(getConsent());
    const onChange = (e: Event) => setConsent((e as CustomEvent).detail as Consent);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!ADSENSE_CLIENT || consent !== 'granted') return null;

  return (
    <Script
      id="adsbygoogle-init"
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
    />
  );
}
