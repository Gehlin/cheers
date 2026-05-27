import PageHelmet from '@/components/PageHelmet'
import Button from '@/components/Button'
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

      {/* Page Hero */}
      <section className="bg-brand-pink text-white min-h-[30vh] flex items-center section-padding">
        <div className="container-max w-full">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Kontakta oss</h1>
          <p className="text-lg text-white/80 max-w-xl">
            Vi svarar på alla förfrågningar inom 24 timmar på vardagar
          </p>
        </div>
      </section>

      {/* Two contact cards */}
      <section className="bg-neutral-bg section-padding">
        <div className="container-max">
          <SectionHeading title="Kontaktpersoner" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contactInfo.contacts.map((contact) => (
              <div
                key={contact.name}
                className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100 flex flex-col gap-5"
              >
                <div>
                  <p className="text-xl font-bold text-neutral-body">{contact.name}</p>
                </div>
                <div className="space-y-3">
                  <a
                    href={contact.phoneHref}
                    className="flex items-center gap-3 text-brand-pink hover:text-brand-pink-dark transition-colors font-semibold text-lg"
                  >
                    <Icon name="phone" className="w-5 h-5 flex-shrink-0" />
                    {contact.phone}
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 text-brand-pink hover:text-brand-pink-dark transition-colors font-semibold"
                  >
                    <Icon name="email" className="w-5 h-5 flex-shrink-0" />
                    {contact.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Address + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Address & hours */}
            <div>
              <SectionHeading title="Besöksadress & öppettider" align="left" />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 text-brand-pink flex-shrink-0">
                    <Icon name="location" className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-body mb-1">Adress</p>
                    <p className="text-neutral-muted">
                      {contactInfo.address.street}
                      {contactInfo.address.postalCode && `, ${contactInfo.address.postalCode}`}
                      <br />
                      {contactInfo.address.city}
                    </p>
                  </div>
                </div>

                {/* Opening hours */}
                <div>
                  <p className="font-semibold text-neutral-body mb-3">Öppettider</p>
                  <table className="text-sm w-full max-w-xs">
                    <tbody>
                      {contactInfo.openingHours.map(({ days, hours }) => (
                        <tr key={days} className="border-b border-neutral-100 last:border-0">
                          <td className="py-2 text-neutral-body font-medium pr-8">{days}</td>
                          <td className="py-2 text-neutral-muted">{hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Button as="a" href="/begar-offert" variant="primary" className="mt-2">
                  Begär offert
                </Button>
              </div>
            </div>

            {/* Right: Map */}
            <div className="rounded-xl overflow-hidden">
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
                <div className="flex min-h-[400px] items-center justify-center rounded-xl border-2 border-dashed border-neutral-300 bg-neutral-100 p-8 text-center">
                  <div>
                    <svg
                      className="mx-auto mb-4 h-12 w-12 text-neutral-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="font-semibold text-neutral-body mb-1">Karta saknas</p>
                    <p className="text-sm text-neutral-muted">
                      Karta läggs till när Google Maps embed-URL är konfigurerad.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="bg-brand-pink text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Snabb kontakt</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Snabbaste sättet att nå oss är via telefon eller e-post. Vi svarar normalt inom några
            timmar på vardagar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={contactInfo.phoneHref}
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-brand-pink transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              <Icon name="phone" className="w-5 h-5" />
              Ring oss
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 rounded-md border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-brand-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              <Icon name="email" className="w-5 h-5" />
              Maila oss
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
