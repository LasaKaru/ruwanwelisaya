/* eslint-disable no-undef */
/* community.jsx — forum + lamp offering */

const FORUM_POSTS = [
  {
    avatar: "AS",
    name: "Anura Senanayake",
    where: "Kandy, Sri Lanka",
    when: "2 hours ago",
    title: "First pilgrimage with my grandmother",
    body: "We left at 4am to catch the first light on the dome. She is 83 and walked the full circumambulation without resting. I am grateful for every step we took together. The silence at that hour is something I will carry.",
    likes: 124, replies: 18,
  },
  {
    avatar: "PK",
    name: "Priya Kumarasinghe",
    where: "Anuradhapura",
    when: "yesterday",
    title: "Lighting an oil lamp on Poya day — what to know",
    body: "A few practical notes for first-time visitors. The lamp pavilion is to the south-east of the main stupa. Bring your own coconut oil if possible; small bottles are sold at the stalls but stocks run out by mid-morning. Wear white. Photography is permitted in the courtyard but not at the offering itself.",
    likes: 88, replies: 11,
  },
  {
    avatar: "RD",
    name: "Roshan Dissanayake",
    where: "Melbourne, AU",
    when: "3 days ago",
    title: "Returning after twenty years",
    body: "I left Sri Lanka in 2004. This March I returned with my daughter, who has never seen the stupa. To watch her walk up to the elephant wall and trace one of the carvings with her finger — that was the journey. The site is more cared-for than I remember.",
    likes: 201, replies: 27,
  },
];

function LampOffering() {
  const [lit, setLit] = React.useState(false);
  const [count, setCount] = React.useState(8432);
  const [showBlessing, setShowBlessing] = React.useState(false);

  const light = () => {
    if (lit) return;
    setLit(true);
    setCount((c) => c + 1);
    setTimeout(() => setShowBlessing(true), 600);
    setTimeout(() => { setLit(false); setShowBlessing(false); }, 5000);
  };

  return (
    <div className="rw-lamp">
      <Eyebrow light>Light a Virtual Lamp</Eyebrow>
      <p className="rw-lamp__lead">
        Offer a virtual lamp as an act of devotion. Each light represents a moment of mindfulness and merit shared with all beings.
      </p>

      <button className={`rw-lamp__btn ${lit ? "is-lit" : ""}`} onClick={light} aria-label="Light the lamp">
        <span className="rw-lamp__glow" aria-hidden="true"/>
        <svg viewBox="0 0 64 80" className="rw-lamp__svg" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
          {lit && (
            <path d="M32 2 Q26 8 30 14 Q32 11 32 14 Q34 11 34 14 Q38 8 32 2 Z" fill="#f7d94e" stroke="none" className="rw-lamp__flame"/>
          )}
          <path d="M30 14 L34 14 L33 22 L31 22 Z" fill="currentColor"/>
          <ellipse cx="32" cy="30" rx="20" ry="4"/>
          <path d="M12 30 Q12 44 22 47 L42 47 Q52 44 52 30"/>
          <path d="M26 47 L26 58 L38 58 L38 47"/>
          <ellipse cx="32" cy="60" rx="16" ry="3"/>
          <ellipse cx="32" cy="64" rx="22" ry="4"/>
        </svg>
        {!lit && <span className="rw-lamp__prompt">Tap to Light</span>}
      </button>

      {showBlessing && (
        <div className="rw-lamp__blessing">
          <p className="rw-lamp__quote">&ldquo;May this light dispel the darkness of ignorance.&rdquo;</p>
          <p className="rw-lamp__quote-src">— a blessing for all beings</p>
        </div>
      )}

      <div className="rw-lamp__counter">
        <div className="rw-lamp__counter-lbl">Virtual Lamps Offered</div>
        <div className="rw-lamp__counter-val">{count.toLocaleString()}</div>
      </div>
    </div>
  );
}

function ForumPost({ post }) {
  const [liked, setLiked] = React.useState(false);
  return (
    <article className="rw-post">
      <div className="rw-post__head">
        <div className="rw-avatar">{post.avatar}</div>
        <div className="rw-post__meta">
          <div className="rw-post__name">{post.name}</div>
          <div className="rw-post__sub">{post.where} · {post.when}</div>
        </div>
      </div>
      <h3 className="rw-post__title">{post.title}</h3>
      <p className="rw-post__body">{post.body}</p>
      <div className="rw-post__actions">
        <button className={`rw-action ${liked ? "is-on" : ""}`} onClick={() => setLiked(!liked)}>
          <Icon name="heart" size={16}/>
          <span>{post.likes + (liked ? 1 : 0)}</span>
        </button>
        <button className="rw-action">
          <Icon name="chat" size={16}/>
          <span>{post.replies} replies</span>
        </button>
        <button className="rw-action">
          <Icon name="share" size={16}/>
          <span>Share</span>
        </button>
      </div>
    </article>
  );
}

function CommunityPage() {
  return (
    <div className="rw-page">
      <header className="rw-page__header">
        <div className="rw-container">
          <Eyebrow>Community</Eyebrow>
          <h1 className="rw-page__title">Pilgrim Voices</h1>
          <p className="rw-page__lead">
            Stories, guidance, and reflections from devotees and visitors. Share your own pilgrimage or read what others have walked through.
          </p>
        </div>
      </header>

      <section className="rw-lamp-section">
        <div className="rw-container rw-container--narrow">
          <FadeIn><LampOffering/></FadeIn>
        </div>
      </section>

      <section className="rw-section">
        <div className="rw-container rw-container--prose">
          <div className="rw-forum-head">
            <h2 className="rw-h2">Recent Reflections</h2>
            <Button variant="secondary" size="sm">New Post</Button>
          </div>
          <div className="rw-forum">
            {FORUM_POSTS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}><ForumPost post={p}/></FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { CommunityPage, LampOffering, ForumPost });
