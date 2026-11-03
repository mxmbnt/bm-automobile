import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

export default function Layout() {
  const { pathname, hash } = useLocation()

  // New page starts at the top; in-page anchors (#how-it-works, /faq#buying) scroll to their target
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) return el.scrollIntoView({ behavior: 'smooth' })
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="relative">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
