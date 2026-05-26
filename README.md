# No1 Ställningar — Marketing Website

Professional scaffolding (ställningar) company website for **No1 Ställningar** (trading name of MW Ställningar), based in Göteborg, Sweden. Built as a performant, SEO-optimised single-page application with a serverless quote-request form.

## Tech Stack

| Layer | Technology |
|---|---|
| Build tool | [Vite](https://vitejs.dev/) |
| UI library | [React 18](https://react.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Routing | [React Router v6](https://reactrouter.com/) |
| Email (quote form) | [Resend](https://resend.com/) |
| Hosting | [Vercel](https://vercel.com/) (Vite SSG + Serverless Functions) |

---

## Prerequisites

- **Node.js** 18 or later
- **npm** 9 or later

---

## Local Development

```bash
npm install
cp .env.example .env.local   # then fill in your RESEND_API_KEY
npm run dev
```

The dev server starts at `http://localhost:5173`.

> **Note:** The quote-form API (`/api/quote`) is a Vercel Serverless Function and requires the Vercel CLI for local testing:
>
> ```bash
> npm i -g vercel
> vercel dev          # starts at http://localhost:3000
> ```

---

## Environment Variables

All variables are listed in `.env.example`. Copy that file to `.env.local` for local development, and add them to your Vercel project settings for production.

| Variable | Description | Required |
|---|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com). Used by `/api/quote` to send quote-request emails. | ✅ Yes |
| `QUOTE_RECIPIENT_EMAIL` | Email address that receives submitted quote requests. Defaults to `martin@mwstallningar.se`. | ✅ Yes |

---

## Project Structure

```
.
├── api/
│   └── quote.ts            # Vercel Serverless Function — handles quote form POST
├── public/
│   ├── favicon.svg
│   ├── icons.svg           # SVG sprite used by the Icon component
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── assets/             # Static images (hero, etc.)
    ├── components/         # Reusable UI components
    │   ├── Accordion.tsx
    │   ├── AccordionItem.tsx
    │   ├── Button.tsx
    │   ├── CookieBanner.tsx
    │   ├── Footer.tsx
    │   ├── Header.tsx
    │   ├── Icon.tsx
    │   ├── LocalBusinessSchema.tsx  # JSON-LD structured data (injected globally)
    │   ├── PageHelmet.tsx           # Per-page <title> + meta tags
    │   ├── QuoteForm.tsx
    │   ├── SectionHeading.tsx
    │   ├── ServiceCard.tsx
    │   └── TestimonialCard.tsx
    ├── data/               # All editable site content — see "Updating Content" below
    │   ├── contact.ts      # Company info, address, phone, opening hours, service area
    │   ├── faq.ts          # FAQ questions and answers
    │   ├── index.ts        # Re-exports all data modules
    │   ├── navigation.ts   # Top-nav links
    │   ├── projects.ts     # Project gallery items (title, caption, image URL)
    │   ├── services.ts     # Service cards (title, description, icon)
    │   └── testimonials.ts # Customer testimonials
    ├── pages/              # Route-level page components
    │   ├── BegarOffert.tsx # /begar-offert — Quote request page
    │   ├── Home.tsx        # / — Home page
    │   ├── Kontakt.tsx     # /kontakt — Contact page
    │   ├── NotFound.tsx    # 404 page
    │   ├── OmOss.tsx       # /om-oss — About page
    │   ├── Projekt.tsx     # /projekt — Project gallery
    │   └── Tjanster.tsx    # /tjanster — Services page
    ├── types/
    │   ├── index.ts        # Shared TypeScript interfaces (ServiceItem, ProjectItem, …)
    │   └── quoteForm.ts    # Quote form field types
    ├── App.tsx             # Root component — router, layout, global components
    ├── index.css           # Tailwind directives + global utility classes
    └── main.tsx            # React entry point
```

---

## Updating Content

**All editable text and data lives in `src/data/`.** You should never need to touch the page or component files for routine content updates.

| File | What it controls |
|---|---|
| `src/data/contact.ts` | Company name, address, phone, email, opening hours, service area, Google Maps embed URL, geo-coordinates |
| `src/data/services.ts` | The five service cards shown on the Home and Services pages |
| `src/data/projects.ts` | The six project gallery items (title, short caption, image URL) |
| `src/data/testimonials.ts` | Customer testimonial quotes |
| `src/data/faq.ts` | FAQ accordion questions and answers |
| `src/data/navigation.ts` | Top-navigation links |

### Adding or replacing a project photo

1. Copy the photo into `src/assets/images/` (create the folder if it doesn't exist).
   Recommended size: **800 × 600 px**, format: **WebP**.
2. Open `src/data/projects.ts`.
3. Update the `imageUrl` field for the relevant project:

```ts
// Before (placeholder):
imageUrl: 'https://placehold.co/800x600/1B2A4A/ffffff?text=Projekt+1',

// After (real photo):
imageUrl: '/src/assets/images/fasad-haga.webp',
```

---

## Deploying to Vercel

1. **Connect the repo** — in the Vercel dashboard, click *Add New → Project* and import your GitHub repository.
2. **Add environment variables** — in *Settings → Environment Variables*, add `RESEND_API_KEY` and `QUOTE_RECIPIENT_EMAIL`.
3. **Build settings** — Vercel auto-detects Vite:
   - Build command: `npm run build`
   - Output directory: `dist`
4. **Serverless functions** — the `api/` directory is auto-deployed as Vercel Serverless Functions. No extra configuration needed.
5. **Custom domain** — add your domain in *Settings → Domains*.
6. **Before going live**, update the canonical URL `https://no1stallningar.se` in:
   - `src/components/LocalBusinessSchema.tsx`
   - `src/components/PageHelmet.tsx`
   - `public/sitemap.xml`
   - `public/robots.txt`

---

## Before Launch Checklist

Complete these steps before pointing the live domain at this deployment:

- [ ] Replace all placeholder images in `src/data/projects.ts` with real project photos
- [ ] Update `contactInfo.phone` in `src/data/contact.ts` with the real phone number
- [ ] Update `contactInfo.address.street` and `contactInfo.address.postalCode` in `src/data/contact.ts`
- [ ] Add the Google Maps embed URL to `contactInfo.googleMapsEmbedUrl` in `src/data/contact.ts`
- [ ] Verify the Resend "from" email domain is configured and verified in the Resend dashboard (`api/quote.ts`)
- [ ] Set `RESEND_API_KEY` and `QUOTE_RECIPIENT_EMAIL` in Vercel environment variables
- [ ] Update the canonical URL (`https://no1stallningar.se`) in:
  - `src/components/LocalBusinessSchema.tsx`
  - `src/components/PageHelmet.tsx`
  - `public/sitemap.xml`
  - `public/robots.txt`
- [ ] Update geo coordinates in `src/data/contact.ts` to the exact business address
- [ ] Add real testimonials from actual customers in `src/data/testimonials.ts`
- [ ] Remove the placeholder info banner from `src/pages/Projekt.tsx`
- [ ] Test the quote form end-to-end in production (submit a real test request)
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Verify the JSON-LD schema with [Google's Rich Results Test](https://search.google.com/test/rich-results)
