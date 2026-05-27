import { NavLink } from 'react-router-dom'
import { contactInfo } from '@/data/contact'

const quickLinks = [
  { to: '/',             label: 'Hem' },
  { to: '/tjanster',     label: 'Tjänster' },
  { to: '/projekt',      label: 'Projekt' },
  { to: '/om-oss',       label: 'Om oss' },
  { to: '/kontakt',      label: 'Kontakt' },
  { to: '/begar-offert', label: 'Begär offert' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* Column 1 — Brand + contact */}
          <div className="md:col-span-5">
            {/* Logo */}
            <div className="flex items-center gap-1 mb-4">
              <span className="font-black text-2xl tracking-tight text-brand-pink">No1</span>
              <span className="font-semibold text-2xl tracking-tight text-white">Ställningar</span>
            </div>
            <p className="text-sm text-white/50 mb-6 leading-relaxed max-w-xs">
              Professionell uthyrning och montering av byggnadsställningar i Göteborg och Västra Götaland.
            </p>
            <address className="not-italic space-y-2.5">
              <p className="text-sm text-white/60">
                {contactInfo.address.street}, {contactInfo.address.postalCode} {contactInfo.address.city}
              </p>
              {contactInfo.contacts.map(c => (
                <div key={c.name} className="flex flex-col gap-0.5">
                  <span className="text-xs text-white/40 font-medium">{c.name}</span>
                  <div className="flex items-center gap-4">
                    <a href={c.phoneHref} className="text-sm text-white/70 hover:text-brand-pink transition-colors">
                      {c.phone}
                    </a>
                    <a href={`mailto:${c.email}`} className="text-sm text-white/70 hover:text-brand-pink transition-colors">
                      {c.email}
                    </a>
                  </div>
                </div>
              ))}
            </address>
          </div>

          {/* Column 2 — Quick links */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/30 mb-5">
              Sidor
            </h3>
            <nav aria-label="Sidlänkar i sidfot">
              <ul className="space-y-2.5">
                {quickLinks.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 — Service area */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/30 mb-5">
              Verksamhetsområde
            </h3>
            <div className="flex flex-wrap gap-2">
              {contactInfo.serviceArea.map(area => (
                <span
                  key={area}
                  className="text-xs text-white/50 bg-white/5 rounded-full px-3 py-1"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {contactInfo.legalName}. Alla rättigheter förbehållna.
          </p>
          <a
            href={`https://${contactInfo.domain}`}
            className="text-xs text-white/30 hover:text-brand-pink transition-colors"
          >
            {contactInfo.domain}
          </a>
        </div>
      </div>
    </footer>
  )
}
