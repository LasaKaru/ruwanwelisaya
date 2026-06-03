import type { Metadata } from 'next';
import { Cinzel, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ruwanwelisaya.com'),
  title: {
    template: '%s | Ruwanwelisaya',
    default: 'Ruwanwelisaya — The Great Stupa of Anuradhapura',
  },
  description:
    'The official digital sanctuary of the Ruwanwelisaya Stupa in Anuradhapura, Sri Lanka. Explore its history, sacred events, pilgrim guides, photo gallery, and support its preservation.',
  keywords: [
    'Ruwanwelisaya',
    'Anuradhapura',
    'Buddhist stupa',
    'Sri Lanka pilgrimage',
    'Mahathupa',
    'Sacred City',
    'Vesak',
    'Poson',
    'Atamasthana',
    'Sri Maha Bodhi',
  ],
  authors: [{ name: 'Ruwanwelisaya Preservation' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Ruwanwelisaya',
    title: 'Ruwanwelisaya — The Great Stupa of Anuradhapura',
    description:
      'Discover the sacred Ruwanwelisaya Stupa — a timeless monument of devotion in Anuradhapura, Sri Lanka.',
    url: 'https://ruwanwelisaya.com/',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ruwanwelisaya — The Great Stupa',
    description: 'Discover the sacred Ruwanwelisaya Stupa — a timeless monument of devotion.',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ruwanwelisaya',
  url: 'https://ruwanwelisaya.com/',
  description: 'The digital sanctuary of the Great Stupa of Anuradhapura, Sri Lanka.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://ruwanwelisaya.com/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const landmarkJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LandmarksOrHistoricalBuildings',
  name: 'Ruwanwelisaya (Ruwanweli Maha Seya)',
  alternateName: 'Mahathupa, The Great Stupa',
  description:
    "One of the world's tallest ancient monuments, built by King Dutugemunu in the 2nd century BCE over relics of the Buddha.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Anuradhapura',
    addressCountry: 'LK',
    streetAddress: 'Abhayawewa Road, Sacred City',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 8.3494, longitude: 80.3964 },
  isAccessibleForFree: true,
  publicAccess: true,
  touristType: ['Buddhist pilgrims', 'Heritage travellers'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(landmarkJsonLd) }}
        />
        {/* Google AdSense: replace ca-pub-XXXX with your publisher ID once approved */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0000000000000000" crossOrigin="anonymous"></script> */}
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
