import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import PageHelmet from '@/components/PageHelmet'
import { projects } from '@/data/projects'

export default function Projekt() {
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const slides = projects.map(p => ({ src: p.imageUrl, alt: p.title }))

  return (
    <>
      <PageHelmet
        title="Projekt – Referensbilder från genomförda ställningsuppdrag"
        description="Se exempel på våra genomförda ställningsprojekt i Göteborg och omnejd — fasadrenovering, nybyggnation, takskydd och mer."
        path="/projekt"
      />

      {/* Page hero */}
      <section className="bg-brand-dark text-white section-padding relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(255,255,255,0.015) 60px, rgba(255,255,255,0.015) 61px)`,
          }}
        />
        <div className="container-max relative z-10">
          <p className="eyebrow text-brand-pink mb-5">Referensprojekt</p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">Våra projekt</h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            Ett urval av genomförda projekt i Göteborg och omnejd.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white section-padding">
        <div className="container-max">

          {/* Client notice — remove before launch */}
          <div className="mb-10 flex items-start gap-3 rounded-xl border border-dashed border-brand-pink bg-brand-pink-tint p-4 text-sm text-neutral-body">
            <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-pink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4m0 4h.01" strokeLinecap="round" />
            </svg>
            <p>
              <strong>Till kunden:</strong> Byt ut platshållarbilderna mot riktiga projektfoton.
              Rekommenderad bildstorlek: 800×600 px, format: WebP.
            </p>
          </div>

          {/* Pinterest-style masonry grid */}
          <div className="masonry">
            {projects.map((project, index) => (
              <figure key={project.id} className="masonry-item group">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Visa bild: ${project.title}`}
                  className="relative block w-full overflow-hidden rounded-2xl border border-neutral-border cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2"
                >
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} – ställningar i Göteborg`}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ aspectRatio: index % 3 === 1 ? '4/5' : '4/3' }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-dark/60 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <p className="text-white font-bold text-sm leading-snug">{project.title}</p>
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-white/60">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Klicka för att zooma
                      </div>
                    </div>
                  </div>
                </button>
                <figcaption className="mt-2.5 px-1">
                  <p className="font-semibold text-neutral-body text-sm">{project.title}</p>
                  <p className="text-neutral-muted text-xs mt-0.5 leading-relaxed">{project.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-bg section-pad-sm">
        <div className="container-max text-center">
          <p className="text-neutral-muted mb-5 max-w-md mx-auto">
            Vill du se mer? Kontakta oss för en kostnadsfri konsultation.
          </p>
          <a
            href="/begar-offert"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-pink text-white font-semibold text-sm hover:bg-brand-pink-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2"
          >
            Begär offert
          </a>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </>
  )
}
