# No1 Ställningar — Phase 02: Design System & Layout

## Goal
Configure Tailwind with a cohesive color palette, build the sticky Header and Footer components, create the 404 page, and establish global typography and spacing.

## Design Direction
- **Primary:** Deep industrial blue `#1B2A4A` — conveys trust, professionalism, safety
- **Accent:** Warm amber/orange `#F59E0B` — construction energy, CTAs, hover states
- **Neutrals:** `#F8F9FA` (off-white bg), `#6B7280` (muted text), `#1F2937` (body text)
- **Success:** `#10B981` | **Error:** `#EF4444`
- **Font:** System sans-serif stack for performance; headings bold weight

## Tasks

- [ ] Update `tailwind.config.js` to extend the theme with brand tokens:
  ```js
  /** @type {import('tailwindcss').Config} */
  export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          brand: {
            blue:      '#1B2A4A',
            'blue-dark': '#111d34',
            amber:     '#F59E0B',
            'amber-dark': '#D97706',
          },
          neutral: {
            bg:    '#F8F9FA',
            muted: '#6B7280',
            body:  '#1F2937',
          },
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  ```
- [ ] Update `src/index.css` to import Tailwind directives and set global base styles:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    html { scroll-behavior: smooth; }
    body { @apply font-sans text-neutral-body bg-white; }
    :focus-visible { @apply outline-2 outline-offset-2 outline-brand-amber; }
    a { @apply transition-colors duration-200; }
  }

  @layer utilities {
    .section-padding { @apply py-16 px-4 sm:px-6 lg:px-8; }
    .container-max  { @apply max-w-7xl mx-auto; }
  }
  ```
- [ ] Create `src/components/Header.tsx` — sticky header with:
  - Company logo/name "No1 Ställningar" on the left (text-based, styled bold with brand-blue background or white text on dark bg)
  - Navigation links: Hem, Tjänster, Projekt, Om oss, Kontakt — using `NavLink` from `react-router-dom` with active state styling
  - A prominent amber "Begär offert" CTA button on the right linking to `/begar-offert`
  - Hamburger menu for mobile (toggled with React state), full-width dropdown nav on small screens
  - `position: sticky; top: 0; z-index: 50` with a subtle box shadow on scroll (use a scroll event listener or Intersection Observer)
  - `aria-label="Huvudnavigation"` on the `<nav>` element
  - Skip-to-content link as the very first focusable element: `<a href="#main-content" className="sr-only focus:not-sr-only ...">Hoppa till innehåll</a>`
- [ ] Create `src/components/Footer.tsx` with three columns:
  1. Company info: name, tagline, address (Göteborg), phone (click-to-call `tel:`), email (click-to-email `mailto:`)
  2. Quick links: all six pages
  3. Service area: "Vi utför arbeten i Göteborg med omnejd: Mölndal, Partille, Kungsbacka, Lerum, Härryda"
  - Bottom bar: `© {new Date().getFullYear()} No1 Ställningar. Alla rättigheter förbehållna.`
  - Dark background (`bg-brand-blue text-white`)
- [ ] Create `src/components/Button.tsx` — reusable button with variants: `primary` (amber fill), `secondary` (blue fill), `outline` (bordered). Accepts `as="a"` or `as="button"`, `href`, `onClick`, `disabled`, `loading` (shows spinner). Full keyboard focus styles.
- [ ] Create `src/components/SectionHeading.tsx` — reusable `<h2>` component with optional subtitle `<p>`, centered or left-aligned variant, and a decorative amber underline/bar.
- [ ] Create `src/pages/NotFound.tsx` — Swedish 404 page:
  - `<h1>` "404 – Sidan hittades inte"
  - Body text: "Sidan du letar efter finns inte eller har flyttats."
  - CTA button back to home: "Gå till startsidan"
  - Includes `<Helmet>` with `<title>404 – Sidan hittades inte | No1 Ställningar</title>`
- [ ] Create `src/App.tsx` — set up `BrowserRouter`, `Routes` with placeholders for all routes (Hem `/`, Tjänster `/tjanster`, Projekt `/projekt`, Om oss `/om-oss`, Kontakt `/kontakt`, Begär offert `/begar-offert`, 404 catch-all `*`). Wrap routes with `<Header>` and `<Footer>`. Add `id="main-content"` to the `<main>` element wrapping `<Outlet>` or route children.
- [ ] Wrap the app in `<HelmetProvider>` from `react-helmet-async` in `src/main.tsx`
- [ ] Create `src/types/index.ts` with shared TypeScript interfaces (to be expanded in later phases):
  ```ts
  export interface ServiceItem { id: string; title: string; description: string; icon: string; }
  export interface TestimonialItem { id: string; name: string; company: string; quote: string; }
  export interface ProjectItem { id: string; title: string; caption: string; imageUrl: string; }
  export interface FaqItem { id: string; question: string; answer: string; }
  ```
- [ ] Verify layout renders correctly with placeholder page content at all routes: `npm run dev`
