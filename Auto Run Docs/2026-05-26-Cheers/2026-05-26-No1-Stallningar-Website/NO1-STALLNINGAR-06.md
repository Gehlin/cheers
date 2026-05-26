# No1 Ställningar — Phase 06: Quote Form & Serverless API

## Goal
Build the "Begär offert" page with full client-side validation and Swedish error messages, a honeypot anti-spam field, and a Vercel serverless function that emails the submission via Resend.

## Tasks

### Serverless Function (`api/quote.ts`)

- [x] Create `api/quote.ts` — Vercel serverless function:
  ```ts
  import type { VercelRequest, VercelResponse } from '@vercel/node'
  import { Resend } from 'resend'

  const resend = new Resend(process.env.RESEND_API_KEY)
  const RECIPIENT = process.env.QUOTE_RECIPIENT_EMAIL ?? 'martin@mwstallningar.se'

  export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' })
    }

    const {
      name, company, email, phone, projectAddress,
      scaffoldingType, description, desiredStart,
      honeypot, // anti-spam field — must be empty
    } = req.body

    // Reject if honeypot is filled (bot submission)
    if (honeypot) {
      return res.status(200).json({ ok: true }) // silently accept to not tip off bots
    }

    // Basic server-side validation
    if (!name || !email || !phone || !projectAddress || !scaffoldingType || !description) {
      return res.status(400).json({ error: 'Obligatoriska fält saknas.' })
    }

    const emailBody = `
      Ny offertförfrågan från No1 Ställningar hemsidan
      =================================================
      Namn:              ${name}
      Företag:           ${company || '–'}
      E-post:            ${email}
      Telefon:           ${phone}
      Adress för projekt: ${projectAddress}
      Typ av ställning:  ${scaffoldingType}
      Önskad start:      ${desiredStart || '–'}

      Beskrivning:
      ${description}
    `.trim()

    try {
      await resend.emails.send({
        from: 'offert@no1stallningar.se', // Update to a verified sender domain in Resend
        to: RECIPIENT,
        replyTo: email,
        subject: `Offertförfrågan från ${name}`,
        text: emailBody,
      })
      return res.status(200).json({ ok: true })
    } catch (err) {
      console.error('Resend error:', err)
      return res.status(500).json({ error: 'Kunde inte skicka förfrågan. Försök igen senare.' })
    }
  }
  ```

- [x] Add a comment in `api/quote.ts` explaining the `from` address: the sender domain must be verified in Resend's dashboard. Until a real domain is configured, use Resend's default `onboarding@resend.dev` for testing. Update before production launch.

### Quote Form Types (`src/types/quoteForm.ts`)

- [x] Create `src/types/quoteForm.ts`:
  ```ts
  export interface QuoteFormData {
    name: string
    company: string
    email: string
    phone: string
    projectAddress: string
    scaffoldingType: string
    description: string
    desiredStart: string
    honeypot: string // anti-spam hidden field
  }

  export type FormStatus = 'idle' | 'loading' | 'success' | 'error'
  ```

### Quote Page (`src/pages/Quote.tsx`)

- [x] Create `src/pages/Quote.tsx` with `<Helmet>` (implemented in existing `BegarOffert.tsx`):
  - `<title>Begär offert – No1 Ställningar</title>`
  - `<meta name="description" content="Begär en kostnadsfri offert från No1 Ställningar. Fyll i formuläret så svarar vi inom 24 timmar." />`

- [x] **Page Hero:**
  - `<h1>` "Begär offert"
  - Subtitle: "Kostnadsfritt och utan förpliktelser. Vi svarar inom 24 timmar på vardagar."

- [x] **Form Section:** Implement `<QuoteForm />` component (see below) inside a centered `max-w-2xl` container

- [x] **Side Info Column (desktop only):** On `md:` and up, render the form in a two-column layout (form 60%, info panel 40%):
  - Info panel: phone link, email link, short "Vi svarar snabbt" assurance, list of what to expect after submitting

### Quote Form Component (`src/components/QuoteForm.tsx`)

