import { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ruwanwelisaya',
  description: 'Privacy policy for Ruwanwelisaya.com — how we handle data, cookies, third-party advertising (Google AdSense), and your choices.',
};

export default function PrivacyPage() {
  return (
    <div className="rw-page">
      <header className="rw-page__header">
        <div className="rw-container">
          <div className="rw-eyebrow">Legal</div>
          <h1 className="rw-page__title">Privacy Policy</h1>
          <p className="rw-page__lead">Last updated: May 2026. This policy explains what information we collect, how we use it, and the choices available to you.</p>
        </div>
      </header>

      <div className="rw-container rw-container--prose rw-static rw-legal">
        <FadeIn>
          <h2 className="rw-article__h2">Introduction</h2>
          <p className="rw-body">Ruwanwelisaya.com (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates this website. This Privacy Policy describes how we collect, use, and protect information when you visit the site. By using the site, you consent to the practices described here.</p>

          <h2 className="rw-article__h2">Information we collect</h2>
          <p className="rw-body">We collect two kinds of information. <strong>Information you provide</strong> — when you submit the newsletter form, the contact form, a forum post, a photo, or a donation, you may give us your name, email address, and the content you submit. <strong>Information collected automatically</strong> — like most websites, we collect standard log data (IP address, browser type, pages visited, time and date of visit) and use cookies and similar technologies as described below.</p>

          <h2 className="rw-article__h2">Cookies</h2>
          <p className="rw-body">We use cookies to remember your preferences (such as light/dark mode and dismissed notices) and to understand how the site is used. Some cookies are set by third parties — notably our advertising and analytics partners. You can control cookies through your browser settings; disabling them may affect some site features.</p>

          <h2 className="rw-article__h2">Third-party advertising (Google AdSense)</h2>
          <p className="rw-body">We display advertising served by Google AdSense and may use other ad networks. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the internet.</p>
          <p className="rw-body">You may opt out of personalised advertising by visiting <strong>Google Ads Settings</strong> (google.com/settings/ads). You can also opt out of third-party vendor cookies for personalised advertising at <strong>aboutads.info</strong>. For users in the EEA, UK, and Switzerland, we (and our partners) rely on consent collected through our cookie consent banner before serving personalised ads.</p>

          <h2 className="rw-article__h2">Analytics</h2>
          <p className="rw-body">We use analytics tools to measure traffic and understand which content is useful to readers. These tools collect aggregated, non-identifying information such as page views, session duration, and general geographic region. We do not sell your personal information.</p>

          <h2 className="rw-article__h2">How we use information</h2>
          <ul>
            <li className="rw-article__li">To operate and improve the website and its content.</li>
            <li className="rw-article__li">To respond to your enquiries, corrections, and submissions.</li>
            <li className="rw-article__li">To send the newsletter (only if you subscribe), which you can leave at any time.</li>
            <li className="rw-article__li">To process and acknowledge donations.</li>
            <li className="rw-article__li">To serve and measure relevant advertising.</li>
          </ul>

          <h2 className="rw-article__h2">Data retention and security</h2>
          <p className="rw-body">We retain submitted information only as long as necessary for the purpose it was given. We take reasonable technical and organisational measures to protect information against loss, misuse, and unauthorised access. No method of transmission over the internet is completely secure, however, and we cannot guarantee absolute security.</p>

          <h2 className="rw-article__h2">Children&apos;s privacy</h2>
          <p className="rw-body">This site is not directed to children under 13, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will remove it.</p>

          <h2 className="rw-article__h2">Your rights</h2>
          <p className="rw-body">Depending on your jurisdiction, you may have the right to access, correct, or delete the personal information we hold about you, and to object to or restrict certain processing. To exercise these rights, contact us at the address below.</p>

          <h2 className="rw-article__h2">Changes to this policy</h2>
          <p className="rw-body">We may update this policy from time to time. Material changes will be reflected by the &ldquo;Last updated&rdquo; date at the top of this page.</p>

          <h2 className="rw-article__h2">Contact</h2>
          <p className="rw-body">Questions about this policy may be sent to <strong>privacy@ruwanwelisaya.com</strong> or through our <a href="/contact">Contact page</a>.</p>
        </FadeIn>
      </div>
    </div>
  );
}
