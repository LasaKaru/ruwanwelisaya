'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { loginAction, type LoginState } from '../actions';
import { Mark } from '@/components/Icon';

const initialState: LoginState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="rw-btn rw-btn--primary rw-btn--lg" style={{ width: '100%' }} disabled={pending}>
      {pending ? 'Signing in…' : 'Sign in'}
    </button>
  );
}

export default function AdminLoginPage() {
  const [state, formAction] = useFormState(loginAction, initialState);

  return (
    <div className="rw-login">
      <div className="rw-login__card">
        <div className="rw-login__brand">
          <Mark size={40} color="#d4af37" />
          <div className="rw-login__eyebrow">Ruwanwelisaya</div>
          <h1 className="rw-login__title">Admin Sign In</h1>
          <p className="rw-login__sub">Restricted area — manage ads, payments &amp; site settings.</p>
        </div>

        <form action={formAction} className="rw-login__form">
          <input type="hidden" name="from" value="/admin" />

          <div className="rw-login__field">
            <label className="rw-login__lbl" htmlFor="username">Username</label>
            <input id="username" name="username" className="rw-input" type="text" autoComplete="username" placeholder="admin" required autoFocus />
          </div>

          <div className="rw-login__field">
            <label className="rw-login__lbl" htmlFor="password">Password</label>
            <input id="password" name="password" className="rw-input" type="password" autoComplete="current-password" placeholder="••••••••" required />
          </div>

          {state.error && <p className="rw-login__error" role="alert">{state.error}</p>}

          <SubmitButton />
        </form>

        <a href="/" className="rw-login__back">← Back to site</a>
      </div>
    </div>
  );
}
