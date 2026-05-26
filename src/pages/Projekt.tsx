import { Helmet } from 'react-helmet-async'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import { projects } from '@/data/projects'

export default function Projekt() {
  return (
    <>
      <Helmet>
        <title>Projekt – Referensbilder | No1 Ställningar</title>
        <meta
          name="description"
          content="Se exempel på våra genomförda ställningsprojekt i Göteborg och omnejd — fasadrenovering, nybyggnation, takskydd och mer."
        />
      </Helmet>

      {/* Page Hero */}
      <section className="bg-brand-blue text-white min-h-[30vh] flex items-center section-padding">
        <div className="container-max w-full">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Våra projekt</h1>
          <p className="text-lg text-white/80 max-w-xl">
            Ett urval av genomförda projekt i Göteborg och omnejd
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-neutral-bg section-padding">
        <div className="container-max">
          {/* Client notice — remove before launch */}
          <div className="mb-8 flex items-start gap-3 rounded-lg border-2 border-dashed border-brand-amber bg-brand-amber/10 p-4 text-sm text-neutral-body">
            <svg
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-amber"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4m0 4h.01" strokeLinecap="round" />
            </svg>
            <p>
              <strong>Till kunden:</strong> Byt ut platshållarbilderna mot riktiga projektfoton.
              Rekommenderad bildstorlek: 800×600 px, format: WebP.
            </p>
          </div>

          <SectionHeading title="Referensprojekt" align="left" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <figure key={project.id} className="flex flex-col">
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} – ställningar i Göteborg`}
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-blue/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <p className="text-white font-semibold text-center text-lg">{project.title}</p>
                  </div>
                </div>
                <figcaption className="mt-3 px-1">
                  <p className="font-semibold text-neutral-body text-sm">{project.title}</p>
                  <p className="text-neutral-muted text-sm mt-1">{project.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white section-padding">
        <div className="container-max text-center">
          <p className="text-neutral-muted text-lg mb-6 max-w-xl mx-auto">
            Vill du se mer? Kontakta oss för en kostnadsfri konsultation.
          </p>
          <Button as="a" href="/begar-offert" variant="primary" className="text-base px-8 py-3">
            Begär offert
          </Button>
        </div>
      </section>
    </>
  )
}
