# Phase 02: Data & Config Layer

This phase extracts every piece of editable content into structured TypeScript data files under `src/data/`. After this phase the client can update services, FAQ answers, testimonials, project captions, contact details, and navigation labels by editing one clearly named file — no component code to touch. Projects are seeded with real Unsplash construction photos as placeholders, clearly commented for replacement.

## Tasks

- [ ] Create `src/data/contact.ts` with all company contact information:
  ```ts
  // "No1 Ställningar" is the trading/brand name; legal entity is MW Ställningar
  export const contactInfo = {
    companyName:  'No1 Ställningar',
    legalName:    'MW Ställningar',
    address: {
      street:     '',              // TODO: add real street address before launch
      city:       'Göteborg',
      postalCode: '',              // TODO: add real postal code before launch
      country:    'Sweden',
      countryCode:'SE',
    },
    phone:  '+46 XXX XXX XXX',    // TODO: replace with real phone number
    email:  'martin@mwstallningar.se',
    openingHours: [
      { days: 'Måndag–Fredag', hours: '07:00–17:00' },
      { days: 'Lördag',        hours: '08:00–13:00' },
      { days: 'Söndag',        hours: 'Stängt' },
    ],
    // Göteborg city center coordinates — update to exact business address before launch
    geo: { latitude: 57.7089, longitude: 11.9746 },
    serviceArea: ['Göteborg', 'Mölndal', 'Partille', 'Kungsbacka', 'Lerum', 'Härryda', 'Kungälv'],
    googleMapsEmbedUrl: '', // TODO: paste Google Maps embed iframe src here before launch
  } as const
  ```

- [ ] Create `src/data/navigation.ts`:
  ```ts
  export const navLinks = [
    { label: 'Hem',         href: '/' },
    { label: 'Tjänster',    href: '/tjanster' },
    { label: 'Projekt',     href: '/projekt' },
    { label: 'Om oss',      href: '/om-oss' },
    { label: 'Kontakt',     href: '/kontakt' },
  ] as const
  ```

- [ ] Create `src/data/services.ts` with all five service types:
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

- [ ] Create `src/data/testimonials.ts` with placeholder customer reviews:
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

- [ ] Create `src/data/projects.ts` with Unsplash placeholder images:
  ```ts
  import type { ProjectItem } from '@/types'

  // PLACEHOLDER IMAGES: These are free-to-use Unsplash photos for development preview.
  // Replace each imageUrl with the client's real project photos before launch.
  // Recommended: drop WebP files in src/assets/images/ and update these paths.
  // Recommended image size: 800×600 px, format: WebP preferred.
  export const projects: ProjectItem[] = [
    {
      id: '1',
      title: 'Fasadrenovering, Haga',
      caption: 'Fasadställningar för renovering av äldre tegelbyggnad i centrala Göteborg.',
      // PLACEHOLDER: replace with client photo
      imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '2',
      title: 'Nybyggnation, Mölndal',
      caption: 'Ställningar för flerbostadshus under uppförande i Mölndal.',
      // PLACEHOLDER: replace with client photo
      imageUrl: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '3',
      title: 'Takrenovering med väderskydd, Partille',
      caption: 'Skyddstak monterat för helrenovering av tak på villa i Partille.',
      // PLACEHOLDER: replace with client photo
      imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '4',
      title: 'Fasadmålning, Kungsbacka',
      caption: 'Rullställningar och fasadställningar för målning av bostadsrättsförening.',
      // PLACEHOLDER: replace with client photo
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '5',
      title: 'Industrilokal, Lerum',
      caption: 'Industriställningar för underhållsarbeten i produktionslokal.',
      // PLACEHOLDER: replace with client photo
      imageUrl: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '6',
      title: 'Kontorsfastighet, Göteborg',
      caption: 'Fasadarbeten på modern kontorsfastighet i Göteborgs norra delar.',
      // PLACEHOLDER: replace with client photo
      imageUrl: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=800&q=80',
    },
  ]
  ```

- [ ] Create `src/data/faq.ts` with six common scaffolding questions:
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

- [ ] Create `src/data/index.ts` barrel export:
  ```ts
  export * from './contact'
  export * from './navigation'
  export * from './services'
  export * from './testimonials'
  export * from './projects'
  export * from './faq'
  ```

- [ ] Update `src/components/Header.tsx` and `src/components/Footer.tsx` to import `contactInfo` and `navLinks` from `@/data` instead of hardcoded values (Phase 01 hardcoded them; this phase wires them to the data layer)

- [ ] Verify TypeScript compiles cleanly with no errors: `npx tsc --noEmit`
