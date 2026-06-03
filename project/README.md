# Ruwanwelisaya Design System

> A digital sanctuary for **Ruwanwelisaya — The Great Stupa of Anuradhapura, Sri Lanka.** This design system captures the brand language of the existing Next.js website and proposes a refined UI kit you can prototype against.

**Source repository:** [github.com/LasaKaru/ruwanwelisaya-web](https://github.com/LasaKaru/ruwanwelisaya-web) — a Next.js 16 + Tailwind v4 site for a sacred Buddhist heritage destination. Browse it to better understand how these tokens are composed in real pages (the homepage, donate flow, community forum, and gallery in particular).

The product is one surface: a **content + community website** for pilgrims, travellers, and Sri Lankan diaspora. It blends archaeology, religion, and travel utility — historical pages on King Dutugemunu and the stupa's construction sit next to a Poya-day calendar, a "Light a Virtual Lamp" ritual, a forum, photo gallery, donation flow, and a Daily Dhamma quote.

---

## Index

| File / folder | What it is |
|---|---|
| `README.md` | This file — brand, content, and visual foundations. |
| `SKILL.md` | Cross-compatible skill description so this can be used as a Claude / Claude Code skill. |
| `colors_and_type.css` | All design tokens as CSS custom properties + semantic type classes. |
| `assets/` | Original SVG marks drawn for this system (stupa, lotus, dharmacakra, oil lamp). |
| `preview/` | Small HTML cards that populate the Design System tab — colors, type, components, etc. |
| `ui_kits/website/` | A pixel-honest UI kit covering the marketing site: hero, navbar, footer, daily quote, content cards, lamp offering, forum post. JSX components + a click-thru `index.html`. |

---

## Brand essence

**Sacred. Quiet. Devotional.** The site exists to honour a 2,300-year-old monument, not to sell anything aggressively. Every design choice should feel reverent — generous whitespace, slow fades, gold accents that read as gilding rather than tech-startup gradient. The vocabulary leans toward "sanctuary", "pilgrim", "merit", "devotion", "stupa", "Poya day". Avoid anything that reads as e-commerce, dashboard, or SaaS.

---

## Content fundamentals

**Voice.** Third-person and inclusive ("Pilgrims gather…", "Devotees offer…"). When directly addressing the reader, second-person warmly ("Your contribution helps preserve…"). The product is "this digital sanctuary" or "we" — a small team of writers and devotees, never a corporation.

**Tone.** Reverent without being stiff. Borrows phrasing from Buddhist literature ("May this light dispel the darkness of ignorance", "Sadhu! You're subscribed 🙏") but stays accessible to a secular traveller. Historical claims are stated calmly and factually ("Built by King Dutugemunu in 140 BCE…"), not breathlessly.

**Casing.** Sentence case for body and most headings. **Wordmarks and brand titles are ALL-CAPS with very wide letter-spacing** (e.g. `RUWANWELISAYA` with `tracking-[0.2em]`). Eyebrow labels are ALL-CAPS at `tracking-widest` (e.g. `TODAY'S DHAMMA`, `OPEN`, `HERITAGE`).

**Specific examples from the codebase:**
- Hero subtitle: `THE GREAT STUPA • ANURADHAPURA` — wide-tracked, lowercase weight
- Section heading: *A Legacy of Devotion*
- Subtitle: *Built by King Dutugemunu in 140 BC, the Ruwanwelisaya stands as one of the tallest ancient monuments in the world and remains a living symbol of faith.*
- Newsletter confirmation: *"Sadhu! You're subscribed 🙏"*
- Donate CTA: *Support the Sacred*
- Mission copy: *"This website is a labour of love — built by devotees, for devotees."*

**Emoji.** Used sparingly and only as *cultural punctuation*, never as decorative filler. The lotus glyph `✿` is the most common (a Unicode flower, not an emoji per se). The dharma wheel `☸️` is used as the navbar logo placeholder. The 🙏 namaste appears in confirmation messages. `🏮 🪷 🪔 🐘 🔥` appear in the **seasonal overlay** during Vesak / Poson / Esala / Poya — but only then, not in general UI. **The redesign should replace the wheel emoji with a proper SVG mark.**

**Sanskrit / Pali terms.** Used freely without italicising: *stupa, dagoba, Poya, Vesak, Mahathupa, Sadhu, Solosmasthana, Atamasthana, Sutta, Dhammapada*. Translate inline only the first time per page, then drop the gloss.

**One thousand no's.** No filler stats sections, no "trusted by" badges, no startup-style benefit grids, no aggressive donation CTAs, no countdowns, no "limited time".

---

## Visual foundations

### Colour
The palette is small and deliberate: **gold + cream + grey**.

- **Pinnacle Gold `#d4af37`** — the single brand accent. Named for the gilded *kotha* (pinnacle) crowning the stupa. Used at 100% for type accents, buttons, and dividers; at 10–30% for borders and glows; rarely as a solid fill.
- **Saffron `#c77b2b`** — warm secondary, only ever paired with Pinnacle Gold in a 135° gradient. Reads as monks' robes.
- **Stupa White `#f8f9fa` / Warm White `#fefdfb` / Cream `#faf8f5`** — three near-whites that alternate to create soft section rhythm without ever introducing a coloured background.
- **Greys** — `#333` (text), `#666` (body), `#999` (meta). No blue-tinted greys; warm or neutral only.
- **Dark mode** — true black-ish (`#0f0f0f` bg, `#1e1e1e` card) with gold borders bumped to 20% opacity.

**Never** introduce purples, teals, electric blues, or saturated pinks. Even the seasonal Vesak banner stays in the amber-to-orange family.

### Type
- **Cinzel** (serif) for headings, brand wordmark, blockquotes. A capitals-only Roman-inscriptional face — feels carved, ancient, monumental.
- **Inter** (sans) for body, navigation, UI labels, meta. Neutral and modern; lets Cinzel do the emotional work.
- **Scale leans BIG for hero treatments** (`text-9xl` = 128px for the brand wordmark over the hero) and small-and-tracked for everything else (`text-xs` + `tracking-widest` for eyebrows).
- Body copy is `leading-relaxed` (line-height 1.7) — the site is read slowly.

### Spacing & rhythm
- Section padding on desktop is **`py-32` (128px)** — generous. The site breathes.
- Content max-widths: `max-w-4xl` for prose, `max-w-5xl` for grids, `max-w-7xl` for the navbar/footer.
- Vertical rhythm uses a 4 / 8 / 16 / 24 / 32 / 64 / 128 scale.
- Most rows use **flexbox or CSS grid with explicit `gap`** rather than margins between siblings.

### Backgrounds & imagery
- **Hero** uses a full-bleed image (originally a slow-motion GIF of the stupa at golden hour) with a vertical dark scrim `from-black/40 via-black/20 to-black/60` to keep white type legible.
- **Section alternation** uses `bg-cream` vs the default `bg-warm-white`. No coloured section backgrounds anywhere.
- Imagery should be **warm-toned**: golden hour, candlelight, dawn fog over ruins. Avoid cold/blue tones. Black-and-white archival photos are welcome.
- The current codebase ships with placeholder *gradient blocks* where photos should go (`bg-gradient-to-br from-amber-200 via-orange-100 to-yellow-100`) — this is a *temporary state*, not the design intent. Real pilgrim photography is the goal.

### Borders & cards
- Card pattern: white surface, `1px` border at `rgba(212, 175, 55, 0.10)`, **`rounded-lg` (8px)** radius, no drop shadow at rest.
- On hover, the **border darkens to `0.30` gold** *and* a soft gold-tinted shadow appears (`shadow-lg shadow-pinnacle-gold/5`).
- Pills (badges, tags, the lotus-divider dot) are `rounded-full`. Everything else is `rounded-sm` (buttons) or `rounded-lg` (cards). No flashy radii.

### Shadows
- Resting shadows: rare. The visual emphasis comes from gold borders, not elevation.
- Hover shadows: soft, **gold-tinted** (`rgba(212, 175, 55, 0.20)`) rather than neutral black.
- The Pinnacle Gold "glow" (`0 0 40px rgba(212, 175, 55, 0.30)`) is reserved for **special moments only** — the lit lamp, the donate CTA, the active Poya-day badge.

### Animation
- **Scroll fade-in** is the universal motion: `opacity 0 → 1`, `y: 40 → 0`, **800ms `easeOut`** (sometimes with a `delay` cascade of 0.15s per sibling). Implemented via Framer Motion `useInView({ once: true })` in the codebase.
- **Hover micro-motion** on buttons: `translateY(-2px)` + shadow grow on the primary; **`scale(1.1)` on icons** inside feature cards.
- **Slow ambient loops** (3–6s): `float` (icons drift), `shimmer` (gold sweeps across an oil pool), `flicker` (lamp flame), `glow-pulse` (active CTA halo).
- Bottom of the hero has a **chevron scroll indicator** that bobs 8px every 2s.
- **No bounce**, no spring overshoot. Easing is `easeOut` or `easeInOut`. Long durations (800ms) are intentional — the site moves slowly.

### Interaction states
- **Buttons** — primary scales: `hover:-translate-y-0.5` + gold-tinted shadow grows. Secondary: border + text invert (gold → white on gold fill). Ghost: 10% gold wash on hover.
- **Links** — `:hover` colour shifts to Pinnacle Gold; nav links also reveal a 1px gold underline that grows L→R via `after:w-0 → after:w-full` over 300ms.
- **Press** — no explicit scale-down; rely on the colour invert + shadow collapse.
- **Focus** — the global skip-link is gold-bg/white-text, otherwise the codebase relies on default browser focus rings. **Add a 2px gold focus ring in the redesign.**

### Transparency & blur
- **Glass navbar.** When the user scrolls past 50px, the navbar swaps from transparent over the hero to `rgba(255,255,255,0.75)` + `backdrop-blur(20px)` with a 1px gold-tinted bottom border. This is the *only* place backdrop blur is used in the chrome.
- **Seasonal overlay** uses a 4% colour wash full-screen during Vesak/Poson/Esala — even more subtle than the hero scrim.
- **Image overlays** are linear gradients top-to-bottom (`black/60 → black/0 → black/0`) for type legibility, never solid colour-tints.

### Corner radii (summary)
| Element | Radius |
|---|---|
| Buttons, inputs | `2px` (`rounded-sm`) |
| Cards, content blocks | `8px` (`rounded-lg`) |
| Avatars, dot indicators, dividers | full-pill |
| Section heroes, large media | `0` (full-bleed, no radius) |

---

## Iconography

The existing codebase **does not ship a custom icon set or a brand mark.** Two patterns are in use:

1. **`react-icons/hi`** — the Heroicons Outline family is imported for all UI affordances: `HiOutlineMail`, `HiOutlineHeart`, `HiOutlinePhotograph`, `HiOutlineBookOpen`, `HiOutlineLocationMarker`, `HiOutlineClock`, `HiOutlineGlobe`, `HiOutlineLightBulb`, `HiOutlineShieldCheck`, `HiOutlineMenuAlt3`, `HiX`, `HiOutlineSun`, `HiOutlineMoon`, `HiOutlineCheckCircle`. Stroke-only, 24×24, 1.5px stroke weight.
2. **Unicode glyphs as cultural decoration** — the lotus `✿` is the workhorse (footer divider, hero ornament, mobile-menu flourish). The dharma wheel `☸️` is used **as the brand logo** in the navbar.

**Iconography in this design system:**
- **Icons:** continue using **Heroicons Outline**, loaded from CDN in static demos: `https://unpkg.com/heroicons@2/24/outline/*.svg`. Stroke 1.5, never filled.
- **Brand marks:** I drew four original SVGs in `assets/` to replace the emoji placeholders:
  - `mark-stupa.svg` — a clean stupa silhouette to replace the wheel-emoji navbar logo.
  - `mark-lotus.svg` — an eight-petal lotus for ornamental dividers and the loading state.
  - `mark-dharmachakra.svg` — the dharma wheel as a real SVG, for hero ornament.
  - `icon-lamp.svg` — an oil lamp glyph for the "Light a Lamp" ritual.
- **Emoji:** keep `✿` (it's actually a Unicode dingbat — works across systems). **Drop the platform emoji 🏮 🪷 🪔 🐘 🔥** from the seasonal overlay in favour of solid SVG silhouettes; emoji rendering varies wildly and breaks the reverent tone on Windows.

> **Substitution flag for the user:** the source repo has no real logo asset. The SVG marks above are drawn from common stupa anatomy diagrams (dome, harmika, chathra, pinnacle) and Buddhist dharma-wheel iconography — not copied from any third-party brand. Please confirm or send a real logo if one exists.

---

## Font substitution flag

The codebase loads **Cinzel** and **Inter** from Google Fonts via `next/font`. I'm doing the same via a `@import url(...)` in `colors_and_type.css`, so no font files are bundled. If the production site eventually self-hosts these, drop the `.woff2` files into `fonts/` and update the CSS — both are SIL OFL licensed.

---

## Caveats

- **No real photography.** The current site references `/images/Ruwan1.gif` and `/images/Rsupport.png` which don't exist in the repo. The UI kit uses gradient placeholders in the same spirit as the codebase's own gallery preview.
- **No logo asset shipped.** See above. I've drawn original SVG marks; if a real Ruwanwelisaya logo exists please share it.
- **Heroicons CDN.** The UI kit pulls icons inline as SVG paths rather than fetching from a CDN — this keeps the static HTML self-contained for previewing.
- **One product.** This is a single content website. There is no app, no admin dashboard, no embedded player surface to design separately.
