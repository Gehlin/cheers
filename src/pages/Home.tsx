import { Link } from 'react-router-dom'
import PageHelmet from '@/components/PageHelmet'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import Icon from '@/components/Icon'
import HeroVideo from '@/components/HeroVideo'
import ShowcaseStrip from '@/components/ShowcaseStrip'
import PartnerTicker from '@/components/PartnerTicker'
import { services } from '@/data/services'
import { testimonials } from '@/data/testimonials'

const whyPoints = [
  {
    title: 'Certifierad personal',
    body: 'Vår personal har nödvändig utbildning och certifiering för säkert arbete på höjd.',
  },
  {
    title: 'Flexibla lösningar',
    body: 'Vi anpassar varje ställning efter era specifika krav och tidsramar.',
  },
  {
    title: 'Snabb leverans',
    body: 'Vi levererar och monterar ställningar inom kort varsel för att hålla ert projekt på rätt spår.',
  },
  {
    title: 'Alltid tryggt',
    body: 'All vår utrustning är CE-märkt och regelbundet besiktad för er och era medarbetares säkerhet.',
  },
]

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

export default function Home() {
  return (
    <>
      <PageHelmet
        title="No1 Ställningar – Professionella ställningar i Göteborg"
        description="Säkra och flexibla ställningslösningar för bygg, renovering och underhåll i Göteborg. Begär offert idag."
        path="/"
      />

      {/*
        DRONE VIDEO: When the drone video is ready:
        1. Place the file at public/videos/drone-showcase.mp4
           Recommended: 1920×1080, H.264, < 15 MB for web
        2. Create a poster image: public/images/hero-poster.jpg (1920×1080)
        3. Uncomment the videoSrc and posterSrc props on <HeroVideo>
        4. Optionally add WebM format for better browser support
      */}
      <HeroVideo
        // videoSrc="/videos/drone-showcase.mp4"  ← uncomment when video is ready
        // posterSrc="/images/hero-poster.jpg"     ← uncomment when poster image is ready
        headline="Professionella ställningar i Göteborg"
        subheadline="No 1 Scaffolding Company AB — säkra och anpassade ställningslösningar för bygg, renovering och underhåll i Västra Götaland och Hallands län."
        primaryCta={{ label: 'Begär offert', href: '/begar-offert' }}
        secondaryCta={{ label: 'Se våra tjänster', href: '/tjanster' }}
      />

      {/* Replace placeholder images with real project photos or embed drone video before launch */}
      <ShowcaseStrip images={showcaseImages} />

      {/* Short Intro */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <SectionHeading title="Om No1 Ställningar" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-2">
            {[
              { icon: 'wrench' as const, label: '10+ års erfarenhet' },
              { icon: 'building' as const, label: '100+ genomförda projekt' },
              { icon: 'location' as const, label: 'Göteborg & omnejd' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink">
                  <Icon name={icon} className="w-7 h-7" />
                </div>
                <p className="font-semibold text-lg text-neutral-body">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner ticker — update src/data/partners.ts with real company names/logos before launch */}
      <PartnerTicker />

      {/* Services Overview */}
      <section className="bg-neutral-bg section-padding">
        <div className="container-max">
          <SectionHeading title="Våra tjänster" subtitle="Vi erbjuder ett komplett utbud av ställningslösningar för alla typer av projekt." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/tjanster"
              className="text-brand-pink font-semibold hover:text-brand-pink-dark underline underline-offset-4"
            >
              Se alla tjänster →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <SectionHeading title="Varför välja oss?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {whyPoints.map(({ title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-brand-pink/10 flex-shrink-0 flex items-center justify-center text-brand-pink">
                  <Icon name="check" className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-body mb-1">{title}</h3>
                  <p className="text-neutral-muted leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-bg section-padding">
        <div className="container-max">
          <SectionHeading title="Vad våra kunder säger" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
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
