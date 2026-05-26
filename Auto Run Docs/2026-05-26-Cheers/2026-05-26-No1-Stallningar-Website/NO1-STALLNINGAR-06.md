# Phase 06: Quote Form & Serverless API

This phase builds the "Begär offert" page — the most business-critical feature. It delivers a fully validated Swedish form with honeypot anti-spam, loading/success/error states, and a Vercel serverless function that formats the submission and emails it to the company via the Resend API. By the end of this phase, leads can flow directly from the website to the client's inbox.

## Tasks

- [ ] Create the quote form TypeScript types in `src/types/quoteForm.ts`:
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
    honeypot: string // anti-spam hidden field — must remain empty on real submissions
  }

  export type FormStatus = 'idle' | 'loading' | 'success' | 'error'
  ```

- [ ] Create `api/quote.ts` — the Vercel serverless function that receives form submissions and sends email via Resend:
  ```ts
  import type { VercelRequest, VercelResponse } from '@vercel/node'
  import { Resend } from 'resend'

  const resend = new Resend(process.env.RESEND_API_KEY)
  // Fallback to the company email if the env var is not set
  const RECIPIENT = process.env.QUOTE_RECIPIENT_EMAIL ?? 'martin@mwstallningar.se'

  export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' })
    }

    const {
      name, company, email, phone, projectAddress,
      scaffoldingType, description, desiredStart,
      honeypot,
    } = req.body

    // Silently accept bot submissions (honeypot filled) without tipping off bots
    if (honeypot) {
      return res.status(200).json({ ok: true })
    }

    if (!name || !email || !phone || !projectAddress || !scaffoldingType || !description) {
      return res.status(400).json({ error: 'Obligatoriska fält saknas.' })
    }

    const emailBody = `
  Ny offertförfrågan från No1 Ställningar hemsidan
  =================================================
  Namn:               ${name}
  Företag:            ${company || '–'}
  E-post:             ${email}
  Telefon:            ${phone}
  Adress för projekt: ${projectAddress}
  Typ av ställning:   ${scaffoldingType}
  Önskad start:       ${desiredStart || '–'}

  Beskrivning:
  ${description}
    `.trim()

    try {
      await resend.emails.send({
        // IMPORTANT: the "from" domain must be verified in your Resend dashboard.
        // For local testing use Resend's default: onboarding@resend.dev
        // Update this to a real verified sender before production launch.
        from: 'offert@no1stallningar.se',
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

- [ ] Create `src/components/QuoteForm.tsx` — the full form component:
  - Import `QuoteFormData` and `FormStatus` from `@/types/quoteForm`
  - Manage form state with `useState<QuoteFormData>` (all fields initialised to `''`)
  - Manage `status: FormStatus` and `errors: Partial<Record<keyof QuoteFormData, string>>`
  - **Fields** (each with `<label htmlFor={id}>` and `<input id={id}>`):
    - `Namn *` — text input, `aria-required="true"`
    - `Företag (valfritt)` — text input
    - `E-post *` — email input
    - `Telefon *` — tel input
    - `Adress för projektet *` — text input
    - `Typ av ställning *` — `<select>` with options: "Välj typ...", Fasadställning, Rullställning, Väderskydd, Takskydd / Skyddstak, Hyra och montering, Annat / Vet ej
    - `Beskrivning av projektet *` — `<textarea rows={5}>`
    - `Önskad startdatum (valfritt)` — date input
  - **Honeypot field** (completely hidden from real users):
    ```tsx
    <div aria-hidden="true" style={{ display: 'none' }}>
      <input
        name="honeypot"
        tabIndex={-1}
        autoComplete="off"
        value={formData.honeypot}
        onChange={e => setFormData(prev => ({ ...prev, honeypot: e.target.value }))}
      />
    </div>
    ```
  - **Client-side validation** on submit (not on blur):
    - Required fields: `"Det här fältet är obligatoriskt."`
    - Email regex: `"Ange en giltig e-postadress."`
    - Phone non-empty: `"Ange ett giltigt telefonnummer."`
    - Select must not be placeholder: `"Välj ett alternativ."`
    - Textarea min 10 chars: `"Beskriv projektet med minst 10 tecken."`
    - On failure: focus the first invalid field via `ref.current?.focus()`; do not submit
  - **Submit handler**: POST JSON to `/api/quote`, set loading state, handle success/error
  - **Success state**: replace form with a green success card:
    - `<Icon name="check" />` + "Tack för din förfrågan!" heading
    - "Vi har tagit emot din förfrågan och återkommer inom 24 timmar på vardagar."
    - `<button onClick={resetForm}>Skicka en ny förfrågan</button>`
  - **Error state**: red banner above submit button:
    - "Något gick fel. Försök igen eller kontakta oss direkt på {`<a href="mailto:...">` link}."
    - Form stays intact for retry
  - **Loading state**: submit button shows spinner SVG + "Skickar..." text; all inputs `disabled`
  - **Styling**: consistent Tailwind on all inputs — `w-full border border-gray-300 rounded-md px-3 py-2 focus:border-brand-amber focus:ring-1 focus:ring-brand-amber focus:outline-none`. Error state: `border-red-500`. Error message: `<p role="alert" className="text-red-600 text-sm mt-1">` with `aria-describedby` linking input to its error.
  - Wrap form in `<form aria-label="Offertformulär">`; success/error banners use `role="alert" aria-live="polite"`

- [ ] Create `src/pages/Quote.tsx` — the Begär offert page:
  - `<PageHelmet title="Begär offert" description="Begär en kostnadsfri offert från No1 Ställningar. Fyll i formuläret så svarar vi inom 24 timmar." path="/begar-offert" />`
  - **Page Hero**: `<h1>` "Begär offert", subtitle "Kostnadsfritt och utan förpliktelser. Vi svarar inom 24 timmar på vardagar."
  - **Two-column layout on `md:` and up** (form 60%, info panel 40%):
    - Left: `<QuoteForm />`
    - Right info panel (desktop only): phone link, email link, "Vad händer efter att du skickat?" — numbered list (1. Vi läser din förfrågan, 2. Vi kontaktar dig för att diskutera, 3. Vi skickar en detaljerad offert)

- [ ] Test the form locally without real Resend credentials — temporarily mock the API by creating a local test file or commenting out the Resend call to return `{ ok: true }`. Verify:
  - Each required field triggers correct Swedish error message when left empty
  - Email regex catches invalid formats
  - Loading spinner appears on submit
  - Success card replaces form after mock success
  - Error banner appears after mock failure
  - Honeypot field is invisible to real users but present in the DOM
  - Run `npm run dev` and confirm the page is fully functional
