import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

const problemIcons = [
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>,
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>,
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
  </svg>,
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>,
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
]

export default function ProblemSection() {
  const { ref, visible } = useScrollReveal()
  const { t } = useTranslation()
  const problems = t('problem.items', { returnObjects: true })
  const costs = t('problem.costs', { returnObjects: true })

  return (
    <section id="problem" className="py-24 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 animate-on-scroll ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <div className="section-label">{t('problem.sectionLabel')}</div>
          <h2 className="section-title mb-4">
            {t('problem.title1')}{' '}
            <span className="text-gradient">{t('problem.titleGrad')}</span>
            <br />
            {t('problem.title2')}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t('problem.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {problems.map((p, i) => (
            <div
              key={i}
              className="card-dark group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-arc-blue/10 border border-arc-blue/20 flex items-center justify-center text-arc-blue group-hover:border-arc-blue/40 transition-colors">
                  {problemIcons[i]}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm mb-0.5">{p.tool}</div>
                  <div className="text-vara-teal/70 text-xs mb-2">{p.examples}</div>
                  <p className="text-white/55 text-sm leading-relaxed">{p.gap}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-arc-blue/15 rounded-2xl p-8 bg-navy-card/50 backdrop-blur-sm">
          <div className="section-label text-center mb-8">{t('problem.costLabel')}</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {costs.map((c, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-vara-teal mb-2">{c.metric}</div>
                <p className="text-white/70 text-sm mb-1">{c.description}</p>
                <p className="text-white/40 text-xs">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
