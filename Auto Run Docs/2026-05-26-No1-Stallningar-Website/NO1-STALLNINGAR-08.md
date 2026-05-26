# No1 Ställningar — Phase 08: README, Final Polish & Launch Checklist

## Goal
Write the English README, add the GDPR cookie note, do a final responsive + performance review, and produce a launch checklist for the client.

## Tasks

### README

- [ ] Create `README.md` in the repo root (English) with these sections:
  1. **Project Overview** — what the site is, tech stack summary (Vite, React, TypeScript, Tailwind, React Router, Resend, Vercel)
  2. **Prerequisites** — Node.js 18+, npm 9+
  3. **Local Development:**
     ```bash
     npm install
     cp .env.example .env.local   # then fill in your RESEND_API_KEY
     npm run dev
     ```
     Note: the quote form API (`/api/quote`) requires Vercel CLI for local testing: `npm i -g vercel && vercel dev`
  4. **Environment Variables** — table with all variables from `.env.example`, descriptions, and whether they're required
  5. **Project Structure** — brief tree of `src/` and `api/`, what's in each folder
  6. **Updating Content** — explain that all editable text is in `src/data/`. List each file and what it controls. Instruct how to add a new project photo: replace the `imageUrl` in `src/data/projects.ts` with a path to a file in `src/assets/images/`.
  7. **Deploying to Vercel:**
     - Connect the GitHub repo in Vercel dashboard
     - Add environment variables in Vercel project settings
     - Vercel auto-detects Vite; build command `npm run build`, output dir `dist`
     - Serverless functions in `/api` are auto-deployed
     - Set a custom domain and update `sitemap.xml` and the JSON-LD `url` field before going live
  8. **Before Launch Checklist** — mirrors the section below

### GDPR Cookie Note

- [ ] Create `src/components/CookieBanner.tsx` — a simple, minimal banner:
  - Appears at the bottom of the screen on first visit (check `localStorage.getItem('cookieConsent')`)
  - Text: "Vi använder inga spårningscookies. Webbplatsen använder tekniska cookies som är nödvändiga för att sidan ska fungera korrekt."
  - One button: "Förstått" — sets `localStorage.setItem('cookieConsent', 'true')` and hides the banner
  - Styling: fixed bottom bar, `bg-brand-blue text-white`, non-intrusive
  - Only show if the site has any analytics or third-party scripts; since this is a basic site with no tracking, add a comment: "// If Google Analytics or other tracking is added, update this banner to include opt-in/opt-out controls per GDPR Article 7."
- [ ] Add `<CookieBanner />` to `src/App.tsx`

### Final Responsive Review

- [ ] Test every page at these breakpoints: 375px (iPhone SE), 768px (tablet), 1024px (laptop), 1280px (desktop)
  - Verify the hamburger menu appears on mobile, full nav on desktop
  - Verify no horizontal overflow (no elements wider than viewport)
  - Verify all grids collapse gracefully (3-col → 2-col → 1-col)
  - Verify the footer columns stack correctly on mobile
  - Verify the quote form is usable on a 375px screen (full width, no overflow)

### Performance Checks

- [ ] Ensure gallery images use `loading="lazy"` (phase 05 — verify it's in place)
- [ ] Ensure the hero image (if any) does NOT use `loading="lazy"` (it should load immediately)
- [ ] Verify `npm run build` produces no warnings about chunk sizes over 500 KB. If it does, investigate and consider code-splitting the gallery page with `React.lazy()` and `<Suspense>`
- [ ] Verify fonts are loaded efficiently — the Tailwind config uses the system font stack, so no external font requests should be needed. If Inter was added as a web font, ensure it uses `font-display: swap`.

### Pre-Launch Client Checklist

- [ ] Add a `## Before Launch Checklist` section to `README.md` with these items for the client:
  ```
  - [ ] Replace all placeholder images in src/data/projects.ts with real project photos
  - [ ] Update contactInfo.phone in src/data/contact.ts with the real phone number
  - [ ] Update contactInfo.address.street and contactInfo.address.postalCode in src/data/contact.ts
  - [ ] Add the Google Maps embed URL to contactInfo.googleMapsEmbedUrl in src/data/contact.ts
  - [ ] Verify the Resend "from" email domain is configured and verified in Resend dashboard (api/quote.ts)
  - [ ] Set RESEND_API_KEY and QUOTE_RECIPIENT_EMAIL in Vercel environment variables
  - [ ] Update the canonical URL (https://no1stallningar.se) in:
       - src/components/LocalBusinessSchema.tsx
       - src/components/PageHelmet.tsx
       - public/sitemap.xml
       - public/robots.txt
  - [ ] Update geo coordinates in src/data/contact.ts to the exact business address
  - [ ] Add real testimonials from actual customers in src/data/testimonials.ts
  - [ ] Remove the placeholder info banner from src/pages/Projects.tsx
  - [ ] Test the quote form end-to-end in production (submit a real test request)
  - [ ] Submit sitemap.xml to Google Search Console
  - [ ] Verify the JSON-LD schema with Google's Rich Results Test
  ```

### Final Build Verification

- [ ] Run `npm run build` — must complete with zero errors
- [ ] Run `npx tsc --noEmit` — must complete with zero TypeScript errors
- [ ] Serve the production build locally and verify it works: `npm run preview`
- [ ] Verify `/api/quote` returns `405` for GET requests when tested with `curl -X GET http://localhost:3000/api/quote`
- [ ] Commit all files with a meaningful message: `git add . && git commit -m "Initial build: No1 Ställningar marketing website"`
