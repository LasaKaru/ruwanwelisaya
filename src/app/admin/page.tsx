import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { verifySessionToken, SESSION_COOKIE } from '@/lib/auth';
import { usingDefaultCredentials, passwordIsHashed, getAdminUsername } from '@/lib/credentials';
import { logoutAction } from './actions';
import AdminDashboard from '@/components/AdminDashboard';
import { POSTS } from '@/lib/posts';
import { POYA_DAYS, DAILY_OBSERVANCES } from '@/lib/events';

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  // Middleware already gates this route; we read the session for display.
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const session = await verifySessionToken(token);

  const security = {
    usingDefaults: usingDefaultCredentials(),
    passwordHashed: passwordIsHashed(),
    secretSet: !!process.env.AUTH_SECRET,
  };

  const stats = {
    posts: POSTS.length,
    events: POYA_DAYS.length + DAILY_OBSERVANCES.length,
    adSlots: 5,
  };

  return (
    <AdminDashboard
      username={session?.username ?? getAdminUsername()}
      sessionExpiry={typeof session?.exp === 'number' ? session.exp * 1000 : null}
      security={security}
      stats={stats}
      logoutAction={logoutAction}
    />
  );
}
