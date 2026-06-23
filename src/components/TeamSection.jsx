import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

const expertiseIcons = [
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>,
]

export default function TeamSection() {
  const { ref, visible } = useScrollReveal()
  const { t } = useTranslation()
  const expertise = t('team.expertise', { returnObjects: true })
  const credentials = t('team.credentials', { returnObjects: true })

  return (
    <section id="team" className="py-24 bg-navy relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(26,127,173,0.04) 0%, transparent 70%)' }}
      />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 animate-on-scroll ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <div className="section-label">{t('team.sectionLabel')}</div>
          <h2 className="section-title mb-4">
            {t('team.title1')}{' '}
            <span className="text-gradient">{t('team.titleGrad')}</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {expertise.map((item, i) => (
            <div
              key={i}
              className="card-dark group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-vara-teal/10 border border-vara-teal/20 flex items-center justify-center text-vara-teal mb-5 group-hover:border-vara-teal/40 transition-colors">
                {expertiseIcons[i]}
              </div>
              <h3 className="font-semibold text-white mb-3">{item.area}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="border border-arc-blue/15 rounded-2xl px-8 py-6 bg-navy-card/50 backdrop-blur-sm">
          <div className="text-xs text-white/35 uppercase tracking-widest text-center mb-5">
            {t('team.credentialsLabel')}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {credentials.map((cred, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-full border border-arc-blue/20 text-arc-blue/70 bg-arc-blue/5"
              >
                {cred}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/30 text-sm">{t('team.tagline')}</p>
        </div>
      </div>
    </section>
  )
}
