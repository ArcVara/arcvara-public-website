import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Top bar */}
      <div className="border-b border-arc-blue/15 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <img src="/arcvara_logo_compact_dark.svg" alt="Arcvara" className="h-9" />
          </Link>
          <Link
            to="/"
            className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to site
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="section-label mb-4">Legal</div>
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: June 2026</p>

        <div className="prose-legal">

          <Section title="1. Introduction">
            <p>
              Arcvara ("<strong>we</strong>", "<strong>our</strong>", or "<strong>us</strong>") is committed to protecting the
              privacy of individuals who interact with our website and platform. This Privacy Policy explains what information
              we collect, how we use it, and your rights in relation to it.
            </p>
            <p>
              This policy applies to the Arcvara public website (arcvara.io) and any communications you have with us.
              It does not cover data processed within the Arcvara enterprise platform on behalf of our customers —
              that is governed by separate Data Processing Agreements with each customer.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect the following categories of information:</p>
            <SubList items={[
              'Contact information you provide voluntarily — name, business email address, company name, and role — when you register your interest or contact us.',
              'Usage data collected automatically — pages visited, time on page, browser type, and general location (country/city level) — via standard web analytics.',
              'Communications — emails, messages, or form submissions you send to us.',
            ]} />
            <p>
              We do not collect sensitive personal data (e.g. financial details, health information, or national identification numbers)
              through this website.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <SubList items={[
              'Respond to your enquiries and register your interest in the Arcvara platform.',
              'Send you relevant updates about the platform, where you have consented to receive them.',
              'Understand how visitors use our website so we can improve it.',
              'Comply with our legal obligations.',
            ]} />
            <p>
              We will not sell, rent, or share your personal information with third parties for their own marketing purposes.
            </p>
          </Section>

          <Section title="4. Legal Basis for Processing">
            <p>We process your personal information on the following legal bases:</p>
            <SubList items={[
              'Consent — where you have actively submitted a form or opted in to communications.',
              'Legitimate interests — for website analytics and improving our services, where this does not override your rights.',
              'Legal obligation — where we are required to process information by applicable law.',
            ]} />
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain personal information only for as long as necessary for the purposes set out in this policy,
              or as required by applicable law. Contact information submitted through interest registration forms is
              retained for up to 24 months, after which it is deleted or anonymised unless an active relationship exists.
            </p>
          </Section>

          <Section title="6. Data Sharing">
            <p>
              We may share your information with trusted service providers who assist us in operating our website
              and communicating with you (e.g. email delivery providers, analytics platforms). These providers
              are contractually bound to handle your data securely and only for the purposes we specify.
            </p>
            <p>
              We do not transfer personal data outside the country of collection except where appropriate safeguards
              are in place in accordance with applicable data protection law.
            </p>
          </Section>

          <Section title="7. Cookies">
            <p>
              Our website uses cookies and similar technologies to support basic functionality and to understand
              how visitors interact with our content. Analytics cookies are only set with your consent.
              You may withdraw consent or manage cookie preferences at any time through your browser settings.
            </p>
          </Section>

          <Section title="8. Security">
            <p>
              We implement appropriate technical and organisational measures to protect your personal information
              against unauthorised access, loss, or disclosure. However, no method of transmission over the internet
              is completely secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="9. Your Rights">
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict
              processing of your personal information. Please see our{' '}
              <Link to="/data-rights" className="text-vara-teal hover:underline">Data Rights</Link> page for full details
              and how to exercise these rights.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              For any questions about this Privacy Policy or how we handle your personal data, please contact us at:
            </p>
            <p>
              <a href="mailto:jawad.a.almarhoon@gmail.com" className="text-vara-teal hover:underline">
                jawad.a.almarhoon@gmail.com
              </a>
            </p>
          </Section>

        </div>

        <LegalFooter />
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-arc-blue/15">{title}</h2>
      <div className="space-y-3 text-white/65 text-sm leading-relaxed">{children}</div>
    </div>
  )
}

function SubList({ items }) {
  return (
    <ul className="space-y-2 ml-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-vara-teal flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function LegalFooter() {
  return (
    <div className="mt-16 pt-8 border-t border-arc-blue/10 flex flex-wrap gap-6 text-xs text-white/30">
      <Link to="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
      <Link to="/terms" className="hover:text-white/60 transition-colors">Terms & Conditions</Link>
      <Link to="/data-rights" className="hover:text-white/60 transition-colors">Data Rights</Link>
      <span className="ml-auto">© {new Date().getFullYear()} Arcvara</span>
    </div>
  )
}
