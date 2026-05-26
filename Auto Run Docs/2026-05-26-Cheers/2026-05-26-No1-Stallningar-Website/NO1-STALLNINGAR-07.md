# Phase 07: SEO & Accessibility

This phase adds the structured data and technical SEO that helps No1 Ställningar rank in local Google results: a JSON-LD LocalBusiness schema, a complete sitemap.xml, robots.txt, and per-page Open Graph / Twitter Card meta tags already wired through PageHelmet. It then runs a systematic WCAG accessibility pass — keyboard navigation, focus styles, ARIA attributes, colour contrast, and heading hierarchy — so the site is both findable and usable by everyone.

## Tasks

- [ ] Create `src/components/LocalBusinessSchema.tsx` — renders a `<script type="application/ld+json">` JSON-LD block via `<Helmet>` using the LocalBusiness schema:
  ```ts
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": contactInfo.companyName,
    "legalName": contactInfo.legalName,
    // Update this URL to the real domain before launch
    "url": "https://no1stallningar.se",
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
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "07:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "13:00"
      },
    ],
    "areaServed": contactInfo.serviceArea.map(area => ({ "@type": "City", "name": area })),
    "priceRange": "$$",
    "description": "Professionell uthyrning och montering av byggnadsställningar i Göteborg och omnejd.",
    "sameAs": [],
  }
  ```
  - Add `<LocalBusinessSchema />` to `src/App.tsx` inside `<HelmetProvider>` so it renders on every page

- [ ] Update `public/sitemap.xml` with all six routes (use placeholder domain — update to real domain before launch):
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

- [ ] Semantic HTML audit — read each page file and fix any issues found:
  - Verify each page has exactly **one `<h1>`** — fix any that have zero or more than one
  - Verify heading hierarchy is logical (h1 → h2 → h3) with no skipped levels
  - Confirm `<nav aria-label="Huvudnavigation">` wraps the main navigation in Header
  - Confirm `<main id="main-content">` wraps all page content (excluding Header/Footer)
  - Confirm `<footer>` is a direct child of `<body>` context (not inside `<main>`)
  - Confirm all `<img>` have meaningful Swedish `alt` text; decorative images use `alt=""`
  - Confirm all links have descriptive text or `aria-label` — no bare "klicka här"

- [ ] WCAG keyboard navigation pass:
  - Tab through every interactive element on every page in the dev server
  - Confirm all buttons, links, inputs, selects, and accordion toggles are reachable
  - Confirm focus order is logical (top-to-bottom, left-to-right at each breakpoint)
  - Confirm the mobile hamburger menu closes with the Escape key
  - Confirm accordion items toggle with Enter and Space keys
  - Confirm the skip-to-content link ("Hoppa till innehåll") appears on first Tab press and moves focus to `#main-content`

- [ ] WCAG focus and colour contrast pass:
  - Confirm `focus-visible` amber ring (`outline: 2px solid #F59E0B`) is visible on every interactive element — if any component overrides `outline: none`, restore it
  - Visually verify colour combinations:
    - White text on `#1B2A4A` (brand-blue) — passes WCAG AA (contrast ratio ~10:1)
    - Dark body text (`#1F2937`) on white — passes WCAG AA
    - Amber (`#F59E0B`) is used only decoratively (icons, bars) — never as the sole carrier of information
  - Confirm form error messages are red text AND include an icon or label — not colour alone

- [ ] ARIA attributes audit — read and fix the following components if any are missing:
  - `Header.tsx` hamburger button: `aria-expanded={isMenuOpen}`, `aria-label` toggles between "Öppna meny" and "Stäng meny"
  - `AccordionItem.tsx`: trigger button has `aria-expanded`, `aria-controls={panelId}`; panel has `id={panelId}`, `aria-labelledby={triggerId}`, `role="region"`
  - `QuoteForm.tsx`: each error `<p>` has `role="alert"`; error messages linked to inputs via `aria-describedby`; success/error banners have `aria-live="polite"`
  - Contact page Google Maps `<iframe>`: `title="Karta över No1 Ställningar i Göteborg"` and `aria-label`

- [ ] Image loading strategy check:
  - Confirm the hero section image/background (above the fold) does NOT use `loading="lazy"`
  - Confirm all gallery images in `Projects.tsx` use `loading="lazy"`
  - Confirm the about page Unsplash placeholder image uses `loading="lazy"` (below the fold)

- [ ] Run production build and confirm zero errors: `npm run build && npx tsc --noEmit`
