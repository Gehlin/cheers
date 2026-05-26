# Phase 08: Polish, README & Launch Checklist

This final phase adds the GDPR cookie notice, runs a full responsive review across device sizes, verifies the production build is clean, and writes the English README with setup instructions and a pre-launch checklist for the client. After this phase the project is handoff-ready.

## Tasks

- [ ] Create `src/components/CookieBanner.tsx` — a minimal GDPR notice:
  - Appears at the bottom of the screen on first visit using `localStorage` to track consent: `localStorage.getItem('cookieConsent')`
  - Text: "Vi använder inga spårningscookies. Webbplatsen använder tekniska cookies som är nödvändiga för att sidan ska fungera korrekt."
  - One button: "Förstått" — sets `localStorage.setItem('cookieConsent', 'true')` and hides the banner
  - Styling: `fixed bottom-0 left-0 right-0 bg-brand-blue text-white p-4 flex items-center justify-between z-50` — non-intrusive, doesn't block content
  - Add comment: `// If Google Analytics or other tracking is added later, update this banner to include explicit opt-in/opt-out controls per GDPR Article 7.`
  - Add `<CookieBanner />` to `src/App.tsx`

- [ ] Full responsive review — open `npm run dev` and test every page at four breakpoints. Fix any layout issues found:
  - **375px** (iPhone SE / smallest common phone):
    - Hamburger menu appears; full nav is hidden
    - Hero text wraps cleanly, no overflow
    - Service cards stack to one column
    - Quote form fills the viewport width
    - Footer columns stack vertically
  - **768px** (tablet):
    - Grid transitions to two columns (services, gallery)
    - Header nav still uses hamburger OR transitions to full nav (confirm the breakpoint is intentional)
  - **1024px** (laptop):
    - Full desktop nav visible
    - Three-column grids where specified
  - **1280px** (wide desktop):
    - Quote page two-column layout (form + info panel) is properly proportioned
    - No excessive whitespace on very wide screens (`max-w-7xl container-max` should cap width)

- [ ] Performance checks:
  - Run `npm run build` and check the terminal output for chunk size warnings (anything over 500 KB)
  - If the main chunk is too large, wrap the Projects gallery page with `React.lazy()` and `<Suspense fallback={<div>Laddar...</div>}>` in `src/App.tsx`
  - Confirm there are no external font network requests (Tailwind config uses system fonts — verify no Google Fonts import was accidentally added to `index.html` or `index.css`)
  - Confirm `npm run preview` serves the built site locally and all pages load correctly

- [ ] Create `README.md` in the repo root (English):
  ```markdown
  # No1 Ställningar — Marketing Website

  Marketing website for No1 Ställningar, a scaffolding company based in Gothenburg, Sweden.
  Built with Vite, React, TypeScript, Tailwind CSS, and Vercel serverless functions.

  ## Prerequisites
  - Node.js 18+
  - npm 9+

  ## Local Development

  \`\`\`bash
  npm install
  cp .env.example .env.local   # fill in your RESEND_API_KEY
  npm run dev
  \`\`\`

  > The quote form API (`/api/quote`) requires Vercel CLI for local testing:
  > `npm i -g vercel && vercel dev`

  ## Environment Variables

  | Variable | Description | Required |
  |---|---|---|
  | `RESEND_API_KEY` | API key from resend.com | Yes |
  | `QUOTE_RECIPIENT_EMAIL` | Email for quote submissions | No (defaults to martin@mwstallningar.se) |

  ## Project Structure

  \`\`\`
  src/
    components/   # Shared UI components (Header, Footer, Button, etc.)
    data/         # All editable content — update here, not in components
    pages/        # One file per route
    types/        # Shared TypeScript interfaces
  api/
    quote.ts      # Vercel serverless function for the quote form
  public/
    sitemap.xml   # Update domain before launch
    robots.txt
  \`\`\`

  ## Updating Content

  All editable content lives in `src/data/`:

  | File | Controls |
  |---|---|
  | `contact.ts` | Company name, address, phone, email, opening hours, service area |
  | `services.ts` | Service types (title, description, icon) |
  | `testimonials.ts` | Customer reviews |
  | `projects.ts` | Gallery images and captions |
  | `faq.ts` | FAQ questions and answers |
  | `navigation.ts` | Nav link labels and paths |

  **To add a project photo:** drop a WebP file in `src/assets/images/`, then update the `imageUrl` in `src/data/projects.ts`.

  ## Deploying to Vercel

  1. Connect the GitHub repo in the Vercel dashboard
  2. Add `RESEND_API_KEY` and `QUOTE_RECIPIENT_EMAIL` in Vercel project settings → Environment Variables
  3. Vercel auto-detects Vite — build command `npm run build`, output directory `dist`
  4. Serverless functions in `/api` are auto-deployed
  5. Set your custom domain and update the canonical URL references listed in the checklist below

  ## Before Launch Checklist

  - [ ] Replace all placeholder images in `src/data/projects.ts` with real project photos
  - [ ] Update `contactInfo.phone` in `src/data/contact.ts` with the real phone number
  - [ ] Update `contactInfo.address.street` and `.postalCode` in `src/data/contact.ts`
  - [ ] Add the Google Maps embed URL to `contactInfo.googleMapsEmbedUrl` in `src/data/contact.ts`
  - [ ] Verify the Resend "from" email domain is verified in the Resend dashboard (`api/quote.ts`)
  - [ ] Set `RESEND_API_KEY` and `QUOTE_RECIPIENT_EMAIL` in Vercel environment variables
  - [ ] Update the canonical domain `https://no1stallningar.se` in:
    - `src/components/LocalBusinessSchema.tsx`
    - `src/components/PageHelmet.tsx` (`SITE_URL` constant)
    - `public/sitemap.xml`
    - `public/robots.txt`
  - [ ] Update geo coordinates in `src/data/contact.ts` to the exact business address
  - [ ] Replace placeholder testimonials in `src/data/testimonials.ts` with real customer quotes
  - [ ] Remove the placeholder info banner in `src/pages/Projects.tsx` (marked with `{/* REMOVE THIS BANNER */}`)
  - [ ] Test the quote form end-to-end in production (submit a real test request; check inbox)
  - [ ] Submit `sitemap.xml` to Google Search Console
  - [ ] Verify JSON-LD schema with Google's Rich Results Test
  - [ ] Replace the Unsplash placeholder in `src/pages/About.tsx` with a real company photo
  \`\`\`

- [ ] Final build verification — run all three commands and confirm each passes with zero errors:
  ```bash
  npm run build
  npx tsc --noEmit
  npm run preview
  ```

- [ ] Commit everything:
  ```bash
  git add .
  git commit -m "Initial build: No1 Ställningar marketing website"
  ```
