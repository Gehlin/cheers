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
    body: 'I all verksamhet sträva efter att ständigt förbättra våra produkter och tjänster och anpassa dem efter våra kunders behov.',
    icon: 'check' as const,
  },
]

export default function OmOss() {
  return (
    <>
      <PageHelmet
        title="Om oss – Erfaret ställningsföretag i Göteborg"
        description="No1 Ställningar är ett erfarent ställningsföretag baserat i Göteborg. Läs om vår historia, kompetens och säkerhetsfilosofi."
        path="/om-oss"
      />

      {/* Page Hero */}
      <section className="bg-brand-pink text-white min-h-[30vh] flex items-center section-padding">
        <div className="container-max w-full">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Om No1 Ställningar</h1>
          <p className="text-lg text-white/80 max-w-xl">
            Lokalt förankrade — professionellt genomförda
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Vår historia" align="left" />
              <p className="text-neutral-muted leading-relaxed">
                No 1 Scaffolding Company AB i Göteborg är ett ställningsföretag som erbjuder allt
                inom byggnadsställningar. Med bred kompetens, lång erfarenhet och rätt utbildning
                monterar vi ställningar åt kunder i Västra Götaland och Hallands län.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden bg-neutral-100 flex items-center justify-center h-72 lg:h-auto">
              <img
                src="https://placehold.co/800x600/E91E8C/ffffff?text=No1+Ställningar"
                alt="No1 Ställningar – Ställningar under pågående byggprojekt"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values 2×2 Grid */}
      <section className="bg-neutral-bg section-padding">
        <div className="container-max">
          <SectionHeading title="Våra värderingar" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {companyValues.map(({ title, body, icon }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 flex gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex-shrink-0 flex items-center justify-center text-brand-pink">
                  <Icon name={icon} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-body mb-2">{title}</h3>
                  <p className="text-neutral-muted text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <SectionHeading title="Kompetens och certifiering" />
          <p className="text-neutral-muted leading-relaxed text-center max-w-2xl mx-auto mb-10">
            Vår personal är utbildad och certifierad för arbete på höjd i enlighet med
            Arbetsmiljöverkets föreskrifter. Vi genomför regelbundna säkerhetskontroller och håller
            oss uppdaterade på gällande regler och standarder inom branschen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: '10+', label: 'År i branschen' },
              { value: '100+', label: 'Genomförda projekt' },
              { value: '✓', label: 'Certifierad personal' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100 text-center"
              >
                <p className="text-4xl font-bold text-brand-pink mb-2">{value}</p>
                <p className="text-neutral-muted font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Philosophy */}
      <section className="bg-brand-pink text-white section-padding">
        <div className="container-max max-w-3xl">
          <SectionHeading title="Säkerhet är vår prioritet" />
          <p className="text-white/80 leading-relaxed text-center mb-8">
            Varje ställning vi monterar inspekteras noggrant innan överlämning. Vi arbetar enligt
            gällande arbetsmiljölagstiftning och EU-standarder. CE-märkt utrustning, dokumenterade
            riskbedömningar och utbildad personal är självklarheter för oss.
          </p>
          <ul className="space-y-4">
            {safetyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 text-white">
                  <Icon name="check" className="w-5 h-5" />
                </span>
                <span className="text-white/90">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-white section-padding">
        <div className="container-max text-center">
          <SectionHeading title="Vårt verksamhetsområde" />
          <p className="text-neutral-muted leading-relaxed max-w-xl mx-auto mb-8">
            Vi utför ställningsarbeten i Göteborg och omgivande kommuner.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {contactInfo.serviceArea.map((area) => (
              <span
                key={area}
                className="rounded-full bg-brand-pink/10 px-4 py-2 text-sm font-semibold text-brand-pink"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-bg section-padding">
        <div className="container-max max-w-3xl">
          <SectionHeading title="Vanliga frågor" />
          <Accordion items={faqItems} />
        </div>
      </section>
    </>
  )
}
