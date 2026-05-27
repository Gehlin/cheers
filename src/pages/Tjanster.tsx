import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHelmet from '@/components/PageHelmet'
import SectionHeading from '@/components/SectionHeading'
import Icon from '@/components/Icon'
import { services } from '@/data/services'
import { faqItems } from '@/data/faq'
import type { ServiceItem } from '@/types'

function LargeServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div id={service.id} className="group relative bg-white rounded-2xl border border-neutral-border p-8 flex flex-col sm:flex-row gap-6 transition-all duration-200 hover:shadow-card-md hover:-translate-y-0.5 overflow-hidden">
      <span className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
      <div className="w-14 h-14 rounded-xl bg-brand-pink-tint flex-shrink-0 flex items-center justify-center text-brand-pink">
        <Icon name={service.icon as Parameters<typeof Icon>[0]['name']} className="w-7 h-7" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-neutral-body mb-2 tracking-tight">{service.title}</h3>
        <p className="text-neutral-muted leading-relaxed text-sm">{service.description}</p>
      </div>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-neutral-divider last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left font-semibold text-neutral-body hover:text-brand-pink transition-colors text-sm"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <svg
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 text-neutral-muted ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && <p className="pb-4 text-neutral-muted text-sm leading-relaxed">{answer}</p>}
    </div>
  )
}

const steps = [
  {
    num: '01',
    title: 'Begär offert',
    body: 'Fyll i formuläret eller ring oss. Vi svarar inom 24 timmar med en kostnadsuppskattning.',
  },
  {
    num: '02',
    title: 'Vi planerar',
    body: 'Tillsammans går vi igenom projektets krav och planerar optimal ställningslösning.',
  },
  {
    num: '03',
    title: 'Montering & uppföljning',
    body: 'Vårt team monterar ställningarna och finns tillgängliga under hela projektet.',
  },
]

export default function Tjanster() {
  return (
    <>
      <PageHelmet
        title="Tjänster – Ställningar & uthyrning i Göteborg"
        description="Vi erbjuder byggnadsställningar, väderskydd, fallskydd, skyltställ och uthyrning i Göteborg. Se alla våra tjänster."
        path="/tjanster"
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
          <p className="eyebrow text-brand-pink mb-5">Vad vi erbjuder</p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5 text-balance">Våra tjänster</h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            Professionella ställningslösningar för alla typer av projekt — snabbt, säkert och anpassat.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-neutral-bg section-padding">
        <div className="container-max">
          <SectionHeading eyebrow="Tjänster" title="Vad vi erbjuder" align="left" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {services.map(service => (
              <LargeServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <SectionHeading eyebrow="Hur det fungerar" title="Så här fungerar det" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map(({ num, title, body }) => (
              <div key={num} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-pink-tint flex items-center justify-center mx-auto mb-5">
                  <span className="text-brand-pink font-black text-sm">{num}</span>
                </div>
                <h3 className="font-bold text-lg text-neutral-body mb-2 tracking-tight">{title}</h3>
                <p className="text-neutral-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="bg-neutral-bg section-padding">
        <div className="container-max max-w-2xl">
          <SectionHeading eyebrow="Frågor" title="Vanliga frågor" />
          <div className="bg-white rounded-2xl border border-neutral-border px-7 py-2">
            {faqItems.slice(0, 3).map(item => (
              <FaqItem key={item.id} question={item.question} answer={item.answer} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/om-oss"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-pink-dark hover:text-brand-pink transition-colors"
            >
              Se alla frågor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-brand-pink text-white section-padding">
        <div className="container-max text-center max-w-xl">
          <h2 className="text-4xl font-black tracking-tight mb-5">Redo att komma igång?</h2>
          <p className="text-white/75 mb-8 leading-relaxed">Kontakta oss för en kostnadsfri offert. Vi svarar inom 24 timmar.</p>
          <a
            href="/begar-offert"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-brand-pink font-bold text-sm hover:bg-brand-pink-tint transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-brand-pink focus-visible:ring-offset-2"
          >
            Begär offert
          </a>
        </div>
      </section>
    </>
  )
}
