import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LocalBusinessSchema from './components/LocalBusinessSchema'
import CookieBanner from './components/CookieBanner'
import BackToTop from './components/BackToTop'

const Home        = lazy(() => import('@/pages/Home'))
const Tjanster    = lazy(() => import('@/pages/Tjanster'))
const Projekt     = lazy(() => import('@/pages/Projekt'))
const OmOss       = lazy(() => import('@/pages/OmOss'))
const Kontakt     = lazy(() => import('@/pages/Kontakt'))
const BegarOffert = lazy(() => import('@/pages/BegarOffert'))
const NotFound    = lazy(() => import('@/pages/NotFound'))

function App() {
  return (
    <BrowserRouter>
      <LocalBusinessSchema />
      <Header />
      <main id="main-content">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-neutral-bg">
            <div className="w-8 h-8 border-4 border-brand-amber border-t-transparent rounded-full animate-spin" aria-label="Laddar..." />
          </div>
        }>
          <Routes>
            <Route path="/"              element={<Home />} />
            <Route path="/tjanster"      element={<Tjanster />} />
            <Route path="/projekt"       element={<Projekt />} />
            <Route path="/om-oss"        element={<OmOss />} />
            <Route path="/kontakt"       element={<Kontakt />} />
            <Route path="/begar-offert"  element={<BegarOffert />} />
            <Route path="*"              element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <CookieBanner />
      <BackToTop />
    </BrowserRouter>
  )
}

export default App
