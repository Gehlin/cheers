import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LocalBusinessSchema from './components/LocalBusinessSchema'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import Tjanster from './pages/Tjanster'
import Projekt from './pages/Projekt'
import OmOss from './pages/OmOss'
import Kontakt from './pages/Kontakt'
import BegarOffert from './pages/BegarOffert'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <LocalBusinessSchema />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/tjanster"      element={<Tjanster />} />
          <Route path="/projekt"       element={<Projekt />} />
          <Route path="/om-oss"        element={<OmOss />} />
          <Route path="/kontakt"       element={<Kontakt />} />
          <Route path="/begar-offert"  element={<BegarOffert />} />
          <Route path="*"              element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  )
}

export default App
