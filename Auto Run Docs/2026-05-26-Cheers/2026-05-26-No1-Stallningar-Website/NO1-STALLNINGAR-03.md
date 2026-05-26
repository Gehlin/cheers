# No1 Ställningar — Phase 03: Data & Config Files

## Goal
Extract all editable content into structured data files under `src/data/` so the client can update text, services, FAQ, testimonials, and project captions without touching component code.

## Tasks

- [x] Create `src/data/contact.ts` with the company's contact details:
  ```ts
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
  ```

- [x] Create `src/data/navigation.ts`:
  ```ts
  export const navLinks = [
    { label: 'Hem',          href: '/' },
    { label: 'Tjänster',     href: '/tjanster' },
    { label: 'Projekt',      href: '/projekt' },
    { label: 'Om oss',       href: '/om-oss' },
    { label: 'Kontakt',      href: '/kontakt' },
  ] as const
  ```

- [x] Create `src/data/services.ts` with all five service types as an array of `ServiceItem`:
  ```ts
  import type { ServiceItem } from '@/types'
  export const services: ServiceItem[] = [
    {
      id: 'fasad',
      title: 'Fasadställningar',
      description: 'Professionella fasadställningar för alla typer av byggprojekt. Vi anpassar konstruktionen efter byggnadens form och projektets behov, med fokus på säkerhet och tillgänglighet.',
      icon: 'building',
    },
    {
      id: 'rull',
      title: 'Rullställningar',
      description: 'Mobila rullställningar för inomhus- och utomhusarbeten där flexibilitet krävs. Enkla att flytta och anpassa — perfekta för underhållsarbeten och mindre renoveringar.',
      icon: 'arrows',
    },
    {
      id: 'vaderskydd',
      title: 'Väderskydd',
      description: 'Heltäckande väderskydd som skyddar byggarbetsplatsen mot regn, vind och kyla. Möjliggör arbete året runt och skyddar material och konstruktion under byggtiden.',
      icon: 'cloud',
    },
    {
      id: 'takskydd',
      title: 'Takskydd / Skyddstak',
      description: 'Skyddstak och takskyddssystem som säkrar arbete på höjd och skyddar omgivningen. Uppfyller gällande säkerhetskrav och anpassas till projektets specifika förhållanden.',
      icon: 'shield',
    },
    {
      id: 'hyra',
      title: 'Hyra och montering',
      description: 'Vi erbjuder både uthyrning och professionell montering av ställningar. Vårt erfarna team monterar, justerar och demonterar — du fokuserar på ditt projekt.',
      icon: 'wrench',
    },
  ]
  ```

- [x] Create `src/data/testimonials.ts`:
  ```ts
  import type { TestimonialItem } from '@/types'
  export const testimonials: TestimonialItem[] = [
    {
      id: '1',
      name: 'Anders Lindqvist',
      company: 'Lindqvist Bygg AB',
      quote: 'Professionellt bemötande från start till slut. Ställningarna var monterade i tid och säkerheten var alltid prioritet. Rekommenderas varmt!',
    },
    {
      id: '2',
      name: 'Maria Johansson',
      company: 'Fastighetsskötsel Väst',
      quote: 'Vi har anlitat No1 Ställningar vid flera tillfällen och är alltid nöjda. Snabb leverans, kunnig personal och konkurrenskraftiga priser.',
    },
    {
      id: '3',
      name: 'Erik Svensson',
      company: 'Privatkund, Göteborg',
      quote: 'Mycket nöjd med renoveringen av vårt flerfamiljshus. Ställningarna var säkra och väl anpassade till byggnaden. Bra kommunikation under hela projektet.',
    },
  ]
  ```

