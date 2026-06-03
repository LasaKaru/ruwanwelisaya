'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  verifyCredentials,
  createSessionToken,
  SESSION_COOKIE,
  SESSION_MAX_AGE,
} from '@/lib/auth';

export interface LoginState {
  error?: string;
}

export async function loginAction(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const username = String(formData.get('username') || '').trim();
  const password = String(formData.get('password') || '');
  const from = String(formData.get('from') || '/admin');

  if (!username || !password) {
    return { error: 'Please enter both username and password.' };
  }

  if (!verifyCredentials(username, password)) {
    return { error: 'Invalid username or password.' };
  }

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
