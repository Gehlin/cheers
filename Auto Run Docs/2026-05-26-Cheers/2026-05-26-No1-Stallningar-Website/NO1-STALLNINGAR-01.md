# Phase 01: Foundation + Working Prototype

This phase bootstraps the entire project skeleton and delivers a visually running website by the end. It installs every dependency at once, configures Tailwind with the brand palette, and builds a sticky Header, Footer, and a full Home page hero section with a "Begär offert" CTA — so the dev server shows something exciting and real, not just a blank page.

## Tasks

- [ ] Scaffold the Vite + React + TypeScript project and install all production and dev dependencies in one pass:
  ```bash
  npm create vite@latest . -- --template react-ts
  npm install react-router-dom react-helmet-async resend @vercel/node
  npm install -D tailwindcss postcss autoprefixer @types/node
  npx tailwindcss init -p
  ```

- [ ] Create the full project folder structure and all deployment/environment config files:
  - `src/assets/` — images, icons, logo
  - `src/components/` — shared UI components
  - `src/data/` — all editable content config files
  - `src/hooks/` — custom React hooks
  - `src/pages/` — one file per route
  - `src/styles/` — global CSS
  - `src/types/` — shared TypeScript interfaces
  - `api/` — Vercel serverless functions (repo root)
  - `public/robots.txt` — placeholder, SEO phase will finalize
  - `public/sitemap.xml` — placeholder, SEO phase will finalize
  - `.env.example`:
    ```
    # Resend API key — get one at https://resend.com
    RESEND_API_KEY=re_your_api_key_here

    # Recipient email for quote form submissions
    QUOTE_RECIPIENT_EMAIL=martin@mwstallningar.se
    ```
  - `vercel.json`:
    ```json
    {
      "rewrites": [
        { "source": "/api/:path*", "destination": "/api/:path*" }
      ]
    }
    ```
  - Verify `.gitignore` includes `.env` and `.env.local` (Vite scaffold usually adds these — confirm)

- [ ] Configure Tailwind and global CSS:
  - Update `tailwind.config.js`:
    ```js
    /** @type {import('tailwindcss').Config} */
    export default {
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      theme: {
        extend: {
          colors: {
            brand: {
              blue:        '#1B2A4A',
              'blue-dark': '#111D34',
              amber:       '#F59E0B',
              'amber-dark':'#D97706',
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
  - Replace `src/index.css` entirely:
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
      .container-max   { @apply max-w-7xl mx-auto; }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }
    ```
  - Update `vite.config.ts` to add the `@` path alias:
    ```ts
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import path from 'path'

    export default defineConfig({
      plugins: [react()],
      resolve: {
        alias: { '@': path.resolve(__dirname, './src') },
      },
    })
    ```
  - Update `tsconfig.json` `compilerOptions` to include:
    ```json
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
    ```
  - In `index.html`: set `<html lang="sv">` and `<title>No1 Ställningar – Göteborg</title>`

- [ ] Create shared TypeScript types in `src/types/index.ts`:
  ```ts
  export interface ServiceItem   { id: string; title: string; description: string; icon: string }
  export interface TestimonialItem { id: string; name: string; company: string; quote: string }
  export interface ProjectItem   { id: string; title: string; caption: string; imageUrl: string }
  export interface FaqItem       { id: string; question: string; answer: string }
  ```

- [ ] Create `src/components/Header.tsx` — sticky navigation with mobile hamburger menu:
  - Background `bg-brand-blue text-white`, `sticky top-0 z-50`, subtle `shadow-md`
  - Skip-to-content link as very first element: `<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-brand-blue focus:p-2 focus:rounded">Hoppa till innehåll</a>`
  - Left: company name "No1 Ställningar" in bold white text
  - Center/Right: nav links `Hem | Tjänster | Projekt | Om oss | Kontakt` using `<NavLink>` with active underline
  - Far right: amber "Begär offert" button linking to `/begar-offert`
  - Mobile: hide nav links behind a hamburger `<button>` (☰/✕ toggle). Full-width dropdown nav below header. `aria-expanded`, `aria-label="Öppna meny"/"Stäng meny"` on the button
  - `<nav aria-label="Huvudnavigation">`

