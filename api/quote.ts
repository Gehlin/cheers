import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

// NOTE: The `from` address below uses the default Resend onboarding address for testing.
// Before going to production, add and verify your own sender domain in the Resend dashboard
// (https://resend.com/domains) and update the `from` field to something like:
//   from: 'offert@no1stallningar.se'
// Until a verified domain is in place, keep using 'onboarding@resend.dev' for local/staging testing.

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
      from: 'onboarding@resend.dev', // Update to a verified sender domain in Resend before production
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
