/* eslint-disable no-undef */
/* feedback.jsx — feedback form with star rating + comment */

function FeedbackForm({ postSlug, compact }) {
  const [stars, setStars] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  const [name, setName]   = React.useState("");
  const [email, setEmail] = React.useState("");
  const [text, setText]   = React.useState("");
  const [sent, setSent]   = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim() || !stars) return;
    setSent(true);
    setTimeout(() => {
      setSent(false); setStars(0); setText(""); setName(""); setEmail("");
    }, 5000);
  };

  if (sent) {
    return (
      <div className={`rw-feedback rw-feedback--sent ${compact ? "is-compact" : ""}`}>
        <div className="rw-feedback__sent-mark">
          <Lotus size={28} color="#d4af37" opacity={0.85}/>
        </div>
        <h3 className="rw-h3" style={{ marginTop: 16 }}>Thank you for sharing.</h3>
        <p className="rw-body">Your reflection has been received. May it be a small light along the way.</p>
      </div>
    );
  }

  return (
    <form className={`rw-feedback ${compact ? "is-compact" : ""}`} onSubmit={submit}>
      <Eyebrow>{compact ? "Quick feedback" : "Share your reflection"}</Eyebrow>
      <h3 className="rw-feedback__title">
        {compact ? "How was your visit?" : "Was this helpful?"}
      </h3>
      <p className="rw-feedback__lead">
        {compact
          ? "Rate your experience and leave a short note. Anonymous is fine."
          : "Tell us if this guidance was useful — or what you'd like us to write next."}
      </p>

      <div className="rw-stars" role="radiogroup" aria-label="Rating">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            type="button"
            key={n}
            role="radio"
            aria-checked={stars === n}
            className={`rw-star ${(hover || stars) >= n ? "is-on" : ""}`}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setStars(n)}
          >
            <Icon name="star" size={26}/>
          </button>
        ))}
      </div>

      {!compact && (
        <div className="rw-feedback__grid">
          <div className="rw-donate__group">
            <label className="rw-donate__lbl">Name (optional)</label>
            <input className="rw-input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Anonymous"/>
          </div>
          <div className="rw-donate__group">
            <label className="rw-donate__lbl">Email (optional)</label>
            <input className="rw-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"/>
          </div>
        </div>
      )}

      <div className="rw-donate__group">
        <label className="rw-donate__lbl">Your message</label>
        <textarea className="rw-input" rows={compact ? 3 : 4}
          value={text} onChange={(e) => setText(e.target.value)}
          placeholder="What stayed with you?" required/>
      </div>

      <Button type="submit" variant="primary" disabled={!stars || !text.trim()}>
        Send Feedback
      </Button>
    </form>
  );
}

Object.assign(window, { FeedbackForm });
