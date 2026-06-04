import { scryptSync, timingSafeEqual, randomBytes } from 'node:crypto';

/**
 * Node-only credential verification for the admin login.
 *
 * Two modes, in order of preference:
 *   1. ADMIN_PASSWORD_HASH  — a scrypt hash in the form  `scrypt:<saltHex>:<hashHex>`
 *                             (generate with `npm run hash-password` — see scripts/).
 *   2. ADMIN_PASSWORD       — a plaintext password (simpler, fine for low-risk sites).
 *
 * If neither is set, an insecure development default is used and the admin
 * dashboard surfaces a warning banner.
 */

const DEV_PASSWORD = 'admin1234';

export function getAdminUsername(): string {
  return process.env.ADMIN_USERNAME || 'admin';
}

export function usingDefaultCredentials(): boolean {
  return (!process.env.ADMIN_PASSWORD && !process.env.ADMIN_PASSWORD_HASH) || !process.env.AUTH_SECRET;
}

export function passwordIsHashed(): boolean {
  return !!process.env.ADMIN_PASSWORD_HASH;
}

/** Verify a submitted username + password against the configured credentials. */
export function verifyCredentials(username: string, password: string): boolean {
  const userOk = safeEqualStr(username, getAdminUsername());
  const passOk = verifyPassword(password);
  // Always evaluate both to keep timing uniform.
  return userOk && passOk;
}

function verifyPassword(password: string): boolean {
  const hash = process.env.ADMIN_PASSWORD_HASH;
  if (hash) return verifyScrypt(password, hash);
  const plain = process.env.ADMIN_PASSWORD || DEV_PASSWORD;
  return safeEqualStr(password, plain);
}

/** Verify a password against a `scrypt:<saltHex>:<hashHex>` string. */
function verifyScrypt(password: string, stored: string): boolean {
  const parts = stored.split(':');
  if (parts.length !== 3 || parts[0] !== 'scrypt') return false;
  const [, saltHex, hashHex] = parts;
  try {
    const salt = Buffer.from(saltHex, 'hex');
    const expected = Buffer.from(hashHex, 'hex');
    const derived = scryptSync(password, salt, expected.length);
    return derived.length === expected.length && timingSafeEqual(derived, expected);
  } catch {
    return false;
  }
}

/** Hash a password for storage in ADMIN_PASSWORD_HASH. */
export function hashPassword(password: string): string {
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 64);
  return `scrypt:${salt.toString('hex')}:${hash.toString('hex')}`;
}

function safeEqualStr(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) {
    // Compare against self to keep timing roughly constant, then fail.
    timingSafeEqual(ab, ab);
    return false;
  }
  return timingSafeEqual(ab, bb);
}
