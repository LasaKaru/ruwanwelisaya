/* eslint-disable no-undef */
/* events.jsx — Events surface: festivals + daily observances. */

/* ============================================================
   DATA
   ============================================================ */

/* The twelve Poya months in the Sinhala calendar.
   Each full moon (Poya) commemorates a specific event from Buddhist history. */
const POYA_DAYS = [
  {
    id: "duruthu",
    name: "Duruthu Poya",
    sinhala: "දුරුතු",
    month: "January",
    date: "Jan 14, 2026",
    theme: "poya",
    eyebrow: "First Visit",
    title: "Duruthu Poya",
    subtitle: "The Buddha's first visit to Sri Lanka",
    blurb: "Commemorates the Buddha's visit to Mahiyangana, in the ninth month after his enlightenment. The first of the three documented visits.",
    details: [
      { lbl: "Significance", val: "Buddha's first visit to the island" },
      { lbl: "Major rite",   val: "Duruthu Perahera in Kelaniya" },
      { lbl: "At the stupa", val: "Sil observance · pirith chanting" },
    ],
  },
  {
    id: "navam",
    name: "Navam Poya",
    sinhala: "නවම්",
    month: "February",
    date: "Feb 12, 2026",
    theme: "poya",
    eyebrow: "First Council",
    title: "Navam Poya",
    subtitle: "The first Buddhist council and Sangha gathering",
    blurb: "Marks the day Sariputta and Moggallana — the Buddha's two chief disciples — were ordained. Also commemorates the first formal Sangha assembly.",
    details: [
      { lbl: "Significance", val: "Appointment of chief disciples" },
      { lbl: "Major rite",   val: "Navam Perahera in Gangaramaya" },
      { lbl: "At the stupa", val: "Dawn pooja · alms-giving to bhikkhus" },
    ],
  },
  {
    id: "medin",
    name: "Medin Poya",
    sinhala: "මැදින්",
    month: "March",
    date: "Mar 14, 2026",
    theme: "poya",
    eyebrow: "Father's Visit",
    title: "Medin Poya",
    subtitle: "The Buddha's return to Kapilavastu",
    blurb: "Commemorates the Buddha's first return to his birthplace to teach his father, King Suddhodana, and the conversion of his son Rahula.",
    details: [
      { lbl: "Significance", val: "Buddha's visit to his father" },
      { lbl: "At the stupa", val: "Reading of the Dhammapada" },
    ],
  },
  {
    id: "bak",
    name: "Bak Poya",
    sinhala: "බක්",
    month: "April",
    date: "Apr 12, 2026",
    theme: "poya",
    eyebrow: "Second Visit",
    title: "Bak Poya",
    subtitle: "The Buddha's second visit to Sri Lanka",
    blurb: "The Buddha's second visit, this time to Nagadeepa, to settle a dispute between two Naga kings over a jewelled throne.",
    details: [
      { lbl: "Significance", val: "Resolution at Nagadeepa" },
      { lbl: "At the stupa", val: "Lighting of 108 oil lamps" },
    ],
  },
  {
    id: "vesak",
    name: "Vesak Poya",
    sinhala: "වෙසක්",
    month: "May",
    date: "May 1, 2026",
    theme: "vesak",
    eyebrow: "The Thrice-Blessed Day",
    title: "Vesak Poya",
    subtitle: "Birth, enlightenment and parinibbana of the Buddha",
    blurb: "The holiest day in the Buddhist calendar. On a single full moon — separated by years — the Buddha was born, attained enlightenment, and passed into parinibbana. Across Sri Lanka, homes and streets are lit with paper lanterns (kuudu), towering bamboo pandals (thoran) tell jataka stories in painted scenes, and free dansel stalls give food to every passerby.",
    details: [
      { lbl: "Significance", val: "Triple anniversary of the Buddha" },
      { lbl: "Streets",      val: "Vesak kuudu, thoran, bhakti gee" },
      { lbl: "Free meals",   val: "Dansel along all major roads" },
      { lbl: "At the stupa", val: "All-night sil · lantern lighting · pirith" },
    ],
    extended: true,
  },
  {
    id: "poson",
    name: "Poson Poya",
    sinhala: "පොසොන්",
    month: "June",
    date: "Jun 1, 2026",
    theme: "poson",
    eyebrow: "Arrival of the Dhamma",
    title: "Poson Poya",
    subtitle: "Arrival of Buddhism to Sri Lanka",
    blurb: "In 247 BCE, on the full moon of Poson, Arahat Mahinda — son of Emperor Asoka — met King Devanampiya Tissa at Mihintale and introduced Buddhism to the island. The king was hunting a stag when Mahinda called his name from the rock above. Thousands of pilgrims now climb the 1,840 stone steps of Mihintale to walk where that meeting took place.",
    details: [
      { lbl: "Significance", val: "Arahat Mahinda meets King Tissa" },
      { lbl: "Year",         val: "247 BCE" },
      { lbl: "Site",         val: "Mihintale, 13 km east of the stupa" },
      { lbl: "Pilgrim climb", val: "1,840 stone steps to Aradhana Gala" },
    ],
    extended: true,
  },
  {
    id: "esala",
    name: "Esala Poya",
    sinhala: "ඇසළ",
    month: "July",
    date: "Jul 1, 2026",
    theme: "esala",
    eyebrow: "First Sermon",
    title: "Esala Poya",
    subtitle: "First sermon · beginning of Vassa · Esala Perahera",
    blurb: "Marks the Buddha's first sermon at Sarnath, the Dhammacakkappavattana Sutta — the setting in motion of the wheel of the Dhamma. Also begins Vas, the three-month rains-retreat for bhikkhus. In Kandy, the Esala Perahera procession of caparisoned elephants, fire-twirlers, whip-crackers and drummers carries the Sacred Tooth Relic through the streets for ten nights.",
    details: [
      { lbl: "Significance", val: "First turning of the wheel of Dhamma" },
      { lbl: "Sermon",       val: "Dhammacakkappavattana Sutta" },
      { lbl: "Procession",   val: "10-night Esala Perahera in Kandy" },
      { lbl: "Vassa",        val: "Three-month rains retreat begins" },
    ],
    extended: true,
  },
  {
    id: "nikini",
    name: "Nikini Poya",
    sinhala: "නිකිණි",
    month: "August",
    date: "Aug 1, 2026",
    theme: "poya",
    eyebrow: "First Council",
    title: "Nikini Poya",
    subtitle: "Compilation of the Dhamma",
    blurb: "Commemorates the first Buddhist Council, held three months after the Buddha's passing, where 500 arahats led by Ven. Mahakassapa recited and compiled his teachings.",
    details: [
      { lbl: "Significance", val: "First Buddhist Council" },
      { lbl: "Convener",     val: "Ven. Mahakassapa Thera" },
    ],
  },
  {
    id: "binara",
    name: "Binara Poya",
    sinhala: "බිනර",
    month: "September",
    date: "Aug 31, 2026",
    theme: "poya",
    eyebrow: "Bhikkhuni Sasana",
    title: "Binara Poya",
    subtitle: "Founding of the order of nuns",
    blurb: "Marks the Buddha's ascent to Tavatimsa to preach to his mother, and the ordination of Mahapajapati Gotami — establishing the bhikkhuni sasana, the order of nuns.",
    details: [
      { lbl: "Significance", val: "Founding of the bhikkhuni order" },
    ],
  },
  {
    id: "wap",
    name: "Wap Poya",
    sinhala: "වප්",
    month: "October",
    date: "Sep 29, 2026",
    theme: "poya",
    eyebrow: "End of Vassa",
    title: "Wap Poya",
    subtitle: "End of the rains retreat",
    blurb: "Marks the end of the three-month Vassa rains-retreat. Begins the Katina civaraya season — laypeople offer robes to the Sangha in elaborate processions.",
    details: [
      { lbl: "Significance", val: "End of Vassa rains-retreat" },
      { lbl: "Major rite",   val: "Katina civaraya — robe offering" },
    ],
  },
  {
    id: "il",
    name: "Il Poya",
    sinhala: "ඉල්",
    month: "November",
    date: "Oct 29, 2026",
    theme: "poya",
    eyebrow: "60 Arahats",
    title: "Il Poya",
    subtitle: "Dispatch of the first 60 arahats",
    blurb: "Commemorates the Buddha dispatching the first 60 arahats to teach the Dhamma — \"Go forth, for the good of the many, for the welfare of the many.\"",
    details: [
      { lbl: "Significance", val: "First missionary dispatch" },
    ],
  },
  {
    id: "unduvap",
    name: "Unduvap Poya",
    sinhala: "උඳුවප්",
    month: "December",
    date: "Nov 28, 2026",
    theme: "poson",
    eyebrow: "Sacred Bodhi",
    title: "Unduvap Poya",
    subtitle: "Arrival of the Sri Maha Bodhi sapling",
    blurb: "Marks the arrival of Theri Sanghamitta — Arahat Mahinda's sister — bringing a sapling of the Bodhi tree under which the Buddha attained enlightenment. Planted at Anuradhapura, it grows there still — the oldest authenticated tree in the world.",
    details: [
      { lbl: "Significance", val: "Sri Maha Bodhi arrives in Lanka" },
      { lbl: "Bearer",       val: "Theri Sanghamitta" },
      { lbl: "Site",         val: "Anuradhapura · 800m from this stupa" },
    ],
  },
];

