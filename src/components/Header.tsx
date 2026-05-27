import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const navLinks = [
  { to: '/',          label: 'Hem' },
  { to: '/tjanster',  label: 'Tjänster' },
  { to: '/projekt',   label: 'Projekt' },
  { to: '/om-oss',    label: 'Om oss' },
  { to: '/kontakt',   label: 'Kontakt' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-medium text-sm hover:text-white/70 transition-colors duration-200 ${
      isActive ? 'text-white/70' : 'text-white'
    }`

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-brand-pink focus:rounded focus:font-semibold"
      >
        Hoppa till innehåll
      </a>

      <header
        className={`sticky top-0 z-50 bg-brand-pink transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-white font-bold text-xl tracking-tight">
              No1 Ställningar
            </span>
          </NavLink>

          {/* Desktop nav */}
          <nav aria-label="Huvudnavigation" className="hidden md:flex items-center gap-6">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className={navLinkClass}>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Button as="a" href="/begar-offert" variant="secondary" className="hidden sm:inline-flex">
              Begär offert
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded focus-visible:outline-2 focus-visible:outline-brand-pink"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-200 origin-center ${
                  menuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-200 origin-center ${
                  menuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobil navigation"
            className="md:hidden bg-brand-pink-dark border-t border-white/10"
          >
            <ul className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `block py-2.5 px-3 rounded font-medium text-sm transition-colors duration-200 ${
                        isActive
                          ? 'bg-white/10 text-white/70'
                          : 'text-white hover:bg-white/10 hover:text-white/70'
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <Button as="a" href="/begar-offert" variant="secondary" className="w-full justify-center">
                  Begär offert
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  )
}
