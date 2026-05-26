import PageHelmet from '@/components/PageHelmet'
import QuoteForm from '@/components/QuoteForm'
import Icon from '@/components/Icon'
import { contactInfo } from '@/data/contact'

export default function BegarOffert() {
  return (
    <>
      <PageHelmet
        title="Begär offert – Kostnadsfri offert på ställningar"
        description="Begär en kostnadsfri offert från No1 Ställningar. Fyll i formuläret så svarar vi inom 24 timmar."
        path="/begar-offert"
      />

      {/* Page Hero */}
      <section className="bg-brand-blue text-white min-h-[30vh] flex items-center section-padding">
        <div className="container-max w-full">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Begär offert</h1>
          <p className="text-lg text-white/80 max-w-xl">
            Kostnadsfritt och utan förpliktelser. Vi svarar inom 24 timmar på vardagar.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-neutral-bg section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

            {/* Form column — 60% */}
            <div className="md:col-span-3">
              <QuoteForm />
            </div>

            {/* Info column — 40% (desktop only) */}
            <aside className="hidden md:block md:col-span-2 space-y-8">
              {/* Contact */}
              <div>
                <h2 className="text-lg font-bold text-neutral-body mb-4">Kontakta oss direkt</h2>
                <div className="space-y-4">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-3 text-brand-amber hover:text-brand-amber-dark transition-colors font-semibold"
                  >
                    <Icon name="phone" className="w-5 h-5 flex-shrink-0" />
                    {contactInfo.phone}
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-brand-amber hover:text-brand-amber-dark transition-colors font-semibold"
                  >
                    <Icon name="email" className="w-5 h-5 flex-shrink-0" />
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Assurance */}
              <div className="rounded-xl bg-white border border-gray-200 p-6">
                <h3 className="font-bold text-neutral-body mb-2">Vi svarar snabbt</h3>
                <p className="text-sm text-neutral-muted mb-4">
                  Normalt svarar vi inom 24 timmar på vardagar. För akuta ärenden — ring oss direkt.
                </p>
                <h3 className="font-bold text-neutral-body mb-2">Vad händer härnäst?</h3>
                <ol className="text-sm text-neutral-muted space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0 rounded-full bg-brand-amber/10 text-brand-amber font-bold w-5 h-5 flex items-center justify-center text-xs">1</span>
                    Vi granskar din förfrågan och kontaktar dig för eventuella frågor.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0 rounded-full bg-brand-amber/10 text-brand-amber font-bold w-5 h-5 flex items-center justify-center text-xs">2</span>
                    Vi tar fram en kostnadsfri offert baserad på ditt projekt.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0 rounded-full bg-brand-amber/10 text-brand-amber font-bold w-5 h-5 flex items-center justify-center text-xs">3</span>
                    Du godkänner offerten — sedan kör vi igång!
                  </li>
                </ol>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  )
}
