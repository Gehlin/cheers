import { partners } from '@/data/partners'

export default function PartnerTicker() {
  const doubled = [...partners, ...partners]

  return (
    <section className="bg-white border-y border-neutral-border py-10 overflow-hidden" aria-label="Våra samarbetspartners">
      <div className="container-max mb-5 text-center">
        <p className="eyebrow">Företag vi arbetar med</p>
      </div>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="ticker-track" role="list" aria-label="Lista över samarbetspartners">
          {doubled.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              role="listitem"
              className="flex items-center justify-center mx-10 shrink-0"
            >
              {partner.logoUrl ? (
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-40 hover:opacity-80"
                  loading="lazy"
                />
              ) : (
                <span className="text-sm font-semibold text-neutral-muted/60 hover:text-brand-pink-dark transition-colors duration-200 whitespace-nowrap cursor-default select-none tracking-wide">
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
