# Security

This document describes the security posture of the project and how to harden a
deployment. For the admin architecture see also
[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Admin authentication

The `/admin` area is the only authenticated surface.

| Control | Implementation |
|---------|----------------|
| **Session** | Signed JWT (HS256, `jose`), stored in an **httpOnly**, `sameSite=lax`, `secure` (prod) cookie, 8-hour expiry |
| **Route protection** | Edge `middleware.ts` verifies the session on every `/admin/*` request and redirects to `/admin/login` otherwise |
| **Credentials** | From env: `ADMIN_USERNAME` + `ADMIN_PASSWORD` *or* `ADMIN_PASSWORD_HASH` (scrypt) |
| **Password hashing** | `ADMIN_PASSWORD_HASH` (`scrypt:<salt>:<hash>`) verified with `crypto.timingSafeEqual` |
| **Constant-time compare** | Username and password compared with timing-safe routines |
| **Rate limiting** | 5 failed attempts / 15 min per IP → 15-minute lockout (`src/lib/rate-limit.ts`) |
| **Edge/Node split** | `node:crypto` (scrypt) lives in `credentials.ts` (Node only); the edge middleware imports only the `jose` session helpers |

### Required environment variables (production)

```bash
ADMIN_USERNAME=<your-username>
# either:
ADMIN_PASSWORD=<a-strong-password>
# or (recommended) a scrypt hash:
ADMIN_PASSWORD_HASH=scrypt:<saltHex>:<hashHex>
AUTH_SECRET=<32+ random chars>     # openssl rand -base64 32
```

Generate a password hash:

```bash
node scripts/hash-password.mjs 'your-strong-password'
# → ADMIN_PASSWORD_HASH=scrypt:....
```

If `ADMIN_PASSWORD`/`ADMIN_PASSWORD_HASH` or `AUTH_SECRET` are unset, the app
falls back to **insecure development defaults** and the admin dashboard shows a
persistent warning banner. Never ship with defaults.

## HTTP security headers

Set globally in `next.config.mjs` (`headers()`):

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN` (and `DENY` on `/admin`)
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `/admin` additionally: `Cache-Control: no-store`, `X-Robots-Tag: noindex, nofollow`

`poweredByHeader` is disabled (no `X-Powered-By`).

## CSRF

Next.js Server Actions (used for login/logout) include built-in origin
validation, mitigating cross-site request forgery for the admin forms.

## Dependency advisories

We track `npm audit`. Current status:

- **Patched:** the Next.js middleware-bypass CVE and the `postcss` XSS are
  fixed — we run **Next 14.2.35** (latest 14.2.x) with a `postcss ^8.5.10`
  override.
- **Residual (Next.js):** the remaining advisories are only patched in the
  **15.5.16+ / 16.x** line (the 14.x line is EOL for them). They target
  features this site does **not** use:
  - `next/image` Image Optimization (DoS / cache) — **no `next/image`; all art is inline SVG**, `remotePatterns: []`.
  - `rewrites` request smuggling — **no rewrites configured**.
  - Pages-Router + i18n middleware bypass — **App Router only, no i18n**.
  - CSP-nonce / `beforeInteractive` XSS — **not used**.
  - WebSocket-upgrade SSRF — **not used**.

  These are therefore low practical risk for this deployment. Moving to Next 15
  would require breaking changes (async `cookies()`/`headers()`/`params`) and is
  tracked as a deliberate, separate upgrade in the roadmap.

## Reporting

Found an issue? Email **security@ruwanwelisaya.com** (or open a private advisory
on the GitHub repo). Please do not file public issues for vulnerabilities.
