export const ICONS: Record<string, string> = {
  location:   'M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zM12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  clock:      'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2',
  globe:      'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3a13 13 0 0 1 0 18 13 13 0 0 1 0-18z',
  heart:      'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
  photograph: 'M3 6h18v13H3z M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M8 6V4h8v2',
  book:       'M4 4h7v16H4z M13 4h7v16h-7z',
  mail:       'M3 5h18v14H3z M3 8l9 6 9-6',
  sun:        'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41',
  moon:       'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z',
  check:      'M5 12l5 5L20 7',
  menu:       'M4 6h16M4 12h16M4 18h10',
  close:      'M18 6L6 18M6 6l12 12',
  arrow:      'M5 12h14M13 5l7 7-7 7',
  share:      'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v14',
  chat:       'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  star:       'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z',
  arrowLeft:  'M19 12H5M12 19l-7-7 7-7',
  thumb:      'M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9A2 2 0 0 0 19.66 9H14zM2 14h5v8H2z',
  upload:     'M12 4v12M7 9l5-5 5 5M5 19h14',
  calendar:   'M3 4h18v18H3zM16 2v4M8 2v4M3 10h18',
  map:        'M1 6l7-4 8 4 7-4v16l-7 4-8-4-7 4z M8 2v16 M16 6v16',
  external:   'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3',
  shield:     'M12 2l9 4v6c0 5-4 9.5-9 11-5-1.5-9-6-9-11V6l9-4z',
};

interface IconProps {
  name: keyof typeof ICONS;
  size?: number;
  stroke?: number;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function Icon({ name, size = 20, stroke = 1.5, color = 'currentColor', style, className }: IconProps) {
  const d = ICONS[name];
  if (!d) return null;
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color} strokeWidth={stroke}
      strokeLinecap="round" strokeLinejoin="round"
      style={style} className={className}
      aria-hidden="true"
    >
      <path d={d}/>
    </svg>
  );
}

export function Mark({ size = 28, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="1.6" aria-hidden="true">
      <path d="M32 4 L32 14" strokeLinecap="round"/>
      <path d="M27 14 H37 M28.5 17 H35.5 M30 20 H34" strokeLinecap="round"/>
      <rect x="27" y="22" width="10" height="5"/>
      <path d="M14 48 Q14 28 32 28 Q50 28 50 48 Z"/>
      <rect x="10" y="48" width="44" height="3"/>
      <rect x="6"  y="53" width="52" height="3"/>
    </svg>
  );
}

export function Lotus({ size = 18, color = 'currentColor', opacity = 0.5 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" style={{ opacity }} aria-hidden="true">
      <ellipse cx="32" cy="20" rx="5" ry="11"/>
      <ellipse cx="32" cy="44" rx="5" ry="11"/>
      <ellipse cx="20" cy="32" rx="11" ry="5"/>
      <ellipse cx="44" cy="32" rx="11" ry="5"/>
      <ellipse cx="23.5" cy="23.5" rx="5" ry="11" transform="rotate(-45 23.5 23.5)"/>
      <ellipse cx="40.5" cy="40.5" rx="5" ry="11" transform="rotate(-45 40.5 40.5)"/>
      <ellipse cx="40.5" cy="23.5" rx="5" ry="11" transform="rotate(45 40.5 23.5)"/>
      <ellipse cx="23.5" cy="40.5" rx="5" ry="11" transform="rotate(45 23.5 40.5)"/>
      <circle cx="32" cy="32" r="3" fill={color}/>
    </svg>
  );
}

export function LotusDivider({ triple }: { triple?: boolean }) {
  if (triple) {
    return (
      <div className="rw-lotus-triple" aria-hidden="true">
        <Lotus size={14} color="#d4af37" opacity={0.4}/>
        <Lotus size={14} color="#d4af37" opacity={0.4}/>
        <Lotus size={14} color="#d4af37" opacity={0.4}/>
      </div>
    );
  }
  return (
    <div className="rw-lotus-divider" aria-hidden="true">
      <span className="rw-lotus-divider__line"/>
      <Lotus size={22} color="#d4af37" opacity={0.5}/>
      <span className="rw-lotus-divider__line"/>
    </div>
  );
}
