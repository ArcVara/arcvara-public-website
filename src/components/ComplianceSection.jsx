import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

const frameworkColors = ['#00C2CB', '#00C2CB', '#1A7FAD', '#1A7FAD', '#1A7FAD']

export default function ComplianceSection() {
  const { ref, visible } = useScrollReveal()
  const { t } = useTranslation()
  const frameworks = t('compliance.frameworks', { returnObjects: true })
  const automations = t('compliance.automations', { returnObjects: true })

  return (
    <section id="compliance" className="py-24 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="absolute top-0 right-1/3 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,203,0.04) 0%, transparent 70%)' }}
      />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 animate-on-scroll ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <div className="section-label">{t('compliance.sectionLabel')}</div>
          <h2 className="section-title mb-4">
            {t('compliance.title1')}{' '}
            <span className="text-gradient">{t('compliance.titleGrad')}</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t('compliance.subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {frameworks.map((fw, i) => (
            <div
              key={fw.code}
              className="flex flex-col items-center text-center px-5 py-4 rounded-xl border transition-all duration-300 hover:scale-105"
              style={{
                borderColor: `${frameworkColors[i]}30`,
                background: `${frameworkColors[i]}08`,
              }}
            >
              <div className="font-bold text-sm mb-1" style={{ color: frameworkColors[i] }}>{fw.code}</div>
              <div className="text-white/50 text-xs max-w-[160px] leading-tight">{fw.region}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {automations.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-arc-blue/15 bg-navy-card/60 overflow-hidden"
            >
              <div className="px-6 py-3 border-b border-arc-blue/10 flex flex-wrap gap-3 items-center">
                <span className="text-vara-teal text-xs font-semibold font-mono">{item.framework}</span>
                <span className="text-white/40 text-xs">·</span>
                <span className="text-white/60 text-xs">{item.control}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-arc-blue/10">
                <div className="px-6 py-4">
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/20 inline-block" />
                    {t('compliance.manualLabel')}
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">{item.manual}</p>
                </div>
                <div className="px-6 py-4">
                  <div className="text-xs text-vara-teal uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-vara-teal inline-block" />
                    {t('compliance.automatedLabel')}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.automated}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
