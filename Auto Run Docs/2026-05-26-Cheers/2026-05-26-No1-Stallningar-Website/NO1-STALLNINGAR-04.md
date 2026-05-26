# Phase 04: Home Page (Full) & Services Page

This phase completes the Home page by adding the Services overview, Why-Choose-Us, Testimonials, and Footer CTA sections on top of the hero built in Phase 01. It also builds the full Tjänster page with service cards, a process timeline, and a FAQ teaser. After this phase two of the six pages are production-ready.

## Tasks

- [ ] Expand `src/pages/Home.tsx` — add all remaining sections below the hero and stats row already built in Phase 01. Import data from `@/data`. Use `<SectionHeading>`, `<ServiceCard>`, `<TestimonialCard>`, `<Button>`, and `<Icon>` from `@/components`. Replace the `{/* TODO: Phase 03+ */}` placeholder comment with the real sections:
  - **Services Overview** (`bg-neutral-bg`):
    - `<SectionHeading title="Våra tjänster" subtitle="Allt från fasadställningar till väderskydd — vi har lösningen för ditt projekt." />`
    - Responsive grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`: map `services` array → `<ServiceCard>`
    - "Se alla tjänster →" text link at the bottom aligned right, linking to `/tjanster`
  - **Why Choose Us** (white bg):
    - `<SectionHeading title="Varför välja oss?" />`
    - 2×2 grid on desktop, stacked on mobile. Four items, each with `<Icon name="check" className="text-brand-amber" />` and bold title + body:
      1. "Certifierad personal" — "Vår personal har nödvändig utbildning och certifiering för säkert arbete på höjd."
      2. "Flexibla lösningar" — "Vi anpassar varje ställning efter era specifika krav och tidsramar."
      3. "Snabb leverans" — "Vi levererar och monterar ställningar inom kort varsel."
      4. "CE-märkt utrustning" — "All vår utrustning är CE-märkt och regelbundet besiktad."
  - **Testimonials** (`bg-neutral-bg`):
    - `<SectionHeading title="Vad våra kunder säger" />`
    - `grid-cols-1 md:grid-cols-3 gap-6`: map `testimonials` → `<TestimonialCard>`
  - **Footer CTA** (`bg-brand-blue text-white`):
    - `<h2>` "Redo att komma igång?"
    - `<p>` "Kontakta oss idag för en kostnadsfri offert. Vi svarar inom 24 timmar."
    - `<Button variant="primary" href="/begar-offert">Begär offert</Button>`

- [ ] Update `src/pages/Home.tsx` `<Helmet>` to use `<PageHelmet>` component from Phase 03:
  ```tsx
  <PageHelmet
    title="No1 Ställningar – Professionella ställningar i Göteborg"
    description="No1 Ställningar erbjuder professionell uthyrning och montering av byggnadsställningar i Göteborg och omnejd. Begär offert idag."
    path="/"
  />
  ```

- [ ] Create `src/pages/Services.tsx` — full Tjänster page:
  - `<PageHelmet title="Tjänster – Ställningar & uthyrning" description="Vi erbjuder fasadställningar, rullställningar, väderskydd, takskydd och uthyrning av ställningar i Göteborg." path="/tjanster" />`
  - **Page Hero** (`min-h-[30vh]`, `bg-brand-blue`):
    - `<h1>` "Våra tjänster"
    - Subtitle: "Professionella ställningslösningar för alla typer av projekt"
  - **Detailed Services Grid** (`bg-white`):
    - `<SectionHeading title="Vad vi erbjuder" align="left" />`
    - Map `services` to larger cards (two columns max on desktop) — each card has `id={service.id}` anchor for deep-linking, a bigger icon, and the full description text from the data file
  - **Process Section** (`bg-neutral-bg`):
    - `<SectionHeading title="Så här går det till" />`
    - Three steps in a horizontal row (desktop) / stacked (mobile), each with an amber numbered circle badge:
      1. "Begär offert" — "Fyll i formuläret eller ring oss. Vi svarar inom 24 timmar med en prisuppskattning."
      2. "Vi planerar" — "Tillsammans går vi igenom projektets krav och väljer optimal ställningslösning."
      3. "Montering och uppföljning" — "Vårt team monterar ställningarna och är tillgängliga under hela projektet."
  - **FAQ Teaser** (`bg-white`):
    - `<SectionHeading title="Vanliga frågor" />`
    - `<Accordion items={faqItems.slice(0, 3)} />` — first three items only
    - "Se alla frågor →" link to `/om-oss#faq`
  - **Footer CTA** — same pattern as Home page (extract into a shared `<CtaBanner />` component in `src/components/CtaBanner.tsx` if you haven't already — avoids copy-paste across pages):
    - "Redo att komma igång?" + amber "Begär offert" button

- [ ] Run `npm run dev` and verify both pages:
  - Home page: all five sections visible, responsive at 375px and 1280px
  - Services page: service cards, process steps, FAQ teaser all render correctly
  - No horizontal scroll at any breakpoint
  - Check TypeScript: `npx tsc --noEmit`
