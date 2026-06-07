'use client';

/**
 * Lightweight cookie/ads consent state shared by the consent banner,
 * the AdSense loader, and individual ad slots.
 *
 * Stored in localStorage; changes broadcast a window event so all
 * listeners (in the same tab) update immediately.
 *
 * NOTE: this is a basic consent mechanism. For full EEA/UK/CH compliance
 * a Google-certified Consent Management Platform (CMP) is recommended.
 */

export type Consent = 'granted' | 'denied' | 'unset';

export const CONSENT_KEY = 'rw_consent';
export const CONSENT_EVENT = 'rw-consent-change';
export const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || '';

export function getConsent(): Consent {
  if (typeof window === 'undefined') return 'unset';
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === 'granted' || v === 'denied' ? v : 'unset';
  } catch {
    return 'unset';
  }
}

export function setConsent(value: Exclude<Consent, 'unset'>): void {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {}
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
  }
}

/** Re-open the banner so a visitor can change their choice. */
export function reopenConsent(): void {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {}
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: 'unset' }));
  }
}
