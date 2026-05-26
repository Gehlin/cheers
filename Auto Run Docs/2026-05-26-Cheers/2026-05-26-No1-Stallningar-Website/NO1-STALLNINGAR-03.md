# Phase 03: Shared Component Library

This phase builds the reusable UI components that every page will draw from — an Icon renderer, Button variants, SectionHeading, ServiceCard, TestimonialCard, Accordion, and a PageHelmet helper that centralises all SEO meta tag logic. Getting these right once means every page in Phase 04–05 composes cleanly from proven building blocks.

## Tasks

- [ ] Create `src/components/Icon.tsx` — inline SVG switcher for named icons used across the site:
  - Accepts `name: 'building' | 'arrows' | 'cloud' | 'shield' | 'wrench' | 'check' | 'phone' | 'email' | 'location' | 'quote' | 'chevron-down'` and `className?: string`
  - Each icon: a clean, single-colour line-style SVG (24×24 viewBox, `currentColor` stroke)
  - `building` — simple multi-storey outline (fasadställning context)
  - `arrows` — four-direction arrows (rullställning/mobility)
  - `cloud` — cloud outline (väderskydd)
  - `shield` — shield outline (takskydd/safety)
  - `wrench` — wrench outline (montering)
  - `check` — circle with checkmark (why-choose-us bullets)
  - `phone` — phone handset
  - `email` — envelope
  - `location` — map pin
  - `quote` — open-quote mark (testimonials)
  - `chevron-down` — downward chevron (accordion)

- [ ] Create `src/components/Button.tsx` — reusable polymorphic button:
  - Variants: `primary` (amber fill, dark text), `secondary` (brand-blue fill, white text), `outline` (transparent + white border for use on dark bg)
  - Props: `variant`, `href` (renders as `<a>` when provided), `onClick`, `disabled`, `loading` (spinner + "Skickar..." text), `className`, `children`
  - Full keyboard focus styles via the global `focus-visible` rule
  - Disabled state: `opacity-50 cursor-not-allowed`
  - Loading spinner: inline SVG with `animate-spin`, `aria-hidden="true"`, `aria-busy="true"` on the button

- [ ] Create `src/components/SectionHeading.tsx`:
  - Props: `title: string`, `subtitle?: string`, `align?: 'center' | 'left'` (default `center`)
  - Renders an `<h2>` with an amber decorative underline bar (`w-16 h-1 bg-brand-amber`)
  - Optional `<p>` subtitle in muted grey below

- [ ] Create `src/components/ServiceCard.tsx`:
  - Accepts `service: ServiceItem` from `@/types`
  - White card with rounded corners, subtle shadow, amber icon at top, bold title, description text
  - Hover: `hover:-translate-y-1 hover:shadow-lg transition-all duration-200`
  - Icon rendered via `<Icon name={service.icon} className="text-brand-amber w-8 h-8" />`

- [ ] Create `src/components/TestimonialCard.tsx`:
  - Accepts `testimonial: TestimonialItem`
  - Light grey card with a large amber quotation mark, italic quote text, name (bold), company (muted)

- [ ] Create `src/components/AccordionItem.tsx` and `src/components/Accordion.tsx`:
  - `AccordionItem`: props `question`, `answer`, `isOpen`, `onToggle`. Animated panel height using `max-height` transition (`max-h-0 overflow-hidden` → `max-h-screen`). Chevron icon rotates 180° when open. Full keyboard support: `onKeyDown` handling Enter/Space to toggle. ARIA: `aria-expanded={isOpen}`, `aria-controls={panelId}`, `id={headerId}` on the trigger button; `id={panelId}`, `aria-labelledby={headerId}`, `role="region"` on the panel.
  - `Accordion`: accepts `items: FaqItem[]`. Manages `openIndex` state (only one item open at a time). Maps items to `<AccordionItem>` components.

- [ ] Create `src/components/PageHelmet.tsx` — centralises all per-page meta tags:
  - Props: `title: string`, `description: string`, `path: string`
  - Renders via `<Helmet>`:
    - `<title>{title} | No1 Ställningar</title>`
    - `<meta name="description" content={description} />`
    - OG tags: `og:title`, `og:description`, `og:type="website"`, `og:locale="sv_SE"`, `og:url` (using a `SITE_URL` constant — set to `'https://no1stallningar.se'` with a comment to update before launch), `og:site_name="No1 Ställningar"`
    - Twitter Card tags: `twitter:card="summary"`, `twitter:title`, `twitter:description`
  - Define `SITE_URL` as a module-level constant in this file so it can be updated in one place

- [ ] Verify all components type-check cleanly: `npx tsc --noEmit`
- [ ] Run `npm run dev` and visually confirm the home page (Phase 01) still renders correctly with no regressions
