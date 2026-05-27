export interface PartnerItem {
  id: string
  name: string
  logoUrl?: string // optional: path to logo image in src/assets/logos/
}

// Replace with real client/partner companies before launch
export const partners: PartnerItem[] = [
  { id: '1', name: 'NCC' },
  { id: '2', name: 'Skanska' },
  { id: '3', name: 'Peab' },
  { id: '4', name: 'JM' },
  { id: '5', name: 'Veidekke' },
  { id: '6', name: 'Serneke' },
  { id: '7', name: 'Besqab' },
  { id: '8', name: 'Riksbyggen' },
]
// Note to client: Replace the above with the actual companies you work with.
// If you have logo files, place them in src/assets/logos/ and add logoUrl paths.
