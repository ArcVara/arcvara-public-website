import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'
import GraphBackground from './GraphBackground'

export default function CTASection({ onDemoClick }) {
  const { ref, visible } = useScrollReveal()
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <GraphBackground />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,194,203,0.06) 0%, transparent 60%)' }}
      />

      <div ref={ref} className={`relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center animate-on-scroll ${visible ? 'visible' : ''}`}>
        <div className="section-label">{t('cta.sectionLabel')}</div>
        <h2 className="section-title mb-6">
          {t('cta.title1')}{' '}
          <span className="text-gradient">{t('cta.titleGrad')}</span>
        </h2>
        <p className="section-subtitle max-w-xl mx-auto mb-10">
          {t('cta.subtitle')}
        </p>

        <button
          onClick={onDemoClick}
          className="btn-primary text-lg px-10 py-5"
        >
          {t('cta.button')}
          <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        <p className="text-white/30 text-sm mt-6">{t('cta.tagline')}</p>
      </div>
    </section>
  )
}
