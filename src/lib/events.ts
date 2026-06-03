export interface EventDetail { lbl: string; val: string; }

export interface PoyadDay {
  id: string;
  name: string;
  sinhala: string;
  month: string;
  date: string;
  theme: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  blurb: string;
  details: EventDetail[];
  extended?: boolean;
}

export interface DailyObservance {
  id: string;
  title: string;
  sinhala: string;
  subtitle: string;
  time: string;
  theme: string;
  variant: string;
  blurb: string;
  details: EventDetail[];
}

export const POYA_DAYS: PoyadDay[] = [
  {
    id: 'duruthu', name: 'Duruthu Poya', sinhala: 'දුරුතු', month: 'January', date: 'Jan 14, 2026',
    theme: 'poya', eyebrow: 'First Visit', title: 'Duruthu Poya',
    subtitle: "The Buddha's first visit to Sri Lanka",
    blurb: "Commemorates the Buddha's visit to Mahiyangana, in the ninth month after his enlightenment. The first of the three documented visits.",
    details: [
      { lbl: 'Significance', val: "Buddha's first visit to the island" },
      { lbl: 'Major rite', val: 'Duruthu Perahera in Kelaniya' },
      { lbl: 'At the stupa', val: 'Sil observance · pirith chanting' },
    ],
  },
  {
    id: 'navam', name: 'Navam Poya', sinhala: 'නවම්', month: 'February', date: 'Feb 12, 2026',
    theme: 'poya', eyebrow: 'First Council', title: 'Navam Poya',
    subtitle: 'The first Buddhist council and Sangha gathering',
    blurb: "Marks the day Sariputta and Moggallana — the Buddha's two chief disciples — were ordained. Also commemorates the first formal Sangha assembly.",
    details: [
      { lbl: 'Significance', val: 'Appointment of chief disciples' },
      { lbl: 'Major rite', val: 'Navam Perahera in Gangaramaya' },
      { lbl: 'At the stupa', val: "Dawn pooja · alms-giving to bhikkhus" },
    ],
  },
  {
    id: 'medin', name: 'Medin Poya', sinhala: 'මැදින්', month: 'March', date: 'Mar 14, 2026',
    theme: 'poya', eyebrow: "Father's Visit", title: 'Medin Poya',
    subtitle: "The Buddha's return to Kapilavastu",
    blurb: "Commemorates the Buddha's first return to his birthplace to teach his father, King Suddhodana, and the conversion of his son Rahula.",
    details: [
      { lbl: 'Significance', val: "Buddha's visit to his father" },
      { lbl: 'At the stupa', val: 'Reading of the Dhammapada' },
    ],
  },
  {
    id: 'bak', name: 'Bak Poya', sinhala: 'බක්', month: 'April', date: 'Apr 12, 2026',
    theme: 'poya', eyebrow: 'Second Visit', title: 'Bak Poya',
    subtitle: "The Buddha's second visit to Sri Lanka",
    blurb: "The Buddha's second visit, this time to Nagadeepa, to settle a dispute between two Naga kings over a jewelled throne.",
    details: [
      { lbl: 'Significance', val: 'Resolution at Nagadeepa' },
      { lbl: 'At the stupa', val: 'Lighting of 108 oil lamps' },
    ],
  },
  {
    id: 'vesak', name: 'Vesak Poya', sinhala: 'වෙසක්', month: 'May', date: 'May 1, 2026',
    theme: 'vesak', eyebrow: 'The Thrice-Blessed Day', title: 'Vesak Poya',
    subtitle: 'Birth, enlightenment and parinibbana of the Buddha',
    blurb: 'The holiest day in the Buddhist calendar. On a single full moon — separated by years — the Buddha was born, attained enlightenment, and passed into parinibbana. Across Sri Lanka, homes and streets are lit with paper lanterns (kuudu), towering bamboo pandals (thoran) tell jataka stories in painted scenes, and free dansel stalls give food to every passerby.',
    details: [
      { lbl: 'Significance', val: 'Triple anniversary of the Buddha' },
      { lbl: 'Streets', val: 'Vesak kuudu, thoran, bhakti gee' },
      { lbl: 'Free meals', val: 'Dansel along all major roads' },
      { lbl: 'At the stupa', val: 'All-night sil · lantern lighting · pirith' },
    ],
    extended: true,
  },
  {
    id: 'poson', name: 'Poson Poya', sinhala: 'පොසොන්', month: 'June', date: 'Jun 1, 2026',
    theme: 'poson', eyebrow: 'Arrival of the Dhamma', title: 'Poson Poya',
    subtitle: 'Arrival of Buddhism to Sri Lanka',
    blurb: 'In 247 BCE, on the full moon of Poson, Arahat Mahinda — son of Emperor Asoka — met King Devanampiya Tissa at Mihintale and introduced Buddhism to the island. The king was hunting a stag when Mahinda called his name from the rock above. Thousands of pilgrims now climb the 1,840 stone steps of Mihintale to walk where that meeting took place.',
    details: [
      { lbl: 'Significance', val: 'Arahat Mahinda meets King Tissa' },
      { lbl: 'Year', val: '247 BCE' },
      { lbl: 'Site', val: 'Mihintale, 13 km east of the stupa' },
      { lbl: 'Pilgrim climb', val: '1,840 stone steps to Aradhana Gala' },
    ],
    extended: true,
  },
  {
    id: 'esala', name: 'Esala Poya', sinhala: 'ඇසළ', month: 'July', date: 'Jul 1, 2026',
    theme: 'esala', eyebrow: 'First Sermon', title: 'Esala Poya',
    subtitle: 'First sermon · beginning of Vassa · Esala Perahera',
    blurb: "Marks the Buddha's first sermon at Sarnath, the Dhammacakkappavattana Sutta — the setting in motion of the wheel of the Dhamma. Also begins Vas, the three-month rains-retreat for bhikkhus. In Kandy, the Esala Perahera procession of caparisoned elephants, fire-twirlers, whip-crackers and drummers carries the Sacred Tooth Relic through the streets for ten nights.",
    details: [
      { lbl: 'Significance', val: 'First turning of the wheel of Dhamma' },
      { lbl: 'Sermon', val: 'Dhammacakkappavattana Sutta' },
      { lbl: 'Procession', val: '10-night Esala Perahera in Kandy' },
      { lbl: 'Vassa', val: 'Three-month rains retreat begins' },
    ],
    extended: true,
  },
  {
    id: 'nikini', name: 'Nikini Poya', sinhala: 'නිකිණි', month: 'August', date: 'Aug 1, 2026',
    theme: 'poya', eyebrow: 'First Council', title: 'Nikini Poya',
    subtitle: 'Compilation of the Dhamma',
    blurb: "Commemorates the first Buddhist Council, held three months after the Buddha's passing, where 500 arahats led by Ven. Mahakassapa recited and compiled his teachings.",
    details: [
      { lbl: 'Significance', val: 'First Buddhist Council' },
      { lbl: 'Convener', val: 'Ven. Mahakassapa Thera' },
    ],
  },
  {
    id: 'binara', name: 'Binara Poya', sinhala: 'බිනර', month: 'September', date: 'Aug 31, 2026',
    theme: 'poya', eyebrow: 'Bhikkhuni Sasana', title: 'Binara Poya',
    subtitle: 'Founding of the order of nuns',
    blurb: "Marks the Buddha's ascent to Tavatimsa to preach to his mother, and the ordination of Mahapajapati Gotami — establishing the bhikkhuni sasana, the order of nuns.",
    details: [
      { lbl: 'Significance', val: 'Founding of the bhikkhuni order' },
    ],
  },
  {
    id: 'wap', name: 'Wap Poya', sinhala: 'වප්', month: 'October', date: 'Sep 29, 2026',
    theme: 'poya', eyebrow: 'End of Vassa', title: 'Wap Poya',
    subtitle: 'End of the rains retreat',
    blurb: 'Marks the end of the three-month Vassa rains-retreat. Begins the Katina civaraya season — laypeople offer robes to the Sangha in elaborate processions.',
    details: [
      { lbl: 'Significance', val: 'End of Vassa rains-retreat' },
      { lbl: 'Major rite', val: 'Katina civaraya — robe offering' },
    ],
  },
  {
    id: 'il', name: 'Il Poya', sinhala: 'ඉල්', month: 'November', date: 'Oct 29, 2026',
    theme: 'poya', eyebrow: '60 Arahats', title: 'Il Poya',
    subtitle: 'Dispatch of the first 60 arahats',
    blurb: "Commemorates the Buddha dispatching the first 60 arahats to teach the Dhamma — \"Go forth, for the good of the many, for the welfare of the many.\"",
    details: [
      { lbl: 'Significance', val: 'First missionary dispatch' },
    ],
  },
  {
    id: 'unduvap', name: 'Unduvap Poya', sinhala: 'උඳුවප්', month: 'December', date: 'Nov 28, 2026',
    theme: 'poson', eyebrow: 'Sacred Bodhi', title: 'Unduvap Poya',
    subtitle: 'Arrival of the Sri Maha Bodhi sapling',
    blurb: "Marks the arrival of Theri Sanghamitta — Arahat Mahinda's sister — bringing a sapling of the Bodhi tree under which the Buddha attained enlightenment. Planted at Anuradhapura, it grows there still — the oldest authenticated tree in the world.",
    details: [
      { lbl: 'Significance', val: 'Sri Maha Bodhi arrives in Lanka' },
      { lbl: 'Bearer', val: 'Theri Sanghamitta' },
      { lbl: 'Site', val: 'Anuradhapura · 800m from this stupa' },
    ],
  },
];

