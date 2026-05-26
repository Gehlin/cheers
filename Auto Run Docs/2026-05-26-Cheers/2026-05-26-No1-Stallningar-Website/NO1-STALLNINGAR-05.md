# No1 Ställningar — Phase 05: Projects, About & Contact Pages

## Goal
Build the Projekt (gallery), Om oss (about), and Kontakt (contact) pages.

## Tasks

### Shared Components

- [x] Create `src/components/AccordionItem.tsx` — a single collapsible FAQ row. Props: `question: string`, `answer: string`, `isOpen: boolean`, `onToggle: () => void`. Animated height transition using Tailwind's `transition-all duration-300`. Chevron icon rotates 180° when open. Full keyboard support (Enter/Space to toggle, proper `aria-expanded` and `aria-controls`).
- [x] Create `src/components/Accordion.tsx` — wraps a list of `AccordionItem` components. Manages open/close state (only one item open at a time). Accepts `items: FaqItem[]`.

### Projects Page (`src/pages/Projects.tsx`)

- [x] Create `src/pages/Projects.tsx` with `<Helmet>`:
  - `<title>Projekt – Referensbilder | No1 Ställningar</title>`
  - `<meta name="description" content="Se exempel på våra genomförda ställningsprojekt i Göteborg och omnejd — fasadrenovering, nybyggnation, takskydd och mer." />`

- [x] **Page Hero:** Same banner pattern as Services:
  - `<h1>` "Våra projekt"
  - Subtitle: "Ett urval av genomförda projekt i Göteborg och omnejd"

- [x] **Gallery Grid:** Responsive image grid:
  - Layout: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` with `gap-6`
  - Each cell: image (lazy loaded — `loading="lazy"`) with descriptive Swedish `alt` text, title overlay on hover (CSS overlay with `opacity-0 hover:opacity-100 transition-opacity`)
  - Below each image: `<p>` with the project caption from `projects` data
  - Images wrapped in `<figure>` with `<figcaption>`
  - A clearly visible note at the top of the page for the client: "Byt ut platshållarbilderna mot riktiga projektfoton. Rekommenderad bildstorlek: 800×600 px, format: WebP." — style this as an info banner that can be easily removed before launch

- [x] **Call-to-Action:** Below the grid — "Vill du se mer? Kontakta oss för en kostnadsfri konsultation." with a "Begär offert" button

### About Page (`src/pages/About.tsx`)

- [x] Create `src/pages/About.tsx` with `<Helmet>`:
  - `<title>Om oss – No1 Ställningar Göteborg</title>`
  - `<meta name="description" content="No1 Ställningar är ett erfarent ställningsföretag baserat i Göteborg. Läs om vår historia, kompetens och säkerhetsfilosofi." />`

- [x] **Page Hero:**
  - `<h1>` "Om No1 Ställningar"
  - Subtitle: "Lokalt förankrade — professionellt genomförda"

- [x] **Company Story Section:** Two-column layout on desktop (text left, placeholder image right):
  - `<h2>` "Vår historia"
  - Body text: "No1 Ställningar är ett Göteborgsbaserat företag med lång erfarenhet av ställningslösningar för byggbranschen. Vi grundades med en enkel idé: att erbjuda pålitliga, säkra och flexibla ställningar till konkurrenskraftiga priser. Idag är vi ett pålitligt val för byggföretag, fastighetsägare och privatpersoner i hela Göteborgsregionen."
  - Placeholder image with Swedish alt text: `alt="No1 Ställningar – Ställningar under pågående byggprojekt"`

- [x] **Experience & Certifications Section:**
  - `<h2>` "Kompetens och certifiering"
  - Body: "Vår personal är utbildad och certifierad för arbete på höjd i enlighet med Arbetsmiljöverkets föreskrifter. Vi genomför regelbundna säkerhetskontroller och håller oss uppdaterade på gällande regler och standarder inom branschen."
  - Three stat boxes: "10+ år", "100+ projekt", "Certifierad personal" — styled with amber numbers

- [x] **Safety Philosophy Section:** Blue background with white text:
  - `<h2>` "Säkerhet är vår prioritet"
  - Body: "Varje ställning vi monterar inspekteras noggrant innan överlämning. Vi arbetar enligt gällande arbetsmiljölagstiftning och EU-standarder. CE-märkt utrustning, dokumenterade riskbedömningar och utbildad personal är självklarheter för oss."
  - Four bullet points with check icons: certifications, risk assessments, regular equipment inspection, working-at-height training

- [x] **Service Area Section:**
  - `<h2>` "Vårt verksamhetsområde"
  - Body: "Vi utför ställningsarbeten i Göteborg och omgivande kommuner."
  - Display `serviceArea` array from `contactInfo` as styled tag/badge list in amber

- [x] **Full FAQ Section:**
  - `<h2>` "Vanliga frågor"
  - Render full `<Accordion items={faqItems} />` with all items from `faq.ts`

### Contact Page (`src/pages/Contact.tsx`)

- [x] Create `src/pages/Contact.tsx` with `<Helmet>`:
  - `<title>Kontakt – No1 Ställningar Göteborg</title>`
  - `<meta name="description" content="Kontakta No1 Ställningar i Göteborg. Ring, maila eller besök oss. Vi svarar snabbt på alla förfrågningar." />`

- [x] **Page Hero:**
  - `<h1>` "Kontakta oss"
  - Subtitle: "Vi svarar på alla förfrågningar inom 24 timmar på vardagar"

- [x] **Contact Info + Map Section:** Two-column layout on desktop:
  - Left column: contact details using `contactInfo` data
    - Phone with `<a href="tel:{phone}">` and phone icon — large, tappable for mobile
    - Email with `<a href="mailto:{email}">` and email icon
    - Address with location icon
    - Opening hours table rendered from `openingHours` array
    - "Begär offert" button linking to `/begar-offert`
  - Right column: Google Maps embed (`<iframe>`) using `contactInfo.googleMapsEmbedUrl`. If URL is empty, show a styled placeholder `<div>` with text "Karta läggs till när Google Maps embed-URL är konfigurerad." — the placeholder must be visually obvious so it's not accidentally shipped. Add `title="Karta över No1 Ställningar i Göteborg"` and `aria-label` to the iframe for accessibility.

- [x] **Quick Contact CTA:** Bottom banner — "Snabbaste sättet att nå oss är via telefon eller e-post. Vi svarar normalt inom några timmar på vardagar." with click-to-call and click-to-email buttons side by side.

- [x] Run `npm run dev` and verify all three pages render correctly at mobile and desktop breakpoints
