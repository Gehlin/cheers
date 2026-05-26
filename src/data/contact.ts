export const contactInfo = {
  companyName: 'No1 Ställningar',
  // Legal name is MW Ställningar — "No1 Ställningar" is the trading/brand name
  legalName: 'MW Ställningar',
  address: {
    street: 'Göteborg',         // Update with real street address when available
    city: 'Göteborg',
    postalCode: '',             // Update when available
    country: 'Sweden',
    countryCode: 'SE',
  },
  phone: '+46 XXX XXX XXX',     // Update with real phone number
  email: 'martin@mwstallningar.se',
  openingHours: [
    { days: 'Måndag–Fredag', hours: '07:00–17:00' },
    { days: 'Lördag',        hours: '08:00–13:00' },
    { days: 'Söndag',        hours: 'Stängt' },
  ],
  // Göteborg city center approximate coordinates for JSON-LD and map embed
  geo: { latitude: 57.7089, longitude: 11.9746 },
  serviceArea: ['Göteborg', 'Mölndal', 'Partille', 'Kungsbacka', 'Lerum', 'Härryda', 'Kungälv'],
  googleMapsEmbedUrl: '', // Add Google Maps embed URL when available
} as const
