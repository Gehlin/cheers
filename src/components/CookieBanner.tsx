// If Google Analytics or other tracking is added, update this banner to include
// opt-in/opt-out controls per GDPR Article 7.

import { useState } from 'react'

const STORAGE_KEY = 'cookieConsent'

export default function CookieBanner() {
  const [visible, setVisible] = useState<boolean>(
    () => localStorage.getItem(STORAGE_KEY) !== 'true'
  )

  if (!visible) return null

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  return (
    <div
      role="region"
      aria-label="Cookie-information"
      className="fixed bottom-0 inset-x-0 z-50 bg-brand-pink text-white"
    >
      <div className="container-max px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-white/90 flex-1">
          Vi använder inga spårningscookies. Webbplatsen använder tekniska
          cookies som är nödvändiga för att sidan ska fungera korrekt.
        </p>
        <button
          onClick={handleAccept}
          className="shrink-0 rounded bg-white hover:bg-gray-50 text-brand-pink font-semibold text-sm px-5 py-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Förstått
        </button>
      </div>
    </div>
  )
}
