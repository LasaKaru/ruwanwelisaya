/* eslint-disable no-undef */
/* blog.jsx — blog landing + detail view.
   Reads the full 30-post dataset assembled from posts-data-1.jsx and
   posts-data-2.jsx, and renders structured bodies + per-post SEO meta. */

const ALL_POSTS = [].concat(window.POSTS_PART_1 || [], window.POSTS_PART_2 || [], window.POSTS_PART_3 || []);

const CATEGORIES = ["All", "Guide", "History", "Events", "Architecture", "Conservation", "Tradition"];

/* Estimate read-time if not supplied (≈ 200 wpm). */
function estimateRead(post) {
  if (post.read) return post.read;
  const words = (post.body || []).reduce((n, s) => n + (s.text ? s.text.split(/\s+/).length : 0), 0);
  return `${Math.max(1, Math.round(words / 200))} min`;
}

/* ---------- SEO meta injection per route ---------- */
function setMeta(name, content, attr) {
  attr = attr || "name";
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) { el = document.createElement("link"); el.setAttribute("rel", "canonical"); document.head.appendChild(el); }
  el.setAttribute("href", href);
}
function setJsonLd(id, obj) {
  let el = document.getElementById(id);
  if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = id; document.head.appendChild(el); }
  el.textContent = JSON.stringify(obj);
}

