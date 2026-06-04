import { SignJWT, jwtVerify, type JWTPayload } from 'jose';

/**
 * Edge-safe session helpers (used by middleware + server).
 *
 * The admin session is a signed (HS256) JWT stored in an httpOnly cookie.
 * Only the signing secret is needed here — credential checking lives in
 * the Node-only `credentials.ts` so that `node:crypto` is never pulled into
 * the edge middleware bundle.
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
