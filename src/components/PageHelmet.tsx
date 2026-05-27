import { Helmet } from 'react-helmet-async'

interface PageHelmetProps {
  /** Browser tab title — will be appended with " | No1 Ställningar" */
  title: string
  /** Meta description — used for both page description and og:description */
  description: string
  /** Relative URL path, e.g. "/tjanster". Used to build og:url. */
  path?: string
}

const SITE_NAME = 'No1 Ställningar'
const BASE_URL = 'https://no1scaff.se'

/**
 * Reusable Helmet helper that renders the full <head> meta block:
 *   - <title>
 *   - meta description
 *   - Open Graph (og:*) tags
 *   - Twitter Card tags
 *
 * Use this on every page to avoid repetition.
 */
export default function PageHelmet({ title, description, path = '' }: PageHelmetProps) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const canonicalUrl = `${BASE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="sv_SE" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
