/**
 * Best-effort in-memory login rate limiter (defense-in-depth).
 *
 * NOTE: state lives in the server process, so in a multi-instance /
 * serverless deployment each instance keeps its own counters. It still
 * meaningfully slows brute-force from a single source. For hard guarantees
 * use a shared store (Redis/Upstash) — the interface below stays the same.
 */

interface Attempt {
  count: number;
  firstAt: number;
  blockedUntil: number;
}

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 5;
const BLOCK_MS = 15 * 60 * 1000; // lockout duration

const store = new Map<string, Attempt>();

export interface RateResult {
  allowed: boolean;
  remaining: number;
  retryAfterSec: number;
}

export function checkRateLimit(key: string): RateResult {
  const now = Date.now();
  const rec = store.get(key);

  if (rec && rec.blockedUntil > now) {
    return { allowed: false, remaining: 0, retryAfterSec: Math.ceil((rec.blockedUntil - now) / 1000) };
  }
  if (!rec || now - rec.firstAt > WINDOW_MS) {
    return { allowed: true, remaining: MAX_ATTEMPTS - 1, retryAfterSec: 0 };
  }
  return { allowed: rec.count < MAX_ATTEMPTS, remaining: Math.max(0, MAX_ATTEMPTS - rec.count - 1), retryAfterSec: 0 };
}

/** Record a failed attempt; returns the updated state. */
export function recordFailure(key: string): RateResult {
  const now = Date.now();
  const rec = store.get(key);

  if (!rec || now - rec.firstAt > WINDOW_MS) {
    store.set(key, { count: 1, firstAt: now, blockedUntil: 0 });
    return { allowed: true, remaining: MAX_ATTEMPTS - 1, retryAfterSec: 0 };
  }

  rec.count += 1;
  if (rec.count >= MAX_ATTEMPTS) {
    rec.blockedUntil = now + BLOCK_MS;
    store.set(key, rec);
    return { allowed: false, remaining: 0, retryAfterSec: Math.ceil(BLOCK_MS / 1000) };
  }
  store.set(key, rec);
  return { allowed: true, remaining: MAX_ATTEMPTS - rec.count - 1, retryAfterSec: 0 };
}

/** Clear counters for a key (call on successful login). */
export function clearRateLimit(key: string): void {
  store.delete(key);
}

export { MAX_ATTEMPTS };
