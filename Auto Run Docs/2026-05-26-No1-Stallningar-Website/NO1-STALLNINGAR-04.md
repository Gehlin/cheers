# No1 Ställningar — Phase 04: Home & Services Pages

## Goal
Build the Hem (Home) page with all its sections and the Tjänster (Services) page with service cards and icons.

## Tasks

### Shared Components

- [ ] Create `src/components/ServiceCard.tsx` — displays a single service with an icon, title, and description. Accepts a `ServiceItem` prop. Clean card style with hover lift effect (`hover:-translate-y-1 transition-transform`), amber icon accent.
- [ ] Create `src/components/TestimonialCard.tsx` — displays a single testimonial with quote, name, and company. Includes a decorative quotation mark in amber. Accepts a `TestimonialItem` prop.
- [ ] Create `src/components/Icon.tsx` — lightweight SVG icon switcher. Accepts an `name` prop (`'building' | 'arrows' | 'cloud' | 'shield' | 'wrench' | 'check' | 'phone' | 'email' | 'location'`) and renders the corresponding inline SVG. Use simple, clean line icons appropriate for industrial/construction context.

### Home Page (`src/pages/Home.tsx`)

- [ ] Create `src/pages/Home.tsx` with `<Helmet>`:
  - `<title>No1 Ställningar – Professionella ställningar i Göteborg</title>`
  - `<meta name="description" content="No1 Ställningar erbjuder professionell uthyrning och montering av byggnadsställningar i Göteborg och omnejd. Begär offert idag." />`
  - Open Graph tags: `og:title`, `og:description`, `og:type="website"`, `og:locale="sv_SE"`

- [ ] **Hero Section:** Full-width section with `bg-brand-blue text-white`:
  - `<h1>` "Professionella ställningar i Göteborg" (bold, large)
  - Subheading `<p>` "Vi levererar säkra och anpassade ställningslösningar för bygg, renovering och underhåll — i rätt tid och till rätt pris."
  - Two CTA buttons: primary amber "Begär offert" (links to `/begar-offert`) and secondary outline "Se våra tjänster" (links to `/tjanster`)
  - Background: dark blue solid color with a subtle SVG diagonal pattern overlay for texture (CSS `background-image` with a small repeating pattern) — or use a CSS gradient
  - Minimum height `min-h-[80vh]` on desktop, centered content with `max-w-3xl`

- [ ] **Short Intro Section:** White background, centered:
  - `<h2>` "Om No1 Ställningar"
  - Three stat/icon highlights in a row: "10+ års erfarenhet", "100+ genomförda projekt", "Göteborg & omnejd" — each with an amber icon above

- [ ] **Services Overview Section:** Light grey background (`bg-neutral-bg`):
  - `<h2>` "Våra tjänster"
  - Render all 5 `ServiceCard` components from `services` data in a responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`)
  - "Se alla tjänster" link at the bottom pointing to `/tjanster`

- [ ] **Why Choose Us Section:** White background:
  - `<h2>` "Varför välja oss?"
  - Four points in a 2×2 grid on desktop, stacked on mobile — each with a checkmark icon:
    1. "Certifierad personal" — "Vår personal har nödvändig utbildning och certifiering för säkert arbete på höjd."
    2. "Flexibla lösningar" — "Vi anpassar varje ställning efter era specifika krav och tidsramar."
    3. "Snabb leverans" — "Vi levererar och monterar ställningar inom kort varsel för att hålla ert projekt på rätt spår."
    4. "Alltid tryggt" — "All vår utrustning är CE-märkt och regelbundet besiktad för er och era medarbetares säkerhet."

- [ ] **Testimonials Section:** Light grey background:
  - `<h2>` "Vad våra kunder säger"
  - Render all `TestimonialCard` components in a responsive grid (`grid-cols-1 md:grid-cols-3`)

- [ ] **Footer CTA Section:** Brand blue background, white text:
  - `<h2>` "Redo att komma igång?"
  - `<p>` "Kontakta oss idag för en kostnadsfri offert. Vi svarar inom 24 timmar."
  - Large amber "Begär offert" button linking to `/begar-offert`

### Services Page (`src/pages/Services.tsx`)

- [ ] Create `src/pages/Services.tsx` with `<Helmet>`:
  - `<title>Tjänster – Ställningar & uthyrning | No1 Ställningar</title>`
  - `<meta name="description" content="Vi erbjuder fasadställningar, rullställningar, väderskydd, takskydd och uthyrning av ställningar i Göteborg. Se alla våra tjänster." />`

- [ ] **Page Hero:** Medium-height banner (`min-h-[30vh]`) with blue background:
  - `<h1>` "Våra tjänster"
  - Subtitle: "Professionella ställningslösningar för alla typer av projekt"

- [ ] **Services Grid Section:** Detailed service cards, one per row on desktop (two columns max):
  - Map over `services` data
  - Each card is larger than on the home page, with more descriptive text and a bigger icon
  - Each card has an ID anchor (`id={service.id}`) so you can deep-link to individual services

- [ ] **Process Section:** Three steps in a horizontal row on desktop:
  - Step 1: "Begär offert" — "Fyll i vårt formulär eller ring oss. Vi svarar inom 24 timmar med en kostnadsuppskattning."
  - Step 2: "Vi planerar" — "Tillsammans går vi igenom projektets krav och planerar optimal ställningslösning."
  - Step 3: "Montering och uppföljning" — "Vårt team monterar ställningarna och finns tillgängliga under hela projektet."
  - Number badges (1, 2, 3) in amber circles

- [ ] **FAQ Teaser:** Section with first 3 FAQ items (accordion) and a "Se alla frågor" link. (Full FAQ with all items goes on the home page or its own section — use `faqItems.slice(0, 3)` here)

- [ ] **CTA Banner** at the bottom: same footer CTA pattern as Home page

- [ ] Run `npm run dev` and visually verify both pages render correctly, are responsive at mobile (375px) and desktop (1280px) widths
