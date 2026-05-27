import PageHelmet from '@/components/PageHelmet'
import SectionHeading from '@/components/SectionHeading'
import Accordion from '@/components/Accordion'
import Icon from '@/components/Icon'
import { faqItems } from '@/data/faq'
import { contactInfo } from '@/data/contact'

const safetyPoints = [
  'CE-märkt utrustning enligt EU-standarder',
  'Dokumenterade riskbedömningar för varje projekt',
  'Regelbunden inspektion av all utrustning',
  'Certifierad utbildning för arbete på höjd',
]

const companyValues = [
  {
    title: 'Ständigt växande',
    body: 'No1 Scaffolding Company är ett företag i ständig tillväxt. Vår målsättning är att vara landets bästa ställningsföretag med stor fokus på kvalitet och kundmottagande.',
    icon: 'arrows' as const,
  },
  {
    title: 'Miljöpolicy',
    body: 'Vår strävan är att minska mängden förbrukningsmaterial och återanvända så mycket som möjligt, samt se över transporter för att minska våra utsläpp.',
    icon: 'cloud' as const,
  },
  {
    title: 'Vår affärsidé',
    body: 'Vår affärsidé är att vara en frisk fläkt i branschen och ständigt söka nya sätt att utveckla och förbättra. Vi bygger långsiktiga relationer som gynnar både dig som kund och vår möjlighet att arbeta effektivt.',
    icon: 'building' as const,
  },
  {
    title: 'Kvalitet',
    body: 'I all verksamhet strävar vi efter att ständigt förbättra våra produkter och tjänster och anpassa dem efter våra kunders behov.',
    icon: 'check' as const,
  },
]

const stats = [
  { value: '10+', label: 'År i branschen' },
  { value: '100+', label: 'Genomförda projekt' },
  { value: '✓', label: 'Certifierad personal' },
]

export default function OmOss() {
  return (
    <>
      <PageHelmet
        title="Om oss – Erfaret ställningsföretag i Göteborg"
        description="No 1 Scaffolding Company AB är ett erfarent ställningsföretag i Göteborg. Läs om vår historia, kompetens och säkerhetsfilosofi."
        path="/om-oss"
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
          <p className="eyebrow text-brand-pink mb-5">Lär känna oss</p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5 text-balance">Om No1 Ställningar</h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            Lokalt förankrade — professionellt genomförda.
          </p>
        </div>
      </section>

      {/* Company story */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading eyebrow="Vår historia" title="Om oss" align="left" />
              <p className="text-neutral-muted leading-relaxed text-base">
                No 1 Scaffolding Company AB i Göteborg är ett ställningsföretag som erbjuder allt
                inom byggnadsställningar. Med bred kompetens, lång erfarenhet och rätt utbildning
                monterar vi ställningar åt kunder i Västra Götaland och Hallands län.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden bg-neutral-bg border border-neutral-border aspect-[4/3]">
              <img
                src="https://placehold.co/800x600/F7F7F8/141416?text=Projektbild"
                alt="No1 Ställningar – Ställningar under pågående byggprojekt"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-neutral-bg section-pad-sm">
        <div className="container-max">
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center p-8 bg-white rounded-2xl border border-neutral-border">
                <p className="text-4xl font-black text-brand-pink mb-2">{value}</p>
                <p className="text-xs font-medium text-neutral-muted uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company values */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <SectionHeading eyebrow="Vad vi tror på" title="Våra värderingar" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {companyValues.map(({ title, body, icon }) => (
              <div
                key={title}
                className="bg-neutral-bg rounded-2xl border border-neutral-border p-7 flex gap-5 transition-all duration-200 hover:shadow-card-md hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-pink-tint flex-shrink-0 flex items-center justify-center text-brand-pink">
                  <Icon name={icon} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-body mb-1.5 tracking-tight">{title}</h3>
                  <p className="text-neutral-muted text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety — dark band */}
      <section className="bg-brand-dark text-white section-padding">
        <div className="container-max max-w-3xl">
          <SectionHeading eyebrow="Säkerhet" title="Säkerhet är vår prioritet" />
          <p className="text-white/60 leading-relaxed text-center mb-10">
            Varje ställning vi monterar inspekteras noggrant innan överlämning. Vi arbetar enligt
            gällande arbetsmiljölagstiftning och EU-standarder.
          </p>
          <ul className="space-y-3.5 max-w-xl mx-auto">
            {safetyPoints.map(point => (
              <li key={point} className="flex items-start gap-3.5">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-pink">
                  <Icon name="check" className="w-3 h-3" />
                </span>
                <span className="text-white/80 text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-white section-pad-sm">
        <div className="container-max text-center">
          <SectionHeading eyebrow="Täckning" title="Vårt verksamhetsområde" />
          <div className="flex flex-wrap justify-center gap-2.5 max-w-lg mx-auto">
            {contactInfo.serviceArea.map(area => (
              <span
                key={area}
                className="rounded-full bg-brand-pink-tint border border-brand-pink-subtle px-4 py-1.5 text-sm font-semibold text-brand-pink-dark"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-bg section-padding">
        <div className="container-max max-w-2xl">
          <SectionHeading eyebrow="Frågor & svar" title="Vanliga frågor" />
          <Accordion items={faqItems} />
        </div>
      </section>
    </>
  )
}