/* Daily observances at any temple. */
const DAILY_OBSERVANCES = [
  {
    id: "ude-danaya",
    title: "Ude Danaya",
    sinhala: "උදේ දානය",
    subtitle: "Morning alms-giving",
    time: "Around 6:30 AM",
    theme: "alms", variant: "ude",
    blurb: "The first meal of the day for bhikkhus, traditionally given between dawn and 7am. Laypeople line the path with rice in coconut-wood spoons, dropping it into the alms bowl in silence. The merit is in the giving, not the words.",
    details: [
      { lbl: "When",    val: "Dawn — before 7:00 AM" },
      { lbl: "Offered", val: "Kola kanda, rice, pol sambol, fruit" },
      { lbl: "Custom",  val: "Receive in silence; no thanks expected" },
    ],
  },
  {
    id: "dawal-danaya",
    title: "Dawal Danaya",
    sinhala: "දවල් දානය",
    subtitle: "Midday alms-giving",
    time: "Before 12:00 noon",
    theme: "alms", variant: "dawal",
    blurb: "The principal meal of the day, taken before noon. After this, bhikkhus take no solid food until dawn. Special dawal danayas are often sponsored by families on the seven-day, three-month and anniversary milestones after a death — known as a matakadana.",
    details: [
      { lbl: "When",    val: "Before solar noon" },
      { lbl: "Offered", val: "Rice & curry, kiribath, pittu, kavum" },
      { lbl: "Matakadana", val: "Memorial alms for the departed" },
    ],
  },
  {
    id: "gilanpasa",
    title: "Gilanpasa Pooja",
    sinhala: "ගිලන්පස පූජා",
    subtitle: "Evening medicinal offering",
    time: "Around 6:00 PM",
    theme: "alms", variant: "gilana",
    blurb: "After noon, bhikkhus accept only allowable liquids: kola kenda (green-leaf gruel), king-coconut water, treacle, ginger tea. The Gilanpasa Pooja is the lay-offering of these — \"medicine for the sick\" — taken in small clay cups at dusk in the temple grounds.",
    details: [
      { lbl: "When",    val: "After noon, before sunset" },
      { lbl: "Allowed", val: "Strained juice, treacle, herbal kenda" },
    ],
  },
  {
    id: "buddha-pooja",
    title: "Buddha Pooja",
    sinhala: "බුද්ධ පූජා",
    subtitle: "Flower & lamp offering",
    time: "Multiple times daily",
    theme: "alms", variant: "pooja",
    blurb: "The offering of flowers, oil lamps, incense, and water at the Buddha's image. Each offering is a meditation on impermanence — the flowers will wither, the lamp will burn out, the water will evaporate, the incense will dissolve.",
    details: [
      { lbl: "Flowers", val: "Lotus, sapu, araliya, ehela" },
      { lbl: "Lamps",   val: "Coconut oil with cotton wicks" },
      { lbl: "Recited", val: "Pooja gatha verses in Pali" },
    ],
  },
  {
    id: "pirith",
    title: "Pirith Chanting",
    sinhala: "පිරිත් සජ්ඣායනා",
    subtitle: "Protective recitation",
    time: "Dawn, dusk, and all-night",
    theme: "alms", variant: "pirith",
    blurb: "The chanting of selected suttas for protection, healing, and blessing. White cotton thread (pirith nool) is strung around the chanters and the listener; at the end, a piece is tied around the wrist as a blessing.",
    details: [
      { lbl: "Common",   val: "Mangala, Ratana, Karaniya-metta suttas" },
      { lbl: "All-night", val: "Sath Bohddhi Pirith — 24-hour recitation" },
    ],
  },
];

