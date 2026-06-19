import { useScrollReveal } from '../hooks/useScrollReveal'

const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: 'Unified Graph Schema',
    description:
      'Every source — AWS, Azure, OCI, on-premises scanners, SIEM platforms, IAM directories — is normalised into a common graph of Nodes, Edges, Interfaces, and Assets. Cross-source correlation is automatic.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Auto-Discovery from Day One',
    description:
      'Connect cloud accounts, an LDAP directory, and a network scanner. Arcvara immediately begins discovering and drawing your environment — what would take weeks to document manually appears in minutes.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI Embedded Across All Modules',
    description:
      'The AI layer is not a chatbot overlay — it is embedded across all eight modules. It learns your environment, predicts compliance drift, diagnoses API failures, and optimises architecture patterns based on what is actually deployed.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Data Sovereignty First',
    description:
      'Discovery agents are lightweight, containerised processes deployed inside your environment with read-only permissions. Sensitive metadata never leaves your boundary unless you configure it to. On-premises deployable from Phase 1.',
  },
]

export default function SolutionSection() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="solution" className="py-24 bg-navy relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,194,203,0.05) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 animate-on-scroll ${visible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label">The Solution</div>
          <h2 className="section-title mb-4">
            One Platform.{' '}
            <span className="text-gradient">Full Stack.</span>
            <br />
            Always Live.
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Arcvara is the intelligent layer that connects your existing tools, makes sense
            of what they collectively know, and surfaces what no single tool can see alone.
            It does not replace — it unifies.
          </p>
        </div>

        {/* Architecture diagram representation */}
        <div className="relative bg-navy-card border border-arc-blue/15 rounded-2xl p-8 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative z-10">
            {/* Layer labels */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {['Business Strategy', 'Solution Architecture', 'Infrastructure & Cloud', 'Network & Security'].map((layer, i) => (
                <div
                  key={layer}
                  className="text-center py-3 px-4 rounded-lg border text-sm font-medium"
                  style={{
                    borderColor: `rgba(26,127,173,${0.2 + i * 0.1})`,
                    background: `rgba(26,127,173,${0.04 + i * 0.02})`,
                    color: i < 2 ? '#fff' : '#fff',
                  }}
                >
                  {layer}
                </div>
              ))}
            </div>

            {/* Arrow down */}
            <div className="flex justify-center mb-6">
              <div className="flex flex-col items-center gap-1">
                <div className="text-white/40 text-xs mb-2">Arcvara connects all layers in one live graph</div>
                <svg className="w-6 h-16 text-vara-teal" viewBox="0 0 24 64" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v56m0 0l-6-6m6 6l6-6" />
                </svg>
              </div>
            </div>

            {/* Platform box */}
            <div
              className="text-center py-6 px-8 rounded-xl border-2 border-vara-teal/40 max-w-lg mx-auto"
              style={{
                background: 'linear-gradient(135deg, rgba(0,194,203,0.08) 0%, rgba(26,127,173,0.06) 100%)',
                boxShadow: '0 0 40px rgba(0,194,203,0.1)',
              }}
            >
              <img src="/arcvara_logo_compact_dark.svg" alt="Arcvara" className="h-10 mx-auto mb-2" />
              <div className="text-sm text-white/60">Single Live Workspace · AI-Native · Compliance-Embedded</div>
            </div>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="card-dark flex gap-5"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-vara-teal/10 border border-vara-teal/20 flex items-center justify-center text-vara-teal">
                {pillar.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
