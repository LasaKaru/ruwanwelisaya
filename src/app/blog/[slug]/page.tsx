import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import GalleryScene from '@/components/GalleryScene';
import AdSlot from '@/components/AdSlot';
import Feedback from '@/components/Feedback';
import Icon from '@/components/Icon';
import { POSTS, getPost, getRelatedPosts, type BodyBlock } from '@/lib/posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const desc = post.seo?.description || post.excerpt;
  return {
    title: `${post.title} | Ruwanwelisaya`,
    description: desc,
    keywords: post.seo?.keywords?.join(', '),
    openGraph: {
      title: post.title,
      description: desc,
      type: 'article',
      url: `https://ruwanwelisaya.com/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: desc,
    },
  };
}

function PostBody({ body, adAfter }: { body: BodyBlock[]; adAfter: number }) {
  return (
    <>
      {body.map((seg, i) => {
        const node = (() => {
          switch (seg.type) {
            case 'h2': return <h2 key={i} className="rw-article__h2">{seg.text}</h2>;
            case 'h3': return <h3 key={i} className="rw-h3">{seg.text}</h3>;
            case 'quote': return <blockquote key={i} className="rw-blog-quote">{seg.text}</blockquote>;
            case 'list': return seg.items ? (
              <ul key={i}>{seg.items.map((item, j) => <li key={j} className="rw-article__li">{item}</li>)}</ul>
            ) : <p key={i} className="rw-body">{seg.text}</p>;
            default: return <p key={i} className="rw-body">{seg.text}</p>;
          }
        })();
        if (i === adAfter) {
          return (
            <div key={`wrap-${i}`}>
              {node}
              <AdSlot id="blog-inline" size="leaderboard" label="In-article" />
            </div>
          );
        }
        return node;
      })}
    </>
  );
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const adAfter = Math.max(2, Math.floor((post.body?.length || 0) / 3));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.seo?.description || post.excerpt,
    keywords: post.seo?.keywords?.join(', '),
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'Ruwanwelisaya' },
    datePublished: post.when,
    articleSection: post.category,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="rw-page rw-blog-detail">
        <div className="rw-blog-detail__hero rw-photo--scene">
          <GalleryScene kind={post.kind} />
          <div className="rw-photo__overlay rw-photo__overlay--strong" />
          <div className="rw-container rw-blog-detail__hero-inner">
            <Link href="/blog" className="rw-back">
              <Icon name="arrowLeft" size={14} /> <span>All posts</span>
            </Link>
            <div className="rw-eyebrow rw-eyebrow--light">{post.category}</div>
            <h1 className="rw-blog-detail__title">{post.title}</h1>
            <div className="rw-blog-detail__meta">
              <span>{post.author}</span>
              <span className="rw-dot" />
              <span>{post.when}</span>
              <span className="rw-dot" />
              <span>{post.read}</span>
            </div>
          </div>
        </div>

        <div className="rw-container rw-container--prose rw-blog-detail__body">
          <FadeIn>
            <p className="rw-lede">{post.excerpt}</p>
            {post.body && <PostBody body={post.body} adAfter={adAfter} />}
          </FadeIn>

          {post.seo?.keywords && (
            <div className="rw-article__tags">
              {post.seo.keywords.slice(0, 6).map(k => (
                <span key={k} className="rw-tag">{k}</span>
              ))}
            </div>
          )}

          <div className="rw-byline">
            <div className="rw-byline__avatar">
              {post.author.split(' ').map(w => w[0]).slice(0, 2).join('')}
            </div>
            <div>
              <div className="rw-byline__name">{post.author}</div>
              <div className="rw-byline__role">Contributor · Ruwanwelisaya editorial team</div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="rw-section rw-section--cream rw-section--tight">
            <div className="rw-container">
              <h2 className="rw-h2" style={{ marginBottom: 28 }}>Continue reading</h2>
              <div className="rw-blog-grid">
                {related.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="rw-post-card">
                    <div className="rw-post-card__img rw-photo--scene">
                      <GalleryScene kind={p.kind} />
                      <div className="rw-photo__overlay" />
                    </div>
                    <div className="rw-post-card__body">
                      <div className="rw-eyebrow">{p.category}</div>
                      <h3 className="rw-post-card__title">{p.title}</h3>
                      <div className="rw-post-card__meta">
                        <span>{p.read}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="rw-section rw-section--tight">
          <div className="rw-container rw-container--prose">
            <FadeIn><Feedback context={post.title} /></FadeIn>
          </div>
        </section>
      </article>
    </>
  );
}
