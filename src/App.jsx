import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <ErrorBoundary>
    <BrowserRouter>
      <div className="min-h-screen bg-navy text-white">
        <Routes>
          <Route path="/" element={<HomePage onDemoClick={() => setDemoOpen(true)} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/data-rights" element={<DataRights />} />
        </Routes>
        <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      </div>
    </BrowserRouter>
    </ErrorBoundary>
  )
}
