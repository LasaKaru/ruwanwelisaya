'use client';
import { useEffect, useRef, useState } from 'react';
import { getConsent, CONSENT_EVENT, ADSENSE_CLIENT, type Consent } from '@/lib/consent';

interface AdSlotProps {
  id: string;
  size: 'leaderboard' | 'rectangle';
  label?: string;
}

declare global {
  interface Window { adsbygoogle?: unknown[]; }
}

/**
 * Renders an ad in this order of preference:
 *   1. A real AdSense unit  — when a publisher ID + per-slot ad-slot ID are
 *      configured AND the visitor consented.
 *   2. Custom HTML          — saved for this slot in the admin console.
 *   3. A labelled placeholder.
 */
export default function AdSlot({ id, size, label }: AdSlotProps) {
  const [html, setHtml] = useState<string | null>(null);
  const [adSlotId, setAdSlotId] = useState<string>('');
  const [consent, setConsent] = useState<Consent>('unset');
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    try {
      setHtml(localStorage.getItem(`rw_ad_${id}`));
      setAdSlotId(localStorage.getItem(`rw_adslot_${id}`) || '');
    } catch {}
    setConsent(getConsent());
    const onChange = (e: Event) => setConsent((e as CustomEvent).detail as Consent);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, [id]);

  const sizeClass = size === 'leaderboard' ? 'rw-ad--leaderboard' : 'rw-ad--rectangle';
  const useAdSense = Boolean(ADSENSE_CLIENT && adSlotId && consent === 'granted');

  // Queue the AdSense unit once it's rendered.
  useEffect(() => {
    if (useAdSense && insRef.current && !pushed.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      } catch {}
    }
  }, [useAdSense]);

  if (useAdSense) {
    return (
      <div className={`rw-ad ${sizeClass}`}>
        <span className="rw-ad__pin">Ad</span>
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={adSlotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  if (html) {
    return (
      <div className={`rw-ad ${sizeClass}`}>
        <span className="rw-ad__pin">Ad</span>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }

  return (
    <div className={`rw-ad rw-ad--empty ${sizeClass}`}>
      <div className="rw-ad__pattern" />
      <div className="rw-ad__inner">
        <div className="rw-ad__eyebrow">Advertisement</div>
        <div className="rw-ad__id">{label || id}</div>
        <div className="rw-ad__hint">Configure in <strong>Admin → Advertisements</strong></div>
      </div>
    </div>
  );
}
