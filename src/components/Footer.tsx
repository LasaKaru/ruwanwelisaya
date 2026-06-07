'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LotusDivider } from './Icon';
import Icon from './Icon';
import { reopenConsent } from '@/lib/consent';

const EXPLORE = [
  { label: 'Sacred Events', href: '/events' },
  { label: 'Gallery',       href: '/gallery' },
  { label: 'Pilgrim Guides',href: '/blog' },
  { label: 'Blog',          href: '/blog' },
  { label: 'Community',     href: '/community' },
  { label: 'Support',       href: '/donate' },
];
const LEGAL = [
  { label: 'About Us',       href: '/about' },
  { label: 'Contact',        href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Admin',          href: '/admin' },
];

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Admin area has its own chrome — hide the public footer there.
  if (pathname.startsWith('/admin')) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="rw-footer">
      <LotusDivider/>
      <div className="rw-footer__inner">
        <div className="rw-footer__grid">
          <div className="rw-footer__brand">
            <h3 className="rw-footer__wordmark">RUWANWELISAYA</h3>
            <p>The Great Stupa of Anuradhapura — a timeless sanctuary of peace, devotion, and heritage.</p>
          </div>
          <div className="rw-footer__col">
            <h4>Explore</h4>
            <ul>{EXPLORE.map((l) => <li key={l.label}><Link href={l.href}>{l.label}</Link></li>)}</ul>
          </div>
          <div className="rw-footer__col">
            <h4>Legal &amp; Info</h4>
            <ul>{LEGAL.map((l) => <li key={l.label}><Link href={l.href}>{l.label}</Link></li>)}</ul>
          </div>
          <div className="rw-footer__col rw-footer__visit">
            <h4>Visit</h4>
            <p>Abhayawewa Rd<br/>Anuradhapura, Sri Lanka<br/>Open 24 Hours</p>
          </div>
        </div>
        <div className="rw-footer__newsletter">
          <div className="rw-news">
            <div className="rw-news__head">
              <Icon name="mail" size={18} color="#d4af37"/>
              <h3>Sacred Newsletter</h3>
            </div>
            <p>Receive Poya day reminders, temple updates, and spiritual inspiration in your inbox.</p>
            {subscribed ? (
              <div className="rw-news__success">
                <Icon name="check" size={18} color="#4f7d4f"/>
                <span>Sadhu! You&rsquo;re subscribed 🙏</span>
              </div>
            ) : (
              <form className="rw-news__form" onSubmit={submit}>
                <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <button type="submit">Join</button>
              </form>
            )}
          </div>
        </div>
        <div className="rw-footer__copyright">
          <span>© {new Date().getFullYear()} Ruwanwelisaya Preservation. All rights reserved.</span>
          <button type="button" className="rw-footer__cookie" onClick={reopenConsent}>
            Cookie settings
          </button>
        </div>
      </div>
    </footer>
  );
}
