'use client';
import { useState } from 'react';
import { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Icon, { Lotus } from '@/components/Icon';

const SUBJECTS = [
  'General enquiry',
  'Correction or feedback on an article',
  'Photo submission',
  'Advertising / partnership',
  'Donation question',
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'General enquiry', message: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => setSent(false), 6000);
    }
  };
  const upd = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <div className="rw-page">
      <div className="rw-page__hero rw-page__hero--contact">
        <div className="rw-page__hero-scrim" />
        <div className="rw-container rw-page__hero-inner">
          <div className="rw-eyebrow rw-eyebrow--light">Contact</div>
          <h1 className="rw-page__hero-title">Get in Touch</h1>
        </div>
      </div>

      <div className="rw-container rw-container--prose rw-static">
        <div className="rw-contact-grid">
          <FadeIn className="rw-contact-form-wrap">
            {sent ? (
              <div className="rw-feedback rw-feedback--sent">
                <div className="rw-feedback__sent-mark"><Lotus size={28} color="#d4af37" opacity={0.85} /></div>
                <h3 className="rw-h3" style={{ marginTop: 16 }}>Thank you.</h3>
                <p className="rw-body">Your message has been received. We read every note and reply within a few days.</p>
              </div>
            ) : (
              <form className="rw-donate__form" onSubmit={submit}>
                <div className="rw-donate__grid-2">
                  <div className="rw-donate__group">
                    <label className="rw-donate__lbl">Name</label>
                    <input className="rw-input" type="text" value={form.name} onChange={upd('name')} placeholder="Your name" required />
                  </div>
                  <div className="rw-donate__group">
                    <label className="rw-donate__lbl">Email</label>
                    <input className="rw-input" type="email" value={form.email} onChange={upd('email')} placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="rw-donate__group">
                  <label className="rw-donate__lbl">Subject</label>
                  <select className="rw-input" value={form.subject} onChange={upd('subject')}>
                    {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="rw-donate__group">
                  <label className="rw-donate__lbl">Message</label>
                  <textarea className="rw-input" rows={5} value={form.message} onChange={upd('message')} placeholder="How can we help?" required />
                </div>
                <button type="submit" className="rw-btn rw-btn--primary rw-btn--lg" disabled={!form.name || !form.email || !form.message}>
                  <Icon name="mail" size={16} style={{ marginRight: 8 }} /> Send Message
                </button>
              </form>
            )}
          </FadeIn>

          <FadeIn delay={0.15} className="rw-contact-aside">
            <h3 className="rw-h3">Reach us directly</h3>
            <ul className="rw-contact-list">
              <li><Icon name="mail" size={18} color="#d4af37" /><div><strong>Email</strong><span>hello@ruwanwelisaya.com</span></div></li>
              <li><Icon name="location" size={18} color="#d4af37" /><div><strong>Location</strong><span>Abhayawewa Road, Anuradhapura, Sri Lanka</span></div></li>
              <li><Icon name="clock" size={18} color="#d4af37" /><div><strong>Response time</strong><span>Within 2–4 working days</span></div></li>
            </ul>
            <div className="rw-contact-note">
              <p>For advertising and partnership enquiries, please select that subject so your message reaches the right person. For article corrections, include the post title and the specific detail you&apos;d like reviewed.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
