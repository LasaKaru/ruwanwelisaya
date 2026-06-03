import { SignJWT, jwtVerify, type JWTPayload } from 'jose';

/**
 * Admin authentication helpers.
 *
 * Session is a signed (HS256) JWT stored in an httpOnly cookie.
 * Credentials and the signing secret come from environment variables —
 * see .env.example. The fallbacks below exist ONLY so the app runs in
 * local development; set real values in production.
 */

const DEV_SECRET = 'dev-only-insecure-secret-change-me-please-32chars';

function getSecret(): Uint8Array {
  const secret = process.env.AUTH_SECRET || DEV_SECRET;
  return new TextEncoder().encode(secret);
}

export const SESSION_COOKIE = 'rw_admin_session';
export const SESSION_MAX_AGE = 60 * 60 * 8; // 8 hours (seconds)

export interface AdminSession extends JWTPayload {
  username: string;
  role: 'admin';
}

export function getAdminCredentials() {
  return {
    username: process.env.ADMIN_USERNAME || 'admin',
    password: process.env.ADMIN_PASSWORD || 'admin1234',
  };
}

/** True when the deployment is still relying on the built-in dev defaults. */
export function usingDefaultCredentials(): boolean {
  return !process.env.ADMIN_PASSWORD || !process.env.AUTH_SECRET;
}

/** Constant-time-ish credential check. */
export function verifyCredentials(username: string, password: string): boolean {
  const creds = getAdminCredentials();
  const u = safeEqual(username, creds.username);
  const p = safeEqual(password, creds.password);
  return u && p;
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function createSessionToken(username: string): Promise<string> {
  return new SignJWT({ username, role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(getSecret());
}

export async function verifySessionToken(token?: string): Promise<AdminSession | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret());
    if (payload.role !== 'admin') return null;
    return payload as AdminSession;
  } catch {
    return null;
  }
}
