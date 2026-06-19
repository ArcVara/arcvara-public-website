import GraphBackground from './GraphBackground'

const stats = [
  { value: '4', label: 'Architecture Layers' },
  { value: '40+', label: 'Integrations' },
  { value: '8', label: 'Platform Modules' },
  { value: 'GCC-First', label: 'Compliance-Native' },
]

export default function Hero({ onDemoClick }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Animated graph */}
      <GraphBackground />

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #0D1F3C, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-vara-teal/10 border border-vara-teal/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-vara-teal animate-pulse" />
            <span className="text-vara-teal text-xs font-semibold uppercase tracking-widest">
              AI-Native Enterprise Architecture Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">See Your Entire</span>
            <br />
            <span className="text-gradient">Enterprise.</span>
            <span className="text-white"> Live.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/65 max-w-2xl mb-10 leading-relaxed">
            Arcvara unifies your full technology stack — cloud infrastructure,
            networking, APIs, security, IAM, and compliance — into one live,
            connected, intelligent workspace. From business strategy to physical
            network. In one platform.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button onClick={onDemoClick} className="btn-primary text-base px-8 py-4">
              Register Your Interest
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a href="#solution" className="btn-secondary text-base px-8 py-4 text-center justify-center">
              See How It Works
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 border-t border-arc-blue/15 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-vara-teal">{stat.value}</div>
                <div className="text-sm text-white/50 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0D1F3C, transparent)' }}
      />
    </section>
  )
}
