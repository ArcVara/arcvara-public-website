import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

const moduleIcons = [
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>,
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>,
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
  </svg>,
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
]

const moduleColors = [
  '#1A7FAD', '#1A7FAD', '#00C2CB', '#00C2CB',
  '#00C2CB', '#1A7FAD', '#1A7FAD', '#00C2CB',
]

const moduleNumbers = ['01', '02', '03', '04', '05', '06', '07', '08']
const moduleHighlight = [false, false, false, false, false, false, false, true]

export default function ModulesSection() {
  const { ref, visible } = useScrollReveal()
  const [active, setActive] = useState(null)
  const { t } = useTranslation()
  const items = t('modules.items', { returnObjects: true })

  return (
    <section id="modules" className="py-24 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 animate-on-scroll ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <div className="section-label">{t('modules.sectionLabel')}</div>
          <h2 className="section-title mb-4">
            {t('modules.title1')}{' '}
            <span className="text-gradient">{t('modules.titleGrad')}</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t('modules.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((mod, i) => (
            <div
              key={i}
              className={`card-dark cursor-pointer group relative overflow-hidden transition-all duration-300 ${
                active === i ? 'border-vara-teal/50' : ''
              } ${moduleHighlight[i] ? 'border-vara-teal/20' : ''}`}
              onClick={() => setActive(active === i ? null : i)}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div
                className="absolute top-4 end-4 text-xs font-mono font-semibold opacity-30"
                style={{ color: moduleColors[i] }}
              >
                {moduleNumbers[i]}
              </div>

              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${moduleColors[i]}18`,
                  border: `1px solid ${moduleColors[i]}30`,
                  color: moduleColors[i],
                }}
              >
                {moduleIcons[i]}
              </div>

              <h3 className="font-semibold text-white text-sm mb-1">{mod.name}</h3>
              <div className="text-xs mb-3" style={{ color: `${moduleColors[i]}99` }}>
                {mod.users}
              </div>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: active === i ? '200px' : '0px' }}
              >
                <p className="text-white/55 text-sm leading-relaxed pb-2">{mod.description}</p>
              </div>

              {active !== i && (
                <div className="text-xs text-arc-blue/60 flex items-center gap-1 mt-1">
                  <span>{t('modules.seeDetails')}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}

              {moduleHighlight[i] && (
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
