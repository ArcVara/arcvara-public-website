import { useScrollReveal } from '../hooks/useScrollReveal'
import GraphBackground from './GraphBackground'

export default function CTASection({ onDemoClick }) {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Subtle graph bg */}
      <div className="absolute inset-0 opacity-30">
        <GraphBackground />
      </div>

      {/* Teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,194,203,0.06) 0%, transparent 60%)' }}
      />

      <div ref={ref} className={`relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center animate-on-scroll ${visible ? 'visible' : ''}`}>
        <div className="section-label">Get Started</div>
        <h2 className="section-title mb-6">
          Ready to See Your Entire{' '}
          <span className="text-gradient">Architecture,</span>
          <br />
          Live?
        </h2>
        <p className="section-subtitle max-w-xl mx-auto mb-10">
          Request a demo and see Arcvara discover and map your environment in a live session.
          No slides. No manual setup. Just your architecture, visualised in real time.
        </p>

        <button
          onClick={onDemoClick}
          className="btn-primary text-lg px-10 py-5"
        >
          Register Your Interest
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        <p className="text-white/30 text-sm mt-6">
          GCC enterprise teams · Architects · DevOps · Security & Compliance
        </p>
      </div>
    </section>
  )
}
