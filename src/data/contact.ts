export const contactInfo = {
  companyName: 'No1 Ställningar',
  legalName: 'No 1 Scaffolding Company AB',
  address: {
    street: 'Marieholmsgatan 126 C',
    city: 'Göteborg',
    postalCode: '415 02',
    country: 'Sweden',
    countryCode: 'SE',
  },
  contacts: [
    {
      name: 'Martin Wanneklint',
      phone: '0708-443132',
      phoneHref: 'tel:+46708443132',
      email: 'martin@no1scaff.se',
    },
    {
      name: 'Ulf Larsson',
      phone: '0705-882497',
      phoneHref: 'tel:+46705882497',
      email: 'ulf.larsson@no1scaff.se',
    },
  ],
  // Primary contact (used in form recipient, JSON-LD, footer)
  phone: '0708-443132',
  phoneHref: 'tel:+46708443132',
  email: 'martin@no1scaff.se',
  openingHours: [
    { days: 'Måndag–Fredag', hours: '07:00–17:00' },
    { days: 'Lördag',        hours: '08:00–13:00' },
    { days: 'Söndag',        hours: 'Stängt' },
  ],
  geo: { latitude: 57.7214, longitude: 11.9877 }, // Marieholmsgatan, Göteborg
  serviceArea: ['Göteborg', 'Mölndal', 'Partille', 'Kungsbacka', 'Lerum', 'Härryda', 'Kungälv', 'Halland', 'Västra Götaland'],
  domain: 'no1scaff.se',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.0!2d11.9877!3d57.7214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTfCsDQzJzE3LjAiTiAxMcKwNTknMTUuNyJF!5e0!3m2!1ssv!2sse!4v1234567890',
} as const

export type ContactInfo = typeof contactInfo
