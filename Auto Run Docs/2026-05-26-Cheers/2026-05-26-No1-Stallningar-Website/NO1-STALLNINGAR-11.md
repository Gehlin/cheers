# No1 Ställningar — Phase 11: Real Brand Identity, Contact Data & Services Update

## Goal
Replace all placeholder data with real company information sourced from no1scaff.se. Update the color scheme from industrial blue to the brand's actual hot-pink identity, update contact details, domain, address, and expand the services list to match what they actually offer.

## Brand Reference
- **Primary pink:** `#E91E8C` (verify exact hex against logo before launch — estimate from screenshots)
- **Pink dark (hover):** `#C2185B`
- **Text / neutrals:** keep existing `#1F2937`, `#6B7280`, `#F8F9FA`
- **Company legal name:** No 1 Scaffolding Company AB
- **Brand name:** No1 Ställningar
- **Domain:** no1scaff.se (replaces no1stallningar.se throughout)
- **Two contacts:** Martin Wanneklint and Ulf Larsson

## Tasks

### Color Scheme: Blue → Pink

- [x] Update `tailwind.config.js` — replace the `brand` color tokens, swapping blue for pink:
  ```js
  colors: {
    brand: {
      pink:       '#E91E8C',
      'pink-dark': '#C2185B',
      // Keep these for backward-compat references in components that used brand-blue as dark bg:
      blue:       '#1B2A4A',
      'blue-dark': '#111d34',
    },
    neutral: {
      bg:    '#F8F9FA',
      muted: '#6B7280',
      body:  '#1F2937',
    },
  }
  ```
- [x] Update `src/index.css` global styles — change `outline-brand-amber` focus ring to `outline-brand-pink` in the `:focus-visible` rule.
- [x] Update `src/components/Header.tsx`:
  - Change header background from `bg-brand-blue` to `bg-brand-pink`
  - Change `bg-brand-blue-dark` (mobile menu) to `bg-brand-pink-dark`
  - Change active/hover NavLink color from `text-brand-amber` to `text-white/70` (white on pink bg)
  - Change CTA button variant — the "Begär offert" button in the header should remain a high-contrast option; use `variant="secondary"` with white bg and pink text, OR keep amber but verify it looks good on pink
- [x] Update `src/components/Footer.tsx` — change footer background from `bg-brand-blue` to `bg-brand-pink`
- [x] Update `src/components/Button.tsx`:
  - `primary` variant: change from amber fill to pink fill (`bg-brand-pink hover:bg-brand-pink-dark text-white`)
  - `secondary` variant: change from blue fill to white fill with pink text (`bg-white text-brand-pink hover:bg-gray-50`)
  - `outline` variant: change border/text from amber to pink
- [x] Update `src/components/SectionHeading.tsx` — change the decorative amber underline/bar to pink (`bg-brand-pink`)
- [x] Update `src/components/ServiceCard.tsx` — change amber icon accent to pink
- [x] Update `src/components/TestimonialCard.tsx` — change amber quotation mark to pink
- [x] Update `src/components/Icon.tsx` — if any amber color is hardcoded, remove it (colors should be inherited via `currentColor` or Tailwind classes on the parent)
- [x] Update `src/components/AccordionItem.tsx` — change chevron/active color from amber to pink
- [x] Update `src/components/LocalBusinessSchema.tsx` — update `"url"` to `"https://no1scaff.se"`
- [x] Update `src/components/PageHelmet.tsx` — update all `og:url` and `og:site_name` references to use `https://no1scaff.se`
- [x] Update `public/sitemap.xml` — replace all `no1stallningar.se` with `no1scaff.se`
- [x] Update `public/robots.txt` — replace `no1stallningar.se` with `no1scaff.se`
- [x] Search entire `src/` for any remaining hardcoded `#F59E0B` (amber) or `brand-amber` class references and replace with `brand-pink` equivalents. Run: `grep -r "brand-amber\|F59E0B" src/` and fix all occurrences.
  > All amber refs replaced across: QuoteForm, CookieBanner, Header, Footer, Tjanster, BegarOffert, Projekt, Kontakt, Home, OmOss, NotFound, Button, SectionHeading, ServiceCard, TestimonialCard, AccordionItem.

### Real Contact Data

- [x] Replace `src/data/contact.ts` with the real company information:
  > Updated with real address (Marieholmsgatan 126 C, 415 02 Göteborg), legal name (No 1 Scaffolding Company AB), contacts array for Martin & Ulf, real phone numbers and emails, expanded serviceArea, and Google Maps embed URL.
- [x] Update `src/pages/Kontakt.tsx` to render both contacts (Martin & Ulf) from `contactInfo.contacts` array — two side-by-side contact cards on desktop, stacked on mobile.
- [x] Update `api/quote.ts` — change `RECIPIENT` default to `martin@no1scaff.se` and `from` address to `offert@no1scaff.se`.

### Updated & Expanded Services

- [x] Replace `src/data/services.ts` with the full service list matching what the company actually offers:
  > Updated with 5 real services: Byggnadsställningar, Väderskydd, Fallskydd & bygghissar, Skyltställ, Hyra och montering.

### About Page: Real Company Description

- [x] Update the Company Story body text in `src/pages/OmOss.tsx` to use the real description:
  > "No 1 Scaffolding Company AB i Göteborg är ett ställningsföretag som erbjuder allt inom byggnadsställningar. Med bred kompetens, lång erfarenhet och rätt utbildning monterar vi ställningar åt kunder i Västra Götaland och Hallands län."
- [x] Add the four company values as a grid on the Om oss page (these appear on the existing site):
  - **Ständigt växande**, **Miljöpolicy**, **Vår affärsidé**, **Kvalitet** — implemented as 2×2 grid with pink icon circles between Company Story and Experience sections.

- [x] Run `npm run build` — must complete with zero errors. Visually verify the pink brand color renders correctly across Header, Footer, buttons, and accents.
  > Build passed: `✓ built in 451ms`. Zero TypeScript or Vite errors.
