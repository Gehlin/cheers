import React, { useRef, useState } from 'react'
import type { QuoteFormData, FormStatus } from '@/types/quoteForm'
import { contactInfo } from '@/data/contact'

const EMPTY_FORM: QuoteFormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectAddress: '',
  scaffoldingType: '',
  description: '',
  desiredStart: '',
  honeypot: '',
}

type FieldErrors = Partial<Record<keyof QuoteFormData, string>>

// ---------------------------------------------------------------------------
// Spinner
// ---------------------------------------------------------------------------
const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
)

// ---------------------------------------------------------------------------
// Shared input classes
// ---------------------------------------------------------------------------
const inputBase =
  'w-full rounded-md border px-3 py-2.5 text-neutral-body text-sm transition-colors duration-150 focus:outline-none focus:ring-1 disabled:opacity-50 disabled:cursor-not-allowed'
const inputNormal = 'border-gray-300 focus:border-brand-pink focus:ring-brand-pink'
const inputError = 'border-red-400 focus:border-red-500 focus:ring-red-500'

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(data: QuoteFormData): FieldErrors {
  const errors: FieldErrors = {}

  if (!data.name.trim()) errors.name = 'Det här fältet är obligatoriskt.'
  if (!data.email.trim()) {
    errors.email = 'Det här fältet är obligatoriskt.'
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = 'Ange en giltig e-postadress.'
  }
  if (!data.phone.trim()) errors.phone = 'Ange ett giltigt telefonnummer.'
  if (!data.projectAddress.trim()) errors.projectAddress = 'Det här fältet är obligatoriskt.'
  if (!data.scaffoldingType) errors.scaffoldingType = 'Välj ett alternativ.'
  if (!data.description.trim()) {
    errors.description = 'Det här fältet är obligatoriskt.'
  } else if (data.description.trim().length < 10) {
    errors.description = 'Beskriv projektet med minst 10 tecken.'
  }

  return errors
}