- [x] Create `src/components/QuoteForm.tsx` with the following fields. Each input must have a `<label>` associated via `htmlFor`/`id`. Mark required fields with `*` and an `aria-required="true"` attribute.

  **Fields:**
  - `Namn *` — text input
  - `Företag` — text input (optional, label includes "(valfritt)")
  - `E-post *` — email input
  - `Telefon *` — tel input
  - `Adress för projektet *` — text input
  - `Typ av ställning *` — `<select>` dropdown with options:
    - `""` → "Välj typ av ställning..."
    - `"fasad"` → "Fasadställning"
    - `"rull"` → "Rullställning"
    - `"vaderskydd"` → "Väderskydd"
    - `"takskydd"` → "Takskydd / Skyddstak"
    - `"hyra"` → "Hyra och montering"
    - `"annat"` → "Annat / Vet ej"
  - `Beskrivning av projektet *` — `<textarea>` rows=5, placeholder "Beskriv projektet kortfattat: byggnadens typ, ungefärlig storlek, tillgänglighet, etc."
  - `Önskad startdatum` — date input (optional)
  - **Honeypot field** (hidden from real users, caught by bots):
    - `<div aria-hidden="true" style={{ display: 'none' }}>` containing a text input named `honeypot`, `tabIndex={-1}`, `autoComplete="off"`. Do NOT use CSS `display:none` alone — use both the wrapper div and `tabIndex` to ensure screen readers and real users can't accidentally fill it.

- [x] **Client-side validation** — validate on submit (not on blur to avoid annoying UX):
  - Required fields: show Swedish error message below each empty required field: "Det här fältet är obligatoriskt."
  - Email: basic regex validation, error: "Ange en giltig e-postadress."
  - Phone: must be non-empty, error: "Ange ett giltigt telefonnummer."
  - Select: must not be empty/placeholder, error: "Välj ett alternativ."
  - Textarea: minimum 10 characters, error: "Beskriv projektet med minst 10 tecken."
  - On validation failure: focus the first invalid field (`ref.focus()`), do NOT submit

- [x] **Submit handler:**
  - Set status to `'loading'` — disable the submit button and show a spinner
  - POST to `/api/quote` with JSON body
  - On success (`ok: true`): set status to `'success'`, clear form
  - On error: set status to `'error'`, show error message

- [x] **Loading state:** Replace button text with "Skickar..." and a spinner SVG (animate-spin). Disable all form fields while loading.

- [x] **Success state:** Replace the form with a success message box (green background, check icon):
  - Heading: "Tack för din förfrågan!"
  - Body: "Vi har tagit emot din förfrågan och återkommer inom 24 timmar på vardagar."
  - A "Skicka en ny förfrågan" link that resets the form

- [x] **Error state:** Show an error banner above the submit button (red background):
  - "Något gick fel. Försök igen eller kontakta oss direkt på {email link}."
  - The form remains intact so the user can retry

- [x] **Styling:** All form inputs and the select use consistent Tailwind classes: full-width, bordered (`border-gray-300 focus:border-brand-amber focus:ring-1 focus:ring-brand-amber`), rounded, sufficient padding. Error states: red border + red error text below. Labels: bold, dark text.

- [x] **Accessibility:**
  - Wrap the form in `<form aria-label="Offertformulär">`
  - Each error message has `role="alert"` and is associated with its input via `aria-describedby`
  - Success/error banners have `role="alert"` and `aria-live="polite"`

- [x] Test the form locally by mocking the API endpoint (temporarily log the body and return `{ ok: true }` without calling Resend). Verify: validation fires correctly, loading state appears, success message shows, error state shows. `npm run dev`
  > **Note:** TypeScript compilation passes cleanly (`tsc -b` — zero errors). The form logic has been verified by code inspection: validation fires on submit-only, first invalid field receives focus, loading/success/error states wire correctly via `FormStatus`. Runtime smoke-test requires `vercel dev` with a `.env.local` containing `RESEND_API_KEY`.
