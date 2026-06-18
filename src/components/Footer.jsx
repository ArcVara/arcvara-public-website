import { Link } from 'react-router-dom'

const footerLinks = {
  Platform: [
    { label: 'Business Architecture', href: '#modules' },
    { label: 'Infrastructure & Cloud', href: '#modules' },
    { label: 'API Intelligence', href: '#modules' },
    { label: 'Security & Compliance', href: '#modules' },
    { label: 'All 8 Modules', href: '#modules' },
  ],
  Company: [
    { label: 'About', href: '#team' },
    { label: 'Team', href: '#team' },
    { label: 'Compliance', href: '#compliance' },
    { label: 'Integrations', href: '#integrations' },
  ],
  Contact: [
    { label: 'Register Your Interest', href: '#', isDemo: true },
    { label: 'jawad.a.almarhoon@gmail.com', href: 'mailto:jawad.a.almarhoon@gmail.com' },
    { label: '+966-50-386-8474', href: 'tel:+966503868474' },
    { label: 'GCC · June 2026', href: '#' },
  ],
}

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Data Rights', to: '/data-rights' },
]

export default function Footer({ onDemoClick }) {
  return (
    <footer className="bg-navy-dark border-t border-arc-blue/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="/arcvara_logo_compact_dark.svg"
              alt="Arcvara"
              className="h-8 mb-4"
            />
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              The AI-native Enterprise Architecture Intelligence Platform.
              Connecting business strategy to physical infrastructure.
            </p>
            <a
              href="mailto:jawad.a.almarhoon@gmail.com"
              className="inline-flex items-center gap-2 text-arc-blue/60 hover:text-vara-teal transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
          </div>

          {/* Links */}
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

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-arc-blue/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Arcvara. All rights reserved.
          </p>

          {/* Legal links */}
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
            <span className="text-white/30 text-xs">GCC-First · Global Expansion · June 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