- [ ] Create `src/components/Footer.tsx` — dark blue, three-column layout:
  - Column 1: company name, "Professionella ställningar i Göteborg", address, `<a href="tel:...">` phone, `<a href="mailto:...">` email — use placeholder values from contact data (hardcode for now, Phase 02 will move to data file)
  - Column 2: quick links to all six pages
  - Column 3: "Verksamhetsområde" — Göteborg, Mölndal, Partille, Kungsbacka, Lerum, Härryda, Kungälv
  - Bottom bar: `© {new Date().getFullYear()} No1 Ställningar. Alla rättigheter förbehållna.`
  - `bg-brand-blue text-white`

- [ ] Set up React Router and create placeholder pages, then wire everything in `src/App.tsx` and `src/main.tsx`:
  - `src/main.tsx`: wrap app in `<HelmetProvider>` from `react-helmet-async`
  - `src/App.tsx`: `<BrowserRouter>` → `<Header />` → `<main id="main-content">` → `<Routes>` → `<Footer />`
  - Routes:
    - `/` → `src/pages/Home.tsx`
    - `/tjanster` → `src/pages/Services.tsx` (placeholder: "Tjänster – kommer snart")
    - `/projekt` → `src/pages/Projects.tsx` (placeholder)
    - `/om-oss` → `src/pages/About.tsx` (placeholder)
    - `/kontakt` → `src/pages/Contact.tsx` (placeholder)
    - `/begar-offert` → `src/pages/Quote.tsx` (placeholder)
    - `*` → `src/pages/NotFound.tsx`
  - Each placeholder page: just an `<h1>` with the page title in Swedish and a `<Helmet title="..." />`
  - `src/pages/NotFound.tsx`: `<h1>404 – Sidan hittades inte</h1>` + body text + link back to home

- [ ] Build `src/pages/Home.tsx` as the working prototype centrepiece — this is what the user will see first:
  - `<Helmet>`: `<title>No1 Ställningar – Professionella ställningar i Göteborg</title>` and `<meta name="description" content="No1 Ställningar erbjuder professionell uthyrning och montering av byggnadsställningar i Göteborg och omnejd. Begär offert idag." />`
  - **Hero Section** (`min-h-[85vh]`, `bg-brand-blue`, centered content):
    - `<h1>` "Professionella ställningar i Göteborg" — large, bold, white
    - `<p>` "Vi levererar säkra och anpassade ställningslösningar för bygg, renovering och underhåll — i rätt tid och till rätt pris."
    - Two CTA buttons side by side: amber "Begär offert" (link to `/begar-offert`) + white-outline "Se våra tjänster" (link to `/tjanster`)
    - Subtle diagonal SVG pattern overlay using CSS `backgroundImage` for texture depth
  - **Stats Row** (white bg, 3 columns): "10+ års erfarenhet", "100+ genomförda projekt", "Göteborg & omnejd" — each with an amber icon
  - **Footer CTA teaser** (brand-blue bg): "Redo att komma igång?" + "Begär offert" button — this keeps the CTA prominent
  - Leave slots for more sections (services, testimonials) with a `{/* TODO: Phase 03+ */}` comment so the structure is clear

- [ ] Clear all Vite boilerplate from `src/App.css` (delete contents) and remove the default `src/assets/react.svg` logo import if present

- [ ] Start the dev server and verify the site renders: `npm run dev`
  - Confirm the hero section is visible with the correct Swedish text and blue background
  - Confirm the sticky header and footer appear on all placeholder routes
  - Confirm the mobile hamburger menu opens and closes
  - Confirm TypeScript has no errors: `npx tsc --noEmit`
