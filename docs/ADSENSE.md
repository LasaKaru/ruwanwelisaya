# Google AdSense — Setup Guide

This site is built to display Google AdSense ads but ships with **placeholders**, so it builds and runs before you have an account. Follow these steps to go live.

## Prerequisites

- A live, publicly reachable domain (AdSense reviews the real site).
- The required policy pages — **About**, **Contact**, **Privacy Policy** — are already included at `/about`, `/contact`, `/privacy`.
- Original content — the 26 blog posts satisfy AdSense's "sufficient content" requirement.

## Step 1 — Apply & verify the site

1. Create an account at [adsense.google.com](https://adsense.google.com).
2. Add your site and get your **publisher ID**: `ca-pub-XXXXXXXXXXXXXXXX`.

## Step 2 — Add the loader script

In [`src/app/layout.tsx`](../src/app/layout.tsx), uncomment the AdSense script in `<head>` and insert your publisher ID:

```tsx
<head>
  {/* ...JSON-LD... */}
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
    crossOrigin="anonymous"
  />
</head>
```

> Prefer `next/script` with `strategy="afterInteractive"` if you want finer loading control. The plain `<script async>` is fine for AdSense's auto-ads and manual units.

## Step 3 — Update `ads.txt`

Edit [`public/ads.txt`](../public/ads.txt) so it is served at `https://yourdomain.com/ads.txt`:

```
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

`f08c47fec0942fa0` is Google's fixed certification authority ID — keep it as-is; only change the `pub-…` value.

## Step 4 — Configure each ad slot

Sign in at **`/admin/login`** (the **Admin** link is in the site footer), open the **Ads** tab on the dashboard, and for each slot paste its AdSense unit code:

```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="0000000000"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

### Slot inventory

| Slot ID | Recommended unit | Where it appears |
|---------|------------------|------------------|
| `home-top` | Leaderboard (728×90 / responsive) | Home, under the info bar |
| `home-mid` | Leaderboard / responsive | Home, between gallery and blog |
| `home-bottom` | Medium rectangle (300×250) | Home footer & Events page |
| `blog-sidebar` | Medium rectangle (300×250) | Blog detail (reserved) |
| `blog-inline` | In-article / responsive | Inside each article (~⅓ down) |

Saved codes persist in `localStorage` under `rw_ad_{slotId}`. They are **per-browser** — for site-wide ads in production, see "Production hardening" below.

## How `AdSlot` works

[`src/components/AdSlot.tsx`](../src/components/AdSlot.tsx):

- On mount, reads `localStorage.getItem("rw_ad_{id}")`.
- If present, injects it with `dangerouslySetInnerHTML`.
- If absent, renders a labeled placeholder ("Configure in Admin → Ads").

## Production hardening (recommended)

Access to the admin dashboard is now **login-protected** (see the [Admin Console](../README.md#admin-console) section). The ad codes themselves, however, are still stored **client-side and per-browser** in `localStorage`. For a real deployment you should move ad configuration server-side:

1. Store slot HTML in an env var, CMS, or small DB.
2. Render it from a server component (so every visitor sees the same ads and there's no flash of placeholder).
3. Keep the Admin panel behind authentication, or remove it from production builds.

Tracked in the [README roadmap](../README.md#roadmap).

## Compliance checklist

- [ ] Privacy Policy discloses Google AdSense + third-party cookies — **done** (`/privacy`).
- [ ] `ads.txt` published at the domain root with your real `pub-` ID.
- [ ] Cookie-consent banner for EEA/UK/Swiss visitors (personalized ads) — **TODO** (roadmap).
- [ ] No ads on pages without content / error pages.
- [ ] No clicking your own ads. 🙂
