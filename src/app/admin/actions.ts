'use server';

import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { createSessionToken, SESSION_COOKIE, SESSION_MAX_AGE } from '@/lib/auth';
import { verifyCredentials } from '@/lib/credentials';
import { checkRateLimit, recordFailure, clearRateLimit } from '@/lib/rate-limit';

export interface LoginState {
  error?: string;
  remaining?: number;
}

function clientKey(): string {
  const h = headers();
  const fwd = h.get('x-forwarded-for') || '';
  const ip = fwd.split(',')[0].trim() || h.get('x-real-ip') || 'local';
  return `login:${ip}`;
}

export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const username = String(formData.get('username') || '').trim();
  const password = String(formData.get('password') || '');
  const from = String(formData.get('from') || '/admin');

  const key = clientKey();
  const gate = checkRateLimit(key);
  if (!gate.allowed) {
    const mins = Math.ceil(gate.retryAfterSec / 60);
    return { error: `Too many attempts. Try again in about ${mins} minute${mins === 1 ? '' : 's'}.` };
  }

  if (!username || !password) {
    return { error: 'Please enter both username and password.' };
  }

  if (!verifyCredentials(username, password)) {
    const after = recordFailure(key);
    const msg = after.allowed
      ? `Invalid username or password. ${after.remaining} attempt${after.remaining === 1 ? '' : 's'} left.`
      : 'Too many failed attempts. Account locked for 15 minutes.';
    return { error: msg, remaining: after.remaining };
  }

  clearRateLimit(key);

  const token = await createSessionToken(username);
  cookies().set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  });

  redirect(from.startsWith('/admin') ? from : '/admin');
}

export async function logoutAction(): Promise<void> {
  cookies().delete(SESSION_COOKIE);
  redirect('/admin/login');
}
