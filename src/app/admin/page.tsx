import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { verifySessionToken, SESSION_COOKIE, usingDefaultCredentials } from '@/lib/auth';
import { logoutAction } from './actions';
import AdminDashboard from '@/components/AdminDashboard';

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  // Middleware already gates this route; we read the session for display.
  const token = cookies().get(SESSION_COOKIE)?.value;
  const session = await verifySessionToken(token);
  const showDefaultWarning = usingDefaultCredentials();

  return (
    <div className="rw-admin-page">
      <div className="rw-admin-page__bar">
        <div>
          <div className="rw-admin-page__eyebrow">Control Panel</div>
          <h1 className="rw-admin-page__title">Site Admin</h1>
        </div>
        <div className="rw-admin-page__user">
          <span>Signed in as <strong>{session?.username ?? 'admin'}</strong></span>
          <form action={logoutAction}>
            <button type="submit" className="rw-btn rw-btn--secondary rw-btn--sm">Sign out</button>
          </form>
        </div>
      </div>

      {showDefaultWarning && (
        <div className="rw-admin-page__warn" role="alert">
          ⚠️ You are using the built-in default credentials. Set <code>ADMIN_USERNAME</code>,
          <code>ADMIN_PASSWORD</code> and <code>AUTH_SECRET</code> in your environment before going live.
        </div>
      )}

      <AdminDashboard />
    </div>
  );
}
