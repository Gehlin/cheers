import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/',            label: 'Hem' },
  { to: '/tjanster',    label: 'Tjänster' },
  { to: '/projekt',     label: 'Projekt' },
  { to: '/om-oss',      label: 'Om oss' },
  { to: '/kontakt',     label: 'Kontakt' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-150 ${
      isActive
        ? 'text-brand-pink'
        : 'text-neutral-body hover:text-brand-pink'
    }`

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[200] focus:px-4 focus:py-2 focus:bg-brand-pink focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-card-md"
      >
        Hoppa till innehåll
      </a>

      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled
            ? 'shadow-nav-scroll'
            : 'shadow-nav'
        }`}
      >
        <div className="container-max flex items-center justify-between h-[68px] px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-1 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 rounded"
            aria-label="No1 Ställningar – tillbaka till startsidan"
          >
            <span className="font-black text-xl tracking-tight text-brand-pink">No1</span>
            <span className="font-semibold text-xl tracking-tight text-neutral-body">Ställningar</span>
          </NavLink>

          {/* Desktop nav */}
          <nav aria-label="Huvudnavigation" className="hidden md:flex items-center gap-7">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/begar-offert"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-pink text-white text-sm font-semibold hover:bg-brand-pink-dark transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2"
            >
              Begär offert
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(v => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg gap-[5px] hover:bg-neutral-bg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink"
            >
              <span className={`block w-5 h-[1.5px] bg-neutral-body rounded-full transition-all duration-200 origin-center ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-neutral-body rounded-full transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-neutral-body rounded-full transition-all duration-200 origin-center ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav aria-label="Mobil navigation" className="border-t border-neutral-border bg-white">
            <ul className="flex flex-col px-4 py-3 gap-0.5">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `block py-3 px-3 rounded-lg text-sm font-medium transition-colors duration-150 ${
                        isActive
                          ? 'text-brand-pink bg-brand-pink-tint'
                          : 'text-neutral-body hover:bg-neutral-bg hover:text-brand-pink'
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2 pb-1">
                <a
                  href="/begar-offert"
                  className="flex items-center justify-center w-full py-3 px-4 rounded-lg bg-brand-pink text-white text-sm font-semibold hover:bg-brand-pink-dark transition-colors duration-150"
                  onClick={() => setMenuOpen(false)}
                >
                  Begär offert
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
