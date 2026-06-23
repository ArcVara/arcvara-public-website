import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer({ onDemoClick }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'

  const platformLinks = t('footer.platformLinks', { returnObjects: true })
  const companyLinks = t('footer.companyLinks', { returnObjects: true })

  const footerLinks = {
    [t('footer.platform')]: [
      { label: platformLinks[0], href: '#modules' },
      { label: platformLinks[1], href: '#modules' },
      { label: platformLinks[2], href: '#modules' },
      { label: platformLinks[3], href: '#modules' },
      { label: platformLinks[4], href: '#modules' },
    ],
    [t('footer.company')]: [
      { label: companyLinks[0], href: '#team' },
      { label: companyLinks[1], href: '#team' },
      { label: companyLinks[2], href: '#compliance' },
      { label: companyLinks[3], href: '#integrations' },
    ],
    [t('footer.contact')]: [
      { label: t('footer.registerInterest'), href: '#', isDemo: true },
      { label: 'jawad.a.almarhoon@gmail.com', href: 'mailto:jawad.a.almarhoon@gmail.com' },
      { label: '+966-50-386-8474', href: 'tel:+966503868474' },
      { label: 'GCC · June 2026', href: '#' },
    ],
  }

  const legalLinks = [
    { label: t('footer.privacy'), to: `/${lang}/privacy-policy` },
    { label: t('footer.terms'), to: `/${lang}/terms` },
    { label: t('footer.dataRights'), to: `/${lang}/data-rights` },
  ]

  return (
    <footer className="bg-navy-dark border-t border-arc-blue/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <img src="/arcvara_logo_compact_dark.svg" alt="Arcvara" className="h-10 mb-4" />
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              {t('footer.tagline')}
            </p>
            <a
              href="mailto:jawad.a.almarhoon@gmail.com"
              className="inline-flex items-center gap-2 text-arc-blue/60 hover:text-vara-teal transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t('footer.getInTouch')}
            </a>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div className="text-white/70 font-semibold text-sm mb-4">{section}</div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.isDemo ? (
                      <button
                        onClick={onDemoClick}
                        className="text-vara-teal text-sm hover:text-vara-teal-light transition-colors"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/45 text-sm hover:text-white/80 transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-arc-blue/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>

          <div className="flex items-center gap-5">
            {legalLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-white/30 text-xs hover:text-white/60 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-vara-teal animate-pulse" />
            <span className="text-white/30 text-xs">{t('footer.statusLine')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
