# Website UI Kit — Ruwanwelisaya

A click-through React recreation of the Ruwanwelisaya website. JSX components, no build step (Babel in browser).

## What's in here

| Surface | Highlights |
|---|---|
| **Events** | **NEW.** Dedicated events surface with: featured upcoming Poya (full-bleed scene), calendar of all 12 Poya days (Duruthu → Unduvap), 5 daily observances (Ude Danaya / Dawal Danaya / Gilanpasa Pooja / Buddha Pooja / Pirith). Each event opens a detail view with a themed full-bleed SVG illustration: **Vesak** → hanging paper lanterns swaying & glowing against a deep purple night sky; **Poson** → Mihintale rock with the small white stupa on top, stone steps, and white-clad pilgrims; **Esala** → caparisoned elephant under torchlight with drummers; **Poya months** → moonlit stupa with oil lamps; **Alms** → green banana leaf, monk's bowl with rice, rising steam, lotus flowers. Each scene includes Sinhala script (e.g. දුරුතු, පොසොන්, දවල් දානය) and animated elements (lantern sway, flame flicker, moon pulse, steam rise, falling petals). |
| **Home** | Full-screen illustrated stupa scene (warm dusk sky, pulsing pinnacle halo, drifting birds, pilgrim silhouettes), quick-info bar, history section, daily Dhamma quote, gallery preview, blog preview, feature cards, quick-feedback form, donate CTA |
| **Gallery** | Masonry photo grid with category chips and a "Submit a Photo" CTA |
| **Blog** | 30-article index with featured post + category filters (counts per category), plus a full **post-detail view** with hero, lede, structured body (h2/h3/quote/lists), in-article ad, keyword tags, author byline, related posts, and a per-post feedback form. Each post is 750–1000 words and SEO-optimised. |

## SEO & AdSense

The site is built for organic search and AdSense approval:

- **30 long-form posts** (750–1000 words each) across Guide / History / Events / Architecture / Conservation / Tradition. Data lives in `posts-data-1.jsx`, `posts-data-2.jsx`, `posts-data-3.jsx`; each post carries `seo: { description, keywords }` plus a structured `body` array.
- **Per-route meta injection** (`blog.jsx`): title, description, keywords, canonical, Open Graph, Twitter Card, and JSON-LD (`Article` + `BreadcrumbList` on posts, `Blog` on the index) are written into `<head>` on navigation.
- **Site-wide structured data** in `index.html` head: `WebSite` (with SearchAction) and `LandmarksOrHistoricalBuildings` schema with geo-coordinates.
- **`sitemap.xml`** — all 6 routes + 30 blog posts with changefreq/priority.
- **`robots.txt`** — allow-all with sitemap reference and crawl-delay courtesy for aggressive bots.
- **`ads.txt`** — IAB-standard stub; replace `pub-0000…` with your real AdSense publisher ID.
- **AdSense loader** — commented `<script>` in head; uncomment and add your `ca-pub-` ID once approved. Ad slots (`home-top/mid/bottom`, `blog-inline`) render real ad HTML when configured via the Admin panel, with an auto-inserted in-article unit one-third down each post.

| **Community** | Pilgrim forum + interactive "Light a Virtual Lamp" ritual with particle flicker, glow halo, and counter |
| **Donate** | Frequency toggle (one-time / monthly), amount picker with custom field, **three payment methods (Stripe card · PayPal · Bank transfer)**, per-method detail forms, allocation chart, security trust card |
| **Admin Panel** | Floating FAB (bottom-left, also opens with ⌘ . / Ctrl .) with four tabs: **Ads** (inject custom HTML per slot, with a demo-ad inserter), **Settings** (feature flags), **Payments** (toggle which gateways show on donate), and a **Reset** tab |
| **Ad Slots** | Five named slots — `home-top`, `home-mid`, `home-bottom`, `blog-sidebar`, `blog-inline` — render a striped placeholder when empty and a live HTML render when filled via Admin |
| **Feedback** | Star rating + name/email/message form. Inline-compact variant on home; full variant at the bottom of each blog post |

## Animations added

- Scroll-triggered fade-in (`IntersectionObserver` + 800ms `easeOut`)
- Pinnacle halo pulse on the hero illustration
- Drifting bird silhouettes (5 separate, looping)
- Ambient hero glow breathing (8s)
- Lamp flicker on the virtual lamp flame
- Star-pop on rating click
- Submit-button radial pulse on donation send
- Feature-card icon scale+rotate on hover

## Files

| File | Role |
|---|---|
| `index.html` | Host page — fonts, all styles, React/Babel, and the JSX imports |
| `shared.jsx` | `Mark`, `Lotus`, `Icon`, `Button`, `SectionHeading`, `FadeIn`, `Eyebrow`, `LotusDivider` |
| `stupa-scene.jsx` | The illustrated hero — CSS gradient sky + solid-fill SVG silhouette |
| `admin.jsx` | `AdminPanel`, `AdSlot`, `useFlags`, `useAdCode` |
| `feedback.jsx` | `FeedbackForm` (compact + full) |
| `chrome.jsx` | `Navbar`, `Footer` |
| `home.jsx` | `HomePage` |
| `events.jsx` | `EventsPage`, `EventDetail`, `POYA_DAYS`, `DAILY_OBSERVANCES` |
| `event-scenes.jsx` | `VesakScene`, `PosonScene`, `EsalaScene`, `PoyaMoonScene`, `AlmsScene`, `EventScene` dispatcher |
| `gallery.jsx` | `GalleryPage` |
| `blog.jsx` | `BlogPage` + `BlogDetail` |
| `community.jsx` | `CommunityPage` + `LampOffering` + `ForumPost` |
| `donate.jsx` | `DonatePage` + `CardForm` + `PaypalForm` + `BankForm` |
| `app.jsx` | Top-level shell + route state |

## Conventions

- **No `const styles = {}` at module scope** — inline styles where needed; otherwise utility classes in `<style>` inside `index.html`.
- **Components are pure React function components.** No Framer Motion — the same fade-in pattern is recreated with `IntersectionObserver` + a CSS class swap, which keeps the bundle dependency-free.
- **Icons are inlined** as SVG paths in `shared.jsx`. No CDN.
- **Photography:** the hero is an SVG illustration; gallery / blog imagery uses warm-toned CSS gradient tints as photographic stand-ins. Swap with real photography when assets become available.
- **Admin state** persists in `localStorage` keys (`rw-ad-*`, `rw-flags`, `rw-lamps-lit`). The Reset tab clears everything.

## Quick start

Open `index.html`. Click **Admin** in the bottom-left → **Ads** tab → choose a slot → click **Insert demo ad** → **Save & inject**. Reload-free; the placeholder swaps live.