// ---------------------------------------------------------------------------
// QuoteForm
// ---------------------------------------------------------------------------
export default function QuoteForm() {
  const [form, setForm] = useState<QuoteFormData>(EMPTY_FORM)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  // Refs for focus-on-error
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const projectAddressRef = useRef<HTMLInputElement>(null)
  const scaffoldingTypeRef = useRef<HTMLSelectElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  const fieldRefs: Partial<Record<keyof QuoteFormData, React.RefObject<HTMLElement>>> = {
    name: nameRef as React.RefObject<HTMLElement>,
    email: emailRef as React.RefObject<HTMLElement>,
    phone: phoneRef as React.RefObject<HTMLElement>,
    projectAddress: projectAddressRef as React.RefObject<HTMLElement>,
    scaffoldingType: scaffoldingTypeRef as React.RefObject<HTMLElement>,
    description: descriptionRef as React.RefObject<HTMLElement>,
  }

  const fieldOrder: (keyof QuoteFormData)[] = [
    'name', 'email', 'phone', 'projectAddress', 'scaffoldingType', 'description',
  ]

  const isDisabled = status === 'loading'

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const fieldErrors = validate(form)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      // Focus the first invalid field
      for (const field of fieldOrder) {
        if (fieldErrors[field] && fieldRefs[field]?.current) {
          ;(fieldRefs[field]!.current as HTMLElement).focus()
          break
        }
      }
      return
    }

    setErrors({})
    setStatus('loading')

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json()

      if (response.ok && data.ok) {
        setStatus('success')
        setForm(EMPTY_FORM)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  // ---------------------------------------------------------------------------
  // Success state
  // ---------------------------------------------------------------------------
  if (status === 'success') {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="rounded-xl bg-green-50 border border-green-200 p-8 text-center"
      >
        <div className="flex justify-center mb-4">
          <svg
            className="w-14 h-14 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-green-800 mb-2">Tack för din förfrågan!</h2>
        <p className="text-green-700 mb-6">
          Vi har tagit emot din förfrågan och återkommer inom 24 timmar på vardagar.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-brand-pink font-semibold underline hover:text-brand-pink-dark transition-colors"
        >
          Skicka en ny förfrågan
        </button>
      </div>
    )
  }

  // ---------------------------------------------------------------------------
  // Form
  // ---------------------------------------------------------------------------
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Offertformulär"
      className="space-y-5"
    >
      {/* Error banner */}
      {status === 'error' && (
        <div
          role="alert"
          aria-live="polite"
          className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
        >
          Något gick fel. Försök igen eller kontakta oss direkt på{' '}
          <a
            href={`mailto:${contactInfo.email}`}
            className="font-semibold underline hover:text-red-800"
          >
            {contactInfo.email}
          </a>
          .
        </div>
      )}

      {/* Namn */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-bold text-neutral-body mb-1"
        >
          Namn <span aria-hidden="true">*</span>
        </label>
        <input
          ref={nameRef}
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          disabled={isDisabled}
          aria-required="true"
          aria-describedby={errors.name ? 'error-name' : undefined}
          className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
        />
        {errors.name && (
          <p id="error-name" role="alert" className="mt-1 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      {/* Företag (valfritt) */}
      <div>
        <label htmlFor="company" className="block text-sm font-bold text-neutral-body mb-1">
          Företag <span className="font-normal text-neutral-muted">(valfritt)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          disabled={isDisabled}
          className={`${inputBase} ${inputNormal}`}
        />
      </div>

      {/* E-post */}
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-neutral-body mb-1">
          E-post <span aria-hidden="true">*</span>
        </label>
        <input
          ref={emailRef}
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          disabled={isDisabled}
          aria-required="true"
          aria-describedby={errors.email ? 'error-email' : undefined}
          className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
        />
        {errors.email && (
          <p id="error-email" role="alert" className="mt-1 text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Telefon */}
      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-neutral-body mb-1">
          Telefon <span aria-hidden="true">*</span>
        </label>
        <input
          ref={phoneRef}
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          disabled={isDisabled}
          aria-required="true"
          aria-describedby={errors.phone ? 'error-phone' : undefined}
          className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
        />
        {errors.phone && (
          <p id="error-phone" role="alert" className="mt-1 text-xs text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Adress för projektet */}
      <div>
        <label htmlFor="projectAddress" className="block text-sm font-bold text-neutral-body mb-1">
          Adress för projektet <span aria-hidden="true">*</span>
        </label>
        <input
          ref={projectAddressRef}
          id="projectAddress"
          name="projectAddress"
          type="text"
          value={form.projectAddress}
          onChange={handleChange}
          disabled={isDisabled}
          aria-required="true"
          aria-describedby={errors.projectAddress ? 'error-projectAddress' : undefined}
          className={`${inputBase} ${errors.projectAddress ? inputError : inputNormal}`}
        />
        {errors.projectAddress && (
          <p id="error-projectAddress" role="alert" className="mt-1 text-xs text-red-600">
            {errors.projectAddress}
          </p>
        )}
      </div>

      {/* Typ av ställning */}
      <div>
        <label htmlFor="scaffoldingType" className="block text-sm font-bold text-neutral-body mb-1">
          Typ av ställning <span aria-hidden="true">*</span>
        </label>
        <select
          ref={scaffoldingTypeRef}
          id="scaffoldingType"
          name="scaffoldingType"
          value={form.scaffoldingType}
          onChange={handleChange}
          disabled={isDisabled}
          aria-required="true"
          aria-describedby={errors.scaffoldingType ? 'error-scaffoldingType' : undefined}
          className={`${inputBase} ${errors.scaffoldingType ? inputError : inputNormal}`}
        >
          <option value="">Välj typ av ställning...</option>
          <option value="fasad">Fasadställning</option>
          <option value="rull">Rullställning</option>
          <option value="vaderskydd">Väderskydd</option>
          <option value="takskydd">Takskydd / Skyddstak</option>
          <option value="hyra">Hyra och montering</option>
          <option value="annat">Annat / Vet ej</option>
        </select>
        {errors.scaffoldingType && (
          <p id="error-scaffoldingType" role="alert" className="mt-1 text-xs text-red-600">
            {errors.scaffoldingType}
          </p>
        )}
      </div>

      {/* Beskrivning av projektet */}
      <div>
        <label htmlFor="description" className="block text-sm font-bold text-neutral-body mb-1">
          Beskrivning av projektet <span aria-hidden="true">*</span>
        </label>
        <textarea
          ref={descriptionRef}
          id="description"
          name="description"
          rows={5}
          value={form.description}
          onChange={handleChange}
          disabled={isDisabled}
          aria-required="true"
          aria-describedby={errors.description ? 'error-description' : undefined}
          placeholder="Beskriv projektet kortfattat: byggnadens typ, ungefärlig storlek, tillgänglighet, etc."
          className={`${inputBase} resize-y ${errors.description ? inputError : inputNormal}`}
        />
        {errors.description && (
          <p id="error-description" role="alert" className="mt-1 text-xs text-red-600">
            {errors.description}
          </p>
        )}
      </div>

      {/* Önskad startdatum (valfritt) */}
      <div>
        <label htmlFor="desiredStart" className="block text-sm font-bold text-neutral-body mb-1">
          Önskat startdatum{' '}
          <span className="font-normal text-neutral-muted">(valfritt)</span>
        </label>
        <input
          id="desiredStart"
          name="desiredStart"
          type="date"
          value={form.desiredStart}
          onChange={handleChange}
          disabled={isDisabled}
          className={`${inputBase} ${inputNormal}`}
        />
      </div>

      {/* Honeypot (hidden from real users, bait for bots) */}
      <div aria-hidden="true" style={{ display: 'none' }}>
        <label htmlFor="honeypot">Lämna detta fält tomt</label>
        <input
          id="honeypot"
          name="honeypot"
          type="text"
          value={form.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isDisabled}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-pink px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isDisabled && <Spinner />}
        {isDisabled ? 'Skickar...' : 'Skicka offertförfrågan'}
      </button>
    </form>
  )
}