- [x] Create `src/data/projects.ts` with placeholder project entries:
  ```ts
  import type { ProjectItem } from '@/types'
  // Replace imageUrl values with real project photos before launch.
  // Recommended image size: 800×600px, format: WebP preferred.
  export const projects: ProjectItem[] = [
    {
      id: '1',
      title: 'Fasadrenovering, Haga',
      caption: 'Fasadställningar för renovering av äldre tegelbyggnad i centrala Göteborg.',
      imageUrl: 'https://placehold.co/800x600/1B2A4A/ffffff?text=Projekt+1',
    },
    {
      id: '2',
      title: 'Nybyggnation, Mölndal',
      caption: 'Ställningar för flerbostadshus under uppförande i Mölndal.',
      imageUrl: 'https://placehold.co/800x600/1B2A4A/ffffff?text=Projekt+2',
    },
    {
      id: '3',
      title: 'Takrenovering med väderskydd, Partille',
      caption: 'Skyddstak monterat för helrenovering av tak på villa i Partille.',
      imageUrl: 'https://placehold.co/800x600/1B2A4A/ffffff?text=Projekt+3',
    },
    {
      id: '4',
      title: 'Fasadmålning, Kungsbacka',
      caption: 'Rullställningar och fasadställningar för målning av bostadsrättsförening.',
      imageUrl: 'https://placehold.co/800x600/1B2A4A/ffffff?text=Projekt+4',
    },
    {
      id: '5',
      title: 'Industrilokal, Lerum',
      caption: 'Industriställningar för underhållsarbeten i produktionslokal.',
      imageUrl: 'https://placehold.co/800x600/1B2A4A/ffffff?text=Projekt+5',
    },
    {
      id: '6',
      title: 'Kontorsfastighet, Göteborg',
      caption: 'Fasadarbeten på modern kontorsfastighet i Göteborgs norra delar.',
      imageUrl: 'https://placehold.co/800x600/1B2A4A/ffffff?text=Projekt+6',
    },
  ]
  ```

- [x] Create `src/data/faq.ts` with common scaffolding questions:
  ```ts
  import type { FaqItem } from '@/types'
  export const faqItems: FaqItem[] = [
    {
      id: '1',
      question: 'Hur länge tar det att montera ställningar?',
      answer: 'Monteringstiden beror på projektets storlek och komplexitet. Enklare ställningar för en villa kan monteras på en dag, medan större fasadprojekt kan ta 2–4 dagar. Vi ger alltid en uppskattning i offerten.',
    },
    {
      id: '2',
      question: 'Behöver jag tillstånd för att sätta upp ställningar?',
      answer: 'För ställningar som upptar allmän platsmark (trottoar, gata) krävs tillstånd från kommunen. Vi hjälper gärna till med ansökan som en del av vårt tjänsteutbud. Kontakta oss för mer information.',
    },
    {
      id: '3',
      question: 'Vad kostar det att hyra ställningar?',
      answer: 'Priset varierar beroende på ställningstyp, storlek och hyresperiod. Vi erbjuder konkurrenskraftiga priser och skräddarsydda lösningar. Begär en kostnadsfri offert så återkommer vi snabbt.',
    },
    {
      id: '4',
      question: 'Är era ställningar CE-märkta och säkra?',
      answer: 'Ja. All vår utrustning uppfyller gällande EU-standarder och är CE-märkt. Vi arbetar enligt Arbetsmiljöverkets riktlinjer och genomför regelbundna säkerhetskontroller av all utrustning.',
    },
    {
      id: '5',
      question: 'Vilket område täcker ni?',
      answer: 'Vi är baserade i Göteborg och utför arbeten i hela Göteborgsregionen: Göteborg, Mölndal, Partille, Kungsbacka, Lerum, Härryda och Kungälv. Kontakta oss för projekt utanför dessa områden.',
    },
    {
      id: '6',
      question: 'Kan ni montera ställningar på helger?',
      answer: 'I vissa fall ja, beroende på projektets karaktär och framförhållning. Kontakta oss i god tid om ni behöver montering utanför ordinarie arbetstid.',
    },
  ]
  ```

- [x] Create `src/data/index.ts` that re-exports everything for clean imports:
  ```ts
  export * from './contact'
  export * from './navigation'
  export * from './services'
  export * from './testimonials'
  export * from './projects'
  export * from './faq'
  ```

- [x] Verify TypeScript compiles cleanly with no errors on the data files: `npx tsc --noEmit`
