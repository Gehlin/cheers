# Phase 05: Projects, About & Contact Pages

This phase builds the remaining three informational pages. The Projekt page displays a responsive lazy-loaded gallery using Unsplash placeholder photos (clearly marked for replacement). The Om oss page tells the company story with certifications, safety messaging, service area, and the full FAQ accordion. The Kontakt page has click-to-call/email links, opening hours, and a Google Maps embed with a graceful placeholder when the URL is not yet configured.

## Tasks

- [ ] Create `src/pages/Projects.tsx` — the Projekt (gallery) page:
  - `<PageHelmet title="Projekt – Referensbilder" description="Se exempel på våra genomförda ställningsprojekt i Göteborg och omnejd — fasadrenovering, nybyggnation, takskydd och mer." path="/projekt" />`
  - **Page Hero** (`bg-brand-blue`, `min-h-[30vh]`):
    - `<h1>` "Våra projekt"
    - Subtitle: "Ett urval av genomförda projekt i Göteborg och omnejd"
  - **Client Notice Banner** — a clearly styled info strip at the top of the gallery section (amber background, dark text, icon):
    - Text: "Platshållarbilder visas nu. Byt ut bilderna mot riktiga projektfoton innan lansering. Rekommenderad storlek: 800×600 px, format: WebP. Uppdatera bildvägarna i `src/data/projects.ts`."
    - Add a comment in JSX: `{/* REMOVE THIS BANNER before launch */}`
  - **Gallery Grid** (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`):
    - Map `projects` array; each item in a `<figure>`:
      - `<img src={project.imageUrl} alt={project.caption} loading="lazy" className="w-full h-56 object-cover rounded-t-lg" />`
      - Hover overlay: `absolute inset-0 bg-brand-blue/70 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center` with the project title in white
      - `<figcaption className="p-4 text-sm text-neutral-muted">{project.caption}</figcaption>`
    - Note in code comment: `// Images are from Unsplash (free to use). Replace with client photos before launch.`
  - **Gallery CTA** below the grid: "Vill du se mer? Kontakta oss för en kostnadsfri konsultation." + `<Button variant="secondary" href="/begar-offert">Begär offert</Button>`

- [ ] Create `src/pages/About.tsx` — the Om oss page:
  - `<PageHelmet title="Om oss – No1 Ställningar Göteborg" description="No1 Ställningar är ett erfaret ställningsföretag baserat i Göteborg. Läs om vår historia, kompetens och säkerhetsfilosofi." path="/om-oss" />`
  - **Page Hero**: `<h1>` "Om No1 Ställningar", subtitle "Lokalt förankrade — professionellt genomförda"
  - **Company Story** (two-column desktop — text left, image right):
    - `<h2>` "Vår historia"
    - Body paragraph about the company founding and local Göteborg roots
    - Placeholder image: `<img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80" alt="No1 Ställningar – Ställningar under pågående byggprojekt" loading="lazy" />` with comment `// PLACEHOLDER: replace with real company photo`
  - **Stats Row**: three amber-accented stat boxes: "10+ år", "100+ projekt", "Certifierad personal"
  - **Certifications Section** (`bg-neutral-bg`):
    - `<h2>` "Kompetens och certifiering"
    - Body text about Arbetsmiljöverket compliance, CE-märkt equipment, working-at-height training
  - **Safety Section** (`bg-brand-blue text-white`):
    - `<h2>` "Säkerhet är vår prioritet"
    - Four bullet points with `<Icon name="check">` in amber:
      - CE-märkt utrustning enligt EU-standard
      - Dokumenterade riskbedömningar för varje projekt
      - Regelbundna säkerhetskontroller av all utrustning
      - Certifierad utbildning för arbete på höjd
  - **Service Area** (`bg-white`):
    - `<h2>` "Vårt verksamhetsområde"
    - Intro text: "Vi utför ställningsarbeten i Göteborg och omgivande kommuner."
    - Render `contactInfo.serviceArea` as amber badge chips (`<span className="bg-brand-amber text-white rounded-full px-3 py-1 text-sm">`)
  - **Full FAQ** (`bg-neutral-bg`):
    - `<SectionHeading title="Vanliga frågor" id="faq" />` — add `id="faq"` to the wrapper div so the `/tjanster` "Se alla frågor" link deep-links here
    - `<Accordion items={faqItems} />` — all six items

- [ ] Create `src/pages/Contact.tsx` — the Kontakt page:
  - `<PageHelmet title="Kontakt – No1 Ställningar Göteborg" description="Kontakta No1 Ställningar i Göteborg. Ring, maila eller besök oss. Vi svarar snabbt på alla förfrågningar." path="/kontakt" />`
  - **Page Hero**: `<h1>` "Kontakta oss", subtitle "Vi svarar på alla förfrågningar inom 24 timmar på vardagar"
  - **Contact + Map** (two-column desktop):
    - Left column — contact details from `contactInfo`:
      - Phone: `<a href={`tel:${contactInfo.phone}`}>` with `<Icon name="phone" />` — large, tappable (min 44px tap target)
      - Email: `<a href={`mailto:${contactInfo.email}`}>` with `<Icon name="email" />`
      - Address with `<Icon name="location" />`
      - Opening hours: `<table>` or `<dl>` with rows from `contactInfo.openingHours`
      - `<Button variant="secondary" href="/begar-offert">Begär offert</Button>`
    - Right column — Google Maps embed:
      - If `contactInfo.googleMapsEmbedUrl` is non-empty: render `<iframe src={...} title="Karta över No1 Ställningar i Göteborg" aria-label="Google Maps karta" width="100%" height="400" loading="lazy" />`
      - If empty (default): render a styled placeholder `<div className="bg-neutral-bg border-2 border-dashed border-neutral-300 h-96 flex items-center justify-center rounded-lg">` with text "Karta visas här. Lägg till Google Maps embed-URL i src/data/contact.ts." — styled noticeably so it won't be accidentally shipped
  - **Quick CTA Banner** at the bottom: click-to-call and click-to-email buttons side by side — "Snabbaste sättet att nå oss:"

- [ ] Run `npm run dev` and verify all three pages at 375px and 1280px:
  - Gallery images load lazily (check Network tab — images outside viewport should not load immediately)
  - About page FAQ accordion opens/closes with keyboard and mouse
  - Contact page map placeholder is visible and clearly marked
  - No TypeScript errors: `npx tsc --noEmit`
