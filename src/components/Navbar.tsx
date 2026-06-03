'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mark } from './Icon';
import Icon from './Icon';

const NAV_LINKS = [
  { href: '/',           label: 'Home' },
  { href: '/events',     label: 'Events' },
  { href: '/gallery',    label: 'Gallery' },
  { href: '/blog',       label: 'Blog' },
  { href: '/community',  label: 'Community' },
  { href: '/donate',     label: 'Donate' },
];

export default function Navbar({ transparentTop = true }: { transparentTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!transparentTop) return;
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparentTop]);

  const isScrolled = !transparentTop || scrolled;

  return (
    <header className={`rw-nav ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav className="rw-nav__inner">
        <Link href="/" className="rw-nav__brand">
          <span className="rw-nav__mark">
            <Mark size={20} color="#fff"/>
          </span>
          <span className={`rw-nav__wordmark ${isScrolled ? 'on-light' : ''}`} style={{color: isScrolled ? '#333' : '#fff'}}>
            RUWANWELISAYA
          </span>
        </Link>

        <div className="rw-nav__links">
          <ul>
            {NAV_LINKS.map((l) => {
              const isActive = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`${isActive ? 'is-active' : ''} ${isScrolled ? 'on-light' : ''}`}
                    style={{color: isActive ? '#d4af37' : (isScrolled ? '#333' : 'rgba(255,255,255,0.9)')}}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button className={`rw-nav__theme ${isScrolled ? 'on-light' : ''}`} style={{color: isScrolled ? '#333' : 'rgba(255,255,255,0.85)'}} aria-label="Toggle theme">
            <Icon name="moon" size={18}/>
          </button>
        </div>

        <button className={`rw-nav__menu-btn ${isScrolled ? 'on-light' : ''}`} style={{color: isScrolled ? '#333' : 'rgba(255,255,255,0.9)'}} onClick={() => setOpen(!open)} aria-label="Menu">
          <Icon name={open ? 'close' : 'menu'} size={22}/>
        </button>
      </nav>

      {open && (
        <div className="rw-nav__mobile">
          <ul>
            {NAV_LINKS.map((l) => {
              const isActive = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));
              return (
                <li key={l.href}>
                  <Link href={l.href} className={isActive ? 'is-active' : ''} onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
