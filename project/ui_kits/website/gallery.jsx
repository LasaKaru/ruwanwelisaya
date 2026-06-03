/* eslint-disable no-undef */
/* gallery.jsx */

const GALLERY_CATEGORIES = ["All", "Golden Hour", "Night", "Pilgrims", "Architecture", "Festivals"];

const GALLERY_PHOTOS = [
  { title: "Dawn Over the Dome",     by: "Anura S.",   kind: "dawn",       tall: true  },
  { title: "Devotion Hall",          by: "Priya K.",   kind: "devotion",   tall: false },
  { title: "Vesak Lanterns",         by: "Nimal P.",   kind: "lamp",       tall: false },
  { title: "Elephant Wall Detail",   by: "Saman D.",   kind: "wall",       tall: true  },
  { title: "Full Moon Procession",   by: "Hiruni W.",  kind: "procession", tall: false },
  { title: "Morning Pooja",          by: "Tharindu",   kind: "golden",     tall: false },
  { title: "Oil Lamp Offering",      by: "Kavindi",    kind: "lamp",       tall: false },
  { title: "Pinnacle at Sunset",     by: "Roshan",     kind: "golden",     tall: true  },
  { title: "Sacred Night",           by: "Asanka G.",  kind: "night",      tall: false },
];

function GalleryPage() {
  const [active, setActive] = React.useState("All");
  return (
    <div className="rw-page">
      <header className="rw-page__header">
        <div className="rw-container">
          <Eyebrow>Gallery</Eyebrow>
          <h1 className="rw-page__title">Sacred Moments</h1>
          <p className="rw-page__lead">
            Photographs submitted by pilgrims and devotees. Every image tells a story of devotion — the dawn light striking the dome, the slow circle of feet around the stupa at full moon, the small bowl of an oil lamp lit by a child.
          </p>
        </div>
      </header>

      <div className="rw-container rw-gallery">
        <div className="rw-chips" role="tablist">
          {GALLERY_CATEGORIES.map((c) => (
            <button key={c} className={`rw-chip ${active === c ? "is-active" : ""}`} onClick={() => setActive(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="rw-masonry">
          {GALLERY_PHOTOS.map((p, i) => (
            <FadeIn key={p.title} delay={(i % 6) * 0.08} className={`rw-tile ${p.tall ? "rw-tile--tall" : ""}`}>
              <div className="rw-photo rw-photo--scene">
                <GalleryScene kind={p.kind}/>
                <div className="rw-photo__overlay"/>
                <div className="rw-photo__caption">
                  <h3>{p.title}</h3>
                  <p>by {p.by}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="rw-section__cta">
          <Button variant="primary" size="md">
            <Icon name="upload" size={14} style={{ marginRight: 8 }}/>
            Submit a Photo
          </Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { GalleryPage });
