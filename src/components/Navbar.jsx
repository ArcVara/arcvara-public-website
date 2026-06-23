import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar({ onDemoClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t('navbar.platform'), href: '#solution' },
    { label: t('navbar.modules'), href: '#modules' },
    { label: t('navbar.compliance'), href: '#compliance' },
    { label: t('navbar.team'), href: '#team' },
  ]

  const toggleLang = () => {
    const current = i18n.language
    const next = current === 'en' ? 'ar' : 'en'
    const newPath = location.pathname.replace(`/${current}`, `/${next}`)
    navigate(newPath)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md border-b border-arc-blue/15 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" aria-label="Arcvara home">
          <img
            src="/arcvara_logo_compact_dark.svg"
            alt="Arcvara"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-vara-teal transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Language switcher */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-sm font-medium border border-arc-blue/25 rounded-full px-3.5 py-1.5 text-white/60 hover:text-white hover:border-arc-blue/50 transition-all"
          >
            {t('navbar.switchLang')}
          </button>
          <button
            onClick={onDemoClick}
            className="btn-primary text-sm py-2 px-5"
          >
            {t('navbar.registerInterest')}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-mid/98 backdrop-blur-md border-b border-arc-blue/15">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-vara-teal transition-colors text-base font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-1">
              <button
                onClick={() => { setMenuOpen(false); toggleLang() }}
                className="text-sm font-medium border border-arc-blue/25 rounded-full px-3.5 py-1.5 text-white/60 hover:text-white transition-all"
              >
                {t('navbar.switchLang')}
              </button>
              <button
                onClick={() => { setMenuOpen(false); onDemoClick() }}
                className="btn-primary text-sm"
              >
                {t('navbar.registerInterest')}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
