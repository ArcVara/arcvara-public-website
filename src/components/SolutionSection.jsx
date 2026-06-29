import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

const pillarIcons = [
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>,
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>,
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>,
]

export default function SolutionSection() {
  const { ref, visible } = useScrollReveal()
  const { t } = useTranslation()
  const pillars = t('solution.pillars', { returnObjects: true })
  const layers = t('solution.layers', { returnObjects: true })

  return (
    <section id="solution" className="py-24 bg-navy relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,203,0.05) 0%, transparent 70%)' }}
      />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 animate-on-scroll ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <div className="section-label">{t('solution.sectionLabel')}</div>
          <h2 className="section-title mb-4">
            {t('solution.title1')}{' '}
            <span className="text-gradient">{t('solution.titleGrad')}</span>
            <br />
            {t('solution.title2')}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t('solution.subtitle')}
          </p>
        </div>

        <div className="relative bg-navy-card border border-arc-blue/15 rounded-2xl p-8 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {layers.map((layer, i) => (
                <div
                  key={i}
                  className="text-center py-3 px-4 rounded-lg border text-sm font-medium"
                  style={{
                    borderColor: `rgba(26,127,173,${0.2 + i * 0.1})`,
                    background: `rgba(26,127,173,${0.04 + i * 0.02})`,
                    color: '#fff',
                  }}
                >
                  {layer}
                </div>
              ))}
            </div>

            <div className="flex justify-center mb-6">
              <div className="flex flex-col items-center gap-1">
                <div className="text-white/40 text-xs mb-2">{t('solution.diagramCaption')}</div>
                <svg className="w-6 h-16 text-vara-teal" viewBox="0 0 24 64" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v56m0 0l-6-6m6 6l6-6" />
                </svg>
              </div>
            </div>

            <div
              className="text-center py-6 px-8 rounded-xl border-2 border-vara-teal/40 max-w-lg mx-auto"
              style={{
                background: 'linear-gradient(135deg, rgba(0,194,203,0.08) 0%, rgba(26,127,173,0.06) 100%)',
                boxShadow: '0 0 40px rgba(0,194,203,0.1)',
              }}
            >
              <img src={`${import.meta.env.BASE_URL}arcvara_logo_compact_dark.svg`} alt="Arcvara" className="h-10 mx-auto mb-2" />
              <div className="text-sm text-white/60">{t('solution.platformTagline')}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="card-dark flex gap-5"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-vara-teal/10 border border-vara-teal/20 flex items-center justify-center text-vara-teal">
                {pillarIcons[i]}
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
