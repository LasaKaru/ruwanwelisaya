# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/), and this project adheres to
[Semantic Versioning](https://semver.org/).

## [1.2.0] — 2026-06-04

### Added
- **Redesigned admin console** (`components/AdminDashboard.tsx`) — sidebar layout with five sections: Overview (session + stats + health), Advertisements (per-slot editor with status pills + live preview), Appearance (feature flags), Payments, and Security (session details, credential checklist, hardening tips, danger zone). Fully responsive with an off-canvas mobile sidebar.
- **Hardened admin security:**
  - `src/lib/credentials.ts` — Node-only credential check supporting **scrypt** `ADMIN_PASSWORD_HASH` or plaintext `ADMIN_PASSWORD`, both timing-safe.
  - `src/lib/rate-limit.ts` — in-memory login rate limiter (5 / 15 min per IP → lockout).
  - `scripts/hash-password.mjs` — generate an `ADMIN_PASSWORD_HASH`.
  - Login server action now rate-limits per client IP and reports remaining attempts.
  - Security headers in `next.config.mjs` (HSTS, `X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`; `/admin` gets `DENY` + `no-store` + `noindex`); `poweredByHeader` disabled.
- `SECURITY.md` — security posture, hardening guide, and dependency-advisory analysis.
- `.env.example` updated with `ADMIN_PASSWORD_HASH`; `npm run lint` script added.

### Changed
- **Security:** upgraded `next` 14.2.5 → **14.2.35** (patches the middleware-bypass CVE and others) and added a `postcss ^8.5.10` override (fixes the moderate XSS advisory).
- `src/lib/auth.ts` slimmed to edge-safe session helpers only (credential logic moved to `credentials.ts`).
- `app/admin/page.tsx` is now `force-dynamic` and passes session/security/stats into the dashboard.
- Docs: README (Admin Console section + security features, env vars, structure), `docs/ARCHITECTURE.md` (auth deep-dive), `docs/ADSENSE.md`.

### Notes
- Remaining `npm audit` items require a Next 15+ major upgrade and target features this site does not use (no `next/image`, rewrites, i18n, Pages Router, CSP nonces, or WebSocket upgrades). See SECURITY.md. Tracked as a deliberate future upgrade.
- Build verified: 43 routes, zero TypeScript errors.

## [1.1.0] — 2026-06-03

### Added
- **Authenticated admin area.** New login-protected `/admin` dashboard replacing the open floating panel:
  - `/admin/login` page with server-action login (`useFormState` / `useFormStatus`).
  - `src/lib/auth.ts` — JWT session sign/verify via `jose` (HS256, 8h), constant-time credential check, default-credential detection.
  - `src/middleware.ts` — edge middleware guarding all `/admin/*` routes, redirecting to login.
  - `src/app/admin/actions.ts` — `loginAction` / `logoutAction` setting/clearing an httpOnly session cookie.
  - `src/components/AdminDashboard.tsx` — ads / settings / payments / reset controls (migrated from the old panel).
  - `.env.example` documenting `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `AUTH_SECRET`, `NEXT_PUBLIC_ADSENSE_CLIENT`.
  - Discreet **Admin** link added to the footer.
- New dependency: `jose` (edge-compatible JWT).

### Changed
- `Navbar` is now solid on all non-home pages (fixes invisible nav over light backgrounds) and hides itself on `/admin`.
- `Footer` hides itself on `/admin`.
- Docs: README (Admin Panel + auth diagram, env vars, deployment notes), `docs/ARCHITECTURE.md` (auth flow + component table), `docs/ADSENSE.md` (admin access via login).

### Removed
- `src/components/AdminPanel.tsx` (floating, unauthenticated panel) and its global mount in `layout.tsx`.

### Notes
- The app now requires an edge/Node runtime (middleware + dynamic `/admin`); public pages remain statically generated.
- Build verified: 43 routes, zero TypeScript errors.

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
