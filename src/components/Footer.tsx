import { NavLink } from 'react-router-dom'

const quickLinks = [
  { to: '/',            label: 'Hem' },
  { to: '/tjanster',    label: 'Tjänster' },
  { to: '/projekt',     label: 'Projekt' },
  { to: '/om-oss',      label: 'Om oss' },
  { to: '/kontakt',     label: 'Kontakt' },
  { to: '/begar-offert', label: 'Begär offert' },
]

const serviceAreas = ['Mölndal', 'Partille', 'Kungsbacka', 'Lerum', 'Härryda']

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 — Company info */}
          <div>
            <p className="text-xl font-bold mb-1">
              No1 <span className="text-brand-amber">Ställningar</span>
            </p>
            <p className="text-neutral-muted text-sm mb-4">
              Professionell ställningsuthyrning i Göteborg
            </p>
            <address className="not-italic text-sm text-white/80 space-y-1.5">
              <p>Göteborg, Sverige</p>
              <p>
                <a
                  href="tel:+46700000000"
                  className="hover:text-brand-amber transition-colors"
                >
                  +46 70 000 00 00
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@no1stallningar.se"
                  className="hover:text-brand-amber transition-colors"
                >
                  info@no1stallningar.se
                </a>
              </p>
            </address>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-white/60 mb-4">
              Snabblänkar
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-white/80 hover:text-brand-amber transition-colors"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Service area */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-white/60 mb-4">
              Verksamhetsområde
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Vi utför arbeten i Göteborg med omnejd:{' '}
              {serviceAreas.join(', ')}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-white/50">
          © {new Date().getFullYear()} No1 Ställningar. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  )
}