export const DAILY_OBSERVANCES: DailyObservance[] = [
  {
    id: 'ude-danaya', title: 'Ude Danaya', sinhala: 'උදේ දානය',
    subtitle: 'Morning alms-giving', time: 'Around 6:30 AM',
    theme: 'alms', variant: 'ude',
    blurb: 'The first meal of the day for bhikkhus, traditionally given between dawn and 7am. Laypeople line the path with rice in coconut-wood spoons, dropping it into the alms bowl in silence. The merit is in the giving, not the words.',
    details: [
      { lbl: 'When', val: 'Dawn — before 7:00 AM' },
      { lbl: 'Offered', val: 'Kola kanda, rice, pol sambol, fruit' },
      { lbl: 'Custom', val: 'Receive in silence; no thanks expected' },
    ],
  },
  {
    id: 'dawal-danaya', title: 'Dawal Danaya', sinhala: 'දවල් දානය',
    subtitle: 'Midday alms-giving', time: 'Before 12:00 noon',
    theme: 'alms', variant: 'dawal',
    blurb: 'The principal meal of the day, taken before noon. After this, bhikkhus take no solid food until dawn. Special dawal danayas are often sponsored by families on the seven-day, three-month and anniversary milestones after a death — known as a matakadana.',
    details: [
      { lbl: 'When', val: 'Before solar noon' },
      { lbl: 'Offered', val: 'Rice & curry, kiribath, pittu, kavum' },
      { lbl: 'Matakadana', val: 'Memorial alms for the departed' },
    ],
  },
  {
    id: 'gilanpasa', title: 'Gilanpasa Pooja', sinhala: 'ගිලන්පස පූජා',
    subtitle: 'Evening medicinal offering', time: 'Around 6:00 PM',
    theme: 'alms', variant: 'gilana',
    blurb: 'After noon, bhikkhus accept only allowable liquids: kola kenda (green-leaf gruel), king-coconut water, treacle, ginger tea. The Gilanpasa Pooja is the lay-offering of these — "medicine for the sick" — taken in small clay cups at dusk in the temple grounds.',
    details: [
      { lbl: 'When', val: 'After noon, before sunset' },
      { lbl: 'Allowed', val: 'Strained juice, treacle, herbal kenda' },
    ],
  },
  {
    id: 'buddha-pooja', title: 'Buddha Pooja', sinhala: 'බුද්ධ පූජා',
    subtitle: 'Flower & lamp offering', time: 'Multiple times daily',
    theme: 'alms', variant: 'pooja',
    blurb: "The offering of flowers, oil lamps, incense, and water at the Buddha's image. Each offering is a meditation on impermanence — the flowers will wither, the lamp will burn out, the water will evaporate, the incense will dissolve.",
    details: [
      { lbl: 'Flowers', val: 'Lotus, sapu, araliya, ehela' },
      { lbl: 'Lamps', val: 'Coconut oil with cotton wicks' },
      { lbl: 'Recited', val: 'Pooja gatha verses in Pali' },
    ],
  },
  {
    id: 'pirith', title: 'Pirith Chanting', sinhala: 'පිරිත් සජ්ඣායනා',
    subtitle: 'Protective recitation', time: 'Dawn, dusk, and all-night',
    theme: 'alms', variant: 'pirith',
    blurb: 'The chanting of selected suttas for protection, healing, and blessing. White cotton thread (pirith nool) is strung around the chanters and the listener; at the end, a piece is tied around the wrist as a blessing.',
    details: [
      { lbl: 'Common', val: 'Mangala, Ratana, Karaniya-metta suttas' },
      { lbl: 'All-night', val: 'Sath Bohddhi Pirith — 24-hour recitation' },
    ],
  },
];