function applyPostSeo(post) {
  const url = `${window.BASE_URL || "https://ruwanwelisaya.com"}/blog/${post.slug}`;
  const desc = (post.seo && post.seo.description) || post.excerpt;
  const kws = (post.seo && post.seo.keywords) || [];
  document.title = `${post.title} | Ruwanwelisaya`;
  setMeta("description", desc);
  if (kws.length) setMeta("keywords", kws.join(", "));
  setMeta("og:title", `${post.title} | Ruwanwelisaya`, "property");
  setMeta("og:description", desc, "property");
  setMeta("og:type", "article", "property");
  setMeta("og:url", url, "property");
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", post.title);
  setMeta("twitter:description", desc);
  setCanonical(url);
  setJsonLd("ld-article", {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: desc,
    keywords: kws.join(", "),
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Ruwanwelisaya", logo: { "@type": "ImageObject", url: `${window.BASE_URL}/assets/mark-stupa.svg` } },
    datePublished: post.when,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: post.category,
  });
  setJsonLd("ld-breadcrumb", {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: window.BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${window.BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  });
}

function applyBlogIndexSeo() {
  const url = `${window.BASE_URL || "https://ruwanwelisaya.com"}/blog`;
  document.title = "Blog — Pilgrim Guides, History & Tradition | Ruwanwelisaya";
  setMeta("description", "Guides, history, architecture, conservation, and tradition — 30 in-depth articles on the Ruwanwelisaya stupa and the sacred city of Anuradhapura, Sri Lanka.");
  setMeta("keywords", "Ruwanwelisaya blog, Anuradhapura guide, Buddhist pilgrimage Sri Lanka, Vesak, Poson, stupa history");
  setCanonical(url);
  setJsonLd("ld-blog", {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Ruwanwelisaya Blog",
    url,
    description: "In-depth guides, history, and tradition of the Great Stupa of Anuradhapura.",
    blogPost: ALL_POSTS.slice(0, 30).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${window.BASE_URL}/blog/${p.slug}`,
      datePublished: p.when,
      author: { "@type": "Person", name: p.author },
    })),
  });
}

/* ---------- Structured body renderer ---------- */
function PostBody({ body }) {
  if (!body) return null;
  // Insert an in-article ad slot roughly one-third of the way down.
  const adAfter = Math.max(2, Math.floor(body.length / 3));
  return (
    <>
      {body.map((seg, i) => {
        const node = (() => {
          switch (seg.type) {
            case "h2":    return <h2 className="rw-article__h2" key={i}>{seg.text}</h2>;
            case "h3":    return <h3 className="rw-h3" key={i}>{seg.text}</h3>;
            case "quote": return <blockquote className="rw-blog-quote" key={i}>{seg.text}{seg.cite && <cite>{seg.cite}</cite>}</blockquote>;
            case "li":    return <li className="rw-article__li" key={i}>{seg.text}</li>;
            default:      return <p className="rw-body" key={i}>{seg.text}</p>;
          }
        })();
        if (i === adAfter) {
          return (
            <React.Fragment key={`f${i}`}>
              {node}
              <AdSlot id="blog-inline" size="leaderboard" label="In-article"/>
            </React.Fragment>
          );
        }
        return node;
      })}
    </>
  );
}

/* ---------- Blog landing ---------- */
function BlogPage({ onNavigate }) {
  const [active, setActive] = React.useState("All");
  const [openSlug, setOpenSlug] = React.useState(null);

  React.useEffect(() => {
    if (!openSlug) applyBlogIndexSeo();
  }, [openSlug, active]);

  const filtered = active === "All" ? ALL_POSTS : ALL_POSTS.filter((p) => p.category === active);

  if (openSlug) {
    const post = ALL_POSTS.find((p) => p.slug === openSlug);
    if (post) return <BlogDetail post={post} onBack={() => setOpenSlug(null)} onOpen={setOpenSlug}/>;
  }

  return (
    <div className="rw-page">
      <header className="rw-page__header">
        <div className="rw-container">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="rw-page__title">Reflections &amp; Writings</h1>
          <p className="rw-page__lead">
            Thirty in-depth articles — pilgrim guides, ancient history, architecture, conservation, and living tradition — written by our editorial team and contributors who know the stupa in different lights.
          </p>
        </div>
      </header>

      <div className="rw-container">
        <div className="rw-chips" style={{ marginBottom: 36 }}>
          {CATEGORIES.map((c) => {
            const n = c === "All" ? ALL_POSTS.length : ALL_POSTS.filter((p) => p.category === c).length;
            return (
              <button key={c} className={`rw-chip ${active === c ? "is-active" : ""}`} onClick={() => setActive(c)}>
                {c} <span className="rw-chip__count">{n}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured post */}
      {filtered[0] && (
        <section className="rw-section rw-section--tight">
          <div className="rw-container">
            <FadeIn>
              <a className="rw-feature-post" href="#" onClick={(e) => { e.preventDefault(); setOpenSlug(filtered[0].slug); }}>
                <div className="rw-feature-post__img rw-photo--scene">
                  <GalleryScene kind={filtered[0].kind}/>
                  <div className="rw-photo__overlay"/>
                </div>
                <div className="rw-feature-post__body">
                  <Eyebrow>Featured · {filtered[0].category}</Eyebrow>
                  <h2 className="rw-feature-post__title">{filtered[0].title}</h2>
                  <p className="rw-feature-post__excerpt">{filtered[0].excerpt}</p>
                  <div className="rw-feature-post__meta">
                    <span>{filtered[0].author}</span>
                    <span className="rw-dot"/>
                    <span>{filtered[0].when}</span>
                    <span className="rw-dot"/>
                    <span>{estimateRead(filtered[0])}</span>
                  </div>
                </div>
              </a>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="rw-section">
        <div className="rw-container">
          <div className="rw-blog-grid">
            {filtered.slice(1).map((p, i) => (
              <FadeIn key={p.slug} delay={(i % 3) * 0.08}>
                <a className="rw-post-card" href="#" onClick={(e) => { e.preventDefault(); setOpenSlug(p.slug); }}>
                  <div className="rw-post-card__img rw-photo--scene">
                    <GalleryScene kind={p.kind}/>
                    <div className="rw-photo__overlay"/>
                  </div>
                  <div className="rw-post-card__body">
                    <Eyebrow>{p.category}</Eyebrow>
                    <h3 className="rw-post-card__title">{p.title}</h3>
                    <p className="rw-post-card__excerpt">{p.excerpt}</p>
                    <div className="rw-post-card__meta">
                      <span>{p.author}</span>
                      <span className="rw-dot"/>
                      <span>{estimateRead(p)}</span>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Blog detail ---------- */
function BlogDetail({ post, onBack, onOpen }) {
  React.useEffect(() => {
    applyPostSeo(post);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [post]);

  // Related posts: same category first, then fill.
  const related = ALL_POSTS
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (b.category === post.category) - (a.category === post.category))
    .slice(0, 3);

  return (
    <article className="rw-page rw-blog-detail">
      <div className="rw-blog-detail__hero rw-photo--scene">
        <GalleryScene kind={post.kind}/>
        <div className="rw-photo__overlay rw-photo__overlay--strong"/>
        <div className="rw-container rw-blog-detail__hero-inner">
          <button className="rw-back" onClick={onBack}>
            <Icon name="arrowLeft" size={14}/> <span>All posts</span>
          </button>
          <Eyebrow light>{post.category}</Eyebrow>
          <h1 className="rw-blog-detail__title">{post.title}</h1>
          <div className="rw-blog-detail__meta">
            <span>{post.author}</span>
            <span className="rw-dot"/>
            <span>{post.when}</span>
            <span className="rw-dot"/>
            <span>{estimateRead(post)}</span>
          </div>
        </div>
      </div>

      <div className="rw-container rw-container--prose rw-blog-detail__body">
        <FadeIn>
          <p className="rw-lede">{post.excerpt}</p>
          <PostBody body={post.body}/>
        </FadeIn>

        {/* Tag row for SEO keyword visibility */}
        {post.seo && post.seo.keywords && (
          <div className="rw-article__tags">
            {post.seo.keywords.slice(0, 6).map((k) => (
              <span key={k} className="rw-tag">{k}</span>
            ))}
          </div>
        )}

        {/* Author byline card */}
        <div className="rw-byline">
          <div className="rw-byline__avatar">{post.author.split(" ").map((w) => w[0]).slice(0, 2).join("")}</div>
          <div>
            <div className="rw-byline__name">{post.author}</div>
            <div className="rw-byline__role">Contributor · Ruwanwelisaya editorial team</div>
          </div>
        </div>
      </div>

      {/* Related posts */}
      <section className="rw-section rw-section--cream rw-section--tight">
        <div className="rw-container">
          <h2 className="rw-h2" style={{ marginBottom: 28 }}>Continue reading</h2>
          <div className="rw-blog-grid">
            {related.map((p) => (
              <a key={p.slug} className="rw-post-card" href="#" onClick={(e) => { e.preventDefault(); onOpen(p.slug); }}>
                <div className="rw-post-card__img rw-photo--scene">
                  <GalleryScene kind={p.kind}/>
                  <div className="rw-photo__overlay"/>
                </div>
                <div className="rw-post-card__body">
                  <Eyebrow>{p.category}</Eyebrow>
                  <h3 className="rw-post-card__title">{p.title}</h3>
                  <div className="rw-post-card__meta">
                    <span>{estimateRead(p)}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="rw-section rw-section--tight">
        <div className="rw-container rw-container--prose">
          <FadeIn><FeedbackForm postSlug={post.slug}/></FadeIn>
        </div>
      </section>
    </article>
  );
}

Object.assign(window, { BlogPage, BlogDetail, ALL_POSTS });
