import PageHelmet from '@/components/PageHelmet'
import SectionHeading from '@/components/SectionHeading'
import Icon from '@/components/Icon'
import { contactInfo } from '@/data/contact'

export default function Kontakt() {
  return (
    <>
      <PageHelmet
        title="Kontakt – No1 Ställningar Göteborg"
        description="Kontakta No1 Ställningar i Göteborg. Ring, maila eller besök oss. Vi svarar snabbt på alla förfrågningar."
        path="/kontakt"
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
          <p className="eyebrow text-brand-pink mb-5">Kom i kontakt</p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">Kontakta oss</h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            Vi svarar på alla förfrågningar inom 24 timmar på vardagar.
          </p>
        </div>
      </section>

      {/* Contacts */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <SectionHeading eyebrow="Kontaktpersoner" title="Nå oss direkt" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
            {contactInfo.contacts.map(contact => (
              <div
                key={contact.name}
                className="bg-neutral-bg rounded-2xl border border-neutral-border p-8 flex flex-col gap-6"
              >
                <div>
                  <p className="text-xl font-black text-neutral-body tracking-tight">{contact.name}</p>
                </div>
                <div className="space-y-3">
                  <a
                    href={contact.phoneHref}
                    className="flex items-center gap-3 group"
                    aria-label={`Ring ${contact.name}`}
                  >
                    <span className="w-9 h-9 rounded-lg bg-brand-pink-tint flex items-center justify-center text-brand-pink flex-shrink-0 group-hover:bg-brand-pink group-hover:text-white transition-colors duration-150">
                      <Icon name="phone" className="w-4 h-4" />
                    </span>
                    <span className="font-semibold text-neutral-body text-sm group-hover:text-brand-pink transition-colors">
                      {contact.phone}
                    </span>
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 group"
                    aria-label={`Maila ${contact.name}`}
                  >
                    <span className="w-9 h-9 rounded-lg bg-brand-pink-tint flex items-center justify-center text-brand-pink flex-shrink-0 group-hover:bg-brand-pink group-hover:text-white transition-colors duration-150">
                      <Icon name="email" className="w-4 h-4" />
                    </span>
                    <span className="font-semibold text-neutral-body text-sm group-hover:text-brand-pink transition-colors">
                      {contact.email}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Address + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Address & hours */}
            <div>
              <SectionHeading eyebrow="Besök oss" title="Adress & öppettider" align="left" />
              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <span className="w-9 h-9 rounded-lg bg-brand-pink-tint flex-shrink-0 flex items-center justify-center text-brand-pink">
                    <Icon name="location" className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-body text-sm mb-1">Adress</p>
                    <p className="text-neutral-muted text-sm leading-relaxed">
                      {contactInfo.address.street}<br />
                      {contactInfo.address.postalCode} {contactInfo.address.city}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-neutral-body text-sm mb-3">Öppettider</p>
                  <table className="text-sm w-full max-w-xs">
                    <tbody>
                      {contactInfo.openingHours.map(({ days, hours }) => (
                        <tr key={days} className="border-b border-neutral-divider last:border-0">
                          <td className="py-2 text-neutral-body text-sm pr-8">{days}</td>
                          <td className="py-2 text-neutral-muted text-sm">{hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <a
                  href="/begar-offert"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-pink text-white font-semibold text-sm hover:bg-brand-pink-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2"
                >
                  Begär offert
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-neutral-border">
              {contactInfo.googleMapsEmbedUrl ? (
                <iframe
                  src={contactInfo.googleMapsEmbedUrl}
                  title="Karta över No1 Ställningar i Göteborg"
                  aria-label="Google Maps karta som visar No1 Ställningars plats i Göteborg"
                  className="w-full h-full min-h-[400px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex min-h-[400px] items-center justify-center bg-neutral-bg p-8 text-center">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-brand-pink-tint flex items-center justify-center mx-auto mb-4 text-brand-pink">
                      <Icon name="location" className="w-6 h-6" />
                    </div>
                    <p className="font-semibold text-neutral-body mb-1 text-sm">Karta saknas</p>
                    <p className="text-xs text-neutral-muted">
                      Läggs till när Google Maps embed-URL är konfigurerad.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick contact CTA */}
      <section className="bg-brand-dark text-white section-pad-sm">
        <div className="container-max text-center">
          <h2 className="text-3xl font-black tracking-tight mb-4">Snabbaste sättet att nå oss</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Via telefon eller e-post. Vi svarar normalt inom några timmar på vardagar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={contactInfo.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-pink px-6 py-3 font-semibold text-sm text-white hover:bg-brand-pink-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
            >
              <Icon name="phone" className="w-4 h-4" />
              Ring oss
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 text-white/80 px-6 py-3 font-semibold text-sm hover:border-white/40 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
            >
              <Icon name="email" className="w-4 h-4" />
              Maila oss
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
