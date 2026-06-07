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

Set your publisher ID as an environment variable — the loader (`src/components/AdSense.tsx`) wires up automatically; **no code edits needed**:

```
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
```

> The AdSense library is injected with `next/script` (`strategy="afterInteractive"`) **only when** a publisher ID is set **and** the visitor has accepted ad cookies in the consent banner.

## Step 3 — Update `ads.txt`

Edit [`public/ads.txt`](../public/ads.txt) so it is served at `https://yourdomain.com/ads.txt`:

```
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

`f08c47fec0942fa0` is Google's fixed certification authority ID — keep it as-is; only change the `pub-…` value.

## Step 4 — Add a slot ID per placement

Sign in at **`/admin/login`** (the **Admin** link is in the site footer), open **Advertisements**, and for each slot enter its numeric **ad-slot ID** (from your AdSense unit). That's all that's needed for live units — the markup and `adsbygoogle.push()` are handled for you.

You can also paste **custom HTML** per slot as a fallback (affiliate banners, house ads, etc.); it renders when no AdSense slot ID is configured or before consent.

### Slot inventory

| Slot ID | Recommended unit | Where it appears |
|---------|------------------|------------------|
| `home-top` | Leaderboard (728×90 / responsive) | Home, under the info bar |
| `home-mid` | Leaderboard / responsive | Home, between gallery and blog |
| `home-bottom` | Medium rectangle (300×250) | Home footer & Events page |
| `blog-sidebar` | Medium rectangle (300×250) | Blog detail (reserved) |
| `blog-inline` | In-article / responsive | Inside each article (~⅓ down) |

Per-slot settings persist in `localStorage` (`rw_adslot_{id}` for the ad-slot ID, `rw_ad_{id}` for custom HTML). They are **per-browser** — for site-wide config in production, see "Production hardening" below.

## How `AdSlot` works

[`src/components/AdSlot.tsx`](../src/components/AdSlot.tsx) renders, in order:

1. **A live AdSense `<ins>` unit** — when `NEXT_PUBLIC_ADSENSE_CLIENT` + a per-slot ad-slot ID are set **and** consent is granted (it calls `adsbygoogle.push({})`).
2. **Custom HTML** — saved for the slot in the admin console.
3. **A labelled placeholder** — otherwise.

## Cookie consent

`src/components/ConsentBanner.tsx` records the visitor's choice in `localStorage` (`rw_consent`). On **Accept**, `AdSense.tsx` loads the library and slots begin serving; on **Decline**, no ad library loads. Visitors can revisit the choice via **Cookie settings** in the footer. For full EEA/UK/CH compliance, pair this with a Google-certified Consent Management Platform.

## Production hardening (recommended)

Access to the admin dashboard is now **login-protected** (see the [Admin Console](../README.md#admin-console) section). The ad codes themselves, however, are still stored **client-side and per-browser** in `localStorage`. For a real deployment you should move ad configuration server-side:

1. Store slot HTML in an env var, CMS, or small DB.
2. Render it from a server component (so every visitor sees the same ads and there's no flash of placeholder).
3. Keep the Admin panel behind authentication, or remove it from production builds.

Tracked in the [README roadmap](../README.md#roadmap).

## Compliance checklist

- [x] Privacy Policy discloses Google AdSense + third-party cookies (`/privacy`).
- [x] Cookie-consent banner gating ad cookies; ads load only after consent.
- [ ] `ads.txt` published at the domain root with your real `pub-` ID.
- [ ] (Recommended) Pair the banner with a Google-certified CMP for full EEA/UK/CH compliance.
- [ ] No ads on pages without content / error pages.
- [ ] No clicking your own ads. 🙂
