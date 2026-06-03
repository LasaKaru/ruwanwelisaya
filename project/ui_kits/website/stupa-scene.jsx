/* eslint-disable no-undef */
/* stupa-scene.jsx — illustrated hero scene of the Ruwanwelisaya stupa
   at golden hour. Uses CSS-gradient backdrop layers + solid-fill SVG
   for the silhouette (works reliably across iframe contexts where SVG
   url(#id) references can be flaky). */

function StupaScene({ animated = true }) {
  return (
    <div className="rw-stupa-scene">
      {/* CSS gradient sky */}
      <div className="rw-scene__sky"/>
      {/* Sun halo behind stupa */}
      <div className="rw-scene__sun"/>
      {/* Soft dusk haze */}
      <div className="rw-scene__haze"/>

      {/* SVG silhouettes — solid fills only */}
      <svg className="rw-scene__svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Soft star points (top of sky) */}
        <g fill="#fff" opacity="0.55">
          <circle cx="120"  cy="80"  r="1.4"/>
          <circle cx="260"  cy="40"  r="1.0"/>
          <circle cx="380"  cy="120" r="1.2"/>
          <circle cx="540"  cy="60"  r="0.9"/>
          <circle cx="1140" cy="50"  r="1.4"/>
          <circle cx="1280" cy="100" r="1.0"/>
          <circle cx="1400" cy="60"  r="1.2"/>
          <circle cx="1500" cy="140" r="0.9"/>
        </g>

        {/* Distant mountain silhouette */}
        <path d="M 0 660 L 140 620 L 280 645 L 440 600 L 580 640 L 720 615 L 880 645 L 1040 605 L 1180 640 L 1340 615 L 1500 645 L 1600 625 L 1600 720 L 0 720 Z"
          fill="#2a1410" opacity="0.55"/>

        {/* Tree-line */}
        <g opacity="0.92">
          <path d="M 0 720 Q 60 700 90 705 T 160 710 T 260 700 T 360 712 T 480 706 T 600 714 T 720 704 T 840 715 T 960 708 T 1080 716 T 1200 706 T 1320 714 T 1440 706 T 1560 712 L 1600 712 L 1600 760 L 0 760 Z"
            fill="#1a0c08"/>
          {[100, 260, 410, 560, 1060, 1240, 1400, 1540].map((x) => (
            <g key={x} transform={`translate(${x} 712)`}>
              <ellipse cx="0" cy="-32" rx="14" ry="20" fill="#1a0c08"/>
            </g>
          ))}
        </g>

        {/* Pinnacle glow (light circles, stacked for halo) */}
        <g className="rw-scene__pinnacle-glow">
          <circle cx="800" cy="295" r="90" fill="#f7d94e" opacity="0.10"/>
          <circle cx="800" cy="295" r="58" fill="#f7d94e" opacity="0.20"/>
          <circle cx="800" cy="295" r="30" fill="#fff4c8" opacity="0.50"/>
        </g>

        {/* ===== STUPA ===== */}
        {/* Base platforms / vahalkadas */}
        <rect x="430" y="780" width="740" height="34" fill="#3a2418"/>
        <rect x="430" y="780" width="740" height="6"  fill="#6a4424"/>
        <rect x="480" y="754" width="640" height="28" fill="#4a2c1c"/>
        <rect x="480" y="754" width="640" height="5"  fill="#7a5028"/>
        <rect x="530" y="730" width="540" height="26" fill="#5a3820"/>
        <rect x="530" y="730" width="540" height="5"  fill="#8a5e34"/>

        {/* Pesa valalu — narrower terraces */}
        <rect x="580" y="708" width="440" height="22" fill="#76562e"/>
        <rect x="580" y="708" width="440" height="4"  fill="#a08454"/>
        <rect x="610" y="690" width="380" height="18" fill="#8a6a3a"/>

        {/* Dome (anda) — solid cream with stacked shadow + highlight */}
        <path d="M 610 700 Q 610 480 800 470 Q 990 480 990 700 Z" fill="#ead4a8"/>
        {/* Left shadow */}
        <path d="M 610 700 Q 610 480 800 470 L 800 482 Q 622 492 622 700 Z" fill="#8a6a3a" opacity="0.55"/>
        {/* Right highlight */}
        <path d="M 800 470 Q 990 480 990 700 L 978 700 Q 978 492 800 482 Z" fill="#f6ecd8" opacity="0.65"/>
        {/* Highlight rim */}
        <path d="M 610 700 Q 610 480 800 470 Q 990 480 990 700"
              fill="none" stroke="#fbf4dc" strokeWidth="2" opacity="0.6"/>

        {/* Harmika (square railed chamber) */}
        <rect x="760" y="410" width="80" height="64" fill="#a98768"/>
        <rect x="760" y="410" width="80" height="6"  fill="#f6ecd8"/>
        <rect x="755" y="468" width="90" height="8"  fill="#3a2418"/>
        <line x1="775" y1="416" x2="775" y2="468" stroke="#3a2418" strokeWidth="1.6"/>
        <line x1="800" y1="416" x2="800" y2="468" stroke="#3a2418" strokeWidth="1.6"/>
        <line x1="825" y1="416" x2="825" y2="468" stroke="#3a2418" strokeWidth="1.6"/>

        {/* Chathra (nine parasols) — solid gold */}
        {Array.from({ length: 9 }).map((_, i) => {
          const y = 408 - i * 10;
          const w = 78 - i * 6;
          return (
            <g key={i}>
              <rect x={800 - w / 2} y={y} width={w} height={5} fill="#d4af37"/>
              <rect x={800 - w / 2} y={y} width={w} height={1.5} fill="#f7e08e"/>
            </g>
          );
        })}

        {/* Spire and pinnacle (kotha) */}
        <line x1="800" y1="318" x2="800" y2="296" stroke="#d4af37" strokeWidth="3"/>
        <path d="M 800 296 L 808 282 L 800 268 L 792 282 Z" fill="#f7e08e"/>
        <circle cx="800" cy="262" r="3.5" fill="#fffae0"/>

        {/* ===== PILGRIM FIGURES ===== */}
        <g fill="#1a0c08" opacity="0.85">
          <g transform="translate(540 790)">
            <ellipse cx="0" cy="-12" rx="3" ry="3.5"/>
            <path d="M -4 -9 L -5 4 L -3 22 L 0 22 L 0 4 L 3 22 L 5 22 L 4 -9 Z"/>
          </g>
          <g transform="translate(580 794)">
            <ellipse cx="0" cy="-11" rx="2.6" ry="3"/>
            <path d="M -3 -8 L -4 4 L -2 20 L 0 20 L 0 4 L 2 20 L 4 20 L 3 -8 Z"/>
          </g>
          <g transform="translate(1060 794)">
            <ellipse cx="0" cy="-11" rx="2.8" ry="3.2"/>
            <path d="M -3 -8 L -4 4 L -2 20 L 0 20 L 0 4 L 2 20 L 4 20 L 3 -8 Z"/>
          </g>
          <g transform="translate(1100 790)">
            <ellipse cx="0" cy="-12" rx="3" ry="3.5"/>
            <path d="M -4 -9 L -5 4 L -3 22 L 0 22 L 0 4 L 3 22 L 5 22 L 4 -9 Z"/>
          </g>
        </g>

        {/* ===== BIRDS ===== */}
        <g fill="none" stroke="#1a0c08" strokeWidth="1.6" strokeLinecap="round" opacity="0.55">
          <path d="M 280 220 Q 285 215 290 220 Q 295 215 300 220" className={animated ? "rw-bird rw-bird--1" : ""}/>
          <path d="M 340 250 Q 345 246 350 250 Q 355 246 360 250" className={animated ? "rw-bird rw-bird--2" : ""}/>
          <path d="M 1220 200 Q 1225 196 1230 200 Q 1235 196 1240 200" className={animated ? "rw-bird rw-bird--3" : ""}/>
          <path d="M 1300 240 Q 1305 236 1310 240 Q 1315 236 1320 240" className={animated ? "rw-bird rw-bird--4" : ""}/>
          <path d="M 1180 280 Q 1184 277 1188 280 Q 1192 277 1196 280" className={animated ? "rw-bird rw-bird--5" : ""}/>
        </g>
      </svg>
    </div>
  );
}

Object.assign(window, { StupaScene });
