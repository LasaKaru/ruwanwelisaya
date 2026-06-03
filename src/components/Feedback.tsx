'use client';
import { useState } from 'react';
import Icon, { Lotus } from './Icon';

interface FeedbackProps {
  compact?: boolean;
  context?: string;
}

export default function Feedback({ compact, context }: FeedbackProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className={`rw-feedback ${compact ? 'is-compact' : ''} rw-feedback--sent`}>
        <div className="rw-feedback__sent-mark">
          <Lotus size={32} color="#d4af37" opacity={0.8}/>
        </div>
        <h3 className="rw-feedback__title">Thank you 🙏</h3>
        <p style={{fontSize:14,color:'#666',marginTop:8}}>Your feedback helps us serve pilgrims better.</p>
      </div>
    );
  }

  return (
    <div className={`rw-feedback ${compact ? 'is-compact' : ''}`}>
      <Icon name="star" size={22} color="#d4af37"/>
      <h3 className="rw-feedback__title">{compact ? 'Was this helpful?' : 'Share Your Experience'}</h3>
      <p className="rw-feedback__lead">{compact ? 'Rate this page and leave a note.' : `How was your visit${context ? ` to ${context}` : ''}? Your feedback helps future pilgrims.`}</p>
      <div className="rw-stars" role="group" aria-label="Star rating">
        {[1,2,3,4,5].map(n => (
          <button key={n} type="button" className={`rw-star ${n <= (hover || rating) ? 'is-on' : ''}`}
            onClick={() => setRating(n)} onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(0)}
            aria-label={`${n} star`}>
            <Icon name="star" size={28} color={n <= (hover || rating) ? '#d4af37' : 'rgba(212,175,55,0.25)'} stroke={2}/>
          </button>
        ))}
      </div>
      <form onSubmit={submit}>
        <div className="rw-feedback__grid">
          <input className="rw-input" placeholder="Your name" value={name} onChange={e => setName(e.target.value)}/>
          <input className="rw-input" type="email" placeholder="Email (optional)" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <textarea className="rw-input" style={{width:'100%',marginBottom:16}} rows={3} placeholder="Your message..." value={message} onChange={e => setMessage(e.target.value)}/>
        <button type="submit" className="rw-btn rw-btn--primary rw-btn--md" style={{width:'100%'}}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
