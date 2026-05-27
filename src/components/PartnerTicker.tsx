import { partners } from '@/data/partners'

export default function PartnerTicker() {
  // Duplicate the list to create seamless loop
  const doubled = [...partners, ...partners]

  return (
    <section className="bg-neutral-bg py-12 overflow-hidden" aria-label="Våra samarbetspartners">
      <div className="container-max mb-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-muted">
          Företag vi arbetar med
        </p>
      </div>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-bg to-transparent z-10 pointer-events-none" />

        <div className="ticker-track" role="list" aria-label="Lista över samarbetspartners">
          {doubled.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              role="listitem"
              className="flex items-center justify-center mx-8 shrink-0"
            >
              {partner.logoUrl ? (
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  loading="lazy"
                />
              ) : (
                <span className="text-xl font-bold text-neutral-muted hover:text-brand-pink transition-colors duration-200 whitespace-nowrap cursor-default select-none">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
