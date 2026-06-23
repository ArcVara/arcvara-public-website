import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LegalFooter } from './PrivacyPolicy'

export default function TermsConditions() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const sections = t('legal.terms.sections', { returnObjects: true })

  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="border-b border-arc-blue/15 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to={`/${lang}`}>
            <img src="/arcvara_logo_compact_dark.svg" alt="Arcvara" className="h-9" />
          </Link>
          <Link
            to={`/${lang}`}
            className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('legal.backToSite')}
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="section-label mb-4">{t('legal.legalLabel')}</div>
        <h1 className="text-4xl font-bold text-white mb-2">{t('legal.terms.title')}</h1>
        <p className="text-white/40 text-sm mb-12">{t('legal.lastUpdated')}</p>

        <div className="prose-legal">
          {sections.map((section, i) => (
            <LegalSection key={i} title={section.title}>
              {section.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
              {section.list && <SubList items={section.list} />}
              {section.paragraphsAfter?.map((p, j) => <p key={`a${j}`}>{p}</p>)}
              {i === 6 && (
                <p>
                  <Link to={`/${lang}/privacy-policy`} className="text-vara-teal hover:underline">
                    {t('footer.privacy')}
                  </Link>
                </p>
              )}
              {i === 9 && (
                <p>
                  <a href="mailto:jawad.a.almarhoon@gmail.com" className="text-vara-teal hover:underline">
                    jawad.a.almarhoon@gmail.com
                  </a>
                </p>
              )}
            </LegalSection>
          ))}
        </div>

        <LegalFooter lang={lang} />
      </div>
    </div>
  )
}

function LegalSection({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-arc-blue/15">{title}</h2>
      <div className="space-y-3 text-white/65 text-sm leading-relaxed">{children}</div>
    </div>
  )
}

function SubList({ items }) {
  return (
    <ul className="space-y-2 ms-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-vara-teal flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
