import { useState, useEffect, useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet, useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import ModulesSection from './components/ModulesSection'
import DifferentiatorsSection from './components/DifferentiatorsSection'
import ComplianceSection from './components/ComplianceSection'
import IntegrationsSection from './components/IntegrationsSection'
import TeamSection from './components/TeamSection'
import CTASection from './components/CTASection'
import DemoModal from './components/DemoModal'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import DataRights from './pages/DataRights'

function HomePage({ onDemoClick }) {
  return (
    <>
      <Navbar onDemoClick={onDemoClick} />
      <main>
        <Hero onDemoClick={onDemoClick} />
        <ProblemSection />
        <SolutionSection />
        <ModulesSection />
        <DifferentiatorsSection />
        <ComplianceSection />
        <IntegrationsSection />
        <TeamSection />
        <CTASection onDemoClick={onDemoClick} />
      </main>
      <Footer onDemoClick={onDemoClick} />
    </>
  )
}

function LanguageWrapper() {
  const { lang } = useParams()
  const navigate = useNavigate()
  const { i18n } = useTranslation()

  useLayoutEffect(() => {
    const valid = ['en', 'ar']
    if (!valid.includes(lang)) {
      const saved = localStorage.getItem('arcvara-lang') || 'en'
      navigate(`/${saved}`, { replace: true })
      return
    }
    i18n.changeLanguage(lang)
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    localStorage.setItem('arcvara-lang', lang)
  }, [lang])

  if (!['en', 'ar'].includes(lang)) return null
  return <Outlet />
}

function RootRedirect() {
  const saved = localStorage.getItem('arcvara-lang') || 'en'
  return <Navigate to={`/${saved}`} replace />
}

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen bg-navy text-white">
          <Routes>
            <Route path="/:lang" element={<LanguageWrapper />}>
              <Route index element={<HomePage onDemoClick={() => setDemoOpen(true)} />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms" element={<TermsConditions />} />
              <Route path="data-rights" element={<DataRights />} />
            </Route>
            <Route path="/" element={<RootRedirect />} />
            <Route path="*" element={<RootRedirect />} />
          </Routes>
          <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
