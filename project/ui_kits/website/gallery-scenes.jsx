/* eslint-disable no-undef */
/* gallery-scenes.jsx — themed scenes for gallery tiles and blog cards.
   Designed to render at any aspect ratio; absolute-fill their parent. */

/* ============================================================
   1) GOLDEN HOUR — the stupa bathed in warm sunset light
   ============================================================ */
function GoldenHourScene() {
  return (
    <div className="rw-tile-scene rw-tile-scene--golden">
      <svg className="rw-tile-scene__svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {/* Sun disc */}
        <circle cx="280" cy="200" r="42" fill="#fff8d4"/>
        <circle cx="280" cy="200" r="68" fill="#fff8d4" opacity="0.22" className="rw-tile-pulse"/>
        <circle cx="280" cy="200" r="100" fill="#f7d94e" opacity="0.10"/>

        {/* Distant hills */}
        <path d="M 0 360 L 80 330 L 160 350 L 240 320 L 320 348 L 400 332 L 400 400 L 0 400 Z"
              fill="#5a2818" opacity="0.6"/>

        {/* Sun rays */}
        <g stroke="#fff8d4" strokeWidth="1" opacity="0.25">
          <line x1="280" y1="200" x2="160" y2="80"/>
          <line x1="280" y1="200" x2="380" y2="100"/>
          <line x1="280" y1="200" x2="200" y2="60"/>
          <line x1="280" y1="200" x2="380" y2="60"/>
        </g>

        {/* Stupa (centre-left, silhouetted golden) */}
        <g>
          <rect x="60" y="392" width="200" height="10" fill="#3a1808"/>
          <rect x="74" y="378" width="172" height="14" fill="#4a2010"/>
          <path d="M 100 378 Q 100 290 160 285 Q 220 290 220 378 Z" fill="#d4a04c"/>
          <path d="M 100 378 Q 100 290 160 285 L 160 290 Q 108 296 108 378 Z" fill="#7a4218" opacity="0.7"/>
          <rect x="148" y="262" width="24" height="22" fill="#a07238"/>
          {Array.from({length: 6}).map((_, i) => {
            const y = 258 - i*5; const w = 22 - i*2;
            return <rect key={i} x={160 - w/2} y={y} width={w} height={3} fill="#f7d94e"/>;
          })}
          <line x1="160" y1="228" x2="160" y2="212" stroke="#f7d94e" strokeWidth="2"/>
          <circle cx="160" cy="208" r="3" fill="#fffae0" className="rw-tile-pinnacle"/>
        </g>

        {/* Birds */}
        <g stroke="#3a1c10" strokeWidth="1.2" fill="none" opacity="0.55">
          <path d="M 80 140 Q 84 137 88 140 Q 92 137 96 140" className="rw-tile-bird rw-tile-bird--1"/>
          <path d="M 200 100 Q 204 97 208 100 Q 212 97 216 100" className="rw-tile-bird rw-tile-bird--2"/>
          <path d="M 340 160 Q 344 157 348 160 Q 352 157 356 160" className="rw-tile-bird rw-tile-bird--3"/>
        </g>

        {/* Foreground haze */}
        <rect x="0" y="340" width="400" height="160" fill="url(#goldHaze)" opacity="0.4"/>
        <defs>
          <linearGradient id="goldHaze" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f4b250" stopOpacity="0"/>
            <stop offset="1" stopColor="#3a1808" stopOpacity="0.7"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ============================================================
   2) SACRED NIGHT — illuminated stupa under starlit sky
   ============================================================ */
function SacredNightScene() {
  // Stable star positions
  const stars = [
    [40, 60], [110, 30], [180, 80], [260, 40], [340, 70], [380, 130],
    [60, 130], [220, 140], [300, 110], [150, 180], [350, 200], [80, 220],
    [240, 200], [200, 250], [380, 250], [120, 280], [320, 290], [20, 150],
  ];
  return (
    <div className="rw-tile-scene rw-tile-scene--night">
      <svg className="rw-tile-scene__svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {/* Stars */}
        <g fill="#fff">
          {stars.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y}
              r={0.6 + (i % 3) * 0.4}
              opacity={0.4 + (i % 4) * 0.15}
              className={`rw-tile-star rw-tile-star--${i % 5}`}/>
          ))}
        </g>

        {/* Crescent moon top-right */}
        <g>
          <circle cx="340" cy="100" r="36" fill="#fff8d4" opacity="0.12"/>
          <circle cx="340" cy="100" r="22" fill="#fff8d4"/>
          <circle cx="328" cy="94" r="18" fill="#040420"/>
        </g>

        {/* Hills */}
        <path d="M 0 380 L 80 360 L 160 372 L 240 358 L 320 374 L 400 364 L 400 410 L 0 410 Z"
              fill="#0a0c2a" opacity="0.85"/>

        {/* Illuminated stupa (white glow) */}
        <g>
          {/* Glow halo */}
          <ellipse cx="200" cy="320" rx="140" ry="130" fill="#f7d94e" opacity="0.08"/>
          <ellipse cx="200" cy="320" rx="90"  ry="90"  fill="#fffbe8" opacity="0.10"/>
          {/* Base platforms */}
          <rect x="120" y="390" width="160" height="8" fill="#1a1430"/>
          <rect x="132" y="378" width="136" height="10" fill="#26204a"/>
          <rect x="142" y="368" width="116" height="8" fill="#322a5a"/>
          {/* Dome */}
          <path d="M 152 368 Q 152 240 200 232 Q 248 240 248 368 Z" fill="#f0e8d4"/>
          <path d="M 152 368 Q 152 240 200 232 L 200 240 Q 160 248 160 368 Z" fill="#8a8298" opacity="0.45"/>
          <path d="M 200 232 Q 248 240 248 368 L 240 368 Q 240 248 200 240 Z" fill="#fff" opacity="0.30"/>
          {/* Harmika */}
          <rect x="186" y="208" width="28" height="22" fill="#c8bea8"/>
          <rect x="186" y="208" width="28" height="2" fill="#f4ecde"/>
          {/* Chathra */}
          {Array.from({length: 7}).map((_, i) => {
            const y = 206 - i*5; const w = 30 - i*3;
            return <rect key={i} x={200 - w/2} y={y} width={w} height={3} fill="#d4af37"/>;
          })}
          {/* Pinnacle */}
          <line x1="200" y1="171" x2="200" y2="162" stroke="#d4af37" strokeWidth="2"/>
          <circle cx="200" cy="158" r="3" fill="#f7d94e" className="rw-tile-pinnacle"/>
        </g>

        {/* Oil lamps at the base */}
        {[100, 140, 260, 300].map((x, i) => (
          <g key={i} transform={`translate(${x} 400)`}>
            <ellipse cx="0" cy="0" rx="6" ry="1.4" fill="#3a2418"/>
            <ellipse cx="0" cy="-6" rx="2" ry="4" fill="#f7d94e" className={`rw-tile-flame rw-tile-flame--${i}`}/>
            <circle cx="0" cy="-6" r="8" fill="#f7d94e" opacity="0.25"/>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ============================================================
   3) DEVOTION — pilgrims gathering for the Pooja ceremony
   ============================================================ */
function DevotionScene() {
  return (
    <div className="rw-tile-scene rw-tile-scene--devotion">
      <svg className="rw-tile-scene__svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {/* Soft halo behind */}
        <circle cx="200" cy="260" r="220" fill="#fff8d4" opacity="0.15"/>
        <circle cx="200" cy="260" r="140" fill="#f7d94e" opacity="0.12"/>

        {/* Distant stupa silhouette */}
        <g opacity="0.85">
          <rect x="140" y="200" width="120" height="6" fill="#f8e5a8"/>
          <path d="M 156 200 Q 156 130 200 126 Q 244 130 244 200 Z" fill="#fff4dc"/>
          <rect x="192" y="106" width="16" height="18" fill="#e8d4a4"/>
          {Array.from({length: 5}).map((_, i) => {
            const y = 104 - i*4; const w = 16 - i*2;
            return <rect key={i} x={200 - w/2} y={y} width={w} height={3} fill="#d4af37"/>;
          })}
          <line x1="200" y1="84" x2="200" y2="72" stroke="#d4af37" strokeWidth="1.5"/>
          <circle cx="200" cy="70" r="2" fill="#fffae0"/>
        </g>

        {/* Pilgrim figures gathered in foreground — different heights */}
        <g fill="#f6ecd8">
          {[
            { x: 60,  s: 0.95, t: 0 },
            { x: 110, s: 1.1,  t: -10 },
            { x: 165, s: 0.85, t: 8 },
            { x: 215, s: 1.0,  t: 0 },
            { x: 270, s: 0.95, t: -8 },
            { x: 325, s: 1.05, t: -4 },
            { x: 370, s: 0.85, t: 6 },
          ].map((p, i) => (
            <g key={i} transform={`translate(${p.x} ${410 + p.t}) scale(${p.s})`}>
              {/* Head */}
              <ellipse cx="0" cy="-46" rx="9" ry="11" fill="#c89870"/>
              {/* Body (white sil clothing) */}
              <path d="M -12 -34 L -18 8 L -20 80 L -8 80 L -4 12 L 4 12 L 8 80 L 20 80 L 18 -34 Z"/>
              {/* Hair */}
              <path d="M -8 -52 Q 0 -56 8 -52 L 9 -46 Q 0 -50 -9 -46 Z" fill="#1a0c08"/>
              {/* Hands holding lotus */}
              <ellipse cx="0" cy="-8" rx="6" ry="4" fill="#c89870"/>
              {/* Lotus offering in hands */}
              <g transform={`translate(0 -16)`}>
                <ellipse cx="-4" cy="0" rx="3" ry="6" fill="#f4b4c4" transform="rotate(-30)"/>
                <ellipse cx="4"  cy="0" rx="3" ry="6" fill="#f4b4c4" transform="rotate(30)"/>
                <ellipse cx="0"  cy="-2" rx="2.5" ry="6" fill="#f8d4dc"/>
                <circle cx="0" cy="-2" r="1.5" fill="#f7e08e"/>
              </g>
            </g>
          ))}
        </g>

        {/* Floating incense smoke */}
        <g stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.35" strokeLinecap="round">
          <path d="M 100 320 Q 92 290 100 260 Q 108 230 100 200" className="rw-tile-smoke rw-tile-smoke--1"/>
          <path d="M 200 300 Q 192 270 200 240 Q 208 210 200 180" className="rw-tile-smoke rw-tile-smoke--2"/>
          <path d="M 300 320 Q 292 290 300 260 Q 308 230 300 200" className="rw-tile-smoke rw-tile-smoke--3"/>
        </g>

        {/* Falling petals */}
        <g fill="#f4b4c4" opacity="0.65">
          <ellipse cx="80" cy="80" rx="3" ry="6" className="rw-tile-petal rw-tile-petal--1" transform="rotate(30 80 80)"/>
          <ellipse cx="160" cy="40" rx="2.5" ry="5" className="rw-tile-petal rw-tile-petal--2" transform="rotate(-20 160 40)"/>
          <ellipse cx="280" cy="60" rx="3" ry="6" className="rw-tile-petal rw-tile-petal--3" transform="rotate(45 280 60)"/>
          <ellipse cx="340" cy="120" rx="2.5" ry="5" className="rw-tile-petal rw-tile-petal--4" transform="rotate(-40 340 120)"/>
        </g>
      </svg>
    </div>
  );
}

/* ============================================================
   Additional gallery scenes (for the Gallery page tiles)
   ============================================================ */

function DawnDomeScene() {
  return (
    <div className="rw-tile-scene rw-tile-scene--dawn">
      <svg className="rw-tile-scene__svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="80" cy="120" r="36" fill="#fff8d4"/>
        <circle cx="80" cy="120" r="58" fill="#fff8d4" opacity="0.18" className="rw-tile-pulse"/>
        <path d="M 0 360 L 100 340 L 200 358 L 300 340 L 400 360 L 400 410 L 0 410 Z" fill="#5a3c20" opacity="0.55"/>
        <g>
          <rect x="100" y="392" width="200" height="8" fill="#3a2418"/>
          <path d="M 130 388 Q 130 280 200 272 Q 270 280 270 388 Z" fill="#e8d4a8"/>
          <path d="M 130 388 Q 130 280 200 272 L 200 280 Q 138 286 138 388 Z" fill="#7a5828" opacity="0.55"/>
          <rect x="188" y="252" width="24" height="20" fill="#a08458"/>
          {Array.from({length: 6}).map((_, i) => {
            const y = 248 - i*5; const w = 24 - i*3;
            return <rect key={i} x={200 - w/2} y={y} width={w} height={3} fill="#d4af37"/>;
          })}
          <line x1="200" y1="218" x2="200" y2="205" stroke="#d4af37" strokeWidth="2"/>
          <circle cx="200" cy="202" r="3" fill="#fffae0" className="rw-tile-pinnacle"/>
        </g>
      </svg>
    </div>
  );
}

function ElephantWallScene() {
  // Carved elephant frieze
  return (
    <div className="rw-tile-scene rw-tile-scene--wall">
      <svg className="rw-tile-scene__svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {/* Stone wall blocks */}
        <g fill="#3a2818">
          <rect x="0" y="0"   width="400" height="80"/>
          <rect x="0" y="380" width="400" height="120"/>
        </g>
        {/* Block lines */}
        <g stroke="#1a0c08" strokeWidth="1" opacity="0.5">
          <line x1="0" y1="40" x2="400" y2="40"/>
          <line x1="80" y1="0"  x2="80" y2="80"/>
          <line x1="240" y1="0" x2="240" y2="80"/>
          <line x1="0" y1="440" x2="400" y2="440"/>
        </g>
        {/* Elephant frieze section */}
        <rect x="0" y="80" width="400" height="300" fill="#5a3c24"/>
        <rect x="0" y="80" width="400" height="6"   fill="#7a5028"/>
        <rect x="0" y="374" width="400" height="6"  fill="#7a5028"/>
        {/* Carved elephants — 4 across */}
        {[40, 130, 220, 310].map((x, i) => (
          <g key={i} transform={`translate(${x} 230)`} fill="#7a5028" stroke="#1a0c08" strokeWidth="0.8">
            {/* Body */}
            <ellipse cx="0" cy="0" rx="42" ry="32"/>
            {/* Head */}
            <path d="M -42 -10 Q -56 -4 -54 10 Q -42 20 -32 14 Z"/>
            {/* Trunk */}
            <path d="M -52 14 Q -64 24 -58 40 Q -50 46 -46 36"/>
            {/* Tusk */}
            <path d="M -54 20 Q -46 28 -38 26 L -40 22 Q -50 20 -54 20 Z" fill="#e8d4a8"/>
            {/* Ear */}
            <path d="M -42 -10 Q -56 -10 -50 8 Q -38 -2 -42 -10 Z" fill="#4a2818"/>
            {/* Eye */}
            <circle cx="-46" cy="2" r="1.5" fill="#1a0c08"/>
            {/* Legs */}
            <rect x="-32" y="22" width="10" height="22"/>
            <rect x="-10" y="22" width="10" height="22"/>
            <rect x="14"  y="22" width="10" height="22"/>
            <rect x="32"  y="22" width="10" height="22"/>
            {/* Tail */}
            <line x1="42" y1="0" x2="50" y2="12" stroke="#1a0c08" strokeWidth="2"/>
          </g>
        ))}
      </svg>
    </div>
  );
}

function LampOfferingScene() {
  // A close-up of an oil lamp / glowing lamps in rows
  return (
    <div className="rw-tile-scene rw-tile-scene--lamp">
      <svg className="rw-tile-scene__svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {/* Halos behind each lamp */}
        {[[80, 160], [200, 120], [320, 160], [60, 280], [140, 240], [260, 240], [340, 280], [100, 380], [200, 360], [300, 380]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="40" fill="#f7d94e" opacity="0.18" className={`rw-tile-glow rw-tile-glow--${i%4}`}/>
        ))}
        {/* Oil lamps */}
        {[[80, 200], [200, 160], [320, 200], [60, 320], [140, 280], [260, 280], [340, 320], [100, 420], [200, 400], [300, 420]].map(([cx, cy], i) => (
          <g key={i} transform={`translate(${cx} ${cy})`}>
            <ellipse cx="0" cy="0" rx="20" ry="4" fill="#3a2418"/>
            <path d="M -18 0 Q -18 -10 0 -12 Q 18 -10 18 0 Z" fill="#5a3820"/>
            <ellipse cx="0" cy="-16" rx="4" ry="9" fill="#f7d94e" className={`rw-tile-flame rw-tile-flame--${i%6}`}/>
            <ellipse cx="0" cy="-16" rx="2" ry="5" fill="#fff8d4"/>
          </g>
        ))}
      </svg>
    </div>
  );
}

function ProcessionScene() {
  // Full-moon procession of white-clad pilgrims around the stupa base
  return (
    <div className="rw-tile-scene rw-tile-scene--procession">
      <svg className="rw-tile-scene__svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {/* Stars */}
        <g fill="#fff" opacity="0.55">
          {[[60, 60], [120, 30], [200, 70], [280, 40], [350, 80], [40, 130], [320, 130]].map(([x,y], i) => (
            <circle key={i} cx={x} cy={y} r={0.7 + i%2 * 0.5}/>
          ))}
        </g>
        {/* Moon */}
        <circle cx="200" cy="100" r="34" fill="#fff8d4"/>
        <circle cx="200" cy="100" r="58" fill="#fff8d4" opacity="0.10"/>

        {/* Stupa */}
        <g>
          <rect x="120" y="290" width="160" height="10" fill="#1a1430"/>
          <path d="M 140 290 Q 140 200 200 192 Q 260 200 260 290 Z" fill="#e8e0d4" opacity="0.95"/>
          <rect x="190" y="170" width="20" height="22" fill="#c8bea8"/>
          <line x1="200" y1="150" x2="200" y2="140" stroke="#d4af37" strokeWidth="2"/>
          <circle cx="200" cy="138" r="2.5" fill="#f7d94e"/>
        </g>

        {/* Curved procession path */}
        <path d="M 20 460 Q 200 410 380 460" stroke="#3a2418" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="4 4"/>

        {/* Pilgrims walking — staggered along path */}
        <g fill="#f6ecd8">
          {[
            { x: 30,  y: 460 },
            { x: 80,  y: 443 },
            { x: 130, y: 430 },
            { x: 200, y: 420 },
            { x: 270, y: 430 },
            { x: 320, y: 443 },
            { x: 370, y: 460 },
          ].map((p, i) => (
            <g key={i} transform={`translate(${p.x} ${p.y})`}>
              <ellipse cx="0" cy="-10" rx="4" ry="5"/>
              <path d="M -5 -6 L -7 8 L -4 32 L 0 32 L 0 8 L 4 32 L 7 32 L 5 -6 Z"/>
              {/* small lamp held */}
              <circle cx="6" cy="-2" r="2" fill="#f7d94e" className={`rw-tile-flame rw-tile-flame--${i%4}`}/>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

/* Dispatcher */
function GalleryScene({ kind }) {
  if (kind === "golden")     return <GoldenHourScene/>;
  if (kind === "night")      return <SacredNightScene/>;
  if (kind === "devotion")   return <DevotionScene/>;
  if (kind === "dawn")       return <DawnDomeScene/>;
  if (kind === "wall")       return <ElephantWallScene/>;
  if (kind === "lamp")       return <LampOfferingScene/>;
  if (kind === "procession") return <ProcessionScene/>;
  return <DawnDomeScene/>;
}

Object.assign(window, {
  GoldenHourScene, SacredNightScene, DevotionScene,
  DawnDomeScene, ElephantWallScene, LampOfferingScene, ProcessionScene,
  GalleryScene,
});
