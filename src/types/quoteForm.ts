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
