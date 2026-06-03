'use client';

function VesakScene() {
  const lanterns = [
    {x:8,y:22,c:'amber',d:0.0,s:1.0},{x:18,y:38,c:'rose',d:0.8,s:0.85},{x:28,y:24,c:'amber',d:0.3,s:0.95},
    {x:38,y:42,c:'gold',d:1.1,s:1.05},{x:48,y:28,c:'rose',d:0.5,s:0.9},{x:58,y:44,c:'amber',d:1.3,s:1.0},
    {x:68,y:26,c:'gold',d:0.2,s:0.95},{x:78,y:40,c:'rose',d:0.9,s:1.0},{x:88,y:24,c:'amber',d:0.4,s:0.9},
    {x:13,y:56,c:'gold',d:1.5,s:0.75},{x:33,y:60,c:'rose',d:0.7,s:0.8},{x:53,y:58,c:'amber',d:1.7,s:0.8},
    {x:73,y:62,c:'gold',d:0.6,s:0.75},{x:93,y:56,c:'rose',d:1.0,s:0.8},
  ];
  return (
    <div className="rw-scene rw-scene--vesak">
      <svg className="rw-scene__svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="#fff" opacity="0.65">
          {[[120,80],[260,140],[380,60],[540,160],[700,90],[860,40],[1020,130],[1180,80],[1340,150],[1500,70],[200,260],[440,300],[640,250],[840,320],[1080,260],[1280,310],[1460,250],[80,440],[300,500],[520,460],[760,520],[1000,470],[1240,510],[1500,440]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r={0.8+(i%3)*0.5}/>
          ))}
        </g>
        <g opacity="0.85">
          <rect x="630" y="780" width="340" height="20" fill="#0a0418"/>
          <rect x="660" y="760" width="280" height="20" fill="#0a0418"/>
          <path d="M 700 760 Q 700 640 800 635 Q 900 640 900 760 Z" fill="#1a0c2a"/>
          <rect x="790" y="610" width="20" height="25" fill="#1a0c2a"/>
          <line x1="800" y1="610" x2="800" y2="580" stroke="#d4af37" strokeWidth="2"/>
          <circle cx="800" cy="575" r="3" fill="#f7d94e"/>
        </g>
      </svg>
      <div className="rw-vesak__strings">
        {lanterns.map((l, i) => (
          <div key={i} className={`rw-lantern rw-lantern--${l.c}`} style={{left:`${l.x}%`,top:`${l.y}%`,transform:`scale(${l.s})`,animationDelay:`${l.d}s`}}>
            <span className="rw-lantern__string"/>
            <span className="rw-lantern__top"/>
            <span className="rw-lantern__body"><span className="rw-lantern__glow"/></span>
            <span className="rw-lantern__tassel"/>
          </div>
        ))}
      </div>
    </div>
  );
}

