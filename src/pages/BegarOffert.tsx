import PageHelmet from '@/components/PageHelmet'
import QuoteForm from '@/components/QuoteForm'
import Icon from '@/components/Icon'
import { contactInfo } from '@/data/contact'

const processSteps = [
  {
    num: '01',
    title: 'Vi granskar din förfrågan',
    body: 'Vi läser igenom ditt ärende och kontaktar dig om vi behöver kompletterande uppgifter.',
  },
  {
    num: '02',
    title: 'Kostnadsfri offert',
    body: 'Vi tar fram en detaljerad offert baserad på ditt projekt — utan förpliktelser.',
  },
  {
    num: '03',
    title: 'Kör igång',
    body: 'Du godkänner offerten och vi planerar montering. Snabbt, smidigt, professionellt.',
  },
]

export default function BegarOffert() {
  return (
    <>
      <PageHelmet
        title="Begär offert – Kostnadsfri offert på ställningar"
        description="Begär en kostnadsfri offert från No1 Ställningar. Fyll i formuläret så svarar vi inom 24 timmar på vardagar."
        path="/begar-offert"
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
          <p className="eyebrow text-brand-pink mb-5">Kostnadsfritt</p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5 text-balance">
            Begär offert
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            Fyll i formuläret nedan. Vi svarar inom 24 timmar på vardagar — utan förpliktelser.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-neutral-bg section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* ── Quote form — 60% ──────────────────────────────────────── */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-neutral-border p-8 sm:p-10">
              <h2 className="text-2xl font-black tracking-tight text-neutral-body mb-2">
                Offertformulär
              </h2>
              <p className="text-neutral-muted text-sm mb-8 leading-relaxed">
                Fält markerade med <span aria-hidden="true">*</span> är obligatoriska.
              </p>
              <QuoteForm />
            </div>

            {/* ── Info sidebar — 40% ────────────────────────────────────── */}
            <aside className="lg:col-span-2 space-y-6">

              {/* Direct contacts */}
              <div className="bg-white rounded-2xl border border-neutral-border p-7">
                <h3 className="font-bold text-neutral-body mb-5 tracking-tight">
                  Kontakta oss direkt
                </h3>
                <div className="space-y-6">
                  {contactInfo.contacts.map(contact => (
                    <div key={contact.name}>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-neutral-muted mb-3">
                        {contact.name}
                      </p>
                      <div className="space-y-2">
                        <a
                          href={contact.phoneHref}
                          className="flex items-center gap-3 group"
                          aria-label={`Ring ${contact.name}`}
                        >
                          <span className="w-8 h-8 rounded-lg bg-brand-pink-tint flex items-center justify-center text-brand-pink flex-shrink-0 group-hover:bg-brand-pink group-hover:text-white transition-colors duration-150">
                            <Icon name="phone" className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-sm font-semibold text-neutral-body group-hover:text-brand-pink transition-colors">
                            {contact.phone}
                          </span>
                        </a>
                        <a
                          href={`mailto:${contact.email}`}
                          className="flex items-center gap-3 group"
                          aria-label={`Maila ${contact.name}`}
                        >
                          <span className="w-8 h-8 rounded-lg bg-brand-pink-tint flex items-center justify-center text-brand-pink flex-shrink-0 group-hover:bg-brand-pink group-hover:text-white transition-colors duration-150">
                            <Icon name="email" className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-sm font-semibold text-neutral-body group-hover:text-brand-pink transition-colors">
                            {contact.email}
                          </span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="bg-white rounded-2xl border border-neutral-border p-7">
                <h3 className="font-bold text-neutral-body mb-5 tracking-tight">
                  Vad händer härnäst?
                </h3>
                <div className="space-y-5">
                  {processSteps.map(({ num, title, body }) => (
                    <div key={num} className="flex gap-4">
                      <div className="w-9 h-9 rounded-xl bg-brand-pink-tint flex-shrink-0 flex items-center justify-center">
                        <span className="text-brand-pink font-black text-xs">{num}</span>
                      </div>
                      <div className="pt-1">
                        <p className="text-sm font-bold text-neutral-body mb-0.5">{title}</p>
                        <p className="text-xs text-neutral-muted leading-relaxed">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response-time assurance */}
              <div className="rounded-xl bg-brand-pink-tint border border-brand-pink-subtle px-6 py-5 flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-brand-pink/10 flex-shrink-0 flex items-center justify-center text-brand-pink mt-0.5">
                  <Icon name="check" className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-body mb-1">Svar inom 24 timmar</p>
                  <p className="text-xs text-neutral-muted leading-relaxed">
                    För akuta ärenden — ring oss direkt. Vi finns tillgängliga på vardagar.
                  </p>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  )
}
