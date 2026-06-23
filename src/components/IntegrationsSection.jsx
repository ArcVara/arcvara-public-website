import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function IntegrationsSection() {
  const { ref, visible } = useScrollReveal()
  const { t } = useTranslation()
  const categories = t('integrations.categories', { returnObjects: true })

  return (
    <section id="integrations" className="py-24 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 animate-on-scroll ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <div className="section-label">{t('integrations.sectionLabel')}</div>
          <h2 className="section-title mb-4">
            {t('integrations.title1')}{' '}
            <span className="text-gradient">{t('integrations.titleGrad')}</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            {t('integrations.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="card-dark"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="text-vara-teal text-xs font-semibold uppercase tracking-wider mb-3">{cat.category}</div>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/55">
                    <span className="w-1 h-1 rounded-full bg-arc-blue/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-white/30 text-sm">
            {t('integrations.footer')}
          </p>
        </div>
      </div>
    </section>
  )
}
