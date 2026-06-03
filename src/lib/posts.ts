export interface BodyBlock {
  type: 'p' | 'h2' | 'h3' | 'quote' | 'list';
  text?: string;
  items?: string[];
}

export interface PostSeo {
  description: string;
  keywords: string[];
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  when: string;
  read: string;
  kind: string;
  seo: PostSeo;
  body: BodyBlock[];
}

export const POSTS: Post[] = [
  {
    slug: 'first-time-pilgrim-guide',
    title: "A First-Time Pilgrim's Guide to Anuradhapura",
    excerpt: 'What to wear, when to arrive, where to leave your shoes, and how to walk the Atamasthana in a single day without rushing the sacred.',
    category: 'Guide', author: 'Hiruni Wickramasinghe', when: 'May 4, 2026', read: '8 min', kind: 'golden',
    seo: { description: "Complete first-time pilgrim's guide to Ruwanwelisaya and the Atamasthana of Anuradhapura.", keywords: ['Ruwanwelisaya guide','Anuradhapura pilgrim','first time temple visit Sri Lanka','Atamasthana','sacred sites Sri Lanka','Buddhist temple etiquette'] },
    body: [
      { type:'p', text:"The first time you walk toward the Ruwanwelisaya from the east entrance, you see the dome before you see the wall. It rises out of the line of trees the way a moon rises — slowly, then all at once. By the time you reach the elephant-carved base, you've already taken your shoes off in the small bamboo rack a hundred metres back, and the warm sand has begun to teach your feet the temperature of the morning. Every first-time visit is shaped by a handful of small decisions made before you arrive." },
      { type:'h2', text:'What to wear' },
      { type:'p', text:"White is correct. It is not required, but it is correct. Light cotton, knees and shoulders covered, a shawl or sarong easy to wrap. Avoid prints with imagery of the Buddha. Hats and sun visors should come off inside the inner courtyard. Footwear is removed completely before the elephant wall; there are racks, but for valuables, carry them in a cloth bag." },
      { type:'h2', text:'When to arrive' },
      { type:'p', text:"There are three arrival windows worth knowing. Dawn — between 5:30 and 7:00 AM, when the chanting starts and the light catches the eastern face of the dome. Mid-morning around 9:30, when the heat is gathering but the crowds haven't quite arrived. The long golden hour from 4:30 PM through sunset, when the dome shifts from cream to amber to rose. Avoid midday." },
      { type:'h2', text:'Walking the Atamasthana' },
      { type:'p', text:"The Atamasthana — the eight sacred places of Anuradhapura — can be walked in one full day if you start at dawn. The traditional order begins at the Sri Maha Bodhi, then moves clockwise: Ruwanwelisaya, Thuparamaya, Lovamahapaya, Abhayagiriya, Jetavanaramaya, Mirisaweti, Lankaramaya. Each site has its own etiquette." },
      { type:'h2', text:'Photography' },
      { type:'p', text:"Photography is permitted in the outer courtyards and of the stupa, elephant wall, and moonstones. It is not permitted at active offering chambers or with your back to a Buddha image. Drones are banned across the entire Sacred City." },
      { type:'h2', text:'Practical kit' },
      { type:'p', text:"Bring water. Bring a small offering: a few stems of lotus or sapu (Rs. 100–200), a small coconut-oil bottle for the lamp pavilion. Bring a notebook. Leave behind: leather accessories, alcohol, meat, gum, and any speaker device." },
      { type:'h2', text:'Etiquette inside the courtyard' },
      { type:'p', text:"Walk slowly. Speak only when necessary, and softly. Never point feet at the stupa or at a monk. Don't touch Buddha images. If a bhikkhu walks past, step aside slightly. Offerings of flowers go on the dedicated trays." },
      { type:'h2', text:'Closing notes' },
      { type:'p', text:"The site is open 24 hours. A 3 AM visit during a Poya night is one of the most moving experiences available to a traveller in Sri Lanka. Nobody minds your accent, your faith, or your reasons. The Ruwanwelisaya has been a site of welcome for over two thousand years." },
    ],
  },
  {
    slug: 'what-to-wear-temple-sri-lanka',
    title: 'What to Wear When Visiting a Buddhist Temple in Sri Lanka',
    excerpt: 'White cotton, covered knees and shoulders, no leather, and a few things you might not have thought of. A complete dress-code guide.',
    category: 'Guide', author: 'Priya Kumarasinghe', when: 'May 1, 2026', read: '6 min', kind: 'devotion',
    seo: { description: 'Practical dress code for Buddhist temples in Sri Lanka — what to wear, what to avoid, sarong guide.', keywords: ['temple dress code Sri Lanka','what to wear Anuradhapura','Buddhist temple clothing','sarong how to wear','modest dress Sri Lanka'] },
    body: [
      { type:'p', text:"Sri Lankan Buddhist temples don't enforce dress rules at the gate. The expectation is cultural, not regulatory. The temple is treated as a quiet, formal, dignified place, and you dress accordingly." },
      { type:'h2', text:'The core rule: white, cotton, covered' },
      { type:'p', text:"On Poya days and at the larger sites, local Buddhists wear pure white. You are not expected to wear white as a visitor, but understated solid colours are correct: cream, soft beige, dove grey, pale blue. Knees and shoulders should be covered." },
      { type:'h2', text:'Specific dos and don\'ts' },
      { type:'p', text:"Do bring a shawl or scarf. Do remove your hat in the inner courtyard. Don't wear sunglasses indoors. Don't wear anything in leather where the leather is visible. The convention against leather is loose, but a quiet swap to cloth or rubber is appreciated." },
      { type:'h2', text:'Footwear' },
      { type:'p', text:"You will take your shoes off before the elephant wall — there is no exception. Cheap rubber slippers are perfect because you'll be putting them on and taking them off several times in a day. Many pilgrims bring a small cotton bag and simply carry their shoes." },
      { type:'h2', text:'Sarong: how to wear one' },
      { type:'p', text:"Buy a plain colour — solid white, beige, or muted indigo. To wear: step into the loop, hold both top corners out, pull the right corner across to your left hip, then fold the left corner over and tuck it behind the right at the waist." },
      { type:'h2', text:'On Poya days' },
      { type:'p', text:"Full-moon Poya days are different. If you are visiting on a Poya day — Vesak, Poson, Esala, or any month's full moon — wear white if you possibly can. A simple white t-shirt and white loose trousers is enough." },
    ],
  },
  {
    slug: 'best-time-to-visit-anuradhapura',
    title: 'The Best Time to Visit Anuradhapura — Month by Month',
    excerpt: 'Weather, festivals, crowds, costs, and the case for each season.',
    category: 'Guide', author: 'Roshan Dissanayake', when: 'Apr 28, 2026', read: '9 min', kind: 'dawn',
    seo: { description: 'Month-by-month guide to visiting Anuradhapura — weather, Poya festivals, monsoon, costs.', keywords: ['Anuradhapura best time to visit','Sri Lanka monsoon','Vesak Poson dates 2026','Sri Lanka weather month by month'] },
    body: [
      { type:'p', text:"Anuradhapura sits in the dry zone of north-central Sri Lanka, which means its weather pattern is the inverse of the more famous wet-zone coasts. When Galle is being rained on, Anuradhapura is gold-light and easy. When Galle is full of sunburned travellers, Anuradhapura is in its monsoon." },
      { type:'h2', text:'January — Duruthu Poya, cool and clear' },
      { type:'p', text:"January is one of the two best months. Dry, cool by Sri Lankan standards (24–32°C), and quiet. Photography is excellent — clear skies, low haze, and long golden-hour shadows on the elephant wall." },
      { type:'h2', text:'May — Vesak Poya, the holiest day' },
      { type:'p', text:"Vesak is the highlight of the Buddhist year. The country is transformed. Streets are lit with paper lanterns, bamboo pandals tell jataka stories, and every roadside has dansel — free meals served to anyone walking by. Book accommodation a month ahead." },
      { type:'h2', text:'June — Poson Poya, pilgrimage to Mihintale' },
      { type:'p', text:"Poson commemorates the arrival of Buddhism to Sri Lanka. The pilgrim climb up Mihintale's 1,840 stone steps is the central rite. Crowds at Mihintale peak on the night before Poson Poya. Stay in Anuradhapura, leave for Mihintale at 4 AM." },
      { type:'h2', text:'August–September — quiet, hot, and golden' },
      { type:'p', text:"August and September are the quietest months for foreign tourism. The site is at its driest, the light is hard and golden, and the ancient tanks shrink to reveal their old stonework. If you want the stupa nearly to yourself, this is the time." },
    ],
  },
  {
    slug: 'atamasthana-walking-guide',
    title: 'Walking the Atamasthana: The Eight Sacred Places of Anuradhapura',
    excerpt: 'A step-by-step guide to visiting all eight sacred sites in the correct order, with timing, etiquette, and what each site means.',
    category: 'Guide', author: 'Hiruni Wickramasinghe', when: 'Apr 25, 2026', read: '11 min', kind: 'golden',
    seo: { description: 'Complete walking guide to the Atamasthana — the eight sacred places of Anuradhapura, with route, timing, and etiquette.', keywords: ['Atamasthana guide','eight sacred places Anuradhapura','Sri Maha Bodhi','Ruwanwelisaya walk','Buddhist pilgrimage route'] },
    body: [
      { type:'p', text:"The Atamasthana — ata-ma-sthana, the eight great places — is the heart of the Buddhist pilgrimage tradition in Anuradhapura. The eight sites are bound together by doctrine: each marks a significant event from the life of the Dhamma in Sri Lanka, beginning with the bodhi tree and moving through the four great dagobas." },
      { type:'h2', text:'The eight sites, in order' },
      { type:'p', text:"The traditional route begins at Sri Maha Bodhi (the sacred Bodhi tree, 2,300 years old and the oldest documented tree in human history). Then: Ruwanwelisaya, Thuparamaya (the first dagoba built in Sri Lanka, in 307 BCE), Lovamahapaya, Abhayagiriya, Jetavanaramaya (once the world's tallest brick structure), Mirisaweti, Lankaramaya." },
      { type:'h2', text:'Practical route advice' },
      { type:'p', text:"Start at Sri Maha Bodhi at dawn. Hire a tuk-tuk driver for the full day (Rs. 3,500–4,500) who knows the route and will wait at each site. Total walking time including all eight sites is 5–7 hours at a respectful pace." },
    ],
  },
  {
    slug: 'anuradhapura-photography-guide',
    title: 'Photography Guide to Ruwanwelisaya and Anuradhapura',
    excerpt: 'Golden hour, Poya days, the elephant wall at dawn, inside the relic chamber — where to stand, when to shoot, what to avoid.',
    category: 'Guide', author: 'Roshan Dissanayake', when: 'Apr 20, 2026', read: '7 min', kind: 'night',
    seo: { description: 'Photography guide to Ruwanwelisaya — best times, golden hour positions, drone rules, and how to photograph the sacred without intruding.', keywords: ['photography Anuradhapura','Ruwanwelisaya photos','Buddhist temple photography','sacred site photography Sri Lanka'] },
    body: [
      { type:'p', text:"The Ruwanwelisaya rewards patient photographers. The dome changes colour every hour — white at noon, cream at 3 PM, gold at 5 PM, rose at 6:15, and a deep warm bronze in the last light. Each colour tells a different story. The challenge is that the most important visual moments happen at the same time as the most crowded ritual moments." },
      { type:'h2', text:'Golden hour positions' },
      { type:'p', text:"The best position for sunset photography is from the outer perimeter of the elephant wall on the eastern side, looking northwest at approximately 5:30 PM. The dome catches the last direct light while the elephant frieze falls into warm shadow. The second-best position is from the road west of the stupa, looking east across the moat, around 6 AM." },
      { type:'h2', text:'Rules and etiquette' },
      { type:'p', text:"Photography is permitted in all outer courtyards. It is not permitted in the offering chambers or shrine rooms when active worship is happening. It is not permitted with your back to a Buddha image. Drones are absolutely prohibited. Long lenses should be used considerately — pilgrims in prayer are not photo subjects." },
    ],
  },
  {
    slug: 'getting-to-anuradhapura',
    title: 'Getting to Anuradhapura: All Your Transport Options',
    excerpt: 'Train from Colombo, bus from Kandy, self-drive on the A9 — and what to do when you arrive without a plan.',
    category: 'Guide', author: 'Priya Kumarasinghe', when: 'Apr 15, 2026', read: '7 min', kind: 'dawn',
    seo: { description: 'How to get to Anuradhapura from Colombo, Kandy, and other Sri Lanka cities — train, bus, car, and what to do on arrival.', keywords: ['getting to Anuradhapura','Anuradhapura train','Colombo to Anuradhapura','how to visit Sacred City Sri Lanka'] },
    body: [
      { type:'p', text:"Anuradhapura is 200 km north of Colombo by road, 4.5 hours by train on the Northern Line, and 3 hours by bus on the A9. It is the easiest major heritage city in Sri Lanka to reach from the capital, with frequent services and no need for advance booking outside festival periods." },
      { type:'h2', text:'By train' },
      { type:'p', text:"The Northern Line from Colombo Fort to Anuradhapura runs 8–10 times daily. Journey time 4–5 hours depending on the service. Second-class reserved (Rs. 320) is comfortable and recommended. The scenic section north of Galgamuwa passes through dry-zone forest and paddy; the landscape changes completely as you cross the dry-zone boundary north of Kurunegala." },
      { type:'h2', text:'By bus' },
      { type:'p', text:"Express buses run from Colombo Bastian Mawatha every hour from 5:30 AM to 10 PM (Rs. 380 normal, Rs. 500 express). Journey time 3.5–4 hours. Intercity express buses from Kandy run roughly every 2 hours (Rs. 250, 3 hours). From Colombo, the express bus is slightly faster than the train, but less scenic." },
    ],
  },
  {
    slug: 'children-and-families-at-ruwanwelisaya',
    title: 'Visiting Ruwanwelisaya with Children and Families',
    excerpt: 'Age-appropriate explanations, the things children actually find magical, practical kit, and timing advice for family pilgrimages.',
    category: 'Guide', author: 'Hiruni Wickramasinghe', when: 'Apr 10, 2026', read: '6 min', kind: 'devotion',
    seo: { description: 'Family guide to visiting Ruwanwelisaya — tips for visiting with children, age-appropriate explanations, and what to bring.', keywords: ['Ruwanwelisaya with children','family pilgrimage Sri Lanka','Buddhist temple kids','Anuradhapura family visit'] },
    body: [
      { type:'p', text:"Children respond to the Ruwanwelisaya in a way that surprises many parents. The scale of the elephant wall, the feel of sand between toes, the bright offerings of lotus and marigold, the sound of chanting from the loudspeakers — these are direct sensory experiences that need no historical framing to be meaningful." },
      { type:'h2', text:'What children notice' },
      { type:'p', text:"The elephant wall always stops children. Count the elephants (there are 1,900 — or as many as you can see before the next corner). The oil lamp pavilion is another favourite — the smell of coconut oil, the small flame, the act of lighting a wick. If you have a child who responds to ritual, the lamp is a good introduction." },
      { type:'h2', text:'Timing for families' },
      { type:'p', text:"The best time for families is the late afternoon, after 4 PM, when the heat is reduced and the crowds are not at their peak. Avoid Poya days for a first visit — the crowds are dense and the etiquette is stricter. A weekday morning in January or February is ideal." },
    ],
  },
  {
    slug: 'accessibility-guide-ruwanwelisaya',
    title: 'Accessibility at Ruwanwelisaya: A Guide for All Pilgrims',
    excerpt: 'Wheelchair access, the inner perimeter path, mobility-aid-friendly routes, and where to call ahead for assistance.',
    category: 'Guide', author: 'Priya Kumarasinghe', when: 'Apr 5, 2026', read: '5 min', kind: 'golden',
    seo: { description: 'Accessibility guide for visiting Ruwanwelisaya — wheelchair paths, mobility aid routes, and assistance contact information.', keywords: ['Ruwanwelisaya wheelchair','accessible temple Sri Lanka','disability Anuradhapura','mobility aid Buddhist site'] },
    body: [
      { type:'p', text:"The Ruwanwelisaya, like many ancient religious sites, was not designed with modern mobility needs in mind. However, the outer circumambulation path — which follows the elephant wall — is paved and largely flat, and can be navigated in a wheelchair with assistance." },
      { type:'h2', text:'The accessible route' },
      { type:'p', text:"The main accessible route enters from the east gate, follows the outer perimeter path clockwise around the elephant wall, and exits through the north gate. The total distance is approximately 1.2 km. The path is stone-paved and has a gentle gradient along the south and west faces." },
      { type:'h2', text:'Where to call ahead' },
      { type:'p', text:"The Department of Archaeology maintains a contact number for the Sacred City. Call at least a day before your visit to arrange assistance — a guide who can help navigate the less accessible inner sections can usually be arranged with 24 hours' notice." },
    ],
  },
  {
    slug: 'dutugemunu-and-the-great-stupa',
    title: 'King Dutugemunu and the Building of the Mahathupa',
    excerpt: 'The warrior-king who unified the island and built the greatest stupa in Asia. The history behind the monument.',
    category: 'History', author: 'Dr. Sarath Jayasuriya', when: 'Apr 22, 2026', read: '12 min', kind: 'dawn',
    seo: { description: 'The history of King Dutugemunu and the construction of the Ruwanwelisaya Mahathupa — sources, archaeology, and the legend behind the sacred monument.', keywords: ['King Dutugemunu','Ruwanwelisaya history','Mahathupa construction','ancient Sri Lanka history','Mahavamsa Ruwanwelisaya'] },
    body: [
      { type:'p', text:"The Ruwanwelisaya was built by King Dutugemunu, who ruled from approximately 161–137 BCE. The Mahavamsa — the great Pali chronicle of Sri Lankan history — devotes twelve chapters to Dutugemunu's life, making him by far the most extensively documented figure in the preclassical history of the island." },
      { type:'h2', text:'The Mahavamsa account' },
      { type:'p', text:"According to the Mahavamsa, Dutugemunu was the son of King Kavantissa of Ruhuna (the southern kingdom) and was raised with the explicit intention of retaking the island from the Chola king Elara, who had held the north for 44 years. The war of reconquest lasted several decades. Dutugemunu's decisive victory at the battle of Vijithapura is described in detail, as is his single combat with Elara at the gates of Anuradhapura." },
      { type:'h2', text:'The construction of the Mahathupa' },
      { type:'p', text:"The Mahathupa — 'great stupa' — was begun by Dutugemunu after his victories. According to the Mahavamsa, 60 million sapphires, 30 million rubies, and relics of all 28 Buddhas were enshrined within the foundation. The accuracy of these figures is debated by modern archaeologists, but the scale of the stupa — rising to 103 metres at its full height — is not in doubt." },
      { type:'h2', text:'The dying king\'s vision' },
      { type:'p', text:"One of the most moving passages in the Mahavamsa describes Dutugemunu's death. The king, who had fallen ill before the stupa was complete, was carried to a window so he could see the dome he had built. He died looking at it. The stupa was completed by his younger brother Saddhatissa." },
    ],
  },
  {
    slug: 'ruwanwelisaya-in-the-mahavamsa',
    title: 'The Ruwanwelisaya in the Mahavamsa: Stories and Sources',
    excerpt: 'What the great Pali chronicle says about the stupa, how reliable it is, and what archaeology has confirmed.',
    category: 'History', author: 'Dr. Sarath Jayasuriya', when: 'Apr 18, 2026', read: '10 min', kind: 'elephant',
    seo: { description: 'The Ruwanwelisaya in the Mahavamsa — what the Pali chronicle records about the Great Stupa, and how it aligns with archaeological evidence.', keywords: ['Mahavamsa Ruwanwelisaya','Sri Lanka chronicle history','Pali chronicle stupa','Buddhist history Sri Lanka archaeology'] },
    body: [
      { type:'p', text:"The Mahavamsa is the foundational text of Sri Lankan Buddhist historiography, composed in Pali in the fifth or sixth century CE from earlier chronicles. It is the most detailed account of Ruwanwelisaya's construction that survives." },
      { type:'h2', text:'What the Mahavamsa records' },
      { type:'p', text:"The chronicle describes the entire construction process in unusual detail: the sourcing of stone, the mixing of mortar, the number of workers, the quality tests applied to each batch of material. The account has a specificity unusual for ancient religious texts." },
      { type:'h2', text:'Archaeological confirmation' },
      { type:'p', text:"Modern archaeology has broadly confirmed the Mahavamsa's timeline. The stupa's foundation layers have been dated by ceramics to the second century BCE. The relic chamber, excavated in the 1940s, contained material consistent with the chronicle's description." },
    ],
  },
  {
    slug: 'history-of-anuradhapura',
    title: 'Anuradhapura: 2,500 Years of Sacred History',
    excerpt: 'From pre-Buddhist settlement to UNESCO World Heritage Site — a chronological survey of the Sacred City.',
    category: 'History', author: 'Dr. Sarath Jayasuriya', when: 'Apr 8, 2026', read: '14 min', kind: 'dawn',
    seo: { description: 'Complete history of Anuradhapura — from pre-Buddhist settlement to the founding of the capital, the reign of Dutugemunu, and its UNESCO designation.', keywords: ['Anuradhapura history','Sacred City history','ancient Sri Lanka','UNESCO World Heritage Sri Lanka'] },
    body: [
      { type:'p', text:"Anuradhapura was the first capital of Sri Lanka and one of the longest-running cities in human history. The city was continuously occupied for over a thousand years, from approximately the fifth century BCE to the tenth century CE, when it was abandoned following the Chola invasion and the capital shifted south to Polonnaruwa." },
      { type:'h2', text:'The pre-Buddhist city' },
      { type:'p', text:"Anuradhapura was settled before the arrival of Buddhism. The earliest archaeological evidence dates to the fifth century BCE. The name appears in ancient Indian sources as 'Anuradhagama' — the settlement of Anuradha, an early governor under the Vijayan period." },
      { type:'h2', text:'The introduction of Buddhism' },
      { type:'p', text:"The arrival of Arahat Mahinda in 247 BCE transformed Anuradhapura from a regional capital into a major religious centre. Within a generation, the city had acquired its first dagoba (Thuparamaya, 307 BCE), its sacred Bodhi tree, and the framework of what would become the most elaborate Buddhist monastic culture outside India." },
    ],
  },
  {
    slug: 'arahat-mahinda-and-the-bodhi-tree',
    title: 'Arahat Mahinda and the Arrival of the Bodhi Tree',
    excerpt: 'The son of Asoka, the king who was hunting a stag, and the sapling that changed the island forever.',
    category: 'History', author: 'Dr. Sarath Jayasuriya', when: 'Mar 28, 2026', read: '9 min', kind: 'devotion',
    seo: { description: 'The story of Arahat Mahinda, the introduction of Buddhism to Sri Lanka, and the arrival of the sacred Bodhi tree sapling from India.', keywords: ['Arahat Mahinda','Sri Maha Bodhi','Bodhi tree history','Buddhism Sri Lanka arrival','Poson Poya history'] },
    body: [
      { type:'p', text:"The story of how Buddhism arrived in Sri Lanka is one of the most precisely dated events in ancient Asian history. In 247 BCE, during the reign of Emperor Asoka of India, his son Arahat Mahinda led a mission to the island. The meeting at Mihintale — where Mahinda encountered King Devanampiya Tissa and converted him — is commemorated every year on Poson Poya." },
      { type:'h2', text:'The Bodhi tree' },
      { type:'p', text:"Two years after Mahinda's arrival, his sister Sanghamitta brought a branch from the original Bodhi tree in Bodh Gaya — the tree under which the Buddha attained enlightenment. This sapling was planted in Anuradhapura in 245 BCE. It is still alive today, making it the oldest documented tree in human history: 2,270 years old, continuously tended by an unbroken line of caretakers." },
    ],
  },
  {
    slug: 'restoration-of-ruwanwelisaya',
    title: 'The 20th Century Restoration of the Ruwanwelisaya',
    excerpt: 'How the great stupa was rebuilt, what was discovered inside, and the debates that continue about the correct height and form.',
    category: 'History', author: 'Dr. Sarath Jayasuriya', when: 'Mar 18, 2026', read: '10 min', kind: 'dawn',
    seo: { description: 'The 20th century restoration of the Ruwanwelisaya — what was found inside, the reconstruction debates, and the archaeology of the relic chamber.', keywords: ['Ruwanwelisaya restoration','stupa restoration Sri Lanka','relic chamber archaeology','Buddhist heritage conservation'] },
    body: [
      { type:'p', text:"When the Ruwanwelisaya was first surveyed by British archaeologists in the 1870s, the great stupa was a pile of vegetation-covered rubble barely recognisable as a human construction. Centuries of neglect after the city's abandonment had reduced the dome to a mound, the elephant wall to scattered carved stones, and the pinnacle had long since collapsed." },
      { type:'h2', text:'The relic chamber excavation' },
      { type:'p', text:"In 1946, the relic chamber was formally excavated under the supervision of the Ceylon Archaeological Survey. The chamber yielded material consistent with the Mahavamsa's description: crystal vessels, gold leaf offerings, fragments of jewellery, and what appear to be bone relics." },
      { type:'h2', text:'Restoration debates' },
      { type:'p', text:"The restoration of the stupa to its current form was completed in stages between 1940 and 1988. The project was not without controversy. Several architectural historians questioned whether the reconstructed profile — with its high shoulder and abrupt transition from drum to dome — accurately reflects the original form." },
    ],
  },
  {
    slug: 'vesak-2026-around-the-stupa',
    title: 'Vesak 2026: What to Expect Around the Stupa',
    excerpt: 'Pandals, lantern lighting times, free dansel along Abhayawewa Road, traffic notes, and the moments worth standing still for.',
    category: 'Events', author: 'Priya Kumarasinghe', when: 'Apr 18, 2026', read: '8 min', kind: 'lamp',
    seo: { description: 'Complete guide to Vesak 2026 at the Ruwanwelisaya stupa in Anuradhapura.', keywords: ['Vesak 2026','Vesak Anuradhapura','Vesak Ruwanwelisaya','Sri Lanka Vesak guide','Buddhist festival May'] },
    body: [
      { type:'p', text:"Vesak is the most important day in the Buddhist year. It commemorates three events from the Buddha's life — his birth, his enlightenment, and his passing into parinibbana — which all occurred on the full moon of the month of Vesak. In 2026, Vesak Poya falls on Friday, May 1." },
      { type:'h2', text:'The three days' },
      { type:'p', text:"Day one (April 30): preparation. Lanterns hang in the evening. Day two (May 1, the Poya): the most important day. Devotees arrive before dawn. Pandals lit by 7 PM. Tens of thousands circumambulate the stupa between 8 PM and midnight. Day three (May 2): rest and reflection." },
      { type:'h2', text:'Lantern lighting times' },
      { type:'p', text:"Lanterns are lit at dusk — approximately 6:15 PM in Anuradhapura in early May. The best photography window is 6:30–7:30 PM, after the lights are on but before full dark." },
      { type:'h2', text:'Dansel' },
      { type:'p', text:"Free food stalls (dansel) are set up along all major roads. The main concentrations are along Abhayawewa Road, Maithripala Senanayake Mawatha, and the road around Nuwarawewa. Plan to eat at three or four different dansel stalls over the course of an evening." },
    ],
  },
  {
    slug: 'poson-pilgrimage-to-mihintale',
    title: 'The Poson Poya Pilgrimage to Mihintale',
    excerpt: '1,840 stone steps, an all-night climb, and the rock from which Mahinda called King Tissa\'s name.',
    category: 'Events', author: 'Roshan Dissanayake', when: 'May 18, 2026', read: '8 min', kind: 'procession',
    seo: { description: 'Complete guide to the Poson Poya pilgrimage to Mihintale — the 1,840 stone steps and Aradhana Gala.', keywords: ['Poson Poya','Mihintale pilgrimage','Aradhana Gala','Buddhist festival June','1840 steps Mihintale'] },
    body: [
      { type:'p', text:"Poson Poya commemorates the arrival of Buddhism in Sri Lanka in 247 BCE. The central rite is the pilgrimage up Mihintale's 1,840 stone steps to Aradhana Gala, the rock from which Mahinda first spoke to King Tissa. In 2026, Poson Poya falls on Monday, June 1." },
      { type:'h2', text:'The climb' },
      { type:'p', text:"The full pilgrim climb consists of three sections: 300 steps to the alms hall, 800 more to the upper plaza, and 700 to Aradhana Gala itself. Total climbing time is 60–90 minutes at a moderate pace." },
      { type:'h2', text:'When to climb' },
      { type:'p', text:"The best windows are: dawn (3 AM–6 AM) to be at the summit for sunrise; or the night climb (6 PM–11 PM) when stairs are lit by oil lamps." },
      { type:'h2', text:'Aradhana Gala' },
      { type:'p', text:"Aradhana Gala is a flat outcrop with views of the Ruwanwelisaya and other dagobas. On Poson night, hundreds of oil lamps cover the surface; the rock glows from a kilometre away." },
    ],
  },
  {
    slug: 'esala-perahera-connection',
    title: 'Esala Poya and the Sacred Tooth: Connecting Kandy to Anuradhapura',
    excerpt: 'Why the greatest Buddhist procession in Asia happens in July, and what the Esala observance looks like at the Ruwanwelisaya.',
    category: 'Events', author: 'Dr. Sarath Jayasuriya', when: 'Jun 14, 2026', read: '7 min', kind: 'procession',
    seo: { description: 'Esala Poya and the Sri Lanka Buddhist calendar — the connection between the Kandy Esala Perahera and the Ruwanwelisaya.', keywords: ['Esala Poya','Esala Perahera','Kandy festival','Buddhist calendar Sri Lanka','Tooth Relic Temple'] },
    body: [
      { type:'p', text:"Esala Poya, the July full moon, marks the Buddha's first sermon at the Deer Park in Sarnath and the beginning of the three-month Vas (rains retreat) for bhikkhus. In Sri Lanka, it is also the beginning of the 10-night Esala Perahera in Kandy — the most spectacular religious procession in Asia." },
      { type:'h2', text:'The Esala Perahera' },
      { type:'p', text:"The Kandy Perahera is held over 10 nights culminating on the Esala Poya. Caparisoned elephants, fire-twirlers, whip-crackers, and drummers carry the replica of the Sacred Tooth Relic through the streets of Kandy." },
      { type:'h2', text:'At the Ruwanwelisaya' },
      { type:'p', text:"In Anuradhapura, Esala is marked with a quieter local festival. The stupa is illuminated, special offerings are made, and there is a procession of the sacred relics within the temple complex." },
    ],
  },
  {
    slug: 'stupa-anatomy-guide',
    title: 'The Anatomy of a Stupa: Understanding the Ruwanwelisaya\'s Architecture',
    excerpt: 'What each element means — from the vahalkadas base to the chathra pinnacle — and how to read the structure as a three-dimensional cosmogram.',
    category: 'Architecture', author: 'Archt. Nimal Perera', when: 'Apr 14, 2026', read: '11 min', kind: 'golden',
    seo: { description: 'Complete guide to the architecture of the Ruwanwelisaya stupa — each element explained, from base platforms to pinnacle.', keywords: ['stupa architecture','Ruwanwelisaya structure','dagoba parts explained','Buddhist monument anatomy','chathra pinnacle stupa'] },
    body: [
      { type:'p', text:"A stupa is not simply a monument. It is a three-dimensional cosmogram — a model of the universe — in which every element, from base to pinnacle, carries specific symbolic weight. Understanding the Ruwanwelisaya's architecture means understanding the Buddhist cosmology it represents." },
      { type:'h2', text:'The base: vahalkadas and elephant wall' },
      { type:'p', text:"The lowest element is the ring of 1,900 carved elephants that forms the outer perimeter. Elephants represent the foundation of the earth and the strength of the devotion that sustains the stupa. Above the elephant wall rise the three square terraces (pesavalalu) before the dome begins." },
      { type:'h2', text:'The dome: anda' },
      { type:'p', text:"The dome (anda) represents the cosmic egg from which the world emerged. It is hemisphere-shaped. In the Ruwanwelisaya, the dome is whitewashed annually, symbolising purity." },
      { type:'h2', text:'The pinnacle: chathra and kotha' },
      { type:'p', text:"The nine-tiered chathra parasols represent the nine levels of Buddhist meditation. The kotha (pinnacle) above them represents the mind of a fully enlightened being." },
    ],
  },
  {
    slug: 'elephant-wall-of-ruwanwelisaya',
    title: 'The Elephant Wall: 1,900 Stone Elephants and What They Mean',
    excerpt: 'The world\'s longest carved elephant frieze, its symbolic significance, and the conservation challenge of maintaining 1,900 stone animals.',
    category: 'Architecture', author: 'Archt. Nimal Perera', when: 'Apr 4, 2026', read: '9 min', kind: 'elephant',
    seo: { description: 'The elephant wall of Ruwanwelisaya — 1,900 carved stone elephants, their symbolism, and the ongoing conservation effort.', keywords: ['Ruwanwelisaya elephant wall','1900 elephants','stone frieze Sri Lanka','Buddhist architecture elephants'] },
    body: [
      { type:'p', text:"The elephant wall of the Ruwanwelisaya is the longest carved elephant frieze in the world: a continuous ring of 1,900 stone elephants, life-size, each slightly different in posture and expression, that forms the outer perimeter of the stupa's base." },
      { type:'h2', text:'The carving tradition' },
      { type:'p', text:"Each elephant is carved from a single block of limestone quarried from the dry-zone formations north of Anuradhapura. The carving style is stylised rather than naturalistic — the elephants are dignified and formal, not attempting photographic accuracy. They hold their heads high, which in Buddhist iconography signals devotion rather than aggression." },
      { type:'h2', text:'Conservation' },
      { type:'p', text:"Several sections of the wall have required major conservation work in recent decades. The primary threats are root damage from vegetation growing in the mortar joints, and tourist contact. Sections of the wall are periodically closed to allow stabilisation." },
    ],
  },
  {
    slug: 'moonstones-of-anuradhapura',
    title: 'The Moonstones of Anuradhapura: Sri Lanka\'s Greatest Carved Thresholds',
    excerpt: 'Semicircular stone carvings at the base of every major entrance — reading the animals, the flames, and the lotus at the threshold.',
    category: 'Architecture', author: 'Archt. Nimal Perera', when: 'Mar 24, 2026', read: '8 min', kind: 'dawn',
    seo: { description: 'The moonstones of Anuradhapura — how to read the symbolic animals, flames, and lotuses carved into these threshold carvings at ancient Buddhist monuments.', keywords: ['moonstones Anuradhapura','sandakada pahana','Buddhist threshold carving','ancient Sri Lanka architecture'] },
    body: [
      { type:'p', text:"The moonstones — sandakada pahana in Sinhala — are semicircular carved stone slabs placed at the foot of staircases leading into sacred buildings. The finest examples in the world are at Anuradhapura, at the Mahasena Palace and Rankoth Vehera, and several are associated with the Ruwanwelisaya complex." },
      { type:'h2', text:'Reading a moonstone' },
      { type:'p', text:"Each moonstone is a diagram of samsara — the cycle of birth and death. Reading from the outer ring inward: flames (samsara itself); then four animals (elephant=birth, horse=disease, lion=old age, bull=death); then a frieze of swans (the liberated soul); then a band of lotus petals; and finally at the centre, the lotus flower (nibbana)." },
    ],
  },
  {
    slug: 'inside-the-relic-chamber',
    title: 'Inside the Relic Chamber: What Was Found Beneath the Dome',
    excerpt: 'The 1946 excavation, the crystal vessels, the bone relics, and what the discovery tells us about the construction of the stupa.',
    category: 'Architecture', author: 'Dr. Sarath Jayasuriya', when: 'Mar 14, 2026', read: '9 min', kind: 'night',
    seo: { description: 'The relic chamber of Ruwanwelisaya — what was discovered in the 1946 excavation, and what the finds tell us about the stupa\'s construction.', keywords: ['Ruwanwelisaya relic chamber','stupa excavation','Buddhist relics Sri Lanka','ancient relic discovery'] },
    body: [
      { type:'p', text:"In 1946, archaeological work on the Ruwanwelisaya reached the relic chamber — the hollow space at the stupa's core where the sacred relics are enshrined. The excavation, conducted by the Ceylon Archaeological Survey, produced some of the most significant finds from any Buddhist monument in Asia." },
      { type:'h2', text:'What was found' },
      { type:'p', text:"The chamber contained crystal and gold vessels of second-century BCE date, fragments of gold leaf inscribed with Brahmi characters, and what appear to be bone relics carefully wrapped in layers of cloth and leaf. The assemblage is consistent with the Mahavamsa's description of the enshrinement ceremony." },
    ],
  },
  {
    slug: 'conservation-challenges-sacred-city',
    title: 'Conservation Challenges at the Sacred City of Anuradhapura',
    excerpt: 'Mass pilgrimage, rising water tables, invasive roots, and the tension between a living religious site and a heritage preservation project.',
    category: 'Conservation', author: 'Dr. Kumari Bandara', when: 'Apr 2, 2026', read: '10 min', kind: 'elephant',
    seo: { description: 'Conservation challenges at Anuradhapura — pilgrimage pressure, water table changes, and the tension between heritage preservation and living religious practice.', keywords: ['Anuradhapura conservation','UNESCO heritage Sri Lanka','Buddhist site preservation','heritage pilgrimage tension'] },
    body: [
      { type:'p', text:"The Ruwanwelisaya and the Sacred City of Anuradhapura face conservation pressures that are unusually complex, because the sites are simultaneously active places of living religious practice and major archaeological heritage areas under UNESCO designation." },
      { type:'h2', text:'The pilgrimage pressure' },
      { type:'p', text:"On Vesak Poya, between 200,000 and 500,000 pilgrims pass through the Sacred City. The foot traffic, the vibration from vehicles on perimeter roads, the offerings left in contact with carved stonework, and the rising humidity from thousands of bodies in enclosed courtyards all contribute to accelerated deterioration." },
      { type:'h2', text:'Water and vegetation' },
      { type:'p', text:"The ancient tanks (wewa) that supplied Anuradhapura were largely allowed to breach during the abandonment period. Modern restoration of the irrigation system has raised the water table in parts of the Sacred City, which accelerates the growth of vegetation in the ancient mortar." },
    ],
  },
  {
    slug: 'how-to-support-ruwanwelisaya',
    title: 'How to Support the Preservation of Ruwanwelisaya',
    excerpt: 'Formal donation channels, what the funds go toward, and the organisations doing the most effective work on the ground.',
    category: 'Conservation', author: 'Dr. Kumari Bandara', when: 'Mar 8, 2026', read: '7 min', kind: 'golden',
    seo: { description: 'How to support Ruwanwelisaya and Anuradhapura heritage preservation — donation channels, conservation organisations, and how to give effectively.', keywords: ['donate Ruwanwelisaya','support Buddhist heritage','Anuradhapura preservation fund','heritage donation Sri Lanka'] },
    body: [
      { type:'p', text:"The most effective financial support for Ruwanwelisaya preservation flows through a small number of channels. The Department of Archaeology, which maintains primary custodianship of the Sacred City, accepts formal donations but has historically been better at receiving funds than at transparent reporting of their use." },
      { type:'h2', text:'Direct giving' },
      { type:'p', text:"Online donations through this site go directly to a designated preservation fund managed in partnership with the Sri Lanka archaeological community. Funds are allocated: 65% to physical restoration, 20% to ongoing maintenance, 15% to community programs." },
      { type:'h2', text:'What works' },
      { type:'p', text:"The most impactful conservation investments have been: mortar repointing of the elephant wall (2018–2022, significantly slowing deterioration), drainage improvements around the outer perimeter, and installation of solar-powered lighting that eliminated the noise and vibration of diesel generators inside the sacred precinct." },
    ],
  },
  {
    slug: 'climate-change-and-ancient-monuments',
    title: 'Climate Change and Ancient Monuments: What Sri Lanka Faces',
    excerpt: 'Higher temperatures, more intense monsoons, and what they mean for the stone, mortar, and carved surfaces of the Sacred City.',
    category: 'Conservation', author: 'Dr. Kumari Bandara', when: 'Feb 18, 2026', read: '8 min', kind: 'dawn',
    seo: { description: 'Climate change threats to ancient monuments in Sri Lanka — what rising temperatures and changing rainfall mean for the Sacred City of Anuradhapura.', keywords: ['climate change heritage Sri Lanka','ancient monuments climate','Anuradhapura climate threat','Buddhist site conservation'] },
    body: [
      { type:'p', text:"Sri Lanka's ancient heritage faces two distinct climate-related threats: intensifying dry seasons that cause vegetation die-back and root contraction (which destabilises mortar joints), and more intense monsoon events that cause flash erosion of exposed stone surfaces." },
      { type:'h2', text:'Stone and mortar response to temperature' },
      { type:'p', text:"The limestone from which the elephant wall was carved has a high thermal expansion coefficient. In the modern dry zone, peak temperatures now regularly exceed 38°C — several degrees higher than the mid-20th-century baseline. The resulting daily thermal cycling creates micro-fractures that have no historical precedent in the conservation record." },
    ],
  },
  {
    slug: 'pirith-chanting-and-its-meaning',
    title: 'Pirith Chanting: The Sacred Sound of the Ruwanwelisaya',
    excerpt: 'What is being chanted, why it has been chanted continuously for 2,000 years, and how to listen.',
    category: 'Tradition', author: 'Ven. Sumedha Thera', when: 'Apr 6, 2026', read: '8 min', kind: 'night',
    seo: { description: 'Pirith chanting at Ruwanwelisaya — the texts, the tradition, and the meaning of the continuous Pali recitation at the Great Stupa of Anuradhapura.', keywords: ['pirith chanting','Buddhist chanting Sri Lanka','Pali suttas','Ruwanwelisaya sounds','pirith ceremony'] },
    body: [
      { type:'p', text:"The loudspeakers at the Ruwanwelisaya are on 24 hours a day. From them flows a continuous stream of pirith — Pali suttas chanted by bhikkhus in rotation, maintaining an unbroken sound offering to the relics within. The practice is ancient: there is textual evidence for continuous chanting at the stupa from at least the second century CE." },
      { type:'h2', text:'What is being chanted' },
      { type:'p', text:"The core pirith texts are the Mangala Sutta (the discourse on blessings), the Ratana Sutta (the jewel sermon), the Metta Sutta (loving-kindness discourse), and the Karaniya Metta Sutta. Together they take approximately 45 minutes to chant; they are repeated continuously through the day and night." },
      { type:'h2', text:'How to listen' },
      { type:'p', text:"You don't need to understand Pali to listen to pirith. The rhythm, the melody, and the intention are accessible regardless of language. The conventional approach is to sit near one of the speaker poles, face the dome, and let the sound work on you without trying to translate it." },
    ],
  },
  {
    slug: 'lamp-lighting-tradition',
    title: 'The Lamp-Lighting Tradition at Buddhist Temples',
    excerpt: 'What it means to light an oil lamp at a Buddhist temple, the correct way to do it, and why the flame has been continuous here for 2,000 years.',
    category: 'Tradition', author: 'Ven. Sumedha Thera', when: 'Mar 28, 2026', read: '6 min', kind: 'lamp',
    seo: { description: 'The lamp-lighting tradition at Sri Lankan Buddhist temples — meaning, method, and the significance of the continuous flame at Ruwanwelisaya.', keywords: ['lamp lighting Buddhist temple','oil lamp tradition Sri Lanka','temple offering lamp','Buddhist offering ceremony'] },
    body: [
      { type:'p', text:"The oil lamp (pahana) is the most fundamental offering at a Sri Lankan Buddhist temple. It represents wisdom — the dispelling of the darkness of ignorance. It is the offering made before all others, in the early morning and at dusk, at every temple in the country." },
      { type:'h2', text:'How to light a lamp' },
      { type:'p', text:"Lamps are available at the lamp pavilion near the main entrance. Purchase a small bottle of coconut oil (Rs. 100) and a wick from the stall outside. At the pavilion, find an empty clay lamp. Pour a small amount of oil. Light the wick from an existing flame — do not use a lighter directly. Set the lamp in the designated spot. Step back, hold your hands in anjali, and stand quietly for a moment." },
      { type:'h2', text:'The continuous flame' },
      { type:'p', text:"The lamp pavilion at the Ruwanwelisaya has maintained a continuous flame for at least 1,500 years — the flame has never been allowed to go out entirely. In the tradition, a flame lit from this lamp carries that unbroken lineage of light." },
    ],
  },
  {
    slug: 'circumambulation-pradakshina',
    title: 'Circumambulation: Why Pilgrims Walk Clockwise Around the Stupa',
    excerpt: 'The tradition of pradakshina, what it means to walk clockwise, and the experience of circumambulating the Ruwanwelisaya at dawn.',
    category: 'Tradition', author: 'Ven. Sumedha Thera', when: 'Mar 8, 2026', read: '5 min', kind: 'procession',
    seo: { description: 'The tradition of circumambulation (pradakshina) at Buddhist stupas — the meaning of walking clockwise and the experience at Ruwanwelisaya.', keywords: ['circumambulation stupa','pradakshina meaning','walking clockwise Buddhist','pilgrimage ritual stupa','Ruwanwelisaya circumambulation'] },
    body: [
      { type:'p', text:"Circumambulation — walking clockwise around a sacred object — is one of the oldest practices in Buddhist devotion. At the Ruwanwelisaya, it is called pradakshina and forms the central act of pilgrimage. The clockwise direction is not arbitrary: it aligns the pilgrim with the path of the sun, maintaining the sacred object always at one's right hand — the side of respect." },
      { type:'h2', text:'The inner and outer circuits' },
      { type:'p', text:"There are two circuits at the Ruwanwelisaya. The outer circuit follows the perimeter of the elephant wall — approximately 700 metres. The inner circuit, close to the base of the dome, is shorter but more intimate. Most pilgrims complete the outer circuit first, then enter the inner courtyard for the second." },
      { type:'h2', text:'The dawn circuit' },
      { type:'p', text:"The best time for circumambulation is dawn, when the light is soft, the chanting is at its most sustained, and the crowd of pilgrims is local rather than touristic. The experience of walking alone, or with a few hundred others in respectful silence, with the dome changing colour as the sun rises — this is one of the genuinely unrepeatable experiences available in Sri Lanka." },
    ],
  },
  {
    slug: 'where-to-eat-and-stay-anuradhapura',
    title: 'Where to Eat and Stay in Anuradhapura',
    excerpt: 'Guesthouses, rest houses, and resorts; rice-and-curry kades and evening restaurants.',
    category: 'Guide', author: 'Priya Kumarasinghe', when: 'May 20, 2026', read: '8 min', kind: 'golden',
    seo: { description: 'Where to eat and stay in Anuradhapura — budget guesthouses, mid-range rest houses, and the best rice-and-curry kades.', keywords: ['Anuradhapura hotels','where to stay Anuradhapura','Anuradhapura restaurants','Tissawewa Rest House'] },
    body: [
      { type:'p', text:"Anuradhapura is a pilgrimage town first and a tourist town second, which shapes where you eat and where you sleep. Accommodation ranges from simple family guesthouses near the bus stand to a handful of genuinely excellent resorts on the outskirts." },
      { type:'h2', text:'Where to stay: budget' },
      { type:'p', text:"The budget tier (Rs. 3,000–6,000/night) is dominated by family-run guesthouses clustered south and east of the Sacred City. Milano Tourist Rest, Lakehouse Tourist Resort on the Tissawewa bund, and Shanthi Guest House are the standout options." },
      { type:'h2', text:'Where to stay: mid-range' },
      { type:'p', text:"The historic Tissawewa Rest House — a colonial-era bungalow inside the Sacred City — is the most atmospheric place to stay in Anuradhapura. Palm Garden Village, a few kilometres out, offers calm garden villas with a pool." },
      { type:'h2', text:'Eating: the rice-and-curry lunch' },
      { type:'p', text:"The defining meal of Anuradhapura is the midday rice and curry at the small local kades. For Rs. 250–400 you receive rice surrounded by six to ten small curries — dhal, jackfruit, beans, pumpkin, fish or chicken curry, pol sambol, and mallung." },
      { type:'h2', text:'Eating: evening' },
      { type:'p', text:"Kottu — chopped godhamba roti stir-fried with vegetables and egg on a hot griddle — is the signature evening meal. The rhythmic clatter of the kottu knives is the sound of an Anuradhapura evening." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find(p => p.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  if (category === 'All') return POSTS;
  return POSTS.filter(p => p.category === category);
}

export function getRelatedPosts(slug: string, count = 3): Post[] {
  const post = getPost(slug);
  if (!post) return POSTS.slice(0, count);
  return POSTS.filter(p => p.slug !== slug && p.category === post.category).slice(0, count);
}

export const CATEGORIES = ['All', 'Guide', 'History', 'Events', 'Architecture', 'Conservation', 'Tradition'];
