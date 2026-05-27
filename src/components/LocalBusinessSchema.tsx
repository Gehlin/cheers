import { Helmet } from 'react-helmet-async'
import { contactInfo } from '@/data/contact'

/**
 * Renders a JSON-LD LocalBusiness structured data script tag via Helmet.
 * Mount this once inside <HelmetProvider> (currently in App.tsx) so it
 * appears on every page.
 *
 * NOTE: Update `url` and `sameAs` to real values before launch.
 */
export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: contactInfo.companyName,
    legalName: contactInfo.legalName,
    url: 'https://no1scaff.se',
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: contactInfo.address.city,
      addressCountry: contactInfo.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: contactInfo.geo.latitude,
      longitude: contactInfo.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '13:00',
      },
    ],
    areaServed: contactInfo.serviceArea.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    priceRange: '$$',
    description:
      'Professionell uthyrning och montering av byggnadsställningar i Göteborg och omnejd.',
    sameAs: [],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
