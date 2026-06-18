import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const modules = [
  {
    number: '01',
    name: 'Business Architecture',
    users: 'Enterprise Architects · Strategy · C-Suite',
    description:
      'Business capabilities, value streams, strategy-to-IT alignment, and organisational mapping. Connects business intent to what is actually deployed.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: '#1A7FAD',
  },
  {
    number: '02',
    name: 'Solution & Domain Architecture',
    users: 'Solution Architects · Tech Leads',
    description:
      'HLD/LLD canvas, C4 model, domain decomposition, ERP integration (SAP, Oracle). Every diagram component is linked to a real deployed resource.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    color: '#1A7FAD',
  },
  {
    number: '03',
    name: 'Infrastructure & Cloud',
    users: 'DevOps · Cloud · Infrastructure Teams',
    description:
      'Multi-cloud topology across AWS, GCP, Azure, OCI, and OpenShift. Kubernetes, on-premises environments, and cross-cloud correlation in one view.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: '#00C2CB',
  },
  {
    number: '04',
    name: 'Networking',
    users: 'Network Engineers · Security Teams',
    description:
      'LAN/WAN/MAN topology, IP inventory, port mapping, S2S VPN, firewall zones, and physical and virtual connections — all auto-discovered.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: '#00C2CB',
  },
  {
    number: '05',
    name: 'API & Integration',
    users: 'Developers · Architects',
    description:
      'API flow visualisation, distributed request tracing, cross-system failure isolation using topology awareness, and contract validation.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: '#00C2CB',
  },
  {
    number: '06',
    name: 'Security & Compliance',
    users: 'CISO · Security · Compliance · Auditors',
    description:
      'Attack surface analysis, misconfiguration detection, and automated gap analysis against SAMA CSF, NCA ECC-2:2024, ISO 27001, NIST, and GDPR.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: '#1A7FAD',
  },
  {
    number: '07',
    name: 'IAM & PAM',
    users: 'Admins · Security · Compliance',
    description:
      'LDAP/AD integration, Okta, Azure Entra ID. Identity mapping, permission analysis, and privileged access visibility across the full environment.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    color: '#1A7FAD',
  },
  {
    number: '08',
    name: 'AI Assistant',
    users: 'All Users',
    description:
      'Contextual recommendations and commands generated from live infrastructure data. Not a generic chatbot — it knows your actual environment.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: '#00C2CB',
    highlight: true,
  },
]

export default function ModulesSection() {
  const { ref, visible } = useScrollReveal()
  const [active, setActive] = useState(null)

  return (
    <section id="modules" className="py-24 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 animate-on-scroll ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <div className="section-label">Platform Modules</div>
          <h2 className="section-title mb-4">
            Eight Modules.{' '}
            <span className="text-gradient">One Connected Platform.</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Every module shares the same live data graph. Changes in one surface immediately across all others.
            The AI layer is embedded across all eight — not bolted on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((mod, i) => (
            <div
              key={mod.number}
              className={`card-dark cursor-pointer group relative overflow-hidden transition-all duration-300 ${
                active === i ? 'border-vara-teal/50' : ''
              } ${mod.highlight ? 'border-vara-teal/20' : ''}`}
              onClick={() => setActive(active === i ? null : i)}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {/* Number label */}
              <div
                className="absolute top-4 right-4 text-xs font-mono font-semibold opacity-30"
                style={{ color: mod.color }}
              >
                {mod.number}
              </div>

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${mod.color}18`,
                  border: `1px solid ${mod.color}30`,
                  color: mod.color,
                }}
              >
                {mod.icon}
              </div>

              <h3 className="font-semibold text-white text-sm mb-1">{mod.name}</h3>
              <div className="text-xs mb-3" style={{ color: `${mod.color}99` }}>
                {mod.users}
              </div>

              {/* Expandable description */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: active === i ? '200px' : '0px' }}
              >
                <p className="text-white/55 text-sm leading-relaxed pb-2">{mod.description}</p>
              </div>

              {active !== i && (
                <div className="text-xs text-arc-blue/60 flex items-center gap-1 mt-1">
                  <span>See details</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}

              {mod.highlight && (
                <div
                  className="absolute inset-0 pointer-events-none rounded-xl"
                  style={{ boxShadow: 'inset 0 0 30px rgba(0,194,203,0.04)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