/* ============================================================
   EVENTS LANDING PAGE
   ============================================================ */
function EventsPage({ onNavigate }) {
  const [openEvent, setOpenEvent] = React.useState(null);

  if (openEvent) {
    const all = [...POYA_DAYS, ...DAILY_OBSERVANCES];
    const ev = all.find((e) => e.id === openEvent);
    if (ev) return <EventDetail event={ev} onBack={() => setOpenEvent(null)}/>;
  }

  // Upcoming = the Poya day whose date is nearest now, falling back to Vesak
  const upcoming = POYA_DAYS.find((d) => d.id === "vesak");

  return (
    <div className="rw-page">
      <header className="rw-page__header">
        <div className="rw-container">
          <Eyebrow>Events</Eyebrow>
          <h1 className="rw-page__title">Sacred Days &amp; Observances</h1>
          <p className="rw-page__lead">
            The Sinhala Buddhist calendar follows the moon. Each full moon — Poya — carries the memory of one event from the Buddha's life or from the early history of the Dhamma. Daily rituals at the temple mark the passage of every dawn and noon.
          </p>
        </div>
      </header>

      {/* Featured / upcoming event */}
      <section className="rw-section rw-section--tight">
        <div className="rw-container">
          <FadeIn className="rw-event-feature" onClick={() => setOpenEvent(upcoming.id)}>
            <div className="rw-event-feature__scene">
              <EventScene theme={upcoming.theme}/>
              <div className="rw-event-feature__scrim"/>
            </div>
            <div className="rw-event-feature__body">
              <Eyebrow light>Up next · {upcoming.date}</Eyebrow>
              <h2 className="rw-event-feature__title">{upcoming.title}</h2>
              <p className="rw-event-feature__sub">{upcoming.subtitle}</p>
              <p className="rw-event-feature__blurb">{upcoming.blurb}</p>
              <Button variant="hero" size="md" onClick={(e) => { e.stopPropagation(); setOpenEvent(upcoming.id); }}>
                Read more about {upcoming.name}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* All Poya days — calendar grid */}
      <section className="rw-section rw-section--cream">
        <div className="rw-container">
          <SectionHeading
            eyebrow="The Twelve Poya Days"
            title="A Year of Full Moons"
            subtitle="The Sinhala calendar gives each full moon a name and a story. Tap any month to read its history."
          />
          <div className="rw-poya-grid">
            {POYA_DAYS.map((p, i) => (
              <FadeIn key={p.id} delay={(i % 4) * 0.08}>
                <button className={`rw-poya-card rw-poya-card--${p.theme}`} onClick={() => setOpenEvent(p.id)}>
                  <div className="rw-poya-card__moon">
                    <div className="rw-poya-card__phase"/>
                  </div>
                  <div className="rw-poya-card__body">
                    <div className="rw-poya-card__month">{p.month}</div>
                    <div className="rw-poya-card__name">{p.name}</div>
                    <div className="rw-poya-card__sinhala">{p.sinhala}</div>
                    <p className="rw-poya-card__sub">{p.subtitle}</p>
                    <span className="rw-poya-card__date">{p.date}</span>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Daily observances */}
      <section className="rw-section">
        <div className="rw-container">
          <SectionHeading
            eyebrow="Daily Observances"
            title="The Rhythm of the Temple"
            subtitle="Five rituals mark every day at the temple — from the first alms before sunrise to the last protective chant after dark."
          />
          <div className="rw-daily-grid">
            {DAILY_OBSERVANCES.map((d, i) => (
              <FadeIn key={d.id} delay={(i % 3) * 0.1}>
                <button className="rw-daily-card" onClick={() => setOpenEvent(d.id)}>
                  <div className="rw-daily-card__time">
                    <div className="rw-daily-card__sun">
                      <DailySun id={d.id}/>
                    </div>
                    <span>{d.time}</span>
                  </div>
                  <h3 className="rw-daily-card__title">{d.title}</h3>
                  <div className="rw-daily-card__sinhala">{d.sinhala}</div>
                  <p className="rw-daily-card__sub">{d.subtitle}</p>
                  <span className="rw-daily-card__more">Read <Icon name="arrow" size={12} color="#d4af37"/></span>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ad slot */}
      <div className="rw-container rw-ad-wrap">
        <AdSlot id="home-bottom" size="leaderboard" label="Events — bottom"/>
      </div>
    </div>
  );
}

/* Small inline icon for daily ritual time-of-day */
function DailySun({ id }) {
  if (id === "ude-danaya") {
    // sun rising over horizon
    return (
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <line x1="0" y1="24" x2="32" y2="24" stroke="#d4af37" strokeWidth="1.5"/>
        <circle cx="16" cy="20" r="7" fill="#f7d94e"/>
        <g stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round">
          <line x1="16" y1="6"  x2="16" y2="10"/>
          <line x1="6"  y1="18" x2="9"  y2="18"/>
          <line x1="23" y1="18" x2="26" y2="18"/>
          <line x1="9"  y1="13" x2="11" y2="15"/>
          <line x1="23" y1="13" x2="21" y2="15"/>
        </g>
      </svg>
    );
  }
  if (id === "dawal-danaya") {
    // full sun
    return (
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <circle cx="16" cy="16" r="6" fill="#f7d94e"/>
        <g stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round">
          <line x1="16" y1="2"  x2="16" y2="6"/>
          <line x1="16" y1="26" x2="16" y2="30"/>
          <line x1="2"  y1="16" x2="6"  y2="16"/>
          <line x1="26" y1="16" x2="30" y2="16"/>
          <line x1="6"  y1="6"  x2="9"  y2="9"/>
          <line x1="23" y1="23" x2="26" y2="26"/>
          <line x1="6"  y1="26" x2="9"  y2="23"/>
          <line x1="23" y1="9"  x2="26" y2="6"/>
        </g>
      </svg>
    );
  }
  if (id === "gilanpasa") {
    // setting sun
    return (
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <line x1="0" y1="22" x2="32" y2="22" stroke="#c77b2b" strokeWidth="1.5"/>
        <path d="M 9 22 A 7 7 0 0 1 23 22 Z" fill="#c77b2b"/>
        <g stroke="#c77b2b" strokeWidth="1.5" strokeLinecap="round">
          <line x1="3"  y1="14" x2="7"  y2="16"/>
          <line x1="29" y1="14" x2="25" y2="16"/>
          <line x1="16" y1="8"  x2="16" y2="12"/>
        </g>
      </svg>
    );
  }
  if (id === "buddha-pooja") {
    // lotus
    return (
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <g stroke="#d4af37" strokeWidth="1.4" fill="none" strokeLinecap="round">
          <ellipse cx="16" cy="20" rx="3" ry="8"/>
          <ellipse cx="11" cy="18" rx="3" ry="7" transform="rotate(-30 11 18)"/>
          <ellipse cx="21" cy="18" rx="3" ry="7" transform="rotate(30 21 18)"/>
          <ellipse cx="8"  cy="20" rx="2.5" ry="6" transform="rotate(-55 8 20)"/>
          <ellipse cx="24" cy="20" rx="2.5" ry="6" transform="rotate(55 24 20)"/>
          <circle cx="16" cy="22" r="1.6" fill="#d4af37"/>
        </g>
      </svg>
    );
  }
  // pirith — moon/stars
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <path d="M 22 16 A 8 8 0 1 1 14 8 A 6 6 0 0 0 22 16 Z" fill="#d4af37"/>
      <circle cx="6" cy="8" r="1" fill="#d4af37"/>
      <circle cx="26" cy="26" r="1" fill="#d4af37"/>
      <circle cx="10" cy="26" r="0.8" fill="#d4af37"/>
    </svg>
  );
}

/* ============================================================
   EVENT DETAIL VIEW
   ============================================================ */
function EventDetail({ event, onBack }) {
  return (
    <article className="rw-page rw-event-detail">
      <div className="rw-event-detail__hero">
        <EventScene theme={event.theme} variant={event.variant}/>
        <div className="rw-event-detail__scrim"/>
        <div className="rw-container rw-event-detail__hero-inner">
          <button className="rw-back" onClick={onBack}>
            <Icon name="arrowLeft" size={14}/> <span>All events</span>
          </button>
          <Eyebrow light>{event.eyebrow || event.subtitle}</Eyebrow>
          <h1 className="rw-event-detail__title">{event.title}</h1>
          {event.sinhala && <div className="rw-event-detail__sinhala">{event.sinhala}</div>}
          <p className="rw-event-detail__sub">{event.subtitle}</p>
          {event.date && <div className="rw-event-detail__date">{event.date}</div>}
        </div>
      </div>

      <div className="rw-container rw-container--prose rw-event-detail__body">
        <FadeIn>
          <p className="rw-lede">{event.blurb}</p>

          <div className="rw-event-detail__grid">
            {event.details.map((d, i) => (
              <div key={i} className="rw-detail-row">
                <div className="rw-detail-row__lbl">{d.lbl}</div>
                <div className="rw-detail-row__val">{d.val}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {event.extended && (
          <FadeIn delay={0.15}>
            <h3 className="rw-h3">What to expect at the stupa</h3>
            <p className="rw-body">
              On the day itself, the courtyard fills before dawn. Pilgrims wear white. Each carries a small bowl — flowers, oil for a lamp, sometimes a stick of incense. The circumambulation is unhurried; people stop where they need to and continue when they are ready. The chanting from the loudspeakers is in Pali, but it doesn't matter if you don't follow the words. The voices, the dome, the soft pressure of so many bare feet on the sand — that is the meaning.
            </p>
            <p className="rw-body">
              By dusk the lights come up. If the moon is clear, it appears directly above the pinnacle from the east entrance — a coincidence of orientation that has been remarked on for centuries.
            </p>
          </FadeIn>
        )}

        <FadeIn delay={0.2}>
          <div className="rw-event-cta">
            <h3 className="rw-h3">Plan your visit</h3>
            <p className="rw-body">
              The stupa is open 24 hours. On Poya days, the courtyard is busiest between 4&nbsp;AM and 8&nbsp;AM, and again between 6&nbsp;PM and 11&nbsp;PM. Bring water, a light shawl, and prepare to walk in bare feet. Photography is permitted in the outer courtyard.
            </p>
            <div className="rw-event-cta__row">
              <Button variant="secondary" size="md">
                <Icon name="location" size={14} style={{ marginRight: 8 }}/>
                Get directions
              </Button>
              <Button variant="ghost" size="md">
                <Icon name="check" size={14} style={{ marginRight: 8 }}/>
                Add to calendar
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>

      <section className="rw-section rw-section--cream rw-section--tight">
        <div className="rw-container rw-container--prose">
          <FadeIn><FeedbackForm compact/></FadeIn>
        </div>
      </section>
    </article>
  );
}

Object.assign(window, { EventsPage, EventDetail, POYA_DAYS, DAILY_OBSERVANCES });
