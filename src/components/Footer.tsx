import { NavLink } from 'react-router-dom'
import { contactInfo } from '@/data/contact'

const quickLinks = [
  { to: '/',            label: 'Hem' },
  { to: '/tjanster',    label: 'Tjänster' },
  { to: '/projekt',     label: 'Projekt' },
  { to: '/om-oss',      label: 'Om oss' },
  { to: '/kontakt',     label: 'Kontakt' },
  { to: '/begar-offert', label: 'Begär offert' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-pink text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 — Company info */}
          <div>
            <p className="text-xl font-bold mb-1">
              No1 Ställningar
            </p>
            <p className="text-white/70 text-sm mb-4">
              Professionell ställningsuthyrning i Göteborg
            </p>
            <address className="not-italic text-sm text-white/80 space-y-1.5">
              <p>{contactInfo.address.street}, {contactInfo.address.postalCode}</p>
              <p>{contactInfo.address.city}</p>
              <p>
                <a
                  href={contactInfo.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </p>
            </address>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <h3
              id="footer-nav-label"
              className="font-semibold text-sm uppercase tracking-widest text-white/60 mb-4"
            >
              Snabblänkar
            </h3>
            <nav aria-labelledby="footer-nav-label">
              <ul className="space-y-2 text-sm">
                {quickLinks.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 — Service area */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-white/60 mb-4">
              Verksamhetsområde
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Vi utför arbeten i Göteborg med omnejd:{' '}
              {contactInfo.serviceArea.slice(1).join(', ')}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {contactInfo.legalName}. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  )
}
