# No1 Ställningar — Phase 10: Scroll Animations, Back-to-Top, Error Boundary & Code Splitting

## Goal
Add scroll-reveal animations using Intersection Observer, a back-to-top button, a React error boundary for graceful production error handling, and lazy-load all routes to reduce the initial JS bundle size.

## Tasks

### Scroll-Reveal Animations

- [ ] Create `src/hooks/useScrollReveal.ts` — a custom hook using IntersectionObserver. The hook attaches a `ref` to a DOM element and returns whether it has entered the viewport:
  ```ts
  import { useEffect, useRef, useState } from 'react'

  interface Options {
    threshold?: number
    rootMargin?: string
    once?: boolean
  }

  export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
    options: Options = {}
  ) {
    const { threshold = 0.15, rootMargin = '0px', once = true } = options
    const ref = useRef<T>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      const el = ref.current
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) observer.unobserve(el)
          } else if (!once) {
            setIsVisible(false)
          }
        },
        { threshold, rootMargin }
      )
      observer.observe(el)
      return () => observer.disconnect()
    }, [threshold, rootMargin, once])

    return { ref, isVisible }
  }
  ```

- [ ] Add global reveal animation classes to `src/index.css`:
  ```css
  @layer utilities {
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .reveal-delay-1 { transition-delay: 0.1s; }
    .reveal-delay-2 { transition-delay: 0.2s; }
    .reveal-delay-3 { transition-delay: 0.3s; }
  }
  ```

- [ ] Apply scroll reveal to `src/pages/Home.tsx` — wrap each major section's inner content container with the reveal pattern. Use `useScrollReveal` hook and apply `reveal` + `is-visible` classes conditionally. Apply to: Short Intro stats row, Services grid, Why Choose Us grid, Testimonials grid, and the Footer CTA heading. Use staggered `reveal-delay-1/2/3` on individual cards within grids for a cascade effect. Do NOT apply reveal to the Hero section (it's above the fold and should render immediately).

- [ ] Apply scroll reveal to `src/pages/Tjanster.tsx` — Services grid cards and Process steps section.

- [ ] Apply scroll reveal to `src/pages/OmOss.tsx` — Company Story section, Experience stat boxes, and the Safety Philosophy section.

### Back-to-Top Button

- [ ] Create `src/components/BackToTop.tsx`:
  - Tracks scroll position with a `useEffect` listener; shows button when `window.scrollY > 400`
  - `<button>` with `aria-label="Scrolla till toppen"`, fixed position `bottom-24 right-6 z-40` (above the floating call button's space, or adjust to not overlap)
  - Style: `w-10 h-10 rounded-full bg-brand-blue/80 hover:bg-brand-blue text-white shadow-lg` with an upward chevron SVG icon
  - Click handler: `window.scrollTo({ top: 0, behavior: 'smooth' })`
  - Fade in/out with `transition-opacity duration-300` and `opacity-0 pointer-events-none` when hidden
- [ ] Add `<BackToTop />` to `src/App.tsx` alongside `<FloatingCallButton />` and `<CookieBanner />`

### Error Boundary

- [ ] Create `src/components/ErrorBoundary.tsx` — a React class component (Error Boundaries must be class components):
  ```tsx
  import { Component, type ErrorInfo, type ReactNode } from 'react'

  interface Props { children: ReactNode }
  interface State { hasError: boolean; error?: Error }

  export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
      super(props)
      this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): State {
      return { hasError: true, error }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
      console.error('ErrorBoundary caught:', error, info)
    }

    render() {
      if (this.state.hasError) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-neutral-bg px-4">
            <div className="text-center max-w-md">
              <h1 className="text-2xl font-bold text-neutral-body mb-4">Något gick fel</h1>
              <p className="text-neutral-muted mb-6">
                Ett oväntat fel har uppstått. Försök ladda om sidan.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-brand-amber text-white rounded font-semibold hover:bg-brand-amber-dark transition-colors"
              >
                Ladda om sidan
              </button>
            </div>
          </div>
        )
      }
      return this.props.children
    }
  }
  ```
- [ ] Wrap the app in `src/main.tsx` with `<ErrorBoundary>`:
  ```tsx
  import { ErrorBoundary } from './components/ErrorBoundary'
  // ...
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ErrorBoundary>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ErrorBoundary>
    </StrictMode>
  )
  ```

### Code Splitting (Lazy Routes)

- [ ] Update `src/App.tsx` to lazy-load all page components using `React.lazy()` and wrap routes in `<Suspense>`:
  ```tsx
  import { lazy, Suspense } from 'react'

  const Home       = lazy(() => import('@/pages/Home'))
  const Tjanster   = lazy(() => import('@/pages/Tjanster'))
  const Projekt    = lazy(() => import('@/pages/Projekt'))
  const OmOss      = lazy(() => import('@/pages/OmOss'))
  const Kontakt    = lazy(() => import('@/pages/Kontakt'))
  const BegarOffert = lazy(() => import('@/pages/BegarOffert'))
  const NotFound   = lazy(() => import('@/pages/NotFound'))
  ```
  Wrap the `<Routes>` block in:
  ```tsx
  <Suspense fallback={
    <div className="min-h-screen flex items-center justify-center bg-neutral-bg">
      <div className="w-8 h-8 border-4 border-brand-amber border-t-transparent rounded-full animate-spin" aria-label="Laddar..." />
    </div>
  }>
    <Routes>...</Routes>
  </Suspense>
  ```
- [ ] Run `npm run build` and compare chunk sizes to the previous build (was ~304 KB JS). Verify the main bundle is now significantly smaller and page-specific code is in separate chunks. If any chunk is still over 500 KB gzip, investigate and split further.
- [ ] Run `npx tsc --noEmit` — verify zero TypeScript errors after all Phase 10 changes.
- [ ] Run `npm run dev` and navigate between all pages — verify the spinner appears briefly on first visit to each page, animations trigger on scroll, back-to-top appears after scrolling down, and the floating call button is visible.
