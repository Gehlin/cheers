# No1 Ställningar — Phase 13: Infinite Partner/Client Logo Ticker

## Goal
Build an infinite horizontally-scrolling ticker that showcases the companies No1 works with. Pure CSS animation — no JavaScript scroll logic. Smooth, seamless loop that pauses on hover.

## Design Direction
- White or light grey background (`bg-neutral-bg`) to feel clean and professional
- Company names styled as bold text with pink accent — or logo images if provided
- Smooth continuous scroll left, seamless repeat
- Pauses on hover/focus for accessibility
- Respects `prefers-reduced-motion` (stops animation if user prefers reduced motion)

## Tasks

### Partner Data

- [x] Create `src/data/partners.ts` with placeholder partner/client company entries. These should be replaced with real companies No1 works with before launch:
  ```ts
  export interface PartnerItem {
    id: string
    name: string
    logoUrl?: string   // optional: path to logo image in src/assets/logos/
  }

  // Replace with real client/partner companies before launch
  export const partners: PartnerItem[] = [
    { id: '1',  name: 'NCC' },
    { id: '2',  name: 'Skanska' },
    { id: '3',  name: 'Peab' },
    { id: '4',  name: 'JM' },
    { id: '5',  name: 'Veidekke' },
    { id: '6',  name: 'Serneke' },
    { id: '7',  name: 'Besqab' },
    { id: '8',  name: 'Riksbyggen' },
  ]
  // Note to client: Replace the above with the actual companies you work with.
  // If you have logo files, place them in src/assets/logos/ and add logoUrl paths.
  ```
- [x] Add `export * from './partners'` to `src/data/index.ts`

### Ticker Component

- [x] Add the ticker CSS animation to `src/index.css`:
  ```css
  @layer utilities {
    .ticker-track {
      display: flex;
      width: max-content;
      animation: ticker-scroll 30s linear infinite;
    }
    .ticker-track:hover,
    .ticker-track:focus-within {
      animation-play-state: paused;
    }
    @keyframes ticker-scroll {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @media (prefers-reduced-motion: reduce) {
      .ticker-track { animation: none; }
    }
  }
  ```
  Note: The track renders the partner list **twice** (duplicated) so the loop is seamless — translateX(-50%) scrolls exactly one full set, then it resets invisibly.

- [x] Create `src/components/PartnerTicker.tsx`:
  ```tsx
  import { partners } from '@/data/partners'

  export default function PartnerTicker() {
    // Duplicate the list to create seamless loop
    const doubled = [...partners, ...partners]

    return (
      <section className="bg-neutral-bg py-12 overflow-hidden" aria-label="Våra samarbetspartners">
        <div className="container-max mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-muted">
            Företag vi arbetar med
          </p>
        </div>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-bg to-transparent z-10 pointer-events-none" />

          <div className="ticker-track" role="list" aria-label="Lista över samarbetspartners">
            {doubled.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                role="listitem"
                className="flex items-center justify-center mx-8 shrink-0"
              >
                {partner.logoUrl ? (
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-xl font-bold text-neutral-muted hover:text-brand-pink transition-colors duration-200 whitespace-nowrap cursor-default select-none">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  ```

### Integration on Home Page

- [x] Add `<PartnerTicker />` to `src/pages/Home.tsx` — place it between the "Short Intro" section (the 3 stats) and the "Services Overview" section. This position is strategic: after establishing credibility (stats), reinforce it with social proof (who they work with) before pitching services.
- [x] Add a comment in Home.tsx above `<PartnerTicker />`:
  ```tsx
  {/* Partner ticker — update src/data/partners.ts with real company names/logos before launch */}
  ```

### Speed & Accessibility Tuning

- [x] Adjust the ticker animation duration based on partner count: the default `30s` works for 8 partners. If the client has more partners (12+), increase to `45s`. If fewer (4–5), decrease to `20s`. Add a comment in the CSS: `/* Adjust duration: ~3–4s per partner item for comfortable reading speed */`
- [x] Test the ticker at 375px (mobile) — verify items are readable and the fade edges work correctly. On mobile the animation speed may feel fast due to shorter viewport; if so, slow it down with a responsive duration by adding `@media (max-width: 640px) { .ticker-track { animation-duration: 20s; } }` to `src/index.css`.
- [x] Run `npm run build` — zero errors. Run `npm run dev` and verify: ticker scrolls smoothly, pauses on hover, fade edges look clean, and `prefers-reduced-motion` stops the animation (test by temporarily adding the CSS media query override in DevTools).
  > Build passed: 57 modules, no TypeScript errors, 24.25 kB CSS, 311 kB JS.
