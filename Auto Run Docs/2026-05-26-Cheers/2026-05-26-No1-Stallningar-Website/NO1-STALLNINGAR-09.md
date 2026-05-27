# No1 Ställningar — Phase 09: Favicon, OG Image, Floating Call Button & Gallery Lightbox

## Goal
Add a branded favicon, a proper Open Graph social share image, a floating click-to-call button for mobile conversions, and a lightbox for the project gallery.

## Tasks

### Favicon

- [ ] Create `public/favicon.svg` — a clean branded SVG favicon using the brand colors. Use a rounded square with `#1B2A4A` background and the text "N1" in bold white with an amber accent dot or underline. Example structure:
  ```svg
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="6" fill="#1B2A4A"/>
    <text x="16" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="white">N1</text>
    <rect x="8" y="26" width="16" height="2" rx="1" fill="#F59E0B"/>
  </svg>
  ```
- [ ] Update `index.html` to reference the new favicon and add an Apple touch icon fallback:
  ```html
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/favicon.svg" />
  <meta name="theme-color" content="#1B2A4A" />
  ```

### Open Graph Social Image

- [ ] Create `public/og-image.svg` — a 1200×630 branded social share image. Include:
  - `#1B2A4A` background filling the full canvas
  - A subtle diagonal stripe pattern (same as the hero section)
  - Company name "No1 Ställningar" in large bold white text (centered, ~72px)
  - Tagline "Professionella ställningar i Göteborg" below in white/80 (~32px)
  - An amber (#F59E0B) horizontal bar or decorative line element
  - Bottom-left: "no1stallningar.se" in small amber text
  ```svg
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
    <rect width="1200" height="630" fill="#1B2A4A"/>
    <!-- diagonal stripes -->
    <pattern id="stripes" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(135)">
      <rect width="40" height="80" fill="rgba(255,255,255,0.03)"/>
    </pattern>
    <rect width="1200" height="630" fill="url(#stripes)"/>
    <!-- amber bar -->
    <rect x="0" y="580" width="1200" height="6" fill="#F59E0B"/>
    <!-- company name -->
    <text x="600" y="270" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="700" font-size="80" fill="white">No1 Ställningar</text>
    <!-- tagline -->
    <text x="600" y="350" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="400" font-size="36" fill="rgba(255,255,255,0.8)">Professionella ställningar i Göteborg</text>
    <!-- domain -->
    <text x="60" y="610" font-family="system-ui, sans-serif" font-size="24" fill="#F59E0B">no1stallningar.se</text>
  </svg>
  ```
- [ ] Update `src/components/PageHelmet.tsx` to accept an optional `ogImage` prop (defaults to `"/og-image.svg"`) and add the following meta tags:
  ```tsx
  <meta property="og:image" content={`https://no1stallningar.se${ogImage ?? '/og-image.svg'}`} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:image" content={`https://no1stallningar.se${ogImage ?? '/og-image.svg'}`} />
  <meta name="twitter:card" content="summary_large_image" />
  ```

### Floating Call Button

- [ ] Create `src/components/FloatingCallButton.tsx` — a fixed-position click-to-call button:
  - Position: `fixed bottom-6 right-6 z-40`
  - Renders an `<a href="tel:{contactInfo.phone}">` element
  - Circular button (`w-14 h-14 rounded-full`) with `bg-brand-amber` background and a white phone SVG icon
  - Pulse animation ring: a second `absolute` circle behind it with `animate-ping bg-brand-amber/40`
  - `aria-label="Ring oss"` on the anchor element
  - On desktop (`md:` and up): expand to show the phone number as a pill — `flex items-center gap-2 px-5 py-3 rounded-full` with "Ring oss" label — toggle the expanded state based on a `hover` class or `group` Tailwind pattern
  - Only render if `contactInfo.phone` is not the placeholder `'+46 XXX XXX XXX'` — if it's still a placeholder, show the button anyway but log a console warning: `console.warn('FloatingCallButton: phone number is still a placeholder')`
- [ ] Add `<FloatingCallButton />` to `src/App.tsx` (inside the Router, outside the Routes, after `<CookieBanner />`)

### Gallery Lightbox

- [ ] Install the lightbox library: `npm install yet-another-react-lightbox`
- [ ] Update `src/pages/Projekt.tsx` to implement a lightbox:
  - Import `Lightbox` from `"yet-another-react-lightbox"`
  - Import the CSS: `import "yet-another-react-lightbox/styles.css"`
  - Add state: `const [lightboxIndex, setLightboxIndex] = useState(-1)` (−1 = closed)
  - Pass `slides` prop: `projects.map(p => ({ src: p.imageUrl, alt: p.title }))`
  - Wrap each gallery image in a `<button>` with `onClick={() => setLightboxIndex(index)}`, `aria-label={`Visa bild: ${project.title}`}`, and cursor-pointer styling
  - Render `<Lightbox open={lightboxIndex >= 0} close={() => setLightboxIndex(-1)} index={lightboxIndex} slides={slides} />` at the bottom of the page component
  - Add keyboard support note: yet-another-react-lightbox handles Escape/arrow keys natively
- [ ] Run `npm run build` and verify the build completes with zero errors. Check that the lightbox chunk is reasonable in size (< 100 KB gzip).
