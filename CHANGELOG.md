# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/), and this project adheres to
[Semantic Versioning](https://semver.org/).

## [1.0.0] — 2026-06-03

### Added
- Initial production Next.js 14 (App Router) implementation from the Claude Design handoff.
- **Pages:** Home, Events, Gallery, Blog (index + 26 article detail pages), Community, Donate, About, Contact, Privacy Policy.
- **Components:** Navbar, Footer, AdSlot, AdminPanel, FadeIn, Feedback, Icon, StupaScene, GalleryScene, EventScenes.
- **Data layer:** `src/lib/posts.ts` (26 posts + helpers) and `src/lib/events.ts` (12 Poya days, 5 daily observances).
- **Animated SVG scenes:** stupa hero, gallery scenes (golden/night/devotion/dawn/wall/lamp/procession), festival scenes (Vesak/Poson/Esala/Poya/Alms).
- **Google AdSense scaffolding:** 5 ad slots, `public/ads.txt`, commented loader in the root layout, and a localStorage-backed Admin panel.
- **SEO:** Metadata API per page, Open Graph + Twitter cards, `WebSite`/`LandmarksOrHistoricalBuildings`/`Article` JSON-LD, `sitemap.xml`, `robots.txt`.
- **Docs:** README with architecture diagrams, `docs/ARCHITECTURE.md`, `docs/ADSENSE.md`.
- `.gitignore` for Node/Next build artifacts.

### Notes
- Payments, newsletter, forum, and lamp counter are UI-only (no backend yet).
- Build verified: 41 static routes, zero TypeScript errors.

<!--
Template for future entries:

## [x.y.z] — YYYY-MM-DD
### Added
### Changed
### Fixed
### Removed
-->
