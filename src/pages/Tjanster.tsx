import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import Icon from '@/components/Icon'
import { services } from '@/data/services'
import { faqItems } from '@/data/faq'
import type { ServiceItem } from '@/types'

function LargeServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div
      id={service.id}
      className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100 flex flex-col sm:flex-row gap-6"
    >
      <div className="w-16 h-16 rounded-xl bg-brand-amber/10 flex-shrink-0 flex items-center justify-center text-brand-amber">
        <Icon name={service.icon as Parameters<typeof Icon>[0]['name']} className="w-8 h-8" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-neutral-body mb-2">{service.title}</h3>
        <p className="text-neutral-muted leading-relaxed">{service.description}</p>
      </div>
    </div>
  )
}

function FaqAccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left font-semibold text-neutral-body hover:text-brand-amber transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && <p className="pb-4 text-neutral-muted leading-relaxed">{answer}</p>}
    </div>
  )
}

const steps = [
  {
    num: '1',
    title: 'Begär offert',
    body: 'Fyll i vårt formulär eller ring oss. Vi svarar inom 24 timmar med en kostnadsuppskattning.',
  },
  {
    num: '2',
    title: 'Vi planerar',
    body: 'Tillsammans går vi igenom projektets krav och planerar optimal ställningslösning.',
  },
  {
    num: '3',
    title: 'Montering och uppföljning',
    body: 'Vårt team monterar ställningarna och finns tillgängliga under hela projektet.',
  },
]

export default function Tjanster() {
  return (
    <>
      <Helmet>
        <title>Tjänster – Ställningar & uthyrning | No1 Ställningar</title>
        <meta
          name="description"
          content="Vi erbjuder fasadställningar, rullställningar, väderskydd, takskydd och uthyrning av ställningar i Göteborg. Se alla våra tjänster."
        />
      </Helmet>

      {/* Page Hero */}
      <section className="bg-brand-blue text-white min-h-[30vh] flex items-center section-padding">
        <div className="container-max w-full">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Våra tjänster</h1>
          <p className="text-lg text-white/80 max-w-xl">
            Professionella ställningslösningar för alla typer av projekt
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-neutral-bg section-padding">
        <div className="container-max">
          <SectionHeading title="Vad vi erbjuder" align="left" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <LargeServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <SectionHeading title="Så här fungerar det" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ num, title, body }) => (
              <div key={num} className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-amber flex items-center justify-center text-white font-bold text-lg">
                  {num}
                </div>
                <h3 className="font-semibold text-xl text-neutral-body">{title}</h3>
                <p className="text-neutral-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="bg-neutral-bg section-padding">
        <div className="container-max max-w-3xl">
          <SectionHeading title="Vanliga frågor" />
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 px-6">
            {faqItems.slice(0, 3).map((item) => (
              <FaqAccordionItem key={item.id} question={item.question} answer={item.answer} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/kontakt"
              className="text-brand-amber font-semibold hover:text-brand-amber-dark underline underline-offset-4"
            >
              Se alla frågor →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-blue text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Redo att komma igång?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Kontakta oss idag för en kostnadsfri offert. Vi svarar inom 24 timmar.
          </p>
          <Button as="a" href="/begar-offert" variant="primary" className="text-base px-8 py-3">
            Begär offert
          </Button>
        </div>
      </section>
    </>
  )
}