function PosonScene() {
  return (
    <div className="rw-scene rw-scene--poson">
      <svg className="rw-scene__svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="#fff" opacity="0.5">
          <circle cx="220" cy="120" r="0.9"/><circle cx="1380" cy="90" r="0.9"/>
          <circle cx="980" cy="60" r="0.7"/><circle cx="560" cy="200" r="0.6"/>
        </g>
        <circle cx="320" cy="220" r="64" fill="#fff8d4" opacity="0.92"/>
        <circle cx="320" cy="220" r="90" fill="#fff8d4" opacity="0.18"/>
        <path d="M 0 650 L 200 580 L 380 620 L 600 560 L 800 600 L 1000 550 L 1200 610 L 1400 570 L 1600 620 L 1600 720 L 0 720 Z" fill="#3a4a5a" opacity="0.55"/>
        <path d="M 540 760 C 540 480 720 380 800 380 C 900 380 1060 480 1060 760 Z" fill="#5a4232"/>
        <path d="M 540 760 C 540 480 720 380 800 380 L 800 392 C 720 392 552 488 552 760 Z" fill="#2a1d12" opacity="0.5"/>
        <path d="M 680 500 L 700 600 M 760 460 L 780 540 M 880 480 L 900 580 M 940 540 L 950 640" stroke="#1a0c08" strokeWidth="2" opacity="0.45" fill="none"/>
        <g>
          <ellipse cx="800" cy="380" rx="38" ry="6" fill="#f6ecd8"/>
          <path d="M 770 376 Q 770 340 800 336 Q 830 340 830 376 Z" fill="#f6ecd8"/>
          <rect x="796" y="318" width="8" height="14" fill="#f6ecd8"/>
          <line x1="800" y1="318" x2="800" y2="296" stroke="#d4af37" strokeWidth="2"/>
          <circle cx="800" cy="292" r="3" fill="#f7e08e"/>
          <circle cx="800" cy="356" r="60" fill="#f7d94e" opacity="0.15"/>
        </g>
        <g stroke="#3a2418" strokeWidth="1.2" opacity="0.55" fill="none">
          {Array.from({length:14}).map((_,i)=>(
            <line key={i} x1={760-i*2} y1={760-i*22} x2={840+i*2} y2={760-i*22}/>
          ))}
        </g>
        <g opacity="0.92" fill="#0e0a05">
          <path d="M 0 760 Q 80 740 140 745 T 280 750 T 420 740 T 560 752 T 720 745 T 880 754 T 1040 748 T 1200 752 T 1360 744 T 1520 750 L 1600 748 L 1600 820 L 0 820 Z"/>
          {[120,360,1120,1440].map((x,i)=>(<ellipse key={i} cx={x} cy={744} rx="22" ry="34"/>))}
        </g>
        <g fill="#f6ecd8" opacity="0.95">
          {[[720,730],[738,728],[762,726],[848,728],[868,730]].map(([x,y],i)=>(
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

function EsalaScene() {
  return (
    <div className="rw-scene rw-scene--esala">
      <svg className="rw-scene__svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g opacity="0.65" fill="#3a1408"><rect x="0" y="640" width="1600" height="120"/></g>
        {[140,360,1240,1460].map((x,i)=>(
          <g key={i} transform={`translate(${x} 640)`}>
            <line x1="0" y1="0" x2="0" y2="-100" stroke="#3a1408" strokeWidth="3"/>
            <path d="M 0 -100 Q -10 -116 -4 -130 Q 0 -118 0 -130 Q 4 -118 4 -130 Q 10 -116 0 -100 Z" fill="#f7d94e" className={`rw-flame rw-flame--${i}`}/>
            <circle cx="0" cy="-115" r="22" fill="#f7d94e" opacity="0.18" className={`rw-flame-glow rw-flame-glow--${i}`}/>
          </g>
        ))}
        <g fill="#1a0804" opacity="0.85">
          {[100,180,260,1080,1180,1280].map((x,i)=>(
            <g key={i} transform={`translate(${x} 720)`}>
              <ellipse cx="0" cy="-10" rx="4" ry="5"/>
              <path d="M -5 -6 L -7 8 L -4 36 L 0 36 L 0 8 L 4 36 L 7 36 L 5 -6 Z"/>
              <ellipse cx="-12" cy="20" rx="9" ry="11" fill="#3a1408"/>
            </g>
          ))}
        </g>
        <g transform="translate(800 700)">
          <ellipse cx="0" cy="-90" rx="220" ry="110" fill="#1a0c08"/>
          <path d="M -210 -110 Q -200 -180 0 -190 Q 200 -180 210 -110 L 200 -50 Q 0 -30 -200 -50 Z" fill="#a82820"/>
          <path d="M -210 -110 Q -200 -180 0 -190 Q 200 -180 210 -110" fill="none" stroke="#d4af37" strokeWidth="3"/>
          <path d="M -200 -50 Q 0 -30 200 -50" fill="none" stroke="#d4af37" strokeWidth="3"/>
          {[-160,-100,-40,40,100,160].map((x)=>(<circle key={x} cx={x} cy={-140} r="6" fill="#f7e08e"/>))}
          <ellipse cx="-235" cy="-50" rx="32" ry="40" fill="#1a0c08"/>
          <path d="M -258 -20 Q -270 0 -262 30 Q -250 40 -238 32 L -238 -20 Z" fill="#1a0c08"/>
          <path d="M -264 32 Q -256 60 -248 52" stroke="#1a0c08" strokeWidth="8" fill="none" strokeLinecap="round"/>
          <path d="M -260 40 Q -252 56 -244 50 L -246 44 Q -256 52 -260 40 Z" fill="#e8d4a8"/>
          <ellipse cx="-244" cy="-30" rx="22" ry="28" fill="#1a0804"/>
          <circle cx="-250" cy="-38" r="4" fill="#1a0c08"/>
          <rect x="-24" y="-30" width="48" height="60" fill="#1a0c08"/>
          {[-12,6,18].map((x)=>(<line key={x} x1={x} y1="-30" x2={x} y2="30" stroke="#0a0600" strokeWidth="1.5"/>))}
          {[-90,-30,30,90].map((x)=>(<rect key={x} x={x-6} y={30} width="12" height="42" fill="#1a0c08"/>))}
          <path d="M 200 -30 Q 210 -20 208 -10 L 200 -10 Z" fill="#1a0c08"/>
          <line x1="200" y1="-10" x2="204" y2="16" stroke="#1a0c08" strokeWidth="10" strokeLinecap="round"/>
          <g transform="translate(0 -180)">
            <circle cx="0" cy="0" r="20" fill="#d4af37"/>
            <path d="M 0 -20 L -4 -8 L -16 -8 L -6 0 L -10 12 L 0 4 L 10 12 L 6 0 L 16 -8 L 4 -8 Z" fill="#f7e08e"/>
          </g>
        </g>
        <g opacity="0.92" fill="#0a0600">
          <path d="M 0 760 Q 100 740 200 748 T 400 744 T 600 750 T 800 746 T 1000 752 T 1200 748 T 1400 750 T 1600 746 L 1600 820 L 0 820 Z"/>
        </g>
      </svg>
    </div>
  );
}

function PojaScene() {
  return (
    <div className="rw-scene rw-scene--poya">
      <svg className="rw-scene__svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="#fff" opacity="0.6">
          {[[100,60],[250,40],[400,90],[600,50],[850,70],[1050,40],[1200,85],[1380,55],[1520,80],[180,200],[350,180],[550,220],[780,190],[980,210],[1150,185],[1350,215],[1480,195]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r={0.8+(i%3)*0.4}/>
          ))}
        </g>
        <circle cx="800" cy="180" r="80" fill="#fff8d4" opacity="0.90"/>
        <circle cx="800" cy="180" r="120" fill="#fff8d4" opacity="0.18"/>
        <circle cx="800" cy="180" r="160" fill="#f7d94e" opacity="0.08"/>
        <path d="M 0 680 L 160 640 L 320 660 L 500 620 L 680 650 L 880 630 L 1080 650 L 1260 622 L 1440 650 L 1600 630 L 1600 720 L 0 720 Z" fill="#2a1c14" opacity="0.6"/>
        <g>
          <rect x="460" y="788" width="680" height="28" fill="#2a1c14"/>
          <rect x="500" y="760" width="600" height="28" fill="#3a2418"/>
          <rect x="540" y="736" width="520" height="24" fill="#4a2c1c"/>
          <path d="M 580 736 Q 580 560 800 548 Q 1020 560 1020 736 Z" fill="#d8c8a8"/>
          <path d="M 580 736 Q 580 560 800 548 L 800 560 Q 592 568 592 736 Z" fill="#6a4a28" opacity="0.5"/>
          <rect x="770" y="524" width="60" height="40" fill="#a88c68"/>
          {Array.from({length:8}).map((_,i)=>{const y=520-i*8;const w=64-i*6;return <rect key={i} x={800-w/2} y={y} width={w} height={5} fill="#d4af37"/>;})}
          <line x1="800" y1="456" x2="800" y2="440" stroke="#d4af37" strokeWidth="2.5"/>
          <circle cx="800" cy="434" r="4" fill="#f7d94e"/>
        </g>
        <path d="M 140 750 Q 400 710 500 742 L 500 760 Q 400 728 140 768 Z" fill="#2a1c10" opacity="0.4"/>
        <path d="M 1100 742 Q 1200 710 1460 750 L 1460 768 Q 1200 728 1100 760 Z" fill="#2a1c10" opacity="0.4"/>
        {[200,320,440,560,1040,1160,1280,1400].map((x,i)=>(
          <g key={i} transform={`translate(${x} 768)`}>
            <ellipse cx="0" cy="0" rx="14" ry="3" fill="#1a0c08"/>
            <path d="M -12 0 Q -12 -8 0 -10 Q 12 -8 12 0 Z" fill="#3a2010"/>
            <ellipse cx="0" cy="-14" rx="4" ry="8" fill="#f7d94e" className={`rw-flame rw-flame--${i%4}`}/>
            <ellipse cx="0" cy="-14" rx="2" ry="5" fill="#fff8d4"/>
            <circle cx="0" cy="-14" r="18" fill="#f7d94e" opacity="0.12"/>
          </g>
        ))}
      </svg>
    </div>
  );
}

function AlmsScene({ gradient = 'ude' }: { gradient?: string }) {
  const bg = gradient === 'ude'
    ? 'linear-gradient(160deg,#1e1208 0%,#3a2010 40%,#7a5020 70%,#c88c38 88%,#e8b84e 100%)'
    : gradient === 'gilanpasa'
    ? 'linear-gradient(160deg,#1a1008 0%,#3a2810 40%,#7a5028 70%,#b87830 88%,#d89840 100%)'
    : 'linear-gradient(160deg,#1c1a0c 0%,#3c380c 40%,#8c7c28 70%,#d4b840 88%,#f0d860 100%)';
  return (
    <div className="rw-scene rw-scene--alms" style={{background:bg,position:'absolute',inset:0,overflow:'hidden'}}>
      <svg className="rw-scene__svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g transform="translate(800 560)">
          <ellipse cx="0" cy="120" rx="340" ry="40" fill="#2a1808" opacity="0.4"/>
          <path d="M -320 80 Q -260 40 -200 30 L -200 120 Q -260 110 -320 150 Z" fill="#2d7a1a"/>
          <path d="M 320 80 Q 260 40 200 30 L 200 120 Q 260 110 320 150 Z" fill="#2d7a1a"/>
          <path d="M -200 30 Q 0 0 200 30 L 200 120 Q 0 90 -200 120 Z" fill="#3a9020"/>
          <path d="M -200 30 Q 0 0 200 30" fill="none" stroke="#1a5010" strokeWidth="2.5" opacity="0.4"/>
          {[[-140,60],[-70,40],[0,32],[70,40],[140,60]].map(([x,y],i)=>(
            <ellipse key={i} cx={x} cy={y} rx="20" ry="6" fill="#c8b440" opacity="0.7"/>
          ))}
          <ellipse cx="0" cy="32" rx="120" ry="30" fill="#1a0c08" opacity="0.85"/>
          <path d="M -120 32 Q -60 -20 0 -24 Q 60 -20 120 32 Q 80 58 0 60 Q -80 58 -120 32 Z" fill="#2a1808"/>
          <path d="M -120 32 Q -80 8 0 4 Q 80 8 120 32" fill="none" stroke="#4a2818" strokeWidth="2" opacity="0.5"/>
          <path d="M -12 -24 Q -12 -100 0 -110 Q 12 -100 12 -24 Z" fill="#f4a830" className="rw-tile-smoke rw-tile-smoke--1" style={{transformOrigin:'bottom'}}/>
          <path d="M -6 -24 Q -8 -70 0 -80 Q 8 -70 6 -24 Z" fill="#fff8e0" opacity="0.6"/>
        </g>
        {[[500,600],[550,580],[560,610],[1040,580],[1060,600],[1080,590]].map(([x,y],i)=>(
          <g key={i} transform={`translate(${x} ${y})`}>
            <ellipse cx="0" cy="-38" rx="16" ry="20"/>
            <path d="M -20 -24 L -28 20 L -20 100 L -8 100 L -4 20 L 4 20 L 8 100 L 20 100 L 28 20 L 20 -24 Z" fill="#f6ecd8"/>
          </g>
        ))}
        {[[420,480],[620,460],[760,440],[840,440],[980,460],[1180,480]].map(([x,y],i)=>(
          <g key={i} transform={`translate(${x} ${y})`}>
            <ellipse cx="0" cy="-14" rx="8" ry="10" fill="#c89870"/>
            <path d="M -14 -6 L -20 22 L -16 62 L -6 62 L -4 22 L 4 22 L 6 62 L 16 62 L 20 22 L 14 -6 Z" fill="#f6ecd8"/>
            <ellipse cx="8" cy="-2" rx="6" ry="3" fill="#c89870"/>
            <ellipse cx="12" cy="-8" rx="4" ry="5" fill="#f4b4c4"/>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function EventScene({ theme }: { theme: string }) {
  if (theme === 'vesak')   return <VesakScene/>;
  if (theme === 'poson')   return <PosonScene/>;
  if (theme === 'esala')   return <EsalaScene/>;
  if (theme === 'ude')     return <AlmsScene gradient="ude"/>;
  if (theme === 'dawal')   return <AlmsScene gradient="dawal"/>;
  if (theme === 'gilanpasa') return <AlmsScene gradient="gilanpasa"/>;
  return <PojaScene/>;
}
