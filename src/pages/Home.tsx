import { Link } from 'react-router-dom'
import PageHelmet from '@/components/PageHelmet'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import Icon from '@/components/Icon'
import HeroVideo from '@/components/HeroVideo'
import ShowcaseStrip from '@/components/ShowcaseStrip'
import PartnerTicker from '@/components/PartnerTicker'
import { services } from '@/data/services'
import { testimonials } from '@/data/testimonials'
import { useCountUp } from '@/hooks/useCountUp'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const showcaseImages = [
  {
    src: 'https://placehold.co/800x600/111827/ffffff?text=Projekt+foto+1',
    alt: 'Byggnadsställningar under pågående renoveringsprojekt i Göteborg',
    caption: 'Fasadrenovering, Göteborg',
  },
  {
    src: 'https://placehold.co/800x600/111827/ffffff?text=Drone+video+här',
    alt: 'Drönarbild över byggarbetsplats med ställningar',
    caption: 'Nybyggnation, Västra Götaland',
  },
  {
    src: 'https://placehold.co/800x600/111827/ffffff?text=Projekt+foto+3',
    alt: 'Väderskydd och ställningar vid takrenovering',
    caption: 'Väderskydd, Halland',
  },
]

const whyPoints = [
  {
    icon: 'shield' as const,
    title: 'Certifierad personal',
    body: 'Vår personal har nödvändig utbildning och certifiering för säkert arbete på höjd.',
  },
  {
    icon: 'wrench' as const,
    title: 'Flexibla lösningar',
    body: 'Vi anpassar varje ställning efter era specifika krav och tidsramar.',
  },
  {
    icon: 'arrows' as const,
    title: 'Snabb leverans',
    body: 'Vi levererar och monterar ställningar inom kort varsel för att hålla ert projekt på rätt spår.',
  },
  {
    icon: 'check' as const,
    title: 'CE-märkt utrustning',
    body: 'All vår utrustning är CE-märkt och regelbundet besiktad för er och era medarbetares säkerhet.',
  },
]

// ── Stat item with count-up ───────────────────────────────────────────────────
function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp({ end: value, duration: 1600 }, active)
  return (
    <div className="text-center">
      <p className="text-5xl sm:text-6xl font-black tracking-tight text-neutral-body mb-2">
        {count}<span className="text-brand-pink">{suffix}</span>
      </p>
      <p className="text-sm font-medium text-neutral-muted uppercase tracking-wider">{label}</p>
    </div>
  )
}

export default function Home() {
  const { ref: statsRevealRef, isVisible: statsVisible } = useScrollReveal<HTMLElement>({ threshold: 0.3 })
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollReveal({ threshold: 0.1 })
  const { ref: whyRef, isVisible: whyVisible } = useScrollReveal({ threshold: 0.1 })
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <>
      <PageHelmet
        title="No1 Ställningar – Professionella ställningar i Göteborg"
        description="Säkra och flexibla ställningslösningar för bygg, renovering och underhåll i Göteborg och Västra Götaland. Begär offert idag."
        path="/"
      />

      {/*
        DRONE VIDEO: When the drone video is ready:
        1. Place at public/videos/drone-showcase.mp4 (1920×1080, H.264, < 15 MB)
        2. Create poster: public/images/hero-poster.jpg (1920×1080)
        3. Uncomment the videoSrc and posterSrc props below
      */}
      <HeroVideo
        // videoSrc="/videos/drone-showcase.mp4"
        // posterSrc="/images/hero-poster.jpg"
        headline="Professionella ställningar i"
        headlineAccent="Göteborg"
        subheadline="Säkra och anpassade ställningslösningar för bygg, renovering och underhåll — i rätt tid och till rätt pris."
        primaryCta={{ label: 'Begär offert', href: '/begar-offert' }}
        secondaryCta={{ label: 'Se våra tjänster', href: '/tjanster' }}
      />

      {/* Replace placeholders with real project photos before launch */}
      <ShowcaseStrip images={showcaseImages} />

      {/* ── Stats ─────────────────────────────────────────────────────── */}
      <section
        ref={statsRevealRef as React.RefObject<HTMLElement>}
        className="bg-white section-padding"
      >
        <div className="container-max">
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 reveal ${statsVisible ? 'is-visible' : ''}`}>
            <StatItem value={10} suffix="+" label="År i branschen" active={statsVisible} />
            <StatItem value={100} suffix="+" label="Genomförda projekt" active={statsVisible} />
            <StatItem value={7} suffix="" label="Kommuner vi täcker" active={statsVisible} />
          </div>
        </div>
      </section>

      {/* ── Partner ticker ─────────────────────────────────────────────── */}
      {/* Update src/data/partners.ts with real company names/logos before launch */}
      <PartnerTicker />

      {/* ── Services overview ──────────────────────────────────────────── */}
      <section className="bg-neutral-bg section-padding">
        <div
          ref={servicesRef as React.RefObject<HTMLDivElement>}
          className="container-max"
        >
          <div className={`reveal ${servicesVisible ? 'is-visible' : ''}`}>
            <SectionHeading
              eyebrow="Vad vi erbjuder"
              title="Våra tjänster"
              subtitle="Ett komplett utbud av ställningslösningar för alla typer av projekt — från fasad till fallskydd."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div
                key={service.id}
                className={`reveal ${servicesVisible ? 'is-visible' : ''} reveal-delay-${Math.min(i + 1, 4) as 1 | 2 | 3 | 4}`}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/tjanster"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-pink-dark hover:text-brand-pink transition-colors"
            >
              Se alla tjänster
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why choose us ──────────────────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div
          ref={whyRef as React.RefObject<HTMLDivElement>}
          className="container-max"
        >
          <div className={`reveal ${whyVisible ? 'is-visible' : ''}`}>
            <SectionHeading eyebrow="Varför No1" title="Varför välja oss?" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {whyPoints.map(({ icon, title, body }, i) => (
              <div
                key={title}
                className={`flex gap-4 reveal ${whyVisible ? 'is-visible' : ''} reveal-delay-${Math.min(i + 1, 4) as 1 | 2 | 3 | 4}`}
              >
                <div className="mt-0.5 w-10 h-10 rounded-xl bg-brand-pink-tint flex-shrink-0 flex items-center justify-center text-brand-pink">
                  <Icon name={icon} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-body mb-1 text-sm tracking-tight">{title}</h3>
                  <p className="text-neutral-muted text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────────── */}
      <section className="bg-neutral-bg section-padding">
        <div
          ref={testimonialsRef as React.RefObject<HTMLDivElement>}
          className="container-max"
        >
          <div className={`reveal ${testimonialsVisible ? 'is-visible' : ''}`}>
            <SectionHeading eyebrow="Kundröster" title="Vad våra kunder säger" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`reveal ${testimonialsVisible ? 'is-visible' : ''} reveal-delay-${Math.min(i + 1, 4) as 1 | 2 | 3 | 4}`}
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ───────────────────────────────────────────────────── */}
      <section className="bg-brand-pink text-white section-padding">
        <div className="container-max text-center max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60 mb-4">Kom igång</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5 text-balance">
            Redo att komma igång?
          </h2>
          <p className="text-white/75 text-lg mb-10 leading-relaxed">
            Kontakta oss idag för en kostnadsfri offert. Vi svarar inom 24 timmar på vardagar.
          </p>
          <a
            href="/begar-offert"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-brand-pink font-bold text-base hover:bg-brand-pink-tint transition-all duration-150 shadow-[0_2px_12px_rgb(0_0_0/0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-pink"
          >
            Begär offert
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}
