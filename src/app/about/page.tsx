import { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'About Us | Ruwanwelisaya',
  description: 'About Ruwanwelisaya — a digital sanctuary dedicated to preserving the history, beauty, and spiritual significance of the Great Stupa of Anuradhapura, Sri Lanka.',
};

const VALUES = [
  { icon: 'heart', t: 'Devotion', d: 'Preserving the sacred traditions and spiritual significance of this timeless monument.' },
  { icon: 'globe', t: 'Accessibility', d: 'Making the rich heritage of Ruwanwelisaya accessible to devotees worldwide.' },
  { icon: 'shield', t: 'Preservation', d: 'Supporting the physical conservation and cultural protection of the Great Stupa.' },
  { icon: 'book', t: 'Education', d: 'Sharing knowledge of Buddhist heritage, archaeology, and the history of Anuradhapura.' },
];

export default function AboutPage() {
  return (
    <div className="rw-page">
      <div className="rw-page__hero rw-page__hero--about">
        <div className="rw-page__hero-scrim" />
        <div className="rw-container rw-page__hero-inner">
          <div className="rw-eyebrow rw-eyebrow--light">About</div>
          <h1 className="rw-page__hero-title">A Digital Sanctuary</h1>
        </div>
      </div>

      <div className="rw-container rw-container--prose rw-static">
        <FadeIn>
          <p className="rw-lede">Ruwanwelisaya.com is a digital gateway to the Ruwanwelisaya Maha Stupa — one of the tallest ancient structures in the world and a sacred pilgrimage site for millions of Buddhists.</p>
          <p className="rw-body">Built by King Dutugemunu over 2,300 years ago, the Great Stupa stands as an enduring testament to devotion, craftsmanship, and the resilience of Sri Lankan heritage. Our mission is to make its history, beauty, and spiritual significance accessible to everyone — whether you are planning a pilgrimage, studying Buddhist heritage, or simply seeking inspiration from one of humanity&apos;s greatest architectural achievements.</p>

          <h2 className="rw-article__h2">Our mission</h2>
          <p className="rw-body">We exist to preserve and share. We document the stupa&apos;s history with care, publish practical guidance for pilgrims and travellers, host a community of devotees and visitors, and channel support toward the ongoing conservation of the Sacred City. Every article is researched, written, and reviewed by our editorial team to ensure historical accuracy and respectful representation of Buddhist tradition.</p>

          <h2 className="rw-article__h2">Who we are</h2>
          <p className="rw-body">We are a small, dedicated team of writers, historians, photographers, and Buddhist devotees based in Sri Lanka. Community-submitted content — forum posts, reviews, and photo uploads — is moderated by our team before publication to maintain quality and appropriateness. We are not bots, scrapers, or an AI-generated content farm; every page is crafted by people who care deeply about the legacy of the Ruwanwelisaya.</p>

          <div className="rw-values">
            {VALUES.map(v => (
              <div key={v.t} className="rw-value">
                <span className="rw-value__icon"><Icon name={v.icon} size={24} color="#d4af37" /></span>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>

          <h2 className="rw-article__h2">A note on affiliation</h2>
          <p className="rw-body">This website is a labour of love — built by devotees, for devotees. We are not officially affiliated with the temple administration or any government body, but we work in the spirit of preserving and sharing the stupa&apos;s legacy with the world. Where we earn revenue (through advertising and reader donations), it supports the running of this site and contributions to conservation efforts.</p>
        </FadeIn>
      </div>
    </div>
  );
}
