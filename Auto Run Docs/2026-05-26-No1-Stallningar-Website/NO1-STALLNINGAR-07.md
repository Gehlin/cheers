# No1 Ställningar — Phase 07: SEO & Accessibility

## Goal
Add per-page Helmet meta tags with Open Graph and Twitter Card support, JSON-LD LocalBusiness structured data, generate sitemap.xml and robots.txt, and perform a full accessibility pass.

## Tasks

### JSON-LD Structured Data

- [ ] Create `src/components/LocalBusinessSchema.tsx` — renders a `<script type="application/ld+json">` tag via `<Helmet>` with the LocalBusiness schema. Import from `contactInfo`:
  ```ts
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": contactInfo.companyName,
    "legalName": contactInfo.legalName,
    "url": "https://no1stallningar.se", // Update to real domain before launch
    "telephone": contactInfo.phone,
    "email": contactInfo.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": contactInfo.address.city,
      "addressCountry": contactInfo.address.countryCode,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": contactInfo.geo.latitude,
      "longitude": contactInfo.geo.longitude,
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "17:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "08:00", "closes": "13:00" },
    ],
    "areaServed": contactInfo.serviceArea.map(area => ({ "@type": "City", "name": area })),
    "priceRange": "$$",
    "description": "Professionell uthyrning och montering av byggnadsställningar i Göteborg och omnejd.",
    "sameAs": [],
  }
  ```
- [ ] Add `<LocalBusinessSchema />` to `src/App.tsx` so it renders on every page (inside `<HelmetProvider>`)

### Per-Page Helmet Tags (Open Graph + Twitter Card)

- [ ] **Home page** (`src/pages/Home.tsx`) — add/update `<Helmet>`:
  ```tsx
  <meta property="og:title" content="No1 Ställningar – Professionella ställningar i Göteborg" />
  <meta property="og:description" content="Säkra och flexibla ställningslösningar för bygg, renovering och underhåll i Göteborg." />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="sv_SE" />
  <meta property="og:url" content="https://no1stallningar.se" />
  <meta property="og:site_name" content="No1 Ställningar" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="No1 Ställningar – Ställningar i Göteborg" />
  <meta name="twitter:description" content="Professionell uthyrning och montering av byggnadsställningar." />
  ```
- [ ] Repeat the same OG/Twitter Card pattern (with page-appropriate title/description) for: Services, Projects, About, Contact, Quote pages
- [ ] Create a `src/components/PageHelmet.tsx` helper that accepts `title`, `description`, `path` props and renders all the `<Helmet>` tags (Helmet markup + OG + Twitter) to avoid repetition across all 6 pages

### Sitemap & Robots

- [ ] Update `public/sitemap.xml` with all six routes. Use the placeholder domain `https://no1stallningar.se` — update to real domain before launch:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://no1stallningar.se/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
    <url><loc>https://no1stallningar.se/tjanster</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
    <url><loc>https://no1stallningar.se/projekt</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
    <url><loc>https://no1stallningar.se/om-oss</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
    <url><loc>https://no1stallningar.se/kontakt</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
    <url><loc>https://no1stallningar.se/begar-offert</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  </urlset>
  ```
- [ ] Update `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://no1stallningar.se/sitemap.xml
  ```

### Semantic HTML Audit

- [ ] Verify every page has exactly **one `<h1>`** — fix any that don't
- [ ] Verify heading hierarchy is logical (h1 → h2 → h3) — no skipped levels
- [ ] Ensure `<nav>` is used for the main navigation and the footer navigation (footer quick links)
- [ ] Ensure `<main id="main-content">` wraps the page content (excluding header and footer)
- [ ] Ensure `<footer>` is used correctly (not inside `<main>`)
- [ ] Verify all `<img>` elements have meaningful Swedish `alt` text (decorative images use `alt=""`)
- [ ] Verify all `<a>` elements have descriptive text or `aria-label` — no "klicka här" or "läs mer" links without context
- [ ] Verify all form `<input>`, `<select>`, `<textarea>` are associated with `<label>` elements via `htmlFor`/`id`

### WCAG Accessibility Pass

- [ ] **Keyboard navigation:** Tab through every interactive element on every page. Verify:
  - All buttons, links, inputs reachable by keyboard
  - Focus order is logical (top to bottom, left to right)
  - Modal/dropdown closes with Escape key (hamburger menu)
  - Accordion items toggle with Enter/Space
- [ ] **Focus styles:** Verify `focus-visible` ring is visible on all interactive elements (amber ring set in global CSS). If browser default is overridden anywhere, restore it.
- [ ] **Skip link:** Verify the "Hoppa till innehåll" link (in Header) appears on first Tab press and focuses `#main-content`
- [ ] **Colour contrast:** Visually check that:
  - White text on `brand-blue` (#1B2A4A) passes WCAG AA (it should — dark blue is high contrast)
  - Black/dark text on white and `neutral-bg` passes
  - Amber (#F59E0B) is only used for icons and decorative elements, NOT as the only color carrying meaning — always pair with text or icons
- [ ] **ARIA on interactive elements:**
  - Hamburger button: `aria-label="Öppna meny"` / `aria-label="Stäng meny"` (toggled with state)
  - Hamburger button: `aria-expanded={isMenuOpen}`
  - Accordion items: `aria-expanded`, `aria-controls`, `id` on panel
  - Quote form: `aria-label="Offertformulär"`
  - Google Maps iframe: `title` attribute
- [ ] **Images:** Gallery images use `loading="lazy"`. Verify no `loading="lazy"` on above-the-fold images (hero) — those should load eagerly.
- [ ] **Reduced motion:** Add to `src/index.css`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  }
  ```
- [ ] Run `npm run build` and verify zero TypeScript/build errors. Fix any that appear.
