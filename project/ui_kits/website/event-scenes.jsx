/* eslint-disable no-undef */
/* event-scenes.jsx — themed SVG/CSS scenes per Buddhist observance.
   Each scene fills its parent absolutely. */

/* ============================================================
   1) VESAK SCENE — hanging vesak lanterns over a deep-blue night sky
   ============================================================ */
function VesakScene() {
  // Each lantern has: row (line offset), color, sway delay, size
  const lanterns = [
    { x: 8,  y: 22, c: "amber",  d: 0.0, s: 1.0 },
    { x: 18, y: 38, c: "rose",   d: 0.8, s: 0.85 },
    { x: 28, y: 24, c: "amber",  d: 0.3, s: 0.95 },
    { x: 38, y: 42, c: "gold",   d: 1.1, s: 1.05 },
    { x: 48, y: 28, c: "rose",   d: 0.5, s: 0.9 },
    { x: 58, y: 44, c: "amber",  d: 1.3, s: 1.0 },
    { x: 68, y: 26, c: "gold",   d: 0.2, s: 0.95 },
    { x: 78, y: 40, c: "rose",   d: 0.9, s: 1.0 },
    { x: 88, y: 24, c: "amber",  d: 0.4, s: 0.9 },
    { x: 13, y: 56, c: "gold",   d: 1.5, s: 0.75 },
    { x: 33, y: 60, c: "rose",   d: 0.7, s: 0.8 },
    { x: 53, y: 58, c: "amber",  d: 1.7, s: 0.8 },
    { x: 73, y: 62, c: "gold",   d: 0.6, s: 0.75 },
    { x: 93, y: 56, c: "rose",   d: 1.0, s: 0.8 },
  ];
  return (
    <div className="rw-scene rw-scene--vesak">
      {/* Stars */}
      <svg className="rw-scene__svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="#fff" opacity="0.65">
          {[[120,80],[260,140],[380,60],[540,160],[700,90],[860,40],[1020,130],[1180,80],[1340,150],[1500,70],
            [200,260],[440,300],[640,250],[840,320],[1080,260],[1280,310],[1460,250],
            [80,440],[300,500],[520,460],[760,520],[1000,470],[1240,510],[1500,440]].map(([x,y], i) => (
            <circle key={i} cx={x} cy={y} r={0.8 + (i%3)*0.5}/>
          ))}
        </g>
        {/* Distant stupa silhouette */}
        <g opacity="0.85">
          <rect x="630" y="780" width="340" height="20" fill="#0a0418"/>
          <rect x="660" y="760" width="280" height="20" fill="#0a0418"/>
          <path d="M 700 760 Q 700 640 800 635 Q 900 640 900 760 Z" fill="#1a0c2a"/>
          <rect x="790" y="610" width="20" height="25" fill="#1a0c2a"/>
          <line x1="800" y1="610" x2="800" y2="580" stroke="#d4af37" strokeWidth="2"/>
          <circle cx="800" cy="575" r="3" fill="#f7d94e"/>
        </g>
      </svg>

      {/* Hanging lantern strings */}
      <div className="rw-vesak__strings">
        {lanterns.map((l, i) => (
          <div key={i} className={`rw-lantern rw-lantern--${l.c}`}
            style={{
              left: `${l.x}%`, top: `${l.y}%`,
              transform: `scale(${l.s})`,
              animationDelay: `${l.d}s`,
            }}>
            <span className="rw-lantern__string"/>
            <span className="rw-lantern__top"/>
            <span className="rw-lantern__body">
              <span className="rw-lantern__glow"/>
            </span>
            <span className="rw-lantern__tassel"/>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   2) POSON SCENE — Mihintale rock + Aradhana Gala
   Sri Lanka's first Buddhist site; where Arahat Mahinda greeted
   King Devanampiya Tissa in 247 BCE.
   ============================================================ */
function PosonScene() {
  return (
    <div className="rw-scene rw-scene--poson">
      <svg className="rw-scene__svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {/* Soft dawn sky stars */}
        <g fill="#fff" opacity="0.5">
          <circle cx="220" cy="120" r="0.9"/>
          <circle cx="1380" cy="90" r="0.9"/>
          <circle cx="980" cy="60" r="0.7"/>
          <circle cx="560" cy="200" r="0.6"/>
        </g>
        {/* Full moon */}
        <circle cx="320" cy="220" r="64" fill="#fff8d4" opacity="0.92"/>
        <circle cx="320" cy="220" r="90" fill="#fff8d4" opacity="0.18"/>

        {/* Far hills */}
        <path d="M 0 650 L 200 580 L 380 620 L 600 560 L 800 600 L 1000 550 L 1200 610 L 1400 570 L 1600 620 L 1600 720 L 0 720 Z"
              fill="#3a4a5a" opacity="0.55"/>

        {/* Aradhana Gala — the great rock dome of Mihintale */}
        <path d="M 540 760
                 C 540 480 720 380 800 380
                 C 900 380 1060 480 1060 760 Z"
              fill="#5a4232"/>
        <path d="M 540 760 C 540 480 720 380 800 380 L 800 392 C 720 392 552 488 552 760 Z"
              fill="#2a1d12" opacity="0.5"/>
        <path d="M 800 380 C 900 380 1060 480 1060 760 L 1048 760 C 1048 488 900 392 800 392 Z"
              fill="#f0d8a4" opacity="0.40"/>
        {/* Rock cracks */}
        <path d="M 680 500 L 700 600 M 760 460 L 780 540 M 880 480 L 900 580 M 940 540 L 950 640" stroke="#1a0c08" strokeWidth="2" opacity="0.45" fill="none"/>

        {/* Small white stupa on top of the rock */}
        <g>
          <ellipse cx="800" cy="380" rx="38" ry="6" fill="#f6ecd8"/>
          <path d="M 770 376 Q 770 340 800 336 Q 830 340 830 376 Z" fill="#f6ecd8"/>
          <rect x="796" y="318" width="8" height="14" fill="#f6ecd8"/>
          <line x1="800" y1="318" x2="800" y2="296" stroke="#d4af37" strokeWidth="2"/>
          <circle cx="800" cy="292" r="3" fill="#f7e08e"/>
          {/* Glow around it */}
          <circle cx="800" cy="356" r="60" fill="#f7d94e" opacity="0.15"/>
        </g>

        {/* Stepped pilgrim staircase up the rock — 1840 stone steps */}
        <g stroke="#3a2418" strokeWidth="1.2" opacity="0.55" fill="none">
          {Array.from({length: 14}).map((_, i) => (
            <line key={i}
              x1={760 - i*2} y1={760 - i*22}
              x2={840 + i*2} y2={760 - i*22}
            />
          ))}
        </g>

        {/* Foreground tree-line */}
        <g opacity="0.92" fill="#0e0a05">
          <path d="M 0 760 Q 80 740 140 745 T 280 750 T 420 740 T 560 752 T 720 745 T 880 754 T 1040 748 T 1200 752 T 1360 744 T 1520 750 L 1600 748 L 1600 820 L 0 820 Z"/>
          {[120, 360, 1120, 1440].map((x, i) => (
            <ellipse key={i} cx={x} cy={744} rx="22" ry="34"/>
          ))}
        </g>

        {/* White-clad pilgrim figures climbing */}
        <g fill="#f6ecd8" opacity="0.95">
          {[
            [720, 730], [738, 728], [762, 726], [848, 728], [868, 730]
          ].map(([x, y], i) => (
            <g key={i} transform={`translate(${x} ${y})`}>
              <ellipse cx="0" cy="-10" rx="3" ry="3.5"/>
              <path d="M -4 -7 L -5 6 L -3 24 L 0 24 L 0 6 L 3 24 L 5 24 L 4 -7 Z"/>
            </g>
          ))}
        </g>
      </svg>
      <div className="rw-poson__moon-glow"/>
    </div>
  );
}

/* ============================================================
   3) ESALA SCENE — perahera elephant under torchlight
   ============================================================ */
function EsalaScene() {
  return (
    <div className="rw-scene rw-scene--esala">
      <svg className="rw-scene__svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {/* Distant temple walls + torch flames */}
        <g opacity="0.65" fill="#3a1408">
          <rect x="0" y="640" width="1600" height="120"/>
        </g>
        {[140, 360, 1240, 1460].map((x, i) => (
          <g key={i} transform={`translate(${x} 640)`}>
            <line x1="0" y1="0" x2="0" y2="-100" stroke="#3a1408" strokeWidth="3"/>
            <path d="M 0 -100 Q -10 -116 -4 -130 Q 0 -118 0 -130 Q 4 -118 4 -130 Q 10 -116 0 -100 Z"
                  fill="#f7d94e" className={`rw-flame rw-flame--${i}`}/>
            <circle cx="0" cy="-115" r="22" fill="#f7d94e" opacity="0.18" className={`rw-flame-glow rw-flame-glow--${i}`}/>
          </g>
        ))}

        {/* Drummers silhouette row */}
        <g fill="#1a0804" opacity="0.85">
          {[100, 180, 260, 1080, 1180, 1280].map((x, i) => (
            <g key={i} transform={`translate(${x} 720)`}>
              <ellipse cx="0" cy="-10" rx="4" ry="5"/>
              <path d="M -5 -6 L -7 8 L -4 36 L 0 36 L 0 8 L 4 36 L 7 36 L 5 -6 Z"/>
              {/* drum */}
              <ellipse cx="-12" cy="20" rx="9" ry="11" fill="#3a1408"/>
            </g>
          ))}
        </g>

        {/* Foreground giant elephant in caparison */}
        <g transform="translate(800 700)">
          {/* Body */}
          <ellipse cx="0" cy="-90" rx="220" ry="110" fill="#1a0c08"/>
          {/* Caparison (decorated cloth) over the body */}
          <path d="M -210 -110 Q -200 -180 0 -190 Q 200 -180 210 -110 L 200 -50 Q 0 -30 -200 -50 Z"
                fill="#a82820"/>
          {/* Gold trim */}
          <path d="M -210 -110 Q -200 -180 0 -190 Q 200 -180 210 -110" fill="none" stroke="#d4af37" strokeWidth="3"/>
          <path d="M -200 -50 Q 0 -30 200 -50" fill="none" stroke="#d4af37" strokeWidth="3"/>
          {/* Caparison sequins */}
          {[-160, -100, -40, 40, 100, 160].map((x) => (
            <circle key={x} cx={x} cy={-140} r="6" fill="#f7e08e"/>
          ))}
          {/* Head */}
          <path d="M -220 -110 Q -260 -90 -260 -40 Q -250 0 -210 0 Z" fill="#1a0c08"/>
          <ellipse cx="-235" cy="-50" rx="32" ry="40" fill="#1a0c08"/>
          {/* Tusk */}
          <path d="M -250 -10 Q -240 10 -220 14 L -224 4 Q -242 0 -250 -10 Z" fill="#f6ecd8"/>
          {/* Eye glint */}
          <circle cx="-245" cy="-55" r="2.5" fill="#f7d94e"/>
          {/* Trunk */}
          <path d="M -250 -10 Q -300 20 -290 60 Q -270 75 -260 60" fill="#1a0c08"/>
          {/* Ear */}
          <path d="M -220 -110 Q -250 -100 -240 -60 Q -210 -75 -220 -110 Z" fill="#0e0604"/>
          {/* Legs */}
          <rect x="-180" y="-20" width="42" height="60" fill="#1a0c08" rx="6"/>
          <rect x="-80" y="-20" width="42" height="60" fill="#1a0c08" rx="6"/>
          <rect x="40"  y="-20" width="42" height="60" fill="#1a0c08" rx="6"/>
          <rect x="140" y="-20" width="42" height="60" fill="#1a0c08" rx="6"/>
          {/* Mahout on top */}
          <g transform="translate(60 -210)">
            <circle cx="0" cy="0" r="9" fill="#f6ecd8"/>
            <path d="M -8 6 L -12 30 L -4 60 L 0 60 L 0 30 L 4 60 L 8 60 L 12 6 Z" fill="#f6ecd8"/>
          </g>
          {/* Halo / canopy gold parasol */}
          <ellipse cx="60" cy="-220" rx="80" ry="10" fill="#d4af37" opacity="0.75"/>
          <rect x="58" y="-260" width="4" height="40" fill="#d4af37"/>
          <circle cx="60" cy="-262" r="4" fill="#f7e08e"/>
        </g>

        {/* Ground torches (foreground close-up) */}
        {[180, 1420].map((x, i) => (
          <g key={i} transform={`translate(${x} 850)`}>
            <line x1="0" y1="0" x2="0" y2="-80" stroke="#3a1408" strokeWidth="4"/>
            <ellipse cx="0" cy="-100" rx="14" ry="22" fill="#f7d94e" opacity="0.7" className={`rw-flame-big rw-flame-big--${i}`}/>
            <path d="M 0 -100 Q -14 -130 -6 -150 Q 0 -135 0 -150 Q 6 -135 6 -150 Q 14 -130 0 -100 Z" fill="#f7e08e" className={`rw-flame-big2 rw-flame-big2--${i}`}/>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ============================================================
   4) POYA MOON SCENE — full moon over the great stupa
   ============================================================ */
function PoyaMoonScene() {
  return (
    <div className="rw-scene rw-scene--poya">
      <svg className="rw-scene__svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {/* Stars */}
        <g fill="#fff" opacity="0.6">
          {Array.from({length: 30}).map((_, i) => {
            const x = (i * 53) % 1600;
            const y = ((i * 71) % 350) + 40;
            const r = 0.6 + (i % 3) * 0.4;
            return <circle key={i} cx={x} cy={y} r={r}/>;
          })}
        </g>

        {/* Full moon top-left */}
        <circle cx="370" cy="240" r="120" fill="#fffbe8" opacity="0.10"/>
        <circle cx="370" cy="240" r="90"  fill="#fffbe8" opacity="0.20"/>
        <circle cx="370" cy="240" r="68"  fill="#fff8d4"/>
        {/* Moon craters */}
        <circle cx="354" cy="232" r="9" fill="#f0e8be" opacity="0.5"/>
        <circle cx="382" cy="252" r="6" fill="#f0e8be" opacity="0.5"/>
        <circle cx="368" cy="262" r="4" fill="#f0e8be" opacity="0.5"/>

        {/* Reflection pool */}
        <rect x="0" y="780" width="1600" height="120" fill="#06060c"/>
        <ellipse cx="800" cy="800" rx="900" ry="40" fill="#1a1638" opacity="0.55"/>

        {/* Stupa centerpiece (white, moonlit) */}
        <g>
          {/* glow halo */}
          <circle cx="800" cy="540" r="240" fill="#d4af37" opacity="0.08"/>
          <circle cx="800" cy="540" r="160" fill="#fffbe8" opacity="0.10"/>

          {/* Base */}
          <rect x="560" y="760" width="480" height="22" fill="#1a1430"/>
          <rect x="600" y="740" width="400" height="20" fill="#26204a"/>
          <rect x="640" y="720" width="320" height="20" fill="#322a5a"/>
          {/* Dome */}
          <path d="M 660 740 Q 660 540 800 530 Q 940 540 940 740 Z" fill="#e8e0d4"/>
          <path d="M 660 740 Q 660 540 800 530 L 800 542 Q 672 552 672 740 Z" fill="#9a90a4" opacity="0.45"/>
          {/* Harmika */}
          <rect x="772" y="490" width="56" height="42" fill="#c8bea8"/>
          <rect x="772" y="490" width="56" height="4"  fill="#f4ecde"/>
          {/* Chathra parasols */}
          {Array.from({length: 9}).map((_, i) => {
            const y = 488 - i * 8;
            const w = 60 - i * 5;
            return <rect key={i} x={800 - w/2} y={y} width={w} height={4} fill="#d4af37"/>;
          })}
          {/* Spire and pinnacle */}
          <line x1="800" y1="416" x2="800" y2="396" stroke="#d4af37" strokeWidth="2.5"/>
          <path d="M 800 396 L 806 384 L 800 372 L 794 384 Z" fill="#f7e08e"/>
          <circle cx="800" cy="368" r="3" fill="#fffae0"/>
        </g>

        {/* Reflection of stupa in water */}
        <g opacity="0.22" transform="translate(0 1480) scale(1 -1)">
          <rect x="560" y="700" width="480" height="22" fill="#1a1430"/>
          <path d="M 660 700 Q 660 540 800 530 Q 940 540 940 700 Z" fill="#e8e0d4"/>
        </g>

        {/* Oil lamps along the base */}
        {[440, 520, 600, 1000, 1080, 1160].map((x, i) => (
          <g key={i} transform={`translate(${x} 800)`}>
            <ellipse cx="0" cy="0" rx="10" ry="2" fill="#3a2418"/>
            <path d="M -8 0 Q -8 -10 0 -12 Q 8 -10 8 0 Z" fill="#5a3820"/>
            <ellipse cx="0" cy="-14" rx="3" ry="6" fill="#f7d94e" className={`rw-lamp-flame rw-lamp-flame--${i}`}/>
            <circle cx="0" cy="-14" r="14" fill="#f7d94e" opacity="0.18"/>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ============================================================
   5) ALMS SCENE — monk's bowl, banana leaf, rice + lotus
   For Ude Danaya / Dawal Danaya / Gilanpasa Pooja
   ============================================================ */
function AlmsScene({ variant = "ude" }) {
  // ude = morning (warm gold), dawal = noon (bright cream),
  // gilana = evening (deeper amber), pooja = pink lotus
  return (
    <div className={`rw-scene rw-scene--alms rw-scene--alms-${variant}`}>
      <svg className="rw-scene__svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {/* Soft circle of light */}
        <circle cx="800" cy="450" r="380" fill="#fff" opacity="0.10"/>
        <circle cx="800" cy="450" r="220" fill="#fff" opacity="0.15"/>

        {/* Banana leaf — large green ellipse with vein */}
        <g transform="translate(800 540)">
          <ellipse cx="0" cy="0" rx="430" ry="120" fill="#2e5a32" opacity="0.85"/>
          <ellipse cx="0" cy="-8" rx="400" ry="100" fill="#3a7240"/>
          <line x1="-380" y1="0" x2="380" y2="0" stroke="#1f3a22" strokeWidth="2.5" opacity="0.7"/>
          {/* Leaf veins */}
          {Array.from({length: 9}).map((_, i) => (
            <line key={i}
              x1={-300 + i*75} y1="-2"
              x2={-310 + i*75} y2={-50}
              stroke="#1f3a22" strokeWidth="1.2" opacity="0.5"/>
          ))}
        </g>

        {/* Monk's alms bowl (patra) — large dark spherical bowl */}
        <g transform="translate(800 460)">
          <ellipse cx="0" cy="80" rx="170" ry="40" fill="#1a0c08" opacity="0.5"/>
          <path d="M -170 50 Q -170 -10 -150 -40 L 150 -40 Q 170 -10 170 50 Q 130 90 0 90 Q -130 90 -170 50 Z" fill="#1a0c08"/>
          <path d="M -170 50 Q -170 -10 -150 -40 L 150 -40 Q 170 -10 170 50 Q 130 90 0 90 Q -130 90 -170 50 Z" fill="none" stroke="#3a2418" strokeWidth="3"/>
          {/* Rim highlight */}
          <ellipse cx="0" cy="-40" rx="150" ry="10" fill="#3a2418"/>
          <ellipse cx="0" cy="-40" rx="140" ry="6" fill="#5a3820"/>
          {/* Rice mound inside */}
          <ellipse cx="0" cy="-44" rx="130" ry="22" fill="#fffaee"/>
          <ellipse cx="0" cy="-48" rx="110" ry="14" fill="#fffdf6"/>
          {/* Rice grain dots */}
          {[[-90,-50],[-50,-56],[10,-58],[60,-52],[90,-46],[-30,-46],[40,-44],[-70,-44]].map(([x,y], i) => (
            <ellipse key={i} cx={x} cy={y} rx="3" ry="1.5" fill="#fff" opacity="0.85"/>
          ))}
        </g>

        {/* Steam rising from bowl */}
        <g className="rw-steam" opacity="0.5" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
          <path d="M 740 400 Q 730 370 740 340 Q 750 310 740 280" className="rw-steam__line rw-steam__line--1"/>
          <path d="M 800 390 Q 790 360 800 330 Q 810 300 800 270" className="rw-steam__line rw-steam__line--2"/>
          <path d="M 860 400 Q 850 370 860 340 Q 870 310 860 280" className="rw-steam__line rw-steam__line--3"/>
        </g>

        {/* Lotus flower beside the bowl */}
        <g transform="translate(1140 510)">
          <g className="rw-alms__lotus">
            {/* outer petals */}
            <ellipse cx="-50" cy="0"  rx="30" ry="12" fill="#f4b4c4" transform="rotate(-30 -50 0)"/>
            <ellipse cx="50"  cy="0"  rx="30" ry="12" fill="#f4b4c4" transform="rotate(30 50 0)"/>
            <ellipse cx="-30" cy="-30" rx="26" ry="10" fill="#f6c4d2" transform="rotate(-60 -30 -30)"/>
            <ellipse cx="30"  cy="-30" rx="26" ry="10" fill="#f6c4d2" transform="rotate(60 30 -30)"/>
            {/* inner petals */}
            <ellipse cx="0"   cy="-12" rx="14" ry="22" fill="#f8d4dc"/>
            <ellipse cx="-15" cy="-8"  rx="12" ry="20" fill="#fae0e8" transform="rotate(-20 -15 -8)"/>
            <ellipse cx="15"  cy="-8"  rx="12" ry="20" fill="#fae0e8" transform="rotate(20 15 -8)"/>
            {/* center */}
            <circle cx="0" cy="-10" r="6" fill="#f7e08e"/>
          </g>
        </g>

        {/* Lotus on the other side */}
        <g transform="translate(460 510)">
          <g className="rw-alms__lotus" style={{animationDelay: '1s'}}>
            <ellipse cx="-40" cy="0"  rx="24" ry="10" fill="#f4b4c4" transform="rotate(-30 -40 0)"/>
            <ellipse cx="40"  cy="0"  rx="24" ry="10" fill="#f4b4c4" transform="rotate(30 40 0)"/>
            <ellipse cx="0"   cy="-10" rx="12" ry="18" fill="#f8d4dc"/>
            <circle cx="0" cy="-8" r="5" fill="#f7e08e"/>
          </g>
        </g>

        {/* Floating petals */}
        <g fill="#f8d4dc" opacity="0.7">
          <ellipse cx="320" cy="220" rx="6" ry="12" className="rw-petal rw-petal--1" transform="rotate(40 320 220)"/>
          <ellipse cx="520" cy="160" rx="5" ry="10" className="rw-petal rw-petal--2" transform="rotate(-30 520 160)"/>
          <ellipse cx="900" cy="200" rx="6" ry="12" className="rw-petal rw-petal--3" transform="rotate(20 900 200)"/>
          <ellipse cx="1200" cy="170" rx="5" ry="10" className="rw-petal rw-petal--4" transform="rotate(-50 1200 170)"/>
          <ellipse cx="1380" cy="240" rx="6" ry="12" className="rw-petal rw-petal--5" transform="rotate(60 1380 240)"/>
        </g>
      </svg>
    </div>
  );
}

/* ============================================================
   6) Generic dispatcher
   ============================================================ */
function EventScene({ theme, variant }) {
  if (theme === "vesak")  return <VesakScene/>;
  if (theme === "poson")  return <PosonScene/>;
  if (theme === "esala")  return <EsalaScene/>;
  if (theme === "poya")   return <PoyaMoonScene/>;
  if (theme === "alms")   return <AlmsScene variant={variant}/>;
  return <PoyaMoonScene/>;
}

Object.assign(window, { VesakScene, PosonScene, EsalaScene, PoyaMoonScene, AlmsScene, EventScene });
